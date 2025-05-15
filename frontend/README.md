# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


HomePage CSS Notes: 
HTML Code:
<div class="parent">
    <div class="div1">1</div>
    <div class="div2">2</div>
    <div class="div4">4</div>
    <div class="div5">5</div>
    <div class="div10">10</div>
    <div class="div11">11</div>
    <div class="div12">12</div>
</div>

CSS Code:

.parent {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 8px;
}
    
.div1 {
    grid-column: span 5 / span 5;
}

.div2 {
    grid-column: span 5 / span 5;
    grid-column-start: 1;
    grid-row-start: 5;
}

.div4 {
    grid-row: span 2 / span 2;
    grid-column-start: 5;
    grid-row-start: 2;
}

.div5 {
    grid-row: span 3 / span 3;
    grid-column-start: 1;
    grid-row-start: 2;
}

.div10 {
    grid-column-start: 5;
    grid-row-start: 4;
}

.div11 {
    grid-column: span 3 / span 3;
    grid-row: span 2 / span 2;
    grid-column-start: 2;
    grid-row-start: 2;
}

.div12 {
    grid-column: span 3 / span 3;
    grid-column-start: 2;
    grid-row-start: 4;
}
        
    
