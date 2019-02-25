var current = document.getElementsByClassName("tn-event-detail__location")[0].innerHTML;
var ind = 1
var venues = [
    { 
        title:"Robin Hixon Theater", 
        address:"rht address", 
        img:"rht img", 
        map:"rht map",
        ind:0
    },
    { 
        title:"sand", 
        address:"sand address", 
        img:"sand img", 
        map:"sand map",
        ind:1
    },
];
var ind = venues.findIndex(i => i.title === current);

console.log(current);
console.log(ind);

$(".venue").append("<h1>" + venues[ind].title + "</h1><h3>440 Bank St, Norfolk, VA 23510</h3><p><img src='https://www.vafest.org/media/19826/o.jpg?width=688' alt='' /></p><p><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.631104769562!2d-76.28865304857193!3d36.85130997983962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ba9811e7f54607%3A0x8a03faa2662fb3e7!2sVirginia+Arts+Festival!5e0!3m2!1sen!2sus!4v1476908714057' width='100%' height='250' frameborder='0' style='border: 0;' allowfullscreen=''></iframe></p>");


