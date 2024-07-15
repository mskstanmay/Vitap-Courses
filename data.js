const courseData = {
  nodes: [
    // Courses
    { data: { id: 'CSE1012', name: 'Problem Solving using Python', credits: 4, type: 'UC-Engg', basket: 'Engineering Foundation' } },
    { data: { id: 'ECE1002', name: 'Fundamentals of Electrical and Electronics Engineering', credits: 4, type: 'UC-Engg', basket: 'Engineering Foundation' } },
    { data: { id: 'ENG1002', name: 'English for Effective Communication', credits: 3, type: 'UC', basket: 'Humanities & Management + Clubs' } },
    { data: { id: 'STS1004', name: 'Introduction to Problem Solving', credits: 3, type: 'UC-H&M', basket: 'Humanities & Management + Clubs' } },
    { data: { id: 'MAT1001', name: 'Calculus for Engineers', credits: 4, type: 'UC-Sci', basket: 'Science Basket' } },
    { data: { id: 'PHY1008', name: 'Modern Physics', credits: 4, type: 'UC-Sci', basket: 'Science Basket' } },
    { data: { id: 'CSE2005', name: 'Object Oriented Programming using JAVA', credits: 4, type: 'UC-Engg', basket: 'Engineering Foundation' } },
    { data: { id: 'CHY1009', name: 'Chemistry and Environmental Studies', credits: 4, type: 'UC-Sci', basket: 'Science Basket' } },
    { data: { id: 'ENG2001', name: 'English for Professional Communication', credits: 3, type: 'UC', basket: 'Humanities & Management + Clubs' } },
    { data: { id: 'ECE1003', name: 'Digital Logic Design', credits: 4, type: 'PC-1', basket: 'Engineering Foundation' } },
    { data: { id: 'MAT1002', name: 'Applications of Differential and Difference Equations', credits: 4, type: 'UC-Sci', basket: 'Science Basket' } },
    { data: { id: 'STS1009', name: 'Introduction to Quantitative, Logical and Verbal Ability', credits: 3, type: 'UC-H&M', basket: 'Humanities & Management + Clubs' } },

    // Top Level Nodes
    { data: { id: 'CSE', name: 'CSE Department', basket: 'Top Level' } },
    { data: { id: 'EnggFoundation', name: 'Engineering Foundation', basket: 'Top Level' } },
    { data: { id: 'SciBasket', name: 'Science Basket', basket: 'Top Level' } },
    { data: { id: 'HnM', name: 'Humanities & Management + Clubs', basket: 'Top Level' } },
    { data: { id: 'Projects', name: 'Projects and Internships', basket: 'Top Level' } }
  ],
  edges: [
    // Prerequisites
    { data: { source: 'ENG1002', target: 'ENG2001', label: 'Prerequisite' } },
    { data: { source: 'STS1004', target: 'STS1009', label: 'Prerequisite' } },

    // Top Level Relationships
    { data: { source: 'CSE', target: 'EnggFoundation', label: 'Contains' } },
    { data: { source: 'CSE', target: 'SciBasket', label: 'Contains' } },
    { data: { source: 'CSE', target: 'HnM', label: 'Contains' } },
    { data: { source: 'CSE', target: 'Projects', label: 'Contains' } },

    // Baskets
    { data: { source: 'EnggFoundation', target: 'ECE1002', label: 'Contains' } },
    { data: { source: 'EnggFoundation', target: 'CSE2005', label: 'Contains' } },
    { data: { source: 'EnggFoundation', target: 'ECE1003', label: 'Contains' } },

    { data: { source: 'SciBasket', target: 'MAT1001', label: 'Contains' } },
    { data: { source: 'SciBasket', target: 'PHY1008', label: 'Contains' } },
    { data: { source: 'SciBasket', target: 'CHY1009', label: 'Contains' } },
    { data: { source: 'SciBasket', target: 'MAT1002', label: 'Contains' } },

    { data: { source: 'HnM', target: 'STS1004', label: 'Contains' } },
    { data: { source: 'HnM', target: 'ENG2001', label: 'Contains' } },
    { data: { source: 'HnM', target: 'STS1009', label: 'Contains' } },
    { data: { source: 'HnM', target: 'ENG1002', label: 'Contains' } },

    { data: { source: 'Projects', target: 'CSE1012', label: 'Contains' } }
  ]
};
