// var number = prompt('give me any nuber')
// var addOrEven = number %2;
// alert (addOrEven == 0)

// var message = 'Thanks'
// var useName = "susan"
// var banger = '!'
// var customMess = message+useName+banger
// alert(customMess)

// var number = prompt('give me any number');

// var reminder = number % 2 ;

// var value = reminder == 0;

// var message = ' ';


// if (value){
//     message ='number is even'

    
// }
// else {
//     message ='number is odd'
// }
// alert(
//     message
// )







// var number = prompt ('give me any number')

// var reminder = number % 2;

// var value = reminder == 0;

// var message = '';

// if (value){
//     message = "number is even"
   
// }
// else{
//     message = "number is odd"
// }
// alert(
//     message
// )

// let num1 = +prompt("Enter value");
// let num2 = +prompt("Enter vlaue");

// let Add = num1 % num2;



// document.write(
//     "<table border 1px>"+
//     "<tr>"+
//     "<th>"+"Addition"+"</th>"
//     +"</tr>"+
//     "<tr>"+
//     "<td>"+Add+"</td>"
    
//     +"</tr>"

    
//     +"</table"



// )



// var star = ("*");
// for(var i =0 ; i >= 5; i++){
//     var start = i += "*";
//    console.log(start);
// }






// for ( var i = 1; i <= 50; ){
//     console.log (i)
//     i = i + 1

// }


// var arr = [true, false, "waqar", 123456];



// let num1 = 10 ;

// let num2 = 20;

// let sum = num1 + num2;

// console.log(sum);

// let minus = num1 - num2;

// console.log(minus)

// let multyply = num1 * num2;

// console.log(multyply);

// let devide = num1 / num2;

// console.log(devide);




// let names = ['sufyan', 'waqar', 'waqseem', 'ali']

// var h1 = document.getElementsByClassName("word");

// var h1 = document.getElementById(".word");

// var h1 = document.querySelector("#word");

// var h1 = document.querySelector("[word]");



// console.log(names)


// var num = +prompt("Enter Value");












var number = ['']

var student = ['195283', '192538', '173268', '192287', '21199',];

var department = ['22447', '11876', '22991', '22719', '11654', ];

var university = ['66189', '22190', '11877', '91892', '78623', ];





var text = document.getElementById('text');

var table = '<table><thead><tr>  <th>number</th>   <th>Student</th><th>Department</th><th>University</th></tr></thead> <tbody>';

for(var i = 0; i < student.length; i++) {
table += '<tr><td>'+(i+1)+'</td><td>'+student[i]+'</td><td>'+department[i]+'</td><td>'+university[i]+'</td></tr>'
}

table += '</tbody></table>';

text.innerHTML =table;






























