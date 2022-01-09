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
              'VT', 'WA', 'WI', 'WV', 'WY'];
let open = [];

function getValue(st_data){
  // let statement = {
  //   'state': st_data,
  // }
  // const request = new XMLHttpRequest()
  // request.open('POST', '/statementload/${JSON.stringify(statement)}')
  // request.onload = () => {
  //   const flaskMessage = request.responseText
  //   console.log(flaskMessage)
  // }
  // request.send()


  var x = document.getElementById(st_data);
  // Push data from here 
  
  const data_container = document.getElementById('data-container');
  const close = document.getElementById('close');
  const open = document.getElementById(st_data)

  if (open == null) {
      //pass
  }else{
    open.addEventListener('click', () => {
      data_container.classList.add('show')
    });
    close.addEventListener('click', () => {
      data_container.classList.remove('show');
    });
  }

  console.log(st_data)
  console.log(x);
}
// let data_container = []
for (let i = 0; i < state_data.length; i++) {
  // console.log(state_data[i]);
  open.push(document.getElementById(state_data[i]));

  // data_container.push(document.getElementById('data_container' + i))
  
  // console.log('data-contaniner' + i);
  
}

// state data will be showing getElementById
// make lots of data_container and show each data in this area

// 1. setting the data from python
// 2. pass the data from python
// 3. setting the data_container[i]
// 4. setting the getElementById from 'data-container' + i

const data_container = document.getElementById('data-container');
const close = document.getElementById('close');


// get for data from origin data open
// for (let i = 0; i < state_data.length; i++) {
  // if (open[i] == null){
  //   //pass
  // }else{
  //   open[i].addEventListener('click', () => {
  //     //data_container.classList.add('show');
  //       $("html").load("/data");
  //   });

//   if (open[i] == null){
//     //pass
//   }else{
//     open[i].addEventListener('click', () => {
//       data_container.classList.add('show');
//     });
    
//     close.addEventListener('click', () => {
//       data_container.classList.remove('show');
//     });
//   }
// }