$(document).ready(function(){

// hide and show button for performance lists longer than 3 
// 1) hiding any perf-list items with an index greater than 2 
$( ".tn-prod-list-item__property--perf-list" )
    .filter(function( index ) {
        $( "li", this ).filter(function( index ){
            return index > 2;
        }).hide();
    })

// 2) adding a Show More button to the end of each perf-list longer than 3 items
$( ".tn-prod-list-item__property--perf-list" )
    .filter(function( index ) {
        return $( "li", this ).length > 3;
    }).append("<button class='prod-list-disclosure btn btn-s btn-default'>Show More</button>")

// 3) Selecting the button created in step 2 and giving it two steps inside its .click function
    // 3) a. toggling the text of the button from Show More to Show Less
$(".prod-list-disclosure").click(function(){
    $(this).text(function( i, text ){
        return text === "Show More" ? "Show Less" : "Show More";
    })
    // 3) b. selecting the siblings of the .prod-list-disclosure button, filtering them to list items and toggling visibility of list items beyond index of 2
    $(this).parent()
    .filter(function( index ) {
        $( "li", this ).filter(function( index ){
            return index > 2;
        }).toggle()
    });
})

// alternating style wrappers:
$(".tn-prod-list-item")
    .filter(function( index ) {
        return index % 2 == 0
    })
    .wrap("<div class='even'></div>")
$(".tn-prod-list-item")
    .filter(function( index ) {
        return Math.abs(index % 2) == 1
    })
    .wrap("<div class='odd'></div>")

// add color blocks behind list items
$(".tn-prod-list-item__property--description").prepend("<div class= 'color1'></div> <div class = 'color2'></div>")

//Count line height for titles and add negative top margin(?) to prevent their overlapping pictures/copy
$(window).on("load resize", function(){
    calculate = function(obj){
      other = obj.clone();
      other.html('A<br>B').hide().appendTo(obj);
      size = other.height() / 2 ;
      other.remove();
      return {lineCount: Math.floor(obj.height() /  size), lineHeight: size };
    }
    // iterate through each heading and calculate the number of wrapped lines:
    $('.tn-prod-list-item__property--heading a').filter(':visible').each(function(index){
        lines = calculate($(this));
        // if the number of lines is more than one adjust the styling/positioning of surrounding elements:
        if (lines.lineCount >= 2) { 
            $(this).parent().parent().css("grid-template-rows",`${lines.lineHeight * (lines.lineCount-1)}px 550px minmax(50px, max-content) 10px;`)
            $(this).parent().parent().children('.tn-prod-list-item__property--description').css("grid-template-rows", `${lines.lineHeight * (lines.lineCount/4)}px 90px auto `)
            
        }
        // if the number of lines is less than two remove the grid-template-rows property added above:
        else if (lines.lineCount < 2) {
            $(this).parent().parent().css("grid-template-rows",'')
            $(this).parent().parent().children('.tn-prod-list-item__property--description').css("grid-template-rows",'')
            
        }  

    })
  });


/**Hiding content divs on pdp */
$( "#more-info-btn" ).click(function() {
    $( "#more-info" ).toggle( "slow", function() {
      // Animation complete.
    });
  });

  $( "more-info-btn" ).click(function() {
    $( this ).toggleClass( ".rotate-90");
  });
/*hide hutton*/
  $( "#tn-detail-production-text-content" ).removeClass( "collapse" );
/*add and wrap*/ 
  $( ".more-info" ).wrap( "<div id='more-info' class='collapse'></div>" );
  $( "#more-info" ).before( "<div id='more-info-btn' class='tn-pdp-item__perf-list-item' data-toggle='collapse' data-target='#more-info' aria-expanded='false'><div class='tn-pdp-item__perf-anchor'><span class='tn-pdp-item__perf-action'>More Info</span></span><span class='glyphicon glyphicon-chevron-right btn btn-primary js-rotate-if-collapsed'></span></div></div>" );

//**Moving logo block on PDP*/
  $('.tn-event-detail__additional-events-container').append( $('.logos') );

})