import { CollectionConfig } from 'payload'

export const TestSistemleri: CollectionConfig = {
  slug: 'test-sistemleri',
  admin: {
    useAsTitle: 'baslik',
    defaultColumns: ['baslik', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'baslik',
      type: 'text',
      required: true,
    },
    {
      name: 'aciklama',
      type: 'richText',
      required: true,
    },
    {
      name: 'resim',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'ozellikler',
      type: 'array',
      fields: [
        {
          name: 'ozellik',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'siraNo',
      type: 'number',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
