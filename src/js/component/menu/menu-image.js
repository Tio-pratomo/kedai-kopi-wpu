const pathImg = require.context('../../../img/menu', false, /\.(png|jpe?g|svg)$/);
export default pathImg.keys().map(pathImg);
