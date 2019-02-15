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
        height = $(this).height
        
        // console.log(index + ' ' + lines.lineCount + ' lines' + lines.lineHeight);
        // if the number of lines is more than one adjust the styling/positioning of surrounding elements:
       /* commenting out because it doesn't work yet...
        if (lines.lineCount >= 2) { 
            $(this).parent().parent()
            .addClass("item-wrap")
            $(this).parent().parent('.item-wrap').css("grid-template-rows", "110px 550px minmax(50px, max-content) 10px;")
            $(this).parent().parent().children('.tn-prod-list-item__property--description')
            .addClass("description-wrap")
            $(this).parent().parent().children('.description-wrap').css("grid-template-rows", "170px 90px auto ")
            
             }
        else if (lines.lineCount < 2) {
            $(this).parent().parent()
            .removeClass("item-wrap")
            $(this).parent().parent().children('.tn-prod-list-item__property--description')
            .removeClass("description-wrap")
            
        }   */

    })
  });


})
