// Nasłuchiwanie kliknięcia przycisku "Zbierz pliki cookie"
document.getElementById('scrapeCookies').addEventListener('click', function() {
    // Pobranie wartości z pola tekstowego
    const url = document.getElementById('urlInput').value;

    // Walidacja adresu URL
    if (!url) {
        document.getElementById('output').innerText = 'Proszę wpisać poprawny adres URL.';
        return;
    }

    // Czyszczenie poprzednich wyników
    document.getElementById('output').innerText = '';

    // Zbieranie plików cookie z podanego adresu URL
    chrome.cookies.getAll({ url: url }, function(cookies) {
        // Sprawdzanie, czy znaleziono pliki cookie
        if (cookies.length > 0) {
            cookies.forEach(cookie => {
                // Tworzenie tekstu z informacjami o pliku cookie
                const cookieInfo = `${cookie.name}: ${cookie.value}`;
                // Dodawanie informacji o pliku cookie do obszaru wyjściowego
                document.getElementById('output').innerText += cookieInfo + '\n';
            });
        } else {
            // Informacja, że nie znaleziono plików cookie
            document.getElementById('output').innerText = 'Brak plików cookie dla tego adresu URL.';
        }
    });
});