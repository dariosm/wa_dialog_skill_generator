import sys
import json
from functools import reduce
import re

def create_intent(example) -> dict:
    i = str(hash(example))
    return {
        "intent": i,
        "examples": [{"text": example}]
    }

def create_dialog_node(intent: str, answer: str, prev:str) -> dict:
    n = {
      "type": "standard",
      "output": {
        "text": {
          "values": [answer]
        }
      },
      "conditions": f"#{intent}",
      "dialog_node": f"node_{intent}",
    }
    if prev:
        n["previous_sibling"] = prev
    return n

def create_welcome():
    return     {
      "type": "standard",
      "title": "Welcome",
      "output": {
        "generic": [
          {
            "values": [
              {
                "text": "Welcome to Voluntarito"
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


def clean_str(str_in) -> str:
    if isinstance(str_in, list):
        str_in = reduce(lambda i,j: f"{i} {j}", str_in)
    elif isinstance(str_in, dict):
        return clean_str(str_in["#text"]) if "#text" in str_in else None
    str_in = str_in.replace("\xa0", "").replace("\n", "").strip()
    return re.sub(' +', ' ', str_in)

def parse_file(file_name: str, d_skill_name: str, desc:str = None):

    intents = []
    dialog_nodes = {}

    w_node = create_welcome()
    prev = w_node["dialog_node"]
    dialog_nodes[prev] = w_node

    with open(file_name, 'r') as j:
        json_data = json.load(j)

        for li in json_data["ul"]["li"]:
            q = clean_str(li["button"]["div"]["#text"])
            a = clean_str(li["div"]["p"])
            if not a or not a:
                print(f"skipping missing q({q}) or a({a})")
                continue
            i = create_intent(q)
            n = create_dialog_node(i["intent"], a, prev)
            n_id = n["dialog_node"]

            if dialog_nodes.get(n_id):
                print(f"duplicated node: {n_id}")
                continue

            intents.append(i)
            dialog_nodes[n_id] = n
            prev = n_id
        
    d_skill = {
        "name": d_skill_name,
        "language": "en",
        "description": desc if desc else d_skill_name,
        "intents": intents,
        "dialog_nodes": list(dialog_nodes.values())
    }
    with open(f"{file_name}_dialog_skill.json", "w") as out:
        json.dump(d_skill, out, indent=2)


if __name__ == "__main__":
    parse_file(sys.argv[1], "Voluntarito")
