--Readme document for *author(s)*, *email(s)*, *UCI id(s)*--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

*/10
- 1/1 The ability to log overnight sleep
- 1/1 The ability to log sleepiness during the day
- 1/1 The ability to view these two categories of logged data
- 2/2 Either using a native device resource or backing up logged data
- 2/2 Following good principles of mobile design
- 2/2 Creating a compelling app
- 1/1 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
It took 40 hours to complete this project. 


3. What online resources did you consult when completing this assignment? (list specific URLs)
https://github.com/ionic-team/ionic-storage - for ionic storage installation
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date 
https://ionicframework.com/docs/api/range 
https://ionicframework.com/docs/api/buttons 
in general the ionicframework website was referenced a lot. 

4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
Aaron Lin and Neha Yelgireddy have partnered up on this project. 
Emails: shihsyul@uci.edu and nyelgire@uci.edu 
IDs: 83048320 and 38647888

5. Is there anything special we need to know in order to run your code?
N/A


--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
We designed our app to be usable by everyone but specifically for students. We even included 
"Good Morning!", "Good Afternoon!", and "Good Night!" messages to change dynamically througout the day.

7. Did you design your app specifically for iOS or Android, or both?
We designed our app specifically for both iOS and Android. 


8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?
A person can log overnight sleep in our app by selecting a time they fell asleep and the time they woke up using a
datetime picker. When they press the "Log Sleep Hours" button, that then saves their data. 


9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
A person can log their sleepiness in our app by using the Stanford Sleepiness Scale. They can select how sleepy they are
from the Ion Range and then save it after clicked the "Log Sleepiness" button. 


10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?
A person can view the data they logged in our app by clicking on the "View All Logged Data" button. We chose to support viewing
data this way because it was a simple way to organize viewing both the sleep hours and sleepiness data. 


11. Which feature choose--using a native device resource, backing up logged data, or both?
We chose to back up logged data instead of using a native device resource. 


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?


13. If you backed up logged data, where does it back up to?
We backed up logged data using Ionic Storage. 

14. How does your app implement or follow principles of good mobile design?
Our app follws principles of good mobile design by implementing a useful initial view, error prevention, and 
following platform conventions. For exampke, our app has error prevention by providing error messages when logging
sleep hours to make sure the wake up time is not earlier than the sleep time. 