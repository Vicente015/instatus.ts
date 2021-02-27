# `instatus.ts`

- [`instatus.ts`](#instatusts)
  - [About](#about)
  - [Installation](#installation)
  - [Example usage](#example-usage)
  - [Documentation](#documentation)

## About
A [Node.js](https://nodejs.org/) library to interact with [Instatus API](https://instatus.com/help/api).

## Installation
* With NPM: `npm install instatus.ts`
* With Yarn: `yarn add instatus.ts`

## Example usage
* JavaScript: 
  ```js
  const InstatusClient = require('instatus.ts')
  const client = new InstatusClient({
    key: 'YOUR_API_KEY', // You can get it in https://instatus.com/app/developer
    pageID: 'PAGE_ID' // You can get it with client.pages.get(), default to the first page
  })

  // Get the components
  client.pages.components.getAll().then(components => {
    // Find the website component
    const webID = components.find(component => component.name === 'Website')

    // Creates an incident that affects the website
    client.pages.incidents.add({
      name: 'Website down',
      message: 'The website is down, we are investigating it',
      components: [webID],
      started: Date.now(),
      status: 'INVESTIGATING',
      notify: true,
      statuses: [
        {
          id: webID,
          status: 'PARTIALOUTAGE'
        }
      ]
    })
  })
  ```
* TypeScript: ...

## Documentation
soon™