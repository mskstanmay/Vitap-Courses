document.addEventListener('DOMContentLoaded', () => {
    const cy = cytoscape({
      container: document.getElementById('cy'),
      elements: courseData,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': (ele) => {
              const credits = ele.data('credits');
              if (credits === 1) return '#FF4136';  // Red
              if (credits === 2) return '#FF851B';  // Orange
              if (credits === 3) return '#2ECC40';  // Green
              if (credits === 4) return '#0074D9';  // Blue
              return '#B0BEC5';  // Default color
            },
            'label': 'data(name)',
            'text-valign': 'center',
            'text-halign': 'center',
            'shape': 'roundrectangle',  // Rounded rectangle
            'width': 'label',
            'height': 'label',
            'padding': 10,
            'border-color': '#777',
            'border-width': 1,
            'color': '#333',
            'font-size': '12px'
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 2,
            'line-color': '#aaa',
            'target-arrow-color': '#aaa',
            'target-arrow-shape': 'triangle',
            'label': 'data(label)',
            'font-size': '10px',
            'curve-style': 'bezier'  // Smooth curve for edges
          }
        }
      ],
      layout: {
        name: 'breadthfirst',
        roots: '#CSE',
        directed: true,
        padding: 10
      }
    });
  
    // View Selector
    document.getElementById('view-select').addEventListener('change', (event) => {
      const view = event.target.value;
      updateLayout(view);
    });
  
    function updateLayout(view) {
      if (view === 'baskets') {
        cy.nodes().forEach(node => {
          if (node.data('basket') === 'Engineering Foundation' || node.data('basket') === 'Science Basket' || node.data('basket') === 'Projects and Internships' || node.data('basket') === 'Humanities & Management + Clubs') {
            node.removeClass('hidden');
          } else {
            node.addClass('hidden');
          }
        });
        cy.layout({
          name: 'breadthfirst',
          roots: '#CSE',
          directed: true,
          padding: 10
        }).run();
      } else if (view === 'types') {
        cy.nodes().forEach(node => {
          if (node.data('type') === 'UC' || node.data('type') === 'PC' || node.data('type') === 'UE' || node.data('type') === 'PE') {
            node.removeClass('hidden');
          } else {
            node.addClass('hidden');
          }
        });
        cy.layout({
          name: 'grid',
          rows: 1
        }).run();
      }
    }
  });
  