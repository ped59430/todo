# Quasar App

[![Netlify Status](https://api.netlify.com/api/v1/badges/fe3c224f-2c0e-4a26-a0fb-a28dfe642397/deploy-status)](https://app.netlify.com/sites/cranky-nightingale-f2d44f/deploys)

Simple ToDo App build with Quasar Framework for SPA, PWA, SSR, Android, iOS, MacOS, Linux and Windows.

Back end written in Express, TypeScript, Node.js

The app used network to store todo, and fallback to LocalStorage if network not exist.

## Requirement

- Node.js > v8.9.0
- Yarn installed

## Installation

```sh
cd todoapp
# Install quasar framework
npm i -g @quasar/cli
# for front end
yarn install
# for back end (Install and start back end http://localhost:3010)
make serve
# Start front end (Single Page Application)
quasar dev --mode spa
# Start front end (Progressive Web App)
quasar dev --mode pwa
# Start front end (Server Side Rendering)
quasar dev --mode ssr
# Start Desktop app (Electron)
quasar dev --mode electron
```

# Testing

- Test covered for Unit Test in Vuex and Intergration test in Vue.js with Jest.

```sh
# Unit Test
yarn test:unit
# Unit Test for dev
yarn test:unit:watchAll
# UI for Unit Test
yarn test:unit:ui
```

- End-to-End testing is available with Cypress

```sh
# Start server
qusar dev --mode spa
# Start Cypress (check once)
yarn test:e2e:CI
# Start Cypress (dev)
yarn test:e2e
```
