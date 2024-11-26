const message = 'Welcome to Holberton School, what is your name?';
console.log(message);

process.stdin.on('readable', function() {
  const student_name = process.stdin.read();
  if (student_name !== null) {
    process.stdout.write(`Your name is: ${student_name}`)
  }
  process.stdin.resume();
  // Display the closing message
  console.log('This important software is now closing');

  // Exit the process
  process.exit();
});
