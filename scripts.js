 var station_1 = false;
 var station_2 = false;
 var station_3 = true;
 var station_4 = false;
 var station_5 = false;

 var selected_station = '';

 $(document).ready(function () {

   //selected_station = localStorage.getItem("selectedStation");

   /* switch (selected_station) {
      case '1':
        $('#station').text('Station: ' + selected_station);
        break;
      case '2':
        $('#station').text('Station: ' + selected_station);
        break;
      case '3':
        $('#station').text('Station: ' + selected_station);
        $('#single_stat_status').text('Single status active');
        break;

      default:

    }*/

 });

 // ------------------ Setup page -----------------------
 $('#store').on('click', function () {
   var water_contr_1 = $('#water_contr_1').val();
   var water_contr_2 = $('#water_contr_2').val();
   var water_contr_3 = $('#water_contr_3').val();
   var water_contr_4 = $('#water_contr_4').val();
   var water_contr_5 = $('#water_contr_5').val();
   var water_contr_6 = $('#water_contr_6').val();
   var water_contr_7 = $('#water_contr_7').val();
   var water_contr_8 = $('#water_contr_8').val();

   alert('Serial numbers added!');

   location.href = "index.html"
 });

 // ------------------- Login page -------------------------------
 $('#login').click(function () {
   location.href = "index.html"
   //localStorage.setItem("true", logged);
 });

 // ------------------- Logout -------------------------------

 // ------------------- Registration page -------------------------------
 $('#registration').click(function () {
   location.href = "index.html"

 });

 // ------------------ Index (Ready) page ------------------------
 // Water control entry data
 for (i = 1; i <= 8; i++) {
   $('#water_control').append($('<option>', {
     value: i,
     text: i
   }));
 }
 // Future program label
 $("#future_program").text("(Program C, tomorrow, 9:45 - 10:00)");

 var items = ["A", "B", "C", "D", "E"];

 $.each(items, function (index, value) {
   $('#man_program').append($('<option>', {
     value: index,
     text: value
   }));
 });

 // Makes server send START MANUAL PROGRAM command on serial port
 // Makes server send START MANUAL STATION command on serial port
 $('#start_prog').on('click', function () {
   var selected_prog = $('#man_program').find(":selected").text();
   if (selected_prog === "-") {
     alert('no program selected!');
   } else {
     alert("Selected program: '" + selected_prog + "'");
   }
 });

 // Generates manual station entry data
 for (i = 1; i <= 20; i++) {
   $('#man_stat').append($('<option>', {
     value: i,
     text: i
   }));
 }

 // Generates manual station time entry data
 for (i = 1; i <= 59; i++) {
   $('#man_stat_time').append($('<option>', {
     value: i,
     text: i
   }));
 }

 // On manual station and time click
 $('#man_stat_start').on('click', function () {
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
     selected_station = man_statiom;
     localStorage.setItem("selectedStation", selected_station);
     location.href = "running.html"
   }
 });

 // ------------------ Running page -------------- 
 $('#stopManualStation').click(function () {
   location.href = "index.html"
   //localStorage.setItem("true", logged);
 });

 // Station status label  
 $("#station_status").text("Single station active");
 selected_station = localStorage.getItem("selectedStation");
 $('#station').text('Station: ' + selected_station);


 // Test progress bar
 var width = 20;

 function testBar() {
   var elem = document.getElementById("progressBar");
   var id = setInterval(frame, 1);
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
   width = 20;
 }

 // ------------------ Irrigation page -----------------------
 function stopIrrigation() {

   location.href = "index.html"
 }