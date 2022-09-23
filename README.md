<a id="readme-top"></a>

[![Discourse Topics][discourse-shield]][discourse-url] ![Issues][issues-shield]
![Latest Releases][release-shield] ![Contributor Shield][contributor-shield]
[![Deploy to Production](https://github.com/sailpoint-oss/developer.sailpoint.com/actions/workflows/build-and-deploy-prod-gh-pages.yml/badge.svg)](https://github.com/sailpoint-oss/developer.sailpoint.com/actions/workflows/build-and-deploy-prod-gh-pages.yml)

[discourse-shield]: https://img.shields.io/discourse/topics?label=Discuss%20This%20Tool&server=https%3A%2F%2Fdeveloper.sailpoint.com%2Fdiscuss
[discourse-url]: https://developer.sailpoint.com/discuss/
[issues-shield]: https://img.shields.io/github/issues/sailpoint-oss/developer.sailpoint.com?label=Issues
[release-shield]: https://img.shields.io/github/v/release/sailpoint-oss/developer.sailpoint.com?label=Current%20Release
[contributor-shield]: https://img.shields.io/github/contributors/sailpoint-oss/developer.sailpoint.com?label=Contributors

<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="./static/img/SailPoint-Developer-Community-Lockup.png" alt="Logo">

  <h3 align="center">SailPoint Developer Community - README</h3>
  <br/>
<div align="center">
<img src="./static/img/screenshot.png" width="500" height="" style="text-align:center">
</div>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

This repository contains the complete build, with assets, for everything seen on
developer.sailpoint.com. The includes the homepage, all static elements,
documentation, API specifications, et. al. The API specifications come in from a
GitHub Action in another repository, but ultimately the API specifications used
to generate this static site are those found in the `static` folder.

Please use GitHub issues to submit bugs or make feature requests.

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

To run this project you must first have npm installed.

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
   ```bash
   git clone https://github.com/sailpoint-oss/developer.sailpoint.com.git
   ```
2. Install NPM packages
   ```bash
   npm install
   ```
3. Generate the docs
   ```bash
   npm run gen-api-docs-all
   ```
4. Start the website
   ```bash
   npm run start
   ```

### Running the Algolia crawler

1. Setup a .env file inside the algolia folder
   ```sh
   APPLICATION_ID={APP_ID}
   API_KEY={API_KEY}
   ```
2. Run the Algolia crawler using docker
   ```
   docker run -it --env-file=./algolia/.env -e "CONFIG=$(cat ./algolia/config.json | jq -r tostring)" algolia/docsearch-scraper
   ```

<!-- CONTACT -->

## Discuss

[Click Here](https://developer.sailpoint.com/discuss) to discuss this tool with
other users.

<!-- LICENSE -->

## License

Distributed under the MIT License. See [the license](./LICENSE) for more
information.

<!-- CONTRIBUTING -->

## Contributing

Before you contribute you must sign our CLA. Please also read our
[contribution guidelines](./CONTRIBUTING.md) for all the details on
contributing.

<!-- CODE OF CONDUCT -->

## Code of Conduct

We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community. Read our
[code of conduct](./CODE_OF_CONDUCT.md) to learn more.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
