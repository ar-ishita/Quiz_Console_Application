let readlineSync = require("readline-sync"); //add module to take input from user
let kuler = require("kuler"); //this module is to add color
const Table = require("cli-table"); //to display leaderboard in table format

let score = 0; //initially score is zero

//taking the name from user
let userName = readlineSync.question("What's your name?");

console.log(kuler(`\nHello ${userName}! Welcome to Quiz Contest`, "#dc2626"));

//select the category for which user want to give quiz
console.log(kuler("Kindly select a category: JavaScript or Java", "#0284c7"));

const categories = ["JavaScript", "Java"];
let selectedCategory = readlineSync.keyInSelect(
  categories,
  "Select a category"
);

//if user does not select any category
if (selectedCategory === -1) {
  console.log("Goodbye!");
  process.exit(0);
}
//rules
console.log(
  kuler("Kindly select any options by typing either a/b/c/d\n", "#0284c7")
);
/** Creating data set */
const database = {
  data: [
    // Add questions for JavaScript category
    {
      question: "JavaScript is an _____ language?",
      options: {
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Procedural",
      },
      correctAnswer: "a",
      category: "JavaScript",
    },
    {
      question:
        "Which of the following keyboards is used to define a varibale in JavaScript?",
      options: {
        a: "var",
        b: "let",
        c: "Both A and B",
      },
      correctAnswer: "c",
      category: "JavaScript",
    },
    {
      question:
        "Which of the following methods is used to access HTML elements using JavaScript?",
      options: {
        a: "getElementbyId()",
        b: "getElementsByClassName()",
        c: "Both A and B",
      },
      correctAnswer: "c",
      category: "JavaScript",
    },
    {
      question:
        "Upon encountering empty statements, what does the JavaScript Interpreter do?",
      options: {
        a: "Throws an error",
        b: "Ignores the statements",
        c: "Gives a warning",
        d: "None of the above",
      },
      correctAnswer: "b",
      category: "JavaScript",
    },
    {
      question:
        "Which of the following methods can be used to display data in some form using JavaScript?",
      options: {
        a: "document.write()",
        b: "console.log()",
        c: "window.alert()",
        d: "All of the above",
      },
      correctAnswer: "d",
      category: "JavaScript",
    },

    {
      question:
        "What keyword is used to check whether a given property is valid or not?",
      options: {
        a: "in",
        b: "is in",
        c: "exists",
        d: "lies",
      },
      correctAnswer: "a",
      category: "JavaScript",
    },

    {
      question:
        "When an operator's value is NULL, the typeof returned by the unary operator is",
      options: {
        a: "Boolean",
        b: "Undefined",
        c: "Object",
        d: "Integer",
      },
      correctAnswer: "c",
      category: "JavaScript",
    },
    {
      question: "What does the JavaScript debugger statement do?",
      options: {
        a: "It will debug all the errors in the program at runtime",
        b: "It acts as a breakpoint in a program",
        c: "It will debug errro in the current statement do?",
        d: "All of the above",
      },
      correctAnswer: "b",
      category: "JavaScript",
    },
    {
      question: "What does the toLocateString() method do in JS?",
      options: {
        a: "Returns a localised object representation",
        b: "Returns a parsed string",
        c: "Returns a localized string representation of an object",
        d: "None of the above.",
      },
      correctAnswer: "c",
      category: "JavaScript",
    },
    {
      question:
        "Which function is used to serialize an object into a JSON string in JavaScript?",
      options: {
        a: "stringify()",
        b: "parse()",
        c: "convert()",
      },
      correctAnswer: "a",
      category: "JavaScript",
    },
    {
      question: "Which of the following are closures in JavaScript?",
      options: {
        a: "Variables",
        b: "Functions",
        c: "Objects",
        d: "All the above",
      },
      correctAnswer: "d",
      category: "JavaScript",
    },

    {
      question: "Which of the following is not a JavaScript framework?",
      options: {
        a: "Node",
        b: "Vue",
        c: "React",
        d: "Cassandra",
      },
      correctAnswer: "d",
      category: "JavaScript",
    },

    // Add questions for Java category
    {
      question: "What is the size of float and double in java?",
      options: {
        a: "32 and 64",
        b: "32 and 32",
        c: "64 and 64",
        d: "64 and 32",
      },
      correctAnswer: "a",
      category: "Java",
    },
    {
      question:
        "Automatic type conversion is possible in which of the possible cases?",
      options: {
        a: "Byte to int",
        b: "int to long",
        c: "Long to int",
        d: "Short to int",
      },
      correctAnswer: "b",
      category: "Java",
    },
    {
      question:
        "When an array is passed to a method, what does the method receive?",
      options: {
        a: "The reference of the array",
        b: "A copy of the array",
        c: "Length of the array",
        d: "Copy of First Element",
      },
      correctAnswer: "a",
      category: "Java",
    },
    {
      question: "Arrays in Java are - ",
      options: {
        a: "Object references",
        b: "objects",
        c: "Primitive data type",
        d: "None",
      },
      correctAnswer: "b",
      category: "Java",
    },
    {
      question: "When is the object created with new keyword?",
      options: {
        a: "At run time",
        b: "At compile time",
        c: "Depends on the code",
        d: "None",
      },
      correctAnswer: "a",
      category: "Java",
    },
    {
      question: "Identify the corrected definition of a package",
      options: {
        a: "A package is a collection of editing tools",
        b: "A package is a collection of classes",
        c: "A package is a collection of classes and interfaces",
        d: "A package is a collection of interfaces",
      },
      correctAnswer: "c",
      category: "Java",
    },
    {
      question: "In which of the following is toString() method defined?",
      options: {
        a: "java.lang.Object",
        b: "java.lang.String",
        c: "java.lang.util",
        d: "None",
      },
      correctAnswer: "a",
      category: "Java",
    },
    {
      question: "compareTo() returns",
      options: {
        a: "True",
        b: "False",
        c: "An int value",
      },
      correctAnswer: "c",
      category: "Java",
    },
    {
      question: "Total constructor string class have?",
      options: {
        a: "3",
        b: "7",
        c: "13",
        d: "20",
      },
      correctAnswer: "c",
      category: "Java",
    },
    {
      question:
        "Identify the return type of a method that does not return any value",
      options: {
        a: "int",
        b: "void",
        c: "double",
        d: "None",
      },
      correctAnswer: "b",
      category: "Java",
    },
    {
      question:
        "Where does the system stores parameters and local variables whenever a method is invoked?",
      options: {
        a: "Heap",
        b: "Stack",
        c: "Array",
        d: "Tree",
      },
      correctAnswer: "b",
      category: "Java",
    },
  ],
};

