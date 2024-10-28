// Example data
const questions = Array(100000).fill({ name: "example question name" });
questions.push({ name: "target pattern here" }); // Add a matching pattern

// Using for loop with .push()
function findWithForLoopPush(questions, pattern) {
    const foundQuestions = [];
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].name.includes(pattern)) {
            foundQuestions.push(questions[i]);
        }
    }
    return foundQuestions;
}

// Using for loop with direct assignment
function findWithForLoopDirect(questions, pattern) {
    const foundQuestions = [];
    let index = 0;
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].name.includes(pattern)) {
            foundQuestions[index] = questions[i];
            index++;
        }
    }
    return foundQuestions;
}

// Test pattern
const pattern = "pattern";

// Timing for loop with .push() method
console.time("For Loop with .push()");
const resultForLoopPush = findWithForLoopPush(questions, pattern);
console.timeEnd("For Loop with .push()");

// Timing for loop with direct assignment
console.time("For Loop with direct assignment");
const resultForLoopDirect = findWithForLoopDirect(questions, pattern);
console.timeEnd("For Loop with direct assignment");

// Output results
console.log("For loop with .push() result count:", resultForLoopPush.length);
console.log("For loop with direct assignment result count:", resultForLoopDirect.length);
