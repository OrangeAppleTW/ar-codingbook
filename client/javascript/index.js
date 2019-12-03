$('.pa-navbar-mobile-toggle').click(function () {
  $('body').toggleClass('show-navbar-mobile');
});


if ($('.pa-fancy-bg').length > 0) {
  $(window).scroll(function (event) {
    var a = $(this).scrollTop();
  
    $('.pa-fancy-bg').each(function (el) {
      var b = $(this).position().top;
      $(this).css('background-position-y', (a-b)/4);
    });
  });
}

if ($('.pa-fancy-text').length > 0) {

  let h = $(window).height();
  $(window).scroll(function (event) {
    var a = $(this).scrollTop();
  
    $('.pa-fancy-text').each(function (el) {
      $(this).css('margin-top', `${a*1.35}px`);
      $(this).css('opacity', 1 - a/(h*1/2));
    });
  });
}


if ($('.vue-editor').length > 0) {

  let commands = ['R', 'M', 'M', 'R', 'M', 'M'];

  new Vue({
    el: '.vue-editor',
    data: {
      commands: commands,
      dashboxs: Array(40 - commands.length).fill(undefined),
      current: -1,
      isRunning: false,
      intervalId: undefined,

      player: {
        x: 3,
        y: 2,
        d: 90,
      }
    },
    computed: {
      top: function () {
        return this.player.y*100/5 + '%';
      },
      left: function () {
        return this.player.x*100/6 + '%';
      }
    },
    methods: {

      reset: function () {
        this.player.x = 3;
        this.player.y = 2;
        this.player.d = 90;
      },

      run: function () {
        this.reset();
        this.current = 0;
        this.isRunning = true;

        this.intervalId = setInterval(()=>{
          this.current++;

          let cmd = this.commands[this.current];
          if (cmd == 'R') this.turn(90);
          if (cmd == 'L') this.turn(-90);
          if (cmd == 'M') this.move(1);
          if (cmd == 'B') this.move(-1);

          if (this.current > this.commands.length) {
            this.stop();
            alert('過關！');
          }
        }, 1000);
      },

      turn: function (deg) {
        this.player.d = (this.player.d + deg + 360)%360;
      },
      move: function (step) {
        if (this.player.d === 0) this.player.y -= step;
        if (this.player.d === 90) this.player.x += step;
        if (this.player.d === 180) this.player.y += step;
        if (this.player.d === 270) this.player.x -= step;
      },

      stop: function () {
        clearInterval(this.intervalId);
        this.intervalId = undefined;
        this.isRunning = false;
        this.current = -1;
      }
    }
  })
}

