import { CollectionConfig } from 'payload/types'

const Temsilcilikler: CollectionConfig = {
  slug: 'temsilcilikler',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'country', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Temsilcilik Adı',
    },
    {
      name: 'country',
      type: 'text',
      required: true,
      label: 'Ülke',
    },
    {
      name: 'city',
      type: 'text',
      required: true,
      label: 'Şehir',
    },
    {
      name: 'address',
      type: 'textarea',
      required: true,
      label: 'Adres',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Telefon',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'E-posta',
    },
    {
      name: 'website',
      type: 'text',
      label: 'Web Sitesi',
    },
    {
      name: 'contactPerson',
      type: 'text',
      required: true,
      label: 'İletişim Kişisi',
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Açıklama',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
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

export default Temsilcilikler 