function copyChime(){

navigator.clipboard.writeText("$tattoozbydrk");

alert("Chime tag copied!");

}

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity=0;

section.style.transform="translateY(60px)";

section.style.transition="1s";

observer.observe(section);

});