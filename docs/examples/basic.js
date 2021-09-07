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
  let websiteComponent = components.find(c => c.name == 'Website').id

  // Adds a incident that affects that component
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