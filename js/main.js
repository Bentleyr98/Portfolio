const links = [
    {
      label: "Week 1 notes",
      url: "week1/index.html"
    },
    {
        label: "Week 2 notes",
        url: "week2/index.html"
    },
    {
      label: "Week 2 Team Assignment",
      url: "week2/teamAssignment/index.html"
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


