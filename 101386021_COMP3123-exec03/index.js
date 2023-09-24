const http = require("http");
// Import the Employee Module
const employees = require('./Employee.js');
console.log(employees);

console.log("Lab 03 - NodeJs");

// Define Server Port
const port = process.env.PORT || 3000;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
    } else {
        if (req.url === '/') {
            // Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Welcome to Lab Exercise 03</h1>');
        }

        if (req.url === '/employee') {
            // Display all details for employees in JSON format
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(employees));
        }

        if (req.url === '/employee/names') {
            // Display only all employees {first name + lastname} in Ascending order in JSON Array
            const sortedNames = employees.map(employee => `${employee.firstName} ${employee.lastName}`).sort();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(sortedNames));
        }

        if (req.url === '/employee/totalsalary') {
            // Calculate and display Sum of all employees' salaries in JSON format
            const totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0);
            const response = { total_salary: totalSalary };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(response));
        }
    }

    // If none of the routes match, return a 404 error
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

