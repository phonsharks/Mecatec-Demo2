import { CollectionConfig } from 'payload/types'

const About: CollectionConfig = {
  slug: 'about',
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
      name: 'content',
      type: 'richText',
      required: true,
      label: 'İçerik',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Görsel',
    },
    {
      name: 'mission',
      type: 'richText',
      required: true,
      label: 'Misyon',
    },
    {
      name: 'vision',
      type: 'richText',
      required: true,
      label: 'Vizyon',
    },
    {
      name: 'values',
      type: 'array',
      label: 'Değerlerimiz',
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
          name: 'icon',
          type: 'text',
          label: 'İkon',
        },
      ],
    },
    {
      name: 'history',
      type: 'array',
      label: 'Tarihçe',
      fields: [
        {
          name: 'year',
          type: 'text',
          required: true,
          label: 'Yıl',
        },
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
      name: 'team',
      type: 'array',
      label: 'Ekibimiz',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Ad Soyad',
        },
        {
          name: 'position',
          type: 'text',
          required: true,
          label: 'Pozisyon',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Fotoğraf',
        },
        {
          name: 'bio',
          type: 'textarea',
          label: 'Biyografi',
        },
      ],
    },
    {
      name: 'certificates',
      type: 'array',
      label: 'Sertifikalar',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Başlık',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Sertifika Görseli',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Açıklama',
        },
      ],
    },
  ],
}

export default About
