import { CollectionConfig } from 'payload/types'

const Optikler: CollectionConfig = {
  slug: 'optikler',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Bölümü',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Ana Başlık',
        },
        {
          name: 'subtitle',
          type: 'text',
          required: true,
          label: 'Alt Başlık',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Açıklama',
        },
        {
          name: 'buttonText',
          type: 'text',
          required: true,
          label: 'Buton Metni',
          defaultValue: 'DETAYLI BİLGİ',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Hero Görseli',
        },
      ],
    },
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
          label: 'Termal Görüntüleme',
          value: 'thermal',
        },
        {
          label: 'Lazer Sistemleri',
          value: 'laser',
        },
        {
          label: 'Görüntüleme Sistemleri',
          value: 'imaging',
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
  versions: {
    drafts: true,
  },
}

export default Optikler
