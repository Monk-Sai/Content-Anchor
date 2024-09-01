document.querySelector('.input-submit-btn button').addEventListener('click', async () => {
    const urlInput = document.getElementById('url').value;
    const resultsDiv = document.getElementById('results');

    // Clear previous results
    resultsDiv.innerHTML = '';

    if (!urlInput) {
        resultsDiv.innerHTML = '<p>Please enter a URL.</p>';
        return;
    }

    try {
        const response = await fetch(urlInput, {
            method: 'HEAD', // Use 'HEAD' to fetch only headers
            mode: 'no-cors' // This might cause the browser to not provide the response status due to CORS
        });

        let statusMessage = '';

        if (response.status >= 200 && response.status < 300) {
            statusMessage = `Good URL: ${response.status} OK`;
        } else if (response.status >= 300 && response.status < 400) {
            if (response.status === 301) {
                statusMessage = `Permanent Redirect: ${response.status}`;
            } else if (response.status === 302) {
                statusMessage = `Temporary Redirect: ${response.status}`;
            } else {
                statusMessage = `Redirect: ${response.status}`;
            }
        } else {
            statusMessage = `Error: ${response.status}`;
        }

        resultsDiv.innerHTML = `<p>Status: ${statusMessage}</p>`;
    } catch (error) {
        console.error('Error fetching the URL:', error);
        resultsDiv.innerHTML = '<p>Error fetching the URL. Check the console for details.</p>';
    }
});
