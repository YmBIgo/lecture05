//え。デザイン？なにそれおいしいの？


var input1,input2;
var result;
var output;
var greeting = function(message){
  //window.alert(message);
  
  output = document.querySelector("#answer");//#以降で ID を検索する。
  output.value = message;
  
};

var helloWorld = function(event){
  console.log("helloWorld: start");
  /*
  var input =document.getElementById("textView").value;
  //var input = document.querySelector("input");
  //var inputText = input.value;
  var message = "こんにちは　\n"+input+"さん";
  //greeting(input);
  */
  var add1 = document.getElementById("input_1").value;
  var add2 = document.getElementById("input_2").value;
  var result = parseInt(add1)+parseInt(add2);
  greeting(result);
  console.log("helloWorld: end");
};
var b = function(event){
console.log("b : start");
var hello = document.querySelector("h1");
hello.addEventListener("click",helloWorld);
console.log("b: end");
}
var add = function(event){
  console.log("boot: start");
  var a_Button = document.querySelector("button");
  a_Button.addEventListener("click",helloWorld);
  console.log("boot: end");
};
//宿題　引き算
function subtract(){
getInput();
result = parseInt(input1)-parseInt(input2);
output = document.querySelector("#answer");//#以降で ID を検索する。
output.value =result;
}
//かけ算
function multiply(){
getInput();
result = parseInt(input1)*parseInt(input2);
output = document.querySelector("#answer");//#以降で ID を検索する。
output.value =result;
}
//割り算
function divide(){
getInput();
result = parseInt(input1)/parseInt(input2);
output = document.querySelector("#answer");//#以降で ID を検索する。
output.value =result;
}
function getInput(){
input1 = document.getElementById("input_1").value;
input2 = document.getElementById("input_2").value;
}

window.addEventListener("load", add);
window.addEventListener("load",b);

