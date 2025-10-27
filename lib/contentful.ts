import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  throw new Error('Missing Contentful credentials');
}

const client = createClient({
  space,
  accessToken,
});

export interface ContentfulEntry {
  sys: {
    id: string;
    contentType: {
      sys: {
        id: string;
      };
    };
  };
  fields: Record<string, any>;
}

export async function getEntries(contentType?: string, limit?: number): Promise<ContentfulEntry[]> {
  const query: any = {};
  if (contentType) {
    query.content_type = contentType;
  }
  if (limit) {
    query.limit = limit;
  }
  const entries = await client.getEntries(query);
  return entries.items as ContentfulEntry[];
}

export async function getEntry(entryId: string): Promise<ContentfulEntry | null> {
  try {
    const entry = await client.getEntry(entryId);
    return entry as ContentfulEntry;
  } catch (error) {
    console.error('Error fetching entry:', error);
    return null;
  }
}

export async function getEntriesByField(contentType: string, field: string, value: any): Promise<ContentfulEntry[]> {
  const query: any = {
    content_type: contentType,
    [`fields.${field}`]: value,
  };
  const entries = await client.getEntries(query);
  return entries.items as ContentfulEntry[];
}

// For ISR, in your page components, use getStaticProps with revalidate: 60
// Example:
// export async function getStaticProps() {
//   const entries = await getEntries('yourContentType');
//   return {
//     props: { entries },
//     revalidate: 60,
//   };
// }