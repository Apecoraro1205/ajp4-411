# ajp3-411
Scripting - Project 3
http://127.0.0.1:58993/home.html

IT 411/Scripting for Interactive Systems
Sftwear Statement of Work (SOW)
Project 4
See D2L for due date.
Instructions
When submitting thes projects, zip all the folders for this project into a .zip file name project_4.zip Complete each of the following projects. Use as models the programs presented in class and available the D2L content area. Tutor information can be found at this here: http://www.cdm.depaul.edu/Current%20Students/Pages/TutoringProgram.aspx

1. Highlighting on and off (1/3 of points)
Overview:
sftwear wants to offer their customers a poster with some text that can be created with either highlighting or without highlighting.

Requirements:
Create a page with paragraphs containing text of your choice.
Mark up some of the text with span tags having the class highlightable.
Provide a button labeled Highlight that, when clicked, changes the background color of elements of class highlightable to any color that contrasts with the background.
Also, the text on the button should change to Remove highlighting.
When the button is clicked again its text should go back to Highlight and the highlighted text should return to its original background color.
Helpful Hints:
There are two ways to program this.
One way is to use the jQuery .css() method to change the background-color attribute to a highlight color.
Another way is to create a new class for which the CSS specifies highlighting. For example, this class might be highlighted. When the highlighting button is clicked every element in the class highlightable has its highlighted class toggled. That way clicking the button once adds the class highlighted to every element in class highlightable; clicking it again removes the class highlighted. With the CSS set up right the user will see the text get highlighted and then unhighlighted.
Name the folder holding the page and any other resources p4_1.
See example(s): Lecture04 Pull Quotes directory with a filename of Project4Part1Example.html
2. Rotating messages (1/3 of points)
Overview:
sftwear wants to offer their customers a T-Shirt with a message based on list of messages.

Requirements:
Create a page that stores a collection of at least ten messages.
When the page first loads, the first message is displayed.
Pressing any alphanumeric key (a through z and 0 through 9) displays the next message. Using the keyPress event means you only get these keys!!!
After displaying the last message cycle back so that you start over with the first message
Helpful Hints:
Use the kePress event to capture the key and as a bonus it only gives you the alphanumeric keys
Name the folder holding the page and any other resources p4_2.
See example(s): Lecture03/jQuery%20convert seconds to days/indexv3.html
3. Click away! (1/3 of points)
Overview:
sftwear want to offer their customers a T-Shirt that list the mouse location where they have clicked on the page.

Requirements:
Create a page that displays the number of times a click occurs anywhere on the page along with a list of where each click happened.
Provide a button that clears the list.
Helpful Hints:
You will need to provide a parameter for the click event anonymous function so that you can retrieve the position of the click.
Name the folder holding the page and any other resources p4_3.
See example(s): Lecture04 05JQueryClickWithArgs.html (note the CSS style makes the whole page clickable), 06JQueryEventPropagtion.html
Martin Schray Last updated: 1/16/2016.
