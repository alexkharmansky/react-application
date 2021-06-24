# React application

Besides standard modules, components and files there are some files that deserve a mention.

### Components

- Menu.js — a Bootstrap menu with items that redirect to project pages with components. Used in App.js file;
- Pagination.js — a simple Bootstrap pagination. Pages quantity varies depending by how many items are on page;
- Posts.js — a component which will return the table of content by referring their parameters from 'Index' page.

### Pages

- Index.js — start page with table of contents. Contains components 'Pagination' and 'Posts' mentioned above. Search bar is placeholder right now and I'm not sure if I make it work anytime soon;
- Result.js — simple page with two results on it;
- About.js — dummy text with some gradients;
- ContactUs.js — same.

### Extra
— App.sass — used Sass for this project.

## Install and launch

Before you launch it, make sure you installed Node.js package. You can download it here: https://nodejs.org/en/.

1. Download the project by pressing 'Code' button and then 'Download ZIP' on project page.
2. Open the terminal at folder.

On Mac: `Right click on app folder` -> `'Services'` -> `'New Terminal at Folder'` 
<br>
On Windows: `Hold 'Shift' key` -> `Right click on app folder` -> `'Open command window here'` 

3. Write down:

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.
