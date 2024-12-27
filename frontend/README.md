<h1 align="center">Frontend</h1>

This package houses the frontend for our query optimizer. It takes in a user supplied SQL query made for the [TPC-H](http://www.tpc.org/tpch/) dataset and turns it into a query template that is parsed by PostgreSQL. It then displays various explanations and graphs on how the query optimizer determines the optimal query execution plan to pick from various plans by comparing the estimated costs of each query plan.

## Installation and setup

1. **Ensure that you have [Yarn](https://yarnpkg.com/getting-started) (A package manager for javascript) and [NodeJS](https://nodejs.org/en/) installed.**
2. It is advisable to use Node version of 16 (can use nvm to seamlessly switch between Node versions)
You can run this command to switch to Node 16 :
```bash
nvm use 16
```
3. `cd` into this folder and run `yarn install` to install the dependencies needed for the client.
4. In your terminal, run `yarn start` to start the frontend client for unit testing. You can also head back up to the `src` folder and run `yarn start`, which starts both the frontend client and the backend server concurrently. Make sure to check out the `backend` folder if you haven't set up the backend server yet.
