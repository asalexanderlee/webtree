var context = Raphael('unc', 600,600);
​
function myFunc() {
    this.attr('fill', 'red');  
  window.alert(this.innerHTML);
}
​
function myFuncOut() {
    this.attr('fill', 'pink');   
}
​
var days_of_week = ["M", "T", "W", "R", "F"];
var times_of_dayMWF = ["0830","0930","1030","1130","1230","0130","0230","0330"];
var times_of_dayTR = ["0815","0940","1215","0140","0305"];
​
// Days of the Week
for (var i=0; i<5; i++){
  var day = context.rect(20+i*110, 0, 100, 30);
  var text = context.text(70+i*110, 15, days_of_week[i]); 
}
​
var mwfarr = [];
//Monday Wednesday Friday
for (var i=0; i<3; i++){
  for (var j=0; j<9; j++){  
    mwfarr[j] = context.rect(20+i*220,40+j*110,100,100);
    mwfarr[j].attr('fill', 'pink');
    if (i === 0){
      mwfarr[j].id = days_of_week[i] + times_of_dayMWF[j];
    }
    else if (i === 1){
      mwfarr[j].id = days_of_week[2] + times_of_dayMWF[j];
    }
    else if (i === 2){
      mwfarr[j].id = days_of_week[4] + times_of_dayMWF[j];
    }
    mwfarr[j].mouseover(myFunc);
    mwfarr[j].mouseout(myFuncOut);
  }
}
​
var trarr=[];
//Tuesday Thursday
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
    trarr[j].mouseover(myFunc);
    trarr[j].mouseout(myFuncOut);
  }
}
​
var hash= {
​
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
​
function getCRN(){
​
  crn = document.getElementById("crn").value;
​
  document.getElementById("T0940").style.backgroundColor = "pink";
  document.getElementById("R0940").style.backgroundColor = "pink";
  document.getElementById("M0930").style.backgroundColor = "pink";
  document.getElementById("W0930").style.backgroundColor = "pink";
  document.getElementById("F0930").style.backgroundColor = "pink";
​
​
  if (hash[crn].CLASS_TIME == "0940 - 1055am"){
  info = hash[crn].COURSE_TITLE +"<br>" + hash[crn].INSTRUCTOR1 + "<br>" +     hash[crn].CLASS_TIME + "<br>" + hash[crn].BLDG_CODE + " " + hash[crn].ROOM_CODE ;
​
//   document.getElementById("T0940").innerHTML = info;
//   document.getElementById("R0940").innerHTML = info;
     var text = document.getElementById("T0940").text(70+1*110, 30, info); 
}
​
​
  else if (hash[crn].CLASS_TIME=="0930 - 1020am"){
​
  info = hash[crn].COURSE_TITLE +"<br>" + hash[crn].INSTRUCTOR1 + "<br>" +   hash[crn].CLASS_TIME + "<br>" + hash[crn].BLDG_CODE + " " + hash[crn].ROOM_CODE ;
​
  document.getElementById("M0930").innerHTML = info;
  document.getElementById("W0930").innerHTML = info;
  document.getElementById("F0930").innerHTML = info;
​
  }
}
​
//var allElements = document.getElementsByTagName("#");
​
// function confirmRemove(section){
​
//      if(section.getElementsByTagName('p')[0].innerHTML !== ""){
​
//          var r= confirm("This will delete your class. Continue?");
​
//          if (r===true){
​
//              day = id.substr(0,3);
​
//              time = id.substr(3,6);
​
//              if (day == "tue" ||day == "thu"){ 
​
//                  document.getElementById("tue"+time).getElementsByTagName('p')[0].innerHTML = ""; 
​
//                  document.getElementById("tue" + time).style.background = "#4D0000";         
​
//                  document.getElementById("thu"+time).getElementsByTagName('p')[0].innerHTML = "";
​
//                  document.getElementById("thu" + time).style.background = "#4D0000"; 
​
//              }
​
//              else {
​
//                  document.getElementById("mon"+time).getElementsByTagName('p')[0].innerHTML = "";
​
//                  document.getElementById("wed"+time).getElementsByTagName('p')[0].innerHTML = "";
​
//                  document.getElementById("fri"+time).getElementsByTagName('p')[0].innerHTML = "";
​
//                  document.getElementById("mon" + time).style.background = "#4D0000";         
​
//                  document.getElementById("wed" + time).style.background = "#4D0000";         
​
//                  document.getElementById("fri" + time).style.background = "#4D0000";         
​
//              }
