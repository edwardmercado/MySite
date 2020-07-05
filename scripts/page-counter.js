window.onload = visitorCounter;

function visitorCounter(){
    getCurrentValuefromDB();
}

function getCurrentValuefromDB(){
    $.ajax({
        url: 'https://msjfodj6p7.execute-api.ap-southeast-1.amazonaws.com/Prod/update',
        type: 'GET'
      }).done(function(data){
        document.getElementById("counter").innerHTML = parseInt(data.Attributes.current_counter);
    });
}