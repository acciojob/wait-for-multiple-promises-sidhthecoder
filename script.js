// Get the output tbody element
const output = document.getElementById("output");

// Create an array of 3 Promises that resolve after a random time between 1 and 3 seconds
const promises = [
  new Promise(resolve => setTimeout(() => resolve(Math.floor(Math.random() * 3) + 1), Math.floor(Math.random() * 3000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve(Math.floor(Math.random() * 3) + 1), Math.floor(Math.random() * 3000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve(Math.floor(Math.random() * 3) + 1), Math.floor(Math.random() * 3000) + 1000))
];

// Add a row to the table with the text "Loading..." while waiting for the promises to resolve
output.innerHTML = '<tr><td colspan="2">Loading...</td></tr>';

// Wait for all promises to resolve using Promise.all()
Promise.all(promises)
  .then(results => {
    // Remove the "Loading..." row from the table
    output.innerHTML = "";

    // Add a row for each resolved promise with the promise name and time taken
    for (let i = 0; i < results.length; i++) {
      const row = document.createElement("tr");
      row.innerHTML = `<td>Promise ${i + 1}</td><td>${results[i]}</td>`;
      output.appendChild(row);
    }

    // Add a row with the total time taken to resolve all promises
    const totalRow = document.createElement("tr");
    const totalTime = results.reduce((acc, curr) => acc + curr, 0);
    totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`;
    output.appendChild(totalRow);
  })
  .catch(error => {
    // Handle errors here
    console.error(error);
  });
