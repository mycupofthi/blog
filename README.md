# Indigo Online Blog Info and Instructions

## Updating and installing this project

Start by making sure you have the following downloaded to your computer: npm and git

1. Start by Clicking the Fork button on top of this project, this will generate your own version on github.
2. In your terminal type `cd` and the folder that you have for this project that you would like to place the code in
3. Type `git clone [url for repository] .` (the period is important so it puts the folders in the directory you're in, otherwise it'll just create a new folder inside your folder)
4. Once you've downloaded the project to your computer type `npm i` to install the node package modules, these are necessary to compile and process the code. You may notice some warnings, it's safe to ignore them right now and it shouldn't prevent you from going forward.
5. This project uses SASS for the CSS. To compile this we use gulp. In your terminal (still within this project folder) simply type gulp and it'll begin watching your files. Every time you hit save it will compile your code.
6. To pull compiled code for using on the CMS simply navigate to the folder public>styles and copy the content in style.css into the CMS (╯✧∇✧)╯

### Making Changes to Project

(☞ ﾟ ∇ ﾟ)☞ Woohoo you've made some changes! Now you want to push them to github so that anyone else who picks up this project is working with all of the same material as you are.

## Page Creation

Use the blank responsive template and add the following Content Blocks to the top of your blog page: 55926 and 55968.

Add in hero banner (should contain the same classes as all other '00' banners in the inspired blog).

Add in any related banners or html blocks

If you're working on a blog post that requires a carousel of posts, add the following Content Block with an ID of 56041

Add in footer Content Block at bottom of page with ID of 55937

### General Assets

Banners can be found in the CMS under Content>Banners>Inspired Blog. Create a new folder for new blog post page and add in your banners (the easiest method to do so is to copy an existing folder and paste it into the Inspired Blog directory)

Share Button

share\_\_black

share\_\_grey

### Assets for Author Blog

CMS banner widgets 55954-55959

### Assets for Baby Blog

CMS banner widgets 55960-55964
