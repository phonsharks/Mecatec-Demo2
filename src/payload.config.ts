// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Kompozitler } from './collections/Kompozitler'
import { Optikler } from './collections/Optikler'
import { TestSistemleri } from './collections/TestSistemleri'
import { Temsilcilikler } from './collections/Temsilcilikler'
import { Kariyer } from './collections/Kariyer'
import { Solutions } from './collections/Solutions'
import { About } from './collections/About'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '- Mecatec Admin',
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    bundler: {
      configPath: path.resolve(__dirname, '../webpack.config.js'),
    },
  },
  collections: [
    Solutions,
    Users,
    Media,
    Kompozitler,
    Optikler,
    TestSistemleri,
    Temsilcilikler,
    Kariyer,
    About,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  localization: {
    locales: ['tr', 'en'],
    defaultLocale: 'tr',
  },
})
