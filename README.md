# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

**Three principles of Redux explained:*^

1. **Single Source of Truth (Ek Hi Sach ka Saadhan):**
   Redux mein, saara state ek single object tree mein store hota hai jo ek hi store ke andar rehta hai. Yeh store pura application ka state manage karta hai.

2. **State is Read-Only (State Sirf Padhi Ja Sakti Hai):**
   Redux mein, state ko directly change nahi kiya ja sakta. Agar aapko state ko change karna hai toh aapko ek action dispatch karna padega. Yeh action ek plain object hota hai jo batata hai ki kya change hone wala hai.

3. **Changes are Made with Pure Functions (Changes Pure Functions ke Saath Hote Hain):**
   State aur actions ko ek saath combine karke reducers banate hain jo pure functions hote hain. Reducers ko sirf state aur action milte hain aur woh nayi state return karte hain bina existing state ko change kiye.

If you need further explanation or have more questions, feel free to ask!