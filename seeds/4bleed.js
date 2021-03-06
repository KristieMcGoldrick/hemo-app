exports.seed = function(knex, Promise) {
  return knex('bleed').del()
    .then(function () {
      return knex('users').select('id');
    })
    .then(function(users) {
      return Promise.all([
        knex('bleed').insert({ users_id: users[0].id, event_date: '2016-06-24', description: 'Fell off bike', physical_location: 'knee', medicine_id: 3, dose: 1200, prioritize: false, action_needed: true}),
        knex('bleed').insert({ users_id: users[1].id, event_date: '2016-06-26', description: 'Fell down stairs', physical_location: 'head', medicine_id: 2, dose: 1200, prioritize: true, action_needed: true}),
        knex('bleed').insert({ users_id: users[2].id, event_date: '2016-06-25', description: 'Bar Fight', physical_location: 'thigh', medicine_id: 1, dose: 1100, prioritize: false, action_needed: false})
      ]);
    });
};
