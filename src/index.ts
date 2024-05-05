import express, { Request, Response } from 'express';

// Create an Express app
const app = express();

// Define a route handler for the root ("/") route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
