var remote_host = "https://192.168.178.51:8080";
var remote_api_path = "/api"

$(function(){
    init();
});

function init() {
    $("#test1").click(function (e) { 
        test();
        e.preventDefault();
    });
}

function test() {  
    $.ajax({
        url: remote_host + remote_api_path + "/project",
        //data: {
        //    zipcode: 97201
        //},
        success: function(result) {
            $("#test1-result").html("Hallo");
        }
    });
    
}