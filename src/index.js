import domReady from '@wordpress/dom-ready';
import {createRoot} from '@wordpress/element';

domReady(() => {
    createRoot(
        document.getElementById('react-settings-page')
    ).render(
        <div>React App goes here...</div>
    );
});
