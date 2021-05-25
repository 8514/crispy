var names_of_people=[];
function submit(){   
var guest_name=document.getElementById("tv").value;
names_of_people.push(guest_name); 
var length_of_array=names_of_people.length;
console.log(length_of_array);
document.getElementById("display_name").innerHTML=names_of_people;
}
function sorting(){
names_of_people.sort();
var yug=names_of_people.join("<br>");
document.getElementById("wall").innerHTML=yug;
}
function show(){
var yug= names_of_people.join("<br>");
document.getElementById("food").innerHTML=yug;
document.getElementById("laptop").style.display="block";
}
    

