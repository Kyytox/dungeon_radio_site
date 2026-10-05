import re
import pandas as pd
from flask import Flask, render_template, url_for

app = Flask(__name__)


# def get_data_content(file_name):
#     data = pd.read_csv(f"./static/data/{file_name}.csv")
#
#     if "blog" in file_name:
#         # remove Date column
#         data = data.drop(columns=["Date"])
#
#         # renverser l'order de la df
#         data = data[::-1]
#
#     return data.to_dict("records")


def get_data_content(file_name, sheet_name=0):
    # Lecture du xlsx (sheet passée en param, 1ère ligne = noms de colonnes)
    data = pd.read_excel(
        f"./static/data/{file_name}.xlsx",
        sheet_name=sheet_name,
        header=0,  # première ligne = noms des colonnes
    )

    if "blog" in file_name:
        # remove Date column
        data = data.drop(columns=["Date"])

        # renverser l'order de la df
        data = data.iloc[::-1]

    return data.to_dict("records")


def convert_text_to_list(text):
    # Regular expression to identify the text between << >>
    pattern = r"<<(.*?)>>"

    # Find all matches
    matches = list(re.finditer(pattern, text))

    # init list
    segments = []
    last_end = 0

    for match in matches:
        image_name = match.group(1)
        start, end = match.span()
        # Add the text before the image tag
        segments.append(text[last_end:start].strip())
        # Add the image tag
        segments.append(f"<<{image_name}>>")
        last_end = end

    # Add the remaining text after the last image tag
    segments.append(text[last_end:].strip())

    return segments


def convert_image_refs_to_html(text):
    # Regular expression to identify the text between << >>
    pattern = r"<<(.*?)>>"

    # Convert the text to a list
    text_list = convert_text_to_list(text)

    # Replacement function
    def replace_with_img_tag(match):
        image_name = match.group(1)
        return f'<img src="/static/images/{image_name}" alt="{image_name}" class="img-blog">'

    # Replace the image references with HTML img tags
    for text in text_list:
        if text.startswith("<<"):
            # update the text in the list
            text_list[text_list.index(text)] = re.sub(
                pattern, replace_with_img_tag, text
            )

    return text_list


@app.route("/")
def index():

    # Content Blog
    data_releases = get_data_content("content_site", 0)
    # print("data_releases", data_releases)

    data_artists = get_data_content("content_site", 1)
    # print("data_artists", data_artists)

    # Convert image references in content
    # for post in data_blog:
    # post["Text"] = convert_image_refs_to_html(post["Text"])

    return render_template(
        "index.html",
        releases=data_releases,
        artists=data_artists,
        # events_data=data_events,
        # releases_data=data_releases,
    )


@app.route("/blog")
def blog():
    data_blog = get_data_content("content_blog")

    # Convert image references in content
    for post in data_blog:
        if "Text" in post:
            post["Text"] = convert_image_refs_to_html(post["Text"])

    return render_template("blog.html", blog_data=data_blog)


@app.route("/releases")
def releases():
    data_releases = get_data_content("content_releases")
    return render_template("releases.html", releases_data=data_releases)


@app.route("/events")
def events():
    data_events = get_data_content("content_events")
    return render_template("events.html", events_data=data_events)


@app.route("/artists")
def artists():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("index.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


if __name__ == "__main__":
    app.run(debug=True)
