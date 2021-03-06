Todos = new Meteor.Collection('todos');

if (Meteor.isClient) {
  Template.todos.helpers({
    'todo': function() {
      return Todos.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.addTodo.events({
    'submit form': function(event) {
      event.preventDefault();
      var todoName = $('[name="todoName"]').val();
      Todos.insert({
        name: todoName,
        completed: false,
        createdAt: new Date()
      });
      $('[name="todoName"]').val('');
    }
  });

  Template.todoItem.events({
    'click .delete-todo': function(event) {
      event.preventDefault();
      var documentId = this._id;
      var confirm = window.confirm("Delete this task?");
      Todos.remove({_id: documentId});
    }
  });
}

if (Meteor.isServer) {

}

