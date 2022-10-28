from flask import Flask, render_template, request,abort
import os
import requests
url_items=os.environ["WEBHOOK_URL"]
headers={"Content-Type": "application/json"}

app = Flask(__name__)

@app.route('/', methods = ["GET" , "POST"]) #2 GETとPOSTをリクエストできるようにする
def index():
    if request.args.get("TOKEN")!=os.environ["access_token"]:
        abort(403)
    if request.method == 'POST': #3POSTの処理
        text = request.form['message'] #4 formのname属性を取得
        item_data = {
        "username": "匿名さん",
        "avatar_url": "https://thumb.ac-illust.com/89/89e6bfc83866f18e36bd905fe9a07ea2_t.jpeg",
        "content": text,}
        requests.post(url_items, headers=headers, json=item_data)
        return render_template('done.html') #5 受付完了画面
    return render_template('index.html') #6 GETの処理

#if __name__ == '__main__':
    #app.run(host = '0.0.0.0', port = 50000, debug=True)
