## Express MVC

Companion app to [OrangeMethod's Express MVC Lesson](https://om-curriculum.apps-np.homedepot.com/javascript/express/express-mvc-no-db/)

## Setup

To get started fork this repo to your Home Depot GitHub, clone it and install the dependencies

To start the application run `yarn dev`

A postman collection for this application can be found [here](https://www.getpostman.com/collections/9805bd264b43bebfca86)

## Lab

If you navigate to `http://localhost:3000/users` you should get a message indicating that User data, routes, controllers, etc. need to be added. Take a few minutes and to build out that piece of the application. 

* Create an array of Users and place it in `models/user.js`. At minimum, the user objects should contain:
  * `id`
  * `name`
  * `email`
* Create CRUD operations in your user model
  * Create a new user
  * Retrieve all users
  * Retrieve a single user
  * Update a user (by id)
  * Delete a user
* Create CRUD routes for your users
* Create corresponding controller actions for each of your routes

**Extra Credit**

* Add query params for finding a user by name and/or email


## Summary

We have now walked through structuring an express application with the MVC architecture. While not always applicable, this is an excellent way to organize your code, as this pattern is used across the industry. 

## Additional Resources

* [https://medium.com/@agoiabeladeyemi/a-simple-explanation-of-express-middleware-c68ea839f498](A Simple Explanation of Express Middleware)