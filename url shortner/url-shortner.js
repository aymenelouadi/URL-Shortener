  // Function to generate a random short URL
  function generateShortUrl() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let shortUrl = '';
    for (let i = 0; i < 6; i++) {
      shortUrl += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return shortUrl;
  }
  
  // Function to shorten the URL
  function shortenUrl() {
    const originalUrl = document.getElementById('originalUrl').value.trim();
    if (originalUrl === '') {
      alert('Please enter a valid URL');
      return;
    }
  
    const shortUrl = generateShortUrl();
    const shortenedUrl = 'https://wal3adab.net/' + shortUrl;
  
    // Display the shortened URL to the user
    document.getElementById('shortenedUrl').innerHTML = `
      Shortened URL: <a href="#" onclick="redirectToUrl('${originalUrl}')">${shortenedUrl}</a>`;
  }
  
  // Function to redirect to original URL
  function redirectToUrl(originalUrl) {
    window.location.href = originalUrl;
  }








  
  