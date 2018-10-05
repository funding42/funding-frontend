var remote_host = "http://192.168.178.50:8080/";
var remote_api_path = "api/"

$(function(){
    initHandler();
});

 /********************************
  * Event handler
  ********************************/

function initHandler() {
    $("#test-getprojects").click(function (e) { 
        test_getProjects();
    });

    $("#test-searchByTitle").click(function (e) { 
        test_searchByTitle("hallo");
    });
}

 /********************************
  * API Test Cases
  ********************************/

function test_getProjects() {
    $.ajax({
        url: remote_host + remote_api_path + "project",
        success: function(result) {
            $("#test-results").html(JSON.stringify(result));
        }
    });
}

function test_searchByTitle(search_term) {
    $.ajax({
        url: remote_host + remote_api_path + "project/search",
        data: {
            title: search_term
        },
        success: function(result) {
            $("#test-results").html(JSON.stringify(result));
        }
    });
}