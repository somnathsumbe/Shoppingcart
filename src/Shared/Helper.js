const Helper = {
    navItems: [
        { isActive: true, path: "/productList", name: "Men's Outerwear", img: ["Assets/b1.jpg", "Assets/b1.jpg", "Assets/b1.jpg"] },
        {  isActive: false, path: "/home", name: "Ladies Outerwear", img: ["Assets/b1.jpg", "Assets/b1.jpg", "Assets/b1.jpg"] },
        {  isActive: false, path: "/productList", name: "Men's T-Shirts", img: ["Assets/b1.jpg", "Assets/b1.jpg", "Assets/b1.jpg"] },
        {  isActive: false, path: "/productList", name: "Ladies T-Shirts", img: ["Assets/b1.jpg", "Assets/b1.jpg", "Assets/b1.jpg"] }
    ],
    replaceWhiteSpace : (str) => {
        return (`${str}`).replace(/\s/g, '').toLowerCase();
    }
}


export default Helper;
