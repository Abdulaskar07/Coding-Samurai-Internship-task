var result = "";
var StringOut ="";
var output = 0;
var operation = "";
var cal =0;
var input = document.getElementById("input");
var Result = document.getElementById("result");


function Input(x){
result+=x;
StringOut+=x;
input.innerText=StringOut;
}

function Operation(y){
    if(cal===0){
        output=parseInt(result);
        operation = y;
        StringOut+=operation;
        input.innerText=StringOut;
        cal++;
        result="";
    }else{
        switch(operation){
            case '+':
                output+=parseInt(result);
                result=""
                operation = y;
                StringOut+=operation;
                input.innerText=StringOut;
                break;
            case '-':
                output-=parseInt(result);
                StringOut+="-";
                result=""
                operation = y;
                StringOut+=operation;
                input.innerText=StringOut;
                break;
            case '*':
                output*=parseInt(result);
                StringOut+="*";
                result=""
                operation = y;
                StringOut+=operation;
                input.innerText=StringOut;
                break;
            case '/':
                output/=parseInt(result);
                StringOut+="/";
                result=""
                operation = y;
                StringOut+=operation;
                input.innerText=StringOut;
                break;
        }
    }
  

}

function Equal(){
    switch(operation){
        case '+':
            output+=parseInt(result);
            break;
        case '-':
            output-=parseInt(result);
            break;
        case '*':
            output*=parseInt(result);
            break;
        case '/':
            
            output/=parseInt(result);
            break;
    }
Result.innerText = output;
}

function Clear(){
    location.reload();
}