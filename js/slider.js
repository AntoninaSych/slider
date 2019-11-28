"use strict";

class Slider {
    constructor() {
        this.source = 'https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/ads';
        this.sliderWrapperId = 'sliderWrapper';
        this.activeSlide = null;
        this.data = [
            {
                "title": "Time to Share: 6 for $3.99*",
                "img": "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640170/comp_plate_promo1_wsmolg.png",
                "description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
                "note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
                "productUrl": "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640170/comp_plate_promo1_wsmolg.png"
            },
            {
                "title": "Rise 'n shine",
                "img": "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640171/comp_plate_promo2_nlqjfe.png",
                "description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
                "note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
                "productUrl": "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640171/comp_plate_promo2_nlqjfe.png"
            },
            {
                "title": "PM Snackers: Brownie Bites",
                "img": "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640171/comp_plate_promo4_f87x7g.png",
                "description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
                "note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
                "productUrl": "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640171/comp_plate_promo4_f87x7g.png"
            },
            {
                "title": "PM Snackers: Brownie Bites",
                "img": "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640171/comp_plate_promo3_wnp43x.png",
                "description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
                "note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
                "productUrl": "https://res.cloudinary.com/dx4wkpab8/image/upload/v1573640171/comp_plate_promo4_f87x7g.png"
            }
        ];
        this.toggle = false;
        this.wrapper = document.getElementById(this.sliderWrapperId);
        this.switchSlides = 0;
    }

    drawSlider() {
        document.getElementById(this.sliderWrapperId).innerHTML = '';
        this.activeSlide = this.activeSlide === null ? 0 : this.activeSlide;
        let toogleClass = (this.toggle === true) ? 'show-toogle' : 'hide-toogle';
        let html = `<div class="slides">`;
        let i = 0;
        this.data.forEach(function (slide) {
            let activeClass = this.activeSlide === i ? 'show' : 'hide';
            html += `<div class="slide   ${activeClass}" id="slide-${i}" >`;
            html += `<div class="img"><img src="${slide.img}"></div>`;
            html += `<div class="title">${slide.title} </div>`;
            html += `<div class="description ${toogleClass}" >  <p>${slide.description}</p></div>`;
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
        this.drawSlider();
    }

    changeSlide() {
        let previeusElement = document.querySelector(`#slide-${this.switchSlides}`);
        let activeElement = document.querySelector(`#slide-${this.activeSlide}`);
        previeusElement.classList.remove("show");
        previeusElement.classList.add("hide");
        activeElement.classList.remove("hide");
        previeusElement.classList.add("show");
     }
}





