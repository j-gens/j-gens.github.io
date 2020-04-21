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
    },
    // {
    //   name: 'pug-commerce',
    //   tagline: 'A review-aggregation app for popular media',
    //   about: '',
    //   tech: [
    //     'JavaScript', 'React', 'Redux', 'Webpack', 'Babel', 'Node.js / Express', 'Firebase', 'AWS (EC2, S3)', 'Git / Github'
    //   ],
    //   url: {
    //     github: 'https://github.com/j-gens/pug-commerce',
    //     image: ''
    //   }
    // },
    // {
    //   name: 'Athletour',
    //   tagline: 'Sports venues tracking app for hockey fans',
    //   about: '',
    //   tech: [
    //     'JavaScript', 'React', 'Node.js / Express', 'MongoDB / Mongoose', 'HTML5 / CSS',  'AWS (EC2)', 'Git / Github'
    //   ],
    //   url: {
    //     github: 'https://github.com/j-gens/MVP-Athletour',
    //     image: ''
    //   }
    // }
  ]
};


export const ABOUTME = {
  paragraphs: [
    'My name is Julia, and I am a software engineer based in the San Francisco Bay Area.',

    'What I appreciate most about coding is the near-limitless potential of creation - and the satisfaction that comes from seeing the work through to fruition.  I have always had a passion for solving problems and love to spend time writing clean, reusable code. ....Combining this innate curiosity...Combined with my experience in client service, I always approach new projects with the user experience in mind.  This people-first mentality...I take delight in solving problems, and....',

    'When not working, I enjoy spending time drawing (recently added watercolor to the mix) and playing co-operative board games with my friends and family.  I am always on the lookout for tabletop game recommendations!'
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
      year: 2009
    },
    {
      school: 'Hack Reactor at Galvanize',
      detail: 'Software Engineer Immersive Program',
      year: 2019
    }
  ],
  skills: {
    frontend: [
      'JavaScript (ES6+)', 'React', 'Redux', 'jQuery', 'HTML & (S)CSS', 'Webpack & Babel'
    ],
    backend: [
      'Node.js & Express', 'MySQL', 'PostgreSQL', 'MongoDB', 'Cassandra'
    ],
    dev: [
      'Git/Github', 'Mocha', 'Chai', 'Jest', 'Enzyme', 'AWS (EC2/S3)', 'Heroku'
    ]
  }
};
