---
id: setup
title: Setup
---

Follow these steps to set up your own (customised) version of Rebel Tools.

## 1. Fork our repository
Fork our [repository](https://github.com/activisthandbook/rebeltools) to your own GitHub account.

## 2. Setup a Firebase project
You will need a [Firebase](firebase.google.com) account to host your own instance. There is a free plan available to get started.

**Important steps:**
- [Setup](https://firebase.google.com/docs/web/setup) your Firebase project.
- Make sure to edit the [Firebase configuration](https://firebase.google.com/docs/web/learn-more#config-object) in the `/src/boot/firebase.js` file.

## 3. Deploy
There are two ways of deploying your Rebel Tools instance:
- Using automatic deployments whenever your repository updates (recommended)
- Using the Firebase CLI in your terminal

### Automatic deployments (recommended)

Learn how to [set up automatic deployments](https://firebase.google.com/docs/hosting/github-integration). Add this line to the `firebase-hosting-merge.yml` and `firebase-hosting-pull-request.yml` files:
```yml
- run: yarn install --immutable && yarn global add @quasar/cli && quasar build  -m pwa
```

### Firebase CLI
With the Firebase CLI, it is possible to manually deploy your Rebel Tools instance. You will first need to install Quasar, so you can create a build. Install it globally:
```bash
yarn global add @quasar/cli
```
Then run the following to create a build in the dist/pwa folder:
 ```bash
 quasar build  -m pwa
 ```
Finally, [install the Firebase CLI](https://firebase.google.com/docs/cli) on your computer, [initialise your project](https://firebase.google.com/docs/cli#initialize_a_firebase_project) using the firebase.json presets and then [deploy](https://firebase.google.com/docs/cli#deployment).
