---
id: introduction
title: Developer documentation
sidebar_label: Introduction
slug: /developer-docs
---

All code of Rebel Tools can be found in our [GitHub repository](https://github.com/activisthandbook/rebeltools).

To learn more about how our app was built, check out these articles:
1. **[Front-end](front-end)**: We use the Vue and Quasar frameworks to build our web app.
2. **[Back-end](back-end)**: To host our web app, we use AWS Amplify.
3. **[Documentation](documentation)**: We use Docusaurus for this documentation site. 


## Working with limited resources
We do not really have a budget to work with, so everything needs to be built by volunteers. To make optimal use of the time that our volunteers have available, we need to put together a tech stack that allows us to build an app with as little work as possible. That means we might have to sacrifice in other areas:
- **Web app instead of native app:** By building a progressive web app (PWA), we save a lot of time, since we do not have to make dedicated apps for each platform.
- **Pre-built UI framework instead of our own:** By using a framework such as Quasar, we immediately have available all sorts of components in the style of Google’s Material Design.
- **Backend as a service instead of self-hosted:** By using a service like Firebase, we spend less time setting up our server, and more time on building the actual app. In the long term, if the app gains a significant number of users, this may become more expensive. Hower, while starting up, we will have little to no costs. This allows us to build a proof of concept, after which we still have the option to switch to a self-hosted platform.
- **Google Analytics instead of a self-hosted alternative:** Google Analytics offers a powerful free to use API, which we can use to provide valuable insights for movements that use our platform. There are alternatives, but those offer limited functionality or are significantly more work to implement.
