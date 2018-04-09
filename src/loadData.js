import { createClient } from 'contentful';

const client = createClient({
  accessToken:
    '6f7ec47bfe1a38705c7f5b8852e2df4ff9d772ea42cfe06348ea4d6f4b6764c7',
  space: 'iegfjg6q47xl'
});

async function loadData() {
  const { items: entries } = await client.getEntries();

  const courses = entries.filter(
    entry => entry.sys.contentType.sys.id === 'course'
  );
  const categories = entries.filter(
    entry => entry.sys.contentType.sys.id === 'category'
  );

  return { courses, categories };
}

export default loadData;
