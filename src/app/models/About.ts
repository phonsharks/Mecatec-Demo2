import mongoose from 'mongoose'

const aboutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    mission: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
    vision: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
    stats: {
      years: {
        value: {
          type: String,
          required: true,
        },
        label: {
          type: String,
          required: true,
        },
      },
      clients: {
        value: {
          type: String,
          required: true,
        },
        label: {
          type: String,
          required: true,
        },
      },
      countries: {
        value: {
          type: String,
          required: true,
        },
        label: {
          type: String,
          required: true,
        },
      },
      team: {
        value: {
          type: String,
          required: true,
        },
        label: {
          type: String,
          required: true,
        },
      },
    },
    values: [
      {
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        icon: {
          type: String,
          required: true,
        },
      },
    ],
    team: [
      {
        name: {
          type: String,
          required: true,
        },
        position: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
)

const About = mongoose.models.About || mongoose.model('About', aboutSchema)

export default About
