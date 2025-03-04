import { CollectionConfig } from 'payload/types'

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: '../public/media',
    staticURL: '/media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'feature',
        width: 1920,
        height: 1080,
        position: 'centre',
      },
    ],
    mimeTypes: ['image/*'],
  },
  admin: {
    useAsTitle: 'alt',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Alternatif Metin',
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Açıklama',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        {
          label: 'Çözümler',
          value: 'solutions',
        },
        {
          label: 'Ürünler',
          value: 'products',
        },
        {
          label: 'Blog',
          value: 'blog',
        },
        {
          label: 'Genel',
          value: 'general',
        },
      ],
      label: 'Kategori',
    },
  ],
}

export default Media
