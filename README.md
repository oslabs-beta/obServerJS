# obServerJS
Server side middleware, request/response debugging and testing application.

# ***Quick Setup***
This will be a two step process that includes:

- Downloading and running the obServerJS desktop application.
- Installing and enabling the obServerJS NPM package in your server under test.

## Installing obServerJS desktop application

Simply download the application HERE.

## Installing NPM Package
On the server you want to debug, install the 'express-observer' NPM package.

`$npm install express-observer`

On the same server, comment out the line that imports express.

`$//const express = require('express');`

And import the 'express-observer' package in it's place.
`$const express = require('express-observer');`

# ***Features***

## App Tree
Displays the entire express routing stack that include all routes, endpoints, and middleware functions that are implemented in your server.

## Response

### Execution Order
This section displays the expected middleware flow of your request route. So any middleware functions that are not invoked during the request are not displayed here.
You can click on any of the nodes to display the source code for that middleware function.

### Response
Your full response body will be displayed here.

### Source Code
Here is where the source code will be displayed when you click on any node in the 'Execution Order' section. You can control the size with zoom or stretching the section.

### Testing
This 'Testing' tab allows you to create a request/response testing suite for your server. Users can add requests to any endpoints as a test case, and provide the expected response of that request. 
When you hit the green play button, it will run through all test cases and display the results.
Clicking on any test case will display the expected response and the actual response in the sections on the right.

# ***Authors***
* Ashley Pean
* Julia Collins
* Josh Roberts
* Eric Wilding
