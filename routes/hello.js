
export default async function(app) {

    app.get('/', async function(request, reply) {
        return { hello: 'world'}
    })
    
}


