const quotePart1 = [
    "Ask not what your country can do for you, ",
    "A bird in the hand is worth ",
    "Eighty percent of success is ",
    "Genius is one percent inspiration and ",
    "He travels the fastest who ",
    "Hell has no fury like a ",
    "I think, therefore ",
    "If you're going through hell, ",

];
const quotePart2 = [
    "Ask what you can do for your country.",
    "Two in the bush.",
    "showing up.",
    "ninety-nine percent perspiration.",
    "travels alone.",
    "woman scorned.",
    "I am.",
    "keep going.",

];
const quoteAuthor = [
    "John. F. Kennedy",
    "Woody Allen",
    "Thomas Edison",
    "Rudyard Kipling",
    "William Congreve",
    "Rene Descartes",
    "Winston Churchill."
];

const randNumber = max => Math.floor(Math.random() * max); // Quick helper function for getting a random number within a range.

const buildMessage = () => {
    // Random parts of quotes are selected.
    const part1 = quotePart1[randNumber(quotePart1.length)];
    const part2 = quotePart2[randNumber(quotePart2.length)];
    const author = quoteAuthor[randNumber(quoteAuthor.length)];
    
    const formattedString = `
    ${part1}${part2}
    ---${author}---
    `;
    return formattedString;
}

console.log(buildMessage());