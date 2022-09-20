const fs = require('fs');

const BASE_PATH = './apps/transfer-app/src/environments';
const ENCODED_FILE_PATH = `${BASE_PATH}/environment.encoded.ts`;
const DECODED_FILE_PATH = `${BASE_PATH}/environment.prod.ts`;

const replacements = [
  {
    pattern: /API_URL/g,
    replacement: process.env.API_URL,
  },
];

fs.readFile(
  ENCODED_FILE_PATH,
  { encoding: 'utf-8' },
  (readError, encodedFile) => {
    if (readError) return console.log(readError);

    const result = replacements.reduce(
      (file, { pattern, replacement }) => file.replace(pattern, replacement),
      encodedFile
    );

    fs.writeFile(
      DECODED_FILE_PATH,
      result,
      { encoding: 'utf-8' },
      (writeError) => {
        console.log(writeError || 'Environment file saved');
      }
    );
  }
);
