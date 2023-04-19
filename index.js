const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const renderLogo = require('./lib/renderLogo');

const logoQuestions = [
  {
    type: 'list',
    name: 'shape',
    message: 'What type of logo would you like to create?',
    choices: ['Square', 'Circle', 'Triangle'],
  },
  {
    type: 'list',
    name: 'color',
    message: 'What color would you like your logo to be?',
    choices: ['Red', 'Green', 'Blue'],
  },
  {
    type: 'input',
    name: 'text',
    message: 'What text would you like to appear on your logo?',
  },
  {
    type: 'list',
    name: 'textColor',
    message: 'What color would you like your text to be?',
    choices: ['Red', 'Green', 'Blue'],
  }
];

const init = async () => {

  try {
    const logoStyle = await inquirer.prompt(logoQuestions);  
    if (logoStyle.color === logoStyle.textColor) {
      console.log("You can't have the same color for your logo and your text. Please try again.");
      return init();
    }

    if (logoStyle.text.length > 3) {
      console.log("Your text must be 3 characters or less. Please try again.");
      return init();
    }
    if (logoStyle.text.length < 1) {
      console.log("Your text must be at least 1 character. Please try again.");
      return init();
    }

    

    fs.writeFile(`./examples/index.html`, renderLogo(logoStyle), (logoStyle), (err) =>
    err ? console.error(err) : console.log("HTML creation including SVG content success!")
    );

    // fs.writeFile(path.join(__dirname, 'examples', 'logo.svg'), renderLogo(logoStyle), (err) =>
    //   err ? console.log(err) : console.log('Success!')
    // );
    
    //console.log(renderLogo(logoStyle));
}
catch (err) {
  console.log(err);}
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
