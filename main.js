// var week_tab = document.getElementById("week-tab")
// var grade_selector = document.getElementsByClassName("grade-selector")

// const WeekList = {
//     /* DATA STRUCTURE
//     "00/00/2021":[
//         {time:"08:30-10:30",grade:6,subject:"Chemistry",name:" - ",
//         link:""},
//         {time:"10:30-12:30",grade:5,subject:"Chemistry",name:" - ",
//         link:""},
//         {time:"13:30-15:30",grade:5,subject:"Mathematic",name:" - ",
//         link:""},
//         {time:"15:30-17:30",grade:4,subject:"Chemistry",name:" - ",
//         link:""}
//     ],
//     */
//     "04/09/2021":[
//         {time:"08:30-10:30",grade:6,subject:"Chemistry",name:"แนวข้อสอบสามัญ ชุด 5 (18-50)",
//         link:"https://github.com/KanonKC/Mint-Tutor-File/raw/main/20210904/Chem%2030%203%204-9-2021%20(2).pdf"},
//         {time:"10:30-12:30",grade:5,subject:"Chemistry",name:"Rate Of Reaction | อัตราการเกิดปฏิกริยาเคมี",
//         link:"https://github.com/KanonKC/Mint-Tutor-File/raw/main/20210904/M52564C12%20Rate%20of%20Reaction.pdf"},
//         {time:"13:30-15:30",grade:5,subject:"Mathematic",name:" - ",
//         link:""},
//         {time:"15:30-17:30",grade:4,subject:"Chemistry",name:" - ",
//         link:""}
//     ],
//     "03/09/2021":[
//         {time:"18:30-20:30",grade:5,subject:"Mathematic",name:"Vector | โจทย์ชุดที่ 3",
//         link:"https://github.com/KanonKC/Mint-Tutor-File/raw/main/20210903/vector_3d.pdf"}
//     ],
//     "28/08/2021":[
//         {time:"08:30-10:30",grade:6,subject:"Chemistry",name:"แนวข้อสอบสามัญ ชุด 3 (18-50)",
//         link:"https://github.com/KanonKC/Mint-Tutor-File/raw/main/20210829/chem%20%2023%2027%2028-8-2021.pdf"},
//         {time:"10:30-12:30",grade:5,subject:"Chemistry",name:"Rate Of Reaction | Introduction",
//         link:"https://github.com/KanonKC/Mint-Tutor-File/raw/main/20210829/M52564C12%20Rate%20of%20Reaction.pdf"},
//         {time:"13:30-15:30",grade:5,subject:"Mathematic",name:"Probability | Combination",
//         link:"https://github.com/KanonKC/Mint-Tutor-File/raw/main/20210829/M52564M%20Probability.pdf"},
//         {time:"15:30-17:30",grade:4,subject:"Chemistry",name:"Stoichiometry II | การเตรียมความเข้มข้น",
//         link:"https://github.com/KanonKC/Mint-Tutor-File/raw/main/20210829/M42564C15%20Stoi%20II.pdf"}
//     ],
//     "31/07/2021":[
//         {time:"08:30-10:30",grade:6,subject:"Chemistry",name:"PAT2 ชุด 3 (14-39)",
//         link:"https://drive.google.com/file/d/17tw61Av15NOWQAS695OSJSDRad6fH5-A/view?usp=sharing"},
//         {time:"10:30-12:30",grade:5,subject:"Chemistry",name:"Stoichiometry II | Colligative Properties",
//         link:"https://drive.google.com/file/d/1lvctRd7rb27Nw0NgwFWNwQ_bnfPllDcG/view?usp=sharing"},
//         {time:"13:30-15:30",grade:5,subject:"Mathematic",name:"Probability | Combination",
//         link:"https://drive.google.com/file/d/1gVkxxLm_-DIsSIPZgWJwLMEe2CygIqXK/view?usp=sharing"},
//         {time:"15:30-17:30",grade:4,subject:"Chemistry",name:"Stoichiometry | มวลอะตอมเฉลี่ย + กฎทรงมวล",
//         link:"https://drive.google.com/file/d/1lFwzPisP2HFV8PQNSElz4ryJpyArDzrG/view?usp=sharing"}
//     ],
// }

// function plotGrid(WeekList){
//     emptyGrid()
//     for(var i in WeekList){
//         for(var j=0;j<WeekList[i].length;j++){
//             var tr = document.createElement("tr")
//             if(j==0){
//                 var th = document.createElement("th")
//                     th.classList.add("mint-th")
//                     th.innerHTML = i
//                     th.rowSpan = WeekList[i].length
//                     tr.append(th)
//             }

