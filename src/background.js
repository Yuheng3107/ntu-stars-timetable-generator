// Add an event listener to listen for messages from content scripts or popup scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'downloadFile') {
    // Call the downloadFile function with the URL to download
    downloadFile(message.url);
  }
});

function downloadFile(url) {
  chrome.downloads.download({
    filename: 'Import this in Google Calendar',
    url: url,
  });
}
