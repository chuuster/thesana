export const selectTasksForProject = ({ projects, reviews }, project) => {
  return project.taskIds.map(taskId => reviews[taskId]);
}

