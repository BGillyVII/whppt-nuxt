import { assign } from 'lodash';

import GenericPage from './GenericPage';
import ChangeTemplate from './ChangeTemplate';

const formatSlug = ({ slug }) => slug;

const stripSlug = ({ slug }) => slug;

const createPage = ({ $api }, { page, form }) => {
  assign(page, form.template.init);
  page.template = form.template.key;
  return $api.$post(`/page/save`, { page });
};

const checkSlug = ({ $api }, { slug, _id }) => $api.$get(`/page/checkSlug?slug=${slug}&_id=${_id}`);
const deletePage = ({ $api }, { _id }) => $api.$post(`/page/delete`, { _id });
const loadPage = ({ $api }, { slug }) => $api.$get(`/page/load?slug=${slug}`);
const savePage = ({ $api }, { page }) => $api.$post(`/page/save`, { page });
const publishPage = ({ $api }, { page }) => $api.$post(`/page/publishPage`, { page });
const unpublishPage = ({ $api }, { _id }) => $api.$post(`/page/unpublishPage`, { _id });

export default ({ templates }) => ({
  pageType: {
    name: 'page',
    label: 'Page',
    formatSlug,
    stripSlug,
    templates,
    component: GenericPage,
    createPage,
    savePage,
    loadPage,
    publishPage,
    deletePage,
    unpublishPage,
    checkSlug,
  },
  pageSettings: { name: 'page_template', label: 'Template', component: ChangeTemplate, info: { templates } },
});
