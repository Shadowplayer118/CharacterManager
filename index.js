$(document).ready(function(){
    loadTable();
});

$('#addCharacterForm').submit(function(event){
    event.preventDefault();

    var formData = $(this).serialize();

    $.ajax({
        url: 'addCharacters.php',
        method: 'POST',
        data: formData,
        dataType: 'json',
        success: function(response){
            console.log('Character added successfully: ', response);

            // Close the modal after successful form submission
            $('#modal').hide();

            // Reload the table to show the new character
            loadTable();
            window.location.reload();


        },
        error: function(jqXHR, textStatus, errorThrown){
            console.error('Error adding characters: ', textStatus, errorThrown );
            alert('Failed to add character, please try again.');
           
        }
    });
});
function loadTable(){
    $.ajax({
        url: 'getCharacters.php',
        method: 'GET',
        dataType: 'json',
        success: function(data){
            var tableBody = $('#character-table tbody');
            var templateRow = $('#template-row').clone().removeAttr('id').removeAttr('style');
            tableBody.empty();

            $.each(data, function(index, row){
                var newRow = templateRow.clone();
                newRow.find('.id').text(row.id);
                newRow.find('.name').text(row.name);
                newRow.find('.title').text(row.title);
                newRow.find('.alignment').text(row.alignment);
                tableBody.append(newRow);
            });
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.error('Error loading data: ' + textStatus, errorThrown);
        }
    });
}

// Open modal
document.getElementById('openModalBtn').onclick = function(){
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
}

// Close modal
document.getElementsByClassName('close')[0].onclick = function(){
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

window.onclick = function(event){
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}



$('#character-table').on('click','.delete-btn',function(){

    var row = $(this).closest('tr');
    var id = row.find('.id').text();

    $.ajax({
        url:'deleteCharacters.php',
        method:'POST',
        data:{id:id},
        dataType:'json',
        success:function(response){
            console.log('Character deleted successfully:',response);
            row.remove();
            
        },

        error:function(jqXHR,textStatus,errorThrown){
            console.error('Error deleting character:', textStatus, errorThrown);
            alert('Failed to delete character. Please Try again.');

        }
    })
})

$('#close-edit').click(function() {
    $('#edit-modal').hide();
});


$(document).on('click', '.edit-btn', function() {
    var row = $(this).closest('tr');
    var id = row.find('.id').text();
    $.ajax({
        url: 'fetchCharacter.php',
        type: 'GET',
        data: { id: id },
        success: function(response) {
            var character = JSON.parse(response);
            $('#edit-id').val(character.id);
            $('#edit-name').val(character.name);
            $('#edit-title').val(character.title);
            $('#edit-alignment').val(character.alignment);
            $('#edit-modal').show();
        },
        error: function() {
            alert('Error fetching character details.');
        }
    });
});

$('#edit-form').submit(function(e) {
    e.preventDefault();

    var id = $('#edit-id').val();
    var name = $('#edit-name').val();
    var title = $('#edit-title').val();
    var alignment = $('#edit-alignment').val();

    $.ajax({
        url: 'editCharacter.php',  // This is the server-side PHP file
        type: 'POST',
        data: {
            id: id,
            name: name,
            title: title,
            alignment: alignment
        },
        success: function(response) {
            alert('Character updated successfully!');
            $('#edit-modal').hide();
            loadTable(); 
            
            window.location.reload(); // Reload the table to show updated details
        },
        error: function() {
            alert('Error updating character.');
        }
    });
});




// Handle edit form submission
// $('#edit-form').submit(function(e) {
//     e.preventDefault();
//     $.ajax({
//         url: 'editCharacter.php',
//         type: 'POST',
//         data: $(this).serialize(),
//         success: function(response) {
//             alert('Character updated successfully!');
//             $('#edit-modal').hide();
//             location.reload();
//             loadTable();
//         },
//         error: function() {
//             alert('Error updating character.');
//         }
//     });
// });







// $('#character-table').on('click','.edit-btn',function(){
//     var row = $(this).closest('tr');
//     var id = row.data('id');

//     $.ajax({
//         url:'fetchCharacter.php',
//         method:'GET',
//         data:{id:id},
//         dataType: 'json',
//         success: function(data){
//             $('#id').val(data.id);
//             $('#name').val(data.name);
//             $('#title').val(data.title);
//             $('#alignment').val(data.alignment);

//             $('#edit-modal').css('display','block');
//         },

//         error: function(jqXHR,textStatus,errorThrown){
//             console.error('Error fetching character:',textStatus, errorThrown);
//             alert('Failed to fetch character data. Please try again.')
//         }
        
//     });
// });

// $('#close-edit').click(function(){
//     $('edit-modal').css('display','none');
// });


// $('#edit-form').submit(function(event){
//     event.preventDefault();

//     var formData = $(this).serialize();

//     $.ajax({
//         url:'editCharacter.php',
//         method: 'POST',
//         data: formData,
//         dataType: 'json',
//         success: function(){
//             console.log('Character updated successfully', response);
//             $('edit-modal').css('display','none');

//         },

//         error: function(jqXHR,textStatus,errorThrown){
//             console.error('Error updating character:', textStatus, errorThrown);
//             alert('Failed to update character. Please try again.');
//         }
//     });
// });
