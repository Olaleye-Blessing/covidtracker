# RECONSTRUCTING!!!

# COVID Data Tracker

View chart tracking cases, deaths, recovered, active and critical situation.

It's created with nextjs.

## Why I worked on this project

My goal was to learn how **[tailwindcss works](https://tailwindcss.com/)** and broaden my knowledge on **[nextjs](https://nextjs.org/)** after learning how nextjs works by building [TRIDATON(this project shows countries' information)](https://countries-ruddy-seven.vercel.app/).

## How to navigate this project

It's a two-page project

1. **[Home](https://covidtracker-umber.vercel.app/)**

    - It has a select form that enables user to search for a country or compare up to 3 countries/continents. [Form File](https://github.com/Olaleye-Blessing/covidtracker/blob/master/components/Form/SelectSearch/SingleSelectSearch.jsx)
    - A chart that shows the result from above. [Chart File](https://github.com/Olaleye-Blessing/covidtracker/blob/master/components/Map/Map.jsx)
    - Favorite icon that enables user to kind of bookmark a country or compared countries/continents.
    - Another favourite icon that pops up a modal when click. [Modal File](https://github.com/Olaleye-Blessing/covidtracker/blob/master/components/Modal/Modal.jsx)

    [Homepage File](https://github.com/Olaleye-Blessing/covidtracker/blob/master/pages/index.js)

2. **[News](https://covidtracker-umber.vercel.app/News)**

    - Provides links to different covid news

    [News File](https://github.com/Olaleye-Blessing/covidtracker/blob/master/pages/News.jsx)

[Components folder](https://github.com/Olaleye-Blessing/covidtracker/tree/master/components) contains the different components used throughout the project.

## If I had more time, I would change this

-   Improve the layout on bigger screens
-   Add a map page that enables user to get information by hovering the map
-   Clear out unneccessary comments, like **[Chart file comments](https://github.com/Olaleye-Blessing/covidtracker/blob/master/components/Map/Map.jsx)**

## Home page screenshot

<p align="center">
  <img src="/covidtracker.png" width="100%" title="project screenshot">
</p>

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
