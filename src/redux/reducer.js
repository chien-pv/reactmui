const initSate = [
  {
    id: 1,
    title: "Học JS",
  },
  {
    id: 2,
    title: "Học HTML",
  },
  {
    id: 3,
    title: "Học CSS",
  },
  {
    id: 4,
    title: "Học React",
  },
];
export function reducer(state = initSate, action) {
  switch (action.type) {
    case "@todo/delete":
      let newState = state.filter((item) => item.id != action.id);
      return newState;
    default:
      return state;
  }
}
