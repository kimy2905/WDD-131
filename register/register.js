let participantCount = 1;

function participantTemplate(count) {
    return `
    <section class="participant${count}">
        <p>Participant ${count}</p>
        <div class="item">
            <label for="fname${count}">First Name<span>*</span></label>
            <input id="fname${count}" type="text" name="fname" required>
        </div>
        <div class="item">
            <label for="activity${count}">Activity #<span>*</span></label>
            <input id="activity${count}" type="text" name="activity">
        </div>
        <div class="item">
            <label for="fee${count}">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name="fee" required>
        </div>
        <div class="item">
            <label for="date${count}">Desired Date <span>*</span></label>
            <input id="date${count}" type="date" name="date" required>
        </div>
        <div class="item">
            <p>Grade</p>
            <select name="grade${count}">
                <option selected disabled></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
            </select>
        </div>
    </section>`;
}

function totalFees() {
    let feeElements = document.querySelectorAll("[id^='fee']");
    feeElements = [...feeElements]; 
    const total = feeElements.reduce((sum, feeInput) => sum + (parseFloat(feeInput.value) || 0), 0);
    return total;
}

function successTemplate(info) {
    return `Thank you, ${info.adultName}, for registering. You have registered ${info.participantCount} participant(s) and owe $${info.totalFees.toFixed(2)} in fees.`;
}

function submitForm(event) {
    event.preventDefault(); 

    const totalFeesAmount = totalFees();

    const adultName = document.querySelector("#adultName").value;

    const summary = document.getElementById("summary");
    summary.innerHTML = successTemplate({
        adultName: adultName,
        participantCount: participantCount,
        totalFees: totalFeesAmount
    });
    summary.style.display = "block"; 

    document.querySelector("form").style.display = "none";
}

document.querySelector("form").addEventListener("submit", submitForm);

document.getElementById("addParticipantBtn").addEventListener("click", () => {
    participantCount++; 
    const newParticipantHTML = participantTemplate(participantCount); 
 
    const addButton = document.getElementById("addParticipantBtn");
    addButton.insertAdjacentHTML("beforebegin", newParticipantHTML);
});
