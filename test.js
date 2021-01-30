import test from 'tape'
import createApp from './app.js'

test('hello world', async (t) => {
    const app = createApp()

    const res = await app.inject('/')

    t.deepEqual(res.json(), { hello: 'world'})

    await app.close()
} )
