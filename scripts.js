$('#store').on('click', function () {
  var water_contr_1 = $('#water_contr_1').val();
  if (water_contr_1 === "") {
    alert('empty');
  } else {
    alert('Serial number for "water_contr_1" is: ' + water_contr_1);
  }

  location.href = "index.html"
});

$('#start_station').on('click', function () {
  var pick_prog = $('#pick_prog').val();
  alert('start-man-prog" is: ' + pick_prog);
});

$("#station_status").text("Single station active");
$("#future_program").text("(Program C, tomorrow, 9:45 - 10:00)");


var width = 10;

function move() {
  var elem = document.getElementById("progressBar");

  // var id = setInterval(frame, 1);
  elem.style.width = width + '%';
  elem.innerHTML = width * 1 + '%';
  width++;

  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}

// ------------------ Ready Page ------------------------

// Manual program entry data
var items = ["A", "B", "C", "D", "E"];

$.each(items, function (index, value) {
  $('#man_program').append($('<option>', {
    value: index,
    text: value
  }));
});

// On click manual program 
$('#start_prog').on('click', function () {
  var selected_prog = $('#man_program').find(":selected").text();
  if (selected_prog === "-") {
    alert('no program selected!');
  } else {
    alert("Selected program: '" + selected_prog + "'");
  }
});

// Water control entry data
for (i = 1; i <= 8; i++) {
  $('#water_control').append($('<option>', {
    value: i,
    text: i
  }));
}

// Manual station entry data
for (i = 1; i <= 20; i++) {
  $('#man_stat').append($('<option>', {
    value: i,
    text: i
  }));
}

// Manual station time entry data
for (i = 1; i <= 59; i++) {
  $('#man_stat_time').append($('<option>', {
    value: i,
    text: i
  }));
}



// On manual station and time click
$('#start_prog_time').on('click', function () {
  var man_statiom = $('#man_stat').find(":selected").text();
  var time = $('#man_stat_time').find(":selected").text();
  if (time === "0" && man_statiom === "0") {
    alert('no station and time selected!');
  } else if (time === "0") {
    alert('no time selected!');
  } else if (man_statiom === "0") {
    alert('no station selected!');
  } else {
    alert("Selected station: '" + man_statiom + "', " + "Selected time: '" + time + "'");
  }
});