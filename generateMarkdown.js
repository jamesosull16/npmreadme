function generateBadge(data) {
  console.log(data.licenses);
  switch (data.licenses) {
    case "Apache 2.0 License":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

    case "Mozialla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    case "IBM Public License Version 1.0":
      return "[![License: IPL]](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";

    case "ISC License":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";

    default:
      break;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  const badge = generateBadge(data);
  return `# ${data.appname}
${badge}
---

## Description

${data.description}

---

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

---

## Installation

To install dependencies, run the following command

\`\`\`
${data.installation}
\`\`\`

---
## Usage

${data.usage}

---

## Licenses

This project is licensed under the ${data.licenses}

---

## Contributing

${data.contributing}

---

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

  `;
}

module.exports = generateMarkdown;
