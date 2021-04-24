let randomColor = document.getElementById('randomColor');

function changeColor() {
    let body = document.querySelector('html');
    let background = `rgb(${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`;
    body.style.background = background;
    body.style.transition = 'background 0.6s ease';
    randomColor.value = background;
}


function copyTextFunction() {
  var copyText = document.getElementById("randomColor");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  // alert("Copied the text: " + copyText.innerText);
  showCopy();
}

function showCopy(){
	// document.getElementById("copyTextDiv").style.animationName='show';
	document.getElementById('copyTextDiv').style.opacity = '1';
	document.getElementById('copyTextDiv').style.top = '80%';
	// document.getElementById("randomColor").style.opacity = '1';
	setTimeout(function hideShowCopy(){
		document.getElementById('copyTextDiv').style.opacity = '0';
		document.getElementById('copyTextDiv').style.top = '70%';	
	},2000);
}

// function hideShowCopy(){
// 	document.getElementById('copyTextDiv').style.opacity = '0';
// 	document.getElementById('copyTextDiv').style.top = '65%';	
// }
