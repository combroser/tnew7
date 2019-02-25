$(document).ready(function(){

    const venues = [
        { 
            title:"Attucks Theatre", 
            fullTitle:"Attucks Theatre",
            address:"1010 Church St, Norfolk, VA 23510", 
            description: "",
            img:"https://www.vafest.org/media/51276/attucks.jpg", 
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.409127953127!2d-76.28089674857172!3d36.85662477983852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ba98196d5d4563%3A0xdc018b88eddc0109!2sAttucks+Theatre!5e0!3m2!1sen!2sus!4v1476906528025",
        },
        { 
            title:"Christ & St. Luke's Church", 
            fullTitle:"Christ and St. Luke's Church",
            address:"560 West Olney Rd, Norfolk, VA 23507", 
            description: "",
            img:"https://www.vafest.org/media/51275/christsaintlukes2.jpg", 
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.274470017413!2d-76.30011274857179!3d36.85984857983782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ba986badc0211d%3A0x1b2953d27e663878!2sChrist+and+St.+Luke%E2%80%99s+Episcopal+Church!5e0!3m2!1sen!2sus!4v1476906778030",
        },
        { 
            title:"Chrysler Hall", 
            fullTitle:"Chrysler Hall",
            address:"215 St Pauls Blvd, Norfolk, VA 23510", 
            description: "",
            img:"https://www.vafest.org/media/51274/chrysler-hall-twilight.jpg", 
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.6026805070924!2d-76.28812404857202!3d36.85199057983947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ba9810fde89763%3A0x1dae8d2d7e313fe6!2sChrysler+Hall!5e0!3m2!1sen!2sus!4v1476892281539",
        },
        { 
            title:"Harrison Opera House", 
            fullTitle:"Harrison Opera House",
            address:"160 E Virginia Beach Blvd, Norfolk, VA 23510", 
            description: "",
            img:"https://www.vafest.org/media/51277/harrison-twilight.jpg", 
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.342050868201!2d-76.29215994857175!3d36.85823067983837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ba981693d31dbd%3A0xf5f98d96878b08c4!2sHarrison+Opera+House!5e0!3m2!1sen!2sus!4v1476907842972",
        },
        { 
            title:"Norfolk Academy", 
            fullTitle:"Norfolk Academy",
            address:"1585 Wesleyan Dr, Norfolk, VA 23502", 
            description: "",
            img:"https://www.vafest.org/media/19815/0219.jpg", 
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.696702135124!2d-76.19578204857143!3d36.873677979834966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ba9689aa6b4e1b%3A0xe25876ade333d12f!2sNorfolk+Academy!5e0!3m2!1sen!2sus!4v1476908327050",
        },   
        { 
            title:"Peebles Theatre, Ferguson Ctr", 
            fullTitle:"Peebles Theatre at the Ferguson Center for the Arts",
            address:"1 Avenue of the Arts, Newport News, VA 23606", 
            description: "",
            img:"https://www.vafest.org/media/70574/peebles.jpg", 
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.7963986461905!2d-76.49329658422926!3d37.062334779895444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b0784f8735b9e9%3A0x960b561d9f402d22!2sPeebles+Theatre!5e0!3m2!1sen!2sus!4v1489525571642",
        }, 
        { 
            title:"Robin Hixon Theater", 
            fullTitle:"Robin Hixon Theater, Clay and Jay Barr Education Center",
            address:"440 Bank St, Norfolk, VA 23510", 
            description: "",
            img:"https://www.vafest.org/media/19826/o.jpg?width=688", 
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.631104769562!2d-76.28865304857193!3d36.85130997983962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ba9811e7f54607%3A0x8a03faa2662fb3e7!2sVirginia+Arts+Festival!5e0!3m2!1sen!2sus!4v1476908714057",
        },  
        { 
            title:"Sandler Center for Perf Arts", 
            fullTitle:"Sandler Center for the Performing Arts",
            address:"201 Market St, Virginia Beach, VA 23462", 
            description: "",
            img:"https://www.vafest.org/media/19814/03ci-sandler-center-48.png", 
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.0097359457122!2d-76.13783614857218!3d36.84224287984151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ba959f127dd87b%3A0xe0e1aad8d7c14ad3!2sSandler+Center+for+the+Performing+Arts!5e0!3m2!1sen!2sus!4v1476908848792",
        },   
        { 
            title:"Miller Studio, Sandler Center", 
            fullTitle:"Sandler Center for the Performing Arts, Miller Studio Theatre",
            address:"201 Market St, Virginia Beach, VA 23462", 
            description: "",
            img:"https://www.vafest.org/media/19824/fac_millerstudiotheatre.jpg", 
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.0097359457122!2d-76.13783614857218!3d36.84224287984151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ba959f127dd87b%3A0xe0e1aad8d7c14ad3!2sSandler+Center+for+the+Performing+Arts!5e0!3m2!1sen!2sus!4v1476908848792",
        },   
        { 
            title:"Scope Arena", 
            fullTitle:"Scope Arena",
            address:"201 East Brambleton Ave, Norfolk, VA 23510", 
            description: "",
            img:"https://www.vafest.org/media/19829/scope-twilight.jpg", 
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.5498985556496!2d-76.28907204857192!3d36.85325437983911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ba9810fde89763%3A0x65e78788cb9680ff!2sScope+Arena!5e0!3m2!1sen!2sus!4v1476970275140",
        },
        { 
            title:"St. John's Episcopal Church", 
            fullTitle:"St. John's Episcopal Church",
            address:"424 Washington St, Portsmouth, VA 23704", 
            description: "",
            img:"https://www.vafest.org/media/51280/stjohns-church.jpg", 
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.2295968826015!2d-76.30643854857225!3d36.83697697984255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89baa29b60fa95ab%3A0x4f8d4252db455746!2sSt.+John's+Episcopal+Church!5e0!3m2!1sen!2sus!4v1476971351089",
        },
        { 
            title:"TCC Roper Perf Arts Center", 
            fullTitle:"TCC Roper Performing Arts Center",
            address:"340 Granby St, Norfolk, VA 23510", 
            description: "",
            img:"https://www.vafest.org/media/51281/roper2.jpg", 
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.654943048467!2d-76.29213044857195!3d36.8507391798396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ba980d8d217835%3A0xeeeb29119ec81725!2sRoper+Performing+Arts+Center!5e0!3m2!1sen!2sus!4v1476974240599",
        },
        { 
            title:"Art Museums of Colonial Wmsbg", 
            fullTitle:"The lawn of the Art Museum of Colonial Williamsburg",
            address:"326 Francis St W, Williamsburg, VA 23185", 
            description: "",
            img:"https://www.vafest.org/media/19819/abby_aldrich_rockefeller_folk_art_museum.jpg", 
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.123936166451!2d-76.70691084856315!3d37.268488079755954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd3601e5cbf3fb28d!2sThe+Art+Museums+of+Colonial+Williamsburg!5e0!3m2!1sen!2sus!4v1476974385569",
        },
        { 
            title:"Town Point Park", 
            fullTitle:"Town Point Park",
            address:"Waterside Dr, Norfolk, VA 23510", 
            description: "",
            img:"https://www.vafest.org/media/51282/town-point-park.jpg", 
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.8410152326483!2d-76.296806648572!3d36.84628347984083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ba9874aefd9c5d%3A0x63f0577f2f605322!2sTown+Point+Park!5e0!3m2!1sen!2sus!4v1476974770779",
        },
        { 
            title:"Williamsburg Winery", 
            fullTitle:"Williamsburg Winery",
            address:"5800 Wessex Hundred, Williamsburg, VA 23185",
            description: "", 
            img:"https://www.vafest.org/media/51283/williamsburg-winery.jpg", 
            map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.6593792023527!2d-76.72062384856395!3d37.23206017976305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b089e3905a742d%3A0x4f09dd3d0b4dd6a6!2sThe+Williamsburg+Winery!5e0!3m2!1sen!2sus!4v1476974997942",
        },
        { 
            title:"", 
            fullTitle:"",
            description: "",
            address:"", 
            img:"https://www.vafest.org", 
            map:"",
        },
        { 
            title:"", 
            fullTitle:"",
            description: "",
            address:"", 
            img:"https://www.vafest.org", 
            map:"",
        },
    ];
    var venue = $(".tn-event-detail__location").text()
    
    $(".venue").append(function(){
        
        let venueData = venues.find(items => items.title === venue)
        
        console.log(venueData)
        
        venueBlock = `<h1>${venueData.fullTitle}</h1>
                        <h3>${venueData.address}</h3>
                        <p><img src='${venueData.img}' alt='' /></p>
                        <p><iframe src='${venueData.map}' width='100%' height='250' frameborder='0' style='border: 0;' allowfullscreen=''>
                        </iframe></p>
                        <br>${venueData.description}`
        return venueBlock
    })

})