const { InstatusClient } = require('instatus.ts')

// Create a client to interact with the Instatus
const Instatus = new InstatusClient({
  key: 'YOUR_API_KEY', // You can get it in https://instatus.com/app/developer
  pageID: 'PAGE_ID' // You can get it with client.pages.get(), default to the first page
})

// Creates a component
Instatus.pages.components.add({
  name: 'Documentation',
  description: 'The documentation of the app',
  order: 2,
  showUptime: true,
  grouped: false,
  status: 'OPERATIONAL'
})

let websiteComponent = Instatus.pages.components.getAll().then(components => {
  // Components returns an array, find the component on it
  let blogComponentID = components.find(c => c.name == 'Blog').id

  // Updates a component with the component ID
  Instatus.pages.components.update(blogComponentID, {
    status: 'UNDERMAINTENANCE'
  })

  // Deletes a component with the component ID
  Instatus.pages.components.delete(blogComponentID)
})

