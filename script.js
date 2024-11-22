// // ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
// //          API URL To Fetch GitHub Profile 
// // ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
// const APIURL = "https://api.github.com/users/";

// // ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
// //                HTML Element Selection
// // ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
// const main = document.querySelector("#main");
// const searchBox = document.querySelector("#search");
// const searchBtn = document.querySelector("#search-btn");

// // ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
// //          Function To Fetch GitHub Profile 
// // ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
// const getUser = async (username)=>{
//     const response = await fetch(APIURL + username);
//     const data = await response.json();
//     // console.log(repos);
// console.log(data);
//     const card = `
//     <div class="card">
//             <div>
//                 <img src='${data.avatar_url}' alt="" class="avatar">
//             </div>

//             <div class="user-info">
//                 <h2>${data.name}</h2>
//                 <p>${data.bio}</p>

//                 <ul class="info">
//                     <li>${data.followers} <strong>Followers</strong></li>
//                     <li>${data.following} <strong>Following</strong></li>
//                     <li>${data.public_repos} <strong>Repos</strong></li>
//                 </ul>

//                 <div id="repos">
                    
//                 </div>
//             </div>
//         </div>
//     `;

//     main.innerHTML = card;
//     const repos = await getRepos(username);

// };

// // ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
// //      Function To Fetch GitHub Profile's Repos
// // ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
// const getRepos = async (username)=>{
//     const repoBox = document.querySelector("#repos");
//     const resp = await fetch(APIURL + username + "/repos");
//     const data = await resp.json();
//     console.log(data);
//     data.forEach(
//         (repo)=>{
//             const item = document.createElement("a");
//             item.classList.add("repo");
//             item.href = repo.html_url;
//             item.target = "_blank";
//             item.innerText = repo.name;
//             repoBox.appendChild(item);
//         }
//     )
// };

// // ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
// //      Adding EventListener On Search Button
// // ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
// searchBtn.addEventListener("click",getUser(searchBox.value ));