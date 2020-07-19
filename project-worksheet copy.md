# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 2| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.)/MVP & Bug Fixes | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Incomplete


## Project Description

I am building a portfolio that will have a brief description about me, showcase the projects I have built so far, and have a contact page for people to reach me. The portfolio will be built using HTML, CSS, and JavaScript jQuery. 

## Google Sheet

Include link to your google sheet here.  Here is the sample [Suresh had used in class](https://docs.google.com/spreadsheets/d/1V1M3Eq1NXH2PNmeTlVviRhEjX9kenq769Vo2P5mMtro/edit#gid=0) 

## Wireframes

- [Mobile](https://github.com/krislee/project-1-portfolio/wiki/Mobile-Portfolio)
- [Tablet](https://github.com/krislee/project-1-portfolio/wiki/Tablet-Desktop-Portfolio-Pages)
- [Desktop](https://github.com/krislee/project-1-portfolio/wiki/Tablet-Desktop-Portfolio-Pages)


## Time/Priority Matrix 

[My Time/Priority Matrix](https://res.cloudinary.com/dhiwn0i0g/image/upload/v1594594822/IMG_0095_lwlso3.jpg)


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
2.	Make a button icon that will redirect to blog


#### PostMVP 

1.	Make a carousel showing screenshot previews of projects for the Home Page
2.	Make GitHub clickable icons in project page
3. Apply animation effections, maybe use Bootstrap or just CSS


## Functional Components

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
| Documentation | H | 6hr | -hr | -hr|
| Deployment | H | 2hr | -hr | -hr|
| Total | H | 37hrs| -hrs | -hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Home Page Project Preview Carousel | H | 5hr | -hr | -hr|
| Clickable Github icons on Project Page | L | 2hr | 3hr | 3hr|
| Interactive Banner | M | 3hr | 6hr |6hr|
| Bootstrap | H | 6hr | -hr | -hr|
| Total | H | 16hrs| -hrs | -hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet
The IntersectionObserver allows for 


## Issues and Resolutions
**Error** $ not defined after deployment on GitHub pages
**Resolution** Added an 's' to http for the script tag of jQuery

**Error** Opacity changed for the whole project page upon scrolling
**Resolution** Create IntersectionObserver for each container class <div> 

**Error** Link for GitHub icon on project page was not working
**Resolution** Text need to be appended to <a> tag and not <button>

**Error** Navigation drop-down re-appeared after maximizing the window and minimizing the window if user did not click. 
**Resolution** Add a function to remove the class after maximizing the window


#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object

## Previous Project Worksheet
 - [Readme's](https://github.com/jkeohan/fewd-class-repo/tree/master/final-project-worksheet/project-worksheet-examples)
 - [Best of class readme](https://github.com/jkeohan/fewd-class-repo/blob/master/final-project-worksheet/project-worksheet-examples/portfolio-gracie.md)
