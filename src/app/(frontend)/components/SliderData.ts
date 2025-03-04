export interface BannerData {
  title: string
  description: string
  buttonText: string
  link: string
  bgColor: string
  stats: {
    value: string
    label: string
  }[]
}

export const bannerData: BannerData = {
  title: 'Tüm Transferler\nTek Basit Uygulama',
  description: 'En son teknoloji ile desteklenen, size özel tasarlanmış kolay bankacılık deneyimi',
  buttonText: 'Hemen Başla',
  link: '/get-started',
  bgColor: '#111111',
  stats: [
    {
      value: '100k+',
      label: 'Aktif Hesap',
    },
    {
      value: '2M+',
      label: 'İşlem',
    },
    {
      value: '80+',
      label: 'Ülke',
    },
  ],
}
