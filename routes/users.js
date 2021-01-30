
export default async function(app) {

    app.get('/users', async function(request, reply) {
        return { users: [{name:"a"},{name:"b"}]}
    })
    
}


