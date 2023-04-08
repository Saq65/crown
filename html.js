function Click(){
    var a1=document.getElementById('fname').value;
    if(a1==""){
        document.getElementById('f1').innerHTML='Please fill this input';
        return false;
    }
    else if(a1.length <3)
    {
        document.getElementById('f1').innerHTML='Minimum 3 letter name write';
        return false;
    }
    else if(a1.length >20)
    {
        document.getElementById('f1').innerHTML='max 20 letter name allowed';
        return false;
    }
    else if(!isNaN(a1))
    {
        document.getElementById('f1').innerHTML='only alphabet allowed';
        return false;
    }
else{
document.getElementById('f1').innerHTML='valid';
document.getElementById('a1').style.bordercolor='green';
}
    var a2=document.getElementById('lname').value;
    if(a2==""){
        document.getElementById('f2').innerHTML='Please fill this input';
        return false;
    } else if(a2.length <3)
    {
        document.getElementById('f2').innerHTML='Minimum 3 letter name write';
        return false;
    }
    else if(a2.length >25)
    {
        document.getElementById('f2').innerHTML='max 25 letter name allowed';
        return false;
    }
    else if(!isNaN(a2))
    {
        document.getElementById('f2').innerHTML='only alphabet allowed';
        return false;
    }
    var a3=document.getElementById('uname').value;
    if(a3==""){
        document.getElementById('f3').innerHTML='Please fill username';
        return false;
    }
    var a4=document.getElementById('p').value;
    if(a4==""){
        document.getElementById('f4').innerHTML='Please create passward';
        return false;
    }
    if(a4!=a5){
        document.getElementById('f5').innerHTML='passward not matching'
        return false;
    }
    var a5=document.getElementById('cp').value;
    if(a5==""){
        document.getElementById('f5').innerHTML='Please fill this input';
        return false;
    }
    
}
