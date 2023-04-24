const inquirer = require('inquirer');
const path = require('path');
const renderLogo = require('./renderLogo.js');
const logoQuestions = require('./logoQuestions.js');
const fs = require('fs');

const htmlFilePath = path.join(__dirname, '../examples', 'index.html');
const svgFilePath = path.join(__dirname, '../examples', 'logo.svg');




const init = async () => {

    try {
    const logoStyle = await inquirer.prompt(logoQuestions);  

    switch (logoStyle.size) {
        case 'Small':
        logoStyle.size = [150, 100];
        break;
        case 'Medium':
        logoStyle.size = [300, 200];
        break;
        case 'Large':
        logoStyle.size = [450, 300];
        break;
    }

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

    const [html, svg] = renderLogo(logoStyle);
    console.log(html);
    console.log(svg);

    fs.writeFile(htmlFilePath, html, (err) =>
    err ? console.error(err) : console.log("logo.svg creation success!")
    );

    fs.writeFile(svgFilePath, svg, (err) =>
    err ? console.error(err) : console.log("index.html creation including SVG content success!")
    );

    }
catch (err) {
    console.log(err);}
};

module.exports = init;