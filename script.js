//your JS code here. If required.
// get the table element
const table = document.getElementById('myTable');

// create an array of 3 promises that resolve after a random time between 1 and 3 seconds
const promises = [
  new Promise(resolve => setTimeout(() => resolve(Math.floor(Math.random() * 3) + 1), Math.floor(Math.random() * 3000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve(Math.floor(Math.random() * 3) + 1), Math.floor(Math.random() * 3000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve(Math.floor(Math.random() * 3) + 1), Math.floor(Math.random() * 3000) + 1000))
];

// add a row that spans 2 columns with the text "Loading..."
const loadingRow = table.insertRow();
const loadingCell = loadingRow.insertCell();
loadingCell.colSpan = 2;
loadingCell.innerText = 'Loading...';

// wait for all promises to resolve using Promise.all
Promise.all(promises).then(values => {
  // remove the loading row
  table.deleteRow(loadingRow.rowIndex);

  // add rows for each promise and its resolved value
  const row1 = table.insertRow();
  const row1col1 = row1.insertCell();
  const row1col2 = row1.insertCell();
  row1col1.innerText = 'Promise 1';
  row1col2.innerText = values[0];

  const row2 = table.insertRow();
  const row2col1 = row2.insertCell();
  const row2col2 = row2.insertCell();
  row2col1.innerText = 'Promise 2';
  row2col2.innerText = values[1];

  const row3 = table.insertRow();
  const row3col1 = row3.insertCell();
  const row3col2 = row3.insertCell();
  row3col1.innerText = 'Promise 3';
  row3col2.innerText = values[2];

  // calculate the total time taken to resolve all promises
  const totalTime = values.reduce((acc, curr) => acc + curr, 0);

  // add a row for the total time taken
  const totalRow = table.insertRow();
  const totalCol1 = totalRow.insertCell();
  const totalCol2 = totalRow.insertCell();
  totalCol1.innerText = 'Total';
  totalCol2.innerText = totalTime.toFixed(3);
});
