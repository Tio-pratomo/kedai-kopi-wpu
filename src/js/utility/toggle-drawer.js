const drawer = {
    toggleDrawer() {
        const { hamburgerMenu, containerMenu } = this.drawer;

        hamburgerMenu.addEventListener('click', (ev) => {
            containerMenu.classList.toggle('navbar__nav--appear-menu');
        });

        document.addEventListener('click', (ev) => {
            const isOutsideMenu = !hamburgerMenu.contains(ev.target) && !containerMenu.contains(ev.target);

            if (isOutsideMenu) {
                containerMenu.classList.remove('navbar__nav--appear-menu');
            }
        });
    },
};

export { drawer };
