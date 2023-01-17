var todayDate = moment().format("dddd, MMM D YYYY");
$("#currentDay").html(todayDate);

$(document).ready(function () {
  // actually works now
  $(".saveBtn").on("click", function () {
    var eventText = $(this).siblings(".description").val();
    var date = $(this).parent().attr("id");
    localStorage.setItem(date, eventText);
  });
  function saveDate() {
    var newDate = dayjs().hour(12);
    $(".time-block").each(function () {
      var currentTime = parseInt($(newDate).attr("id").split("hour")[1]);
      if (currentTime < todayDate) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (currentTime === todayDate) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }
  saveDate();
});