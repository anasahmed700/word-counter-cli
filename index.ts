#!  /usr/bin/env node

import inquirer from 'inquirer';

const answers: { Sentence: string } = await inquirer.prompt([
    {
        name: 'Sentence',
        type: 'string',
        message: "Enter the sentence to count the words"
    }
])

const words = answers.Sentence.trim().split(' ');

console.log(`The sentence "${answers.Sentence}" has ${words.length} word(s).`);