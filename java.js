// Assignmrnt No 10

// Question No 1

// var FirstName = prompt("Enter Your First Name");
// var LastName = prompt("Enter Your Last Name");
// var FullName = FirstName + " " + LastName;
// document.write ("Hello, Welcome " + FullName + "..!");


// Question No 2

// var FavPhoneModel = prompt("Enter Your Favourite Mobile Phone Model");
// var StringLength = FavPhoneModel.length;
// document.write ("My Favourite Phone Is:" + FavPhoneModel + "<br>");
// document.write ("Length Of String Is:" + StringLength);

// Question No 3

// var Word = "Pakistani";
// var Index = Word.indexOf("n");
// document.write ("String: " + Word + "<br>");
// document.write ("Index Of 'n' Is: " + Index);

// Question No 4

// var Word = "Hello World";
// var Index = Word.lastIndexOf("l");
// document.write ("String: " + Word + "<br>");
// document.write ("Index Of 'l' Is: " + Index);

// Question No 5

// var Word = "Pakistani";
// var character = Word.charAt(3);
// document.write ("String: " + Word + "<br>");
// document.write ("Character At Index 3 Is: " + character);

// Question No 6

// var FirstName = prompt("Enter Your First Name");
// var LastName = prompt("Enter Your Last Name");
// var FullName = FirstName.concat(" ", LastName);
// document.write("Hello, Welcome " + FullName + "..!");

// Question No 7

// var City = "Hyderabad";
// var NewCity = City.replace("Hyder", "Islam");
// document.write ("City: " + City + "<br>");
// document.write ("After Replacement: " + NewCity);

// Question No 8

// var Message = "Ali And Sami Are Best Friends. They Play Cricket And Football Together.";
// var NewMessage = Message.split("And").join("&");
// document.write(NewMessage);

// Question No 9

// var ValueInString = "472";
// var ValueInNumber = +(ValueInString);
// document.write("Value: " + ValueInString + "<br>");
// document.write("Type: " + typeof ValueInString + "<br>");
// document.write("Value: " + ValueInNumber + "<br>");
// document.write("Type: " + typeof ValueInNumber + "<br>");

// Question No 10

// var UserInput = prompt("Enter Any Name");
// var CapitalLetters = UserInput.toUpperCase();
// document.write ("User Input: " + UserInput + "<br>");
// document.write ("Upper Case: " + CapitalLetters);

// Question No 11

// var UserInput = prompt("Enter Any Thing:");
// var Words = UserInput.toLowerCase().split(" ");
// var TitleCaseInput = "";

// for (var i = 0; i < Words.length; i++) {
//     TitleCaseInput = Words[i].charAt(0).toUpperCase() + Words[i].slice(1);
//     }    
// document.write("User Input: " + UserInput + "<br>");
// document.write("Title Case: " + TitleCaseInput);

// Question No 12

// var Num = 35.36;
// var NumInString = Num.toString();
// var Result =  NumInString.replace(".", "");
// document.write ("Number: " + Num + "<br>");
// document.write ("Result: " + Result );

// Question No 13

// var Username = prompt("Enter Your Username:");
// var isValid = true;
// for (var i = 0; i < Username.length; i++) {
//     var charCode = Username.charCodeAt(i); 
//     if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//         isValid = false; 
//         break; 
//     }
// }
// if (isValid) {
//     alert("Username Is Valid: " + Username);
// } else {
//     alert("Invalid Username! Please Enter a Valid Username Without Special Characters (@, ., ,, !).");
// }


// Question No 14

// var ItemsArray = ["Cake", "Apple Pie", "Cookie", "Chips", "Patties"];
// var UserInput = prompt("Welcome To ABC Bakery. What Do You Want To Order Sir / Ma'am: ");
// var LowerCaseInput = UserInput.toLowerCase();

// var ItemIndex = -1;
// for (var i = 0; i < ItemsArray.length; i++) {
//     if (ItemsArray[i].toLowerCase() === LowerCaseInput) {
//         ItemIndex = i; 
//         break; 
//     }
// }

// if (ItemIndex !== -1) {
//     document.write( "<b>"+ UserInput +"</b>" + " Is Available In Our Bakery At Index " + ItemIndex + ".");
// } else {
//     document.write( "We Are Soory, <b>"+ UserInput +"</b>" + " Is Not Available In Our Bakery.");
// }

// Question No 15

// var password = prompt("Enter Your Password:");
// if (password.length < 6) {
//     alert("Invalid Password! It Must Be At Least 6 Characters Long.");
// } 
// else if (password.charAt(0) >= '0' && password.charAt(0) <= '9') {
//     alert("Invalid Password! It Should Not Start With a Number.");
// } 
// else {
//     var hasLetter = false;
//     var hasNumber = false;

//     for (var i = 0; i < password.length; i++) {
//         var char = password[i];
//         if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
//             hasLetter = true; 
//         }
//         if (char >= '0' && char <= '9') {
//             hasNumber = true; 
//         }
//     }

//     if (hasLetter && hasNumber) {
//         alert("Your Password Is Valid.");
//     } else {
//         alert("Invalid Oassword! It Must Contain Both Letters And Numbers.");
//     }
// }

// Question No 16

// var University = "University of Karachi";
// var UniversityArray = University.split(""); 
// console.log (UniversityArray);
// for (var i = 0; i < UniversityArray.length; i++) {
//     console.log(UniversityArray[i] );
// }

// Question No 17

// var UserInput = prompt("Enter Any Text:");
// if (UserInput.length > 0) {
//     var lastCharacter = UserInput[UserInput.length - 1];

//     document.write("User Input: " + UserInput + "<br>");
//     document.write("Last Character: " + lastCharacter);
// } else {
//     document.write("You Did Not Enter Any Text.");
// }

// Question No 18

// var sentence = "The quick brown fox jumps over the lazy dog";
// var lowerCaseSentence = sentence.toLowerCase();
// var wordsArray = lowerCaseSentence.split(" ");
// var count = 0;
// for (var i = 0; i < wordsArray.length; i++) {
//     if (wordsArray[i] === "the") {
//         count++; 
//     }
// }
// document.write("The word 'the' occurs " + count + " times in the given string.");
