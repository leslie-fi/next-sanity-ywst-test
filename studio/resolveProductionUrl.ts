const previewSecret = process.env.SANITY_PREVIEW_SECRET; // Copy the string you used for SANITY_PREVIEW_SECRET
const projectUrl = process.env.PREVIEW_URL;

export default function resolveProductionUrl(document: {
  slug: { current: string };
  _type: string;
  _id: string;
}) {
  const path = ['post', 'route'].includes(document._type) ? document.slug.current : document._id;
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${path}&type=${document._type}`;
}

// const getPreviewUrl = ({ type, slug }) =>
//   `https://www.sanity.io/api/preview?type=${type}&slug=${slug}`;

// export default function resolveProductionUrl(document) {
//   if (!document?._type) {
//     return;
//   }
//   if (document._type === 'person') {
//     if (document.handle?.current) {
//       return getPreviewUrl({ type: 'person', slug: document.handle.current });
//     }
//     return;
//   }

//   if (document.slug?.current) {
//     return getPreviewUrl({ type: document._type, slug: document.slug.current });
//   }
//   return;
// }
