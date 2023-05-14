import { featherIcons } from './utility/feathers-icon';
import { drawer } from './utility/toggle-drawer';

import { renderMenu } from './component/menu';

class App {
    constructor(drawer = {}) {
        this.drawer = drawer;
    }

    render() {
        renderMenu();
        this.initiateFeatherIcons();
        this.clickBrandLogo();
        this.toggleDrawer();
    }

    clickBrandLogo() {
        const brand = document.querySelector('.navbar__logo');
        window.location.pathname === '/' ? (brand.href = '/') : (brand.href = '/kedai-kopi-wpu/');
    }
}

Object.assign(App.prototype, featherIcons, drawer);

export { App };
