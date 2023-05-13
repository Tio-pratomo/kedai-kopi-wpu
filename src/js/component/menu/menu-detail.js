import Images from './menu-image';

const menus = Images.map((image) => {
    const getImgName = image.split('/');
    const imgName = getImgName[getImgName.length - 1].split('.')[0];

    return {
        name: imgName,
        price: 20_000,
        img: image,
    };
});

export default menus;
