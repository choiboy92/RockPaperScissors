// JS file for RockPaperScissors.html
// Made by JUNHO CHOI


function show_icon(name, callback) {
  anime({
    targets: name,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    //delay: function(el, i) { return i * 250 },
    autoplay: true,
    //direction: 'alternate',
    //loop: true,
    begin: function(anim) {
      //console.log("animation has begun");

      if (name =="#paper path") {
        document.querySelector(name).setAttribute("stroke-width", "0.5");
      }
      else {
        document.querySelector(name).setAttribute("stroke-width", "10");
      }
      document.querySelector(name).setAttribute("opacity", "1");
      document.querySelector(name).setAttribute("stroke", "black");
      document.querySelector(name).setAttribute("fill", "none");
    },
    complete: function(anim) {
      callback();
    }
  });
};
//0 == Rock
//1 == Paper
//2 == Scissors
function set_timer(time, callback) {
  var time_left = time;
  var timer = setInterval(function() {
    if (time_left == 0) {
      clearInterval(timer);
      callback();
    }
    $('#timerdiv').text(time_left);
    time_left--;
  }, time*400);

}

//var array = ["#rock path","#paper path","#scissors path"];
window.onload = () => {
  var array = ["#rock path","#paper path","#scissors path"];
  var choice_array = ["rock_button", "paper_button", "scissors_button"];
  var win_count = 0;
  var draw_count = 0;
  var lose_count = 0;
  var time = 3; // in seconds


  var repeat = setInterval(function() {
    console.log('START');
    // Reset button input
    var choice = 'null';
    $('button').click(function() {
      choice = this.id;
    });
    //TIMER

    document.querySelector("#rock path").setAttribute("opacity", "0.1");
    document.querySelector("#paper path").setAttribute("opacity", "0.1");
    document.querySelector("#scissors path").setAttribute("opacity", "0.1");
    const randindex = Math.floor(Math.random() * array.length)
    const randomElement = array[randindex];
    show_icon(randomElement, function() {
      set_timer(time, function() {setTimeout(function() {
        if (choice == choice_array[randindex]) {
          console.log('draw');
          draw_count++;
        }
        else if (choice == choice_array[randindex+1] || choice == choice_array[randindex-2]) {
          console.log('win');
          console.log(choice);
          win_count++;
        }
        else {
          console.log('lose');
          lose_count++;
        }
      }, 500)
      console.log('END');
      });
    });

  }, 10000);
  $('#end_button').click(function() {
      clearInterval(repeat);
      alert('wins = '+win_count+ ', draws = '+ draw_count+ ', losses = '+ lose_count);
  });

};
/*canvas = document.createElement('canvas')
body.appendChild(canvas);
ctx = canvas.getContext("2d");*/
