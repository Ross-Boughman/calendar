// setting and applying date to top of page
var todayDate = dayjs().format("dddd, MMM D YYYY");
$("#currentDay").html(todayDate);

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var eventText = $(this).siblings(".description").val();
    var date = $(this).parent().attr("id");
    localStorage.setItem(date, eventText);
  });
  function saveDate() {
    var hour = dayjs().hour();
    $(".time-block").each(function () {
      var sectionHour = ($(this).attr("id").split("hour")[1]);
      if (sectionHour < hour) {
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (sectionHour > hour) {
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  $("#1 .description").val(localStorage.getItem("hour1"));
  $("#2 .description").val(localStorage.getItem("hour2"));
  $("#3 .description").val(localStorage.getItem("hour3"));
  $("#4 .description").val(localStorage.getItem("hour4"));
  $("#5 .description").val(localStorage.getItem("hour5"));
  $("#6 .description").val(localStorage.getItem("hour6"));
  $("#7 .description").val(localStorage.getItem("hour7"));
  $("#8 .description").val(localStorage.getItem("hour8"));
  $("#9 .description").val(localStorage.getItem("hour9"));
  $("#10 .description").val(localStorage.getItem("hour10"));
  $("#11 .description").val(localStorage.getItem("hour11"));
  $("#12 .description").val(localStorage.getItem("hour12"));
  $("#13 .description").val(localStorage.getItem("hour13"));
  $("#14 .description").val(localStorage.getItem("hour14"));
  $("#15 .description").val(localStorage.getItem("hour15"));
  $("#16 .description").val(localStorage.getItem("hour16"));
  $("#17 .description").val(localStorage.getItem("hour17"));
  $("#18 .description").val(localStorage.getItem("hour18"));
  $("#19 .description").val(localStorage.getItem("hour19"));
  $("#20 .description").val(localStorage.getItem("hour20"));
  $("#21 .description").val(localStorage.getItem("hour21"));
  $("#22 .description").val(localStorage.getItem("hour22"));
  $("#23 .description").val(localStorage.getItem("hour23"));
  $("#24 .description").val(localStorage.getItem("hour24"));

  saveDate();
});