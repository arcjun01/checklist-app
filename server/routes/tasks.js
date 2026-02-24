const express = require('express');
const router = express.Router();
const { Task } = require('../models');

router.get('/', async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

router.post('/', async (req, res) => {
  const { title, priority } = req.body;
  try {
    const task = await Task.create({ title, priority });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, priority } = req.body;
  const task = await Task.findByPk(id);
  if (!task) return res.status(404).send();
  await task.update({ title, priority });
  res.json(task);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);
  if (!task) return res.status(404).send();
  await task.destroy();
  res.status(204).send();
});

module.exports = router;
