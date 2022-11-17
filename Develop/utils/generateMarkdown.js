//TODO: Create a function that returns a license badge based on which license is passed in
//If there is no license, return an empty string
function renderLicenseBadge(license) {
  let url = licenseBadges[`${license}`]

  if (license === 'None'){
    return "No License Used"
  }
  return url
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let url = licenseLink[`${license}`]

  if (license === 'None'){
    return ""
  }
  return url
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

const licenseBadges = {

  Apache: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]
  (https://opensource.org/licenses/Apache-2.0)`,

  Boost: `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`,

  BSD3: `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,

  BSD2: `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`,

  CreativeCommons: `[![License](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`,

  Eclipse: `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`,

  GNU: `[![License](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`,

  MIT: `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

}

//console.log(licenseBadges[`GNU`]);

const licenseLink = {

  Apache: `(https://opensource.org/licenses/Apache-2.0)`,

  Boost: `(https://www.boost.org/LICENSE_1_0.txt)`,

  BSD3: `(https://opensource.org/licenses/BSD-3-Clause)`,

  BSD2: `(https://opensource.org/licenses/BSD-2-Clause)`,

  CreativeCommons: `(http://creativecommons.org/publicdomain/zero/1.0/)`,

  Eclipse: `(https://opensource.org/licenses/EPL-1.0)`,

  GNU: `(https://www.gnu.org/licenses/agpl-3.0)`,

  MIT: `(https://opensource.org/licenses/MIT)`

}


module.exports.renderLicenseBadge = renderLicenseBadge;
module.exports.renderLicenseLink = renderLicenseLink;