//             var th = document.createElement("th")
//                 th.classList.add("mint-th")
//                 th.innerHTML = WeekList[i][j].time
//                 tr.append(th)

//             var th = document.createElement("th")
//                 th.classList.add("mint-th")
//                 th.innerHTML = WeekList[i][j].subject
//                 tr.append(th)

//             var th = document.createElement("th")
//                 th.classList.add("mint-th")
//             var btn = document.createElement("button")
//                 btn.innerHTML = WeekList[i][j].name
//                 btn.link = WeekList[i][j].link
//                 btn.classList.add("btn")
//                 var grade_color = ["","","","btn-warning","btn-primary","btn-danger"]
//                 btn.classList.add(grade_color[WeekList[i][j].grade-1])
//                 btn.classList.add("btn-ongrid")
//                 btn.addEventListener("click",function(){
//                     window.location = this.link
//                 })
//             th.append(btn)
//             tr.append(th)

//             week_tab.append(tr)
//         }
//     }
// }

// function emptyGrid(){
//     var th = document.getElementsByClassName("mint-th")
//     for(var i=th.length-1;i>=0;i--){
//         th[i].remove()
//     }
// }

// function plotByGrade(WeekList,grd){
//     emptyGrid()
//     var newList = {}
//     for(var i in WeekList){
//         newList[i] = WeekList[i].filter((g)=>g.grade==grd)
//     }
//     plotGrid(newList)
// }

// plotGrid(WeekList)
// grade_selector[0].addEventListener("click",function(){plotGrid(WeekList)})
// grade_selector[1].addEventListener("click",function(){plotByGrade(WeekList,4)})
// grade_selector[2].addEventListener("click",function(){plotByGrade(WeekList,5)})
// grade_selector[3].addEventListener("click",function(){plotByGrade(WeekList,6)})

// const axios = require('axios')

