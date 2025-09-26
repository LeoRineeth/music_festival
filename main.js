$(document).ready(function() {

    // A simple data object to store artist bios
    const artistData = {
        'RAGHU DIXIT': {
            name: 'RAGHU DIXIT',
            bio: 'RAGHU DIXIT is a groundbreaking indie artist known for their unique blend of folk and electronic sounds. They have captivated audiences worldwide with their heartfelt lyrics and energetic live performances. Their latest album, "Starlight Symphony," has received critical acclaim.'
        },
        'CHAINSMOKERS': {
            name: 'Artist 2',
            bio: 'CHAINSMOKERS, a renowned rock band, has been a festival staple for over a decade. Their powerful guitar riffs and anthemic choruses always get the crowd on their feet. Their new single, "Cosmic Pulse," is an instant fan favorite.'
        }
        // Add more artists here
    };

    // Use jQuery to handle the click event on artist cards
    $('.artist-card').on('click', function() {
        // Get the artist key from the data attribute
        const artistKey = $(this).data('artist');
        const artist = artistData[artistKey];

        // If artist data exists, populate the modal
        if (artist) {
            $('#artistModalLabel').text(artist.name);
            $('#artist-bio-content').text(artist.bio);
            // Show the modal using Bootstrap's modal method
            const artistModal = new bootstrap.Modal(document.getElementById('artistModal'));
            artistModal.show();
        }
    });

});