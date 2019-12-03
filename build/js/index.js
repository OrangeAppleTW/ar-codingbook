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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKCcucGEtbmF2YmFyLW1vYmlsZS10b2dnbGUnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS50b2dnbGVDbGFzcygnc2hvdy1uYXZiYXItbW9iaWxlJyk7XG59KTtcblxuXG5pZiAoJCgnLnBhLWZhbmN5LWJnJykubGVuZ3RoID4gMCkge1xuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBhID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcbiAgXG4gICAgJCgnLnBhLWZhbmN5LWJnJykuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHZhciBiID0gJCh0aGlzKS5wb3NpdGlvbigpLnRvcDtcbiAgICAgICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kLXBvc2l0aW9uLXknLCAoYS1iKS80KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmlmICgkKCcucGEtZmFuY3ktdGV4dCcpLmxlbmd0aCA+IDApIHtcblxuICBsZXQgaCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgYSA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG4gIFxuICAgICQoJy5wYS1mYW5jeS10ZXh0JykuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICQodGhpcykuY3NzKCdtYXJnaW4tdG9wJywgYCR7YSoxLjM1fXB4YCk7XG4gICAgICAkKHRoaXMpLmNzcygnb3BhY2l0eScsIDEgLSBhLyhoKjEvMikpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuXG5pZiAoJCgnLnZ1ZS1lZGl0b3InKS5sZW5ndGggPiAwKSB7XG5cbiAgbGV0IGNvbW1hbmRzID0gWydSJywgJ00nLCAnTScsICdSJywgJ00nLCAnTSddO1xuXG4gIG5ldyBWdWUoe1xuICAgIGVsOiAnLnZ1ZS1lZGl0b3InLFxuICAgIGRhdGE6IHtcbiAgICAgIGNvbW1hbmRzOiBjb21tYW5kcyxcbiAgICAgIGRhc2hib3hzOiBBcnJheSg0MCAtIGNvbW1hbmRzLmxlbmd0aCkuZmlsbCh1bmRlZmluZWQpLFxuICAgICAgY3VycmVudDogLTEsXG4gICAgICBpc1J1bm5pbmc6IGZhbHNlLFxuICAgICAgaW50ZXJ2YWxJZDogdW5kZWZpbmVkLFxuXG4gICAgICBwbGF5ZXI6IHtcbiAgICAgICAgeDogMyxcbiAgICAgICAgeTogMixcbiAgICAgICAgZDogOTAsXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllci55KjEwMC81ICsgJyUnO1xuICAgICAgfSxcbiAgICAgIGxlZnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyLngqMTAwLzYgKyAnJSc7XG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG5cbiAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGxheWVyLnggPSAzO1xuICAgICAgICB0aGlzLnBsYXllci55ID0gMjtcbiAgICAgICAgdGhpcy5wbGF5ZXIuZCA9IDkwO1xuICAgICAgfSxcblxuICAgICAgcnVuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gMDtcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgdGhpcy5jdXJyZW50Kys7XG5cbiAgICAgICAgICBsZXQgY21kID0gdGhpcy5jb21tYW5kc1t0aGlzLmN1cnJlbnRdO1xuICAgICAgICAgIGlmIChjbWQgPT0gJ1InKSB0aGlzLnR1cm4oOTApO1xuICAgICAgICAgIGlmIChjbWQgPT0gJ0wnKSB0aGlzLnR1cm4oLTkwKTtcbiAgICAgICAgICBpZiAoY21kID09ICdNJykgdGhpcy5tb3ZlKDEpO1xuICAgICAgICAgIGlmIChjbWQgPT0gJ0InKSB0aGlzLm1vdmUoLTEpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudCA+IHRoaXMuY29tbWFuZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIGFsZXJ0KCfpgY7pl5zvvIEnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSxcblxuICAgICAgdHVybjogZnVuY3Rpb24gKGRlZykge1xuICAgICAgICB0aGlzLnBsYXllci5kID0gKHRoaXMucGxheWVyLmQgKyBkZWcgKyAzNjApJTM2MDtcbiAgICAgIH0sXG4gICAgICBtb3ZlOiBmdW5jdGlvbiAoc3RlcCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIuZCA9PT0gMCkgdGhpcy5wbGF5ZXIueSAtPSBzdGVwO1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIuZCA9PT0gOTApIHRoaXMucGxheWVyLnggKz0gc3RlcDtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLmQgPT09IDE4MCkgdGhpcy5wbGF5ZXIueSArPSBzdGVwO1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIuZCA9PT0gMjcwKSB0aGlzLnBsYXllci54IC09IHN0ZXA7XG4gICAgICB9LFxuXG4gICAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbiJdLCJmaWxlIjoiaW5kZXguanMifQ==
