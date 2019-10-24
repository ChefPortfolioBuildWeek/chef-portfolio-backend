const request = require('supertest');
const server = require('../server');

describe('server.js', () => {
    const creds = {
        username: 'adminlogin',
        password: '123'
    }

    const newCreds = {
        username: `${Date.now()}`,
        password: `${Date.now()}`
    }
    //two tests for login
    describe('login route', () => {
        it('should return a status code of 200', () => {
            return request(server)
            .post('/api/auth/login')
            .send(creds)
            .expect(200)
        })
        it('is a JSON Object', () => {
            return request(server)
              .post('/api/auth/login')
              .send(creds)
              .then(res => {
                expect(res.type).toMatch(/json/i)
              });
          });
    })
    //two tests for register
    describe('register route', () => {
        it('it should return a status of 201', () => {
            return request(server).post('/api/auth/register')
                .send(newCreds)
                .expect(201) 
        })

        it('is a JSON Object', () => {
            return request(server)
              .post('/api/auth/register')
              .send(creds)
              .then(res => {
                expect(res.type).toMatch(/json/i)
              });
          });
    })  

    //get all users
    describe('users route', () => {
        it('should return users with auth', () => {
            return request(server).get('/api/users')
                .then(res => {
                    expect(res.body);
                })
        })
        it('should return 400 bad request', () => {
            return request(server).get('/api/users')
                .expect(400)
        })
    })

    //create a post
    describe('create route', () => {
        it('should return a newly created post', () => {
            return request(server)
            .post('/api/posts/create')
            // 
            .then(res => {
                expect(res.body);
            })
        })
        it('is a JSON Object', () => {
            return request(server)
              .post('/api/posts/create')
              .send(creds)
              .then(res => {
                expect(res.type).toMatch(/json/i)
              });
          });
    })

    //get post by username
    describe('posts route', () => {
        it('should return an array of objects', () => {
            return request(server).get('/api/posts/username')
                .then(res => {
                    expect(res.body);
                })
        })
        it('should return 400 bad request', () => {
            return request(server).get('/api/posts/username')
                .expect(400)
        })
    })

    //update a post
    describe('update route', () => {
        it('should return a newly updated post', () => {
            return request(server)
            .put('/api/posts/update/id')
            .send(creds) 
            .then(res => {
                expect(res.body);
            })
        })
    })

    //delete a post
    describe('delete route', () => {
        it('should return status code 400 when not authorized', () => {
            return request(server)
              .delete('/api/posts/delete/id')
              .then(res => {
                expect(res.status).toBe(400);
              });
          });

          it('should return status code 404 when post does not exist', () => {
            return request(server)
              .delete('/api/posts/delete/')
              .then(res => {
                expect(res.status).toBe(404);
              });
          });
    })
})
    