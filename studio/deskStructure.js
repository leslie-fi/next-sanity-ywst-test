import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { Preview } from './src/schemas/components/Preview';
import SeoPreviews from './src/schemas/components/Previews/seo/SeoPreviews';
import Blog from './src/structure/blog';
import EyeIcon from 'part:@sanity/base/eye-icon';
import EditIcon from 'part:@sanity/base/edit-icon';

const JsonPreview = ({ document }) => (
  // The JSON preview
  <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
);

export const getDefaultDocumentNode = (props) => {
  let { schemaType } = props;
  if (schemaType == 'post' || schemaType == 'page' || schemaType == 'route') {
    return S.document().views([
      S.view.form(),
      S.view.component(Preview).icon(EyeIcon).title('Web Preview'),
      S.view.component(SeoPreviews).icon(EyeIcon).title('SEO Preview'),
      S.view.component(JsonPreview).title('JSON'),
    ]);
  }
  return S.document().views([S.view.form(), S.view.component(JsonPreview).title('JSON')]);
};
export default () =>
  S.list()
    .title('YWST Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.document()
            .title('Default SEO/Share')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      Blog,
      S.divider(),
      S.listItem()
        .title('Landing Pages')
        .child(
          S.list()
            .id('landingPages')
            .title('/')
            .items([
              S.documentTypeListItem('page').title('Pages'),
              S.divider(),
              S.documentTypeListItem('route').title('Routes'),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Newsletters')
        .child(S.documentList().title('Newsletters').filter('_type == "newsletter"')),
    ]);