/** Creating Leader Board */
const leaderBoard = {
  data: [
    {
      name: "Ashish",
      score: 7,
      category: "Java",
    },
    {
      name: "Riya",
      score: 8,
      category: "JavaScript",
    },
    {
      name: "Jay",
      score: 6,
      category: "Java",
    },
  ],
};

//Next step is to display questions and options
//we will be applying for loop
//all the questions are in array and now we can loop over the array
function showQuestionAndOptions(category) {
  const categoryQuestions = database.data.filter(
    (question) => question.category === category
  );

  for (let i = 0; i < categoryQuestions.length; i++) {
    console.log(`\nQ${i + 1} - ${categoryQuestions[i].question}\n`);

    for (let key in categoryQuestions[i].options) {
      console.log(`${key} - ${categoryQuestions[i].options[key]}`);
    }

    const userAnswer = readlineSync
      .question("Enter your answer - (a/b/c/d) - ")
      .toLowerCase();
    playGame(userAnswer, categoryQuestions[i].correctAnswer);
  }
}

//this function will have all the logic part
//in this we have to check that the user the answer user has entered is correct or not
/** Main Logic */
function playGame(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log(kuler("Correct Answer", "#065f46"));
    score++;
  } else {
    console.log(kuler("Incorrect Answer", "#b91c1c"));
    //showing correct answer
    console.log(kuler(`Correct Answer is ${correctAnswer}`, "#155e75"));
  }
}

//function that will show the high score
//this function will take the array
function highScore(leaderBoard) {
  //show the leaderboard
  //first we have to check if we have scored higher than the existing people
  leaderBoard.data.push({
    name: userName,
    score: score,
    category: categories[selectedCategory],
  });
  const sortedScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);

  console.log(kuler("\nCheck your position on the Leader Board 🏆", "#fbbf24"));

  //display the leaderboard in table format
  const table = new Table({
    head: ["Name", "Score", "Category"],
    colWidths: [15, 10, 15],
  });

  sortedScoreList.forEach((leader) => {
    table.push([leader.name, leader.score, leader.category]);
  });

  console.log(table.toString());
}

// Function to check and notify if the user's score is higher
function notifyNewHighScore() {
  let isNewHighScore = false;
  leaderBoard.data.forEach((leader) => {
    if (score > leader.score) {
      isNewHighScore = true;
    }
  });

  if (isNewHighScore) {
    console.log(
      kuler(
        `${userName} Congratulations! You've achieved a new high score! 🥇`,
        "#fbbf24"
      )
    );
  }
}

showQuestionAndOptions(categories[selectedCategory]);
console.log(kuler(`\nYour score is - ${score}`, "#ec4899"));
highScore(leaderBoard);
notifyNewHighScore();

//replit link
//https://replit.com/@ishitaarora1902/Nodejs#index.js?embed=1&output=1
