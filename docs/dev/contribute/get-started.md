---
id: get-started
title: Contribute as developer ❤️
sidebar_label: Get started
---

Follow these instructions to setup the development enviroment on your computer.

:::tip Need help?
We want everyone to be able to contribute to our project. That is why we created a free **[web development course](/docs/dev/course/get-started)**. 

And how about we schedule a video call to help you get started? We would love to meet you: hey@rebel.tools
:::

## 1. Prerequisites
In this guide, we assume you already have the following installed:
- [VS Code](https://code.visualstudio.com/download)
- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Git](https://git-scm.com/downloads)

## 2. Fork & clone the repository
You will need to fork & clone our **[GitHub repository](https://github.com/activisthandbook/rebeltools)**, to start making edits & sharing them with us. 

Never done that before? Don't worry, read this [guide for beginners](https://github.com/firstcontributions/first-contributions/blob/master/gui-tool-tutorials/github-desktop-tutorial.md).


:::note
If you are in our GitHub team, you will not have to create your own fork (you can just edit the main repository).
:::

## 3. Install the dependencies
To install all dependencies, run this inside your project folder:
```bash
yarn install 
```
:::tip
You can use the [integrated terminal](https://code.visualstudio.com/docs/editor/integrated-terminal) in VS Code.
:::

## 4. Start the app in development mode
To start a local development server, run this inside your project folder:
```bash
quasar dev
```

:::tip
In VS Code, you can also click 'dev' in the [NPM Scripts shortcut](https://zlypher.github.io/posts/vscode-npm-script-explorer). You can find it in the bottom left of your window.
:::