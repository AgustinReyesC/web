function copyText() {
    var copyText = document.querySelector(".inputemail");
    navigator.clipboard.writeText(copyText.value);
    alert("Email copiado");
}

function github(){
    window.open("https://github.com/AgustinReyesC", "_blank");

}

