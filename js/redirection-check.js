const express = require('express');
const axios = require('axios');
const app = express();

app.get('/check-status', async (req, res) => {
    const { url } = req.query;

    try {
        // Axios request with manual handling of redirects
        const response = await axios.get(url, {
            maxRedirects: 0, // No automatic redirect following
            validateStatus: function (status) {
                return status >= 200 && status < 600; // Accept all status codes
            }
        });

        let statusMessage = '';

        // Determine the type of status
        if (response.status === 200) {
            statusMessage = `Good URL: ${response.status} OK`;
        } else if (response.status >= 300 && response.status < 400) {
            statusMessage = `Redirect: ${response.status}`;
        } else if (response.status >= 400 && response.status < 500) {
            statusMessage = `Client Error: ${response.status}`;
        } else if (response.status >= 500) {
            statusMessage = `Server Error: ${response.status}`;
        } else {
            statusMessage = `Unexpected Status: ${response.status}`;
        }

        res.json({ statusMessage });

    } catch (error) {
        console.error('Error fetching the URL:', error);
        res.json({ statusMessage: 'Error fetching the URL' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

document.getElementById('checkStatus').addEventListener('click', async () => {
    const urlInput = document.getElementById('url').value;
    const resultsDiv = document.getElementById('results');

    if (urlInput) {
        try {
            const response = await fetch(`http://localhost:3000/check-status?url=${encodeURIComponent(urlInput)}`);
            const data = await response.json();
            resultsDiv.textContent = data.statusMessage;
        } catch (error) {
            resultsDiv.textContent = 'Error: Could not fetch the URL status';
        }
    } else {
        resultsDiv.textContent = 'Please enter a valid URL';
    }
});
