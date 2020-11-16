from flask import Flask, render_template
app = Flask(__name__)

def load_html(html_file_name) -> str:
    with open(html_file_name, "r") as f:
        return f.read()

@app.route("/")
def home():
   return render_template("bot_snippet.html")

@app.route("/ibm-volunteers")
def volunteers():
   return render_template("ibmvolun.html")

if __name__ == "__main__":
   app.run()