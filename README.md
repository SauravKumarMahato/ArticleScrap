# ArticleScarp

<!--
<p align="center">
    <img src="frontend/funflag/src/assets/images/sasa-game-logo.png" width=200 height=200 />
</p> -->

The project integrates broswerless and puppeteer to scrap the articles based on the given input of user. 

## Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Demo

<!-- demo link -->

https://github.com/SauravKumarMahato/ArticleScrap/assets/83631265/9b57d7a4-4673-427a-a911-19f54db93178

coming soon

## Installation
### Clone this repository
```bash
git clone https://github.com/SauravKumarMahato/ArticleScrap.git
```
### Navigate to folder below
```bash
cd ArticleScrap
```
### Installing Packages in Frontend and Backend
Navigate to the frontend directory
```bash
npm install 
```


Navigate to the backend directory
```bash
yarn install 
```

### Run the server
Navigate to the backend directory.
```bash
npm start
```
### Run the Frontend
Navigate to the frontend directory
```bash
yarn run dev
```
### Visit the Page
```bash
Open your browser and navigate to http://localhost:5173.
```

## Envirorment setup
Create a .env file in the backend folder of the project and add the following:
```bash
PORT=8000
TOKEN=<your_browserless_token>
BROWSERLESS_PORT=3000
```
- Pull and run docker image for browserless
```bash
docker run \
  --rm \
  -p 3000:3000 \
  -e "CONCURRENT=10" \
  -e "TOKEN=6R0W53R135510" \
  ghcr.io/browserless/chromium
```


## Contributing

We encourage contributions to enhance and elevate [ArticleScrap](https://github.com/SauravKumarMahato/ArticleScrap.git). Don't hesistate to submit issues, suggest new features, or initiate pull requests. Kindly follow our Code of Conduct for a respectful and collaborative environment.

## License

This project is licensed under the [MIT License](/ArticleScrap/LICENSE).
