import { CollectionConfig } from 'payload/types'

const TestSistemleri: CollectionConfig = {
  slug: 'test-sistemleri',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status'],
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
      type: 'richText',
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
          label: 'Yapısal Test',
          value: 'structural',
        },
        {
          label: 'Çevresel Test',
          value: 'environmental',
        },
        {
          label: 'Kalite Kontrol',
          value: 'quality',
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
      name: 'specifications',
      type: 'array',
      label: 'Teknik Özellikler',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Özellik Adı',
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'Değer',
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Aktif',
          value: 'active',
        },
        {
          label: 'Pasif',
          value: 'inactive',
        },
      ],
      defaultValue: 'active',
      label: 'Durum',
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      label: 'Sıralama',
    },
  ],
}

export default TestSistemleri
