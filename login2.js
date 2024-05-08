function handleFileInputChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const imgSrc = e.target.result;
        document.getElementById('avatarImg').src = imgSrc; 
    };

    reader.readAsDataURL(file);
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('avatarContainer').addEventListener('click', function() {
        document.getElementById('fileInput').click();
    });
});

updateGuestInfo();