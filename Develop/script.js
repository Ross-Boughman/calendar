$(document).ready(function() {
  $(".saveBtn").on("click", function () { // actually works now
    var eventText = $(this).siblings(".description").val();
    var date = $(this).parent().attr("id");
    localStorage.setItem(date, eventText);
  });
});

// does not work
/* if (document.readyState == 'complete') {
    saveDate();
} else {
    document.onreadystatechange = function () {
        if (document.readyState === "complete") {
            saveDate();
        }
    }
} */
$("#currentDay").html(todayDate);
