import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'core-js/stable/object/assign';

export const Components = {};

const add = (req, name) => {
    const comp = req.default;
    Components[name] = comp;
}

add(require('./Components/WebAppContainer.tsx'), "WebAppContainer");

export function MakeComponentByName(componentName, id, props, callback) {
    MakeComponent(Components[componentName], id, props, callback);
}

export function MakeComponent(component, id, props, callback) {
    let element = document.getElementById(id);
    let reactElement = React.createElement(component, props, null);
    ReactDOM.render(reactElement, element, callback);
}