Watson Assistant Dialog Skill Generator

This script produces a `json` with the entire Dialog Skill contents, based on two files:
- a `csv` file containing a Q&A: format for this file must be `intent; question; answer` (`;` is the actual required separator)
- an optional `csv` file containing more `intent` examples (besides the "question" from the mandatory file) to train the `intents`. Format in this case must be `question|intent; "example1\nexample2\n...\nexample_d"`.

Usage: please run `python csv2dialog_skill.py -h` for help.
