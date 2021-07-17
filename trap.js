    function play_se(){
        var warning = new Audio('alert.mp3')
        var voice = new Audio('male_voice.mp3')
        warning.play()
        voice.play()
    }

    $(function(){

      var time=30;
      setInterval(function(){
        time--;
        $('#timer').text(time);
      },1000);

      $('.modal').modal({dismissible: false});
      $('#alert').modal('open');
      $('#close').click(function(){
        $('#alert').modal('close');
        play_se();
      });

      var device = navigator.userAgent.match(/Android|iPhone|iPad/);
      if (device == null){
        device = '端末';
      }
      $('#device').text(device);



      $('#test').click(play_se);

      histry.pushState(null,null,null);
      $(window).on("popstate", function(e){
      if (!e.originalEvent.state){
        play_se();
        history.pushState(null, null, null);
        return;


      }
      });






      var device = navigator.userAgent.match(/Android|iPhone|iPad/);
      if (device == null){
        device = '端末';
      }
      $('#device').text(device);
    });
    function play_se(){
        var warning = new Audio('alert.mp3')
        var voice = new Audio('male_voice.mp3')
        warning.play()
        voice.play()
    }

    $(function(){

      var time=30;
      setInterval(function(){
        time--;
        $('#timer').text(time);
      },1000);

      $('.modal').modal({dismissible: false});
      $('#alert').modal('open');
      $('#close').click(function(){
        $('#alert').modal('close');
        play_se();
      });

      var device = navigator.userAgent.match(/Android|iPhone|iPad/);
      if (device == null){
        device = '端末';
      }
      $('#device').text(device);



      $('#test').click(play_se);

      histry.pushState(null,null,null);
      $(window).on("popstate", function(e){
      if (!e.originalEvent.state){
        play_se();
        history.pushState(null, null, null);
        return;


      }
      });






      var device = navigator.userAgent.match(/Android|iPhone|iPad/);
      if (device == null){
        device = '端末';
      }
      $('#device').text(device);
    });

    <script>
