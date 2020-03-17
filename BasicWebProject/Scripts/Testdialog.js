var dialog = document.getElementById("shdialog")
var footDialog = document.getElementById("ft_dialog")
var headDialog = document.getElementById("hd_dialog_title")
var contDialog = document.getElementById("cn_dialog")


function fShowdmdialog(sWelke) {
    dialog.style.top = '200px';
    document.getElementById("overlay").style.display = "block";

    if (sWelke == "inlog") {
        headDialog.innerHTML = "Inloggen";
        footDialog.innerHTML = "-Inlog-";
        contDialog.innerHTML = document.getElementById("pieter").innerHTML;

    }
}

function fClosedmdialog() {
    document.getElementById('shdialog').style.top = '-300px';
    overlay.style.display = "none";
}