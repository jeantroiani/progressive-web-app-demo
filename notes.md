##Browser State Options
- #Cookies
    - Compatibility: everywhere
    - Size: 4kb
    - data-type: string
    - pros: simple, configurable, compatibility.
    - cons: Less secure, limiting, attaches to request, easily deleted.
- #HTML5 Web Storage (sessionStorage and localStorage)
    - Compatibility: everywhere
    - Size: 2.5 to 5Mb
    - data-type: string
    - pros: simple, not transmitted, compatibility +ie8.
    - cons: Unstructure data, slow access.
- #WebQL
    - Compatibility: Chrome, Safari, Opera.
    - Size: 2.5 to 5Mb
    - data-type: string
    - pros: simple, not transmitted, compatibility +ie8.
    - cons: Deprecated, steep learning curve, schema pre-defined
- #IndexedDB
    - Compatibility: Modern browsers
    - Size: 10-20% of available space (browser specific)
    - data-type: JS Object
    - pros: asynchronous, large dataset
    - cons: steep learning curve, complicated while implementing
- #solutions:
    https://github.com/localForage/localForage
