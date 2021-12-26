AOS.init();

function copy(copyId) {
    var $inp=$("<input>");
    $("body").append($inp)
    $inp.val($(""+copyId).text()).select();
    document.execCommand("copy");
    $inp.remove();
}
$(document).ready(function(){
    $("#copyButton").click(function(){
        copy('#copyText');
        alert("The contract has been correctly copied");
    })
});
