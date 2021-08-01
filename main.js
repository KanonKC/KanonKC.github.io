var week_tab = document.getElementById("week-tab")

const WeekList = [
    {
        date: "31/07/2021",
        time: [
            "8:30-10:30",
            "10:30-12:30",
            "13:30-15:30",
            "15:30-17:30"
        ],
        file: [
            {name:"PAT2 | Chemistry",
            link:"https://drive.google.com/file/d/17tw61Av15NOWQAS695OSJSDRad6fH5-A/view?usp=sharing"},
            {name:"Stoichiometry II",
            link:"https://drive.google.com/file/d/1lvctRd7rb27Nw0NgwFWNwQ_bnfPllDcG/view?usp=sharing"},
            {name:"Probability",
            link:"https://drive.google.com/file/d/1gVkxxLm_-DIsSIPZgWJwLMEe2CygIqXK/view?usp=sharing"},
            {name:"Stoichiometry",
            link:"https://drive.google.com/file/d/1lFwzPisP2HFV8PQNSElz4ryJpyArDzrG/view?usp=sharing"}
        ]
    },
]

for(var i=0;i<WeekList.length;i++){
    
    for(var j=0;j<WeekList[i].time.length;j++){
        var tr = document.createElement("tr")
        if(j==0){
            var th = document.createElement("th")
            th.innerHTML = WeekList[i].date
            th.rowSpan = 4
            tr.append(th)
        }

        var th = document.createElement("th")
        th.innerHTML = WeekList[i].time[j]
        tr.append(th)

        var th = document.createElement("th")
        var btn = document.createElement("button")
            btn.innerHTML = WeekList[i].file[j].name
            btn.link = WeekList[i].file[j].link
            btn.classList.add("btn")
            btn.classList.add("btn-primary")
            btn.classList.add("btn-ongrid")
            btn.addEventListener("click",function(){
                window.location = this.link
            })
        th.append(btn)
        tr.append(th)

        week_tab.append(tr)
    }
}

