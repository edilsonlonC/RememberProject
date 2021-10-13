import app from '../../../app';
import supertest from 'supertest';
import { mockDb } from '../mocks/db'
import Database from '../../../models'
import { jest } from '@jest/globals';
jest.mock('../../../models/db')
const request = supertest(app)





test('testing if jest is working', async (done) => {
    const response = await request.post('/api/v1/sentences/list').send({ data: null});
    console.log(JSON.stringify(response.body, null, 4))
    expect(response.status).toBe(200)
    done();
})



