---
id: get-started
title: Self hosting 🌐
sidebar_label: Get started
---

## Host your own instance
Everyone can use [rebel.tools](https://rebel.tools) for free. However, you can also decide to host your it by yourself.

:::note Technical experience required
We expect you have some technical experience in this guide. As always, we do try to explain everything as simply as possible. However, if you just want to get started with Rebel Tools without having to set up your own server, we recommend you just use [rebel.tools](https://rebel.tools).
:::

Benefits:
- You can customise any aspect of the app. This is especially useful if you are a large movement with lots of smaller local groups. You can help these smaller groups by hosting your own customised version which they can use.
- You can decide yourself what geographical area to host your Firebase project. This will help your pages load a bit faster.

Drawbacks:
- You will need to pay yourself for any costs incurred by running your own Firebase project. If you are a small movement, these costs will be minimal.
- Hosting your own instance requires more maintainance. You will need to update your instance manually to make use of our latest features.

### 1. Setup a Firebase project
You will need a [Firebase](firebase.google.com) account to host your own instance. There is a free plan available to get started.

*Important steps:*
- [Setup](https://firebase.google.com/docs/web/setup) your Firebase project.
- Make sure to edit the [Firebase configuration](https://firebase.google.com/docs/web/learn-more#config-object) in the `/src/boot/firebase.js` file.

### 2. Deploy
We use automatic deployment whenever our GitHub repository updates. Learn how to [set up automatic deployments](https://firebase.google.com/docs/hosting/github-integration). Add this line to the `firebase-hosting-merge.yml` and `firebase-hosting-pull-request.yml` files:
```yml
- run: yarn install --immutable && yarn global add @quasar/cli && quasar build  -m pwa
```

### 3. Customize the app
If you are hosting your own instance, you can change every aspect of the app. We recommend you to start by editing the following files:
- quasar.conf.js ([Learn more](https://v2.quasar.dev/quasar-cli/quasar-conf-js))
- src/css/quasar.variables.scss ([Learn more](https://quasar.dev/style/sass-scss-variables#customizing))
- src/css/app.scss

#### Change logo
You can use the [Quasar Icongenie](https://quasar.dev/icongenie/). Install it by running the following command:
```bash
yarn global add @quasar/icongenie
```
You can add your own customised logo by changing the logo files in the `/src/assets` folder. Then generate the icons by running:
```bash
icongenie generate -i src/assets/logo.png --quality 12
```

To use a customised logo for the smaller browser icon, run:
```bash
icongenie generate -i src/assets/logo-small.png --filter ico --skip-trim --quality 12
```




