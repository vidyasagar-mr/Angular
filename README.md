# Test Line App
Three REST web services are exposed:-

1. To Save all Lines into XML file
URL:- http://localhost:8080/lines/save

2. To get the Line with Maximum Length
URL:- http://localhost:8080/lines/max

3. To get all Lines from XML file in JSON format
URL:- http://localhost:8080/lines/getall

Note:- Before Consuming Service please specify the location where File needs to be saved
in application.properties file.

-> Unit Testing is covered for each unit
-> Successully Tested all three services in Rest Client POSTMAN
-> Maximum length of the Line is identified by substracting last coordinate with initial coordinate
for each Line.
