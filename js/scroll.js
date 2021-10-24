const sections = document.querySelectorAll("section");
const lis = document.querySelectorAll("ul li");
const path = document.querySelector("path");
let posArr = [];
const base = -300;

for(let el of sections){
    // console.log(el);
    posArr.push(el.offsetTop);
    // console.log(posArr);
}

window.addEventListener("scroll", e  => {
    let scroll = window.scrollY || window.pageYOFFset;

    sections.forEach((el, index) => {
        if(scroll >= posArr[index]+base){
            //모든 버튼과 박스를 반복돌면서 비활성화 초기화
            lis.forEach((el, i) => {
                el.classList.remove("on");
                sections[i].classList.remove("on");
            })

            //현재 순번인 index번째 버튼과 박스만 활성화
            lis[index].classList.add("on");
            sections[index].classList.add("on");
        }

        if (scroll >= posArr[2] + base){
            let boxScroll = scroll - (posArr[2] + base);
            let result = 1600 - (boxScroll*5);
            if (result<0) result = 0;
            path.style.strokeDashoffset = result;
        }
    });
});


lis.forEach((el, index) => {
    // console.log(el);
    el.addEventListener("click", e => {
        new Anime(window, {
            prop: "scroll",
            value:posArr[index],
            duration: 500
        });
    });
});
