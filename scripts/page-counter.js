window.onload = visitorCounter;

function visitorCounter(){
    getCurrentValuefromDB();
}

function getCurrentValuefromDB(){
    $.ajax({
        url: 'https://6dp3g16j3m.execute-api.ap-southeast-1.amazonaws.com/Prod/update',
        type: 'GET'
      }).done(function(data){
        document.getElementById("counter").innerHTML = parseInt(data.Attributes.current_counter);
        if (data != null){
            console.info({
                "DATE": data.ResponseMetadata.HTTPHeaders.date,
                "Request Id": data.ResponseMetadata.RequestId,
                "METHOD": "GET",
                "RESULT": "Success",
                "Visit Count": data.Attributes.current_counter,
            })
        } else {
            console.error({
                "DATE": data.ResponseMetadata.HTTPHeaders.date,
                "Request Id": data.ResponseMetadata.RequestId,
                "METHOD": "GET",
                "RESULT": "Fail",
                "Visit Count": data.Attributes.current_counter,
            })
        }
    });
}