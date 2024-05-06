import express, { Request, Response } from 'express';

// Create an Express app
const app = express();
app.use(express.json()); // This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
let nextId = 1;
const urlMap: Record<string, string> = {};


// Define a route handler for the root ("/") route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
});

app.post('/shorten', (req: Request, res: Response) => {

    const { longUrl } = req.body; // Destructure the longUrl property from the request body

    if (!longUrl) {
        return res.status(400).json({ error: 'Missing longUrl in request body' });
    }
    console.log(req.body); // Log the request body to the console

    const shortURLId = generateShortURLByID(longUrl); // Generate a new short URL ID

    // Store the mapping in the in-memory storage
    urlMap[shortURLId] = longUrl;
    const shortUrl = `${req.protocol}://${req.get('host')}/${shortURLId}`; // Construct the short URL

// Return a response (in this case, just logging the body for testing purposes)
    res.send(shortUrl);
});

app.get('/:shortURLId', (req: Request, res: Response) => {
    const { shortURLId } = req.params; // Destructure the shortURLId parameter from the request

    if (!shortURLId) {
        return res.status(400).json({ error: 'Missing shortURLId in request params' });
    }

    console.log(req.params); // Log the request params to the console
    let longUrl = "";

    if (!(shortURLId in urlMap)) {
        return res.status(404).json({ error: 'Short URL not found' });
    }

    longUrl = urlMap[shortURLId];
   
    // Return a response (in this case, just logging the params for testing purposes)
    res.send(longUrl);

});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


function generateShortURLByID(longURL: string)
{

    const shortURLID = String(nextId++); // Generate a new short URL ID
    console.log('nextId:', nextId); // Log the nextId to the console

    return shortURLID;
}