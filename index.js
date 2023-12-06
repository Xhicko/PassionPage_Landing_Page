document.addEventListener('DOMContentLoaded', function(){
        // Variable refrences to html documents
        let navParent = document.querySelector('.Nav_Parent')
        let navChild = document.querySelector('.Nav_Child');

        // script to reveal First dropdown menu and activate dropdown animation
        navParent.addEventListener('click', function(){
                navChild.classList.toggle('Activate')
                rotateToggle(navParent);
        })

        // script  to control dropdown icon
        function rotateToggle(parentElement) {
        let child1_svg = parentElement.querySelector('svg')
        child1_svg.classList.toggle('rotate-clockwise');
        }

        // Script to reveal and hide navigation Menu 
        let Navlist_Listener = document.querySelector('.Navlist_Listener')
        let Reveal_NavList = document.querySelector('.Reveal_NavList')
        Navlist_Listener.addEventListener('click', function(){
            Reveal_NavList.classList.toggle('Activate')
        })
})


const backToTopButton = document.getElementById('Back_To_Top');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 4000) { // Adjust this value as needed
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.onload = function() {
  var inputFields = document.querySelectorAll('.Contact_Form input');
  inputFields.forEach(function(input) {
      input.blur(); // Remove focus from all input fields
  });
};