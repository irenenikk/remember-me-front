# remember-me-front
[![heroku link](https://camo.githubusercontent.com/8d1f0e62ca9067026ead054e935e6cf408a11a12/687474703a2f2f6865726f6b752d62616467652e6865726f6b756170702e636f6d2f3f6170703d616e67756c61726a732d63727970746f267374796c653d666c6174267376673d31)](https://remember-me-front.herokuapp.com/)
[![Build Status](https://api.travis-ci.org/irenenikk/remember-me-front.svg?branch=master)](https://travis-ci.org/irenenikk/remember-me-front)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e6a07c20cd764472a14f873f609811c5)](https://www.codacy.com/app/irenenikk/remember-me-front?utm_source=github.com&utm_medium=referral&utm_content=irenenikk/remember-me-front&utm_campaign=badger)
[![Code Coverage](https://img.shields.io/codecov/c/github/irenenikk/remember-me-front/master.svg)](https://codecov.io/github/irenenikk/remember-me-front)
[![License: MIT](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/irenenikk/remember-me-front/blob/master/LICENSE)

Remember me is a site for storing your reading tips. The project is work in progress and is a part of the course [Software Engineering](https://github.com/mluukkai/ohjelmistotuotanto2017/wiki/miniprojekti) at the University of Helsinki.

The planned features include creating, listing, editing and deleting tips.

## Developing
This project was initialized using [create-react-app](https://github.com/facebookincubator/create-react-app)
* `yarn install` after cloning the repo
* `yarn start` to start the server locally (`localhost://3000`)
* `yarn test` to run tests
* `yarn add` to add a depepency

In development, you'll also have to start the [server](https://github.com/rovaniemi/remember-me-back).

Both development and production server addresses must be configured in a local `.env` file. The example file can be found [here](.env.example). Just copy the example file, rename it to `.env`, and insert the appropriate addresses.

## Prerequisites
* Node 6 or higher on your machine to run locally

## Backlog
* You will find the backlog [here](https://docs.google.com/spreadsheets/d/1eq01w-fGfOIcPo54cV_MVKJF2UQoHha497509iPhAXg/edit?usp=sharing)

## Sprint 1
![](https://docs.google.com/spreadsheets/d/e/2PACX-1vSPKgMIuBYVppRYc-T5D1WpD0__bmklyoIom3yZBq9-pcBuB2eC7GY-cueotHRCccc49zkBTgFXW6n5/pubchart?oid=661973320&format=image)
![](https://docs.google.com/spreadsheets/d/e/2PACX-1vSPKgMIuBYVppRYc-T5D1WpD0__bmklyoIom3yZBq9-pcBuB2eC7GY-cueotHRCccc49zkBTgFXW6n5/pubchart?oid=488963762&format=image)
![](https://docs.google.com/spreadsheets/d/e/2PACX-1vSPKgMIuBYVppRYc-T5D1WpD0__bmklyoIom3yZBq9-pcBuB2eC7GY-cueotHRCccc49zkBTgFXW6n5/pubchart?oid=1111038195&format=image)


## Definition of Done
* DoD is defined [here](/docs/DoD.md)

## Built with
* React with Redux
* Webpack, ESlint and Babel as configured by [create-react-app](https://github.com/facebookincubator/create-react-app)

## Authors

* **Mauri Karlin** - *Developer* - [rovaniemi](https://github.com/Rovaniemi)
* **Irene Nikkarinen** - *Developer* - [irenenikk](https://github.com/irenenikk)
* **Maaret Ihamäki** - *Developer* - [ihamaki](https://github.com/ihamaki)
* **Taina Lepistö** - *Developer* - [tainalepisto](https://github.com/TainaLepisto)
