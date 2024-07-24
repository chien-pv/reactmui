export function deleteTodo(id) {
  return {
    type: "@todo/delete",
    id,
  };
}
