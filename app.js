// ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
//          Function To Fetch GitHub Profile 
// ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
async function fetchProfile(username) {
    const url = `https://api.github.com/users/${username}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status : ${response.status}`);
        }

        const data = await response.json();
        // console.log(data);
        // console.log(formatISODate(data.created_at));

        if (document.getElementById("loader-01")) {
            document.getElementById("loader-01").style.display = "none";
            printGitHubProfile(data);
        } else {
            printGitHubProfile(data);
        }

        fetchRepo(data.login);
    } catch (error) {
        console.error('Error fetching data : ', error);
    }

};
// ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
//          Function To Fetch User's Repo 
// ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
async function fetchRepo(username) {
    const url = `https://api.github.com/users/${username}/repos`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status : ${response.status}`);
        }

        const data = await response.json();
        // console.log(data);
        if (document.getElementById("loader-02")) {
            document.getElementById("loader-02").style.display = "none";
            printGitHubRepository(data);
        } else {
            printGitHubRepository(data);
        }
    } catch (error) {
        console.error('Error fetching data : ', error);
    }

};

// ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
//          Date & Time Formator Function
// ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
function formatISODate(isoString) {
    const date = new Date(isoString);

    // format parts of the date
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    // combine into desired format
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
}

// ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
//           Number Formator Function
// ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


// ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
//      html element selection and adding eventlister
// ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
const username = document.querySelector("#username");
const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", function () {
    fetchProfile(username.value);
})

// ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
//      function to print github profile
// ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
function printGitHubProfile(data) {
    const currentProfile = `
     <div class="profile-img">
                <img src="${data.avatar_url}" alt="profile-img">
            </div>

            <div class="p-1">
                <h2 class="profile-name txt-center">${data.name}</h2>
                <p class="profile-bio txt-center">${data.bio}</p>
            </div>

            <hr>
            <div class="profile-fame txt-center">
                <div class="fame">
                    <h1>${formatNumber(data.followers)}</h1>
                    <p>Followers</p>
                </div>
                <div class="fame">
                    <h1>${formatNumber(data.following)}</h1>
                    <p>Following</p>
                </div>
                <div class="fame">
                    <h1>${formatNumber(data.public_repos)}</h1>
                    <p>Repository</p>
                </div>
            </div>

            <div class="profile-info">
                <div class="info-item">
                    <div class="info-item-icon">
                        <i class="fa-solid fa-location-dot"></i> <span> Location :</span>
                    </div>
                    <p> ${data.location}</p>
                </div>
                <div class="info-item">
                    <div class="info-item-icon">
                        <i class="fa-solid fa-briefcase"></i>
                        <span>Company :</span>
                    </div>
                    <p>${data.company}</p>
                </div>
                <div class="info-item">
                    <div class="info-item-icon">
                        <i class="fa-solid fa-at"></i>
                        <span>GitHub URL :</span>
                    </div>
                    <p><a href="${data.html_url}" target="_blank">Open Link</a></p>
                </div>
            </div>
            <hr>

            <div class="timing">
                <p>Joined : ${formatISODate(data.created_at)}</p>
                <p>Last Update : ${formatISODate(data.updated_at)}</p>
            </div>
    `;

    document.getElementById("user-profile").innerHTML = currentProfile;
};

// ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
//      function to print github repository
// ---->>>>----->>>>>------->>>>>------>>>>>------->>>>
function printGitHubRepository(repos) {

    let reposList = '';
    repos.forEach(repo => {
        reposList += `
      <div class="repository">
  
                     <h2>${repo.name}</h2>
  
                      <div class="repo-info">
                          <p>Language : ${repo.language}</p>
                          <p>GitHub Link : <a href="${repo.html_url}" target="_blank">Open Link</a></p>
                      </div>
                      <hr>
                      <div class="repo-timing">
                          <p>Created : ${formatISODate(repo.created_at)} </p>
                          <p>Last Update : ${formatISODate(repo.updated_at)} </p>
                      </div>
                  </div>
      `;
    });

    document.getElementById("reposList").innerHTML = reposList;
    document.getElementById("total-repos").innerHTML = repos.length;
}