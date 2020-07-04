window.onload = visitorCounter;

function visitorCounter(){
    getCurrentValuefromDB();
}

function getCurrentValuefromDB(){
    $.ajax({
        url: 'https://c7tieg5wca.execute-api.ap-southeast-1.amazonaws.com/TEST/get-current-value',
        type: 'GET'
      }).done(function(data){
        let from_DB = parseInt(data)
        console.log(from_DB)
        updated_count = from_DB + 1;
        document.getElementById("counter").innerHTML = updated_count;
    });
}