import {createRoot} from 'react-dom/client'
import {App} from './App'
const root = createRoot(document.getElementById('app')) //Here we would render our app

root.render(<App></App>)