//creates the initial canvas, called 'unc', with width 600 and height 1200
var context = Raphael('unc', 600,1200);

function highlight() { //makes the current cell red
    this.attr('fill', 'red');  
  //window.alert(this.innerHTML);
}

function unhighlight() { //turns the current cell pink again
    this.attr('fill', 'pink');   
}

var days_of_week = ["M", "T", "W", "R", "F"]; 
var times_of_dayMWF = ["0830","0930","1030","1130","1230","0130","0230","0330"];
var times_of_dayTR = ["0815","0940","1215","0140","0305"];

// Creates the cells that contain the days of the week
for (var i=0; i<5; i++){
  var day = context.rect(20+i*110, 0, 100, 30); //x, y, width, height
  var text = context.text(70+i*110, 15, days_of_week[i]); //x, y, text
}

var mwfarr = []; //list of MWF rectangles
//Creates MWF class cells
for (var i=0; i<3; i++){ // 3 = MWF
  for (var j=0; j<9; j++){  //9 courses each day
    mwfarr[j] = context.rect(20+i*220,40+j*110,100,100); //x, y, width, height
    mwfarr[j].attr('fill', 'pink'); //make the rectangles pink
    if (i === 0){ //Assign id with Day and Time to Monday
      mwfarr[j].id = days_of_week[i] + times_of_dayMWF[j];
    }
    else if (i === 1){ //Assign id with Day and Time to Wednesday
      mwfarr[j].id = days_of_week[2] + times_of_dayMWF[j];
    }
    else if (i === 2){ //Assign id with Day and Time to Friday
      mwfarr[j].id = days_of_week[4] + times_of_dayMWF[j];
    }
    mwfarr[j].mouseover(highlight); //if mouseover, highlight
    mwfarr[j].mouseout(unhighlight); //once no longer hovering, un-highlight
  }
}

var trarr=[];
//Tuesday Thursday (same idea)
for (var i=0; i<2; i++){
  for (var j=0; j<6; j++){    
    trarr[j] = context.rect(130+i*220,40+j*160,100,150);
    trarr[j].attr('fill', 'pink');
    if (i === 0){
      trarr[j].id = days_of_week[1] + times_of_dayTR[j];
    }
    if (i === 1){
      trarr[j].id = days_of_week[3] + times_of_dayTR[j];
    }
    trarr[j].mouseover(highlight);
    trarr[j].mouseout(unhighlight);
  }
}

//this is the CSV--we only have two classes. We'll eventually
//reference a document or the live classes
var hash= {
  "20006": {
    "SUBJECT": "ART",
    "COURSE_NUMBER": 301,
    "SEQ_NUMBER": 0,
    "COURSE_TITLE": "Advanced Drawing",
    "MEET_DAYS": "T  R",
    "CLASS_TIME": "0940 - 1055am",
    "BLDG_CODE": "VAC",
    "ROOM_CODE": 203,
    "INSTRUCTOR1": "Savage C",
    "COURSE_ATTRIBUTES": "ARTF VPRQ"
  },
  "24555":{
    "COURSE_NUMBER": 101,
    "SEQ_NUMBER": "H",
    "COURSE_TITLE": "Divided Light",
    "MEET_DAYS": "M W F",
    "CLASS_TIME": "0930 - 1020am",
    "BLDG_CODE": "CHAM",
    "ROOM_CODE": 1015,
    "INSTRUCTOR1": "Vasquez M",
    "COURSE_ATTRIBUTES": "COMP"
  }
};

//takes the inputted CRN and puts the given class on the calendar
//is called when you press the HTML button
//needs to be altered
function getCRN(){
  crn = document.getElementById("crn").value;

  document.getElementById("T0940").style.backgroundColor = "pink";
  document.getElementById("R0940").style.backgroundColor = "pink";
  document.getElementById("M0930").style.backgroundColor = "pink";
  document.getElementById("W0930").style.backgroundColor = "pink";
  document.getElementById("F0930").style.backgroundColor = "pink";

  if (hash[crn].CLASS_TIME == "0940 - 1055am"){
  info = hash[crn].COURSE_TITLE +"<br>" + hash[crn].INSTRUCTOR1 + "<br>" +     hash[crn].CLASS_TIME + "<br>" + hash[crn].BLDG_CODE + " " + hash[crn].ROOM_CODE ;

//   document.getElementById("T0940").innerHTML = info;
//   document.getElementById("R0940").innerHTML = info;
     var text = document.getElementById("T0940").text(70+1*110, 30, info); 
}
  else if (hash[crn].CLASS_TIME=="0930 - 1020am"){

  info = hash[crn].COURSE_TITLE +"<br>" + hash[crn].INSTRUCTOR1 + "<br>" +   hash[crn].CLASS_TIME + "<br>" + hash[crn].BLDG_CODE + " " + hash[crn].ROOM_CODE ;

  document.getElementById("M0930").innerHTML = info;
  document.getElementById("W0930").innerHTML = info;
  document.getElementById("F0930").innerHTML = info;

  }
}

//remove function that we need to alter and add later


//var allElements = document.getElementsByTagName("#");

// function confirmRemove(section){

//      if(section.getElementsByTagName('p')[0].innerHTML !== ""){

//          var r= confirm("This will delete your class. Continue?");

//          if (r===true){

//              day = id.substr(0,3);

//              time = id.substr(3,6);

//              if (day == "tue" ||day == "thu"){ 

//                  document.getElementById("tue"+time).getElementsByTagName('p')[0].innerHTML = ""; 

//                  document.getElementById("tue" + time).style.background = "#4D0000";         

//                  document.getElementById("thu"+time).getElementsByTagName('p')[0].innerHTML = "";

//                  document.getElementById("thu" + time).style.background = "#4D0000"; 

//              }

//              else {

//                  document.getElementById("mon"+time).getElementsByTagName('p')[0].innerHTML = "";

//                  document.getElementById("wed"+time).getElementsByTagName('p')[0].innerHTML = "";

//                  document.getElementById("fri"+time).getElementsByTagName('p')[0].innerHTML = "";

//                  document.getElementById("mon" + time).style.background = "#4D0000";         

//                  document.getElementById("wed" + time).style.background = "#4D0000";         

//                  document.getElementById("fri" + time).style.background = "#4D0000";         

//              }
