//****************** CHP  09--11********************* */
//*****************TASK 01 **************** */



// var city = prompt("enter your city")
// if(city === "karachi"){
//     alert("Wellcom to city of lights")
// }






//*****************TASK 02 **************** */

// var gen = prompt("enter your gender , male/female")
// if( gen === male){
//     alert("Goodmorning Sir")
// }
// if( gen === female){
//     alert("Goodmorning maam")
// }




//*****************TASK 03 **************** */


// var color = prompt("Enter a one color of traffic signal   , red/green/yellow")
// if(color === "red"){
//     document.write("Must Stop")
// }
// else if(color === "green"){
//     document.write("Move now")
// }
// else if(color === "yellow"){
//     document.write("Ready to move ")
// }
// else{alert("enter valid signal color")}



//*****************TASK 04 **************** */


// var fuel = +prompt("enter the amount of remaining fuel in car   , liters")
// if(fuel < 0.25){
//     alert("Please refill the fuel in your car")
// }else{alert("all is well")}




//*****************TASK 05 **************** */

//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     }



//*****************TASK 06 **************** */

// var total = +prompt("Enter your total-marks of all subjects , 300");
// var sub1 = +prompt("Enter your obtained numbers of sub1");
// var sub2 = +prompt("Enter your obtained numbers of sub2");
// var sub3 = +prompt("Enter your obtained numbers of sub3");

// var tsub = sub1 + sub2 + sub3 ;
// var psub = (tsub/total)*100;

// if(psub >= 80){
//     document.write("You got A+1 grade" + "Excellent")
// }
// else if(psub >= 70){
//     document.write("You got A grade" + "Good")
// }
// else if(psub <= 60){
//     document.write("You got B grade" + "You need to improve")
// }
// else if(psub < 59){
//     document.write("You are FAIL" + "sorry")
// }






//*****************TASK 07 **************** */

// var secnum = +prompt("Enter any secret number");
// var num1 = 1;
// var num2 = 2;
// var num3 = 3;
// var num4 = 4;
// var num5 = 5
// var num6 = 6;
// var num7 = 7;
// var num8 = 8;
// var num9 = 9;
// var num10 = 10;

// if(secnum === num1 , num2 , num3 , num4 , num5 , num6 , num7 , num8 , num9 , num10 ){
//     alert("“Bingo! Correct answer")
// }else{
//     alert("“Close enough to the correct answer”.")
// }




//*****************TASK 08 **************** */

// var num = +prompt("enter any number from 1 to 9");
// var tnum = num / 3 ;
// if(tnum <= 0 ){
//     alert("number is not divisible by 3")
   
// }else{ alert("number is divisible by 3")}




//*****************TASK 09 **************** */

// var num = +prompt("Enter any number");
// var num1 = num/2;
// if(num1 === Math.round(num1)){
//     alert("it is even number")
// }else{alert("itsan odd number")}





//*****************TASK 10 **************** */

// var tem = +prompt("enter the temperature");
// if(tem > 40){
//     alert("“It is too hot outside.”")
// }
// else if(tem > 30){
//     alert("“the weather is normal outside.”")
// }
// else if(tem > 20){
//     alert("“the weather is cool outside.”")
// }
// else if(tem >= 10){
//     alert("“OMG! Today’s weather is so Cool.”")
// }



//*****************TASK 11  **************** */

// var um1 = +prompt("enter your first number");
// var um2 = +prompt("enter your second number");
// var opr = prompt("enter your operator");

// var op1 = um1 + um2 ;
// var op2 = um1 - um2 ;
// var op3 = um1 * um2 ;
// var op4 = um1 / um2 ;

// if(opr === "+"){
//     alert(op1)
// }
// else if(opr === "-"){
//     alert(op2)
// }
// else if(opr === "*"){
//     alert(op3)
// }
// else if(opr === "/"){
//     alert(op4)
// }








//****************** CHP  12--13********************* */
//*****************TASK 01 **************** */


