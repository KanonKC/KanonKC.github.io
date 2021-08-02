var week_tab = document.getElementById("week-tab")
var grade_selector = document.getElementsByClassName("grade-selector")

const WeekList = {
    "31/07/2021":[
        {time:"08:30-10:30",grade:6,name:"PAT2 | Chemistry",link:"https://drive.google.com/file/d/17tw61Av15NOWQAS695OSJSDRad6fH5-A/view?usp=sharing"},
        {time:"10:30-12:30",grade:5,name:"Stoichiometry II",link:"https://drive.google.com/file/d/1lvctRd7rb27Nw0NgwFWNwQ_bnfPllDcG/view?usp=sharing"},
        {time:"13:30-15:30",grade:5,name:"Probability",link:"https://drive.google.com/file/d/1gVkxxLm_-DIsSIPZgWJwLMEe2CygIqXK/view?usp=sharing"},
        {time:"15:30-17:30",grade:4,name:"Stoichiometry",link:"https://drive.google.com/file/d/1lFwzPisP2HFV8PQNSElz4ryJpyArDzrG/view?usp=sharing"}
    ],
}

function plotGrid(WeekList){
    emptyGrid()
    for(var i in WeekList){
        for(var j=0;j<WeekList[i].length;j++){
            var tr = document.createElement("tr")
            if(j==0){
                var th = document.createElement("th")
                    th.classList.add("mint-th")
                    th.innerHTML = i
                    th.rowSpan = WeekList[i].length
                    tr.append(th)
            }

            var th = document.createElement("th")
                th.classList.add("mint-th")
                th.innerHTML = WeekList[i][j].time
                tr.append(th)

            var th = document.createElement("th")
                th.classList.add("mint-th")
            var btn = document.createElement("button")
                btn.innerHTML = WeekList[i][j].name
                btn.link = WeekList[i][j].link
                btn.classList.add("btn")
                var grade_color = ["","","","btn-warning","btn-primary","btn-danger"]
                btn.classList.add(grade_color[WeekList[i][j].grade-1])
                btn.classList.add("btn-ongrid")
                btn.addEventListener("click",function(){
                    window.location = this.link
                })
            th.append(btn)
            tr.append(th)

            week_tab.append(tr)
        }
    }
}

function emptyGrid(){
    var th = document.getElementsByClassName("mint-th")
    for(var i=th.length-1;i>=0;i--){
        th[i].remove()
    }
}

plotGrid(WeekList)

function plotByGrade(WeekList,grd){
    emptyGrid()
    var newList = {}
    for(var i in WeekList){
        newList[i] = WeekList[i].filter((g)=>g.grade==grd)
    }
    plotGrid(newList)
}

grade_selector[0].addEventListener("click",function(){plotGrid(WeekList)})
grade_selector[1].addEventListener("click",function(){plotByGrade(WeekList,4)})
grade_selector[2].addEventListener("click",function(){plotByGrade(WeekList,5)})
grade_selector[3].addEventListener("click",function(){plotByGrade(WeekList,6)})

