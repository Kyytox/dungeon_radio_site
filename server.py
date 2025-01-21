from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/blog")
def blog():
    return render_template("blog.html")


@app.route("/releases")
def releases():
    return render_template("releases.html")


@app.route("/events")
def events():
    return render_template("events.html")


# @app.route("/contact")
# def contact():
#     return render_template("contact.html")


if __name__ == "__main__":
    app.run(debug=True)
