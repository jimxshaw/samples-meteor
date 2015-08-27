Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  // Home route
  this.route('questions', {
    path: '/',
    template: 'questions'
  })
});