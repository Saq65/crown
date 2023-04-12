function Submit(){
    
var a = document.getElementById('u1name').value;
var b =document.getElementById('p1').value;

if(a==""){
    document.getElementById('s1').innerHTML="please write userName"
    document.getElementById('u1name').style.border='2px solid red'
    document.getElementById('s1').style.visibility='visible'
    return false;
}else if(a.length <3){
    document.getElementById('s1').innerHTML="Minimum 3 character required"
    document.getElementById('s1').style.visibility='visible'
    return false;
}
else{
    document.getElementById('u1name').style.border='2px solid green'
    document.getElementById('s1').style.visibility='hidden'
    document.getElementById('d1').innerHTML = '<i class="fa-solid fa-check"></i>';
}
if(b==""){
    document.getElementById('p1').style.border='2px solid red'
    document.getElementById('s2').innerHTML="please filled passward"
    document.getElementById('s2').style.visibility='visible'
    return false;
}else if(b.length<4){
    document.getElementById('s2').innerHTML="Minimum 4 character required"
    document.getElementById('s2').style.visibility='visible'
    return false;
}
else{
    document.getElementById('p1').style.border='2px solid green'
    document.getElementById('s2').style.visibility='hidden'
    document.getElementById('d2').innerHTML = '<i class="fa-solid fa-check"></i>';
}

}
