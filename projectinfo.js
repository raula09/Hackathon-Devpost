// Get references to all title spans
const projectInfoBtn = document.getElementById('projectInfoBtn');
const teamBtn = document.getElementById('teamBtn');
const projectLinksBtn = document.getElementById('projectLinksBtn');
const calendarBtn = document.getElementById('calendarBtn');
const presentationBtn = document.getElementById('presentationBtn');

// Get references to all section divs
const projectInfoSection = document.getElementById('projectInfoSection');
const teamSection = document.getElementById('teamSection');
const projectLinksSection = document.getElementById('projectLinksSection');
const calendarSection = document.getElementById('calendarSection');
const presentationSection = document.getElementById('presentationSection');

// Add click event listeners to each title span
projectInfoBtn.addEventListener('click', () => {
    showSection(projectInfoSection);
    updateTextStyle(projectInfoBtn);
});

teamBtn.addEventListener('click', () => {
    showSection(teamSection);
    updateTextStyle(teamBtn);
});

projectLinksBtn.addEventListener('click', () => {
    showSection(projectLinksSection);
    updateTextStyle(projectLinksBtn);
});

calendarBtn.addEventListener('click', () => {
    showSection(calendarSection);
    updateTextStyle(calendarBtn);
});

presentationBtn.addEventListener('click', () => {
    showSection(presentationSection);
    updateTextStyle(presentationBtn);
});

// Function to show a specific section and hide others
function showSection(sectionToShow) {
    // Hide all sections
    const allSections = document.querySelectorAll('.section');
    allSections.forEach(section => {
        section.classList.add('hidden');
    });

    // Show the specified section
    sectionToShow.classList.remove('hidden');
}

// Function to update the text style of the selected title span
function updateTextStyle(selectedBtn) {
    // Reset text style for all buttons
    const allBtns = document.querySelectorAll('.txt3, .txt1');
    allBtns.forEach(btn => {
        btn.style.fontWeight = 'normal';
        btn.style.color = '';
    });

    // Update text style for the selected button
    selectedBtn.style.fontWeight = '700';
    selectedBtn.style.color = 'white';
    selectedBtn.style.cursor = 'pointer';
}
