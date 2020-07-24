export const PORTFOLIO = {
  apps: [
    {
      name: 'weWare',
      tagline: 'A marketplace app for handmade goods and wares',
      about: [
        'Replaced and built out photo carousel service back end',
        'Optimized PostgreSQL data schema to reduce query time latency from 3s to 4ms',
        'Executed horizontal scaling with multiple EC2 instances and implemented load balancer for 200% increase in throughput while maintaining response time latency',
      ],
      tech: [
        'JavaScript', 'React', 'Node.js / Express', 'SQL / PostgreSQL',
      ],
      url: {
        github: 'https://github.com/j-gens/craft-marketplace-app',
        image: 'https://j-gens-portfolio.s3-us-west-1.amazonaws.com/weware-gen.jpg',
        more: 'https://j-gens.github.io/craft-marketplace-app/',
        deploy: '',
      },
    },
    {
      name: 'reVIEW',
      tagline: 'A review-aggregation app for popular media',
      about: [
        'Designed and built media carousel service',
        'Resolved team integration conflicts via Webpack optimization',
        'Coordinated and deployed entire team\’s modules on proxy server EC2 instance',
        'Utilized agile workflow practices on a 5-person remote team',
      ],
      tech: [
        'JavaScript', 'React', 'Node.js / Express', 'MongoDB / Mongoose',
      ],
      url: {
        github: 'https://github.com/j-gens/review-aggregation-app',
        image: 'https://j-gens-portfolio.s3-us-west-1.amazonaws.com/review-gen.jpg',
        more: 'https://j-gens.github.io/review-aggregation-app/',
        deploy: '',
      },
    },
    {
      name: 'Plantology',
      tagline: 'An e-commerce app for house plants, cacti, succulents, and more',
      about: [
        'Designed and built React front end with Redux for state management; improved app performance by implementing route-based code-splitting and lazy loading techniques',
        'Utilized Google Firebase for authentication, Cloud Firestore for data storage, and integrated with Stripe API for payment processing',
      ],
      tech: [
        'JavaScript', 'React', 'Redux', 'Node.js / Express', 'Firebase',
      ],
      url: {
        github: 'https://github.com/j-gens/plant-commerce-app',
        image: 'https://j-gens-portfolio.s3-us-west-1.amazonaws.com/plantology-gen.jpg',
        more: 'https://j-gens.github.io/plant-commerce-app/',
        deploy: 'ec2-54-151-26-136.us-west-1.compute.amazonaws.com',
      },
    },
    {
      name: 'Athletour',
      tagline: 'A sports venues tracking app for hockey fans',
      about: [
        'The "Ice Bucket List" for any NHL fan looking to attend a game in every arena!',
        'Developed a responsive user experience complete with a RESTful backend server and noSQL database',
      ],
      tech: [
        'JavaScript', 'React', 'Node.js / Express', 'MongoDB / Mongoose',
      ],
      url: {
        github: 'https://github.com/j-gens/MVP-Athletour',
        image: 'https://j-gens-portfolio.s3-us-west-1.amazonaws.com/athletour-gen.jpeg',
        more: 'https://j-gens.github.io/MVP-Athletour/',
        deploy: '',
      },
    },
    {
      name: 'Tic-Tac-Toe',
      tagline: 'A fun and classic game of tic-tac-toe',
      about: [
      ],
      tech: [
        'JavaScript', 'HTML', 'CSS',
      ],
      url: {
        github: 'https://github.com/j-gens/tictactoe-puzzle',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/300px-Tic_tac_toe.svg.png',
        more: 'https://j-gens.github.io/tictactoe-puzzle/',
        deploy: '',
      },
    },
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
