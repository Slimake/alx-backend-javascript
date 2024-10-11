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
  
  const cell1 = document.createElement('td');
  const cell2 = document.createElement('td');
  cell1.textContent = item.firstName; // Set the text content of the cell
  cell2.textContent = item.location; // Set the text content of the cell
  row.appendChild(cell1); // Append the cell to the row
  row.appendChild(cell2)
  table.appendChild(row); // Append the row to the table
});

document.querySelector('body').appendChild(table);
