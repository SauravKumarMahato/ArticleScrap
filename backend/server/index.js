const cors = require('cors');
const scrapeArticles = require('../controller/ScrapeArticleController.js');

const dotenv = require('dotenv')
dotenv.config()


// Require necessary modules
const express = require('express');
const app = express();

const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
app.use(cors(corsOpts));


// Single routing
const router = express.Router();
 
router.get('/articles', scrapeArticles.getArticles);
 
app.use(router);

// Start the server
const PORT = process.env.PORT || 3000; // Use the environment port or 3000 if not defined
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
