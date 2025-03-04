import { Metadata } from 'next'

export const homeMetadata: Metadata = {
  title: 'Mecatec - Yenilikçi Teknoloji Çözümleri',
  description:
    'Mecatec ile geleceğin teknolojilerini keşfedin. Kompozit teknolojileri, optik çözümler ve test sistemleri alanında öncü hizmetler sunuyoruz.',
  keywords:
    'mecatec, teknoloji çözümleri, kompozit teknolojileri, optik çözümler, test sistemleri, inovasyon',
  openGraph: {
    title: 'Mecatec - Yenilikçi Teknoloji Çözümleri',
    description:
      'Mecatec ile geleceğin teknolojilerini keşfedin. Kompozit teknolojileri, optik çözümler ve test sistemleri alanında öncü hizmetler sunuyoruz.',
    images: ['/images/6-scaled.jpg'],
  },
}

export const aboutMetadata: Metadata = {
  title: 'Hakkımızda | Mecatec',
  description:
    'Mecatec olarak, yenilikçi teknoloji çözümleri ve güvenilir hizmet anlayışıyla müşterilerimizin yanındayız. Misyonumuz, vizyonumuz ve değerlerimiz hakkında bilgi edinin.',
  keywords: 'mecatec hakkında, misyonumuz, vizyonumuz, değerlerimiz, ekibimiz, teknoloji şirketi',
  openGraph: {
    title: 'Hakkımızda | Mecatec',
    description:
      'Mecatec olarak, yenilikçi teknoloji çözümleri ve güvenilir hizmet anlayışıyla müşterilerimizin yanındayız.',
    images: ['/images/about-banner.jpg'],
  },
}
