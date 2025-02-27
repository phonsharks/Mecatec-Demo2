import { CollectionConfig } from 'payload/types'

export const Temsilcilikler: CollectionConfig = {
  slug: 'temsilcilik',
  admin: {
    useAsTitle: 'firmaAdi',
    defaultColumns: ['firmaAdi', 'ulke', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'firmaAdi',
      type: 'text',
      required: true,
    },
    {
      name: 'ulke',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'aciklama',
      type: 'richText',
    },
    {
      name: 'websitesi',
      type: 'text',
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
