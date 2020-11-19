import argparse
import csv
import json
import re
from typing import List, Optional
from os.path import dirname, join

from wa_v1.dialog_skill_contract import DialogSkillHelper, DialogNode

DEFAULT_DIALOG_SILL_NAME: str = "New Dialog Skill"
DEFAULT_WELCOME_MSG: str = "Welcome!"

DEFAULT_LINE_BREAK: str = "\n"


def fill_dialog_skill_with_q_and_a(helper: DialogSkillHelper, q_and_a: List[str]):

    for l in q_and_a:
        if len(l) != 5:
            print(f"Invalid line: len={len(l)}, value={l}")
            continue
        f: Optional[str] = l[0].strip() or None
        i: str = l[1]
        q: str = l[2]
        a: str = l[3]
        e: List[str] = list(filter(lambda s: s, l[4].split(sep=DEFAULT_LINE_BREAK)))
        e.append(q)

        if i and q and a:
            if f:
                helper.add_folder_node(f)
            helper.add_intent(i, e)
            helper.add_standard_node(i, a, folder=f)
        else:
            print(f"Missing fields in line {l}")


def main(
    input_file_names: List[str], 
    dialog_skill_name: str, 
    welcome_message:str = DEFAULT_WELCOME_MSG,
    output_file_name: Optional[str] = None):

    helper: DialogSkillHelper = DialogSkillHelper(dialog_skill_name, welcome_message)

    for i in input_file_names:
        with open(i, newline="", encoding="utf-8-sig") as f:
            reader = csv.reader(f, delimiter=";")
            q_and_a: List[str] = list(reader)
            fill_dialog_skill_with_q_and_a(helper, q_and_a)

    if not output_file_name:
        input_file_path = dirname(input_file_names[0])
        output_file_name = join(input_file_path, "dialog_skill.json")

    with open(output_file_name, "w") as out:
        json.dump(helper.d, out, indent=2, ensure_ascii=False)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generates a JSON file with a Watson Assistant Dialog Skill representation")
    parser.add_argument(
        "-i", "--input_file", 
        action="append",
        help="CSV files with the format `folder; intent; question; answer`. Folder value is optional.",
        required=True
    )
    parser.add_argument(
        "-d", "--dialog_skill_name",
        help=f"Name to be assigned to the Dialog Skill. Defaults to \"{DEFAULT_DIALOG_SILL_NAME}\"",
        default=DEFAULT_DIALOG_SILL_NAME
    )
    parser.add_argument(
        "-w", "--welcome_message",
        help=f"Message for the welcome node. Defaults to \"{DEFAULT_WELCOME_MSG}\"",
        default=DEFAULT_WELCOME_MSG
    )
    parser.add_argument(
        "-o", "--output_file_name",
        help="Output file name. Defaults to \"dialog_skill.json\""
    )
    args = parser.parse_args()

    main(
        args.input_file, 
        args.dialog_skill_name, 
        welcome_message=args.welcome_message,
        output_file_name=args.output_file_name, 
    )
