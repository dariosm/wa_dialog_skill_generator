from flask import Flask, render_template
import argparse

app = Flask(__name__)

def load_html(html_file_name) -> str:
    with open(html_file_name, "r") as f:
        return f.read()

@app.route("/")
def home():
   return render_template("index.html", **ctx)

if __name__ == "__main__":
   parser = argparse.ArgumentParser(description="HTTP Server to test WA Web integration")
   parser.add_argument("-i", "--integration_id", required=True)
   parser.add_argument("-r", "--region", required=True)
   parser.add_argument("-s", "--service_instance_id", required=True)
   args = parser.parse_args()

   ctx = {
      "integration_id": args.integration_id,
      "region": args.region,
      "service_instance_id": args.service_instance_id
   }

   app.run()