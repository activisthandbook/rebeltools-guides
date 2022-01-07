---
id: introduction
title: Set up self-hosting
sidebar_label: Introduction
slug: /self-hosting
---

We're using Amazon Amplify to host Rebel Tools. In this guide we explain how you can host your own version.

:::note Technical experience required
We expect you have some technical experience in this guide. As always, we do try to explain everything as simply as possible. However, if you just want to get started with Rebel Tools without having to set up your own server, we recommend you just use [rebel.tools](https://rebel.tools).
:::

## Prerequisites
Before we begin, make sure you have the following installed:
- Node.js v10.x or later
- npm v5.x or later
- git v2.14.1 or later

In addition you'll need:
- An AWS account

## Steps to set up self-hosting
### 1. Fork our repository, then clone locally
[Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) our [GitHub repository](https://github.com/activisthandbook/rebeltools) and then [clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) it to your local computer.

### 2. Install and setup Amplify
:::note
Follow the [guide by AWS](https://docs.amplify.aws/start/getting-started/installation/q/integration/vue) for more details.
:::

Step 1: Install the Amplify CLI using NPM:
```bash
npm install -g @aws-amplify/cli
```
Step 2: Set up the Amplify CLI: 
```bash
amplify configure
``` 



