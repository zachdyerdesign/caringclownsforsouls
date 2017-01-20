# JavaScriptlater

## Overview
JavaScriplater is a simple light weight website templating engine designed to run on free web hosts so you can easily manage your website with free web hosting such as Github Pages and Google Drive. Also you can create packages for JavaScriplater to add new plugins and functionality to your JavaScriplater site. 

### Instructions
1. Download the files from https://github.com/zachdyerdesign/javascriptlater
2. Go to data/data.js to update general, menu, and footer information.
3. Use the JavaScriptlater functions inside of script tags `<script> JavaScriptlater.getMenu("main-menu") </script>` anywhere in your html to add dynamic menus and more.

### Templating Functions
- `JavaScriptlater.getMenu(name)` - Use this to get use your dynamic menu stored in JavaScriptlater.data.menus
- `JavaScriptlater.getFooter()` - Use this to display your footer information stored in JavaScriptlater.data.footer
- `JavaScriptlater.getIcon(icon, size)` - Use this to display an icon from font awesome. Find more icons at http://fortawesome.github.io/Font-Awesome/icons/

### Organized Code
All the pages for the website are just static html pages and JavaScriplater is stored in one folder called `javascriptlater` and inside that folder you have `core`, `data`, `packages`, and `themes`. The `core` folder is the where the `JavaScriplater` constructor was created. It also includes the basic functions and data needed to get started right out of the box. `data` is where the data for the website that is stored for menus, footer, and general configuration settings. The `packages` folder is where you can add new prototypes to the `JavaScriplater` object such as `icons.js` which is included with JavaScriplater as an example of how you can make your own packages.  

## Demo
http://zachdyerdesign.github.io/javascriptlater
