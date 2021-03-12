# Gatsby & Prismic starter project

This project is a starter template for a Gatsby project using Prismic as the CMS.

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

To make sure this project will work, you'll need to have [Node.js](https://nodejs.org/en/) installed on your machine. This is not a tutorial. It is a quick way of getting started with a project using best practices. If you don't understand how this works, [go back and follow this tutorial](https://prismic.io/docs/technologies/tutorial-gatsby)

As this is a primsic project, the first thing we need to do is create a prismic workspace with some data for us to work with

1. Install Prismic CLI globally on your system (if you don't already have it)

```
sudo npm install -g prismic cli
```

Then log into Prismic on your command line

```
prismic login
```

### Installing

With that out of the way, we can begin by installing their starter template

```
prismic theme https://github.com/prismicio/gatsby-getting-started-tutorial --ignore-conf
```

You will be prompted to select the url of the theme you want to use --- can I use this as the theme?

This command will do two things

- It will create a folder on your computer with some default project files - this project makes those files redundant
- It will create a new prismic project with some dummy data

Browse the files it installed if you like, but this project is used to quickly create new prismic projects, not learn how to connect things together

You can safely delete the files this command installed

```
# clone the master branch into your current folder
git clone https://github.com/danspratling/prismic-starter.git
```

Install the dependencies

```
yarn
```

#### Development

Start the development server

```
yarn start
```

Then go to [http://localhost:8000](http://localhost:8000)

#### Testing

Start storybook to document and visually test your site

```
yarn storybook
```

Start cypress to e2e test your site

```
yarn cypress
```

## Built With

- [Gatsby](https://www.gatsbyjs.org/) - A Static Site Generator (SSG) used for creating fast websites with React
- [Prismic](https://prismic.io/) - An API-based Content Management System (CMS)
- [Storybook](https://storybook.js.org) - A Visual Testing library that's great for documentation
- [Cypress](https://cypress.io) - An End to End (e2e) testing library that's great for testing for bugs

<!-- ## License

This software is licensed under the Apache 2 license, quoted below.

Copyright 2020 Prismic (https://prismic.io).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. -->
