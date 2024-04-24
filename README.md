## Getting started 

### Installation

with docker  
```bash
# copy the `.env.example` file to `.env` and set the environment variables

docker compose up
```

without docker  
```bash
# copy the `.env.example` file to `.env` and set the environment variables

# install dependencies
npm install

# sync schemas 
npm run schema:sync

# run migrations
npm run migration:run

# start the server
npm run dev