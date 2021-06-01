var taskNum = 0;
while (taskNum < 1 || taskNum > 18 || taskNum === "" || taskNum === null)
{
  taskNum = prompt("Enter task number:")
  if (taskNum === null || taskNum === "")
  {
    alert("Please enter some value!");
  }
  else if (taskNum < 1 || taskNum > 18)
  {
    alert("There is no such task!");
  }
}

taskNum = +taskNum;

if (taskNum === 1)
{
  //Question 1
  var firstName = "";
  var lastName = "";
  while (firstName === "" || firstName === null)
  {
    firstName = prompt("Enter your first name:");
    if (firstName === "" || firstName === null)
    {
      alert("A name must be provided!");
    }
  }
  while (lastName === "" || lastName === null)
  {
    lastName = prompt("Enter your last name:");
    if (lastName === "" || lastName === null)
    {
      alert("A name must be provided!");
    }
  }
  var fullName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + " " + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
  document.write("Welcome " + fullName + ".");
}

else if (taskNum === 2)
{
  //Question 2
  var favSmartphone = "";
  while (favSmartphone === "" || favSmartphone === null)
  {
    favSmartphone = prompt("Enter your favorite smartphone:");
    if (favSmartphone === "" || favSmartphone === null)
    {
      alert("A name must be provided!");
    }
  }
  document.write("Your favourite smartphone: " + favSmartphone + "<br />");
  document.write("Length of string: " + favSmartphone.length);
}

else if (taskNum === 3)
{
  //Question 3
  var string = "Pakistani";
  document.write("String: " + string + "<br />");
  for (var i = 0; i < string.length; i++)
  {
    if (string[i] === "n")
    {
      document.write("Index of 'n': " + i);
    }
  }
}

else if (taskNum === 4)
{
  //Question 4
  var string = "Hello World";
  var lastIndex;
  document.write("String: " + string + "<br />");
  for (var i = 0; i < string.length; i++)
  {
    if (string[i] === "l")
    {
      lastIndex = i;
    }
  }
  document.write("Last index of 'l': " + lastIndex);
}

else if (taskNum === 5)
{
  //Question 5
  var string = "Pakistani";
  document.write("String: " + string + "<br />");
  document.write("Character at index 3: " + string[3]);
}

else if (taskNum === 6)
{
  //Question 6
  var firstName = "";
  var lastName = "";
  while (firstName === "" || firstName === null)
  {
    firstName = prompt("Enter your first name:");
    if (firstName === "" || firstName === null)
    {
      alert("A name must be provided!");
    }
  }
  while (lastName === "" || lastName === null)
  {
    lastName = prompt("Enter your last name:");
    if (lastName === "" || lastName === null)
    {
      alert("A name must be provided!");
    }
  }
  var cappedFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + " ";
  var cappedLastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
  var fullName = cappedFirstName.concat(cappedLastName);
  document.write("Welcome " + fullName + ".");
}

else if (taskNum === 7)
{
  //Question 7
  var cityName = "Hyderabad";
  document.write("City: " + cityName + "<br />");
  for (var i = 0; i < cityName.length; i++)
  {
    if (cityName.slice(i, i + 5) === "Hyder")
    {
      cityName = "Islam" + cityName.slice(i + 5);
    }
  }
  document.write("After replacement: " + cityName);
}

else if (taskNum === 8)
{
  //Question 8
  var message = "Ali and Sami are best friends. They play cricket and football together.";
  document.write("Before modification:<br /><br />");
  document.write(message + "<br /><br /><br />");
  for (var i = 0; i < message.length; i++)
  {
    if (message.slice(i, i + 3) === "and")
    {
      message = message.slice(0, i) + "&" + message.slice(i + 3);
    }
  }
  document.write("After modification:<br /><br />");
  document.write(message);
}

else if (taskNum === 9)
{
  //Question 9
  var value = "472";
  document.write("Value: " + value + "<br />");
  document.write("Type: " + typeof (value) + "<br /><br />");
  value = Number(value);
  document.write("Value: " + value + "<br />");
  document.write("Type: " + typeof (value));
}

else if (taskNum === 10)
{
  //Question 10
  var userInput = "";
  while (userInput === "" || userInput === null)
  {
    userInput = prompt("Enter some text:");
    if (userInput === "" || userInput === null)
    {
      alert("Some text must be provided!");
    }
  }
  document.write("User Input: " + userInput + "<br />");
  document.write("Upper Case: " + userInput.toUpperCase());
}

else if (taskNum === 11)
{
  //Question 11
  var userInput = "";
  while (userInput === "" || userInput === null)
  {
    userInput = prompt("Enter some text:");
    if (userInput === "" || userInput === null)
    {
      alert("Some text must be provided!");
    }
  }
  document.write("User Input: " + userInput + "<br />");
  document.write("Lower Case: " + userInput.toLowerCase());
}

