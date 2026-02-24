const request = require('supertest');
const app = require('../../server/index');
const { sequelize, Task } = require('../../server/models');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

test('POST /tasks persists a task', async () => {
  const res = await request(app).post('/tasks').send({ title: 'Integration Task', priority: 3 });
  expect(res.status).toBe(201);
  expect(res.body.title).toBe('Integration Task');

  const found = await Task.findByPk(res.body.id);
  expect(found).not.toBeNull();
  expect(found.title).toBe('Integration Task');
});
