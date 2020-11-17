import argparse
import csv
import json
import re
from typing import Dict, List, Optional
from os.path import dirname, join

DEFAULT_DIALOG_SILL_NAME: str = "New Dialog Skill"
DEFAULT_WELCOME_MSG: str = "Welcome!"
DEFAULT_LINE_BREAK: str = "\n"

_EXAMPLE_FILE_COLUMNS = 3
_EXAMPLE_FILE_EXAMPLE_COL = _EXAMPLE_FILE_COLUMNS-1
_EXAMPLE_FILE_INTENT_COL = 0

def parse_examples(i_q_a_examples: List[str]) -> Dict:

    result: Dict = {}

    for l in i_q_a_examples:
        assert len(l) == _EXAMPLE_FILE_COLUMNS, f"Invalid line, size: {len(l)}, content: {l}"
        
        examples = list(filter(lambda s: s, l[_EXAMPLE_FILE_EXAMPLE_COL].split(sep=DEFAULT_LINE_BREAK)))
        if len(examples) == 0:
            print(f"Skipping line without examples {l}")
            continue

        i = l[_EXAMPLE_FILE_INTENT_COL]
        if i and examples:
            result[i] = examples

    return result

def clean_str(s: str) -> str:
    return re.sub("[\?,\¿]", "", s).strip()


def format_answer(s: str) -> str:
    return re.sub("\r\n", DEFAULT_LINE_BREAK, s).strip()


def create_intent(intent_name, examples: List[str]) -> Dict:
    return {
        "intent": intent_name,
        "examples": [ {"text": clean_str(example)} for example in examples]
    }


def create_dialog_node(intent_name: str, answer: str, prev: str, dialog_node_prefix: str = "node_") -> Dict:
    n = {
        "type": "standard",
        "output": {
            "text": {
                "values": [format_answer(answer)]
            }
        },
        "conditions": f"#{intent_name}",
        "dialog_node": f"{dialog_node_prefix}{intent_name}",
    }
    if prev:
        n["previous_sibling"] = prev
    return n


def create_welcome(welcome_msg: str) -> Dict:
    return {
        "type": "standard",
        "title": "Welcome",
        "output": {
            "generic": [
                {
                    "values": [
                        {
                            "text": welcome_msg
                        }
                    ],
                    "response_type": "text",
                    "selection_policy": "sequential"
                }
            ]
        },
        "conditions": "welcome",
        "dialog_node": "node_welcome"
    }


def parse_lines(
    q_and_a: List[str], 
    dialog_skill_name: str, 
    welcome_message:str,
    examples:Optional[Dict[str,List[str]]] = None, 
    question_as_foreign_key:bool = False) -> Dict:

    intents: List[Dict] = []
    dialog_nodes: Dict = {}

    w_node: Dict = create_welcome(welcome_message)
    prev: str = w_node["dialog_node"]
    dialog_nodes[prev] = w_node

    for l in q_and_a:
        assert len(l) == 3, f"Invalid line {l}"
        i: str = l[0]
        q: str = l[1]
        a: str = l[2]

        foreign_key: str = q if question_as_foreign_key else i
        i_examples:List[str] = [q]
        if examples and foreign_key in examples:
            examples[foreign_key].append(q)
            i_examples = examples[foreign_key]
        else:
            i_examples = [q]

        intent = create_intent(i, i_examples)
        node = create_dialog_node(i, a, prev)
        n_id = node["dialog_node"]

        if dialog_nodes.get(n_id):
            print(f"Duplicated {n_id} node!")
            continue

        intents.append(intent)
        dialog_nodes[n_id] = node
        prev = n_id

    return {
        "name": dialog_skill_name,
        "language": "en",
        "description": dialog_skill_name,
        "intents": intents,
        "dialog_nodes": list(dialog_nodes.values())
    }


def main(
    input_file_name: str, 
    dialog_skill_name: str, 
    welcome_message:str = DEFAULT_WELCOME_MSG,
    output_file_name: Optional[str] = None, 
    examples_file_name: Optional[str] = None,
    question_as_foreign_key: bool = False):

    if examples_file_name:
        with open(examples_file_name, newline="", encoding="utf-8-sig") as f:
            reader = csv.reader(f, delimiter=";")
            i_q_a_examples: List[str] = list(reader)
        examples_per_intent: Dict = parse_examples(i_q_a_examples)
    else:
        examples_per_intent = None

    with open(input_file_name, newline="", encoding="utf-8-sig") as f:
        reader = csv.reader(f, delimiter=";")
        q_and_a: List[str] = list(reader)
    dialog_skill_contents: Dict = parse_lines(
        q_and_a, 
        dialog_skill_name, 
        welcome_message=welcome_message, 
        examples=examples_per_intent, 
        question_as_foreign_key=question_as_foreign_key)

    if not output_file_name:
        input_file_path = dirname(input_file_name)
        output_file_name = join(input_file_path, f"{input_file_name}_dialog_skill.json")

    with open(output_file_name, "w") as out:
        json.dump(dialog_skill_contents, out, indent=2, ensure_ascii=False)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generates a JSON file with a Watson Assistant Dialog Skill representation")
    parser.add_argument(
        "input_file_name",
        help="CSV file with the format `intent; question; answer`",
    )
    parser.add_argument(
        "-d", "--dialog_skill_name",
        help=f"Name to be assigned to the Dialog Skill. Defaults to \"{DEFAULT_DIALOG_SILL_NAME}\"",
        required=False, default=DEFAULT_DIALOG_SILL_NAME
    )
    parser.add_argument(
        "-w", "--welcome_message",
        help=f"Message for the welcome node. Defaults to \"{DEFAULT_WELCOME_MSG}\"",
        required=False, default=DEFAULT_WELCOME_MSG
    )
    parser.add_argument(
        "-o", "--output_file_name",
        help="Output file name. Defaults to \"{input_file_name}_dialog_skill.json\"",
        required=False
    )
    parser.add_argument(
        "-e", "--examples_file_name",
        help="CSV file with the format `intent; question; answer; examples`, where examples is a string with examples separated by `\\n`",
        required=False
    )
    parser.add_argument(
        "-q", "--question_as_foreign_key", action="store_true",
        help="Wether to use `question` as key to link input and example files. Defaults to `intent`, which requires the example file to include the intent as the first column/value",
        required=False
    )
    args = parser.parse_args()

    main(
        args.input_file_name, 
        args.dialog_skill_name, 
        welcome_message=args.welcome_message,
        output_file_name=args.output_file_name, 
        examples_file_name=args.examples_file_name,
        question_as_foreign_key=args.question_as_foreign_key
    )
    