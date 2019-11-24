# swrée
Bundles these in <6kB to be used without a build step:

* [swr](https://github.com/zeit/swr) - data fetching
* [htm](https://github.com/developit/htm) - buildless jsx
* [preact](https://github.com/preactjs/preact) - tiny React

## Usage

In a browser that supports modules, just use:

```html
<script type="module">
    import { h, html, render, useState } from 'https://unpkg.com/swree?module';

    const Example = () => {
        const [counter, setCounter] = useState(0);
        const increment = () => setCounter(counter + 1);
        const decrement = () => setCounter(counter - 1);
        return html`<div>
            <span>${counter}</span>
            <button onClick=${increment}>+</button>
            <button onClick=${decrement}>-</button>
        </div>`;
    };

    render(h(Example), document.body);
</script>
```

## Demo

`yarn demo` then open `http://localhost:5000/example`

## License
MIT
