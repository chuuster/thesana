![thesana logo](https://raw.githubusercontent.com/chuuster/thesana/master/app/assets/images/logo_black_full.png "Thesana Logo")

# Thesana 

Thesana, an Asana clone, is a web application designed to help teams organize, track, and manage their work. Teams members can create projects and tasks. Members can assign tasks to team members, set a due date, and mark tasks as complete or incomplete.

[Thesana Live Demo](https://thesana.herokuapp.com/#/)

## Features 

In Thesana, users can create, view, edit, and delete projects through the home screen and dropdown menus of individual projects. Projects and tasks are accessible to the entire team that the user is part of. Users can edit tasks within the project task page, including assigning team members to tasks, setting a due date, and marking the task as complete. 

![task completion demo](./readme-images/thesana-gif03.gif)
![task details demo](./readme-images/task-details.gif)

## Technologies

Thesana is built using Ruby on Rails, React.js, Redux.js, and PostgreSQL. 

## Technical Challenges 

One of the main challenges encountered during the development of Thesana was lag when re-rendering. The text input area autosaves to the database whenever the user types. However, the way it was implemented before triggered many API calls to the backend, which led to a quick succession of re-rendering. The speed of re-rendering often could not keep up with the user's typing speed. 

To counter this, I implemented a _debounce function_ so that the API call would only be triggered once after the user finishes typing: 

```javascript
  constructor(props) {
    super(props);
    this.debouncedUpdateTask = debounce(() => { this.props.updateTask(this.state)}, 500);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value }, this.debouncedUpdateTask;);
  };}
```

This solves the problem of unnecessary API calls when the user edits a task. 

Another challenge was to handle clicks on elements that overlap with other elements, such as the project options dropdown on the home page. To counter that issue, I used `stopPropogation` to stop the event from propogating to parent containers: 

```javascript 
  handleProjectOptionsClick(projectString) {
    return (e) => {
      e.stopPropagation();
      e.preventDefault();
      handleDropdownClick(projectString)();
    };
  }
```

# Going Forward 

Future features to implement include concurrent displays of task information in the projects page and implementation of multiple teams. 