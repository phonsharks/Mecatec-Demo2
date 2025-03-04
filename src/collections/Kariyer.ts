import { CollectionConfig } from 'payload/types'

const Kariyer: CollectionConfig = {
  slug: 'kariyer',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'department', 'location', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Pozisyon Başlığı',
    },
    {
      name: 'department',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Mühendislik',
          value: 'engineering',
        },
        {
          label: 'Ar-Ge',
          value: 'rd',
        },
        {
          label: 'Üretim',
          value: 'production',
        },
        {
          label: 'Kalite',
          value: 'quality',
        },
        {
          label: 'Satış',
          value: 'sales',
        },
        {
          label: 'İK',
          value: 'hr',
        },
      ],
      label: 'Departman',
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      label: 'Lokasyon',
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Tam Zamanlı',
          value: 'full-time',
        },
        {
          label: 'Yarı Zamanlı',
          value: 'part-time',
        },
        {
          label: 'Stajyer',
          value: 'internship',
        },
      ],
      label: 'Çalışma Şekli',
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      label: 'İş Tanımı',
    },
    {
      name: 'requirements',
      type: 'richText',
      required: true,
      label: 'Gereksinimler',
    },
    {
      name: 'responsibilities',
      type: 'richText',
      required: true,
      label: 'Sorumluluklar',
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
          label: 'Kapalı',
          value: 'closed',
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

export default Kariyer
