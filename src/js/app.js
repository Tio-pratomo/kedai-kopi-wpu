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
        this.toggleDrawer();
    }
}

Object.assign(App.prototype, featherIcons, drawer);

export { App };
