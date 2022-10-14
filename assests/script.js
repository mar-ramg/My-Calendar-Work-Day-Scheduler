
// Curent Day when you open the application at the top //
var curentDate = moment().format('dddd, MMMM Do YYYY')
$("#currentDay").text(curentDate);

// Save Button //
$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id");

    localStorage.setItem(time,text);
})

// # of hours //
function timeTracker() {
    var timeNow = moment().hour();
    // loop over time blocks //    
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    // To check time and add the classes for background to change color
    if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
    } else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    }

    })
}

// get item from local storage //
$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));

timeTracker();
