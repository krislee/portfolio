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
| Home Page Icon | L | 1hr | 1.5hr | 1.5hr|
| Regular Nav | H | 2hr | 2hr | 2hr|
| Responsive Navigation | H | 3hr| 5hr | 5hr |
| Home Page Header| H | 1hr | 2hr | 2hr|
| Responsive Home Page Header | H | 2hr| 4hr | 4hr |
| Home Page Project Preview | H | 2hr | 4hr | 4hr|
| Responsive Home Page Project Preview | H | 2hr | 4hr | 4hr|
| Social Media Icon | L | 1hr | 2hr | 2hr|
| About Me Header Page | H | 2hr | 4hr | 4hr|
| About Me Page Actual Content | H | 2hr | 2hr | 2hr|
| Responsive About Me Page | H | 3hr | 3hr | 3hr|
| Contact Me Header Page | M | 1hr | 0.5hr | 0.5hr|
| Contact Me Page Actual Content | H | 3hr | 2hr | 2hr|
| Responsive Contact Me Page | H | 3hr | 0.5hr | 0.5hr|
| Project Header Page | L | 1hr | 0hr | 0hr|
| Google Sheet API | H | 3hr | 2hr | 2hr|
| Project Page Flexbox | H | 2hr | 1hr | 1hr|
| Responsive Project Page | H | 3hr | 6hr | 6hr|
| Documentation | H | 6hr | 6hr | 6hr|
| Deployment | H | 2hr | 2hr | 2hr|
| Total | H | 37hrs| 53.5hrs | 53.5hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Home Page Project Preview Carousel | H | 5hr | -hr | -hr|
| Clickable Github icons on Project Page | L | 2hr | 1hr | 1hr|
| Interactive Banner | M | 3hr | 10hr |10hr|
| Bootstrap | H | 6hr | -hr | -hr|
| Total | H | 16hrs| 11hrs | 11hrs |

## Additional Libraries
Font Awesome library used for the Linkedin, Github, and Wordpress icons
jQuery used to make/remove hamburger icon, make elements in project page, add classes for additional CSS properties under certain conditions

## Code Snippet
```javascript
.then(retrievedData => {
    console.log(retrievedData)
    const arr = retrievedData.feed.entry.map(eachentry => {
        return {
            description: eachentry.gsx$description.$t,
            image: eachentry.gsx$image.$t,
            title: eachentry.gsx$title.$t,
            url: eachentry.gsx$url.$t,
            launch: eachentry.gsx$launch.$t
        }
    })
    console.log(arr)
    
    create(arr)
    let projectDiv1 = document.querySelectorAll('.container')[0]
    let projectDiv2 = document.querySelectorAll('.container')[1]
    let projectDiv3 = document.querySelectorAll('.container')[2]
    let projectDiv4 = document.querySelectorAll('.container')[3]
    let projectDiv5 = document.querySelectorAll('.container')[4]

    let a = opacityChange(0)
    let b = opacityChange(1)
    let c = opacityChange(2)
    let d = opacityChange(3)
    let e = opacityChange(4)

    a.observe(projectDiv1)
    b.observe(projectDiv2) 
    c.observe(projectDiv3)
    d.observe(projectDiv4) 
    e.observe(projectDiv5)

})

const opacityChange = (num) => {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold:0.8
    }

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                document.querySelectorAll('.container')[num].setAttribute('id', 'projects-opacity')
            }
        })
    }, options)
   return observer
}
```
The IntersectionObserver tracks when an observed DOM element enters and exits the visible viewport. The DOM element that is being observed is each container class div in the project page. Hence, the observe() method is called 5 times. The IntersectionObserver receives a callback function and options parameter. 

The callback function receives the entries parameter, which is an array of IntersectionObserverEntry objects. Each object contains intersection information for the observed element. The entries intersection information is delivered asynchronously. One of the entries interesection information is if the observed element crossed a certain threshold. If the observed element did, then in the callback function the observed element will have an id added to it. The id CSS will change the opacity from 0 to 1 (the observed element originally had an opacity of 0 in its class CSS).

For the options parameter, it is an object. The root is the browser's viewport, so root is null. The threshold is an array of intersectionRatio thresholds. intersectionRatio is how much the observed element is visible. The callback function will be called everytime the intersectionRatio crosses the threshold value(s). When the callback function is invoked, if the condition in the callback function is true, then the id will get added to the container class div. 
Since we need to add ids to different divs, we need to create an IntersectionObserver 5 times.

Also, since the container class divs are created by jQuery, we can only select the divs after it is created in the create function in the then method. Therefore, the IntersectionObserver and observe are both placed inside the then method following the create function.

## Issues and Resolutions
**Error**: $ not defined after deployment on GitHub pages
**Resolution**: Added an 's' to http for the script tag of jQuery

**Error**:Opacity changed for the whole project page upon scrolling
**Resolution**: Create IntersectionObserver for each container class div

**Error**: Link for GitHub icon on project page was not working
**Resolution**: Text need to be appended to a tag and not button

**Error**: Navigation drop-down re-appeared after maximizing the window and minimizing the window if user did not click. 
**Resolution**: Add a function to remove the class after maximizing the window


#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object

## Previous Project Worksheet
 - [Readme's](https://github.com/jkeohan/fewd-class-repo/tree/master/final-project-worksheet/project-worksheet-examples)
 - [Best of class readme](https://github.com/jkeohan/fewd-class-repo/blob/master/final-project-worksheet/project-worksheet-examples/portfolio-gracie.md)