var cha = prompt("Enter any character");
var cha1 = cha.charCodeAt()
if(cha1 > 64 && cha1 < 90 ){
    alert("the character is upercase")
}
else if(cha1 > 97 && cha1 < 122 ){
    alert("the character is lowercase")
}




//*****************TASK 02 **************** */

// var int1 = prompt('enter any first  number')
// var int2 = prompt('enter any  second number')
// if(int1 > int2 ){
//     alert("integer one is larger")
// }
// else if(int2 > int1 ){
//     alert("integer two is larger")
// }



//*****************TASK 03 **************** */


//   var num = +prompt("Enter any number");
//   if(num >= 1  ){
//       alert("the number is positive")
//   }
//  else if(num < 0  ){
//     alert("the number is negative")
// }
// else if(num === 0  ){
//     alert("the number is zero")
// }


// if(st !== "a" , "e" , "i" ,"o" ,"u")



//*****************TASK 04 **************** */

// var st = prompt("enter any 1 character");
// if(st === "a"){
//     alert("its a vowel")
// }
// else if(st === "e"){
//     alert("its a vowel")
// }
// else if(st === "i"){
//     alert("its a vowel")
// }
// else if(st === "o"){
//     alert("its a vowel")
// }
// else if(st === "u"){
//     alert("its a vowel")
// }
// else{alert("its not a vowel")}




//*****************TASK 05 **************** */
// var pass = prompt("Enter your password");
// var word = "ghous" ;
// if(pass === ""){
//     alert("please enter the password")
// }
// else if(pass !== word){
//     alert("please enter the correct password")

// }
// else if(pass === word){
//     alert("congrdgulations you have enter correct password")

// }




//*****************TASK 06 **************** */

// var time = +prompt("enter the current hour of time ")
// if(time > 18  ){
//     alert("good evening")
// }else{alert("good day")}






//*****************TASK 07 **************** */
// var time = +prompt("enter a time in 24hours format  , 1900");

// if(time >= 0000 && time < 1200){
//     document.write( "good morning")
// }
// else if(time >= 1200 && time < 1700 ){
//     document.write( "good afternoon")

// }
// else if(time >= 1700 && time < 2100 ){
//     document.write( "good evening")

// }
// else if(time >= 2100 && time < 2359 ){
//     document.write( "good night")

// }









//****************** CHP  14--16********************* */
//*****************TASK 01 **************** */

//var arr = []




//*****************TASK 02 **************** */
//var arr = new Array []





//*****************TASK 03 **************** */
//var strings =  ["strings"]



//*****************TASK 04 **************** */
//var strings =  [0000]





//*****************TASK 05 **************** */
//var strings =  [true/false]




//*****************TASK 06 **************** */
//var strings =  [0000 + "strings "  + true/false]







//*****************TASK 07 **************** */
// var strings =  ["ssc" , "bsc" , "bcom" , "bs" , "ms" , "m.phil"]
// document.write("<h2>"+"Qualification"+"</h2>");
// document.write(strings[0] + "<br> "+ strings[1]+ "<br> "+ strings[2]+ "<br> "+ strings[3]+ "<br> "+ strings[4]+ "<br> "+ strings[5])





//*****************TASK 08 **************** */
// var names = ["shahmeer" , "yaqoob" , "salman"];
// var score = [320 , 230 , 480];
// var tmarks = 500 ; 
// var p1 = (score[0] / tmarks) * 100
// var p2 = (score[1] / tmarks) * 100
// var p3 = (score[2] / tmarks) * 100

// document.write("score of" + names[0] + "is" + score[0] + "percentage is " + p1 + "%"+"<br>");
// document.write("score of" + names[1] + "is" + score[1] + "percentage is " + p2 + "%"+"<br>");
// document.write("score of" + names[2] + "is" + score[2] + "percentage is " + p3 + "%")




//*****************TASK 09 **************** */


// var color = ["green" , "blue" , " red" , "pink"]
// var col = prompt("enter any color ")
// color.unshift(col)
// document.write(color + "<br>")

