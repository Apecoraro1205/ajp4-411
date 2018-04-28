"use strict";
        var quote = [
            "Well, um, actually a pretty nice little Saturday, we’re going  to go to Home Depot. Yeah, buy some wallpaper, maybe get some  flooring,stuff like that. Maybe Bed, Bath, & Beyond, I don’t know, I don’t know if we’ll have enough time. - Frank, Old School.",
            'As the wise man once said, "so?" - Ron Burgundy',
            "I swear, I’m so pissed off at my mom. As soon as she’s of age,  I’m putting her in a home. - Brenna Huff, Step Brothers",
            'Personal philosophy? Clothing Optional. - Chazz, Blades of Glory',
            "Here's the deal I'm the best there is. Plain and simple. I wake up in the morning and I piss excellence - Ricky Bobby",
            "You better not close your eyes, because as soon as you do, I'm  gonna punch your square in the face! - Brenna, Step Brothers",
            "For just one night let's not be co-workers. Let's be co-people.  - Ron Burgundy",
            "I'm going to climb over that anger wall of your someday and it's going to be glorious - Allen, The Other Guys",
            'How many sarcastic pills you taking this morning? - Phil, Kicking & Screaming',
            'Absolutely ma-am, I would love to sign your baby. - Ricky  Bobby',
            'We elves try to stick to the four main food groups, candy, candy cain, candy corn, and syrup - Buddy Elf',
        ];

        function display_quotes() {
            var seconds = $("#seconds").val(); //allows for a-z,0-9 input
            var seconds = event.charCode || event.keyCode;
            var result = (seconds + 1) % quote.length; //moduelo division quote
            $("div#output").html("<h2>" + quote[result] + "</h2>");
        }


        $(document).ready(function() {
            $('#output').html('<h2>' + quote[0] + '</h2>'); //display first element of array
            $("#seconds").keypress(function(e) {
                display_quotes(); //keypress will display quote
            });
        });
