const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------

const backPages = new Stack();
const nextPages = new Stack();
let currentPage = 'Start page';

// ------------------------------
// Helper Functions
// ------------------------------

showCurrentPage = (action) => {
    console.log(`\n${action}`);
    console.log(`Current page = ${currentPage}`);
    console.log('Back page = ', backPages.peek());
    console.log('Next page = ', nextPages.peek());
}

const newPage = (page) => {
    backPages.push(currentPage)
    currentPage = page
    while (!nextPages.isEmpty()) {
        nextPages.pop()
    }
    showCurrentPage(`New: ${currentPage}`)
}

const backPage = () => {
    nextPages.push(currentPage)
    currentPage = backPages.pop()
    showCurrentPage(`Back: ${currentPage}`)
}

const nextPage = () => {
    backPages.push(currentPage)
    currentPage = nextPages.pop()
    showCurrentPage(`Next: ${currentPage}`)
}

/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// ------------------------------
// User Interface Part 1
// ------------------------------

let finish = false
let showBack = false
let showNext = false
showCurrentPage('Default: ')

while (finish !== true) {
    let instructions = baseInfo

    if (backPages.peek() != null) {
        instructions = `${instructions}, ${backInfo}`
        showBack = true
    } else {
        showBack = false
    }

    if (nextPages.peek() != null) {
        instructions = `${instructions}, ${nextInfo}`
        showNext = true
    } else {
        showNext = false
    }
    instructions = `${instructions}, ${quitInfo}`
    console.log(instructions)

    // ------------------------------
    // User Interface Part 2
    // ------------------------------

    const answer = prompt(question)
    const lowerCaseAnswer = answer.toLowerCase()
    const options = ['b', 'n', 'q'];

    if (!options.includes(lowerCaseAnswer)) {
        newPage(answer)
    } else if (lowerCaseAnswer === 'b' && showBack) {
        backPage()
    } else if (lowerCaseAnswer === 'n' && showNext) {
        nextPage()
    } else if (lowerCaseAnswer === 'q') {
        finish = true
    }
}
