# Zoomable Picture Gallery
A small project demonstrate how to use Bootstrap and SASS to create a simple picture gallery.
# Build Status
### User can:
- click on a thumbnail to see the full picture on stage.
- click on pagination buttons to go through all the pictures.
- hover on the stage to zoom the selected picture.
### Missing:
- swipe feature is not implemented yet.
- should have a UI effect on a selected thumbnail
### Bugs:
- click on a thumbnail will generate some redundant HTML code due to not fully understand how to use the Zoom image on hover JS library.
# Screenshots
# Tech/Framework used
### Libraries and framework used:
- Bootstrap 5
- SASS
- Zoom image on hover JS Libary - https://github.com/malaman/js-image-zoom
# How to Test
- Download the project.
- Run the index.html file.
- Check if the page is displayed properly.
- Click on a thumbnail to see if a bigger picture is displayed on the stage.
- Click on the navigation buttons to go through all the pictures.
- Use left/right arrow keyboard for navigating
- Hover on the stage to see the zooming effect
### To test the style configuration
- open file main.scss
- make some changes, e.g.: $primary-color: purple; $border-radius: 15rem;
- recompile sass file, npm sass main.scss main.css
- run index.html in browser to see the changes
# Actual time working on the project
- 20 minutes to setup IDE, server and research about Bootstrap, SASS
- 1.5 hour implement
- 30 minutes research other JS libraries to integrate to the project
- 30 minutes do manual test and write document.
