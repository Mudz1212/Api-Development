# notes 

client makes get request to localhost:3000/fruits 

First goes to index.js 
then it goes to app.js
middleware function checks if the request starts with /fruit and it will know where to divert the request to the router 
the router redirects that to the controller and the router says to run the function within the controller
however the controller mus communicate with the model in order to run the showAll function. 
the showAll() goes back to the controller and then takes the array and creates a http respomsce