<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
    import 'chartjs-adapter-date-fns'; // Import the date adapter
  
    const data = {
      labels: ['01/01', '01/15', '02/01', '02/15', '03/01', '03/15'], // Dates in MM/DD format
      datasets: [
        {
          label: 'Soft',
          data: [1, 2, 3, 1, 2, 3], // Data for Category A
          borderColor: 'red',
          backgroundColor: 'transparent'
        },
        {
          label: 'Medium',
          data: [3, 1, 2, 3, 1, 2], // Data for Category B
          borderColor: 'blue',
          backgroundColor: 'transparent'
        },
        {
          label: 'Hard',
          data: [2, 3, 1, 2, 3, 1], // Data for Category C
          borderColor: 'green',
          backgroundColor: 'transparent'
        }
      ]
    };
  
    onMount(() => {
      const ctx = document.querySelector('#PoopChart canvas').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          scales: {
            x: {
              type: 'time',
              time: {
                parser: 'MM/dd',
                tooltipFormat: 'MM/dd',
                unit: 'day',
                displayFormats: {
                  day: 'MM/dd'
                }
              },
              title: {
                display: true,
                text: 'Date'
              }
            },
            y: {
              type: 'category',
              labels: ['Soft', 'Medium', 'Hard'],
              title: {
                display: true,
                text: 'Category'
              }
            }
          }
        }
      });
    });
  </script>
  
  <section id="PoopChart" class="aspect-video bg-white rounded-lg p-4 max-w-xl w-full">
    <canvas></canvas>
  </section>
  