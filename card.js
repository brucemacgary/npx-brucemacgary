#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.bold("email")}?`,
                value: () => {
                    open("mailto:kushagraraj6323@gmail.com");
                    console.log("\nThanks for contacting me! :D\n");
                }
            },
            {
                name: `Join my ${chalk.bold("discord")} server?`,
                value: () => {
                    open("https://discord.gg/etEquR5");
                    console.log("\nThanks for joining my community! :D\n");
                }
            },
            {
                name: "Exit",
                value: () => {
                    console.log("Have a nice day! :D\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                       BruceMacGary"),
    fact: chalk.hex('#ff0000')('I love playing video games!'),
    discord: chalk.hex('#ffac00')("https://discord.gg/etEquR5"),
    github: chalk.hex('#fff100')("https://github.com/BruceMacGary"),
    website: chalk.hex('#0bff00')("https://brucemacgary.github.io"),
    npx: chalk.hex('#00f6ff')("npx brucemacgary"),

    labelFact: chalk.hex('#00f6ff').bold("          Fun Fact:"),
    labelDiscord: chalk.hex('#0bff00').bold("        Discord:"),
    labelGitHub: chalk.hex('#fff100').bold("         GitHub:"),
    labelWebsite: chalk.hex('#ffac00').bold("        Website:"),
    labelCard: chalk.hex('#ff0000').bold("                  Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        ``,
        `${data.labelDiscord}  ${data.discord}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelWebsite}  ${data.website}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold(
            "Hi there! I'm Bruce, my real name is Kushagra. " 
        )}`,
        `${chalk.bold("I am a developer from IN, who loves to learn new things! ")}`,
        `${chalk.bold(
            "I like to make stuff using js, and also like to make web apps. "
        )}`,
        `${chalk.bold(
            "Wanna talk? we can talk on discord or on mails!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);
const tip = [
    `Tip: ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above to open them in your broswer.`,
    '',
].join("\n");
console.log(tip);


prompt(questions).then(answer => answer.action());