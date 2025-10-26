Creando el proyecto desde 0 sin una template de React.
La idea es que en una prueba tecnica te pueden pedir que lo hagas asi por que se supone que asi sabes como funciona React.

They want to see how are you creating the entry point of the app, so you should be able to use a plugin.
npm install @vitejs/plugin-react -E

2 are needed.
React and React DOM
npm install react react-dom -E

Now create our vite config

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins:[react()]
})

Rename the js file to jsx and set this(Update the import in HTML file too)

import {createRoot} from 'react-dom/client'

const root = createRoot(document.getElementById('app')) //Here we would render our app

root.render(<h1>Hello World</h1>)