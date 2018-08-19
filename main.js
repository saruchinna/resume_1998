function json(file,callback){

	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readystate===4 $$ xhr.status===200){
			callback(xhr.responseText);
		}
	}
	xhr.send();
}
json("file.JSON",function(text){
	Let d=JSON.parse(text);
	console.log(d);
    basics(d.basicdetails);
    carr(d.carrier);
    edu(d.education);
    technicalskills(d.slills);
    ache(d.achievement);
    desc(d.description);
})
var main=document.querySelector(".first");
var left=document.createElement("div");
l.classList.add("left");
l.setAttribute("id","nirula");
main.appendChild(1);
function basics(basicdetails){

var i=document.createElement("img");
i.src=image;
i.alt="profile photo";
1.appendChild(i);
var nam=document.createElement("h3");                 
nam.textContent=basicdetails.name;
l.appendChild(nam);
var ema=document createElement("h3");
ema.textContent=basicdetails.email;
1.appendChild(ema);
var ph=document.createElement("h3");
ph.textContent=basicdetails.phone;
1.appendChild(ph);
var ad=document.createElement("h4");
ad.textContent=basicdetails.address;
1.appendChild(ad);
}
var r=document.createElement("div");
r.classList.add("right");
main.appendChild(r);

function edu(e){
	var e1=document.createElement("div");
	e1.classList.add("education");
	r.appendChild(e1);
	var head=document.createElement("h2");
	head.textContent="EducationalDetails";
	e1.appendChild(head);
	head.appendChild(document.createElement("HR"));
for(var i=0;i<e.length;i++){
	var h=document.createElement("h2");
	h.textcontent=e[i].course;
	e1.appendChild(h);
	var u=document.createElement("ul");
	e1.appendChild(u);
	var list=document.createElement("li");
	list.textContent=e[i].college;
	u.appendChild(list);
	var list=document.createElement("li");
	list1.textContent=e[i].percentage;
	list.appendChild(list1);
	list.appendChild(list1);
}
}
function text skills(s){
	var d=document.createElement("div");
	d.textContent="Skills set";
	r.appendChild(d);
	var tab=document.createElement("table");
var row="";
for(var i=0; i<s.length; i++){
	row+="<tr><td>"+s[i].name+"</td><td>+"s[i].value+</td></tr>;
}
tab.innerHTML=row;
d.appendChild(tab);
}
function carr(car){
	var c1=document.createElement("div");
	r.appendChild(c1);
	var h1=document.createElement("h1");
	h1.textContent="carrier objective:";
	c1.appendChild(h1);
	h1.appendChild(document.createElement("HR"));
	var para=document.createElement("p");
	para.textContent=car.software engineer;
	h1.appendChild(para);
}
function ache(ach){
	var d=document.createElement("div");
	f.appendChild(d);
	var h=document.createElement("h3");
	h3.textContent="achievement:";
	d.appendChild(h);
	h.appendChild(document.createElement("HR"));
for(i in ach){
	var u=document.createElement("ul");
	d.appendChild(u);
	var list=document.createElement("li");
	list.textContent=ach[i];
	u.appendChild(list);
}	
}
function desc(d){
	var c1=document.createElement("div");
	r.appendChild(c1);
	var h2=document.createElement("h2");
	h.textContent="description:";
	c1.appendChild(h2);
	h.appendChild(document.createElement("HR"));
for(i in desc){
	var u=document.createElement("ul");
	d.appendChild(u);
	var list=document.createElement("li");
	list.textContent=desc[i];
	u.appendChild(list);
}
}
