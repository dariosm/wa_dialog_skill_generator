Watson Assistant Dialog Skill Generator

This script generates a `json` file with the contents of a Dialog Skill, based on Q&A data. The purpose is to automatically create a Dialog Skill for further tunning, developing and training.

The data source for the script are:
- a `csv` file containing the Q&A data. Expected format for this file is `intent; question; answer` (`;` is the actual required separator).

Example:
```
what_is_a_dialog_skill; What is a Watson Assistant Dialog Skill?; A Watson Assistant Dialog Skill is a...
what_is_an_assistant; What is a Assistant?; An Assistant is a powerful tool that can be linked to a Dialog Skill...
```

- an optional `csv` file containing additional `intent` examples (besides the "question" from the mandatory file). Expected format is: `question|intent; "example1\n example2\n ...\n example_d"` (spaces between examples are not required). 
First column can be either an `intent` or a `question` (for all the lines, you can't mix intents and questions), matching exactly the ones in the Q&A file. 

Example:
```
what_is_a_dialog_skill; "What is a WA Dialog?\n What's a dialog skill\n ..."
```

Usage: please run `python csv2dialog_skill.py -h` for help.
