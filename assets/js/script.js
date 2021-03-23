var currentDay = document.querySelector("#currentDay");
var container = document.querySelector(".container");
var momentEl = moment();
var containerEl = document.querySelector(".container");
// console.log(momentEl);

currentDay.textContent = momentEl.format("dddd, MMM Do");

function generateTimeBlocks() {
    for (let i = 0; i < 9; i++) {
        var rowEl = $("<div>").addClass("row time-block")
        var timeBlockEl = $("<div>").addClass("col-1 hour");
        var textareaEl = $("<textarea>").addClass("col-10 description");
        var saveBtnEl = $("<div>").addClass("col-1 d-flex justify-content-center align-items-center saveBtn").html("<i class='fas fa-save'></i>");
        $(rowEl).append(timeBlockEl, textareaEl, saveBtnEl);
        $(".container").append(rowEl);
    }
}

generateTimeBlocks();