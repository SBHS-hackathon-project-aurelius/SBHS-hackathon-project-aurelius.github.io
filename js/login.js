function verifyLogin() {
    document
    var idData = document.getElementById("userId").value;
    var blob = new Blob([idData], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "tempCredentials.txt");
}
