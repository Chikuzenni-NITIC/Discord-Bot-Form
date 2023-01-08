from flask import Flask, render_template, request,abort
import os
import requests
import json
url_items=os.environ["WEBHOOK_URL"]

app = Flask(__name__,static_folder='static')

@app.route('/', methods = ["GET" , "POST"]) #2 GETとPOSTをリクエストできるようにする
def index():
    if request.method == 'POST': #3POSTの処理
        text = request.form["message"] #4 formのname属性を取得
        file_form = request.files["file"] 
        filename = file_form.filename
        
        item_data = {
            "username": "匿名さん",
            "avatar_url": "https://thumb.ac-illust.com/89/89e6bfc83866f18e36bd905fe9a07ea2_t.jpeg",
            "content": text,
        }

        if filename:
            data = {
                "payload_json": json.dumps(item_data)
            }
            files = {
                "attachment": (filename, file_form.read())
            }
            headers = None
        else:
            data = json.dumps(item_data)
            files = None
            headers={
                "Content-Type": "application/json"
            }

        requests.post(url_items, data, headers=headers, files=files)
        return render_template('success.html') #5 受付完了画面
    return render_template('index.html') #6 GETの処理

if __name__ == '__main__':
    app.run(host = '0.0.0.0', port = 80)
