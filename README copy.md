<h1 align="center"> Final-Project </h1>

![](https://media.giphy.com/media/9nt9NckauzqJG/source.gif)


This application is primarily to help you analyze your email content in order to improve communication with everyone, literally everyone you are emailing.

Any content can be entered in the app and it will return sentiment results.


# API reference:

https://www.ibm.com/watson/developercloud/personality-insights/api/v2/

# Sample JSON data

`
  
    "tone_categories": [
    
      {
      
        "tones": [
        
          {
          
            "score": 0.425323,
            
            "tone_id": "anger",
            
            "tone_name": "Anger"
            
          },
          
          {
          
            "score": 0.053921,
            
            "tone_id": "disgust",
            
            "tone_name": "Disgust"
            
          },
          
          {
          
            "score": 0.423818,
            
            "tone_id": "fear",
            
            "tone_name": "Fear"
            
          },`

# User Stories

`"I'm a terrible writer and wish I could get feedback on my emails before I hit send"`

`"trying to make my sister feel guilty but not sure if this email really has enough condemnation"`

`"Before I send this break up letter I'd like to know if it's too harsh, wish there was an app for that"`



<h1 align="center"> Wireframes  </h1>
 
 <h2 align="center"> Home  </h2> 
 
![](http://i.imgur.com/rdRjusn.png)
 <h2 align="center"> Results  </h2> 

 
 Instructions for running app:

 in views install:

 npm install react-chartjs-2 --save
 npm install cors
 npm install axios

 in server intall:

 npm install pg-promise
 npm install express
 npm install body-parser
 npm install axios
 npm install createdb tones
 psql -d tones -f db/seeds.sql

 Link to obtain password and key for Watson:

 https://www.ibm.com/watson/developer/





