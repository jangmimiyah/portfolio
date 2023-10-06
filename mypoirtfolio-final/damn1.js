function goBack() {
    const firstPageURL = "damn.html";
    
    window.location.href = firstPageURL;
}
document.getElementById("customBackButton").addEventListener("click", goBack);