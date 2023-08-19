const inputBox = document.getElementById("inputBox");
const qrImg = document.getElementById("qrImg");
const imgBox = document.getElementById("imgBox");

function generateQR() {
    if (inputBox.value.length >0) {
        qrImg.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputBox.value}`;
        imgBox.style.maxHeight = "300px"
        imgBox.style.border ="1px solid #676262;"

    } else {
        alert("Entre text or QR");
    }
    
}