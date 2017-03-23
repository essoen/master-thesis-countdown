# master-thesis-countdown
> Countdown to when the master thesis must be delivered

## Setup

1. Install node and npm
2. Run `npm start` which runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build and deploy

Run `npm run deploy`, which runs `npm run build` then uses `rsync` to deploy to http://master.svorstol.common
You will be prompted for a password, unless you have SSH keys in order.

## Credit
Based on [revy-countdown](https://github.com/andybb/revy-countdown).
