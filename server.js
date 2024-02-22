import express from 'express';


const app = express();

// Set static folder
app.use(express.static('public'));
// Parse URL-encoded bodies (as sent by API clients)
app.use(express.urlencoded({extended: true}));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Handle GET requests to fetch users
app.get('/users', (req, res) => {
    const users = [
        {id: 1, name: 'Zakbay'},
        {id: 2, name: 'Nathan'},
        {id: 3, name: 'Alex'}
    ];

    res.send(`
    <h1 class="text-2xl font-bold my-4">Users</h1>
    <ul>
        ${users.map((user) => `<li>${user.name}</li>`).join('')}
    </ul>
    `);
});

// Start Server
app.listen(3000, () => {
 console.log('Server listening on port 3000');
});