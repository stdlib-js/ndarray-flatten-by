"use strict";var c=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var w=c(function(z,q){"use strict";var b=require("@stdlib/assert-is-plain-object"),f=require("@stdlib/assert-is-function"),T=require("@stdlib/assert-is-ndarray-like"),h=require("@stdlib/assert-has-own-property"),j=require("@stdlib/assert-is-nonnegative-integer"),E=require("@stdlib/ndarray-base-assert-is-order"),k=require("@stdlib/ndarray-shape"),m=require("@stdlib/ndarray-order"),L=require("@stdlib/ndarray-strides"),R=require("@stdlib/ndarray-base-data-buffer"),S=require("@stdlib/ndarray-base-dtype"),V=require("@stdlib/ndarray-base-shape2strides"),A=require("@stdlib/ndarray-base-strides2order"),C=require("@stdlib/ndarray-base-flatten-shape"),D=require("@stdlib/ndarray-base-map"),F=require("@stdlib/ndarray-base-ctor"),J=require("@stdlib/ndarray-empty-like"),d=require("@stdlib/string-format"),y="row-major",M="column-major";function N(a,r,v,O){var u,n,p,e,s,i,t,g,l,o;if(!T(a))throw new TypeError(d("invalid argument. First argument must be an ndarray-like object. Value: `%s`.",a));if(n=arguments.length,i=k(a),u=!1,e={depth:i.length,order:y,dtype:S(a)},n<=2?t=r:n===3?f(r)?(t=r,s=v):(u=!0,t=v):(u=!0,t=v,s=O),!f(t))throw new TypeError(d("invalid argument. Callback argument must be a function. Value: `%s`.",t));if(u){if(!b(r))throw new TypeError(d("invalid argument. Options argument must be an object. Value: `%s`.",r));if(h(r,"depth")){if(!j(r.depth))throw new TypeError(d("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","depth",r.depth));e.depth=r.depth}if(h(r,"order"))if(r.order==="any")o=A(L(a)),o===1?e.order=y:o===2?e.order=M:e.order=m(a);else if(r.order==="same")e.order=m(a);else if(E(r.order))e.order=r.order;else throw new TypeError(d("invalid option. `%s` option must be a recognized order. Option: `%s`.","order",r.order));h(r,"dtype")&&(e.dtype=r.dtype)}return l=J(a,{shape:C(i,e.depth),order:e.order,dtype:e.dtype}),g=i.length>0?V(i,e.order):[0],p=new F(e.dtype,R(l),i,g,0,e.order),D([a,p],t,s),l}q.exports=N});var P=w();module.exports=P;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
