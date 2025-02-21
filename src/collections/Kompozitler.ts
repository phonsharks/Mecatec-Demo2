import { CollectionConfig } from 'payload/types'

export const Kompozitler: CollectionConfig = {
  slug: 'kompozitler',
  admin: {
    useAsTitle: 'baslik',
    defaultColumns: ['baslik', 'createdAt'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'baslik',
      type: 'text',
      required: true,
      label: 'Ürün Başlığı',
    },
    {
      name: 'aciklama',
      type: 'richText',
      required: true,
      label: 'Ürün Açıklaması',
    },
    {
      name: 'resim',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Ürün Görseli',
    },
    {
      name: 'ozellikler',
      type: 'array',
      label: 'Özellikler',
      fields: [
        {
          name: 'ozellik',
          type: 'text',
          required: true,
          label: 'Özellik',
        },
      ],
    },
    {
      name: 'siraNo',
      type: 'number',
      label: 'Sıralama Numarası',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
