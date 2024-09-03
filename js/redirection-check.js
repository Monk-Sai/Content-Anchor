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
        const response = await fetch('http://localhost:3000/check-url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: urlInput })
        });

        const data = await response.json();

        let statusMessage = '';

        if (data.status >= 200 && data.status < 300) {
            statusMessage = `Good URL: ${data.status} OK`;
        } else if (data.status >= 300 && data.status < 400) {
            statusMessage = `Redirect: ${data.status}`;
        } else if (data.status >= 400 && data.status < 500) {
            statusMessage = `Client Error: ${data.status}`;
        } else if (data.status >= 500) {
            statusMessage = `Server Error: ${data.status}`;
        } else {
            statusMessage = `Unexpected Status: ${data.status}`;
        }

        resultsDiv.innerHTML = `<p>Status: ${statusMessage}</p>`;
    } catch (error) {
        console.error('Error fetching the URL:', error);
        resultsDiv.innerHTML = '<p>Error fetching the URL.</p>';
    }
}
