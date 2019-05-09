Heroku link: https://final-project-389k.herokuapp.com/

## 1. Database:
  Data is stored using MongoDB via the mongoose npm package.

#####Schemas:

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

Current working links: |
----- | -----
home page: |     /
create a new post: |     /create
show a specific post: |     /post/:id
comment on a specific post: |    /post/:id/comment
show a specific user: |     /user/:name
edit or create a user: |     /user/:name/edit
show all posts: |     /api/posts
show all users: |     /api/users

  a. HTML pages are generated using handlebars
  b. (2/5), we currently have a home page and a form submission page.
  c. #TODO add about page

## 4. API:

 a. #TODO add API endpoints
 b. #TODO add delete endpoints

## 5. Modules:

  #TODO create 2 modules

## 6. NPM Packages:

  #TODO find and use 2 packages

## 7. User Interface

  Pages are styled using css

## 8. Deployment

  The website was deployed to the internet using Heroku.

  https://final-project-389k.herokuapp.com/

## 9. README

  #TODO complete documentation file.
