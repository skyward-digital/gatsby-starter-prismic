# Gatsby & Prismic starter project

This project is a starter template for a Gatsby project using Prismic as the CMS.

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

To make sure this project will work, you'll need to have [Node.js](https://nodejs.org/en/) installed on your machine. This is not a tutorial. It is a quick way of getting started with a project using best practices. If you don't understand how this works, [go back and follow this tutorial](https://prismic.io/docs/technologies/tutorial-gatsby)

Install Prismic CLI globally on your system (if you don't already have it) and login

```
sudo npm install -g prismic cli
prismic login
```

### Installing

Now we've got the prismic-cli set up, we can run the following command to start installing the theme

```
prismic theme --ignore-conf
```

1. You will be prompted to select the url of the theme you want to use

You can choose any prismic theme here but in this case you should use this repo

```
https://github.com/danspratling/gatsby-starter-prismic/archive/main.zip
```

**Note** You'll need to make sure you point to the zip version of the theme - the main URL won't work

2. Next name your repository. Choose whatever you'd like - we'll use `my-awesome-project`

This will create your own custom project at `my-awesome-project.prismic.io` with some dummy data already populated

3. Finally, name the local file. Hit enter if you just want to use the same name as your repository

**Important**: By default, this repo will connect to **my** starter repo. That's great for making sure it doesn't break, but in order for the changes you make to show up you'll need to change `gatsby-config.js` to point at your newly created repo

Change the `gatsby-source-prismic` plugin `repositoryName` to your newly created repo

```
{
  resolve: 'gatsby-source-prismic',
  options: {
    repositoryName: 'my-awesome-repo', //change this to your repo name - don't include the prismic.io part of the url
    linkResolver: () => doc => linkResolver(doc),
    schemas: {
      homepage: require('./custom_types/homepage.json'),
      navigation: require('./custom_types/navigation.json'),
      page: require('./custom_types/page.json'),
    }
  }
}
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

Now if you go to `my-awesome-repo.prismic.io` and make some changes you should see them reflected in your project (you may need to restart the server)

**Important**: Remember, you'll need to change your `gatsby-config.js` to point at the correct repo!!

##### How to add a new Page Template to Prismic and Gatsby

1. Create the Custom Type in Prismic
1. Create a new file in `/content_types` and add the JSON from Prismic (copy and paste from the JSON editor).
1. `require()` the new file in `gastby-config.js` in `gatsby-source-prismic` so that Gatsby is aware this new data exists
1. Add the `doc.type` to the link resolver (`utlis/linkResolver.js`) so that internal links work correctly
1. Add a new method to `gatsby-node.js` so that the page template can be built
1. Start the dev server and go to `localhost:8000/__graphql` and fetch the new data
1. Create a new page template (repeatable) in `/templates` or a new page (single) in `/pages` and update the GraphQL to fetch the data from prismic

_Note_: If you update the Prismic Custom Type later to add/delete page sections, you will need to update the respective file in `content_types` again so that they match, or Gatsby will be unaware of this change.

#### Testing

Start storybook to document and visually test your site

```
yarn storybook
```

Start cypress to e2e test your site

```
yarn cy:open
```

## Built With

- [Gatsby](https://www.gatsbyjs.org/) - A Static Site Generator (SSG) used for creating fast websites with React
- [Prismic](https://prismic.io/) - An API-based Content Management System (CMS)
- [Storybook](https://storybook.js.org) - A Visual Testing library that's great for documentation
- [Cypress](https://cypress.io) - An End to End (e2e) testing library that's great for testing for bugs

### License

Copyright 2021 Dan Spratling \([https://danspratling.dev/](https://danspratling.dev/)\)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
