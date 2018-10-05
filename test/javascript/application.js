var remote_host = "http://192.168.178.51:8080"; 

function init() {
    $("#test1").click(function() {
        test();
    });
}

function test() {
    alert("Test erfolgreich");
    /*
    $.ajax({
        url: remote_host + "/api/getWeather",
        //data: {
        //    zipcode: 97201
        //},
        success: function(result) {
            $("#test1-result").html("Hallo");
        }
    });
    */
}