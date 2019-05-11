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

  At the homepage, you can send any comments real time and interact with other users. 

## 3. View Data:

Current working links:
home page:                  /
create a new post:          /create
show a specific post:       /post/:id
comment on a specific post: /post/:id/comment
show all users:             /users
show a specific user:       /user/:name
edit or create a user:      /user/:name/edit
show all posts:             /api/posts
show all users:             /api/users
show authors' information   /aboutUs


  a. HTML pages are generated using handlebars      
  b. home page; create page(form submission page); user page; userEdit page; comment page; allUser page
  c. about page

## 4. API:
 a. two post endpoints: /user/:name/edit; /post/:id/comment
 b. delete endpoints

## 5. Modules:
  #TODO create 2 modules

## 6. NPM Packages:
  #TODO find and use 2 packages

## 7. User Interface
  Pages are styled using css

## 8. Deployment
  #TODO put website on heroku

## 9. README
  #TODO complete documentation file.
