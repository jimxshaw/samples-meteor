Template.posts.helpers({
  posts: function() {
    return Posts.find({}, {sort: {createdAt: -1}})
  }
});

Template.posts.events({
  "click #submitPost": function(event, template) {
    $('#postModal').modal('hide');
  }
});