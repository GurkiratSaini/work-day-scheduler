$("#currentDay").text(moment().format("dddd, MMM Do"));

function generateTimeBlocks() {
    for (let i = 0; i < 9; i++) {
        var rowTimeEl = moment().hour(i+9);
        var rowEl = $("<div>").addClass("row time-block");
        var timeBlockEl = $("<div>").addClass("col-1 hour").text(rowTimeEl.format("hA"));

        var textareaEl = $("<textarea>").addClass("col-10 description").attr("id", `hour-${i}`);

        var saveBtnEl = $("<div>").addClass("col-1 d-flex justify-content-center align-items-center saveBtn").html("<i class='fas fa-save'></i>");
        $(rowEl).append(timeBlockEl, textareaEl, saveBtnEl);
        $(".container").append(rowEl);

        var currentTime = moment();

        if(currentTime.isAfter(rowTimeEl, "hour")){
            textareaEl.addClass("past");
        }
        else if (currentTime.isBefore(rowTimeEl, "hour")){
            textareaEl.addClass("future");
        }
        else {
            textareaEl.addClass("present");
        }

        var storageData = localStorage.getItem(`hour-${i}`);
        if(storageData){
            $(`#hour-${i}`).val(storageData);
        }
    }
}



function saveTextareaContent(event){
    localStorage.setItem($(this).prev().attr("id"), $(this).prev().val());
}


generateTimeBlocks();

$(".saveBtn").on("click", saveTextareaContent);
