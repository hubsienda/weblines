export function getFieldNoteSlug(id: string): string {
  return id.replace(/\.mdx?$/, '');
}
