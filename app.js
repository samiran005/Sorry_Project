const container = document.querySelector('.inside')
const end = document.querySelector('.end')
// console.log(container)

// To get Property Form root in css
// --------------------------------
const r = document.querySelector(':root')

// **** to get the varible value ****
// ----------------------------------
// const rs = getComputedStyle(r)
// console.log(rs.getPropertyValue('--ballon-color'))


// **** to set the varible value ****
// ----------------------------------
// r.style.setProperty('--ballon-color', 'lightblue')




function createBallon({x, y, text}){
    const div = document.createElement('div')
    div.classList.add('ballon')
    div.style.bottom = `${y}%`
    div.style.left = `${x}%`

    const p = document.createElement('p')
    p.innerText = text

    div.append(p)
    container.append(div)
}

const ballonData = [
    {x: 50, y: 10, speed: 0.3, text: 'Soma'},
    {x: 20, y: 10, speed: 0.3, text: 'I am Sorry'},
    {x: 10, y: 10, speed: 0.3, text: 'This is only for you'},
    {x: 25, y: 10, speed: 0.3, text: 'I love you baby'},
    {x: 40, y: 10, speed: 0.3, text: "Don't be angry with me"},
    {x: 35, y: 10, speed: 0.3, text: 'Please...'},
    {x: 29, y: 10, speed: 0.3, text: 'I Love You Soma'},
]


const data = []
    
    
let i = 0

setInterval(()=>{

    if(i >= 0 && i < ballonData.length){
        data.push(ballonData[i])
        i += 1
    }

    if(i == ballonData.length){
        setTimeout(()=>{
            end.style.display = 'block'
        }, 3000)
    }

}, 2500)

function draw(){
    requestAnimationFrame(draw)

    container.innerHTML = ""
    data.forEach((ele, i)=>{
        ele.y += ele.speed
        createBallon(ele)

    })
}

draw()