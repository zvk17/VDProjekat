$(document).ready(function () {

    $("#srpski").click(function() {
        if (messages.LANGUAGE != "sr") {
            let url = window.location.href;
            let index = url.indexOf("/html/en/");
            if (index != -1) {
                url = url.replace("/html/en/", "/html/sr/");
            } else {
                url = url.replace("index_en.html", "index.html");
            }
            window.location.href = url;
        }   
    });

    $("#engleski").click(function() {
        if (messages.LANGUAGE != "en") {
            let url = window.location.href;
            let index = url.indexOf("/html/sr/");
            if (index != -1) {
                url = url.replace("/html/sr/", "/html/en/");
            } else {
                url = url.replace("index.html", "index_en.html");
            }
            window.location.href = url;
        }
    });

});