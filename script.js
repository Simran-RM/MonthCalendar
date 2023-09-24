function createCalendar(year,month) {
    //new date object using the current year and month
    const date=new Date(year,month);

    const days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    const months = ["January","February","March","April","May","June","July",
    "August","September","Octorber","November","December"];

    //display the current month and year
    let year_month = `${months[month]} ${year}`;
    document.getElementById('info').textContent = year_month;

    //display the days of the week
    let tableDays = document.getElementById('days');
    for(let i=0;i<days.length;i++){
        let td=document.createElement('td');
        td.textContent=days[i];
        tableDays.append(td);
    }

    //display the dates
    let firstDay = new Date(year,month,1).getDay(); //get the first day of the month
    let numberOfDays = new Date(year,month,0).getDate();//Total number of days in the month

    let tableDates=document.getElementById('dates') ;

    //filling blank until the first day starts
    for(let i=0;i<firstDay;i++){
        let td=document.createElement('td');
        tableDates.appendChild(td);
    }

    //filling up dates
    for(let i=1;i<=numberOfDays;i++){
        let td=document.createElement('td');
        td.textContent=i;
        tableDates.appendChild(td);
        if((i + firstDay) % 7 == 0){
            let tr=document.createElement('tr');
            tableDates.appendChild(tr);
        }
    }




}

let currentYear=new Date().getFullYear();
let currentMonth = new Date().getMonth();

createCalendar(currentYear,currentMonth);