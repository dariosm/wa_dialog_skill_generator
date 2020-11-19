from os import stat
import re
from typing import Dict, List, Optional, Set, TypedDict

## Helper format functions ##
DEFAULT_LINE_BREAK: str = "\n"
def _clean_str(s: str) -> str:
    return re.sub("[\?,\¿]", "", s).strip()

def _format_answer(s: str) -> str:
    return re.sub("\r\n", DEFAULT_LINE_BREAK, s).strip()

def _format_id(s: str, prefix:str = None) -> str:
    if prefix:
        s = f"{prefix}{s}"
    return s.replace(" ","_").strip()

## WA V1 Contract ##

class IntentExample(TypedDict):
    text: str

class Intent(TypedDict):
    intent: str
    examples: List[IntentExample]


class TextValues(TypedDict):
    values: List[str]

class GenericValues(TypedDict):
    values: List[Dict]
    response_type: str
    selection_policy: str

class DialogNodeOutput(TypedDict, total=False):
    text: TextValues
    generic: List[GenericValues]

class DialogNode(TypedDict, total=False):
    type: str
    title: str
    output: DialogNodeOutput
    conditions: str
    dialog_node: str
    previous_sibling: Optional[str]
    parent: Optional[str]

class DialogSkill(TypedDict):
    name: str
    description: str
    language: str
    intents: List[Intent]
    dialog_nodes: List[DialogNode]


## Main helper class to work with Dialog Skills ##

class DialogSkillHelper():

    @staticmethod
    def create_dialog_skill(name: str) -> DialogSkill:
        d: DialogSkill = {
            "name": name,
            "description": name,
            "language": "es",
            "intents": [],
            "dialog_nodes": []
        }
        return d

    @staticmethod
    def create_welcome_node(welcome_msg: str) -> DialogNode:
        w_node: DialogNode = {
            "type": "standard",
            "title": "Welcome",
            "conditions": "welcome",
            "dialog_node": "node_welcome",
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
        }
        return w_node

    def __init__(self, dialog_skill_name:str, welcome_msg:str):

        self.d: DialogSkill = self.create_dialog_skill(dialog_skill_name)
        
        w_node: DialogNode = self.create_welcome_node(welcome_msg)      
        self.d["dialog_nodes"].append(w_node)
        welcome_node = w_node["dialog_node"]

        self.folders: Dict = {}
        self.prev_node: str = welcome_node
        self.prev_folder: str = welcome_node

    def add_intent(self, intent_name, examples: List[str]) -> Intent:
        clean_examples: Set[str] = set([ _clean_str(e) for e in examples]) # clean example and removes duplicates
        i_examples: List[IntentExample] = [{"text": clean_e} for clean_e in clean_examples if clean_e] # skips empty examples and format dict
        i: Intent = {
            "intent": intent_name.strip(),
            "examples": i_examples
        }
        self.d["intents"].append(i)
        return i

    def add_standard_node(self, intent_name: str, answer: str, dialog_node_prefix: str = "node_", folder: str = None) -> DialogNode:
        n: DialogNode = {
            "type": "standard",
            "output": {
                "text": {
                    "values": [_format_answer(answer)]
                }
            },
            "conditions": _format_id(f"#{intent_name}"),
            "dialog_node": _format_id(intent_name, prefix=dialog_node_prefix)
        }
        if self.prev_node:
            n["previous_sibling"] = self.prev_node # already formatted
        if folder:
            n["parent"] = _format_id(folder)
        self.d["dialog_nodes"].append(n)
        self.prev_node = n["dialog_node"]

        return n

    def add_folder_node(self, folder_name: str) -> DialogNode:
        folder_name = _format_id(folder_name)
        if folder_name in self.folders:
            return self.folders[folder_name]

        f: DialogNode = {
            "type": "folder",
            "title": folder_name,
            "dialog_node": folder_name,
            "previous_sibling": self.prev_folder
        }
        self.d["dialog_nodes"].append(f)
        self.folders[folder_name] = f
        self.prev_folder = f["dialog_node"]
        self.prev_node = None

        return f

    def get_last_dialog_node(self) -> Optional[str]:
        if len(self.d["dialog_nodes"])==0:
            return None
        else:
            return self.d["dialog_nodes"][0]["dialog_node"]

