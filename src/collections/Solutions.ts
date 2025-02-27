import { CollectionConfig } from 'payload/types'

export const Solutions: CollectionConfig = {
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
      label: 'Çözüm Başlığı',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Çözüm Açıklaması',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Çözüm Görseli',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Endüstriyel Otomasyon',
          value: 'automation',
        },
        {
          label: 'Teknik Servis',
          value: 'service',
        },
        {
          label: 'Eğitim & Danışmanlık',
          value: 'training',
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        description: 'Sıralama için kullanılır (0 en üstte)',
      },
    },
  ],
}
