const profiles = [
  {
    id: 1,
    img: "images/photosnap.svg",
    company: "Photosnap",
    new:true,
    featured:true,
    role: "Senior Frontend Developer",
    time: "2w ago",
    employmentType: "Full Time",
    location: "USA only",
    skills: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    img: "images/manage.svg",
    company: `Manage`,
    new:true,
    featured:true,
    role: "Fullstack Developer",
    time: "1d ago",
    employmentType: "Part Time",
    location: "Remote",
    skills:["Fullstack","Midweight","Python","React"],
  },
  {
    id: 3,
    img: "images/account.svg",
    company: "Account",
    new:true,
    featured:false,
    role: "Junior Frontend Developer",
    time: "1d ago",
    employmentType: "Part Time",
    location: "USA only",
    skills:["Frontend","Junior","React","Sass","JavaScript"],
  },
  {
    id: 4,
    img: "images/myhome.svg",
    company: "MyHome",
    new:false,
    featured:false,
    role: "Junior Frontend Developer",
    time: "5d ago",
    employmentType: "Contract",
    location: "USA only",
    skills:["Frontend","Junior","CSS","JavaScript"],
  },
  {
    id: 5,
    img: "images/loop-studios.svg",
    company: "Loop Studios",
    new:false,
    featured:false,
    role: "Software Engineer",
    time: "1w ago",
    employmentType: "Full Time",
    location: "UK only",
    skills:["Fullstack","Midweight","JavaScript","Sass","Ruby"],
  },
  {
    id: 6,
    img: "images/faceit.svg",
    company: "Facelt",
    new:false,
    featured:false,
    role: "Junior Backend Developer",
    time: "2w ago",
    employmentType: "Full Time",
   location: "UK only",
   skills:["Backend","Junior","Ruby","RoR"],   
  },
  {
    id: 7,
    img: "images/shortly.svg",
    company: "Shortly",
    new:false,
    featured:false,
    role: "Junior Developer",
    time: "2w ago",
    employmentType: "Full Time",
    location: "Worldwide",
    skills:["Frontend","Junior","HTML","Sass","JavaScript"],
  },
  {
    id: 8,
    img: "images/insure.svg",
    company: "Insure",
    new:false,
    featured:false,
    role: "Junior Frontend Developer",
    time: "2w ago",
    employmentType:"Full Time",
    location: "USA only",
    skills:["Frontend","Junior","Vue","JavaScript","Sass"],
  },
  {
    id: 9,
    img: "images/eyecam-co.svg",
    company:"Eyecam Co.",
    new:false,
    featured:false,
    role:"Full Stack Engineer",
    time: "3w ago",
    employmentType:"Full Time",
    location: "Worldwide",
    skills:["Fullstack","Midweight", "JavaScript","Django","Python"],
  },
  {
    id:10,
    img:"images/the-air-filter-company.svg",
    company:"The Air Filter Company",
    new:false,
    featured:false,
    role:"Front-end Dev",
    time: "1mo ago",
    employmentType:"Part Time",
    location: "Worldwide",
    skills:["Frontend","Junior", "React","Sass","JavaScript"],
  }
];
const profileSection = document.querySelector(".profile-section");
window.addEventListener("DOMContentLoaded",function(){
  let  displayDetails = profiles.map(function(detail){
 const skillsButton = detail.skills.map(skill => `<button class="btn">${skill}</button>`).join("");
 const newButton = detail.new ? '<button id="btn-new">New</button>' : '';
const featuredButton = detail.featured ? '<button id="feature-btn">Featured</button>' : '';

    // console.log(detail);
    return ` <main class="profile-section">
    <div class="main-container">
    <div class="details">
      <img src=${detail.img} alt="profile-pic" id="profile-pic" />
      <section>
        <span id="photosnap">${detail.company}</span>
        ${newButton}
        ${featuredButton}
        <p>${detail.role}</p>
        <div class="job-details">
          <span>${detail.time}</span>
          <span class="period"></span>
          <span>${detail.employmentType}</span>
          <span class="period"></span>
          <span>${detail.location}</span>
        </div>
      </section>
    </div>
    <div class="btn-container">
      ${skillsButton}
    </div>
  </div>
  </main>
`;
  });
  displayDetails = displayDetails.join("");
  profileSection.innerHTML = displayDetails;
});
// function displayDetails(details) {
//     let displayProfiles = details.map(function(detail){
//         return `<div class="main-container">
//         <div class="details">
//           <img src="${detail.img}" alt="profile-pic" id="profile-pic" />
//           <section>
//             <span id="photosnap">${detail.company}</span>
//             <button id="btn-new">${detail.new}</button>
//             <button id="feature-btn">${detail.featured}</button>
//             <p>${detail.role}</p>
//             <div class="job-details">
//               <span>${detail.time}</span>
//               <span class="period"></span>
//               <span>${detail.employmentType}</span>
//               <span class="period"></span>
//               <span>${detail.location}</span>
//             </div>
//           </section>
//         </div>`
//     });
// }