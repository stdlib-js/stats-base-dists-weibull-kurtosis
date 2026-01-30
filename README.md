<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Kurtosis

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Weibull][weibull-distribution] distribution [excess kurtosis][kurtosis].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [excess kurtosis][kurtosis] for a [Weibull][weibull-distribution] random variable with [shape parameter][shape] `λ > 0` and [scale parameter][scale] `k > 0` is

<!-- <equation class="equation" label="eq:weibull_kurtosis" align="center" raw="\operatorname{Kurt}\left( X \right) = \frac{-6\Gamma_1^4+12\Gamma_1^2\Gamma_2-3\Gamma_2^2 -4\Gamma_1\Gamma_3+\Gamma_4}{[\Gamma_2-\Gamma_1^2]^2}" alt="Excess kurtosis for a Weibull distribution."> -->

```math
\mathop{\mathrm{Kurt}}\left( X \right) = \frac{-6\Gamma_1^4+12\Gamma_1^2\Gamma_2-3\Gamma_2^2 -4\Gamma_1\Gamma_3+\Gamma_4}{[\Gamma_2-\Gamma_1^2]^2}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Kurt}\left( X \right) = \frac{-6\Gamma_1^4+12\Gamma_1^2\Gamma_2-3\Gamma_2^2 -4\Gamma_1\Gamma_3+\Gamma_4}{[\Gamma_2-\Gamma_1^2]^2}" data-equation="eq:weibull_kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/weibull/kurtosis/docs/img/equation_weibull_kurtosis.svg" alt="Excess kurtosis for a Weibull distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `Γ_i = Γ( 1 + i / k )`.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import kurtosis from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-kurtosis@deno/mod.js';
```

#### kurtosis( k, lambda )

Returns the [excess kurtosis][kurtosis] of a [Weibull][weibull-distribution] distribution with shape parameter `k` and scale parameter `lambda`.

```javascript
var v = kurtosis( 1.0, 1.0 );
// returns 6.0

v = kurtosis( 4.0, 12.0 );
// returns ~-0.252

v = kurtosis( 8.0, 2.0 );
// returns ~0.328
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = kurtosis( NaN, 2.0 );
// returns NaN

v = kurtosis( 2.0, NaN );
// returns NaN
```

If provided `k <= 0`, the function returns `NaN`.

```javascript
var v = kurtosis( 0.0, 1.0 );
// returns NaN

v = kurtosis( -1.0, 1.0 );
// returns NaN
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var v = kurtosis( 1.0, 0.0 );
// returns NaN

v = kurtosis( 1.0, -1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@deno/mod.js';
import logEachMap from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@deno/mod.js';
import EPS from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@deno/mod.js';
import kurtosis from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-kurtosis@deno/mod.js';

var opts = {
    'dtype': 'float64'
};
var lambda = uniform( 10, EPS, 10.0, opts );
var k = uniform( 10, EPS, 10.0, opts );

logEachMap( 'k: %0.4f, λ: %0.4f, Kurt(X;k,λ): %0.4f', k, lambda, kurtosis );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-weibull-kurtosis.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-weibull-kurtosis

[test-image]: https://github.com/stdlib-js/stats-base-dists-weibull-kurtosis/actions/workflows/test.yml/badge.svg?branch=v0.3.0
[test-url]: https://github.com/stdlib-js/stats-base-dists-weibull-kurtosis/actions/workflows/test.yml?query=branch:v0.3.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-weibull-kurtosis/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-weibull-kurtosis?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-weibull-kurtosis.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-weibull-kurtosis/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-weibull-kurtosis/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-weibull-kurtosis/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-weibull-kurtosis/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-weibull-kurtosis/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-weibull-kurtosis/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-weibull-kurtosis/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-weibull-kurtosis/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-weibull-kurtosis/main/LICENSE

[weibull-distribution]: https://en.wikipedia.org/wiki/Weibull_distribution

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[shape]: https://en.wikipedia.org/wiki/Shape_parameter

[scale]: https://en.wikipedia.org/wiki/Scale_parameter

</section>

<!-- /.links -->
