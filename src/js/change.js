function changeone(){
	document.getElementsByClassName('listleft')[0].id = "";
	document.getElementsByClassName('listmiddle')[0].id = "";
	document.getElementsByClassName('listright')[0].id = "";
	document.getElementsByClassName('listleft')[0].id = "focus";
	document.getElementsByClassName('title')[0].style.display = "";
	document.getElementsByClassName('title')[1].style.display = "";
	document.getElementsByClassName('title')[2].style.display = "";
	document.getElementById("first").style.display = "block";
};

function changetwo(){
	document.getElementsByClassName('listleft')[0].id = "";
	document.getElementsByClassName('listmiddle')[0].id = "";
	document.getElementsByClassName('listright')[0].id = "";
	document.getElementsByClassName('listmiddle')[0].id = "focus";
	document.getElementsByClassName('title')[0].style.display = "";
	document.getElementsByClassName('title')[1].style.display = "";
	document.getElementsByClassName('title')[2].style.display = "";
	document.getElementById("second").style.display = "block";
};

function changethree(){
	document.getElementsByClassName('listitems')[0].id = "none";
	document.getElementsByClassName('listitems')[1].id = "none";
	document.getElementsByClassName('listitems')[2].id = "none";
	document.getElementsByClassName('listright')[0].id = "focus";
	document.getElementsByClassName('title')[0].style.display = "none";
	document.getElementsByClassName('title')[1].style.display = "none";
	document.getElementsByClassName('title')[2].style.display = "none";
	document.getElementById("third").style.display = "block";
};