/// <reference types="https://denopkg.com/soremwar/deno_types/react-dom/v16.13.1/react-dom.d.ts" />
const ReactDOM = window.ReactDOM;
export const {
  findDOMNode,
  unmountComponentAtNode,
  createPortal,
  version,
  render,
  hydrate,
  unstable_batchedUpdates,
  unstable_renderSubtreeIntoContainer,
} = ReactDOM;
export default ReactDOM;
