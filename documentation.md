# Final Project - Social Media Website
## Created by Matthew McGowan, Kemi Lin, and Xiaoyu Li

https://github.com/MisterMista

https://github.com/imseul

https://github.com/oliviaxli12341

#### Heroku link: https://final-project-389k.herokuapp.com/

## 1. Database:
  Data is stored using MongoDB via the mongoose npm package.

##### Schemas:

  postSchema:
```javascript
  {
    text: String,
    id: Number,
    time: Number,
    user: String,
    tags: [String],
    comments: [commentSchema]
  }
```
commentSchema:
```javascript
{
  text: String,
  time: Number,
  user: String
}
```
UserSchema:
```javascript
{
  user: String,
  description: String,
  picture: String
}
```
## 2. Live Updates:

  At the homepage, you can send any comments real time and interact with other users.

## 3. View Data:

URL | Description | Example
----- | ----- | -----
/ | Home page | https://final-project-389k.herokuapp.com/
/create | Create a new post | https://final-project-389k.herokuapp.com/create/
/post/:id | Show a specific post | https://final-project-389k.herokuapp.com/post/0/
/post/:id/comment | Comment on a specific post | https://final-project-389k.herokuapp.com/post/0/comment/
/users/ | Show all users | https://final-project-389k.herokuapp.com/users/
/user/:name | Show a specific user | https://final-project-389k.herokuapp.com/user/matthew/
/user/:name/edit | Edit or create a user | https://final-project-389k.herokuapp.com/user/exampleuser/edit/
/api/posts | Show all posts | https://final-project-389k.herokuapp.com/api/posts/
/api/users | Show all users | https://final-project-389k.herokuapp.com/api/users/
/random | Show a random post | https://final-project-389k.herokuapp.com/random/
/most | Show post with most comments | https://final-project-389k.herokuapp.com/most/
/least | Show post with least comments | https://final-project-389k.herokuapp.com/least/
/aboutUs | Show about page | https://final-project-389k.herokuapp.com/aboutUs/

  * HTML pages are generated using Handlebars.
  * The following pages are generated using Handlebars:
    * Home page
    * Post Creation Page
    * Post Comment Page
    * User Page
    * User Creation Page
    * All Users Page
    * About Page

## 4. API:

  * Post Endpoints:
    * /user/:name/edit
    * /post/:id/comments
  * Delete Endpoints:
    * /post/:id/delete  (deletes a specific post according to id - the post number)
    * /user/post/:name/delete  (deletes posts associated with a user, doesn't delete the user)
    * /user/:name/delete  (deletes the user)

## 5. Modules:

  * post_utils.js
  * user_utils.js

## 6. NPM Packages:

  * Bootstrap
  * Font-Awesome

## 7. User Interface

  * Pages are styled using custom CSS and Bootstrap.

## 8. Deployment

  * The website was deployed to the internet using Heroku.

  https://final-project-389k.herokuapp.com/