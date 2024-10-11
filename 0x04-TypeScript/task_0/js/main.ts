interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Tom',
  lastName: 'Snow',
  age: 34,
  location: 'Abuja', 
};

const student2: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 31,
  location: 'Lagos', 
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

// Loop through the array and create a row for each element
studentsList.forEach(item => {
  const row = document.createElement('tr');
  
  const cell = document.createElement('td');
  cell.textContent = item.firstName; // Set the text content of the cell
  cell.textContent = item.location; // Set the text content of the cell
  row.appendChild(cell); // Append the cell to the row
  table.appendChild(row); // Append the row to the table
});
