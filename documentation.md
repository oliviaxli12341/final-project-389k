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

  #TODO add live updates with web sockets

## 3. View Data:

URL | Description | Example
----- | ----- | -----
/ | home page | https://final-project-389k.herokuapp.com/
/create | create a new post | https://final-project-389k.herokuapp.com/create/
/post/:id | show a specific post | https://final-project-389k.herokuapp.com/post/0/
/post/:id/comment | comment on a specific post | https://final-project-389k.herokuapp.com/post/0/comment/
/user/:name | show a specific user | https://final-project-389k.herokuapp.com/user/matthew/
/user/:name/edit | edit or create a user | https://final-project-389k.herokuapp.com/user/exampleuser/edit/
/api/posts | show all posts | https://final-project-389k.herokuapp.com/api/posts/
/api/users | show all users | https://final-project-389k.herokuapp.com/api/users/

  * HTML pages are generated using Handlebars.
  * The following five pages are generated using Handlebars:
    * Home page
    * Post Creation Page
    * Post Comment Page
    * User Page
    * User Creation Page
  * #TODO add about page

## 4. API:


  * #TODO add API endpoints
  * #TODO add delete endpoints

## 5. Modules:

  * #TODO create 2 modules

## 6. NPM Packages:

  * #TODO find and use 2 packages

## 7. User Interface

  * Pages are styled using custom CSS.

## 8. Deployment

  * The website was deployed to the internet using Heroku.

  https://final-project-389k.herokuapp.com/

## 9. README

  * #TODO complete documentation file.
