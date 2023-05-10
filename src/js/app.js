import { featherIcons } from './utility/feathers-icon';
import { drawer } from './utility/toggle-drawer';

class App {
    constructor(drawer = {}) {
        this.drawer = drawer;
    }

    render() {
        this.initiateFeatherIcons();
        this.toggleDrawer();
    }
}

Object.assign(App.prototype, featherIcons, drawer);

export { App };
