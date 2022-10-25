// serverConfig.js

import { belongsTo, createServer, hasMany, Model } from "miragejs"

const serverConfig = ({environment = 'test'} = {}) => {
	const mockServer = createServer({
    environment,
		models: {
			user: Model.extend({ board: hasMany() }),

			board: Model.extend({
				user: belongsTo(), 
				card: hasMany()
			}),
			
			card: Model.extend({ 
				user: belongsTo(),
				expense: hasMany()
			}),
			
			expense: Model.extend({ card: belongsTo() }),
		},
	})


  return mockServer
}

export default serverConfig
