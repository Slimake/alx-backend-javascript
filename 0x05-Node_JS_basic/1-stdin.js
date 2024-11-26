const message = 'Welcome to Holberton School, what is your name?';
console.log(message);

process.stdin.on('readable', () => {
  const studentName = process.stdin.read();
  if (studentName !== null) {
    process.stdout.write(`Your name is: ${studentName}`);
  }
  process.stdin.resume();
});

process.stdin.on('end', () => {
  // Display the closing message
  console.log('This important software is now closing');
});
