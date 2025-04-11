
function copyID() {
    navigator.clipboard.writeText("05ff711fe57fd5d8137876198805858217172e06e3deea7f5e46e7a857e530507e").then(function() {
        alert("ID zkopírováno.");
    }, function(err) {
        alert("Chyba při kopírování ID");
    });
}
