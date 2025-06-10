const useFilter = (m1, searchTitle, searchRating) => {
  const filtredList = m1.filter((el) =>
    el.title.toLowerCase().includes(searchTitle.toLowerCase())
  ).filter((el) => el.rating >= searchRating)

  return filtredList;
};

export default useFilter;
