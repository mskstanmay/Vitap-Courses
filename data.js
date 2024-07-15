const courseData = {
  nodes: [

    //Roadmap sem 1
    {
      data: {
        id: 'CSE1012',
        name: 'Problem Solving using Python',
        credits: 4,
        type: 'UC',
        basket: 'Engineering Foundation',
        completed: true
      }
    },
    {
      data: {
        id: 'ECE1002',
        name: 'Fundamentals of Electrical and Electronics Engineering',
        credits: 4,
        type: 'UC',
        basket: 'Engineering Foundation',
        completed: true
      }
    },
    {
      data: {
        id: 'ENG1002',
        name: 'English for Effective Communication',
        credits: 3,
        type: 'UC',
        basket: 'Humanities & Management',
        completed: true
      }
    },
    {
      data: {
        id: 'STS1004',
        name: 'Introduction to Problem Solving',
        credits: 3,
        type: 'UC',
        basket: 'Humanities & Management',
        completed: true
      }
    },
    {
      data: {
        id: 'MAT1001',
        name: 'Calculus for Engineers',
        credits: 4,
        type: 'UC',
        basket: 'Science Basket',
        completed: true
      }
    },
    {
      data: {
        id: 'CHY1009',
        name: 'Chemistry and Environmental Studies',
        credits: 4,
        type: 'UC',
        basket: 'Science Basket',
        completed: true
      }
    },

    //Roadmap sem 2
    {
      data: {
        id: 'CSE2005',
        name: 'Object Oriented Programming using JAVA',
        credits: 4,
        type: 'UC',
        basket: 'Engineering Foundation',
        completed: true
      }
    },
    {
      data: {
        id: 'PHY1008',
        name: 'Modern Physics',
        credits: 4,
        type: 'UC',
        basket: 'Science Basket',
        completed: true
      }
    },
    {
      data: {
        id: 'ENG2001',
        name: 'English for Professional Communication',
        credits: 3,
        type: 'UC',
        basket: 'Humanities & Management',
        completed: true
      }
    },
    {
      data: {
        id: 'ECE1003',
        name: 'Digital Logic Design',
        credits: 4,
        type: 'PC',
        basket: 'Engineering Foundation',
        completed: true
      }
    },
    {
      data: {
        id: 'MAT1002',
        name: 'Applications of Differential and Difference Equations',
        credits: 4,
        type: 'UC',
        basket: 'Science Basket',
        completed: true
      }
    },
    {
      data: {
        id: 'STS1009',
        name: 'Introduction to Quantitative, Logical and Verbal Ability',
        credits: 3,
        type: 'UC',
        basket: 'Humanities & Management',
        completed: true
      }
    },

    /*
    Roadmap sem 3
    Here i am skipping PE1,PE2,PE3,PE4,PE5,PE6 which are worth 3+3+4+4+4+4 = 25 credits total 
    Club has also been skipped here which is worth 2 credits  = 2
    Left UE1,UE2,UE3 WORTH 3+3+3 CREDITS = 9
    */
    {
      data: {
        id: 'CSE1022',
        name: 'Introduction to Programming',
        credits: 3,
        type: 'UC',
        basket: 'Engineering Foundation',
        completed: false
      }
    },
    {
      data: {
        id: 'CSE2001',
        name: 'Data Structures and Algorithms ',
        credits: 4,
        type: 'UC',
        basket: 'Engineering Foundation',
        completed: false
      }
    },
    {
      data: {
        id: 'MGT1040',
        name: 'Entrepreneurship',
        credits: 2,
        type: 'UC',
        basket: 'Humanities & Management',
        completed: false
      }
    },
    {
      data: {
        id: 'MAT1003',
        name: 'Discrete Mathematical Structures',
        credits: 4,
        type: 'PC',
        basket: 'Science Basket',
        completed: false
      }
    },
    {
      data: {
        id: 'STS2008',
        name: 'Numerical ability and cognitive intelligence',
        credits: 3,
        type: 'UC',
        basket: 'Humanities & Management',
        completed: false
      }
    },
    {
      data: {
        id: 'ECS2002',
        name: 'Engineering Clinics - System Design',
        credits: 2,
        type: 'UC',
        basket: 'Project',
        completed: false
      }
    },

    //Roadmap sem 4
    {
      data: {
        id: 'CSE1005',
        name: 'Software Engineering',
        credits: 4,
        type: 'PC',
        basket: 'Engineering Foundation',
        completed: false
      }
    },
    {
      data: {
        id: 'CSE2007',
        name: 'Database Management Systems',
        credits: 4,
        type: 'PC',
        basket: 'Engineering Foundation',
        completed: false
      }
    },
    {
      data: {
        id: 'MGT1001',
        name: 'Ethics and Values',
        credits: 2,
        type: 'UC',
        basket: 'Humanities & Management',
        completed: false
      }
    },
    {
      data: {
        id: 'ECE2002',
        name: 'Computer Architecture and Organization',
        credits: 4,
        type: 'PC',
        basket: 'Engineering Foundation',
        completed: false
      }
    },
    {
      data: {
        id: 'STS2009',
        name: 'Advanced aptitude and reasoning skills',
        credits: 3,
        type: 'UC',
        basket: 'Humanities & Management',
        completed: false
      }
    },
    {
      data: {
        id: 'MAT1011',
        name: 'Applied Statistics',
        credits: 4,
        type: 'UC',
        basket: 'Science Basket',
        completed: false
      }
    },

    //Summer internship
    {
      data: {
        id: 'SIT1001',
        name: 'Summer Internship',
        credits: 2,
        type: 'UC',
        basket: 'Project',
        completed: false
      }
    },


    //Roadmap sem 5
    {
      data: {
        id: 'ECS3001',
        name: 'Engineering Clinics - Real Time System',
        credits: 2,
        type: 'UC',
        basket: 'Project',
        completed: false
      }
    },
    {
      data: {
        id: 'CSE2008',
        name: 'Operating Systems',
        credits: 4,
        type: 'PC',
        basket: 'Engineering Foundation',
        completed: false
      }
    },
    {
      data: {
        id: 'CSE3004',
        name: 'Design and Analysis of Algorithms',
        prerequisite: 'CSE2001',
        antirequisite: 'CSE3023, SWE2009',
        credits: 4,
        type: 'PC',
        basket: 'Engineering Foundation',
        completed: false
      }
    },
    {
      data: {
        id: 'CSE3003',
        name: 'Computer Networks',
        prerequisite: 'CSE2005',
        antirequisite: 'SWE3001, CSE3025, ECE3003',
        credits: 4,
        type: 'PC',
        basket: 'Engineering Foundation',
        completed: false
      }
    },
    {
      data: {
        id: 'FRL1001',
        name: 'Basic French',
        credits: 2,
        type: 'UC',
        basket: 'Humanities & Management',
        completed: false
      }
    },

    //Roadmap sem 6
    {
      data: {
        id: 'CSE1008',
        name: 'Theory of Computation',
        credits: 4,
        type: 'PC',
        basket: 'Engineering Foundation',
        completed: false
      }
    },
    {
      data: {
        id: 'CSE4004',
        name: 'Web Technologies',
        credits: 4,
        type: 'PC',
        basket: 'Engineering Foundation',
        completed: false
      }
    },

    //Roadmap sem 7
    {
      data: {
        id: 'CAP4001',
        name: 'Capstone',
        credits: 6,
        type: 'UC',
        basket: 'Project',
        completed: false
      }
    },

    //Roadmap sem 8
    {
      data: {
        id: 'BIC4002',
        name: ' Industrial Internship/ Senior Design Project',
        credits: 12,
        type: 'UC',
        basket: 'Project',
        completed: false
      }
    },



    // Nodes related to Baskets
    {
      data: {
        id: 'CSE',
        name: 'CSE Department',
        basket: 'Top Level'
      }
    },
    {
      data: {
        id: 'EnggFoundation',
        name: 'Engineering Foundation',
        basket: 'Top Level'
      }
    },
    {
      data: {
        id: 'SciBasket',
        name: 'Science Basket',
        basket: 'Top Level'
      }
    },
    {
      data: {
        id: 'HnM',
        name: 'Humanities & Management',
        basket: 'Top Level'
      }
    },
    {
      data: {
        id: 'Projects',
        name: 'Projects and Internships',
        basket: 'Top Level'
      }
    }
  ],
  edges: [
    // Prerequisites
    {
      data: {
        source: 'ENG1002',
        target: 'ENG2001',
        label: 'Prerequisite'
      }
    },
    {
      data: {
        source: 'STS1004',
        target: 'STS1009',
        label: 'Prerequisite'
      }
    },

    // Top Level Relationships
    {
      data: {
        source: 'CSE',
        target: 'EnggFoundation',
        label: 'Contains'
      }
    },
    {
      data: {
        source: 'CSE',
        target: 'SciBasket',
        label: 'Contains'
      }
    },
    {
      data: {
        source: 'CSE',
        target: 'HnM',
        label: 'Contains'
      }
    },
    {
      data: {
        source: 'CSE',
        target: 'Projects',
        label: 'Contains'
      }
    },

    // Baskets
    {
      data: {
        source: 'EnggFoundation',
        target: 'ECE1002',
        label: 'Contains'
      }
    },
    {
      data: {
        source: 'EnggFoundation',
        target: 'CSE2005',
        label: 'Contains'
      }
    },
    {
      data: {
        source: 'EnggFoundation',
        target: 'ECE1003',
        label: 'Contains'
      }
    },

    {
      data: {
        source: 'SciBasket',
        target: 'MAT1001',
        label: 'Contains'
      }
    },
    {
      data: {
        source: 'SciBasket',
        target: 'PHY1008',
        label: 'Contains'
      }
    },
    {
      data: {
        source: 'SciBasket',
        target: 'CHY1009',
        label: 'Contains'
      }
    },
    {
      data: {
        source: 'SciBasket',
        target: 'MAT1002',
        label: 'Contains'
      }
    },

    {
      data: {
        source: 'HnM',
        target: 'STS1004',
        label: 'Contains'
      }
    },
    {
      data: {
        source: 'HnM',
        target: 'ENG2001',
        label: 'Contains'
      }
    },
    {
      data: {
        source: 'HnM',
        target: 'STS1009',
        label: 'Contains'
      }
    },
    {
      data: {
        source: 'HnM',
        target: 'ENG1002',
        label: 'Contains'
      }
    },

    {
      data: {
        source: 'Projects',
        target: 'CSE1012',
        label: 'Contains'
      }
    }
  ]
};