document.addEventListener('DOMContentLoaded', function(){
    let stars = document.querySelectorAll('.star');
    stars.forEach(function(star){
        star.addEventListener('click', setRating);
    });

    let rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));
    let target = stars[rating - 1];
    target.dispatchEvent(new MouseEvent('click'));
});
function setRating(ev){
    let span = ev.currentTarget;
    let stars = document.querySelectorAll('.star');
    let match = false;
    let num = 0;
    stars.forEach(function(star, index){
        if(match){
            star.classList.remove('rated');
        }else{
            star.classList.add('rated');
        }
        //are we currently looking at the span that was clicked
        if(star === span){
            match = true;
            num = index + 1;
        }
    });
    document.querySelector('.stars').setAttribute('data-rating', num);

    if(num == 5) {
      makedynamic('star5', 25);
    } else if(num == 4) {
      makedynamic('star4', 25);
    } else if (num == 3) {
      makedynamic('star3', 25);
    } else if (num == 2) {
      makedynamic('star2', 25);
    } else {
      makedynamic('star1', 25);
    }
}


      var info = document.getElementById("info");

      function makedynamic(star, neededclicks) {
        if(star == 'star5') {
          bar =  document.getElementById("bar-5");
        } else if(star == 'star4') {
          bar = document.getElementById("bar-4");
        } else if(star == 'star3') {
          bar = document.getElementById("bar-3");
        } else if(star == 'star2') {
          bar = document.getElementById("bar-2");
        } else {
          bar = document.getElementById("bar-1");
        }


        var stepsize = 100 / neededclicks;
          document.getElementById(star).onclick = function() {
              var width = bar.style.width.replace("%", "");
              width = parseInt(width) + stepsize;
              if (width >= 100) {
                  bar.style.width = "100%";
                  info.innerHTML = stepsize > 10 ? "You made it!" : "ouch, my fingerrrrs";
              } else {
                  width = width +"%";
                  bar.style.width = width;
                  info.innerHTML = "bar: " + width;
              }
          }
        }
function incrementValue(num) {

    if(num == 5){
      // alert("5");

      var value = parseInt(document.getElementById('output5').value, 10);
      value = isNaN(value) ? 20 : value;
      value++;
      document.getElementById('output5').value = value;
      document.getElementById('output5').innerHTML = value;

  } else if (num == 4) {
      var value = parseInt(document.getElementById('output4').value, 10);
      value = isNaN(value) ? 12 : value;
      value++;
      document.getElementById('output4').value = value;
      document.getElementById('output4').innerHTML = value;

  } else if (num == 3) {
      var value = parseInt(document.getElementById('output3').value, 10);
      value = isNaN(value) ? 4 : value;
      value++;
      document.getElementById('output3').value = value;
      document.getElementById('output3').innerHTML = value;

  } else if (num == 2) {
      var value = parseInt(document.getElementById('output2').value, 10);
      value = isNaN(value) ? 1 : value;
      value++;
      document.getElementById('output2').value = value;
      document.getElementById('output2').innerHTML = value;
  } else {
      var value = parseInt(document.getElementById('output1').value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      document.getElementById('output1').value = value;
      document.getElementById('output1').innerHTML = value;
  }
}
