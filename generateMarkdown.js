// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return('')
  }
  switch(license) {
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT";
    case 'Apache':
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case 'GNU':
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case 'Mozilla':
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  };


 
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  return;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  return;
};
//##${data.questions} //questions
//##${data.thingsLearned} //things i learned
// ##${data.instructions} //instructions to use
// TODO: Create a function to generate markdown for README
//create README template here using normal markdowkn
// and template literals to add in key user info
function generateMarkdown(data) {
  
  return `
  # ${data.title}  
  ${data.license}
  ---
  
  ${data.myName}  
  Contact Me: ${data.email}  
  Contributors: ${data.contributors}  
  Version: ${data.version}    
  Testing with: ${data.testing}

  
  ## ${data.repoTitle}  
  ---
  ${data.repoDescription}
  
  Table of Contents:
  ${data.table}   
  
  ![project snapshot](${data.imageSnap})  
  
  ### Installation:
  ${data.install}  
  ### Future Development Ideas:
  ${data.futureDevelop}  
  ### How to leave your feedback:
  ${data.feedback}   
  ### Sources used to create project:
  ${data.sources}    
  
`;
};

module.exports = generateMarkdown;
