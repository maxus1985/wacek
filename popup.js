document.getElementById('scrapeCookies').addEventListener('click', function() {
    const url = document.getElementById('urlInput').value;

    if (!url) {
        document.getElementById('output').innerText = 'Please enter a valid URL.';
        return;
    }

    document.getElementById('output').innerText = '';

    chrome.cookies.getAll({ url: url }, function(cookies) {
        if (cookies.length > 0) {
            cookies.forEach(cookie => {
                const cookieInfo = `${cookie.name}: ${cookie.value}`;
                document.getElementById('output').innerText += cookieInfo + '\n';
            });
        } else {
            document.getElementById('output').innerText = 'No cookies found for this URL.';
        }
    });
});
