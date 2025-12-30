
$(document).ready(function () {

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

$(document).ready(function () {

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}


    $(document).on('click', '.edit-site', function() {
     var filename = $(this).attr("href");
        // alert('filename------------------: ' + filename);
        console.log('filename: ', filename);

        var clientName = getCookie('clientName');
        // alert('clientName: ' + clientName);

        var clientProjectName = getCookie('projectName') || getCookie('clientProjectName');
        // alert('clientProjectName: ' + clientProjectName);

        if (filename){
            console.log('requested file ------- ' + filename);
        } else {
            console.log('filename missing ---------- ');
            return;
        }
    
        console.log('clientprojectname',clientProjectName)
        $.ajax({
            type: 'POST',
            url: "es/",
            data: {
            'clientName': clientName,
            'clientProjectName': clientProjectName,
            'srcReq': filename
            },
            headers: {
                 "X-Requested-With": "XMLHttpRequest",
            },
            success: function (data) {
                console.log('data: ', data)

            //   var newTab = window.open("", "_self");
            window.location.href =
            `/es/?srcReq=${filename}`;


            },
            error: function (data, errmsg, err) {
                alert(data.responseJSON.errorMessage);
            }
          });
          return false;
      });
 });

 });

