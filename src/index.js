import {render} from 'preact/compat'
import App from './components/app';
import 'normalize.css'
import './style';

if(typeof window !== "undefined") {
    render(<App/>, document.body)
}
