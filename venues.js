

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
    
    $(".tn-prod-season-header__description").after(function(){
        
        let venueData = venues.find(items => items.name === venue)
        
        console.log(venueData)
        
        venueBlock = `<div>
                        <p>${venueData.description}</p>

                        </div>`
        return venueBlock
    })
})

