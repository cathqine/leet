export const processInputDataReadLineByLine = () => {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout // Output is not strictly needed for reading, but often included
  });

  rl.on('line', (line) => {
    // Process each line as it is read
    console.log(`Received line: ${line}`);
  });

  rl.on('close', () => {
    console.log("Finished reading input line by line.");
  });
}