export interface SlideItem {
  id: number
  title: string
  description: string
  buttonText: string
  link: string
  bgColor: string
}

export const sliderData: SlideItem[] = [
  {
    id: 1,
    title: 'Optik',
    description: 'Yüksek kaliteli optik çözümler',
    buttonText: 'Detaylı Bilgi',
    link: '/optik',
    bgColor: 'linear-gradient(135deg, #0062ff 0%, #001a66 100%)',
  },
  {
    id: 2,
    title: 'Test Sistemleri',
    description: 'Güvenilir test ve ölçüm sistemleri',
    buttonText: 'Detaylı Bilgi',
    link: '/test-sistemleri',
    bgColor: 'linear-gradient(135deg, #0062ff 0%, #001a66 100%)',
  },
  {
    id: 3,
    title: 'Kompozit',
    description: 'İleri teknoloji kompozit malzemeler',
    buttonText: 'Detaylı Bilgi',
    link: '/kompozit',
    bgColor: 'linear-gradient(135deg, #0062ff 0%, #001a66 100%)',
  },
]
