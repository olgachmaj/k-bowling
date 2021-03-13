$(document).ready(function() {
  ;

    // $('#test_button').click(function() {
    //     $('#test_button').remove();
    // });
    $("#test_button").click(function(e){
        e.preventDefault();
        console.log("randomword")
        $("#test_button").hide();
      });

    update = function() {
        $.get('/update', function(res){
            console.log(res);
            var data = JSON.parse(res);
            if(data.status === 200) {
                return ;
            };
        })
    };

  update()
});
