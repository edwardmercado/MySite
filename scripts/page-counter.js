window.onload = visitorCounter;

function visitorCounter(){
    getCurrentValuefromDB();
}

function getCurrentValuefromDB(){
    $.ajax({
        url: 'https://c7tieg5wca.execute-api.ap-southeast-1.amazonaws.com/TEST/get-current-value',
        type: 'GET'
      }).done(function(data){
        document.getElementById("counter").innerHTML = parseInt(data.Attributes.current_counter);
    });
}