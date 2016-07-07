
/*window.onload = function() {
  // TODO: write code
  // console.log("Hello, runstant!");
};*/

/*$( function() {
    $( '#ajax-button' ).click(
    function() {
        $.ajax({
          url: 'http://weather.livedoor.com/forecast/webservice/json/v1?city=400040',
          type:'GET',
          dataType: 'jsonp',
          timeout:1000,
          success: function(data) {
                       alert("ok");
                   },
          error: function(data) {
                       alert("ng");
                 }
        });
    });
} );*/

var getURL = function(){
  var clientId = "3MVG9e2mBbZnmM6ks2kVSUB0EdlcR2LQcMbi3ZRg2nrIkVsLo6wkU7LfzfOTYWxYP3177SqKS2wYO3tDlp4Sq";
  var consumerSecret = "7599708008029895241";
  var authEndPoint = "https://test.salesforce.com/services/oauth2/authorize";
  var responseType = "token";
  var redirectURI = "https://ajaxcallback.herokuapp.com/";
  var requestURL = authEndPoint+'?client_id='+clientId+'&response_type='+responseType+'&redirect_uri='+redirectURI;
  return requestURL;
};
//
$(function(){
  $( '#ajax-button' ).on('click', function(){
    var win = window.open(getURL(), 'w1');
    console.log(win);
  });
});