// var col2 = prompt("enter any color ")
// var color2 = ["green" , "blue" , " red" , "pink"]
// color2.push(col2);
// document.write(color2 + "<br>")

// var col3 = prompt("enter any color ")
// var color4 = ["green" , "blue" , " red" , "pink"]
// color4.unshift(col3);
// var no = col3 + "," + color4
// document.write(no + "<br>")


// var color14 = ["green" , "blue" , " red" , "pink"]
// var ele = color14.shift()
// document.write(color14 + "<br>")

// var color15 = ["green" , "blue" , " red" , "pink"]
// var ele1 = color15.pop()
// document.write(color15 + "<br>")


// var enter1 = +prompt("enter the number of indexx in which you want to store ccolor,  0-3");
// var enterc = prompt("enter color for selected index");
// var ory = [ "red" , "green" , " blue" , "pink"  ];
// if(enter1 === 0){
//     ory = [ enterc + "," + "green" , " blue" , "pink" ]
// }
// else if(enter1 === 1){
//     ory = [ "red," + enterc + "," +  " blue ," + "pink" ]
// }
// else if(enter1 === 2){
//     ory = ["red" + "green,"  +  enterc + ","+ "pink" ]
// }
// else if(enter1 === 3){
//     ory = ["red" + "green," + "blue ,"  +  enterc   ]
// }
// document.write(ory + "<br>")



// var enter1 = +prompt("enter the number of indexx in which you want to remove color,  0-3");
// var ory1 = [ "red" , "green" , " blue" , "pink"  ];
// if(enter1 === 0){
//     ory1 = [  + "green" , " blue" , "pink" ]
// }
// else if(enter1 === 1){
//     ory1 = [ "red,"  +  " blue ," + "pink" ]
// }
// else if(enter1 === 2){
//     ory1 = ["red" + "green," + "pink" ]
// }
// else if(enter1 === 3){
//     ory1 = ["red" + "green," + "blue ,"   ]
// }
// document.write(ory1)








//*****************TASK 10 **************** */

// var num = [ 250 , 350 , 780 , 985 , 584 ]
// num.sort()
// document.write(num)








//*****************TASK 11 **************** */
// var cities = ["karachi" , "lahore" , "pekhawar" , "shershah"]
// document.write("<h1>"+ "Cities list"+"</h1>" + "<br>" + cities)
// var secities = [cities[0] , cities[2] , cities[3] ]
// document.write("<h1>"+ "Cities list"+"</h1>" + "<br>" + secities)









//*****************TASK 12 **************** */

// var arry = ["this" , "is" , "my" , "cat"]
//  document.write("<h1>"+ "Arry"+"</h1>" + "<br>" + arry + "<br>" );
//  var arry1 = arry.join()
//  document.write("<h1>"+ "string"+"</h1>" + "<br>" + arry[0] + arry[1] + arry[2] + arry[3])
 



//*****************TASK 13 **************** */
// var devices = ["keyboard" , "mouse" , " printr" ]
//  document.write("<h1>"+ "Arry"+"</h1>" + "<br>" + devices + "<br>" );
//  document.write("<h1>"+ "out"+"</h1>"+ "<br>" + devices[0] + "<br>" )
//  document.write(devices[1] + "<br>" )
//  document.write(devices[2] + "<br>" )





//*****************TASK 14 **************** */
// var devices = [ "mouse" ,"keyboard" , " printr" ]
// var de = devices.reverse()
//  document.write("<h1>"+ "Arry"+"</h1>" + "<br>" + devices + "<br>" );
//  document.write("<h1>"+ "out"+"</h1>"+ "<br>" + de[0] + "<br>" )
//  document.write(de[1] + "<br>" )
//  document.write(de[2] + "<br>" )






//*****************TASK 15 **************** */

// var arry = ["apple" , "samsung" , "motrolla" , "pocco"];
// document.write("<select>" + "<option>"+arry[0]+"</option>"+  "<option>"+arry[1]+"</option>"+ "<option>"+arry[2]+"</option>"+ "<option>"+arry[3]+"</option>"+ "</select>")




