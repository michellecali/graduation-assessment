window.addEventListener("load", function(){
	function likeToggle(spanID, countID) {
		var count = countID.innerHTML;
		if (spanID.innerHTML === "Like") {
			spanID.innerHTML = "Unlike";
			count++;
			countID.innerHTML = count.toString();
		} else if (spanID.innerHTML === "Unlike") {
			spanID.innerHTML = "Like";
			count--;
			countID.innerHTML = count.toString();
		}
	}

	var likeButton1 = document.getElementById("likeButton1");
	var likeButton2 = document.getElementById("likeButton2");
	var countID1 = document.getElementById("comment1Likes");
	var countID2 = document.getElementById("comment2Likes");

	likeButton1.addEventListener("click", function(){
		likeToggle(likeButton1, countID1);
	});
	likeButton2.addEventListener("click", function(){
		likeToggle(likeButton2, countID2);
	});
});