# javascript-cukes-starter
The minimal setup to work with CucumberJS and Selenium web drivers for Chrome and Firefox.

## Prerequisites

1. Download and unpack the web driver for Chrome: https://chromedriver.storage.googleapis.com/index.html
2. Download and unpack the web driver for Firefox: https://github.com/mozilla/geckodriver/releases
3. Adjust the `PATH` environment variable to include the directory where the web drivers reside
4. `npm install`

## Running the tests

`npm run cukes` - by default, it runs all `.feature` files in `test/features` folder, excluding those tagged with `@todo` and `@manual` using **Chrome** web driver.

To run a particular tag:

`npm run cukes -- -t @example`

*Note: arguments to the underlying command (CucumberJS in this case) are passed after the double dash `--`.*

## Running in Firefox

Just set the environment variable:

`BROWSER=firefox npm run cukes`

Happy cukes coding!
