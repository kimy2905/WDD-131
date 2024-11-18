
document.getElementById("add").addEventListener("click", function() {

    const participantCount = document.querySelectorAll('.participant').length + 1;
  

    const participantSection = document.createElement("section");
    participantSection.classList.add("participant");
    
    participantSection.innerHTML = `
      <p>Participant ${participantCount}</p>
      <div class="item">
        <label for="fname${participantCount}">First Name<span>*</span></label>
        <input type="text" name="fname${participantCount}" required>
      </div>
      <div class="item">
        <label for="activity${participantCount}">Activity #<span>*</span></label>
        <input type="text" name="activity${participantCount}" required>
      </div>
      <div class="item">
        <label for="fee${participantCount}">Fee ($)<span>*</span></label>
        <input type="number" name="fee${participantCount}" required>
      </div>
      <div class="item">
        <label for="date${participantCount}">Desired Date <span>*</span></label>
        <input type="date" name="date${participantCount}" required>
      </div>
      <div class="item">
        <label for="grade${participantCount}">Grade</label>
        <select name="grade${participantCount}">
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
    `;
    
    
    document.querySelector("fieldset.participants").appendChild(participantSection);
  });
  