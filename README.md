# CHROME EXTENSION

To use VoxImplant's Screen Sharing in Chrome, you need to add this extension.

<h3>HOW TO INSTALL A DEVELOPER VERSION</h3>

1. `git clone git@github.com:voximplant/voximplant-chrome-extension.git`
2. Go to the folder with the Chrome extension. Open the **manifest.json** file and add your website to the **matches** section.

![alt text](https://wpcdn.voximplant.com/wp-content/uploads/2017/08/01_chrome_extension-e1501672480837.png)

3. In the address bar on a new tab, type **chrome://extensions** to open the Extensions page. Select the **Developer mode** check box to enable loading extensions from a folder.

4. Click **Load unpacked extension** or drag the folder with extension onto the page to load the extension. The new extension will be displayed on the page.

5. **IMPORTANT:** if you want to change **manifest.json** again (for example, add another test server), you should also change the **version** parameter, namely increase its value. Then remove the extension from Chrome and add it again.


<h3>HOW TO MAKE A PRODUCTION VERSION</h3>
You should pass the procedure of publishing your extension in Google Web Store. For details, see the <a href="https://developer.chrome.com/webstore/get_started_simple#step5">official documentation</a>.
