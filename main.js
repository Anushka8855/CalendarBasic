const days = document.querySelector(".days");

let date = new Date(),
year = date.getFullYear(),
month = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const calendar = () => {
    let dayone = new Date(year, month, 1).getDay(),
    lastDate = new Date(year, month + 1, 0).getDate(),
    lastDay = new Date(year, month, lastDate).getDay();
    monthlastdate = new Date(year, month, 0).getDate();

    
}

calendar();