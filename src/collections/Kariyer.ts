import { CollectionConfig } from 'payload'
export const Kariyer: CollectionConfig = {
  slug: 'kariyer',
  admin: {
    useAsTitle: 'pozisyon',
    defaultColumns: ['pozisyon', 'departman', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'pozisyon',
      type: 'text',
      required: true,
    },
    {
      name: 'departman',
      type: 'text',
      required: true,
    },
    {
      name: 'aciklama',
      type: 'richText',
      required: true,
    },
    {
      name: 'gereksinimler',
      type: 'array',
      fields: [
        {
          name: 'gereksinim',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'aktif',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
