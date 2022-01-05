---
id: client
title: Client (frontend)
---

We've decided to go with the following frameworks for our front-end tech stack:
- Vue
  - Vuex
  - Vue Router
- Quasar

## Server
We use [Firebase](https://firebase.google.com/docs) to host Rebel Tools.

### Decision making process
Before deciding what back-end setup to use, we defined our requirements:
- Good documentation.
- Developing should be easy. Spend more time on developing the app, less on setting up the backend. Make optimal use of volunteer hours.
- Cheap, especially for a small to medium user base.
- Features
  - Real time database with offline support
  - Storage
  - Hosting
  - Authentication: email-only sign in (passwordless)
  - Preferably integrations for: stripe (or other payment provider), email, push notifications

:::note
In the rest of the article, we have excluded options that did not fit the above criteria. If you are looking to find the right tech-stack for your own platform, make sure to do some research yourself. These criteria are specific to *our circumstances*, and may not apply to you.
:::

### Own setup, open source stack, or as service?
1. **Our own setup:** Renting a Virtual Private Server (VPS), installing our own database, building custom APIs, etc.
2. **Open source full-stack backend:** Check out [this article](https://github.com/relatedcode/ParseAlternatives) for a more detailed list.
     - Parse
     - Kuzzle
3. **Back-end as a service (BaaS):**
     - Google Firebase
     - AWS Amplify
     - Back4App: Parse as a service
