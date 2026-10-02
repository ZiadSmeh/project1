
document.addEventListener('DOMContentLoaded', function () {
    var navs = document.querySelectorAll('header nav');

    navs.forEach(function (nav, i) {
        var wrap = nav.parentElement;

        nav.classList.add('rsp-nav');
        nav.id = nav.id || ('rsp-site-nav-' + i);
        wrap.classList.add('rsp-nav-wrap');

        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'rsp-menu-toggle';
        btn.setAttribute('aria-label', 'Toggle menu');
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-controls', nav.id);
        btn.innerHTML = '<span></span><span></span><span></span>';

        wrap.insertBefore(btn, nav);

        function setOpen(open) {
            nav.classList.toggle('rsp-nav-open', open);
            btn.classList.toggle('rsp-open', open);
            btn.setAttribute('aria-expanded', String(open));
        }

        btn.addEventListener('click', function () {
            setOpen(!nav.classList.contains('rsp-nav-open'));
        });

       
        nav.addEventListener('click', function (e) {
            if (e.target.closest('a')) setOpen(false);
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') setOpen(false);
        });

       
        window.addEventListener('resize', function () {
            if (window.innerWidth > 767.98) setOpen(false);
        });
    });
});
