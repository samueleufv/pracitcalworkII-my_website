# This is the repository for the practical_work2

# Actions
-added the README file to the repository
-added folder docs with subfolder CSS,Images and Public
-added my photo : ("miafoto") into Images
-added the first page: index.html with CSS style into public and CSS folder
-added relative css for its content
-added Github,Linkedin,UFV photos in Images
-added the second page: about.html with relative css for its content into public and CSS folder
-added the third page: contact.html with relative css for its content into public and CSS folder
-added the fourth page: net.html with relative css for its content into public folder and CSS folder
-added link partner image into Images folder
-added the fifth page: topic.html with relative css for its content into public folder and CSS folder
-added 3 more images into Images folder , useful for topic.html page 
-added 1 more images into Images , used in about.html and a pdf file used as cv document in Images folder
-added the sixth page: degree.html with relative css fot its content in public folder and CSS folder
-added the seventh page: fce.html in public folder and CSS folder
-added a captcha to contact.html in public folder
-added .gitignore in root folder
-first deployment on 29 December 2024

#

# Design Detailed Document (DDD)

## Description of the Work
This project involves creating a structured and functional website with various interconnected sections, each serving a unique purpose. The primary aim is to develop a cohesive and informative site that showcases essential aspects of my academic journey and  personal interest . The website is organized into multiple HTML pages, styled with CSS, and hosted on GitHub for online-accessibility.
Web Pages:
All pages have a common header that is  the upper part of the webpage, a common breadcrumb that is a type of secondary navigation scheme that reveals the user’s location in a website and a common footer  that is the bottom section of a website.All pages differ in their main content inside the main tag .  
All these components are styled in CSS page : styles.css . 
These are the HTML pages:
-Main Page (index.html):
Serves as the homepage of the website.
Provides overarching information about the site and its purpose.
-About Me Page (about.html):
Contains a brief personal description inspired by Module 1 (Units 2 and 3).
Includes a curriculum vitae, two images, and links to my social media accounts.
-Degree Page (degree.html):
Provides a detailed overview of my degree.
Includes a sidebar summarizing:
1) The years of study
2) The corresponding semesters of attendance
3) The categories of each subject
4) The course credits expressed in ECTS
5) The course codes
Features "Fundamentals of Computer Engineering" as a dedicated sub-page.
- Fundamentals of Computer Engineering Page (fce.html):
Explores the subject of Fundamentals of Computer Engineering in-depth.
Includes content, objectives, learning outcomes , course syllabus and practical assignments of the subject.
- Contact Page (contact.html):-
Includes a user-friendly contact form.
Uses a simple captcha system that checks if the user correctly answers a question involving the sum of two randomly generated numbers.
The form is static and does not send or save entered content.
- Net Page (net.html):
Lists some partner pages with their names and links to their websites.
- Topic Page (topic.html):
Offers comprehensive information on a chosen topic.
The topic is related to a personal interest : the Bioinformatic .
Folder Structure
- Root Folder:
1) README.md (documentation file)
2) LICENSE file( Apache License Version 2.0, January 2024)
3) .gitignore file
4) docs folder 
     
Docs folder contains: 
- CSS Folder: Contains the global stylesheet for consistent styling across all pages.All HTML pages has a direct link to CSS file through a relative path :  <link rel="stylesheet" href="../CSS/styles.css"> .
- Images Folder: Stores 7 images (in .png and .jpeg format) and 1 PDF file used throughout the website.
- Script.js file: This script manages two functions: it controls the visibility of a list of courses in the sidebar of degree.html page, making it appear or disappear when clicked. It also generates a simple math question as a captcha in the contact form to verify the user is human in the contact.html page. If the user answers incorrectly, they are prompted to try again before submitting the form.
- Public Folder: Houses the following HTML files:
1) about.html
2) degree.html
3) fce.html
4) contact.html
5) net.html
6) topic.html


### Github
For each HTML page added to the project, I made individual commits. These commits tracked the specific changes and additions, ensuring that the development process was well-documented and organized. I update the README.md file every time I add new html pages with relative CSS style and I commit the changes on the README.md file. 
For other updates, such as inserting new links, adding or updating new photos, or adding better style to the content, I did not modify the README.md. but I focused on making separate commits. This approach kept the commit history clear and ensured that any adjustments or improvements to the project were appropriately tracked. Furthermore this approach is useful for future collaborative projects because it allows all collaborators to keep updated  about last changes.

### Hosting
The website is hosted on GitHub (https://samueleufv.github.io/practicalworkII-my_website/) for public access and version control.

## Organizational problems
The main problems I faced during this project were keeping the organization consistent over time and following the given structure properly. It was important not to forget to commit every time I made even a small change, ensuring that each update was tracked individually. I also try to update the README.md file through actions whenever a new page was added. In general, I had to always pay attention to organizational and documentation aspects while writing the code, making sure everything was clear and well-documented and avoiding to completely focus on the HTML coding.
Another challenge I faced was deciding whether to use Git commands through Git Bash or manage everything directly from Visual Studio Code. Initially, I was using Git Bash for version control, but later I switched to managing the commits and Git operations directly within Visual Studio Code.I could have had a clearer idea of the software management method from the beginning , avoiding switching methods during the process of coding.


## Conclusions 
The main objective of this project was not just to build a website, but to focus on software organization and structure. The project emphasized learning how to properly organize a software project with a file system structure , for example I better understand how to use relative paths to link files inside HTML pages  and how to navigate back using paths like “ ../Images/logo.ufv “ . I also learned that it is useful to have a clear idea of the organization and structure of the software project before starting the coding phase.It was also important to understand how to manage a project with GitHub, particularly through commands such as add,push and commits on Git bash .Also I learned how to work with the staging area and how to push and commit changes efficiently directly from Visual Studio Code, ensuring that each modification was clearly tracked. The README.md file played a crucial role in documenting the changes made and explaining the purpose of the project. By focusing on the organization of content and structure , I got valuable experience in managing software projects in a clear and systematic way.

#