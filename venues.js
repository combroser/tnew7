

$(document).ready(function(){

    const venues = [
        {
        name: "Robin Hixon Theater",
        description : "Small theatre inside the Clay and Jay Barr Education Center.",
        image : "vafest.org/rht_image",
        mapLink : "maps.google.com/rht"
        },
        {
        name: "Miller Studio",
        description : "Small theatre inside the Sandler Center.",
        image : "vafest.org/miller_image",
        mapLink : "maps.google.com/miller"
        }
        ]
    var venue = $(".tn-event-detail__location").text()
    
    $(".more-info").after(function(){
        
        let venueData = venues.find(items => items.name === venue)
        
        console.log(venueData)
        
        venueBlock = `<div id='venue-info-btn' class='tn-pdp-item__perf-list-item' data-toggle='collapse' data-target='#venue-info' aria-expanded='false'><div class='tn-pdp-item__perf-anchor'><span class='tn-pdp-item__perf-action'>Venue Info</span></span><span class='glyphicon glyphicon-chevron-right btn btn-primary js-rotate-if-collapsed'></span></div></div>
                        <div id='venue-info'>
                        
                        <p>${venueData.description}</p>

                        </div>`
        return venueBlock
    })

    $( "#venue-info-btn" ).click(function() {
        $( "#venue-info" ).toggle( "slow", function() {
          // Animation complete.
        });
      });
    
      $( "venue-info-btn" ).click(function() {
        $( this ).toggleClass( ".rotate-90");
      });
})

