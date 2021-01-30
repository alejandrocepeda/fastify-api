import createApp from './app.js'
import { config } from './config/index.js'

async function start() {
    //Add some command line parsing...
    const app = createApp({ logger: true })

    await app.listen(config.port)
}


start()