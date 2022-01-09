$("path, circle").hover(function(e) {
    $('#info-box').css('display','block');
    $('#info-box').html($(this).data('info'));
  });
  
  $("path, circle").mouseleave(function(e) {
    $('#info-box').css('display','none');
  });
  
  $(document).mousemove(function(e) {
    $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
    $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
  }).mouseover();
  
  var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if(ios) {
    $('a').on('click touchend', function() {
      var link = $(this).attr('href');
      window.open(link,'_blank');
      return false;
    });
  }
// for statment 1 ~ 50 for get state

let state_data = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO',
              'CT', 'DC', 'DE', 'FL', 'GA', 'HI',
              'IA', 'ID', 'IL', 'IN', 'KS', 'KY',
              'LA', 'MA', 'MD', 'ME', 'MI', 'MN',
              'MO', 'MP', 'MS', 'MT', 'NC', 'ND',
              'NE', 'NH', 'NJ', 'NM', 'NV', 'NY',
              'OH', 'OK', 'OR', 'PA', 'PR', 'RI',
              'SC', 'SD', 'TN', 'TX', 'UT', 'VA',
              'VT', 'WA', 'WI', 'WV', 'WY']
let open = []
for (let i = 0; i < state_data.length; i++) {
  // console.log(state_data[i]);
  open.push(document.getElementById(state_data[i]));
}

// state data will be showing getElementById

const data_container = document.getElementById('data-container');
const close = document.getElementById('close');

// get for data from origin data open
for (let i = 0; i < state_data.length; i++) {

  if (open[i] == null){
    //pass
  }else{
    open[i].addEventListener('click', () => {
      data_container.classList.add('show');
    });

    close.addEventListener('click', () => {
      data_container.classList.remove('show');
    });
  }
}
