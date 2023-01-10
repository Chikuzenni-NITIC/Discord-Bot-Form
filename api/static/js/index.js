// 選択された画像をプレビューする
document.getElementById('input_img').addEventListener('change', function (e) {
    const file = e.target.files[0]
	const blobUrl = window.URL.createObjectURL(file)
	const imgForm = document.querySelector(".img_label_style")
	const imgView = document.querySelector(".img_selected")
	const imgViewCont = document.querySelector(".img_selected_container")
	imgView.src = blobUrl
	imgForm.classList.add("disable")
	imgViewCont.classList.remove("disable")
})

// 画像の選択を取り消す
document.querySelector(".cancel").addEventListener('click', function (e) {
	const imgForm = document.querySelector(".img_label_style")
	const imgView = document.querySelector(".img_selected")
	const imgViewCont = document.querySelector(".img_selected_container")
	const inputFile = document.getElementById('input_img')
	imgForm.classList.remove("disable")
	imgViewCont.classList.add("disable")
	imgView.src = ""
	inputFile.value = null
})

