const inquirer = require('inquirer');
const path = require('path');
const RenderLogo = require('./lib/renderLogo');
const {renderLogo} = require('./lib/renderLogo');



const logoQuestions = [
  {
    type: 'list',
    name: 'logoShape',
    message: 'What type of logo would you like to create?',
    choices: ['Triangle', 'Circle', 'Square'],
  },
  {
    type: 'list',
    name: 'logoColor',
    message: 'What color would you like your logo to be?',
    choices: ['Red', 'Green', 'Blue'],
  },
  {
    type: 'input',
    name: 'logoText',
    message: 'What text would you like to appear on your logo?',
  },
];


const init = async () => {
  try {

    const logoStyle = await inquirer.prompt(logoQuestions);  
    const {logoShape, logoColor, logoText} = logoStyle;
    console.log(logoStyle);

    const logo = new RenderLogo(logoStyle);

    logo.eggs();
}
catch (err) {
  console.log(err + "CATCH ERROR");}
};


init();



  
// ├── examples/           // Example svg file(s) created with the app
// ├── lib/                // Folder for classes or functions
//     ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
//     ├── shapes.test.js  // Jest tests for shapes
//     └── more...         // Additional files and tests
// ├── .gitignore          // Indicates which folders and files Git should ignore
// ├── index.js            // Runs the application using imports from lib/
// ├── package.json
// └── README.md           // App description, link to video, setup and usage instructions           
