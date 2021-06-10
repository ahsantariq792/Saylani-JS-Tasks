// Chapter 6 to 9 Solutions:


// Question 1
// var A=10;
// de+ocument.write("The Value A is",A,"</br>")
// document.write("------------------------","</br>")
// document.write("The Value of ++A is: 11","</br>")
// var B=++A
// document.write("Now the value of A is",B,"</br>","</br>")

// document.write("The Value of A++ is: 11","</br>")
// var C=++B
// document.write("Now the value of A is",C,"</br>","</br>")

// document.write("The Value of --A is: 11","</br>")
// var D=--C
// document.write("Now the value of A is",D,"</br>","</br>")

// document.write("The Value of A-- is: 11","</br>")
// var E=--D
// document.write("Now the value of A is",E,"</br>")


// Question 2
// var a=2;
// var b=1;
// var c=--a
// var d=--b
// var e=++b;
// var f=b--
// document.write("a=2,b=1","</br>")
// document.write("--a (-) --b (+) ++b (+) b--","</br>")
// document.write("var result is :",c-d+e+f,"</br>")
// document.write("--a :",c,"</br>")
// document.write("--a (-)--b :",c-d,"</br>")
// document.write("--a (-) --b (+) ++b :",c-d+e,"</br>")
// document.write("--a (-) --b (+) ++b (+) b-- :",c-d+e+f,)



// Question 3
// var A=prompt("ENTER NAME");
// alert("Hello "+ A + " Have a good day")



// Question 5
// var A=+prompt("Enter the Value")
// for(i=1; i<=10; i++){
// if(A==" "){
//     document.write("5" + "x" + i + "="+ i*5 + "<br>")
// }

// else{
//   document.write(A + "x" + i + "="+ i*A + "<br>")
// }
// }




// Question 6



// var Obtained1=+prompt("ENTER MARKS OF FIRST SUBJECT")
// var Obtained2=+prompt("ENTER MARKS OF SECOND SUBJECT")
// var Obtained3=+prompt("ENTER MARKS OF THIRD SUBJECT")
// document.getElementById("One").innerHTML=Obtained1
// document.getElementById("Two").innerHTML=Obtained2
// document.getElementById("Three").innerHTML=Obtained3

// var Obtained1T=(Obtained1*100)/100
// var Obtained2T=(Obtained2*100)/100
// var Obtained3T=(Obtained3*100)/100
// document.getElementById("Oneo").innerHTML=Obtained1T+"%"
// document.getElementById("Twoo").innerHTML=Obtained2T+"%"
// document.getElementById("Threeo").innerHTML=Obtained3T+"%"
// var total=Obtained1+Obtained2+Obtained3
// var per=(total*100)/300
// var Obtained1T=Obtained1*100/100

// document.getElementById("t").innerHTML=total
// document.getElementById("p").innerHTML=per+"%" 



//_______________________________________________________________________________________________

// CHAPTER 9 to 11 Solutions:



// Question 1
// var city=prompt("ENTER CITY NAME")
// if(city =="karachi"){
//     alert("Welcome to the city of Light")
// }
// else{
//     alert("Welcome to the City of "+city)
// }



// Question 2
// var gender=prompt("ENTER GENDER")
// if(gender =="male"){
//     alert("Good Morning Sir")
// }
// else{
//     alert("Good Morning Ma'am")
// }



// Question 3
// var color=prompt("ENTER COLOR OF TRAPHIC SIGNAL")
// if(color =="red"){
//     alert("Must Stop")
// }
// else if(color =="yellow"){
//     alert("Ready to Move")
// }
// else{
//     alert("Move Know")
// }


// Question 4
// var fuel=+prompt("ENTER REMAINING FUEL IN CAR");
// if(fuel<0.25){
//     alert("Please Refill the Fuel in your car")
// }
// else
// {
//     alert("Alredy Full")
// }



// Question 5

// var sub1 = parseFloat(prompt("ENTER MARKS OF SUBJECT 1"));
// var sub2 = parseFloat(prompt("ENTER MARKS OF SUBJECT 2"));
// var sub3 = parseFloat(prompt("ENTER MARKS OF SUBJECT 3"));
// var Total = sub1 + sub2 + sub3;
// var percentage = (Total * 100) / 300
// document.write(Total)

// if (percentage <= 300 || percentage >= 250) {
//     document.write("The percentage is", " ", percentage, "%", " ", "A Grade")
// } 

// else if (percentage <= 150 || percentage >= 200) {
//     document.write("The percentage is", " ", percentage, "%", " ", "B Grade")
// } 

//else {
//     document.write("Fail")
// }








// // Question 6
// var secret=[1,2,3,4,5,6,7,8,9,10];
// var Num=+prompt("GUESS THE NUMBER")
// if(Num == secret)
// {
//     document.write("Bingo! Correct Answer")
// }
// else
// {
//     document.write("Close enough to the correct answer")
// }





// Question 7
// var tem = prompt("ENTER TEMPERATURE")
// if (tem > 40) {
//     document.write("“It is too hot outside.”")
// } else if (tem > 30) {
//     document.write(" “The Weather today is Normal.”")
// } else if (tem > 20) {
//     document.write("  “Today’s Weather is cool.”")
// } else {
//     document.write(" “OMG! Today’s weather is so Cool.”")
// }




// Question 8
// var Num1 = parseFloat(prompt("ENTER FIRST NUMBER"));
// var Num2 = parseFloat(prompt("ENTER FIRST NUMBER"));
// var operater = prompt("ENTER OPERATER");
// if (operater == '+') {

//     var A = Num1 + Num2
//     document.write("The Sum is", " ", A)
// } else if (operater == '-') {

//     var A = Num1 - Num2
//     document.write("The Subtraction is", " ", A)
// } else if (operater == '-') {

//     varA = Num1 * Num2
//     document.write("The Multiplication  is", " ", A)
// } else if (operater == '/') {

//     varA = Num1 / Num2
//     document.write("The Division  is", " ", A)
// } else {
//     document.write("Operater is Incorrect")
// }



// Question 9
// var org = ""
// var pass = prompt("ENTER PASSWORD");
// if (pass = " ") {
//     alert("ENTER PASSWORD")
// } else if (pass == "BASIT") {
//     document.write("Correct Password")
// } else {
//     document.write("Incorrect Password")
// }


// Question 10
// var mob = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
// document.write("<select><option>"
// +mob[0]+"</option><option>"
// +mob[1]+"</option><option>"
// +mob[2]+"</option><option>"
// +mob[3]+"</option><option>"
// +mob[4]+"</option><option>"
// +mob[5]+"
//</option></select>")









