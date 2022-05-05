new Vue({
    el: '#to-do',
    data: {
      newTask: '',
      todos: [
        { task: 'Vue.jsのアプリを作る', isCompleted: false },
        { task: 'AWSの勉強をする', isCompleted: false }
      ]
    },
    methods: {
      addTodo: function() {
        if (this.newTask == '') return;
        this.todos.push(
          { task: this.newTask, isCompleted: false }
        );
        this.newTask = '';
      },
      deleteTodo: function (todo) {
        var index = this.todos.indexOf(todo)
        this.todos.splice(index, 1)
      }
    }
  });