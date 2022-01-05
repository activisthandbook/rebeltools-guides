---
id: customise
title: Customise
---

If you are hosting your own instance, you can change every aspect of the app. We recommend you to start by editing the following files:
- quasar.conf.js ([Learn more](https://v2.quasar.dev/quasar-cli/quasar-conf-js))
- src/css/quasar.variables.scss ([Learn more](https://quasar.dev/style/sass-scss-variables#customizing))
- src/css/app.scss

## Change logo
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