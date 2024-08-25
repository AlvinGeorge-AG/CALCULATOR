function btnclick(val)
{
 document.getElementById("output").value+=val
}


function otclear(){
    document.getElementById("output").value=" "
}

function eqclick(){
    var text=document.getElementById("output").value
    var result=eval(text)
    document.getElementById("output").value=result
}