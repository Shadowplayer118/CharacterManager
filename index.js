$(document).ready(function(){
    loadTable();
 

});


//load table
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

document.getElementById('refresh').onclick = function(){

 window.location.reload();
}



// Close modal
document.getElementsByClassName('close')[0].onclick = function(){
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}


//refresh page
window.onclick = function(event){
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


//Add Character
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


//delete character
$('#character-table').on('click','.delete-btn',function(){

    if (!confirm('Are you sure you want to delete this character?')){
        return;
    }

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


//close edit

$('#close-edit').click(function() {
    $('#edit-modal').hide();
});


//fetch edit
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


//edit function
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


//Filter Function
$("#filtername").on('input', function() {
    var nameInput = $(this).val().trim(); // Get the trimmed input value

    // Console logs for debugging
    console.log("Name input:", nameInput);

    // If nameInput is empty, reload the page
    if (nameInput === "") {
        console.log("Table empty, reloading page");
        window.location.reload(); // Reload the page if nameInput is empty
        return;
    }

    // Perform AJAX request with the filter data
    $.ajax({
        url: 'filterCharacter.php',
        method: 'POST',
        data: { name: nameInput }, // Send data as key-value pairs
        dataType: 'json',
        success: function(data) {

            var tableBody = $('#character-table tbody');
            var actions =$('.actions');
            tableBody.empty();
            if (Array.isArray(data)) {
                $.each(data, function(index, row) {
                    // Create a new row for each item
                    var newRow = $('<tr></tr>');
                    newRow.append('<td>' + row.id + '</td>');
                    newRow.append('<td>' + row.name + '</td>');
                    newRow.append('<td>' + row.title + '</td>');
                    newRow.append('<td>' + row.alignment + '</td>');
                    newRow.append('<td><button class="delete-btn" data-id="' + row.id + '">Delete</button><button class="edit-btn" data-id="' + row.id + '">Edit</button></td>');
                    tableBody.append(newRow);
                });
            } else {
                console.error('Unexpected data format:', data);
            }
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error loading data: ' + textStatus, errorThrown);
        }
    });
});

