window.onload = function() {

    // Mobile Menu

    let mobileMenuBtn = document.querySelector('.navigation--mobile__btn');
    let mobileMenu = document.querySelector('#mobile-menu');
    let flag = false;

    mobileMenuBtn.onclick = function() {

        if (!flag) {
            mobileMenu.style.left = '0px';
            flag = true;
        } else {
            mobileMenu.style.left = '-1000px';
            flag = false;
        }
    }



    // Modals 

    let loginBtn = document.querySelector('.user__navigation-link');
    let overlay = document.querySelector('.overlay');
    let modal = document.querySelector('.modal');
    let closeModalBtn = document.querySelector('.modal__btn--close');

    loginBtn.onclick = function(e) {
        e.preventDefault();

        overlay.style.display = 'block';
        modal.classList.add('show-modal');

    }

    closeModalBtn.onclick = function() {
       if (modal.classList.contains('show-modal')) {
           modal.classList.remove('show-modal');
           modal.classList.add('hide-modal');
       }
          setTimeout(() => {
              overlay.style.display = 'none';

              if(modal.classList.contains('hide-modal')) {
                  modal.classList.remove('hide-modal');
              }
          }, 1000);
    }

    overlay.onclick = function(e) {
        if (e.target == this) {
            if (modal.classList.contains('show-modal')) {
                modal.classList.remove('show-modal');
                modal.classList.add('hide-modal');
            }
               setTimeout(() => {
                   overlay.style.display = 'none';
     
                   if(modal.classList.contains('hide-modal')) {
                       modal.classList.remove('hide-modal');
                   }
               }, 1000);
        }
    }

    document.onkeydown = function(e) {
        if (e.keyCode === 27) {
            if (modal.classList.contains('show-modal')) {
                modal.classList.remove('show-modal');
                modal.classList.add('hide-modal');
            }
               setTimeout(() => {
                   overlay.style.display = 'none';
     
                   if(modal.classList.contains('hide-modal')) {
                       modal.classList.remove('hide-modal');
                   }
               }, 1000);
        }
    }

   

}