# Halifax, Nova Scotia Aircraft Spotting Twitter Bot


## Requirements:
```Node.js```

## Packages:

```node-cron``` https://github.com/kelektiv/node-cron
```axios``` https://github.com/axios/axios


## Setup:
If you use NPM:

`npm init`

`npm install uuid node-cron axios twitter-api-v2`

or

`npm install uuid node-cron axios twitter-api-v2`

### Configuration:
First, create a file called app.js

Then, require `node-cron` in your app.js file

```js
const cron = require('node-cron');
```
Let's look at some basic `node-cron` usage:

By default, `node-cron`'s standard input runs every minute:

```js
cron.schedule('* * * * *', () => {
    console.log('running a task every minute');
});
```

If we wanted to use `node-cron` to run a task every 10 seconds by using ```*/n``` where ```n``` is the number of seconds as shown in this example, for some high-frequency flight position logging, you can do like this:

```js
cron.schedule('*/10 * * * * *', () => {
    console.log('running a task ten seconds');
});
```

Every ten minutes:
```js
cron.schedule('* */10 * * * *', () => {
    console.log('running a task ten minutes');
});
```

etc...

Or conversely, if to log at infrequently, you can set node-cron to run a job at a specific time of day, for instance at midnight:

```js
cron.schedule('0 0 * * * *', () => {
    console.log('running a task every day at midnight');
});
```
