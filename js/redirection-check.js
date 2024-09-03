async function checkUrlStatus() {
    const urlInput = document.getElementById('url').value;
    const resultsDiv = document.getElementById('results');

    // Clear previous results
    resultsDiv.innerHTML = '';

    if (!urlInput) {
        resultsDiv.innerHTML = '<p>Please enter a URL.</p>';
        return;
    }

    try {
        const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(urlInput)}`, {
            method: 'GET'
        });

        let statusMessage = '';

        // If the fetch request is successful, check the response status
        if (response.status >= 200 && response.status < 300) {
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

        resultsDiv.innerHTML = `<p>Status: ${statusMessage}</p>`;
    } catch (error) {
        console.error('Error fetching the URL:', error);
        resultsDiv.innerHTML = '<p>Error fetching the URL. It might be blocked due to CORS policy or network issues.</p>';
    }
}
