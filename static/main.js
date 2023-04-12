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
  var x = document.getElementById(st_data);
  // Push data from here 
  const data_container = document.getElementById('data-container');
  const close = document.getElementById('close');
  const open = document.getElementById(st_data);
  const Url = 'https://api.covidactnow.org/v2/state/' + st_data + '.json?apiKey=8d65e6de718b4c6da48d818e9a204909';
    console.log(Url);
      $.ajax({
          url: Url,
          type: "GET",
          success: function (result) {
            const data = JSON.parse(JSON.stringify(result));
            let populations = data['population'];
            let cases = data['actuals'].cases;
            let deaths = data['actuals'].deaths;
            let positives = data['actuals'].positiveTests;
            let negatives = data['actuals'].negativeTests;
            console.log(data['population']);
            console.log(data['actuals'].cases);
            console.log(data['actuals'].deaths);
            console.log(data['actuals'].positiveTests);
            console.log(data['actuals'].negativeTests);
            $('#show-data').css('display','block');
            // $('.text1').text("data['actuals'].cases}");
            $('#states').text(st_data);
            $('#data1').text(populations);
            $('#data2').text(cases);
            $('#data3').text(deaths);
            $('#data4').text(positives);
            $('#data5').text(negatives);

          },
          error: function (error) {
              console.log(error);
          }
      });
    // console.log(obj);


  //
  // if (open == null) {
  //     //pass
  // }else{
  //   open.addEventListener('click', () => {
  //     $("html").load("/data")
  //   });
  //   close.addEventListener('click', () => {
  //     data_container.classList.remove('show');
  //   });
  // }
  //
  //   $.ajax(
  //     {
  //         type:'POST',
  //         contentType:'application/json;charset-utf-08',
  //         dataType:'json',
  //         url:'https://covid19map.fly.dev/data?value='+st_data ,
  //         success:function (data) {
  //             var reply=data.reply;
  //             if (reply=="success")
  //             {
  //                 return;
  //             }
  //             else
  //                 {
  //                 alert("some error ocured in session agent")
  //                 }
  //
  //         }
  //     }
  // );
  //

  console.log("st_Data: ");
  console.log(st_data);
  console.log("x: ");
  console.log(x);
}
// $('path').click(function () {
//   $('.card .data-container').css('display','none');
//   $('#show-data').css('display','none');
//   console.log('testset');
// })

$('.temp').click(function () {
  $('#show-data').css('display','none');
  console.log('tesdftclse');
});

$('#close').click(function () {
  $('#show-data').css('display','none');
  console.log('testclse');
});

// let data_container = []


// state data will be showing getElementById
// make lots of data_container and show each data in this area

// 1. setting the data from python
// 2. pass the data from python
// 3. setting the data_container[i]
// 4. setting the getElementById from 'data-container' + i


// get for data from origin data open
// for (let i = 0; i < state_data.length; i++) {

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
