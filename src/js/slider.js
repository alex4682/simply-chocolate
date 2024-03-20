const mySlider = new Splide('#mySlider', {
    perPage: 4,
    gap: "18px",
    type: 'loop',
    focus: 0,
    omitEnd: true,
    pagination: true,
    breakpoints: {
        768: {
            pagination: true,
            perPage: 1,
            arrows: false,
        },
        1200: {
            perPage: 2,
            arrows: true,
        },
    }
})

mySlider.mount()