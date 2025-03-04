import { CollectionConfig } from 'payload/types'

const Solutions: CollectionConfig = {
  slug: 'solutions',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Başlık',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Açıklama',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Görsel',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Optik Sistemler',
          value: 'optical',
        },
        {
          label: 'Test Sistemleri',
          value: 'testing',
        },
        {
          label: 'Kompozit Teknolojileri',
          value: 'composite',
        },
      ],
      label: 'Kategori',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Özellikler',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Başlık',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Açıklama',
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      label: 'Sıralama',
    },
  ],
}

export default Solutions
