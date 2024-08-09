This is an application using which you will be able to add the tutorials to the system, modify, delete and list all the tutorials present in the system. 
Comments can be added to each tutorial, modified, deleted and listed corresponding to each tutorial. 
![image](https://github.com/user-attachments/assets/fa6c5c27-46f1-49ed-af6d-80832408028c)
Technologies Used: 
Springboot, Spring Data Jpa, My SQL
Controllers and Routes structure:
/api/tutorials - Creating the tutorial
/api/tutorials/{id} - Modify the tutorial
/api/tutorials/published - List all the tutorials published
/api/tutorials/{id} - delete the tutorial from the system
/api/tutorials/{tutorialId}/comments - adding comment to the tutorial
/api/comments/{comment_id} - updating the comment
/api/tutorials/{tutorialId}/comments - delete a comment
/api/tutorials/{tutorial_id}/comments - Get all the comments corresponding to a tutorial
