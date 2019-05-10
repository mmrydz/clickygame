# Clicky Cat App

## Overview

This is a cat-themed memory game built with React [Create React App](https://github.com/facebookincubator/create-react-app). It renders 12 different kitty gifs to the screen. Each image listens for click events. The application keeps track of the user's score. The user's score is incremented when clicking an image for the first time. The user's score is reset to 0 if they click the same image more than once (i.e, user loses and sees a 'Doh!' message in navbar). To make things challenging, every time an image is clicked, the images rendered to the page shuffle in a random order. Once the user's score is reset after an incorrect guess, the game restarts.

Demo
----
![](ClickyCatAppDemo.gif)
