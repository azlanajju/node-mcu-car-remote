  var timer;
  var ledState = false;

  function sendCommand(command) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log("Command sent: " + command);
      }
    };
    xhttp.open("GET", "http://192.168.4.1/?State=" + command, true);
    xhttp.send();
  }

  function stopCommand() {
    clearTimeout(timer);
    timer = setTimeout(function() {
      sendCommand("S");
    }, 500);
  }

  function toggleLED(ledCommand) {
    if (ledState) {
      turnOffLED(ledCommand + "_OFF");
    } else {
      turnOnLED(ledCommand);
    }
    ledState = !ledState;
  }

  function turnOnLED(ledCommand) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log("LED turned on: " + ledCommand);
      }
    };
    xhttp.open("GET", "http://192.168.4.1/?State=" + ledCommand, true);
    xhttp.send();
  }

  function turnOffLED(ledCommand) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log("LED turned off: " + ledCommand);
      }
    };
    xhttp.open("GET", "http://192.168.4.1/?State=" + ledCommand, true);
    xhttp.send();
  }