const links = [
    {
      label: "Week 1 Notes",
      url: "week1/index.html"
    },
    {
        label: "Week 2 Notes",
        url: "week2/index.html"
    },
    {
      label: "Week 2 Team Assignment",
      url: "week2/teamAssignment/index.html"
    },
    {
      label: "Week 3 Team Assignment",
      url: "week3/teamAssignment/index.html"
    },

    { 
      label: "Week 3 Notes",
      url: "week3/index.html"
    },

    {
      label: "Week 4 Team Assignment",
      url: "week4/teamAssignment/index.html"
    },

    {
      label: "Week 4 Code Exercise",
      url: "week4/exercise/teamAssignmentRevamp.html"
    },

    // {
    //   label: "Week 4 Code Exercise",
    //   url: "week4/exercise/index.html"
    // },

    {
      label: "Week 5 Team Assignment",
      url: "week5/teamAssignment/index.html"
    },

    {
      label: "Week 5 Code Exercise",
      url: "week5/index.html"
    },

    {
      label: "To Do Application",
      url: "week6/index.html"
    },

    {
      label: "Week 7 Exercise",
      url: "week7/exercise/index.html"
    },

    {
      label: "Week 7 Notes",
      url: "week7/index.html"
    },

    {
      label: "Week 9 Team Assignment",
      url: "week9/teamAssignment/index-START.html"
    },

    {
      label: "Week 9 Exercise",
      url: "week9/exercise/index.html"
    },

    {
      label: "Week 10 Team Assignment",
      url: "week10/teamAssignment/index.html"
    },

    {
      label: "Week 10 Notes",
      url: "week10/index.html"
    },

    {
      label: "Week 11 Team Assignment",
      url: "week11/client/index.html"
    },

    {
      label: "Challenge Two - Celestial Skies",
      url: "Final/index.html"
    }
  ]

  let currentdate = document.lastModified;
  let date = new Date();
  let year = date.getFullYear();
  document.querySelector('.date').textContent = currentdate;
  document.querySelector('.year').textContent = year;



const div = document.querySelector(".links");
const ol = document.createElement('ol');

div.appendChild(ol);


links.forEach(link => {
    document.querySelector('ol').innerHTML += `<li><a href=${link.url}> ${link.label}</a> </li>`;
})


