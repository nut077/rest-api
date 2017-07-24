const Pagination = {
  paginate(condition, page = 1, perPage = 5) {
    const queryResults = this.where(condition);

    return {
      [this.key]: queryResults.slice((page - 1) * perPage, page * perPage),
      meta: {
        page: +page,
        perPage: +perPage,
        totalPages: Math.ceil(queryResults.length / perPage)
      }
    }
  }
};

export default Pagination;