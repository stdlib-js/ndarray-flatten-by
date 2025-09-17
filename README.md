<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# flattenBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Flatten an [ndarray][@stdlib/ndarray/ctor] according to a callback function.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
flattenBy = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-flatten-by@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var flattenBy = require( 'path/to/vendor/umd/ndarray-flatten-by/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-flatten-by@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.flattenBy;
})();
</script>
```

#### flattenBy( x\[, options], fcn\[, thisArg] )

Flattens an [ndarray][@stdlib/ndarray/ctor] according to a callback function.

```javascript
var array = require( '@stdlib/ndarray-array' );
var ndarray2array = require( '@stdlib/ndarray-to-array' );

function scale( value ) {
    return value * 2.0;
}

var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ] ] ] );
// returns <ndarray>

var y = flattenBy( x, scale );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ]
```

The function accepts the following arguments:

-   **x**: input [ndarray][@stdlib/ndarray/ctor].
-   **options**: function options (_optional_).
-   **fcn**: callback function.
-   **thisArg**: callback execution context (_optional_).

The function accepts the following options:

-   **order**: order in which input [ndarray][@stdlib/ndarray/ctor] elements should be flattened. Must be one of the following:

    -   `'row-major'`: flatten elements in lexicographic order. For example, given a two-dimensional input [ndarray][@stdlib/ndarray/ctor] (i.e., a matrix), flattening in lexicographic order means flattening the input [ndarray][@stdlib/ndarray/ctor] row-by-row.
    -   `'column-major'`: flatten elements in colexicographic order. For example, given a two-dimensional input [ndarray][@stdlib/ndarray/ctor] (i.e., a matrix), flattening in colexicographic order means flattening the input [ndarray][@stdlib/ndarray/ctor] column-by-column.
    -   `'any'`: flatten according to the physical layout of the input [ndarray][@stdlib/ndarray/ctor] data in memory, regardless of the stated [order][@stdlib/ndarray/orders] of the input [ndarray][@stdlib/ndarray/ctor].
    -   `'same'`: flatten according to the stated [order][@stdlib/ndarray/orders] of the input [ndarray][@stdlib/ndarray/ctor].

    Default: `'row-major'`.

-   **depth**: maximum number of input [ndarray][@stdlib/ndarray/ctor] dimensions to flatten.

By default, the function flattens all dimensions of the input [ndarray][@stdlib/ndarray/ctor]. To flatten to a desired depth, specify the `depth` option.

```javascript
var array = require( '@stdlib/ndarray-array' );
var ndarray2array = require( '@stdlib/ndarray-to-array' );

function scale( value ) {
    return value * 2.0;
}

var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ] ] ] );
// returns <ndarray>

var opts = {
    'depth': 1
};

var y = flattenBy( x, opts, scale );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ [ 2.0, 4.0 ], [ 6.0, 8.0 ], [ 10.0, 12.0 ] ]
```

By default, the input [ndarray][@stdlib/ndarray/ctor] is flattened in lexicographic order. To flatten elements in a different order, specify the `order` option.

```javascript
var array = require( '@stdlib/ndarray-array' );
var ndarray2array = require( '@stdlib/ndarray-to-array' );

function scale( value ) {
    return value * 2.0;
}

var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ] ] ] );
// returns <ndarray>

var opts = {
    'order': 'column-major'
};

var y = flattenBy( x, opts, scale );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ 2.0, 6.0, 10.0, 4.0, 8.0, 12.0 ]
```

To set the callback function execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this, max-len -->

```javascript
var array = require( '@stdlib/ndarray-array' );
var ndarray2array = require( '@stdlib/ndarray-to-array' );

function scale( value ) {
    this.count += 1;
    return value * 2.0;
}

var x = array( [ [ [ 1.0, 2.0 ] ], [ [ 3.0, 4.0 ] ], [ [ 5.0, 6.0 ] ] ] );
// returns <ndarray>

var ctx = {
    'count': 0
};

var y = flattenBy( x, scale, ctx );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ]

var count = ctx.count;
// returns 6
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function **always** returns a copy of input [ndarray][@stdlib/ndarray/ctor] data, even when an input [ndarray][@stdlib/ndarray/ctor] already has the desired number of dimensions.

-   The callback function is provided the following arguments:

    -   **value**: current array element.
    -   **indices**: current array element indices.
    -   **arr**: the input [ndarray][@stdlib/ndarray/ctor].

-   The order in which array elements are traversed and passed to a provided callback function is **not** guaranteed to match the order of array elements in an [ndarray][@stdlib/ndarray/ctor] view. Accordingly, a provided callback should avoid making assumptions regarding the order of provided elements.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-flatten-by@umd/browser.js"></script>
<script type="text/javascript">
(function () {

function scale( value ) {
    return value * 2.0;
}

var xbuf = discreteUniform( 12, -100, 100, {
    'dtype': 'generic'
});

var x = array( xbuf, {
    'shape': [ 2, 2, 3 ],
    'dtype': 'generic'
});
console.log( ndarray2array( x ) );

var y = flattenBy( x, scale );
console.log( ndarray2array( y ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-flatten-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-flatten-by

[test-image]: https://github.com/stdlib-js/ndarray-flatten-by/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-flatten-by/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-flatten-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-flatten-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-flatten-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-flatten-by/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-flatten-by/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-flatten-by/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-flatten-by/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-flatten-by/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-flatten-by/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-flatten-by/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-flatten-by/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-flatten-by/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/umd

[@stdlib/ndarray/orders]: https://github.com/stdlib-js/ndarray-orders/tree/umd

</section>

<!-- /.links -->
