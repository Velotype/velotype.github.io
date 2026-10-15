# API reference

Everything `@velotype/velossr` exports, by area.

## Rendering

| Export | Signature |
|---|---|
| [`prepareVNodeForRendering`](/docs/velossr/rendering/#preparing-a-page) | `(node: ServerVNode) => PreparedServerVNode` |
| [`prepareHTMLVNodeForRendering`](/docs/velossr/rendering/#preparing-a-page) | `(node: ServerVNode) => PreparedServerVNode`, with `<!DOCTYPE html>` added |
| [`renderServerVNode`](/docs/velossr/rendering/#rendering-for-a-request) | `(node: ServerVNode \| PreparedServerVNode, request: Request, context: any) => RenderedVDOM` |

### RenderedVDOM

| Member | Description |
|---|---|
| `toArrayBuffer(): Promise<ArrayBuffer>` | The whole page, for a `Response` sent all at once |
| `toUint8Array(): Promise<Uint8Array>` | The whole page as bytes |
| `toReadableStream(): ReadableStream` | The page as a stream, for a `Response` that streams |
| `node: RenderedVNode` | The rendered node this wraps |

## Components

### StaticServerComponent

`type StaticServerComponent<AttrsType> = (attrs: Readonly<AttrsType>, children: ServerVNode[]) => ServerVNode | null | undefined`

### DynamicServerComponent

`abstract class DynamicServerComponent<AttrsType>`

| Member | Description |
|---|---|
| `attrs: Readonly<AttrsType>` | The attrs the component was created with |
| `children: Readonly<ServerVNode[]>` | The children the component was created with |
| `abstract render(attrs, children, request, context): ServerVNode \| Promise<ServerVNode>` | Renders the component |
| `onFail(reason, attrs, children, request, context): ServerVNode` | Renders when an async `render()` fails. Renders nothing by default |

See [Components](/docs/velossr/components/#dynamic-components).

### AsyncRenderObject

`class AsyncRenderObject<DataType>`

| Member | Description |
|---|---|
| `constructor(promise, request, context, defaultOnFail?)` | Waits on `promise` |
| `render(renderFunction, onFail?): AsyncRenderedVNodeElement` | Places the resolved value in the page |
| `promise`, `request`, `context`, `defaultOnFail` | What it was created with |

## Text

| Export | Description |
|---|---|
| `SafeText` | `new SafeText(text)`: text that is written without escaping. Use only for content that is known to be safe |
| `ComponentText` | Text from a component's output that is not escaped yet. Created by velossr, and escaped once where it is written |

## Nodes

| Export | Description |
|---|---|
| `ServerVNode` | A node a component can return: an element, text, a number, `null`, `undefined`, or an Array of them |
| `PreparedServerVNode` | A node after preparing: bytes and the parts that need a request |
| `HTMLElement` | The server-side representation of an element, `new HTMLElement(tag, attrs, children)` |
| `DynamicVNodeElement`, `AsyncRenderedVNodeElement`, `RenderedVNode` | Internal nodes for dynamic and async parts |
| `createElement`, `createFragment` | What TSX compiles tags and fragments to |
| `jsx`, `jsxs`, `Fragment` | The automatic JSX runtime |

## Types

| Type | Description |
|---|---|
| `EmptyAttrs` | The attrs type of a component with no attrs |
| `ChildrenAttr` | Add it to a component's attrs type to accept children |
| `BasicTypes` | `string \| bigint \| number \| boolean` |

The package also exports the DOM and JSX types that type-check TSX.

## Entry points

| Import | For |
|---|---|
| `@velotype/velossr` | The runtime |
| `@velotype/velossr/jsx-runtime` | The production JSX runtime |
| `@velotype/velossr/jsx-dev-runtime` | The development JSX runtime |
