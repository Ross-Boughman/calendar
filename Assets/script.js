// setting and applying date to top of page
var todayDate = dayjs().format("dddd, MMM D YYYY");
$("#currentDay").html(todayDate);

// storing data to local storage with button click
$(document).ready(function () {
  // function only runs when page is ready
  $(".saveBtn").on("click", function () {
    var eventText = $(this).siblings(".description").val();
    var timeSlot = $(this).parent().attr("id");
    localStorage.setItem(timeSlot, eventText);
  });
  // making current hour visible in page
  function saveDate() {
    var hour = dayjs().hour();
    // get real time
    $(".time-block").each(function () {
      var sectionHour = ($(this).attr("id").split("-")[1]);
      // compare real time to hour id of each container,
      // then change class of container to reflect "past" "present" or "future"
      if (sectionHour < hour) {
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (sectionHour > hour) {
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  // read local storage and apply stored text to textboxes for each element
  for (let index = 1; index < 25; index++) {
    $(`#hour-${index} .description`).val(localStorage.getItem(`hour-${index}`))
  }
  
  saveDate();
});