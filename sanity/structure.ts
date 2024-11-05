import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Display the default list of document types, excluding 'author' and 'startup'
      ...S.documentTypeListItems().filter(
        (item) => {
          const id = item.getId();
          return id && !['author', 'startup'].includes(id);
        }
      ),

      // Add a dedicated section for "Authors"
      S.listItem()
        .title('Author')
        .schemaType('author')
        .child(S.documentTypeList('author').title('Author')),

      // Add a dedicated section for "Startups"
      S.listItem()
        .title('Startup')
        .schemaType('startup')
        .child(S.documentTypeList('startup').title('Startup'))
    ])
