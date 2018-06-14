module.exports = () => {
  return {
    '/': { page: '/' },
    '/promotion/:id': { page: '/promotion' },
    '/deal/:id': { page: '/deal' }
  };
};
