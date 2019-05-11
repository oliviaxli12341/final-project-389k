## 1. Database:
  Data is stored using MongoDB via the mongoose npm package.

  Schemas:

  postSchema:

  {
    text: String,
    id: Number,
    time: Number,
    user: String,
    tags: [String],
    comments: [commentSchema]
  }

commentSchema:

{
  text: String,
  time: Number,
  user: String
}

UserSchema:

{
  user: String,
  description: String,
  picture: String
}

## 2. Live Updates:

  #TODO add live updates with web sockets

## 3. View Data:

Current working links:
home page:                  /
create a new post:          /create
show a specific post:       /post/:id
comment on a specific post: /post/:id/comment
show a specific user:       /user/:name
edit or create a user:      /user/:name/edit
show all posts:             /api/posts
show all users:             /api/users
random post:                /random
most popular post:          /most
least popular post:         /least

  a. HTML pages are generated using handlebars
  b. (5/5), we currently have a home page, a form submission page, a random post, a most popular, a least popular.
  c. #TODO add about page

## 4. API:
 a. #TODO add API endpoints
 b. /post/:id/delete (deletes a specific post according to id - the post number)
    /user/post/:name/delete (deletes posts associated with a user, doesn't delete the user)
    /user/:name/delete (deletes the user)

## 5. Modules:
  #TODO create 2 modules

## 6. NPM Packages:
  a. Bootstrap
  b. Font-Awesome

## 7. User Interface
  Pages are styled using css and bootstrap

## 8. Deployment
  #TODO put website on heroku

## 9. README
  #TODO complete documentation file.
