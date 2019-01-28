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

Lag due to re-rendering was one of the main challenges encountered during the development of Thesana. Because keystrokes are autosaved into the database, the application made many API calls to the backend, which triggered a re-rendering of the React component. 

To counter this, I implementing a _debounce function_ so that the API call would only be triggered once after the user finishes typing: 

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

