export const apiRoute = {
    login: `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
    becomeMerchant: `${process.env.NEXT_PUBLIC_API_BASE_URL}/client/becomeMerchant`,
    addProduct: `${process.env.NEXT_PUBLIC_API_BASE_URL}/merchant/addProduct`,
    getPorducts: `${process.env.NEXT_PUBLIC_API_BASE_URL}/merchant/getProducts?pageNumber=1&limit=10`,
    removeProduct: `${process.env.NEXT_PUBLIC_API_BASE_URL}/merchant/deleteProduct`,
    getAllProducts: `${process.env.NEXT_PUBLIC_API_BASE_URL}/client/getProducts?pageNumber=1&limit=10`,
    addToCart: `${process.env.NEXT_PUBLIC_API_BASE_URL}/client/updateCart`,
    cartCount: `${process.env.NEXT_PUBLIC_API_BASE_URL}/client/cartCount`,
    viewCart: `${process.env.NEXT_PUBLIC_API_BASE_URL}/client/viewCart`,
};
