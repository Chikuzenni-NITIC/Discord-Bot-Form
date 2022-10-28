// 選択された画像をプレビューする
document.getElementById('input_img').addEventListener('change', function (e) {
    const file = e.target.files[0]
    const blobUrl = window.URL.createObjectURL(file)
	const imgForm = document.querySelector(".img_label_style")
	const imgView = document.querySelector(".img_selected")
	const imgViewCont = document.querySelector(".img_selected_container")
	imgView.src = blobUrl
	imgForm.classList.toggle("disable")
	imgViewCont.classList.toggle("disable")
})

// 画像の選択を取り消す
document.querySelector(".cancel").addEventListener('click', function (e) {
	const imgForm = document.querySelector(".img_label_style")
	const imgView = document.querySelector(".img_selected")
	const imgViewCont = document.querySelector(".img_selected_container")
	const inputFile = document.getElementById('img')
	imgForm.classList.toggle("disable")
	imgViewCont.classList.toggle("disable")
	imgView.src = ""
	inputFile.value = ""
})

function fileChange(){
	var file = document.getElementById('input_img')
	var form = new FormData()
	form.append("image", file.files[0])
	
	var settings = {
		"url": "https://api.imgbb.com/1/upload?key=213d6847f2629e881a2617ae2fdf1c25",
		"method": "POST",
		"timeout": 0,
		"processData": false,
		"mimeType": "multipart/form-data",
		"contentType": false,
		"data": form
	}
	
	
	$.ajax(settings).done(function (response) {
		console.log(response)
		var jx = JSON.parse(response)
		console.log(jx.data.url)
	})
}

document.querySelector(".question").addEventListener('submit', function (e) { 
	const imgInput = document.getElementById('input_img')
	if (imgInput.files.length) {
		fileChange()
	}
})