const RevisionFile = {
    week_tab: document.getElementById("week-tab"),
    grade_selector: document.getElementsByClassName("grade-selector"),
    data: {
        /* DATA STRUCTURE
        "00/00/2021":[
            {time:"08:30-10:30",grade:6,subject:"Chemistry",name:" - ",
            link:""},
            {time:"10:30-12:30",grade:5,subject:"Chemistry",name:" - ",
            link:""},
            {time:"13:30-15:30",grade:5,subject:"Mathematic",name:" - ",
            link:""},
            {time:"15:30-17:30",grade:4,subject:"Chemistry",name:" - ",
            link:""}
        ],
        */
        "04/09/2021":[
            {time:"08:30-10:30",grade:6,subject:"Chemistry",name:"แนวข้อสอบสามัญ ชุด 5 (18-50)",
            link:"https://github.com/KanonKC/Mint-Tutor-File/raw/main/20210904/Chem%2030%203%204-9-2021%20(2).pdf"},
            {time:"10:30-12:30",grade:5,subject:"Chemistry",name:"Rate Of Reaction | อัตราการเกิดปฏิกริยาเคมี",
            link:"https://github.com/KanonKC/Mint-Tutor-File/raw/main/20210904/M52564C12%20Rate%20of%20Reaction.pdf"},
            {time:"13:30-15:30",grade:5,subject:"Mathematic",name:"Probability | Binomial Theorem",
            link:"https://github.com/KanonKC/Mint-Tutor-File/raw/main/20210904/M52564M%20Probability(1).pdf"},
            {time:"15:30-17:30",grade:4,subject:"Chemistry",name:"Stoichiometry II | การผสมสารความเข้มข้นต่างกัน",
            link:"https://github.com/KanonKC/Mint-Tutor-File/raw/main/20210904/M42564C15%20Stoi%20II(1).pdf"}
        ],
        "03/09/2021":[
            {time:"18:30-20:30",grade:5,subject:"Mathematic",name:"Vector | โจทย์ชุดที่ 3",
            link:"https://github.com/KanonKC/Mint-Tutor-File/raw/main/20210903/vector_3d.pdf"}
        ],
        "28/08/2021":[
            {time:"08:30-10:30",grade:6,subject:"Chemistry",name:"แนวข้อสอบสามัญ ชุด 3 (18-50)",
            link:"https://github.com/KanonKC/Mint-Tutor-File/raw/main/20210829/chem%20%2023%2027%2028-8-2021.pdf"},
            {time:"10:30-12:30",grade:5,subject:"Chemistry",name:"Rate Of Reaction | Introduction",
            link:"https://github.com/KanonKC/Mint-Tutor-File/raw/main/20210829/M52564C12%20Rate%20of%20Reaction.pdf"},
            {time:"13:30-15:30",grade:5,subject:"Mathematic",name:"Probability | Combination",
            link:"https://github.com/KanonKC/Mint-Tutor-File/raw/main/20210829/M52564M%20Probability.pdf"},
            {time:"15:30-17:30",grade:4,subject:"Chemistry",name:"Stoichiometry II | การเตรียมความเข้มข้น",
            link:"https://github.com/KanonKC/Mint-Tutor-File/raw/main/20210829/M42564C15%20Stoi%20II.pdf"}
        ],
        "31/07/2021":[
            {time:"08:30-10:30",grade:6,subject:"Chemistry",name:"PAT2 ชุด 3 (14-39)",
            link:"https://drive.google.com/file/d/17tw61Av15NOWQAS695OSJSDRad6fH5-A/view?usp=sharing"},
            {time:"10:30-12:30",grade:5,subject:"Chemistry",name:"Stoichiometry II | Colligative Properties",
            link:"https://drive.google.com/file/d/1lvctRd7rb27Nw0NgwFWNwQ_bnfPllDcG/view?usp=sharing"},
            {time:"13:30-15:30",grade:5,subject:"Mathematic",name:"Probability | Combination",
            link:"https://drive.google.com/file/d/1gVkxxLm_-DIsSIPZgWJwLMEe2CygIqXK/view?usp=sharing"},
            {time:"15:30-17:30",grade:4,subject:"Chemistry",name:"Stoichiometry | มวลอะตอมเฉลี่ย + กฎทรงมวล",
            link:"https://drive.google.com/file/d/1lFwzPisP2HFV8PQNSElz4ryJpyArDzrG/view?usp=sharing"}
        ],
    },
    plotGrid: function(obj_data = this.data){
        this.emptyGrid()
        for(var i in obj_data){
            for(var j=0;j<obj_data[i].length;j++){
                var tr = document.createElement("tr")
                if(j==0){
                    var th = document.createElement("th")
                        th.classList.add("mint-th")
                        th.innerHTML = i
                        th.rowSpan = obj_data[i].length
                        tr.append(th)
                }
    
                var th = document.createElement("th")
                    th.classList.add("mint-th")
                    th.innerHTML = obj_data[i][j].time
                    tr.append(th)
    
                var th = document.createElement("th")
                    th.classList.add("mint-th")
                    th.innerHTML = obj_data[i][j].subject
                    tr.append(th)
    
                var th = document.createElement("th")
                    th.classList.add("mint-th")
                var btn = document.createElement("button")
                    btn.innerHTML = obj_data[i][j].name
                    btn.link = obj_data[i][j].link
                    btn.classList.add("btn")
                    var grade_color = ["","","","btn-warning","btn-primary","btn-danger"]
                    btn.classList.add(grade_color[obj_data[i][j].grade-1])
                    btn.classList.add("btn-ongrid")
                    btn.addEventListener("click",function(){
                        window.location = this.link
                    })
                th.append(btn)
                tr.append(th)
    
                this.week_tab.append(tr)
            }
        }
    },
    emptyGrid: function(){
        var th = document.getElementsByClassName("mint-th")
        for(var i=th.length-1;i>=0;i--){
            th[i].remove()
        }
        for(var i=1;i<this.week_tab.rows.length;i++){
            this.week_tab.rows[1].remove()
        }
    },
    plotByGrade: function(grd){
        this.emptyGrid()
        var newList = {}
        for(var i in this.data){
            newList[i] = this.data[i].filter((g)=>g.grade==grd)
        }
        this.plotGrid(newList)
    }
}


RevisionFile.plotGrid()
RevisionFile.grade_selector[0].addEventListener("click",function(){RevisionFile.plotGrid()})
RevisionFile.grade_selector[1].addEventListener("click",function(){RevisionFile.plotByGrade(4)})
RevisionFile.grade_selector[2].addEventListener("click",function(){RevisionFile.plotByGrade(5)})
RevisionFile.grade_selector[3].addEventListener("click",function(){RevisionFile.plotByGrade(6)})

// ==================================================================================================================

