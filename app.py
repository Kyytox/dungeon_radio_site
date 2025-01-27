import pandas as pd
from flask import Flask, render_template

app = Flask(__name__)


def get_data_content(file_name):
    data = pd.read_csv(f"./static/data/{file_name}.csv")
    return data.to_dict("records")


@app.route("/")
def index():
    data_blog = get_data_content("content_blog")
    data_events = get_data_content("content_events")
    data_releases = get_data_content("content_releases")
    return render_template(
        "index.html",
        blog_data=data_blog,
        events_data=data_events,
        releases_data=data_releases,
    )


@app.route("/blog")
def blog():
    data_blog = get_data_content("content_blog")
    return render_template("blog.html", blog_data=data_blog)


@app.route("/releases")
def releases():
    data_releases = get_data_content("content_releases")
    return render_template("releases.html", releases_data=data_releases)


@app.route("/events")
def events():
    data_events = get_data_content("content_events")
    return render_template("events.html", events_data=data_events)


# @app.route("/contact")
# def contact():
#     return render_template("contact.html")


if __name__ == "__main__":
    app.run(debug=True)
