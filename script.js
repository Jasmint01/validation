var list=[];
function validate(){
 var valEle=document.body.querySelector(".valMess");
  var username=document.body.querySelector(".username").value;
 
if(username=="coolStudent123"){
  valEle.innerHTML="Submit"
}else{
  valEle.innerHTML="Invalid Username. Try Again."
}  
}
document.body.querySelector(".validate").addEventListener("click",function(){
  validate();
})

function renderList(){
  var listEle=document.body.querySelector(".list");
  listEle.innerHTML="";
  for(var i=0; i<list.length; i++){
    var element=document.createElement("div");
    element.innerHTML=list[i];
    listEle.appendChild(element);
  }
}
function submit(){
   var text=document.body.querySelector(".itemText").value;
  var importance=document.body.querySelector(".importance").value;
  if(text.length>1){
      list.push(importance+" "+text);
    document.body.querySelector(".itmMess").innerHTML="";
  }else{
    document.body.querySelector(".itmMess").innerHTML="Not enough characters." 
  }
  renderList();
}
document.body.querySelector(".submit").addEventListener("click",function(){
  submit();
})
renderList();

var nav= document.body.querySelector(".nav");
var display= document.body.querySelector(".display");

var pages= [
  { 
    title:"Home",
    content:""
  },
    {
    title:"About",
    content:""
  },
    {
    title:"View",
    content:""
  }
]
for(var i=0; i<pages.length; i++){
new pageMaker(pages[i]);
}

function pageMaker(pg){
  this.button=document.createElement("button");
  this.button.addEventListener("click", function(){    
   writestuff(pg.content,pg.title);
  })
  this.button.innerHTML=pg.title;
  nav.appendChild(this.button);
}
function writestuff(stuff,pg){
  if(pg=="About") {
  AboutPage();  
  }if (pg=="View") {
    ViewPage();
  }if (pg=="Home") {
    HomePage();
  }
}

function AboutPage(){
display.innerHTML="";
var heading = document.createElement("h1");
var subheading=document.createElement("h3");
  heading.innerHTML="About";
  subheading.innerHTML="Jasmin Tlazca";
  display.appendChild(heading);
  display.appendChild(subheading);
}
function ViewPage(){
display.innerHTML="";
var viewheading = document.createElement("h1");
  viewheading.innerHTML="View Notes";
  display.appendChild(viewheading);
}
function HomePage(){
display.innerHTML="";
var homeheading = document.createElement("h1");
  homeheading.innerHTML="Home";
  display.appendChild(homeheading);
}

writestuff(pages[0].content,"Home","About","View");