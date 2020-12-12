// JavaScript Document

//Placing HTML code inside a web page
var codeSnippet;

$(document).ready(function() {
	
	codeSnippet = $(".functionality")[0].outerHTML;
	var i = codeSnippet.length,
    codeArray = [];

  while (i--) {
    var charCode = codeSnippet[i].charCodeAt();
    if (charCode < 65 || charCode > 127 || (charCode>90 && charCode<97)) {
      codeArray[i] = '&#'+charCode+';';
    } else {
      codeArray[i] = codeSnippet[i];
    }
   }
var final = codeArray.join('').toString(); 
$('#code').append(final);  

$(".droptargetArea").mouseover(function(){
		$('#code').remove(); 
		$("#textAreaCode").append('<textarea style="width:870px;height:350px;" spellcheck="false" id="code"></textarea>');
		codeSnippet = $(".functionality")[0].outerHTML;
	var i = codeSnippet.length,
    codeArray = [];

  while (i--) {
    var charCode = codeSnippet[i].charCodeAt();
    if (charCode < 65 || charCode > 127 || (charCode>90 && charCode<97)) {
      codeArray[i] = '&#'+charCode+';';
    } else {
      codeArray[i] = codeSnippet[i];
    }
   }
   
	var final = codeArray.join('').toString(); 
	$('#code').append(final);  
});
	
//////////////////////////////////////////////////////////////////////////////////////

//Converting div into grid
for(var gridrows = 0; gridrows <10;gridrows++)
{
	for(gridcols = 0;gridcols<5;gridcols++)
	{
		$(".droptargetArea").append('<span class="gridElements"></span>');
		$(".droptargetArea .gridElements").css("min-width","175.4px").css("border","1px dotted #E9E9E9").css("float","left").css("min-height","40px").css("opacity","1.0");
	}
}


///////////////////////////////////////////////////////////////////////////////////////

//Drag and Drop Application

var dragSourceElement = null;
var inputTypetext = '<input type="text" disabled="disabled"></input>';
var inputTypeButton = '<button type="submit">Submit</button>';
var dragElements = document.querySelectorAll("#elementSelection span");

var selectedDragElementText = document.getElementById("inputTypeText");
selectedDragElementText.addEventListener('dragstart',function(textElement){
	this.style.opacity = '0.5';
	dragSourceElement = this;
	textElement.dataTransfer.effectAllowed = 'move';
	textElement.dataTransfer.setData('text/html',inputTypetext);
});

var selectedDragElementButton = document.getElementById("inputTypebutton");
selectedDragElementButton.addEventListener('dragstart',function(textElement){
	this.style.opacity = '0.5';
	dragSourceElement = this;
	textElement.dataTransfer.effectAllowed = 'move';
	textElement.dataTransfer.setData('text/html',inputTypeButton);
});

var selectedDragElementButton = document.getElementById("clearField");
selectedDragElementButton.addEventListener('dragstart',function(textElement){
	this.style.opacity = '0.5';
	dragSourceElement = this;
	textElement.dataTransfer.effectAllowed = 'move';
	textElement.dataTransfer.setData('text/html','');
});

[].forEach.call(dragElements,function(htmlElements){
	htmlElements.addEventListener('dragend',handleDragEnd,false);
});


function handleDragEnd(e)
{
	this.style.opacity = '1.0';
}

var dropTargets = document.querySelectorAll(".droptargetArea .gridElements");

[].forEach.call(dropTargets,function(col){
	col.addEventListener('dragover',onDragOver,false);
	col.addEventListener('drop',onDrop,false);
});

function onDragOver(e)
{
	if(e.preventDefault)
	{
		e.preventDefault();
	}
	this.dataTransfer.dropEffect = 'move';
	return false;
}

function onDrop(e)
{
	if(e.stopPropogation)
	{
		e.stopPropogation();
	}

	this.innerHTML = e.dataTransfer.getData('text/html');

}
////////////////////////////////////////////////////////////
});


