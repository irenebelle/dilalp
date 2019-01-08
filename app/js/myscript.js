window.onload = function() {

  //меняет адреса городов
  document.querySelector('#cities').addEventListener('click', function(event) {
    const cities = document.querySelectorAll('.cities');
    const all = [...cities];
	  Array.from(all).forEach(el => el.classList.remove("city-active"));
    document.getElementById(event.target.value).classList.add('city-active');

  });



  //показывает форму заказа
document.querySelector('.order-button').addEventListener('click', showOrderWindow);
  document.querySelector('#young-woman').addEventListener('click', function(event){
    event.preventDefault();
    showOrderWindow();
    document.querySelector('#programs').value='young-woman';
  });
  document.querySelector('#old-woman').addEventListener('click', function(event){
    event.preventDefault();
    showOrderWindow();
    document.querySelector('#programs').value='old-woman';
  });
  document.querySelector('#old-man').addEventListener('click', function(event){
    event.preventDefault();
    showOrderWindow();
    document.querySelector('#programs').value='old-man';
  });
      document.querySelector('#young-man').addEventListener('click', function(event){
    event.preventDefault();
    showOrderWindow();
    document.querySelector('#programs').value='young-man';
  });


//opens pop-up
  function showOrderWindow() {
   	document.querySelector('.order-window').style.width = document.documentElement.clientWidth+'px';
    document.querySelector('.order-window').style.height = document.documentElement.clientHeight+'px';
    document.querySelector('.order-window').style.left = 0+"px";
    document.querySelector('.order-window').style.top = 0+"px";
    document.querySelector('.order-window').style.display = "block";
  	document.querySelector('#programs').value='';
   };
   //закрывает форму заказа
  document.querySelector('.close-button').addEventListener('click', function() {
  	document.querySelector('.order-window').style.display = "none";
  });
//показывает выбор по чем звонить
  document.querySelector('.contacts-phone').addEventListener('click', function() {
        if(document.documentElement.clientWidth<=600) {

    if(document.querySelector('.pop-up-phone').style.display == "block") {
      document.querySelector('.pop-up-phone').style.display = "none";
    } else if (document.querySelector('.pop-up-phone').style.display == "none" || document.querySelector('.pop-up-phone').style.display == "") {
      document.querySelector('.pop-up-phone').style.display = "block";
    }
  }
  });

//opens and closes hamburger menu
  document.querySelector('.hamburger').addEventListener('click', function() {
  			if(document.querySelector('.navbar-nav').style.display == "none") {
  		  	document.querySelector('.navbar-nav').style.display = "block";
          if(document.documentElement.clientWidth<=600) {
            document.querySelector('.social').style.display = "block";
         }
  			} else if (document.querySelector('.navbar-nav').style.display == '') {
  		  		  	document.querySelector('.navbar-nav').style.display = "block";
                 if(document.documentElement.clientWidth<=600) {
                    document.querySelector('.social').style.display = "block";
               }

  			} else 	{
  				document.querySelector('.navbar-nav').style.display = "none";
          if(document.documentElement.clientWidth<=600) {
                   document.querySelector('.social').style.display = "none";
         }
  		}
  });


//для маленьких экранов, отображает и прячет секции
  document.querySelector('.recomendations h3').addEventListener('click', function(event) {
    if(document.documentElement.clientWidth<=600) {
      
        if(document.querySelector('.recomendations .hidden-part').style.display == 'block') {
          document.querySelector('.recomendations .hidden-part').style.display = 'none';
          document.querySelector('.recomendations .red-arrow').style.transform = 'rotate(0deg)';


        } else if (document.querySelector('.recomendations .hidden-part').style.display == '' || document.querySelector('.recomendations .hidden-part').style.display == 'none' ){
          document.querySelector('.recomendations .hidden-part').style.display = 'block';
          document.querySelector('.recomendations .red-arrow').style.transform = 'rotate(180deg)';

        }
      

    }
  });

//отображает и прячет правила подготовки
  document.querySelector('.rules').addEventListener('click', function(event) {
     if(document.documentElement.clientWidth<=600) {

      if(event.target.className == 'h4') {
        if(event.target.nextElementSibling.style.display == 'block') {
          event.target.nextElementSibling.style.display = 'none';
        } else if (event.target.nextElementSibling.style.display == '' || event.target.nextElementSibling.style.display == 'none' ){
          event.target.nextElementSibling.style.display = 'block';
        }
      }
     }
  });

//рпячет и показывает таблички про исследования для женщин
  document.querySelector('.woman-row h4').addEventListener('click', function(event) {
    if(document.documentElement.clientWidth<=600) {
      
         if(document.querySelector('.woman-row .hidden-part').style.display == 'block') {
              document.querySelector('.woman-row .hidden-part').style.display = 'none';
              document.querySelector('.woman-row .red-arrow').style.transform = 'rotate(0deg)';


         } else if (document.querySelector('.woman-row .hidden-part').style.display == '' || document.querySelector('.woman-row .hidden-part').style.display == 'none' ){
              document.querySelector('.woman-row .hidden-part').style.display = 'block';
              document.querySelector('.woman-row .red-arrow').style.transform = 'rotate(180deg)';

         }
        }
     
  });
//рпячет и показывает таблички про исследования для мужчин

    document.querySelector('.man-row h4').addEventListener('click', function(event) {
      if(document.documentElement.clientWidth<=600) {
          if(document.querySelector('.man-row .hidden-part').style.display == 'block') {
              document.querySelector('.man-row .hidden-part').style.display = 'none';
              document.querySelector('.man-row .red-arrow').style.transform = 'rotate(0deg)';


         } else if (document.querySelector('.man-row .hidden-part').style.display == '' || document.querySelector('.man-row .hidden-part').style.display == 'none' ){
              document.querySelector('.man-row .hidden-part').style.display = 'block';
              document.querySelector('.man-row .red-arrow').style.transform = 'rotate(180deg)';

         }
      }
  });

//создает голубые стрлочки и вставляет цену  и кнопку заказа для каждой программы
if(document.documentElement.clientWidth<=600) {
  let element = document.querySelector('.ym');
  element.insertAdjacentHTML('beforeEnd', '<div class="bluearrow"><img src="img/bluearrow-closed.png"></div>');
  let html = '<p class="price">1 485 <span>грн.</span></p><div class="order"><a href="#" class="red-btn" id="young-man-sm">Замовити</a></div>';
  element.insertAdjacentHTML('beforeEnd', html);

   element = document.querySelector('.om');
   element.insertAdjacentHTML('beforeEnd', '<div class="bluearrow"><img src="img/bluearrow-closed.png"></div>');
   html = '<p class="price">1 466 <span>грн.</span></p><div class="order"><a href="#" class="red-btn" id="old-man-sm">Замовити</a></div>';
    element.insertAdjacentHTML('beforeEnd', html);

   element = document.querySelector('.yw');
   element.insertAdjacentHTML('beforeEnd', '<div class="bluearrow"><img src="img/bluearrow-closed.png"></div>');
   html = '<p class="price">1 466 <span>грн.</span></p><div class="order"><a href="#" class="red-btn" id="young-woman-sm">Замовити</a></div>';
   element.insertAdjacentHTML('beforeEnd', html);

   element = document.querySelector('.ow');
   element.insertAdjacentHTML('beforeEnd', '<div class="bluearrow"><img src="img/bluearrow-closed.png"></div>');
   html = '<p class="price">1 323 <span>грн.</span></p><div class="order"><a href="#" class="red-btn" id="old-woman-sm">Замовити</a></div>';
   element.insertAdjacentHTML('beforeEnd', html);


    //price-list for young man for small devices <480px
   let newelement= document.querySelector('.ym .price');
    let  div = document.createElement('div');
    div.classList.add('table-price');
    div.style.display="none";
    newelement.before(div);
    html=`<div class="table-row white"><p>Загальний розгорнутий аналіз крові (автом. геманалізатор 33 показники)</p>  </div><div class="table-row"><p>Тиреотропний гормон (ТТГ)</p></div><div class="table-row white"><p>Глюкоза у венозній крові натще</p></div><div class="table-row"><p>Паратгормон (1-84) (ПТГ)</p></div><div class="table-row white"><p>Білірубін загальний</p></div><div class="table-row"><p>Аланінамінотрансфераза (АЛТ)</p></div><div class="table-row white"><p>Креатинін</p></div><div class="table-row"><p>Холестерин</p>
</div><div class="table-row"><p>Тригліцериди</p></div><div class="table-row white"><p>Пролактин (ПРЛ)</p>
</div><div class="table-row"><p>Інгібін B</p></div>`;
    div.insertAdjacentHTML('beforeend', html);

    //price-list for old man for small devices <480px

    newelement= document.querySelector('.om .price');
    div = document.createElement('div');
    div.classList.add('table-price');
    div.style.display="none";
    newelement.before(div);
    html=`<div class="table-row white"><p>Загальний розгорнутий аналіз крові (автом. геманалізатор 33 показники)</p></div>
<div class="table-row"><p>Тиреотропний гормон (ТТГ)</p></div><div class="table-row white"><p>Глюкоза у венозній крові натще</p></div><div class="table-row"><p>Паратгормон (1-84) (ПТГ)</p>
</div><div class="table-row white"><p>Білірубін загальний</p></div>
<div class="table-row"><p>Аланінамінотрансфераза (АЛТ)</p></div>
<div class="table-row white"><p>Креатинін</p></div>
<div class="table-row"><p>Холестерин</p></div>
<div class="table-row white"><p>Холестерин ліпопротеїдів низької щільності</p></div>
<div class="table-row"><p>Тригліцериди</p></div>
<div class="table-row white"><p>СРБ високочутливий (hs СРБ)</p></div>
<div class="table-row"><p>Сечова кислота</p></div>
<div class="table-row white"><p>Індекс вільного ПСА ((ПСА вільн/ПСА заг) х100%)</p></div>`;
    div.insertAdjacentHTML('beforeend', html);

    //price-list for young woman for small devices <480px
    newelement= document.querySelector('.yw .price');
    div = document.createElement('div');
    div.classList.add('table-price');
    div.style.display="none";
    newelement.before(div);
    html='<div class="table-row white"><p>Загальний розгорнутий аналіз крові (автом. геманалізатор 33 показники)</p></div><div class="table-row"><p>Тиреотропний гормон (ТТГ)</p></div><div class="table-row white"><p>Глюкоза у венозній крові натще</p></div><div class="table-row"><p>Паратгормон (1-84) (ПТГ)</p></div><div class="table-row white"><p>Білірубін загальний</p></div><div class="table-row"><p>Аланінамінотрансфераза (АЛТ)</p></div><div class="table-row white"><p>Креатинін</p></div><div class="table-row"><p>Холестерин</p></div><div class="table-row white"><div class="column-1"><p>Гомоцистеїн</p></div></div><div class="table-row white"><div class="column-1"><p class="price-item">ПАП-тест методом рідинної цитології (технологія SurePath BD)</p></div></div>';
    div.insertAdjacentHTML('beforeend', html);

    //price-list for old woman for small devices <480px
    newelement= document.querySelector('.ow .price');
    div = document.createElement('div');
    div.classList.add('table-price');
    div.style.display="none";
    newelement.before(div);
    html=`<div class="table-row white"><p>Загальний розгорнутий аналіз крові (автом. геманалізатор 33 показники)</p></div><div class="table-row"><p>Тиреотропний гормон (ТТГ)</p></div><div class="table-row white"><p>Глюкоза у венозній крові натще</p></div><div class="table-row"><p>Паратгормон (1-84) (ПТГ)</p></div><div class="table-row white"><p>Білірубін загальний</p></div><div class="table-row"><p>Аланінамінотрансфераза (АЛТ)</p></div><div class="table-row white"><p>Креатинін</p></div><div class="table-row"><p>Холестерин</p></div>
    <div class="table-row white"><p>Холестерин ліпопротеїдів низької щільності</p></div><div class="table-row">
<p>Тригліцериди</p></div><div class="table-row"><p>Феритин</p></div><div class="table-row"><p>ПАП-тест традиційний (цитологічне дослідження шийки матки)</p></div>`;
    div.insertAdjacentHTML('beforeend', html);




// при нажатии на голую стречлоку отображает или прячет прайс и меняет вид самой стрелочки
  document.querySelector('.ym .bluearrow').addEventListener('click', function(event){
    if(document.querySelector('.ym .table-price').style.display == 'block'){
      document.querySelector('.ym .table-price').style.display="none";
      document.querySelector('.ym').style.height = "100%";
      document.querySelector('.ym .bluearrow').style.width = '25px';
      document.querySelector('.ym .bluearrow').style.height = '41px';
      document.querySelector('.ym .bluearrow').innerHTML = '<img src="img/bluearrow-closed.png">';
    } else {
      document.querySelector('.ym .table-price').style.display = 'block';
      document.querySelector('.ym').style.height = "750px";
      document.querySelector('.ym .bluearrow').style.width = '41px';
      document.querySelector('.ym .bluearrow').style.height = '25px';
      document.querySelector('.ym .bluearrow').innerHTML = '<img src="img/bluearrow-open.png">';
      document.querySelector('.ym .bluearrow img').style.width = '41px';
      document.querySelector('.ym .bluearrow img').style.height = '25px';
    }
  
  });

    document.querySelector('.om .bluearrow').addEventListener('click', function(event){
    if(document.querySelector('.om .table-price').style.display == 'block'){
      document.querySelector('.om .table-price').style.display="none";
      document.querySelector('.om').style.height = "100%";
      document.querySelector('.om .bluearrow').style.width = '25px';
      document.querySelector('.om .bluearrow').style.height = '41px';
      document.querySelector('.om .bluearrow').innerHTML = '<img src="img/bluearrow-closed.png">';

    } else {
     document.querySelector('.om .table-price').style.display = 'block';
      document.querySelector('.om').style.height = "850px";
      document.querySelector('.om .bluearrow').style.width = '41px';
      document.querySelector('.om .bluearrow').style.height = '25px';
      document.querySelector('.om .bluearrow').innerHTML = '<img src="img/bluearrow-open.png">';
      document.querySelector('.om .bluearrow img').style.width = '41px';
      document.querySelector('.om .bluearrow img').style.height = '25px';
    }
  
  });
//для молодых женщин
   document.querySelector('.yw .bluearrow').addEventListener('click', function(event){
    if(document.querySelector('.yw .table-price').style.display == 'block'){
      document.querySelector('.yw .table-price').style.display="none";
      document.querySelector('.yw').style.height = "100%";
      document.querySelector('.yw .bluearrow').style.width = '25px';
      document.querySelector('.yw .bluearrow').style.height = '41px';
      document.querySelector('.yw .bluearrow').innerHTML = '<img src="img/bluearrow-closed.png">';

    } else {
     document.querySelector('.yw .table-price').style.display = 'block';
     document.querySelector('.yw').style.height = "700px";
     document.querySelector('.yw .bluearrow').style.width = '41px';
     document.querySelector('.yw .bluearrow').style.height = '25px';
     document.querySelector('.yw .bluearrow').innerHTML = '<img src="img/bluearrow-open.png">';
     document.querySelector('.yw .bluearrow img').style.width = '41px';
     document.querySelector('.yw .bluearrow img').style.height = '25px';
    }
  
  });
//для пожилых женщин
   document.querySelector('.ow .bluearrow').addEventListener('click', function(event){
    if(document.querySelector('.ow .table-price').style.display == 'block'){
      document.querySelector('.ow .table-price').style.display="none";
      document.querySelector('.ow').style.height = "100%";
      document.querySelector('.ow .bluearrow').style.width = '25px';
      document.querySelector('.ow .bluearrow').style.height = '41px';
      document.querySelector('.ow .bluearrow').innerHTML = '<img src="img/bluearrow-closed.png">';

    } else {
     document.querySelector('.ow .table-price').style.display = 'block';
     document.querySelector('.ow').style.height = "800px";
     document.querySelector('.ow .bluearrow').style.width = '41px';
     document.querySelector('.ow .bluearrow').style.height = '25px';
     document.querySelector('.ow .bluearrow').innerHTML = '<img src="img/bluearrow-open.png">';
     document.querySelector('.ow .bluearrow img').style.width = '41px';
     document.querySelector('.ow .bluearrow img').style.height = '25px';    }
  
  });


    document.querySelector('#young-woman-sm').addEventListener('click', function(event){
    event.preventDefault();
    showOrderWindow();
    document.querySelector('#programs').value='young-woman';
  });
    
    document.querySelector('#old-woman-sm').addEventListener('click', function(event){
    event.preventDefault();
    showOrderWindow();
    document.querySelector('#programs').value='old-woman';
  });
     
     document.querySelector('#old-man-sm').addEventListener('click', function(event){
    event.preventDefault();
    showOrderWindow();
    document.querySelector('#programs').value='old-man';
  });

    document.querySelector('#young-man-sm').addEventListener('click', function(event){
    event.preventDefault();
    showOrderWindow();
    document.querySelector('#programs').value='young-man';
  });

  
 

   

}
    

}


