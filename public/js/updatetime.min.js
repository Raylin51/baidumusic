function count(){
	var t = new Date();
	var cmin = t.getMinutes();
	var minute = cmin % 10;
	document.getElementById("updatetime").innerHTML = minute + "分钟前更新";
};

setInterval("count()");

function update(){
	var time = new Date();
	var min = time.getMinutes();
	var minutes = 9 - (min % 10);
	var second = time.getSeconds();
	var seconds = 59 - second;
	if (seconds < 10){
		document.getElementById("updatetimetwo").innerHTML = '0' + minutes + "分" + '0' + seconds + "秒";
	}
	else{
		document.getElementById("updatetimetwo").innerHTML = '0' + minutes + "分" +  seconds + "秒";
	}
};

setInterval("update()", 1000);