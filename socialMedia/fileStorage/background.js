document.addEventListener("DOMContentLoaded", () => {
    var button = document.getElementById("submit");
    button.addEventListener("click", (e) => {
        console.log(e);
    });
});

function exampleFunction() {
    chrome.tabs.executeScript(() => {
        chrome.tabs.executeScript({ file: "content.js" })
    })
}
