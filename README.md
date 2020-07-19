# project-1-portfolio

## Navigation Bar

The navigation bar was created using flexbox. The container, nav, was flex display. Its child items, the div containing the homepage icon and the second div containing the right 3 tabs, were horizontally spaced using space-between for justify-content and vertically spaced using center.The second div was also display flexed so that the 3 tab, which are each divs, could be horizontal instead of vertically stacked. The 3 tabs were horizontally spaced with space-around. Since the nav two direct child items div are pushed to each end, left margin and right margins were given to the first and second div, respectively. The left div has a 5% margin-left and right div has 50px right margin. Below 1200px, the left div has a 4% margin-left and right div has a 20px.
However, space-around justify-content between the nav child divs may have prevented the extra steps of adding and adjusting the margin-left and margin-right for the 2 divs as the window width changes.
The right div containing the 3 tabs was given a width of 30% then 40% in responsive mode.

The homepage icon div was given a set width of 105px instead of relative width because the homepage icon can be too big in desktop size while it can be too small in mobile. The 3 tabs div was given a relative width, 30% so that the text will shrink with the div. If the div size remained the same, then in mobile display the tabs would be stretched out.

The 3 tabs div also contains a div containing an a tag. When the body width is less than 600px two things happen:
1. The 3 tabs div will get display none.
2. The a tag will have the content "\2630", displaying a hamburger menu icon with href attribute as # since the a tag doesn't link anywhere. 
In jQuery when the hamburger icon is displayed, it will have a click event handler that does 2 things:
1. Prompt a separate div with the 3 tabs that is currently not shown through display none in its right-burger class to get a show class through toggling. 
In the beginning, there is no show class in the right-burger div. After the click, the class show is added to it. This will display the separate div under since it is a block display div. 
2. Change the hamburger menu icon to an X by also toggling a class to the a tag, called xcross, so that it will have a different content, "\2715".
We do not want to add class when clicking on the hamburger icon because then the display block div will always be shown. Instead, we toggle classes so that if we click on the hamburger icon, the xcross class and show class is removed so that the X is gone and the div with the 3 tabs will return to having a display none property. 
Now, if a user forgets to click back the X, then toggling is not that useful because we cannot remove the added classes. Therfore, another function is needed for removing the show and xcross classes if the body width of the browser is more than 599 pixels.
At less than 599px, div containing the a tag and not the 3 tabs will have a 0px right margin and the div containing the homepage icon will have larger left margin, 10% to match with the right space of the hamburger icon/cross that is created from a floating right property.

## Homepage Header

Originally, the header was set as a grid. However, a grid caused unmatching right and left spaces as the browser is minimized, with the right column having text and left column with an image. By having the header be a flexbox, the right and left spaces were still equivalent as window width is altered. The div text and image is horizontally spaced using space-around justify-content and vertically centered using center align-items.
The div text and image also has a transition of translate that starts out 300px below where it is currently positioned and opacity of 0. When the window loads, the div text and image gets a class added containing opacity 1 and transition of translate back to its original position. We want to add a class, because we want the position and opacity to remain.
Margins for the headings and paragraphs inside the text are set to 0 since we already have left space from justify-content of the parent container. 

Right and left paddings were given to the flexbox because the image and text div were positioned close to the edge. 

Font-sizes are important for responsiveness. My name, Kristy Lee, is set to 75px and the rest of the paragraph font-size is 2em. The paragraph font-size is shrunk a little to 1.5em to look better but still big enough below 940px. My name font-size is also shrunk a little below 800px, from 75px

## Homepage Featured Projects
A grid is formed for the parent container with class hp-grid2. It contains 4 child div items with column width dimensions of 1.75fr for left column, 1fr for right column, and same row width dimensions of 1fr. A larger width is given for the left column so that the video placed in the left columns will occupy more space. The grid itself is also given a width of 100vw.

The div containing the video for each of the left rows is display flexed so that the the video can easily be centered horizontally AND vertically. A margin-top for the bottom video is given to give more space between the videos, and a margin-bottom for the bottom video is given to give space between the video and footer.

Font-size for the paragraphs was originally set to 30px but then set to a relative unit, 1.5em from 800px to 1200px and below 600px. It was also set to 1.25em between 600px to 799px. 

## Footer
The div that contains the icon images is display flexed to make the icon images next to each other and to horizontally and vertically centered. Top margin of 80px is given so that there is space between the content and footer. Bottom margin is given so that there is space between the div and the copyright div.

