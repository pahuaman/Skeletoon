$(document).ready( function() {
    
    /****** HIDE ITEMS *******/
    $(".space-white").hide();
    $("#points1").hide();

    /****** SHOW AND HIDE ITEMS *******/
    $("#points").click( function() { 
        
        $("#points").hide();
        $(".beging-content").hide();
        $(".space-white").show();
        $("#points1").show();

    });//click
    
    $("#points1").click( function() {
        
        $("#points1").hide();
        $(".beging-content").show();
        $(".space-white").hide();
        $("#points").show();

    });//click

    /****** SHOW AND HIDE CARDS *******/
    $(".card").hide();

    $("#image1").hover( function() { $("#card1").show(); }, function() { $("#card1").hide(); });
    $("#image2").hover( function() { $("#card2").show(); }, function() { $("#card2").hide(); });
    $("#image3").hover( function() { $("#card3").show(); }, function() { $("#card3").hide(); }); 

});//ready