const SummaryTable = {
    week_tab: document.getElementById("week-tab-2"),
    btn_color: {
        "Physic": "btn-primary",
        "Chemistry": "btn-warning",
        "Calculus": "btn-danger"
    },
    data:{
        "Physic":[
            {name:"Introduction | บทนำ",link:"https://drive.google.com/file/d/1MLjksUHVR22YB4B6fQUpETqGclEWC-l-/view?usp=sharing"},
            {name:"Linear Motion | การเคลื่อนที่เส้นตรง",link:"https://drive.google.com/file/d/1KxK7ZTZIqVbfeXNs_T6QKWXhDzv0YCOi/view?usp=sharing"},
            {name:"Projectile | การเคลื่อนที่แบบโปรเจกไทล์",link:"https://drive.google.com/file/d/1IWt85dgdzYH4pxCJqsB_eQtaANfPS9zr/view?usp=sharing"},
            {name:"Solid | สมบัติของแข็ง",link:"https://drive.google.com/file/d/1AFAfAAwrdCV3bGEmdr0X6K22JFZ3AKM3/view?usp=sharing"},
            {name:"Equilibrium | สมดุลกล",link:"https://drive.google.com/file/d/1l9JtILWsKRqaYCosnLx1W71v5MrHNyZ-/view?usp=sharing"},
            {name:"Work Energy & Power | งาน และพลังงาน",link:"https://drive.google.com/file/d/1SZg8O73dHf0L7L8ffJ9bgep7rarnDIho/view?usp=sharing"},
            {name:"Momentum | โมเมนตัม",link:"https://drive.google.com/file/d/1o4wsvYE1UbWBCB751tCFZ0PQcVOkdy7t/view?usp=sharing"},
            {name:"Liquid | ของเหลว",link:"https://drive.google.com/file/d/1tFW2tKKCaNkQ7TNv9lH9N0m4LMnwUPj7/view?usp=sharing"},
            {name:"Flow | ของไหล",link:"https://drive.google.com/file/d/11bY0T8AdtgR2us8Su56VV0d9qabZz75A/view?usp=sharing"},
            {name:"Gas & Kinetic Energy | ทฤษฎีจลน์แก็ส",link:"https://drive.google.com/file/d/1tKdpdiVaGZUAhu9swkLY_BmH8atdOkEU/view?usp=sharing"},
            {name:"Heat & 1St Law of Thermodynamic | ความร้อน และเทอร์โมไดนามิกส์",link:"https://drive.google.com/file/d/1jUci6KsERPta8PGVGNROCiOpUuYfP4w9/view?usp=sharing"},
            {name:"Electrostatic | ไฟฟ้าสถิต",link:"https://drive.google.com/file/d/1ZTi7CUVeryXsOOW-b1a3HZ2zn4pgX0s8/view?usp=sharing"},
            {name:"Direct Current | ไฟฟ้ากระแสตรง",link:"https://drive.google.com/file/d/1wQz64aR1szHHQ-i8eJHUTt4523evMux7/view?usp=sharing"},
            {name:"Electromagnetic | แม่เหล็กไฟฟ้า",link:"https://drive.google.com/file/d/1kZJU3qo3fWrsyZjd2Z1t2igbgbb3vyAy/view?usp=sharing"},
            {name:"Alternating Current | ไฟฟ้ากระแสสลับ",link:"https://drive.google.com/file/d/1iLEieDQCxndLbCJQVlwgy_3SV370AODA/view?usp=sharing"},
        ],
        "Chemistry":[
            {name:"Electrochemistry | ไฟฟ้าเคมี",link:"https://drive.google.com/file/d/1JbXivM3dYulvmt0O7763xLKgAYGI9Dbe/view?usp=sharing"},
            {name:"Organic Chemistry | เคมีอินทรีย์",link:"https://drive.google.com/file/d/1W91Sun-Z0f2uK9iAZeoemUWYt2rzY2Vo/view?usp=sharing"},
        ],
        "Calculus":[
            {name:"Polar Coordinate | ระบบพิกัดเชิงขั้ว",link:"https://drive.google.com/file/d/13XulWtumJOPqI_rXrsCIXTl1FUZoj8sn/view?usp=sharing"},
            {name:"Series | อนุกรม",link:"https://drive.google.com/file/d/1fLH_FlJ60fS1CHDCOKTGU8c4A6paWdXq/view?usp=sharing"},
        ]
    },
    plotGrid: function(){
        for(var i in this.data){
            for(var j=0;j<this.data[i].length;j++){
                var tr = document.createElement("tr")
                if(j==0){
                    var th = document.createElement("th")
                        th.innerHTML = i
                        th.rowSpan = this.data[i].length
                    tr.append(th)
                }

                var th = document.createElement("th")
                var btn = document.createElement("button")
                    btn.classList.add("btn")
                    btn.classList.add(this.btn_color[i])
                    btn.link = this.data[i][j].link
                    btn.innerHTML = this.data[i][j].name
                    btn.addEventListener("click",function(){
                        window.location = this.link
                    })
                th.append(btn)
                tr.append(th)
                this.week_tab.append(tr)
            }
        }
    }
}

SummaryTable.plotGrid()

// ==================================================================================================================