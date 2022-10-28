from flask import Flask, render_template, request,abort
import os
import requests
url_items=os.environ["WEBHOOK_URL"]
headers={"Content-Type": "application/json"}

app = Flask(__name__,static_folder='static')

@app.route('/', methods = ["GET" , "POST"]) #2 GETとPOSTをリクエストできるようにする
def index():
    if request.method == 'POST': #3POSTの処理
        print(request.form) #4 formのname属性を取得
        print(request.form['image']) #4 formのname属性を取得
        text=request.form["message"]+"/r"+request.form['image']
        item_data = {
        "username": "匿名さん",
        "avatar_url": "https://thumb.ac-illust.com/89/89e6bfc83866f18e36bd905fe9a07ea2_t.jpeg",
        "content": text,}
        requests.post(url_items, headers=headers, json=item_data)
        return render_template('success.html') #5 受付完了画面
    return render_template('index.html') #6 GETの処理

if __name__ == '__main__':
    app.run(host = '0.0.0.0', port = 80, debug=True)
