const observer1 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        const aboutRightContent = entry.target.querySelector('.right-content');
        const aboutLeftContent = entry.target.querySelector('.left-content');
        if(entry.isIntersecting){
            aboutRightContent.classList.add('about-right-content-animation');
            aboutLeftContent.classList.add('about-left-content-animation');
            return;
        }
        aboutRightContent.classList.remove('about-right-content-animation');
        aboutLeftContent.classList.remove('about-left-content-animation');
    });
});
const observer2 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        const animateProgressBar = entry.target.querySelectorAll('.technical-bars .bar .progress-line');
        const animateProgressText = entry.target.querySelectorAll('.technical-bars .bar .info span');
        const htmlSpan = entry.target.querySelector('.html span');
        const cssSpan = entry.target.querySelector('.css span');
        const javascriptSpan = entry.target.querySelector('.javascript span');
        const pythonSpan = entry.target.querySelector('.python span');
        const reactSpan = entry.target.querySelector('.react span');
        // const progressLineBefore = window.getComputedStyle(entry.target.querySelectorAll('.progress-line span'),':before');
        // const progressLineAfter = entry.target.querySelectorAll('.progress-line span::after ');
        
        Array.from(animateProgressBar).forEach((element)=>{
            if(entry.isIntersecting){
                element.classList.add('progress-bar-animation');
                return;
            }
            element.classList.remove('progress-bar-animation');
        })
        Array.from(animateProgressText).forEach((element)=>{
            if(entry.isIntersecting){
                element.classList.add('progress-text-animation');
                return;
            }
            element.classList.remove('progress-text-animation');
        })
        if(entry.isIntersecting){
            htmlSpan.classList.add('html-animation');
            cssSpan.classList.add('css-animation');
            javascriptSpan.classList.add('javascript-animation');
            pythonSpan.classList.add('python-animation');
            reactSpan.classList.add('react-animation');
            
            return;
        }
        htmlSpan.classList.remove('html-animation');
        cssSpan.classList.remove('css-animation');
        javascriptSpan.classList.remove('javascript-animation');
        pythonSpan.classList.remove('python-animation');
        reactSpan.classList.remove('react-animation');
        
        // Array.from(progressLineBefore).forEach((element)=>{
        //     if(entry.isIntersecting){
        //         element.classList.add('progress-line-before-animation');
        //         return;
        //     }
        //     element.classList.remove('progress-line-before-animation');
        // })
        // Array.from(progressLineAfter).forEach((element)=>{
        //     if(entry.isIntersecting){
        //         element.classList.add('progress-line-after-animation');
        //         return;
        //     }
        //     element.classList.remove('progress-line-after-animation');
        // })
        
        // if(entry.isIntersecting){
        //     path1.classList.add('path-1');
        //     return;
        // }
        // // path1.classList.remove('path-1');
        // if(entry.isIntersecting){
            
        //     return;
        // }
        
    });
});
const observer3 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        const radialBar = entry.target.querySelectorAll('#progress-bar');
        const path1 = entry.target.querySelector('#path1');
        const path2 = entry.target.querySelector('#path2');
        const path3 = entry.target.querySelector('#path3');
        const path4 = entry.target.querySelector('#path4');
        const percentAnimation = entry.target.querySelectorAll('.radial-bar .percentage');
        
        
        Array.from(radialBar).forEach((element)=>{
            if(entry.isIntersecting){
                element.classList.add('radial-bar-animation');
                return;
            }
            element.classList.remove('radial-bar-animation');
        });
        Array.from(percentAnimation).forEach((element)=>{
            if(entry.isIntersecting){
                element.classList.add('percentage-animation');
                return;
            }
            element.classList.remove('percentage-animation');
        });
        if(entry.isIntersecting){
            path1.classList.add('path-1-animation');
            path2.classList.add('path-2-animation');
            path3.classList.add('path-3-animation');
            path4.classList.add('path-4-animation');
            return;
        }
        path1.classList.remove('path-1-animation');
        path2.classList.remove('path-2-animation');
        path3.classList.remove('path-3-animation');
        path4.classList.remove('path-4-animation');
    });
});
const observer4 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        const projectsList = entry.target.querySelector('.project-list');
        if(entry.isIntersecting){
            projectsList.classList.add('project-list-animation');
            return;
        }
        projectsList.classList.remove('project-list-animation');
    });
});
const observer5 = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        const contactText = entry.target.querySelector('.contact-text');
        const contactForm = entry.target.querySelector('.contact-form');
        if(entry.isIntersecting){
            contactText.classList.add('contact-text-animation');
            contactForm.classList.add('contact-form-animation');
            return;
        }
        contactText.classList.remove('contact-text-animation');
        contactForm.classList.remove('contact-form-animation');
    });
});
observer1.observe(document.querySelector('.home-content'));
observer1.observe(document.querySelector('.about-content'));
observer2.observe(document.querySelector('.technical-bars'));
observer3.observe(document.querySelector('.radial-bars-container'));
observer4.observe(document.querySelector('.container'));
observer5.observe(document.querySelector('.contact'));