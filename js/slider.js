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
    }

    drawSlider() {
        document.getElementById(this.sliderWrapperId).innerHTML = '';

        this.activeSlide = this.activeSlide === null ? 0 : this.activeSlide;
        console.log(this.activeSlide);
        const wrapper = document.getElementById(this.sliderWrapperId);
        let html = '<div class="slides">';
        for (var i = 0; i < this.data.length; i++) {
            let activeClass = this.activeSlide === i ? 'show' : 'hide';

            html += '<div class="slide ' + activeClass + ' " >';
            html += '<div class="img"><img src="' + this.data[i]['img'] + '"></div>';
            html += '<div class="title">' + this.data[i]['title'] + ' </div>';


            html += '</div>';
        }
        html += '</div>';
        html += '<div class="buttons bottom right"> ' +
            '<div class="button" id="prev"><<< Prev</div>' +
            '<div class="button" id="next">Next >>></div>';


        html += '</div>';
        wrapper.insertAdjacentHTML("afterbegin", html);

        this.addEventListener();
    }

    addEventListener() {
        document.getElementById('prev').addEventListener('click', this.prev.bind(this), false);
        document.getElementById('next').addEventListener('click', this.next.bind(this), false);
    }

    next(obj) {
        this.activeSlide = this.activeSlide < this.data.length - 1 ? this.activeSlide = this.activeSlide + 1 : this.activeSlide = 0;
        this.drawSlider();

    }

    prev(obj) {
        this.activeSlide = this.activeSlide === 0 ? this.activeSlide = this.data.length - 1 : this.activeSlide = this.activeSlide - 1;
        this.drawSlider();
    }

}





