export default context => () => {
  const { $axios, store } = context;

  const baseAPIUrl = store.state['whppt-nuxt/editor'].baseAPIUrl;

  return $axios.get(`${baseAPIUrl}/api/siteSettings/loadSiteSettings`).then(response => {
    return response.data;
  });
};