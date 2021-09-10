import create from 'zustand';
import { persist } from 'zustand/middleware';


export const useLogin = create(persist(

  (set) => ({
    email: null,
    password: null,
    login: (email, password) => set(state => ({email, password})),
    logout: () => set(state => ({email: null, password: null}))
  }),
  {
    name: 'login',
    getStorage: () => sessionStorage,

  }
));


export const useCart = create(persist(
  (set, get) => ({
  carts:[],
  addCart: (item) => set(state => ({carts: [...state.carts, item]}))
}),
  {
    name: 'cart',
    getStorage: () => sessionStorage,
  }
));

export const useShop = create((set) => ({
  products:[],
  getAllProduct: async () => {
    const list = await  fetch('https://fakestoreapi.com/products').then(res=>res.json());
    set({products: list });
  }
}));



