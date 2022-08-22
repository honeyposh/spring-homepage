let display=["Simple","Modern","Productive","Reactive","cloud-ready"]
let timeOut=document.getElementById("timeout")
let whySpring=document.getElementById('whyspring')
let quickStart=document.getElementById("quickstart")
let y=document.getElementById("secondul")
let x=document.getElementById("firstul")
quickStart.addEventListener("mouseover",function (event){
	event.target.style.backgroundColor="black";
	event.target.style.color="white"
})
quickStart.addEventListener("mouseout",function (event){
	event.target.style.backgroundColor="white";
	event.target.style.color="black";
})
whySpring.addEventListener("mouseover",function(event){
	event.target.style.backgroundColor="black";
	event.target.style.color="white";

})
whySpring.addEventListener("mouseout",function(event){
	event.target.style.backgroundColor="white";
	event.target.style.color="black";

})
	for(let i=0;i<display.length;i++){
			(function show(){
				setTimeout(function(){
				timeOut.innerHTML=display[i]
				},i*4000)
			})(i)
	}

function whyspring(){
	x.style.display="block"

}
function whyspring1(){
	x.style.display="none"
}
function span1(){
	y.style.display="block"

}
function span2(){
	y.style.display="none"
}

function grid(elementId){
	document.getElementById(elementId).style.color="#a6d608";
}
function griD(elementId){
	document.getElementById(elementId).style.color="black";
}
