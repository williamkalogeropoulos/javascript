// script.js
// jQuery to manage the note-taking functionality
$(document).ready(function() {
    // Function to update the date and time every second
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        $('#datetime').text(now.toLocaleDateString('el-GR', options));
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();

    // Add a note to the list
    $('#add-note').on('click', function() {
        const noteText = $('#note-name').val().trim();
        if (noteText) {
            const noteElement = $(
                `<div class="note">
                    <input type="checkbox" class="note-checkbox">
                    <label>${noteText}</label>
                    <button class="delete-note">X</button>
                </div>`
            );
            $('#notes-container').append(noteElement);
            $('#note-name').val('').focus();

            // Attach delete functionality to the new note
            noteElement.find('.delete-note').on('click', function() {
                noteElement.remove();
            });
        }
    });
});
