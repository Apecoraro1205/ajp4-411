 "use strict";
        $(document).ready(function() {
            var extraData = 0; // this will hold the times clicked

            $('#output').bind("click", extraData, function(e) {
                $('#receiver').text("I was clicked = " + ++extraData + " times")
            });
            $('#clear').click(function() {
                $('#receiver').empty(); //clears all the output 
                extraData = 0; //brings counter back to zero
            });

        });


        $(document).ready(function() {
            console.log("Here");

            $(document).click(function(e) {
                //$('#output').append("clentX="+e.clientX);
                $('#message1').prepend("<br>" + "Click location: " + e.clientX + "," + e.clientY);
                console.log("clientX=" + e.clientX);
                console.log("clientY=" + e.clientY);
                console.log("e parameters=" + e.toString());
            });


            $('button').click(function(evt) {
                evt.stopPropagation(); // stop the event from propagating up the visual tree


            });

            $('#clear').click(function() {
                $('#message1').empty(); //clears all the output
                extraData = 0;
            });

        });