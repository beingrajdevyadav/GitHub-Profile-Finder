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
        console.log(data);

        console.log(formatISODate(data.created_at));


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
function formatNumber(num){
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