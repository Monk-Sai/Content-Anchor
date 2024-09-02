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
        // Attempt to fetch the URL
        const response = await fetch(urlInput, {
            method: 'GET',
            mode: 'cors'
        });

        let statusMessage = '';

        if (response.ok) {
            statusMessage = `Good URL: ${response.status} OK`;
        } else if (response.status >= 300 && response.status < 400) {
            if (response.status === 301) {
                statusMessage = `Permanent Redirect: ${response.status}`;
            } else if (response.status === 302) {
                statusMessage = `Temporary Redirect: ${response.status}`;
            } else {
                statusMessage = `Redirect: ${response.status}`;
            }
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
        resultsDiv.innerHTML = '<p>Error fetching the URL. It might be blocked due to CORS policy.</p>';
    }
}