The code for the icons were from w3Schools. Font-size and width were altered for the 2 icons. A right margin was added to the Linkedin icon to give space between the 2 icons. The height and padding was removed from the Linkedin icon because it complicated the look of the icon during responsive mode. 

## Generate the videos, title, descriptions, GitHub icon, and button from Google Sheets API: 
The project video link, github link, website link, title, and description were pulled using google sheets API. The fetch method is used to pull the JSON data out from google sheets, followed by two then methods:
1. Convert the JSON data into JavaScript objects after retrieving the JSON data
2. Pull only the specific information we need and storing it as objects. The objects are stored in an array. The array will then be used as an argument in the function. The function will use the objects in the array to do DOM. The function is inside the then method so that the data will be ready to used in the function. 

To create the DOM, the function called create will loop through the objects inside the array and do the following:
1. Make a div, called $divVideo that contains the video. The video will have a source appended to it. The source itself has a source attribute that uses the google sheets API information.
2. Make another div, called $div2 that contains the text with title and description, both of which are from google sheets API. 
3. Make an a tag with link that will contain the GitHub link from google sheets API. The a tag contains an i tag which has a class that will make the GitHub icon. Therefore, the GitHub icon will be linked. 
4. Make a button> that will also contain an a tag. Make sure to put the text in the a tag and not the button for the text to actually be linked. 
Both the button and a tags will be in a div with icons class.
5. The $divVideo, $div2, div containing the button and a tags will all be appended to another div with a class called container. The container class div is appended to the div with a class flex on HTML.

## Project page CSS display
The div with class flex has a display flex and flex-wrapped since more projects will be added in the near future. A grid display would have made the layout to fixed for additional projects to be added. Each container class div inside the flex div is horizontally centered using center justify-content. The contents inside container class div are centered and displayed in a column by making the div a flexbox. The width is 50% so that 2 divs will fit (this will change under 600px).

The direct parent of video is a div and will have its height be adjusted each time so that the video size will also be adjusted. The container containing the title and description will have padding-top differ each responsivenes. In desktop view, the title is covered by the video so a padding-top of 100px is added. As the window is minimized, the video is minimized so it doesn't cover the title as much so the padding-top is also decreased between the video and the text.

Below 550px, each of the icons div containing the button and GitHub icon position do not spaced the same way, so a margin-top is added to certain ivon divs to match with the other divs. 

Below 749px, background color, border, and box-shadow is added to the second and forth container class divs, and the layout for the flex class div is changed to a column. 

## Opacity change upon scrolling
To change opacity from 0 to 1 when scrolling to a certain threshold, IntersectionObserver API is used. The IntersectionObserver is stored in opacityChange function, which is also called in the second then method after the create function, which makes the DOM elements. The opacityChange function needs to be in the then method because the elements that are created will now be as arguments for the observe method. The observe method is attached to the opacity
change function. The opacityChange function needs to run 5 times to create and return an intersection observer for each container class div. In each intersection observer, a callback function is run. The callback function receives a list of IntersectionObserverEntry objects, and consists of looping through the entries, or elements. If the elements is intersecting at a specific threshold, then the container class div will have a new id added with the opacity as 1 for the id CSS.

## About me div overlapping with a background div
Create a height large enough for the background div in order for the div containing the about me content to be contained inside the background div. No z-index is neccessary because the content div follows the background div on HTML.

## About me div and skills div slide up upon scolling
To have the about me and skills div slide up, both divs will start out below its original position (400px below for about me div and 300px below for skills div and have an opacity 0. Since scolling is needed to translate the position and change the opacity to 1, the IntersectionObserver API is used to add a new id for each the about me and skills divs. The new ids will have the new CSS properties. 
The threshold will increse for the IntersectionObserver below 600px to ensure scrolling is needed in window sizes smaller than desktop size for the about me div. 

## Separate the CSS of Linkedin and Github icons from the about me section and footer
Give an id to the footer icons so that the CSS will override the styles from the class the footer cions share with the about me section

## Google contact form overlaps with header
Give a set height of header, 300px, and a set height of 600px for the div containing the google contact form iframe. Give an absolute position to the iframe and assign 600px to the top so that it will slightly below the header. To horizontally center the iframe, translate -50%. To vertically center the iframe, translate -50% again. 