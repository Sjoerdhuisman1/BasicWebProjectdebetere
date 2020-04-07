
var dialog = document.getElementById("dialog")
var footDialog = document.getElementById("ft_dialog")
var headDialog = document.getElementById("hd_dialog_title")
var contDialog = document.getElementById("cn_dialog")



function CloseDialog() {
    console.log("close de dialog ");
    //document.getElementById("overlay").style.display = "none";
    document.getElementById('dialog').style.top = '-500px';

}

function ShowDialog(sWelke) {
    dialog.style.top = '200px';
    //document.getElementById('overlay').style.display = 'block';

    if (sWelke == 'toevoegen') {
        // document.getElementById('contDialog').innerHTML = ;
        contDialog.innerHTML = document.getElementById('content').innerHTML;
        contDialog.style.height = "600px";
        dialog.style.border = "1px solid black";



    }

    if (sWelke == 'delete') {
        contDialog.innerHTML = document.getElementById('delete').innerHTML;
        

    }
}

//object.innerHTML.src =


