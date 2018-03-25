 var station_1 = false;
 var station_2 = false;
 var station_3 = true;
 var station_4 = false;
 var station_5 = false;

 var selected_station = '';


 $(document).ready(function () {

   selected_station = localStorage.getItem("selectedStation");

   switch (selected_station) {
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

   }

 });





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

 // ------------------ Index (Ready) Page ------------------------

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
     location.href = "single-station.html"
   }
 });