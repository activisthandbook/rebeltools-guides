---
id: decisions
title: Our decisions
---

We selected our tech stack based on the following criteria:
- Good documentation.
- Developing should be easy. Spend more time on developing the app, less on setting up the backend. Make optimal use of volunteer hours.
- Cheap, especially for a small to medium user base.

## Working with limited resources
We do not really have a budget to work with, so everything needs to be built by volunteers. To make optimal use of the time that our volunteers have available, we need to put together a tech stack that allows us to build an app with as little work as possible. That means we might have to sacrifice in other areas:
- **Web app instead of native app:** By building a progressive web app (PWA), we save a lot of time, since we do not have to make dedicated apps for each platform.
- **Pre-built UI framework instead of our own:** By using a framework such as Quasar, we immediately have available all sorts of components in the style of Google’s Material Design.
- **Backend as a service instead of self-hosted:** By using a service like Firebase, we spend less time setting up our server, and more time on building the actual app. In the long term, if the app gains a significant number of users, this may become more expensive. Hower, while starting up, we will have little to no costs. This allows us to build a proof of concept, after which we still have the option to switch to a self-hosted platform.
- **Google Analytics instead of a self-hosted alternative:** Google Analytics offers a powerful free to use API, which we can use to provide valuable insights for movements that use our platform. There are alternatives, but those offer limited functionality or are significantly more work to implement.