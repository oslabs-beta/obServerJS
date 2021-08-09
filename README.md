![](https://github.com/oslabs-beta/obServerJS/blob/main/app/src/img/logo.png)
# [ObServerJS](https://www.observerjs.com)
- ⭐️ Love Our App? We'll trade you a lifetime of good karma for a star 😉 ! ⭐️

A visual dashboard built for server-side applications to support request/response debugging, multiple endpoint testing, and middleware transparency. Just imagine postman for express.js with far less, but more powerful features and a cleaner UI. Just sayin...💁‍♀️

# ***Quick Setup***
This will be a two step process that includes:

- Downloading and running the obServerJS desktop application.
- Installing and enabling the obServerJS NPM package in your server under test.

## Installing obServerJS desktop application

Simply download the application [HERE](https://www.observerjs.com/#download).

## Installing NPM Package
On the server you want to debug, install the 'express-observer' NPM package.

    $npm install express-observer

On the same server, comment out the line that imports express.
And import the 'express-observer' package in it's place.

![example](https://github.com/oslabs-beta/obServerJS/blob/main/app/src/img/require.png)
    

# ***Features***

## App Tree
Displays the entire express routing stack that include all routes, endpoints, and middleware functions that are implemented in your server.

![dashboard1](https://github.com/oslabs-beta/obServerJS/blob/main/app/src/img/dashboard1.png)

## Response

### Execution Order
This section displays the expected middleware flow of your request route. So any middleware functions that are not invoked during the request are not displayed here.
You can click on any of the nodes to display the source code for that middleware function.

![example](https://github.com/oslabs-beta/obServerJS/blob/main/app/src/img/dashboard3.png)

### Response
Your full response body will be displayed here.

### Source Code
Here is where the source code will be displayed when you click on any node in the 'Execution Order' section. You can control the size with zoom or stretching the section.

## Testing
This 'Testing' tab allows you to create a request/response testing suite for your server. Users can add requests to any endpoints as a test case, and provide the expected response of that request. 
When you hit the green play button, it will run through all test cases and display the results.
Clicking on any test case will display the expected response and the actual response in the sections on the right.

# ***Repo Structure***
app => The main external electron application

npm => The express-observer NPM package

site => Our observerjs.com website

# ***Authors***
* [Ashley Pean](https://github.com/ashleypean)
* [Julia Collins](https://github.com/alderAcres)
* [Josh Roberts](https://github.com/quantumspot)
* [Eric Wilding](https://github.com/e-wilding)
