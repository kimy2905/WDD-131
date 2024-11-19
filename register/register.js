document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const addParticipantButton = document.getElementById('add');
  const summarySection = document.getElementById('summary');
  const participantsContainer = form.querySelector('.participants'); 
  
  summarySection.style.display = 'none';

  form.addEventListener('submit', function (e) {
      e.preventDefault(); 

      let totalFee = 0;
      let adultName = document.getElementById('adult_name').value; 

      const feeInputs = document.querySelectorAll('input[name^="fee"]');
      feeInputs.forEach(input => {
          totalFee += parseFloat(input.value) || 0;
      });

      form.style.display = 'none';

      summarySection.innerHTML = `
          <h2>Summary</h2>
          <p><strong>Adult Name:</strong> ${adultName}</p>
          <p><strong>Total Fee:</strong> $${totalFee.toFixed(2)}</p>
          <h3>Participants:</h3>
          <ul>
              ${getParticipantsSummary()}
          </ul>
      `;
      summarySection.style.display = 'block'; 
  });

  function getParticipantsSummary() {
      let participantSummary = '';
      const participants = document.querySelectorAll('.participant'); 
      participants.forEach((participant, index) => {
          const fname = participant.querySelector('input[name^="fname"]').value;
          const activity = participant.querySelector('input[name^="activity"]').value;
          const fee = participant.querySelector('input[name^="fee"]').value;
          const grade = participant.querySelector('select').value;

          participantSummary += `
              <li>
                  <strong>Participant ${index + 1}:</strong>
                  <p>Name: ${fname}</p>
                  <p>Activity: ${activity}</p>
                  <p>Fee: $${fee}</p>
                  <p>Grade: ${grade}</p>
              </li>
          `;
      });
      return participantSummary;
  }

  addParticipantButton.addEventListener('click', function () {
      const newParticipant = document.querySelector('.participant').cloneNode(true);
      const participantCount = document.querySelectorAll('.participant').length + 1;
      newParticipant.querySelector('p').textContent = `Participant ${participantCount}`;
      participantsContainer.insertBefore(newParticipant, addParticipantButton);
  });
});
