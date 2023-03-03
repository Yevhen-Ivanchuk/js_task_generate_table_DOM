'use strict';

const people = require('./lib/people');
const dashboard = document.querySelector('.dashboard');

for (const person of people) {
  const table = document.createElement('tr');

  table.innerHTML = `
  <td>${person.name}</td>
  <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
  <td>${person.born}</td>
  <td>${person.died}</td>
  <td>${person.died - person.born}</td>
  <td>${Math.ceil(person.died / 100)}</td>
  `;

  dashboard.append(table);
}
