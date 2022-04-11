# Project 2 Idea Resources

## Remarks
- Rather than use a typical authorization method such as 0auth we could use the Hiro Systems Wallet Authorization method. This would give us the security of a 12 word seed phrase in addition to the ability to transact in the STX token on either Testnet or Mainnet. Once the 12 word seed phrase has been establish you only need to use a standard password to access the wallet. In fact we dont even need to use the wallet. If you Connect with your password then you are permitted access to a members only part of the website.

- This would require the use of React, which would satisfy the following requirement: "Use at least one new library, package, or technology that we haven't discussed."

- This repo is set up to accept handlebars.js and express.js. In fact the React front end will populate on one port and the backend will populate on another port. 

## Installation 
- git clone git@github.com:gemsjohn/project-2-demo.git
- npm install

- While in the root directory enter `npm run start` then the React front end should populate in your web browser. WARNING: If you get an error, then you likely need to create a `.env` file and include `SKIP_PREFLIGHT_CHECK=true`. Save and then re-run `npm run start` and the web application should launch.

## Test
Once you have completed the instalation instructions above, select connect and a modal should populate that allows you to `Create Stacks Account`.

## Images
![Example IMG](https://github.com/gemsjohn/project-2-demo/blob/main/public/example.png)
![HIRO](https://github.com/gemsjohn/project-2-demo/blob/main/public/hiro.png)


