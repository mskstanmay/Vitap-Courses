document.addEventListener('DOMContentLoaded', () => {
  const courseContainer = document.getElementById('course-container');

  function displayCourses(view) {
    courseContainer.innerHTML = ''; // Clear previous content

    let categories = {};
    let totalUC = 0; // Initialize UC total credits

    if (view === 'baskets') {
      courseData.nodes.filter(node => node.data.basket && node.data.basket !== 'Top Level')
        .forEach(course => {
          if (!categories[course.data.basket]) {
            categories[course.data.basket] = [];
          }
          categories[course.data.basket].push(course);
          if (course.data.type === 'UC') {
            totalUC += course.data.credits; // Add UC credits to total
          }
        });

      // Create the credit table at the top of the course container
      const creditTable = document.createElement('table');
      creditTable.classList.add('credit-table');

      // Add the header row
      const headerRow = document.createElement('tr');
      headerRow.innerHTML = `
        <th>Category</th>
        <th>UC Credits</th>
        <th>Credits</th>
      `;
      creditTable.appendChild(headerRow);

      // Define the specific order for the baskets
      const basketOrder = [
        'Engineering Foundation',
        'Science Basket',
        'Project',
        'Humanities & Management',
        'Clubs'  // Ensure Clubs is included in the order
      ];

      // Add rows for each category with the sum of UC credits and total credits
      basketOrder.forEach(category => {
        if (categories[category]) {
          let sumCredits = categories[category].reduce((sum, course) => sum + course.data.credits, 0);
          let sumUCCredits = categories[category].filter(course => course.data.type === 'UC').reduce((sum, course) => sum + course.data.credits, 0);
          const row = document.createElement('tr');

          // Adjust the category name for the Humanities & Management
          let displayCategory = category;
          if (category === "Humanities & Management") {
            displayCategory = "Humanities & Management + Clubs";
            sumCredits += 2; // Add 2 credits for the "Clubs" course
            sumUCCredits += 2; // Add 2 UC credits for the "Clubs" course
          }

          row.innerHTML = `
            <td>${displayCategory}</td>
            <td>${sumUCCredits}</td>
            <td>${sumCredits}</td>
          `;

          creditTable.appendChild(row);
        }
      });

      // Add the total credits row
      const totalCredits = Object.values(categories).flat().reduce((sum, course) => sum + course.data.credits, 0) + 2;  // Add 2 for the "Clubs" course
      const totalRow = document.createElement('tr');
      totalRow.innerHTML = `
        <td><strong>Total Credits</strong></td>
        <td><strong>${totalUC + 2}</strong></td> <!-- Total UC Credits in UC column. Add two for clubs -->
        <td><strong>${totalCredits}</strong></td> <!-- Total Credits in Credits column. Add two for clubs-->
      `;
      totalRow.style.fontWeight = 'bold'; // Make the total credits calculation bold
      creditTable.appendChild(totalRow);

      courseContainer.appendChild(creditTable);

      // Show the courses
      for (const [category, courses] of Object.entries(categories)) {
        const section = document.createElement('div');
        section.classList.add('section');
        section.dataset.credits = Math.max(...courses.map(course => course.data.credits)); // Set the max credits to decide color
        section.dataset.type = 'basket'; // Add type attribute for CSS

        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = `Category: ${category}`;
        section.appendChild(sectionTitle);

        // Sort courses by credits and place completed courses at the end
        courses.sort((a, b) => {
          if (a.data.completed === b.data.completed) {
            return b.data.credits - a.data.credits;
          }
          return a.data.completed - b.data.completed;
        });

        courses.forEach(course => {
          const card = document.createElement('div');
          card.classList.add('course-card');
          if (course.data.completed) {
            card.classList.add('completed');
          }
          card.dataset.credits = course.data.credits; // Add credits data attribute for CSS
          card.dataset.type = course.data.type; // Add type data attribute for CSS

          let courseDetails = `
            <h2>${course.data.name}</h2>
            <p><strong>ID:</strong> ${course.data.id}</p>
            <p><strong>Credits:</strong> ${course.data.credits}</p>
            <p><strong>Type:</strong> ${course.data.type}</p>
          `;

          courseDetails += `<p><strong>Basket:</strong> ${course.data.basket}</p>`;

          if (course.data.prerequisite) {
            courseDetails += `<p><strong>Pre-Requisites:</strong> ${course.data.prerequisite}</p>`;
          }

          if (course.data.antirequisite) {
            courseDetails += `<p><strong>Anti-Requisites:</strong> ${course.data.antirequisite}</p>`;
          }

          card.innerHTML = courseDetails;
          section.appendChild(card);
        });

        courseContainer.appendChild(section);
      }
    }

    // Removed the 'types' view logic
  }

  // Initial display on page load
  displayCourses('baskets');

  // Event listeners for view buttons
  document.getElementById('view-baskets').addEventListener('click', () => {
    displayCourses('baskets');
  });

  // Removed the event listener for the By Types button
});
