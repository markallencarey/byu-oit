Thank you for the opportunity to work on this project. I spent about four hours and completed the back-end and some of the front-end. This was my first experience with VueJS or NuxtJS.  Most of my experience has been with React, so it was interesting to learn the differences between the two frameworks.

My back-end was powered by NodeJS and Express. I used Axios to make a call to the Movie Database API on the backend so load times would be faster on the browser. Using a controller, I parsed the data, limiting the returned data to ten movies, and created the required object that would be passed to the front-end. In my index.js I defined the endpoint that would be called on the front-end.

On the front-end, I used Axios to make a call to the REST API I set up in the Express server. Using a Get request, I got all ten movies and saved them to a movies data object. I created a Movie Component that rendered each movie on its own component.

What I needed to finish still:
- rendering the image - I was having some trouble with the configuration API call not receiving my API key correctly, and thus the image url wasn't being reached
- creating the search field - I hadn't gotten to that part yet, and was just using a test keyword of 'star' for my query - I still need to create the input field and pass the user input to the server to pass into the Axios call

What I would like to implement:
- I would love to create a popup where you can click on a movie to get more details and information
- Use Card components from Bootstrap to render and organize the movies
- Add a sort feature to sort the movies alphabetically, by release date, popularity, etc.

Screenshot:

![App Screenshot](https://github.com/markallencarey/byu-oit/blob/main/Screen%20Shot%202021-02-12%20at%203.44.27%20PM.png)