// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  // if(!license){
  //   return('')
  // }
  return;
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
  ${data.licenses}
  ---
  
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
