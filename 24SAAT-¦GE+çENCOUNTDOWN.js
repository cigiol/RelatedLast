var countDownDate = new Date("July 1 2020, 18:00:00");
      var _interval = setInterval(function () {
          try {
            var now = new Date();
            var distance = countDownDate.getTime() - now.getTime();
            var hours = Math.floor(((distance / 1000 )/(60 * 60)));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
              console.log(hours+":"+minutes+":"+seconds);

              if (distance < 0) clearInterval(_interval);
          } catch (ex) {
              clearInterval(_interval);
              return false;
          }
      }, 1000);