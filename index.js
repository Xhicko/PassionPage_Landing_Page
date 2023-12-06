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

