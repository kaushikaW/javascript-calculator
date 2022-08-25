var _number1,_number2,answer,oparator; 



function setscreen(num){
    if(document.getElementById('textscreen').value != "0")
        {
            document.getElementById('textscreen').value += num;
        }
        else{
            document.getElementById('textscreen').value = num;
        }

    console.log(num)
}

function rest()
{
    document.getElementById("textscreen").value="0"
}

function setoparator(op) {
    _number1=document.getElementById('textscreen').value;
     document.getElementById('textscreen').value='0';
     console.log("NO1:"+_number1);
     oparator=op;
    
} 

function getans() {
    _number2=document.getElementById("textscreen").value;
    console.log("NO1:"+_number2);
    console.log("NO1:"+oparator);
    if(oparator=="+")
        {
            answer=Number(_number1)+Number(_number2);
        }
        else if (oparator=="-")
        {
            answer=Number(_number1)-Number(_number2);
        }
        else if (oparator=="/")
        {
            answer=Number(_number1)/Number(_number2);
        }
        else if (oparator=="*")
        {
            answer=Number(_number1)*Number(_number2);
        }

        console.log("ans:"+answer);
        document.getElementById("textscreen").value=answer;
}



