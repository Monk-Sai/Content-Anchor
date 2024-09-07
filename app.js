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