else if (taskNum === 12)
{
  //Question 12
  var num = 35.36;
  document.write("Number: " + num + "<br />");
  num = num.toString();
  for (var i = 0; i < num.length; i++)
  {
    if (num[i] === ".")
    {
      num = num.slice(0, i) + num.slice(i + 1);
    }
  }
  document.write("Result: " + num);
}

else if (taskNum === 13)
{
  //Question 13
  var forbiddenChars = ["!", ",", ".", "@"];
  var userName = "";
  while (userName === "" || userName === null)
  {
    userName = prompt("Enter username:");
    if (userName === "" || userName === null)
    {
      alert("You can't cancel or enter nothing!");
    }
  }
  for (var i = 0; i < userName.length; i++)
  {
    for (var j = 0; j < forbiddenChars.length; j++)
    {
      if (userName[i] === forbiddenChars[j])
      {
        userName = prompt("Please enter a valid username!");
        while (userName === "" || userName === null)
        {
          if (userName === "" || userName === null)
          {
            alert("You can't cancel or enter nothing!");
          }
          userName = prompt("Please enter a valid username:");
        }
        i = 0;
        j = -1;
      }
    }
  }
  alert("You username is valid!");
}

else if (taskNum === 14)
{
  //%wQuestion 14
  var A = ["cake", "apple pie", "cookie", "chips", "patties"];
  var matchFound = false;
  var userItem = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am ?");
  while (userItem === "" || userItem === null)
  {
    if (userItem === "")
    {
      alert("You entered nothing!");
    }
    else if (userItem === null)
    {
      alert("You can't cancel!");
    }
    userItem = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am ?");
  }
  for (var i = 0; i < A.length; i++)
  {
    if (userItem.toLowerCase() === A[i])
    {
      matchFound = true;
      userItem = userItem[0].toUpperCase() + userItem.slice(1).toLowerCase();
      document.write(userItem + " is <b>available</b> at index " + i + " in our bakery.")
      break;
    }
  }
  if (!matchFound)
  {
    userItem = userItem[0].toUpperCase() + userItem.slice(1).toLowerCase();
    document.write("We are sorry. " + userItem + " is <b>not available</b> in our bakery.");
  }
}

else if (taskNum === 15)
{
  //Question 15
  var password = "",
    letterCount = 0,
    numberCount = 0;
  while (password === "" || password === null)
  {
    password = prompt("Enter your password:");
    if (password === "" || password == null)
    {
      alert("Please enter a password!")
    }
  }

  if (password[0] >= "0" && password[0] <= "9")
  {
    alert("Your input begins with a number. Please enter a valid password!");
  }
  else if (password.length < 6)
  {
    alert("Your input has less than 6 characters. Please enter a valid password!");
  }
  else
  {
    for (var i = 0; i < password.length; i++)
    {
      if ((password[i] >= "A" && password[i] <= "Z") || (password[i] >= "a" && password[i] <= "z"))
      {
        letterCount += 1;
      }
      else if (password[i] >= "0" && password[i] <= "9")
      {
        numberCount += 1;
      }
    }
    if (letterCount === 0 && numberCount === 0)
    {
      alert("Your input has no alphabet or number. Please enter a valid password!");
    }
    else if (letterCount === 0)
    {
      alert("Your input has no alphabet. Please enter a valid password!");
    }
    else if (numberCount === 0)
    {
      alert("Your input has no number. Please enter a valid password!");
    }
  }
  if (letterCount > 0 && numberCount > 0)
  {
    alert("Your password is valid!");
  }
}

else if (taskNum === 16)
{
  //Question 16
  var university = "University of Karachi";
  university = university.split("");
  for (var i = 0; i < university.length; i++)
  {
    document.write(university[i] + "<br />");
  }
}

else if (taskNum === 17)
{
  //Question 17
  var userInput = "";
  while (userInput === "" || userInput === null)
  {
    userInput = prompt("Enter some text:");
    if (userInput === "" || userInput === null)
    {
      alert("Some text must be provided!");
    }
  }
  document.write("User Input: " + userInput + "<br />");
  document.write("Last character of input: " + userInput[userInput.length - 1]);
}

else if (taskNum === 18)
{
  //Question 18
  var text = "The quick brown fox jumps over the lazy dog.";
  var wordCount = 0;
  for (var i = 0; i < text.length; i++)
  {
    if (text.slice(i, i + 3).toLowerCase() === "the")
    {
      wordCount += 1;
    }
  }
  document.write("Text: " + text + "<br />");
  document.write("There are " + wordCount + " occurrences of the word 'the'.");
}

else
{
  alert("Invalid task id!");
}