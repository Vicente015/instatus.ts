<div align="center">
  <br/>
  <p>
    <a href="https://instatus.vicente015.dev/"><img src="https://cdn.jsdelivr.net/gh/Vicente015/instatus.ts@dev/.github/header.svg" width="546" alt="instatus.ts"/></a>
  </p>
  <p>
    <a href="https://www.npmjs.com/package/instatus.ts"><img src="https://img.shields.io/npm/v/instatus.ts.svg?maxAge=3600" alt="Version"/></a>
    <a href="https://www.npmjs.com/package/instatus.ts"><img src="https://img.shields.io/npm/dt/instatus.ts.svg?maxAge=3600" alt="Downloads"/></a>
    <a href="https://david-dm.org/Vicente015/instatus.ts"><img src="https://img.shields.io/david/Vicente015/instatus.ts.svg?maxAge=3600" alt="Dependencies"/></a>
    <a href="https://instatus.vicente015.dev"><img src="https://img.shields.io/badge/Documentation-instatus.vicente015.dev-yellow" alt="Documentation">
  </p>
  <p>
    <a href="https://nodei.co/npm/instatus.ts/"><img src="https://nodei.co/npm/instatus.ts.png?downloads=true&stars=true" alt="npm info" /></a>
  </p>
</div>

- [About](#about)
- [Installation](#installation)
- [Example usage](#example-usage)
- [Documentation](#documentation)

## About
A [Node.js](https://nodejs.org/) library to interact with [Instatus API](https://instatus.com/help/api).

* Written in TypeScript.
* Object-oriented.

## Installation
* With NPM: `npm install instatus.ts`
* With Yarn: `yarn add instatus.ts`

## Example usage
* JavaScript: 
  ```js
  const { InstatusClient } = require('instatus.ts')

  // Create a client to interact with the Instatus
  const Instatus = new InstatusClient({
    key: 'YOUR_API_KEY', // You can get it in https://instatus.com/app/developer
    pageID: 'PAGE_ID' // You can get it with client.pages.get(), default to the first page
  })

  // Instatus.pages Returns the information of the page that you have provided in the options or the first one you have, from here you can interact with your page

  // Gets the website component ID to interact with it
  let websiteComponent = Instatus.pages.components.getAll().then(components => {
    // Components returns an array, find the component on it
    let websiteComponent = components.find(c => c.name == 'Website')

    // Add an incident that affects that component
    Instatus.pages.incidents.add({
      name: 'Website down', // Incident title
      message: 'The website is down, we are investigating it', // Incident description
      components: [websiteComponent], // Affecting components
      started: Date.now(), // The current date
      status: 'INVESTIGATING', // The incident status 
      notify: true, // Notify the users
      statuses: [ // Status of the affected components
        {
          id: websiteComponent,
          status: 'PARTIALOUTAGE' // Status of the component
        }
      ]
    })
  })
  ```

## Documentation
You can see the documentation [here](https://instatus.vicente015.dev/).