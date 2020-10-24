$(document).ready(function () {
    var titleDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    var savedEvents = JSON.parse(localStorage.getItem("events"));
    var planText0, planText1, planText2, planText3, planText4, planText5, planText6, planText7, planText8 = '';
    for (var i = 0; i < savedEvents.length; i++) {
        $("#" + i + "plan").val(savedEvents[i]);
    }
    
    $('#title').append(titleDate);
    // shading logic...
    if (moment().hour() === 9) {
        $('.plan0').css("background-color","red")
    }
    if (moment().hour() > 9) {
        $('.plan0').css("background-color","gray", "overflow", "hidden")
    }