# TS-D02-ExpressURLShortener-
## Overview
This project is a simple URL shortener implemented using TypeScript and Express.js. It allows you to shorten long URLs into shorter, with simple logic, generate incremental of Id

## Installation
1. Clone the repository
2. Install dependencies: npm install

## Usage
1. Build Typescript: npm run build
2. Start the server: npm start
3. Post the long url to server, get short URL from server

To shorten a URL, send a POST request to `/shorten` with a JSON body containing the `longUrl` parameter:

json
{
    "longUrl": "https://localhost:3000/long-url-path"
}

To get short URL by Id, send a get to request with parameter:
Example: "https://localhost:3000/1"



## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Special Note
Include `launch.json` to version control, for the purpose of this project and as a learning resource for debugging TypeScript projects with Visual Studio Code.

