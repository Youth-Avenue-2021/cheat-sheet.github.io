let randomColor = document.getElementById('randomColor');
let addColors=document.getElementById('addColors');
let arr=[];

var firstNumber=221;
var secondNumber=248;
var thirdNumber=227;

function changeColor() {
    let body = document.querySelector('html');
    firstNumber=parseInt(Math.random() * 255);
    secondNumber=parseInt(Math.random() * 255);
    thirdNumber=parseInt(Math.random() * 255);
    let background = `rgb(${firstNumber},${secondNumber},${thirdNumber})`;
    document.getElementById('first-section-color').style.background = background;
    document.getElementById('first-section-color').style.transition = 'background 0.6s ease';
    randomColor.value = background;
}




function copyTextFunction() {
	var copyText = document.getElementById("randomColor");
	copyText.select();
	// copyText.setSelectionRange(0, 99999);
	document.execCommand("copy");
	// alert("Copied the text: " + copyText.innerText);
	showCopy();
	arr.push(copyText.value);
	console.log(arr);
	addColorInCode();
}

function showCopy(){
	// document.getElementById("copyTextDiv").style.animationName='show';
	document.getElementById('copyTextDiv').style.opacity = '1';
	document.getElementById('copyTextDiv').style.top = '5%';
	// document.getElementById("randomColor").style.opacity = '1';
	setTimeout(function hideShowCopy(){
		document.getElementById('copyTextDiv').style.opacity = '0';
		document.getElementById('copyTextDiv').style.top = '0%';	
	},2000);
}


function addColorInCode(){

// console.log(firstNumber, secondNumber, thirdNumber);
	addColors.innerHTML+=`
<span class="token property">color${arr.length}</span><span class="token punctuation">:</span> <span class="token color"><span class="inline-color-wrapper"><span class="inline-color" style="background-color:${arr[(arr.length)-1]};"></span></span><span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">${firstNumber}</span><span class="token punctuation">,</span><span class="token number">${secondNumber}</span><span class="token punctuation">,</span><span class="token number">${thirdNumber}</span><span class="token punctuation">)</span></span>;`;

}

/*
	// addColors.innerHTML+=`color${arr.length}: ${arr[(arr.length)-1]}

	*/