// 選択された画像をプレビューする
document.getElementById('img').addEventListener('change', function (e) {
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);
	const imgForm = document.querySelector(".img_label_style")
	const imgView = document.querySelector(".img_selected_img")
	const imgViewCont = document.querySelector(".img_selected")
	imgView.src = blobUrl
	imgForm.classList.toggle("disable")
	imgViewCont.classList.toggle("disable")
})

// 画像の選択を取り消す
document.querySelector(".cancel").addEventListener('click', function (e) {
	const imgForm = document.querySelector(".img_label_style")
	const imgView = document.querySelector(".img_selected_img")
	const imgViewCont = document.querySelector(".img_selected")
	imgForm.classList.toggle("disable")
	imgViewCont.classList.toggle("disable")
	imgView.src = ""
})