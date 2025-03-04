'use client'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const isClient = typeof window !== 'undefined'

if (isClient) {
  i18n.use(LanguageDetector)
}

i18n.use(initReactI18next).init({
  fallbackLng: 'tr',
  lng: 'tr', // varsayılan dil
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false,
  },
  detection: isClient
    ? {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
      }
    : undefined,
  resources: {
    tr: {
      translation: {
        nav: {
          optics: 'Optikler',
          testSystems: 'Test Sistemleri',
          composites: 'Kompozitler',
          representatives: 'Temsilciliklerimiz',
          career: 'Kariyer',
          contact: 'İletişim',
          menu: 'Menü',
        },
        banner: {
          title: 'Savunma ve Havacılık\nTeknolojileri',
          description:
            'Savunma sanayii, güvenlik, havacılık ve uzay alanlarında özel üretim çözümler ve yerlileştirme projeleri',
          buttonText: 'İletişime Geçin',
          learnMore: 'Daha Fazla Bilgi',
          stats: {
            expertise: 'Uzmanlık Alanı',
            projects: 'Proje',
            experience: 'Yıllık Deneyim',
          },
        },
        services: {
          title: 'Hizmetlerimiz',
          createAccount: {
            title: 'Hesap Açılışı',
            description: 'Hızlı ve kolay hesap açılışı ile bankacılık deneyiminizi başlatın.',
          },
          creditCards: {
            title: 'Kredi Kartları',
            description: 'İhtiyaçlarınıza uygun avantajlı kredi kartı seçenekleri.',
          },
          investment: {
            title: 'Yatırım',
            description: 'Birikimlerinizi değerlendirmek için çeşitli yatırım araçları.',
          },
          moneyTransfer: {
            title: 'Para Transferi',
            description: 'Güvenli ve hızlı para transfer işlemleri.',
          },
          secureBanking: {
            title: 'Güvenli Bankacılık',
            description: 'En üst düzey güvenlik standartları ile bankacılık işlemleri.',
          },
          savings: {
            title: 'Tasarruf',
            description: 'Geleceğiniz için tasarruf çözümleri ve vadeli mevduat seçenekleri.',
          },
          globalBanking: {
            title: 'Global Bankacılık',
            description: 'Uluslararası bankacılık hizmetleri ve döviz işlemleri.',
          },
          loans: {
            title: 'Krediler',
            description: 'İhtiyaçlarınıza uygun kredi seçenekleri ve ödeme planları.',
          },
          opticalSolutions: {
            title: 'Optik Çözümler',
            description:
              'SWIR, MWIR, LWIR için özel lens tasarımı ve montajı. Kolimator sistemleri ve yüksek hassasiyetli optik çözümler.',
          },
          compositeTech: {
            title: 'Kompozit Teknolojileri',
            description:
              'Karbon fiber, cam elyaf ve özel tasarım kompozit yapılar. Yüksek kaliteli malzemeler ve stoklu ürün çözümleri.',
          },
          testSystems: {
            title: 'Test Sistemleri',
            description:
              'Endüstriyel test ve ölçüm sistemleri için uzman çözümler. Hassas ölçüm ve kalibrasyon hizmetleri.',
          },
          defense: {
            title: 'Savunma ve Havacılık',
            description:
              'Savunma sanayii ve havacılık sektörü için özel üretim çözümler ve yerlileştirme projeleri.',
          },
          engineering: {
            title: 'Mühendislik Hizmetleri',
            description:
              'Özel tasarım, analiz ve danışmanlık hizmetleri. Sektöre özel çözümler ve teknik destek.',
          },
          rAndD: {
            title: 'AR-GE Projeleri',
            description:
              'Yenilikçi teknoloji geliştirme ve araştırma projeleri. Sektörün ihtiyaçlarına yönelik özgün çözümler.',
          },
        },
        common: {
          previous: 'Önceki',
          next: 'Sonraki',
          page: 'Sayfa {{number}}',
        },
        footer: {
          slogan: 'Geleceğin teknolojilerini şekillendiriyoruz.',
          services: 'Hizmetlerimiz',
          composite: 'Kompozit Teknolojileri',
          optical: 'Optik Çözümler',
          testSystems: 'Test Sistemleri',
          corporate: 'Kurumsal',
          about: 'Hakkımızda',
          career: 'Kariyer',
          blog: 'Blog',
          contact: 'İletişim',
          email: 'Email: info@mecatec.com',
          phone: 'Tel: +90 (312) 123 45 67',
          rights: 'Tüm hakları saklıdır.',
          privacy: 'Gizlilik Politikası',
          terms: 'Kullanım Şartları',
        },
        about: {
          title: 'Mecatec Hakkında',
          subtitle: 'Geleceğin Teknolojilerini Şekillendiriyoruz',
          description:
            'Savunma sanayii, güvenlik, havacılık ve uzay alanlarında özel üretim çözümler ve yerlileştirme projeleri sunuyoruz.',
          hero: {
            title: 'Yenilikçi Çözümler, Güvenilir Hizmet',
            subtitle: 'Teknoloji ile Geleceği Şekillendiriyoruz',
            description:
              'Müşterilerimize en iyi hizmeti sunmak için sürekli kendimizi geliştiriyor, yenilikçi çözümler üretiyor ve güvenilir bir iş ortağı olarak yanlarında duruyoruz.',
          },
          companyStats: {
            projects: 'Tamamlanan Proje',
            clients: 'Mutlu Müşteri',
            countries: 'Ülke',
            team: 'Takım Üyesi',
          },
          companyMission: {
            title: 'Misyonumuz',
            description:
              'Müşterilerimize en yüksek kalitede teknolojik çözümler sunarak işlerini büyütmelerine ve hedeflerine ulaşmalarına yardımcı olmak.',
          },
          companyVision: {
            title: 'Vizyonumuz',
            description:
              'Teknoloji sektöründe öncü, yenilikçi ve güvenilir bir marka olarak global ölçekte tanınmak ve tercih edilmek.',
          },
          companyValues: {
            title: 'Değerlerimiz',
            innovation: {
              title: 'İnovasyon',
              description: 'Sürekli yenilik ve gelişim odaklı çalışıyoruz.',
            },
            trust: {
              title: 'Güven',
              description: 'Güvenilirlik ve şeffaflık temel prensibimizdir.',
            },
            quality: {
              title: 'Kalite',
              description: 'En yüksek kalite standartlarında hizmet sunuyoruz.',
            },
            customer: {
              title: 'Müşteri Odaklılık',
              description: 'Müşterilerimizin başarısı bizim başarımızdır.',
            },
          },
          companyTeam: {
            title: 'Ekibimiz',
            description: 'Uzman ve deneyimli ekibimizle her zaman yanınızdayız.',
            positions: {
              ceo: 'Kurucu & CEO',
              cto: 'Teknoloji Direktörü',
            },
          },
        },
      },
    },
    en: {
      translation: {
        nav: {
          optics: 'Optics',
          testSystems: 'Test Systems',
          composites: 'Composites',
          representatives: 'Our Representatives',
          career: 'Career',
          contact: 'Contact',
          menu: 'Menu',
        },
        banner: {
          title: 'Defense and Aviation\nTechnologies',
          description:
            'Custom manufacturing solutions and localization projects in defense industry, security, aviation and space sectors',
          buttonText: 'Contact Us',
          learnMore: 'Learn More',
          stats: {
            expertise: 'Areas of Expertise',
            projects: 'Projects',
            experience: 'Years Experience',
          },
        },
        services: {
          title: 'Our Services',
          createAccount: {
            title: 'Account Opening',
            description: 'Start your banking experience with quick and easy account opening.',
          },
          creditCards: {
            title: 'Credit Cards',
            description: 'Advantageous credit card options suitable for your needs.',
          },
          investment: {
            title: 'Investment',
            description: 'Various investment tools to evaluate your savings.',
          },
          moneyTransfer: {
            title: 'Money Transfer',
            description: 'Secure and fast money transfer transactions.',
          },
          secureBanking: {
            title: 'Secure Banking',
            description: 'Banking transactions with the highest security standards.',
          },
          savings: {
            title: 'Savings',
            description: 'Savings solutions and time deposit options for your future.',
          },
          globalBanking: {
            title: 'Global Banking',
            description: 'International banking services and foreign exchange transactions.',
          },
          loans: {
            title: 'Loans',
            description: 'Loan options and payment plans suitable for your needs.',
          },
          opticalSolutions: {
            title: 'Optical Solutions',
            description:
              'Custom lens design and assembly for SWIR, MWIR, LWIR. Collimator systems and high-precision optical solutions.',
          },
          compositeTech: {
            title: 'Composite Technologies',
            description:
              'Carbon fiber, fiberglass, and custom composite structures. High-quality materials and stocked product solutions.',
          },
          testSystems: {
            title: 'Test Systems',
            description:
              'Expert solutions for industrial test and measurement systems. Precision measurement and calibration services.',
          },
          defense: {
            title: 'Defense and Aviation',
            description:
              'Custom manufacturing solutions and localization projects for the defense industry and aviation sector.',
          },
          engineering: {
            title: 'Engineering Services',
            description:
              'Custom design, analysis, and consulting services. Industry-specific solutions and technical support.',
          },
          rAndD: {
            title: 'R&D Projects',
            description:
              'Innovative technology development and research projects. Original solutions for industry needs.',
          },
        },
        common: {
          previous: 'Previous',
          next: 'Next',
          page: 'Page {{number}}',
        },
        footer: {
          slogan: 'Shaping the technologies of the future.',
          services: 'Our Services',
          composite: 'Composite Technologies',
          optical: 'Optical Solutions',
          testSystems: 'Test Systems',
          corporate: 'Corporate',
          about: 'About Us',
          career: 'Career',
          blog: 'Blog',
          contact: 'Contact',
          email: 'Email: info@mecatec.com',
          phone: 'Tel: +90 (312) 123 45 67',
          rights: 'All rights reserved.',
          privacy: 'Privacy Policy',
          terms: 'Terms of Use',
        },
        about: {
          title: 'About Mecatec',
          subtitle: 'Shaping Future Technologies',
          description:
            'We provide custom manufacturing solutions and localization projects in defense industry, security, aviation and space sectors.',
          hero: {
            title: 'Innovative Solutions, Reliable Service',
            subtitle: 'Shaping the Future with Technology',
            description:
              'We continuously improve ourselves, produce innovative solutions, and stand by our customers as a reliable business partner to provide the best service.',
          },
          companyStats: {
            projects: 'Completed Projects',
            clients: 'Happy Clients',
            countries: 'Countries',
            team: 'Team Members',
          },
          companyMission: {
            title: 'Our Mission',
            description:
              'To help our customers grow their business and achieve their goals by providing the highest quality technological solutions.',
          },
          companyVision: {
            title: 'Our Vision',
            description:
              'To be recognized and preferred globally as a leading, innovative, and reliable brand in the technology sector.',
          },
          companyValues: {
            title: 'Our Values',
            innovation: {
              title: 'Innovation',
              description: 'We work with a focus on continuous innovation and development.',
            },
            trust: {
              title: 'Trust',
              description: 'Reliability and transparency are our core principles.',
            },
            quality: {
              title: 'Quality',
              description: 'We provide service at the highest quality standards.',
            },
            customer: {
              title: 'Customer Focus',
              description: 'Our customers success is our success.',
            },
          },
          companyTeam: {
            title: 'Our Team',
            description: 'We are always by your side with our expert and experienced team.',
            positions: {
              ceo: 'Founder & CEO',
              cto: 'Chief Technology Officer',
            },
          },
        },
      },
    },
  },
})

export default i18n
