"use strict";

class Slider {
    constructor() {
        this.source = 'https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/ads';
        this.sliderWrapperId = 'sliderWrapper';
        this.activeSlide = null;
        this.data = null;
        this.getApiData.bind(this);
        this.toggle = false;
        this.wrapper = document.getElementById(this.sliderWrapperId);
        this.switchSlides = 0;

    }

        getApiData = function () {
            fetch(this.source)
                .then((response) => {
                    console.log(this.data);
                    return response.json();
                }).then((data) => {
                    console.log(data);//тут ничего
                this.data = data;
                drawSlider();
            });

        };

    drawSlider() {
        console.log(this.data);
        let toogleClass = (this.toggle === true) ? 'show-toogle' : 'hide-toogle';
        let html = `<div class="slides">`;
        let i = 0;
        document.getElementById(this.sliderWrapperId).innerHTML = '';
        this.activeSlide = this.activeSlide === null ? 0 : this.activeSlide;
        this.data.forEach(function (slide) {
            let activeClass = this.activeSlide === i ? 'show' : 'hide';
            html += `<div class="slide   ${activeClass}" id="slide-${i}" >`;
            html += `<div class="img"><img src="${slide.img}"></div>`;
            html += `<div class="title">${slide.title} </div>`;
            html += `<div class="description ${toogleClass}" ><p>${slide.description}</p></div>`;
            html += `</div>`;
            i++;
        }, this);

        html += `</div>`;
        html += `<div class="buttons bottom right">` +
            `<div class="button" id="toogle"> toggle</div>` +
            `<div class="button" id="prev"><<< Prev</div>` +
            `<div class="button" id="next">Next >>></div>`;
        html += '</div>';
        this.wrapper.innerHTML = html;
        this.addEventListener();
    }

    addEventListener() {
        let prevBtn = document.querySelector("#prev");
        let nextBtn = document.querySelector("#next");
        let toogleBtn = document.querySelector("#toogle");

        prevBtn.addEventListener('click', () => this.prev(), false);
        nextBtn.addEventListener('click', () => this.next(), false);
        toogleBtn.addEventListener('click', () => this.toogler(), false);
    }

    next() {
        this.switchSlides = this.activeSlide;
        this.activeSlide = this.activeSlide < this.data.length - 1 ? this.activeSlide + 1 : 0;
        this.changeSlide();
    }

    prev() {
        this.switchSlides = this.activeSlide;
        this.activeSlide = this.activeSlide === 0 ? this.data.length - 1 : this.activeSlide - 1;
        this.changeSlide();
    }

    toogler() {
        this.toggle = !this.toggle;
        this.toggleDescription();
    }

    changeSlide() {
        let previeusElement = document.querySelector(`#slide-${this.switchSlides}`);
        let prevElDescr = document.querySelectorAll(`#slide-${this.switchSlides} .description`);
        let activeElement = document.querySelector(`#slide-${this.activeSlide}`);
        this.toggle = false;
        previeusElement.classList.remove("show");
        previeusElement.classList.add("hide");
        activeElement.classList.remove("hide");
        previeusElement.classList.add("show");

        if (prevElDescr[0].classList.contains("show-toogle")) {
            prevElDescr[0].classList.remove("show-toogle");
            prevElDescr[0].classList.add("hide-toogle");
        }
    }

    toggleDescription() {
        let activateClass = (this.toggle === true) ? 'show-toogle' : 'hide-toogle';
        let removeClass = (this.toggle === true) ? 'hide-toogle' : 'show-toogle';
        let activeElement = document.querySelectorAll(`#slide-${this.activeSlide} .description`);

        activeElement[0].classList.remove(`${removeClass}`);
        activeElement[0].classList.add(`${activateClass}`);
    }
}





