# Restaurant Reviews App - Stage 1 Project

## About the Restaurant Reviews

For the Restaurant Reviews projects, you will incrementally convert a static webpage to a mobile-ready web application. In Stage One, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also begin converting this to a Progressive Web Application by caching some assets for offline use.

## Goals for this project:

### Responsive Design

- All content is responsive and displays on a range of display sizes.
- Content should make use of available screen real estate and should display correctly at all screen sizes.
- An image's associated title and text renders next to the image in all viewport sizes.
- Images in the site are sized appropriate to the viewport and do not crowd or overlap other elements in the browser, regardless of viewport size.
- On the main page, restaurants and images are displayed in all viewports. The detail page includes a map, hours and reviews in all viewports.

### Accessibility

- All content-related images include appropriate alternate text that clearly describes the content of the image.
- Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus.
- Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined.

### Offline Availability

- When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.

## Running the project:

- Clone repository from: 

- Download repository as a ZIP archive

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: python -V. If you have Python 2.x, spin up the server with python -m SimpleHTTPServer 8000 (or some other port, if port 8000 is already in use.) For Python 3.x, you can use python3 -m http.server 8000. If you don't have Python installed, navigate to Python's website to download and install the software.

2. With your server running, visit the site: http://localhost:8000, and look around for a bit to see what the current experience looks like.

## To see the Restaurant Reviews App—Stage 1 Project:

### Visit repository GitHub page: 

## Dependencies

This project uses: Google fonts https://fonts.google.com
This project was created based on Udacity starter code: https://github.com/udacity/mws-restaurant-stage-1
