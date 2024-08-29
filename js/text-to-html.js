async function crawlPage(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch the page. Status: ${response.status}`);
        }

        const pageHTML = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(pageHTML, 'text/html');
        const pageText = doc.body.innerText;

        return { text: pageText, html: pageHTML };
    } catch (error) {
        console.error("Error while crawling the page:", error);
    }
}

 // Function to calculate text-to-HTML ratio
 function calculateRatio(text, html) {
    const textLength = text.length;
    const htmlLength = html.length;
    const ratio = (textLength / htmlLength * 100).toFixed(2);
    return ratio;
}

async function startCrawling() {
    const url = document.getElementById('urlInput').value;

    if (!url) {
        alert('Please enter a URL');
        return;
    }

    document.getElementById('output').style.display = 'none';

    const data = await crawlPage(url);

    if (data) {
        document.getElementById('textOutput').value = data.text;
        document.getElementById('htmlOutput').value = data.html;

        const ratio = calculateRatio(data.text, data.html);
        document.getElementById('ratioOutput').innerText = `  ${ratio}%`;
    }

    document.getElementById('output').style.display = 'block';
}

// Attach event listener to the button
document.getElementById('crawlButton').addEventListener('click', startCrawling);