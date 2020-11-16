import csv
import json
import re
from typing import Dict, List, Optional
import sys

DEFAULT_DIALOG_SILL_NAME: str = "Voluntarito"
DEFAULT_WELCOME_MSG: str = "Bienvenido a Voluntarito!"
DEFAULT_LINE_BREAK: str = "<br>"


def clean_str(s: str) -> str:
    return re.sub("[\?,\¿]", "", s).strip()


def format_answer(s: str) -> str:
    return re.sub("\r\n", DEFAULT_LINE_BREAK, s).strip()


def create_intent(intent_name, example) -> Dict:
    return {
        "intent": intent_name,
        "examples": [{"text": clean_str(example)}]
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


def create_welcome(welcome_msg: Optional[str] = DEFAULT_WELCOME_MSG) -> Dict:
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


def parse_lines(q_and_a: List[str], dialog_skill_name: str) -> Dict:
    intents: List[Dict] = []
    dialog_nodes: Dict = {}

    w_node: Dict = create_welcome()
    prev: str = w_node["dialog_node"]
    dialog_nodes[prev] = w_node

    for l in q_and_a:
        assert len(l) == 3, f"Invalid line {l}"
        i: str = l[0]
        q: str = l[1]
        a: str = l[2]

        intent = create_intent(i, q)
        node = create_dialog_node(i, a, prev)
        n_id = node["dialog_node"]

        if dialog_nodes.get(n_id):
            print(f"duplicated node: {n_id}")
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


def main(input_file_name: str, dialog_skill_name: str, output_file_name: Optional[str] = None):
    with open(input_file_name, newline="", encoding="utf-8-sig") as f:
        reader = csv.reader(f, delimiter=";")
        q_and_a: List[str] = list(reader)

    dialog_skill_contents: Dict = parse_lines(q_and_a, dialog_skill_name)
    if not output_file_name:
        output_file_name = f"{input_file_name}_dialog_skill.json"

    with open(output_file_name, "w") as out:
        json.dump(dialog_skill_contents, out, indent=2, ensure_ascii=False)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Required input file name. Optional dialog skill name")
        exit(1)
    input_file_name: str = sys.argv[1]
    dialog_skill_name: str = sys.argv[2] if len(
        sys.argv) > 2 else DEFAULT_DIALOG_SILL_NAME
    main(input_file_name, dialog_skill_name)
