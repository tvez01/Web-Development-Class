var main = function() {
    var state;
    var volume;

    //The play button
    $('#play').click(function(){
        $('#message').text("Playing track");
        $('#player').trigger("play");
    });
    
    // The pause button
    $('#pause').click(function() {
        $('#message').text("Track paused");
        $('#player').trigger("pause");
    });

    // The mute button
    $('#mute').click(function() {
        $('#player').prop('muted', true);
        $('#message').text("Muted");
    });

    // The unmute button
    $('#unmute').click(function() {
        $('#player').prop('muted', false);
        $('#message').text("Unmuted");
    });

    // The stop button
    $('#stop').click(function() {
        $('#player').trigger("pause"); // Pause the music
        $('#player').prop('currentTime', 0); // Reset the currentTime to 0
        $('#message').text("Track stopped");
    });

    // Volume Up button
    $('#volU').click(function() {
        var volume = $('#player').prop('volume');
        if (volume <= 0.9) {  // Ensure volume doesn't go above 1
            $('#player').prop('volume', volume + 0.1);
        }
        $('#message').text("Volume Up: " + Math.round($('#player').prop('volume') * 100) + "%");
    });

    // Volume Down button
    $('#volD').click(function() {
        var volume = $('#player').prop('volume');
        if (volume >= 0.1) {  // Ensure volume doesn't drop below 0
            $('#player').prop('volume', volume - 0.1);
        }
        $('#message').text("Volume Down: " + Math.round($('#player').prop('volume') * 100) + "%");
    });

}

$(document).ready(main);