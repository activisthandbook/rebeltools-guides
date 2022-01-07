---
id: documentation
title: Documentation
sidebar_label: Documentation
slug: /documentation
---

This documentation website was built using [Docusaurus 2](https://v2.docusaurus.io/), and is hosted using the free [Netlify](https://www.netlify.com/) plan. Everytime we commit an update of our articles to GitHub, this website automatically gets updated.

:::note
This is a summary of how to use Docusaurus to help you get started quickly. For a more detailed explanation, check out [their documentation](https://v2.docusaurus.io/).
:::

## Prerequisites
[You will need](https://v2.docusaurus.io/docs/installation#requirements) the following installed before you can get started with Docusaurus.
- Node.js version >= 10.15.1 or above (which can be checked by running ```node -v```). You can use nvm for managing multiple Node versions on a single machine installed
- Yarn version >= 1.5 (which can be checked by running ```yarn version```). Yarn is a performant package manager for JavaScript and replaces the npm client. It is not strictly necessary but highly encouraged.

## Set up Docusaurus website
Here's how to set up your own documentation site:
1. [Create a Docusaurus project](https://v2.docusaurus.io/docs/installation)
2. [Configure docusaurus.config.js](https://v2.docusaurus.io/docs/deployment#deploying-to-netlify) to work with Netlify
3. Create a [new Netlify project](https://v2.docusaurus.io/docs/deployment#deploying-to-netlify) with the following build settings:
    - build command: ```npm run build```
    - build directory: ```build```

## Build locally
If you want to edit your (or this) documentation site locally, follow these steps:
1. If you haven't done so yet, clone the repository with the Docusaurus site locally.
2. Install packages: ```yarn install```
3. [Start](https://v2.docusaurus.io/docs/installation#running-the-development-server) local development server: ```yarn run start```