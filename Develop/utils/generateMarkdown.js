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

  'Apache License 2.0': `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,

  'Boost Software License 1.0': `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`,

  'BSD 3-Clause "New" or "Revised" License': `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,

  'BSD 2-Clause "simplified" License': `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`,

  'Creative Commons Zero v1.0 Universal': `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`,

  'Eclipse Public License 2.0': `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`,

  'GNU General Public License v3.0': `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,

  'MIT license': `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

}

const licenseLink = {

  'Apache License 2.0': `(https://opensource.org/licenses/Apache-2.0)`,

  'Boost Software License 1.0': `(https://www.boost.org/LICENSE_1_0.txt)`,

  'BSD 3-Clause "New" or "Revised" License': `(https://opensource.org/licenses/BSD-3-Clause)`,

  'BSD 2-Clause "simplified" License': `(https://opensource.org/licenses/BSD-2-Clause)`,

  'Creative Commons Zero v1.0 Universal': `(http://creativecommons.org/publicdomain/zero/1.0/)`,

  'Eclipse Public License 2.0': `(https://opensource.org/licenses/EPL-1.0)`,

  'GNU General Public License v3.0': `(https://www.gnu.org/licenses/agpl-3.0)`,

  'MIT license': `(https://opensource.org/licenses/MIT)`

}


module.exports.renderLicenseBadge = renderLicenseBadge;
module.exports.renderLicenseLink = renderLicenseLink;