const events = [
   {
      "year":"1377",
      "event":"Vatikán se stává stálým sídlem papeže",
      "detail":"Od roku 1377 se církev přesunula z Avignonu/Lateránu do sídla ve Vatikánu.",
      "url":"https://cs.wikipedia.org/wiki/Vatik%C3%A1n",
   },
   {
      "year":"1860",
      "event":"Připojená papežského státu k Italskému království",
      "detail":"V roce 1860 byla většina území papežského státu připojena k Italskému království, město Řím až roku 1870. Papežský stát se ovšem snažil uchovat si diplomatické styky a postavení subjektu mezinárodního práva a většina států mu toto postavení nikdy neodepřela.",
      "url":"https://cs.wikipedia.org/wiki/Vatik%C3%A1n",
   },
   {
      "year":"1929",
      "event":"Lateránské smlouvy",
      "detail":"Pahorek Vatikán a některá exteritorální území byla navrácena pod papežskou správu smlouvami s Itálií dne 11. února 1929 – tzv. Lateránské smlouvy. Itálie toto narovnání Vatikánu nabízela již v 19. století, papežové však ještě doufali v obnovení Papežského státu, a proto na podobné dohody nechtěli dlouho přistoupit. Vztah mezi Vatikánem a Itálií byl pak ještě upraven konkordátem z roku 1984.",
      "url":"https://cs.wikipedia.org/wiki/Cyril_a_Metod%C4%9Bj",
   },
];

// Významné postavy
const heroes = [
   {
      "name":"Pietro Gasparri",
      "birth":"31.3.1877",
      "death":"6.3.1898",
      "biography":"Pietro kardinál Gasparri (5. května 1852 Capovallazza di Ussita – 18. listopadu 1934 Řím) byl církevním právníkem, duchovním a vatikánským státním sekretářem, který se zasloužil o vydání Kodexu kanonického práva a uzavření Lateránských dohod.",
      "portraits":[
         "pietro1.jpg",
         "pietro2.jpg",
      ],
      "online":"https://cs.wikipedia.org/wiki/Pietro_Gasparri"
   },
   {
       "name":"František",
       "birth":"17.12.1936",
       "death":" ",
       "biography":"František (latinsky Franciscus), vlastním jménem Jorge Mario Bergoglio SJ (* 17. prosince 1936 Buenos Aires), je 266. papež katolické církve, římský biskup a suverén státu Vatikán, jehož zvolilo konkláve dne 13. března 2013. Stal se prvním papežem pocházejícím z amerického kontinentu a prvním z Tovaryšstva Ježíšova (jezuitského řádu). Jde rovněž o prvního mimoevropského papeže od 8. století, kdy římskokatolickou církev vedl sv. Řehoř III. pocházející ze Sýrie.",
       "portraits":[
          "papez1.jpg",
          "papez2.jpg",
          "papez3.jpg",
       ],
       "online":"https://cs.wikipedia.org/wiki/Franti%C5%A1ek_(pape%C5%BE)"
    },
];


$(function(){

  $('h2').on('click', function(){
     $(this).parentsUntil('row').next().slideToggle(1000);
  

     });

     events.forEach((event)=>{
        console.log(event.year);
        $('#udalosti tbody').append(`<tr>
        <td class="event-year">${event.year}</td>
        <td>
        <p class="event-name"><i class="fa fa-chevron-down" aria-hidden="true"></i> <a
        href="${event.url}" target="_new" class="linkkk">${event.event}</a></p>
        <p class="event-detail" style="">
          ${event.detail}
          </p>
        </td>
      </tr>`);
     });

     $('.event-detail').hide();

     $('.event-name i').on('click',function(){
        
        $('#udalosti tr').removeClass('bg-secondary text-white');

        $(this).parents('tr').addClass('bg-secondary text-white');

        $('#udalosti .event-detail').hide(500);

        $(this).parent().next().slideToggle(1000);

     })
     
     heroes.forEach((hero)=>{
        $('#postavy .list-group').append(`<li class="list-group-item list-group-item-action list-group-item-primary">${hero.name}</li>`);
     });
       function fillPerson(person){
          let hero = heroes.find(item => {return item.name === person});

          $('#portret .card-header').html(`${hero.birth} - ${hero.death} `);
          $('#portret .card-title').text(hero.name);
          $('#portret .card-text').text(hero.biography);
          $('#portret .card-footer').html(`<a href = "${hero.online}">${hero.online}</a>`);

           $('#portret .gallery').empty();
          hero.portraits.forEach(portrait =>{
              $('#portret .gallery').append(`<div class = "col-sm-4"><img src = "img/${portrait}" alt = "${hero.name}" class = "img-fluid"></div>`);
          });
       }
       $('#postavy li:first').addClass('active');
       fillPerson(heroes[0].name);
       $('#postavy .list-group li').on('click', function(){
        fillPerson($(this).text());

        $('#postavy .list-group li').removeClass('active');
        $(this).addClass('active');

        let person =  $(this).text();

        $('#portret').slideUp(1000, function(){
           fillPerson(person);
        });

        $('#portret').slideDown(1000);
     });
})