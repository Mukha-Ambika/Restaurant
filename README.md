# Restaurant
Brief description:-
To extract data from dataset in json format ( remote file ) using Ajax then display that content in cards format.

Working:-

step:1> when we hit get request at port 3000,RestaurantAjax.js file will get executed which send HtmlTosendAjax.html file will be sent to browser using res.sendFile.
step:2> Now the html file has Ajax code which gets json file from remote location and using for loop we will iterrate the file by setting required content to html card from the json data.  
