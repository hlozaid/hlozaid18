// toggle icon navbar
 
// scroll sections
Let sections = document.querySelectorAll('section')
Let nqvLinks = document.querySelectorAll('header nav a');

window.onscroll = > () => {
    sections.forEach(sec => {
        Let top = window.scrollY;
        Let offset = sec.offsetTop - 100;
        Let height = sec.offsetHeight;
        Let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href#=' + id +']').classList.add('active');
            })
      
        }
    });
}
 
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    // remove toggle icon and navbar when click navbar links (scroll)
 
    // animation footer on scroll
}