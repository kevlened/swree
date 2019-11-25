import {
    h,
    Component,
    render as preactRender,
    createElement,
    createContext,
    Fragment
} from './preact';
import htm from 'htm';
import useSWR from 'swr';

function render(tree, parent) {
	preactRender(tree, parent, parent.firstElementChild);
}

const html = htm.bind(h);

export * from 'swr';
export * from 'preact/hooks';
export * from 'wouter-preact';
export {
    h,
    html,
    render,
    Component,
    createElement,
	createContext,
    Fragment,
    useSWR
};
