'use strict';

const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/controller/home.test.js', () => {
  describe('GET /', () => {
    it('should status callback 200', () => {
      return app.httpRequest()
        .get('/')
        .expect(200)
        .expect('hi, egg');
    });
  });

  it('should get body and status 200', async () => {
    await app.httpRequest()
      .get('/')
      .expect(200)
      .expect('hi, egg');

    const result = await app.httpRequest()
      .get('/')
      .expect(200)
      .expect('hi, egg');
    assert(result.status === 200);
  });
});
