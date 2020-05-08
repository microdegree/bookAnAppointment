
This is barebone skeleton for building your MERN stack Web App 

## SetUp Instructions : 

1. Open Git Bash in your local computer from the folder location where you want to set up the project
2. In Git Command prompt run : <br/>
`git clone https://github.com/microdegree/MernSkeletonApp.git`
      
3. Git will automatically download the code into your local folder
4. Now , run <br/>
`cd freelancer-company-project`

5.  Next step , run <br/>
`npm install`

## Frontend Setup 
1. Run below command in git bash <br/>
`cd frontend`
<br/>This will take you inside the front end code

2. Next step , run <br/>
`npm install`
3. You'll see the project downloading required dependencies

## Backend setup : 

If you are continuing from above , run below command to come out of that folder<br/>
`cd ..`

1. Next run<br/>`cd backend`
2. Now run<br/> `npm install`<br/>

## Start Server :
 Run below command to come out of that folder<br/>
`cd ..`
1. Next step run <br/>`npm run dev`

That should open your default browser with the homepage 
or else open a browser(Chrome/Firefox) and hit

localhost:3000


## Frontend Class Flow Diagram : 

https://drive.google.com/file/d/1vTQHN9eqj_5S84_7qu16eGsvrItuRA--/view?usp=sharing


Backend : 

https://drive.google.com/file/d/1vSvRCWUGZrdTOUe83A0U7fm0FbjIugUF/view?usp=sharing

Mongo Db setup : 

1. go to Google and search "mongo DB Atlas " 
2. signup if you are doing it for a first time / login if you already have one
https://www.mongodb.com/cloud/atlas

Reference : https://www.youtube.com/watch?v=rPqRyYJmx2g
https://www.youtube.com/watch?v=Ej05tq1220A


3. Create a project in top left ()
4. Create a user after this - give a username and password - and remember this
5. Click on network setup - make it open to all ip 
4. After that create a new cluster and finish the setup 
5. After the setup click on connect , and it'll take you to a page where you'll see a 
link like below
mongodb+srv://rakesh2:<password>@cluster0-chxhf.mongodb.net/test?retryWrites=true&w=majority

6. Set this in server.js file (change the password field)
