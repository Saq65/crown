function Click() {
    var a1 = document.getElementById('fname').value;
    if (a1 == "") {
        document.getElementById('f1').innerHTML = 'Please fill this input';
        document.getElementById('fname').style.border = '2px inset red';
        document.getElementById('f1').style.visibility = 'visible'
        return false;
    }
    else if (a1.length < 3) {
        document.getElementById('f1').innerHTML = 'Minimum 3 letter required';
        document.getElementById('fname').style.border = '2px inset red';
        document.getElementById('f1').style.visibility = 'visible'
        return false;
    }
    else if (a1.length > 20) {
        document.getElementById('f1').innerHTML = 'max 20 letter name allowed';
        document.getElementById('fname').style.border = '2px inset red';
        document.getElementById('f1').style.visibility = 'visible'
        return false;
    }
    else if (!isNaN(a1)) {
        document.getElementById('f1').innerHTML = 'only alphabet allowed';
        document.getElementById('fname').style.border = '2px inset red';
        document.getElementById('f1').style.visibility = 'visible'
        return false;
    } else {
        document.getElementById('fname').style.border = '2px solid darkgreen'
        document.getElementById('c1').innerHTML = '<i class="fa-solid fa-check"></i>'
        document.getElementById('f1').style.visibility = 'hidden'
    }
    var a2 = document.getElementById('lname').value;
    if (a2 == "") {
        document.getElementById('f2').innerHTML = 'Please fill this input';
        document.getElementById('lname').style.border = '2px inset red';
        document.getElementById('f2').style.visibility = 'visible'
        return false;
    } else if (a2.length < 3) {
        document.getElementById('f2').innerHTML = 'Minimum 3 letter required';
        document.getElementById('lname').style.border = '2px inset red';
        document.getElementById('f2').style.visibility = 'visible';
        return false;
    }
    else if (a2.length > 12) {
        document.getElementById('f2').innerHTML = 'max 25 letter name allowed';
        document.getElementById('lname').style.border = '2px inset red';
        document.getElementById('f2').style.visibility = 'visible';
        return false;
    }
    else if (!isNaN(a2)) {
        document.getElementById('f2').innerHTML = 'only alphabet allowed';
        document.getElementById('lname').style.border = '2px inset red';
        document.getElementById('f2').style.visibility = 'visible'
        return false;
    } else {
        document.getElementById('lname').style.border = '2px solid darkgreen'
        document.getElementById('c2').innerHTML = '<i class="fa-solid fa-check"></i>'
        document.getElementById('f2').style.visibility = 'hidden'
    }
    var a3 = document.getElementById('uname').value;
    if (a3 == "") {
        document.getElementById('f3').innerHTML = 'Please fill username';
        document.getElementById('uname').style.border = '2px inset red';
        document.getElementById('f3').style.visibility = 'visible';
        return false;
    } else {
        document.getElementById('uname').style.border = '2px solid darkgreen';
        document.getElementById('c3').innerHTML = '<i class="fa-solid fa-check"></i>';
        document.getElementById('f3').style.visibility = 'hidden';
    }
    var a4 = document.getElementById('p').value;
    if (a4 == "") {
        document.getElementById('f4').innerHTML = 'Please create passward';
        document.getElementById('p').style.border = '2px inset red';
        document.getElementById('f4').style.visibility = 'visible'
        return false;
    }else if(a4.length<4){
        document.getElementById('f4').innerHTML = 'minimum 4 charcacter allowed';
        document.getElementById('p').style.border = '2px inset red';
        document.getElementById('f4').style.visibility = 'visible'
    }else if(a4.length>8){
        document.getElementById('f4').innerHTML = 'maximum 8 charcacter allowed';
        document.getElementById('p').style.border = '2px inset red';
        document.getElementById('f4').style.visibility = 'visible'
    }
     else {
        document.getElementById('p').style.border = '2px solid darkgreen'
        document.getElementById('c4').innerHTML = '<i class="fa-solid fa-check"></i>'
        document.getElementById('f4').style.visibility = 'hidden'
    }
    var a5 = document.getElementById('cp').value;
    if (a5 == "") {
        document.getElementById('f5').innerHTML = 'Please fill this input';
        document.getElementById('cp').style.border = '2px inset red';
        document.getElementById('f5').style.visibility = 'visible'
        return false;
    }
    if (a4 != a5) {
        document.getElementById('f5').innerHTML = 'passward not matching';
        document.getElementById('p').style.border = '2px inset red';
        document.getElementById('cp').style.border = '2px solid red';
        return false;
    } else if (a4 == a5) {
        document.getElementById('f5').innerHTML = 'passward is matching';
        document.getElementById('f5').style.color = 'green';
        document.getElementById('cp').style.border = '2px inset forestgreen';
        document.getElementById('p').style.border = '2px outset forestgreen';
        return true;
    } else {
        document.getElementById('c5').innerHTML = '<i class="fa-solid fa-check"></i>'
        document.getElementById('f5').style.visibility = 'hidden';
    }

}
