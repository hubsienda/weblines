import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const notes = await getCollection('fieldNotes');

  return rss({
    title: 'Sienda Weblines Field Notes',
    description: 'Practical Field Notes from Sienda Weblines on secure exchange, AI realism, automation, market intelligence, and business engineering.',
    site: context.site,
    items: notes
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((note) => ({
        title: note.data.title,
        description: note.data.description,
        pubDate: note.data.date,
        link: `/field-notes/${note.data.slug}`
      }))
  });
}
