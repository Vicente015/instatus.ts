export default {
  http: {
    version: 1,
    api: 'https://api.instatus.com'
  },
  endpoints: {
    pages: {
      get: '/pages',
      post: '/pages',
      put: '/:page_id',
      delete: '/:page_id',
      components: {
        getAll: '/:page_id/components',
        getOne: '/:page_id/components/:component_id',
        post: '/:page_id/components',
        put: '/:page_id/components/:component_id',
        delete: '/:page_id/components/:component_id'
      },
      incidents: {
        getAll: '/:page_id/incidents',
        getOne: '/:page_id/incidents/:incident_id',
        post: '/:page_id/incidents',
        put: '/:page_id/incidents/:incident_id',
        delete: '/:page_id/incidents/:incident_id',
        incidents_updates: {
          get: '/:page_id/incidents/:incident_id/incidents-updates/:incident_update_id',
          post: '/:page_id/incidents/:incident_id/incidents-updates',
          put: '/:page_id/incidents/:incident_id/incidents-updates/:incident_update_id',
          delete: '/:page_id/incidents/:incident_id/incidents-updates/:incident_update_id'
        }
      },
      maintenances: {
        getAll: '/:page_id/maintenances',
        getOne: '/:page_id/maintenances/:maintenance_id',
        post: '/:page_id/maintenances/',
        put: '/:page_id/maintenances/:maintenance_id',
        delete: '/:page_id/maintenances/:maintenance_id',
        maintenances_updates: {
          get: '/:page_id/maintenances/maintenance-updates/:maintenance_update_id',
          post: '/:page_id/maintenances/maintenance-updates',
          put: '/:page_id/maintenances/maintenance-updates/:maintenance_update_id',
          delete: '/:page_id/maintenances/maintenance-updates/:maintenance_update_id'
        }
      }
    }
  }
}
