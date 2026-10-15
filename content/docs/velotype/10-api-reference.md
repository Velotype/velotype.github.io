# API reference

Everything `@velotype/velotype` exports, by area. Types are shown as they appear in the package. Each name links to the guide that covers it with an example.

## Mounting

| Export | Signature |
|---|---|
| [`replaceElementWithRoot`](/docs/velotype/#mounting-an-app) | `(rootComponent: AnchorElement, element: HTMLElement \| null) => AnchorElement \| null` |
| [`removeElementRoot`](/docs/velotype/#mounting-an-app) | `(element: AnchorElement \| null) => void` |

## Components

### Component

`abstract class Component<AttrsType> implements HasVtKey`

| Member | Description |
|---|---|
| `constructor(attrs: Readonly<AttrsType>, children: RenderableElements[])` | Receives the attrs and children. Rarely overridden |
| `readonly attrs: AttrsType` | The attrs the Component was created with |
| `readonly children: RenderableElements[]` | The children the Component was created with |
| `readonly vtKey: number` | A unique key per instance. Set after the constructor returns, so it is undefined in the constructor and in field initializers |
| `protected render(attrs, children): RenderableElements` | Abstract. Renders the Component |
| `protected mount(): void` | Called once, just after the Component is inserted, before the browser paints |
| `protected unmount(): void` | Called once, just before the Component is removed |
| `get refresh(): () => void` | Renders the Component's children again |
| `get unmountSignal(): AbortSignal` | Aborted just after `unmount()` returns |
| `get replaceChild(): (child, newChild) => AnchorElement` | Replaces one element of this Component's render |
| `get appendToChild(): (child, newChild) => boolean` | Adds to the end of an element |
| `get prependToChild(): (child, newChild) => boolean` | Adds to the start of an element |
| `get replaceChildrenOfChild(): (child, newChildren) => boolean` | Replaces all of an element's children |
| `get removeChild(): (child) => boolean` | Removes an element |

See [Components](/docs/velotype/components/).

### ErrorBoundary

`abstract class ErrorBoundary<AttrsType> extends Component<AttrsType>`

| Member | Description |
|---|---|
| `protected renderContent(attrs, children): RenderableElements` | Abstract. Renders the content |
| `protected renderError(error: unknown, attrs, children): RenderableElements` | Abstract. Renders the fallback when `renderContent()` throws |

See [Events and errors](/docs/velotype/events-and-errors/#errorboundary).

### Other

| Export | Description |
|---|---|
| `getComponent<T>(element)` | Converts an element created for a class Component back to the instance |
| `passthroughAttrsToElement(element, attrs)` | Sets the `id`, `class`, and `style` attrs on the element a Component renders |
| `setAttrsOnElement(element, attrs?)` | Sets attributes, style objects, and event listeners on an existing element |
| `createElement(tag, attrs, ...children)` | What TSX compiles tags to in the classic runtime |
| `createFragment(attrs, ...children)` | What `<>...</>` compiles to |
| `jsx`, `jsxs`, `Fragment` | The automatic JSX runtime |

## RenderObjects

### RenderObject

`class RenderObject<DataType, UpdateRefsType = any> implements HasVtKey`

| Member | Description |
|---|---|
| `constructor(initialData, defaultRenderFunction?, defaultHandleUpdate?)` | Creates a RenderObject |
| `value` | Reads or sets the value |
| `get(): DataType` | Reads the value |
| `set(newData: DataType): void` | Sets the value, and renders it if it is a different value |
| `rerenderElements(newData: DataType): void` | Sets the value and renders it again, even if it is the same object |
| `registerOnChangeListener(listener, options?): this` | Runs `listener` after each change. Options: `hasVtKey`, `triggerOnRegistration`, `eventDispatchDelay` |
| `registerOnMount(onMount?, onUnmount?): this` | Runs callbacks when the owning Component mounts and unmounts |
| `render(renderFunction, handleUpdate?): AnchorElement` | Renders one more element with another render function |
| `getElements(): AnchorElement[]` | The rendered elements. Advanced |
| `removeAll(): void` | Removes every rendered element |
| `readonly vtKey: number` | This RenderObject's key |

See [RenderObjects](/docs/velotype/render-objects/).

### RenderBasic

`class RenderBasic<DataType extends BasicTypes> extends RenderObject<DataType, Text>`

| Member | Description |
|---|---|
| `constructor(initialData: DataType)` | Creates a RenderBasic |
| `getString(): string` | The value as a string |
| `setString(newDataString: string): void` | Sets the value from a string |

### UpdateHandlerLink

`class UpdateHandlerLink<UpdateRefsType = any>`

`constructor(result: RenderableElements, updateRefs: UpdateRefsType)`, with `readonly result` and `readonly updateRefs`. Returned from a render function to give `handleUpdate` its references.

### AsyncRenderObject

`class AsyncRenderObject<DataType> extends RenderObject<AsyncState<DataType>>`

| Member | Description |
|---|---|
| `constructor(source: AsyncSource<DataType>, options: AsyncRenderObjectOptions<DataType>)` | Starts loading `source` |
| `load(source: AsyncSource<DataType>): void` | Replaces the load in progress |
| `get loading(): boolean` | `true` while a load is in progress |

```ts
type AsyncSource<DataType> = Promise<DataType> | ((signal: AbortSignal) => Promise<DataType>)
type AsyncState<DataType> =
    | {readonly status: "pending"}
    | {readonly status: "resolved", readonly value: DataType}
    | {readonly status: "rejected", readonly reason: unknown}
```

`AsyncRenderObjectOptions<DataType>` has `render`, `pending?`, `onFail?`, and `keepPrevious?`. See [Async data](/docs/velotype/async-data/).

## Lists

`class RenderObjectArray<DataType, UpdateRefsType = any>` and `class RenderTemplateArray<DataType, UpdateRefsType = any, RowElementType extends Element = HTMLElement>` have the same methods.

| Method | Description |
|---|---|
| `push(data)` / `pushAll(data[])` | Add to the end |
| `insertAt(index, data)` / `insertAllAt(index, data[])` | Insert before `index` |
| `deleteAt(startIndex, deleteCount?)` / `delete(data)` | Remove |
| `getAt(index)` / `setAt(index, data)` | Read and replace |
| `swap(indexA, indexB)` / `move(from, to)` | Reposition |
| `sort(compareFn)` / `reorder(indexes)` | Reorder |
| `filter(predicate?)` | Show only matching data points |
| `clear()` | Remove everything |
| `get length(): number` | The number of data points |

```ts
type RenderObjectArrayOptions<DataType, UpdateRefsType = any> = {
    wrapperElementTag?: string
    wrapperAttrs?: any
    renderFunction: RenderObjectRenderFunctionType<DataType, UpdateRefsType>
    handleUpdate?: RenderObjectHandleUpdateType<DataType, UpdateRefsType>
}

type RenderTemplateArrayOptions<DataType, UpdateRefsType = any, RowElementType extends Element = HTMLElement> = {
    wrapperElementTag?: string
    wrapperAttrs?: any
    template: RowElementType
    renderFunction: (row: RowElementType, data: DataType) => UpdateRefsType
    handleUpdate?: (row: RowElementType, updateRefs: UpdateRefsType, oldData: DataType, newData: DataType) => void
    on?: {[EventName in BubblingEventName]?: (event: HTMLElementEventMap[EventName], row: RowElementType, data: DataType, index: number) => void}
}
```

See [Lists](/docs/velotype/lists/).

## Events

| Export | Signature |
|---|---|
| `registerEventListener` | `(hasVtKey: HasVtKey, listeningKey: string, listener: VelotypeEventListener) => void` |
| `emitEvent` | `(listeningKey: string, event: VelotypeEvent, hasVtKey?: HasVtKey) => void` |
| `removeEventListeners` | `(hasVtKey: HasVtKey, listeningKey: string, listener?: VelotypeEventListener) => void` |
| `VelotypeEvent` | `class` with `constructor(emittingObject, event: string, data?: any)`, `emittingObject`, `event`, and `data` |

See [Events and errors](/docs/velotype/events-and-errors/).

## Styles and raw markup

| Export | Description |
|---|---|
| `setStylesheet(sheetText, sheetKey, resetSheet = false)` | Adds a stylesheet once per key |
| `HTML` | A Component that sets `innerHTML` on an HTML element. Attrs: `innerHTML`, `tag?`, `elementAttrs?` |
| `SVG` | A Component that sets `innerHTML` on an `<svg>` element. Attrs: `innerHTML`, `elementAttrs?` |
| `MATH` | A Component that sets `innerHTML` on a `<math>` element. Attrs: `innerHTML`, `elementAttrs?` |

See [Styling and raw HTML](/docs/velotype/styling-and-raw-html/).

## Types

| Type | Description |
|---|---|
| `FunctionComponent<AttrsType>` | `(attrs, children) => RenderableElements` |
| `EmptyAttrs` | The attrs type of a Component with no attrs |
| `IdAttr`, `StylePassthroughAttrs`, `ChildrenAttr` | Attrs mixins for `id`, `class` and `style`, and `children` |
| `RenderableElements` | Anything that can be a child: an element, text, a number, an Array of them, `null`, `undefined`, or a RenderObject |
| `AnchorElement` | `HTMLElement \| SVGSVGElement \| MathMLElement` |
| `BasicTypes` | `string \| bigint \| number \| boolean` |
| `RenderObjectRenderFunctionType`, `RenderObjectHandleUpdateType` | The function types of a RenderObject's render function and `handleUpdate` |
| `HasVtKey` | Something with a `vtKey`: a Component or RenderObject |
| `VelotypeEventListener` | `(event: VelotypeEvent) => void` |
| `StyleSection` | A stylesheet that `setStylesheet()` added |
| `HTMLAttrsType`, `SVGAttrsType`, `MATHAttrsType` | The attrs of `HTML`, `SVG`, and `MATH` |

The package also exports the DOM and JSX types (`HTMLAttributes`, event handler types, ARIA types, and CSS value types) that type-check TSX.

## Entry points

| Import | For |
|---|---|
| `@velotype/velotype` | The runtime, and the `jsx-runtime` |
| `@velotype/velotype/jsx-runtime` | The production JSX runtime |
| `@velotype/velotype/jsx-dev-runtime` | The development JSX runtime, with [hot reloading](/docs/velotype/development-tools/#hot-reloading) |
| `@velotype/velotype/devtools` | `__vtAppMetadata` and `getDevtoolsHook()` |
