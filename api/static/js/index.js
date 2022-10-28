document.getElementById('img').addEventListener('change', function (e) {
    // 1枚だけ表示する
    const file = e.target.files[0];

    // ファイルのブラウザ上でのURLを取得する
    const blobUrl = window.URL.createObjectURL(file);

    // img要素に表示
	const imgForm = document.querySelector(".img_label_style")
	imgForm.classList.toggle("disable")
	const imgView = document.querySelector(".img_selected_img")
	const imgViewCont = document.querySelector(".img_selected")
	imgView.src = blobUrl
	imgViewCont.classList.toggle("disable")
})
document.querySelector(".cancel").addEventListener('click', function (e) {
	const imgForm = document.querySelector(".img_label_style")
	const imgViewCont = document.querySelector(".img_selected")
	imgForm.classList.toggle("disable")
	imgViewCont.classList.toggle("disable")
})