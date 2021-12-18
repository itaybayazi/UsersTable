Itay Bayazi
An overall description of the project

Greetings!
My name is Itay Bayazi.
In this project I created a page with a title “All users” with a table of users which will contain the following columns:
Picture (circled icon)
Full name (first letter of first name and last name)
Email (link to send the user new email)
Gender
Age
I wrote the project in React library(JavaScript).
In App.js I set the routers-
One router is the main one that defines the users
and second router I set the single user
In the PersonDetalis component I managed the entire single client page
I passed him the object of the customer we clicked on, extracted all the data from him and built on a new page (with his name in the URL, as required) a table for a single customer.
The customer table was implemented using a library called Material Ui
and with this library I implemented the pagination, the table, and the information from the API.
 The API calls are made to mainpage.js and there we also render the table.
From the main page and to the person page, an API call was also made because I passed the customer's name to him, and compared it with the array I received from the API with each name, and then when a match was discovered, he entered the data that suited him.
