# API reference

What `@velotype/velodesign` exports besides the [components](/docs/velodesign/components/). Each component exports its function or class and its `<Name>AttrsType`, and some export option types such as `ButtonType` and `TextType`.

## Theme

| Export | Description |
|---|---|
| `Theme.injectStyles(options?, includeCSSReset = true)` | Sets up the CSS custom properties and the reset |
| `setThemeOnSelector(selector, options?, resetSheet = false)` | Sets the properties on another selector |
| `ColorScheme.getColorScheme()` | The scheme in effect: `"light"` or `"dark"` |
| `ColorScheme.setColorScheme(scheme)` | Sets and remembers `"light"`, `"dark"`, or `"default"` |
| `ColorScheme.resetColorScheme()` | Applies the stored choice or the browser's preference |
| `ThemeColorOptions` | The color options. See [Theming](/docs/velodesign/theming/#colors) |

## Symbols

| Export | Description |
|---|---|
| `CommonThemeOptions` | The symbols several components share: `closeSymbol`, `cancelSymbol`, `confirmSymbol`, `emptySymbol`, `collapseSymbol`, `prevSymbol`, `nextSymbol` |
| `AlertThemeOptions`, `BreadcrumbsThemeOptions`, `ButtonThemeOptions`, `ChartThemeOptions`, `DataTableThemeOptions`, `DrawerThemeOptions`, `EmptyThemeOptions`, `ModalThemeOptions`, `PaginationThemeOptions`, `PopconfirmThemeOptions`, `TagThemeOptions`, `TextFormFieldThemeOptions`, `ToastThemeOptions` | Each component's own options |
| `resetThemeOptions(options, ...fields)` | Puts the package's defaults back |
| `ThemeSymbol` | The type of a symbol: a component with no attrs |

See [Theming](/docs/velodesign/theming/#symbols).

## Strings

| Export | Description |
|---|---|
| `S.a`, `S.aS`, `S.g` | Add a string, add a `LocalizedString`, and get a string |
| `T` | `<T k="key" n={n}/>` renders a string |
| `LocalizedString` | `new LocalizedString(key, value, pluralValue?)` |

## Icons

| Export | Description |
|---|---|
| `Icon` | `new Icon(width, height, svgPath)` |
| `registerIcon(key, icon)` | Registers an icon |
| `I` | `<I i={key}/>` renders a registered icon |

## Routing and feedback

| Export | Description |
|---|---|
| `History.changeLocation(path)` | `pushState`, and dispatches `locationchange` |
| `History.loadNewPageLocation(path)` | Loads the page |
| `showToast(message, options?)` | Shows a toast. `ToastOptions`: `type`, `duration`, `dismissLabel` |

## Licenses

`addLicense(key, text)` adds the text of an open source license to `licenses`, a `Map` keyed by `key`. Each license is logged to the console once: those added in the first second after load are logged together, and later ones when they are added.
