export const PORTFOLIO = {
  apps: [
    {
      name: 'reVIEW',
      tagline: 'A review-aggregation app for popular media',
      extra: 'My work on this application was done as part of a five-person remote team.  We adopted many Agile practices - including daily stand-ups and Trello boards for workflow visualization.  Every part of this application is a separate module.  My objective was to build the image carousel, with a focus on clean and functional design.  I constructed the module with React and styled-components for a dynamic and animated experience.  Testing was done with Jest, Enzyme, and SuperTest.',
      about: [
        'Designed and built media carousel service',
        'Resolved team integration conflicts via Webpack optimization',
        'Coordinated and deployed entire team’s modules on proxy server EC2 instance',
        'Utilized agile workflow practices on a 5-person remote team'
      ],
      tech: [
        'JavaScript', 'React', 'styled-components', 'Webpack', 'Babel', 'Jest', 'Enzyme', 'SuperTest', 'Node.js / Express', 'MongoDB / Mongoose', 'AWS (EC2, S3)', 'Git / Github'
      ],
      url: {
        github: 'https://github.com/j-gens/photo-carousel',
        image: 'https://j-gens-portfolio.s3-us-west-1.amazonaws.com/review-gen.jpg'
      }
    },
    {
      name: 'weWare',
      tagline: 'A marketplace app for handmade goods and wares',
      about: [
        'Replaced and built out photo carousel service back end',
        'Optimized PostgreSQL data schema to reduce query time latency from 3s to 4ms',
        'Executed horizontal scaling with multiple EC2 instances and implemented load balancer for 200% increase in throughput while maintaining response time latency'
      ],
      tech: [
        'JavaScript', 'React', 'Node.js / Express', 'SQL / PostgreSQL', 'New Relic', 'loader.io', 'k6.io', 'nginx', 'AWS (EC2)', 'Git / Github'
      ],
      url: {
        github: 'https://github.com/j-gens/BTetsy-imagecarousel',
        image: 'https://j-gens-portfolio.s3-us-west-1.amazonaws.com/weware-gen.jpg'
      }
    }
  ]
};


export const ABOUTME = {
  paragraphs: [
    'Hello! I am a Fullstack Developer currently based in the San Francisco Bay Area.',
    'I am driven by the goal of self-improvement, a significant piece of which is finding better and more efficient ways to solve a problem.  I utilize my logical mindset and high attention to detail for the purpose of debugging and informing how I write my own code.  My objective as a developer is to keep my code clean and readable to provide longevity and accessibility within a legacy codebase.',
    'When not working, I enjoy spending time drawing (recently added watercolor to the mix), exploring the outdoors with my pug, and playing co-operative board games with my friends and family.  I am always on the lookout for tabletop game recommendations!',
    'Check out below for more information on my portfolio and skills!'
  ],
  lincoln: {
    about: 'Lincoln enjoys three square meals, harvesting the benefits from naps, and long walks to the park.',
    image: 'images/linkadink-sm.png'
  }
};


export const EDUSKILLS = {
  education: [
    {
      school: 'University of Illinois at Urbana-Champaign',
      detail: 'Bachelor of Science in Integrative Biology and Chemistry',
      year: 2009,
      logo: 'https://j-gens-portfolio.s3-us-west-1.amazonaws.com/UIUC-logo.png'
    },
    {
      school: 'Hack Reactor at Galvanize',
      detail: 'Software Engineer Immersive Program',
      year: 2019,
      logo: 'https://j-gens-portfolio.s3-us-west-1.amazonaws.com/HR-logo.png'
    }
  ],
  skills: [
    {
      title: 'Front-End',
      tech: [
        'JavaScript (ES6+)', 'React', 'Redux', 'jQuery', 'HTML & (S)CSS', 'Webpack & Babel'
      ]
    },
    {
      title: 'Back-End',
      tech: [
        'Node.js & Express', 'MySQL', 'PostgreSQL', 'MongoDB', 'Cassandra'
      ]
    },
    {
      title: 'Other',
      tech: [
        'Git/Github', 'Mocha', 'Chai', 'Jest', 'Enzyme', 'AWS (EC2/S3)', 'Heroku'
      ]
    }
  ]
};

export const CONTACT = {
  links: [
    {
      name: 'Github',
      link: 'https://github.com/j-gens',
      img: 'https://j-gens-portfolio.s3-us-west-1.amazonaws.com/github-logo.png'
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/juliatgens/',
      img: 'https://j-gens-portfolio.s3-us-west-1.amazonaws.com/linkedin-logo.png'
    },
    {
      name: 'Email',
      link: 'mailto:juliatgens@gmail.com',
      img: 'https://j-gens-portfolio.s3-us-west-1.amazonaws.com/email-logo.png'
    }
  ]
}
