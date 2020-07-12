# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description

I am building a portfolio that will have a brief description about me, showcase the projects I have built so far, and have a contact page for people to reach me. The portfolio will be built using HTML, CSS, and JavaScript jQuery. 

## Google Sheet

Include link to your google sheet here.  Here is the sample [Suresh had used in class](https://docs.google.com/spreadsheets/d/1V1M3Eq1NXH2PNmeTlVviRhEjX9kenq769Vo2P5mMtro/edit#gid=0) 

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

- [Mobile](https://github.com/krislee/project-1-portfolio/wiki)

- [Tablet](https://git.generalassemb.ly/SEIR-629/project-1-portfolio/blob/master/readme-assets/nav-highlight.gif)
- [Desktop](https://git.generalassemb.ly/SEIR-629/project-1-portfolio/blob/master/readme-assets/desktop.png)

Wireframing Resources:

- [Mockflow](https://mockflow.com/app/#Wireframe)
- [Figma](https://www.figma.com/)


## Time/Priority Matrix 

Include a full list of features that have been [prioritized](https://res.cloudinary.com/doaftkgbv/image/upload/v1583773146/ValueVSComplexity_u2inhx.png) based on the `Time and Priority` Matix.  This involves drawing a a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 2hrs.  This line will be used to estimate how much time any one feature will take to complete. 

Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to to each feature you wish to include in the project.  

Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter. 

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)

Make Home Page

1.	Have a clickable icon that will redirect to homepage on every html pages
2.	Make navigation menu 
* Make new HTML/CSS/JS files for About
* Make new HTML/CSS/JS files for Projects (refer to Make Projects Page)
* Make new HTML/CSS/JS files for Contact Me
* Make the About, Projects, Contact Me text link to their own HTML pages (will open in the same window)
3.	Make the hamburger icon for navigation menu
* Make it click and navigation menu drop down in mobile
4.	Create a 1x2 CSS Grid for a 2-sentence blurb about me on the left and a picture on the left
* Blurb will be in flexbox
5.	Create 2x2 CSS Grid to showcase 2 projects
o	Create 2 flexboxes for the descriptions of the projects
6.	Make a LinkedIn icon on the bottom right corner

Make Projects Page

1.	Pull projects from Google Sheet using API 
2.	Create a flexbox for the projects display
3.	Create child flex boxes to columnize the image preview and description of each project
4.	Make image preview clickable, redirecting to actual project page
5.	Make links to GitHub inside descriptions

Make Contact Me Page
1.	Make a header background 
2.	Incorporate Google Forms onto Contact Me page below the header background

Make About Me Page
1.	Make a header background with text “About Me” and 1 sentence of me
2.	Make a 1x2 CSS Grid with picture on the left and description on the right
3.	Make a button icon that will redirect to blog 


#### PostMVP 

1.	Make a carousel showing screenshot previews of projects for the Home Page
2.	Make GitHub clickable icons in project page


## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Home Page Icon | L | 1hr | -hr | -hr|
| Regular Nav | H | 2hr | -hr | -hr|
| Responsive Navigation | H | 3hr| -hr | -hr |
| Home Page Header| H | 1hr | hr | -hr|
| Responsive Home Page Header | H | 2hr| hr | -hr |
| Home Page Project Preview | H | 2hr | -hr | -hr|
| Responsive Home Page Project Preview | H | 2hr | -hr | -hr|
| Social Media Icon | L | 1hr | -hr | -hr|
| About Me Header Page | H | 2hr | -hr | -hr|
| About Me Page Actual Content | H | 2hr | -hr | -hr|
| Responsive About Me Page | H | 3hr | -hr | -hr|
| Contact Me Header Page | M | 1hr | -hr | -hr|
| Contact Me Page Actual Content | H | 3hr | -hr | -hr|
| Responsive Contact Me Page | H | 3hr | -hr | -hr|
| Project Header Page | L | 1hr | -hr | -hr|
| Google Sheet API | H | 3hr | -hr | -hr|
| Project Page Flexbox | H | 2hr | -hr | -hr|å
| Responsive Project Page | H | 3hr | -hr | -hr|
| Total | H | 37hrs| -hrs | -hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Home Page Project Preview Carousel | H | 5hr | -hr | -hr|
| Clickable Github icons on Project Page | L | 2hr | -hr | -hr|
| Interactive Banner | M | 3hr | -hr | -hr|
| Bootstrap | H | 4hr | -hr | -hr|
| Total | H | 14hrs| -hrs | -hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object

## Previous Project Worksheet
 - [Readme's](https://github.com/jkeohan/fewd-class-repo/tree/master/final-project-worksheet/project-worksheet-examples)
 - [Best of class readme](https://github.com/jkeohan/fewd-class-repo/blob/master/final-project-worksheet/project-worksheet-examples/portfolio-gracie.md)
