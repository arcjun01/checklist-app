const { sortTasksByPriority } = require('../../server/utils/prioritySorter');

test('sorts tasks by descending priority', () => {
  const tasks = [
    { title: 'low', priority: 1 },
    { title: 'high', priority: 10 },
    { title: 'mid', priority: 5 },
  ];

  const sorted = sortTasksByPriority(tasks);
  expect(sorted[0].title).toBe('high');
  expect(sorted[1].title).toBe('mid');
  expect(sorted[2].title).toBe('low');
});
