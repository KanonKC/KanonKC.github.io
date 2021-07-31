var week_tab = document.getElementById("week-tab")


const WeekList = [
    {
        date: "31/07/2021",
        time: ["8:30","9:30","10:30"],
        file: "https://bit.ly/3xgYbm3"
    }
]

for(var i=0;i<WeekList.length;i++){

    var tr = document.createElement("tr")

    var th = document.createElement("th")
    th.innerHTML = WeekList[i].date
    tr.append(th)

    var th = document.createElement("th")
    th.innerHTML = WeekList[i].time[0]
    tr.append(th)

    var th = document.createElement("th")
    th.innerHTML = "Click"
    th.className = `linkdownload`
    tr.append(th)
    
    week_tab.append(tr)
}

var link_down = document.getElementsByClassName("linkdownload")[0]
link_down.addEventListener("click",function(){
    window.location = WeekList[0].file
})

