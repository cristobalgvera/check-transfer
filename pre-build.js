const fs = require('fs');

const BASE_PATH = './apps/transfer-app/src/environments';
const TEMPLATE_FILE_PATH = `${BASE_PATH}/environment.template.ts`;
const RESULT_FILE_PATH = `${BASE_PATH}/environment.prod.ts`;

const replacements = [
  {
    pattern: /API_URL/g,
    replacement: process.env.API_URL,
  },
];

fs.readFile(
  TEMPLATE_FILE_PATH,
  { encoding: 'utf-8' },
  (readError, templateFile) => {
    if (readError) return console.log(readError);

    const resultFile = replacements.reduce(
      (encodedFile, { pattern, replacement }) =>
        encodedFile.replace(pattern, replacement),
      templateFile
    );

    fs.writeFile(
      RESULT_FILE_PATH,
      resultFile,
      { encoding: 'utf-8' },
      (writeError) => {
        console.log(writeError || 'Environment file saved');
      }
    );
  }
);
