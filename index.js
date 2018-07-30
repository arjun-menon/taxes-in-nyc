!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/home/arjun/projects/tax-analyzer",n(n.s=5)}([function(e,t,n){"use strict";n(1);function r(e,t,n){for(var r=new Array(n),o=0,u=t;o<n;)r[o]=e[u],o=o+1|0,u=u+1|0;return r}function o(e,t){for(;;){var n=t,u=e,c=u.length,i=0===c?1:c,a=i-n.length|0;if(0===a)return u.apply(null,n);if(!(a<0))return function(e,t){return function(n){return o(e,t.concat([n]))}}(u,n);t=r(n,i,0|-a),e=u.apply(null,r(n,0,i))}}function u(e,t){var n=e.length;return 1===n?e(t):function(e,t,n){if(n>7||n<0)return o(e,[t]);switch(n){case 0:case 1:return e(t);case 2:return function(n){return e(t,n)};case 3:return function(n,r){return e(t,n,r)};case 4:return function(n,r,o){return e(t,n,r,o)};case 5:return function(n,r,o,u){return e(t,n,r,o,u)};case 6:return function(n,r,o,u,c){return e(t,n,r,o,u,c)};case 7:return function(n,r,o,u,c,i){return e(t,n,r,o,u,c,i)}}}(e,t,n)}function c(e,t,n){var r=e.length;return 2===r?e(t,n):function(e,t,n,r){if(r>7||r<0)return o(e,[t,n]);switch(r){case 0:case 1:return o(e(t),[n]);case 2:return e(t,n);case 3:return function(r){return e(t,n,r)};case 4:return function(r,o){return e(t,n,r,o)};case 5:return function(r,o,u){return e(t,n,r,o,u)};case 6:return function(r,o,u,c){return e(t,n,r,o,u,c)};case 7:return function(r,o,u,c,i){return e(t,n,r,o,u,c,i)}}}(e,t,n,r)}function i(e,t,n,r){var u=e.length;return 3===u?e(t,n,r):function(e,t,n,r,u){var c=0;if(u>7||u<0)return o(e,[t,n,r]);switch(u){case 0:case 1:c=1;break;case 2:return o(e(t,n),[r]);case 3:return e(t,n,r);case 4:return function(o){return e(t,n,r,o)};case 5:return function(o,u){return e(t,n,r,o,u)};case 6:return function(o,u,c){return e(t,n,r,o,u,c)};case 7:return function(o,u,c,i){return e(t,n,r,o,u,c,i)}}return 1===c?o(e(t),[n,r]):void 0}(e,t,n,r,u)}n.d(t,"a",function(){return u}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return i})},function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"e",function(){return o}),n.d(t,"c",function(){return u}),n.d(t,"b",function(){return c}),n.d(t,"f",function(){return i}),n.d(t,"a",function(){return a});var r=["Failure",-2],o=["Invalid_argument",-3],u=["End_of_file",-4],c=["Division_by_zero",-5],i=["Not_found",-6],a=["Assert_failure",-10];r.tag=248,o.tag=248,u.tag=248,c.tag=248,i.tag=248,a.tag=248},function(e,t,n){"use strict";(function(e){n.d(t,"i",function(){return p}),n.d(t,"j",function(){return u}),n.d(t,"h",function(){return c}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return a}),n.d(t,"a",function(){return s}),n.d(t,"f",function(){return l}),n.d(t,"g",function(){return f}),n.d(t,"b",function(){return d}),n.d(t,"e",function(){return m});var r=n(0),o=n(1);var u=["",function(t,n){var r=n.length-1|0;return void 0!==e&&e.stdout&&e.stdout.write?e.stdout.write(n):"\n"===n[r]?(console.log(n.slice(0,r)),0):(console.log(n),0)}],c=["",function(e,t){var n=t.length-1|0;return"\n"===t[n]?(console.log(t.slice(0,n)),0):(console.log(t),0)}];function i(){throw[o.d,"caml_ml_open_descriptor_in not implemented"]}function a(){throw[o.d,"caml_ml_open_descriptor_out not implemented"]}function s(e){return""!==e[0]?(r.b(e[1],e,e[0]),e[0]="",0):0}function l(t,n,r,o){var c=0===r&&o===n.length?n:n.slice(r,o);if(void 0!==e&&e.stdout&&e.stdout.write&&t===u)return e.stdout.write(c);var i=c.lastIndexOf("\n");return i<0?(t[0]=t[0]+c,0):(t[0]=t[0]+c.slice(0,i+1|0),s(t),t[0]=t[0]+c.slice(i+1|0),0)}function f(e,t){return l(e,String.fromCharCode(t),0,1)}function d(){throw[o.d,"caml_ml_input_char not implemnted"]}function m(){return[u,[c,0]]}var p=void 0}).call(this,n(3))},function(e,t){var n,r,o=e.exports={};function u(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===u||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:u}catch(e){n=u}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var a,s=[],l=!1,f=-1;function d(){l&&a&&(l=!1,a.length?s=a.concat(s):f=-1,s.length&&m())}function m(){if(!l){var e=i(d);l=!0;for(var t=s.length;t;){for(a=s,s=[];++f<t;)a&&a[f].run();f=-1,t=s.length}a=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||l||i(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return r});n(1);function r(t){var n=void 0===e?void 0:e;return void 0!==n?n.exit(t):0}}).call(this,n(3))},function(e,t,n){"use strict";function r(){return[[[[[9525,10],[[38700,12],[[82500,22],[[157500,24],[[2e5,32],[[5e5,35],[[Number.MAX_VALUE,37],0]]]]]]],0,12e3],[1.45,6.2,128400]],[[[8500,4],[[11700,4.5],[[13900,5.25],[[21400,5.9],[[80650,6.45],[[215400,6.65],[[1077550,6.85],[[Number.MAX_VALUE,8.82],0]]]]]]]],[[12e3,3.078],[[25e3,3.762],[[5e4,3.819],[[Number.MAX_VALUE,3.876],0]]]],1e3,8e3]]}function o(e){var t=e-2014|0;if(t>4||t<0)return r();switch(t){case 0:return[[[[[9075,10],[[36900,15],[[89350,25],[[186350,28],[[405100,33],[[406750,35],[[Number.MAX_VALUE,39.6],0]]]]]]],3950,6200],[1.45,6.2,117e3]],[[[8200,4],[[11300,4.5],[[13350,5.25],[[20550,5.9],[[77150,6.45],[[205850,6.65],[[1029250,6.85],[[Number.MAX_VALUE,8.82],0]]]]]]]],[[12e3,2.907],[[25e3,3.534],[[5e4,3.591],[[5e5,3.648],[[Number.MAX_VALUE,3.876],0]]]]],1e3,7800]];case 1:return[[[[[9225,10],[[37450,15],[[90750,25],[[189300,28],[[411500,33],[[413200,35],[[Number.MAX_VALUE,39.6],0]]]]]]],4e3,6300],[1.45,6.2,118500]],[[[8400,4],[[11600,4.5],[[13750,5.25],[[21150,5.9],[[79600,6.45],[[212500,6.65],[[1062650,6.85],[[Number.MAX_VALUE,8.82],0]]]]]]]],[[12e3,2.907],[[25e3,3.534],[[5e4,3.591],[[5e5,3.648],[[Number.MAX_VALUE,3.876],0]]]]],1e3,7900]];case 2:return[[[[[9275,10],[[37650,15],[[91150,25],[[190150,28],[[413350,33],[[415050,35],[[Number.MAX_VALUE,39.6],0]]]]]]],4050,6300],[1.45,6.2,118500]],[[[8450,4],[[11650,4.5],[[13850,5.25],[[21300,5.9],[[80150,6.45],[[214e3,6.65],[[1070350,6.85],[[Number.MAX_VALUE,8.82],0]]]]]]]],[[12e3,2.907],[[25e3,3.534],[[5e4,3.591],[[5e5,3.648],[[Number.MAX_VALUE,3.876],0]]]]],1e3,7950]];case 3:return[[[[[9325,10],[[37950,15],[[91900,25],[[191650,28],[[416700,33],[[418400,35],[[Number.MAX_VALUE,39.6],0]]]]]]],4050,6350],[1.45,6.2,127200]],[[[8500,4],[[11700,4.5],[[13900,5.25],[[21400,5.9],[[80650,6.45],[[215400,6.65],[[1077550,6.85],[[Number.MAX_VALUE,8.82],0]]]]]]]],[[12e3,3.078],[[25e3,3.762],[[5e4,3.819],[[Number.MAX_VALUE,3.876],0]]]],1e3,8e3]];case 4:return r()}}n.r(t);var u=n(0);function c(e,t){return e>t?e:t}n(1);var i=n(2);n(4);Math.imul,String.prototype.repeat;Math.pow(2,32),Math.pow(2,63),Math.pow(2,63);var a=[0];!function(e){var t=[e,(a[0]+=1,a[0])];t.tag=248}("Pervasives.Exit");i.i,i.j,i.h;i.a,i.g,i.g;i.b,i.b;var s=function(e){return e.toFixed(2).toString()},l=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};function f(e){return"$"+u.a(l,u.a(s,e))}function d(e,t){return e*t/100}function m(e,t,n){var r=[0];return function(e,t,n){for(;;){var r=n,o=t;if(!r)return o;n=r[1],t=u.b(e,o,r[0])}}(function(t,o){if(e<=r[0])return t;var c=o[1],i=o[0],a=e<=i?e-r[0]:i-r[0],l=d(a,c),m=f(e>i?i:e);return u.c(n,"b","Slab from "+f(r[0])+" to "+m+" = "+f(l)+" (at "+u.a(s,c)+"% on "+f(a)+")",""),r[0]=i,t+l},0,t)}function p(e,t,n,r,o){u.c(o,"a","Adjusted Gross Income",f(t));var i=function(e,t,n,r,o){u.c(o,"l_start","New York State Tax Deductions","");var i=n<=e[1][3]?(u.c(o,"b","New York State Standard Deduction = "+f(e[1][3]),""),e[1][3]):(u.c(o,"b","Itemized Deductions = "+f(n),""),n),a=function(e,t){return e>t?e:t}(r-1|0,0),s=a*e[1][2];a>0&&u.c(o,"b","Personal exemptions for dependents = "+f(s)+"  ("+String(a)+" x "+f(e[1][2])+")","");var l=i+s;u.c(o,"l_end","New York State Tax Deductions",f(l));var d=c(t-l,0);u.c(o,"a","New York State Taxable Income",f(d)),u.c(o,"l_start","New York City Income Tax","");var p=m(d,e[1][1],o);u.c(o,"l_end","New York City Income Tax",f(p)),u.c(o,"l_start","New York State Income Tax","");var v=m(d,e[1][0],o);u.c(o,"l_end","New York State Income Tax",f(v));var h=v+p;return u.c(o,"a","Total New York State & City Taxes",f(h)),h}(e,t,n,r,o),a=function(e,t,n,r,o,i){u.c(i,"l_start","Federal Tax Deductions","");var a=0===e[0][0][1]&&n>=1e4?1e4:n,l=r+a,p=l>e[0][0][2]?(u.c(i,"b","State and Local Taxes Deduction = "+f(a),""),u.c(i,"b","Additional Itemized Deductions = "+f(r),""),l):(u.c(i,"b","Federal Standard Deduction = "+f(e[0][0][2]),""),e[0][0][2]),v=o*e[0][0][1];u.c(i,"b","Personal Exemptions = "+f(v)+"  ("+String(o)+" x "+f(e[0][0][1])+")","");var h=p+v;u.c(i,"l_end","Federal Tax Deductions",f(h));var b=c(t-h,0);u.c(i,"a","Federal Taxable Income",f(b)),u.c(i,"l_start","Federal Income Tax","");var g=m(b,e[0][0][0],i);u.c(i,"l_end","Federal Income Tax",f(g)),u.c(i,"l_start","Federal Insurance Contributions Act (FICA) Tax","");var x=function(e,t){return e<t?e:t}(t,e[0][1][2]),y=d(x,e[0][1][1]);u.c(i,"b","Social Security Old-Age, Survivors, and Disability Insurance (OASDI) Tax: "+f(y)+" (at "+u.a(s,e[0][1][1])+"% flat on "+f(x)+")","");var _=d(t,e[0][1][0]);u.c(i,"b","Medicare Hospital Insurance (HI) Tax: "+f(_)+" (at "+u.a(s,e[0][1][0])+"% flat on "+f(t)+")","");var T=y+_;u.c(i,"l_end","Federal Insurance Contributions Act (FICA) Tax",f(T));var w=g+T;return u.c(i,"a","Total Federal Taxes",f(w)),w}(e,t,i,n,r,o)+i;u.c(o,"a","Total Federal, State & Local Taxes",f(a)),u.c(o,"x","<hr/>","");var l=t-a,p=l/12;return u.c(o,"a","Income after Taxation",f(l)),u.c(o,"a","Effective Tax Rate",u.a(s,100*a/t)+"%"),u.c(o,"a","Monthly Income",f(p)),a}const v="100,000";function h(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");const t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null==t?"":decodeURIComponent(t[1].replace(/\+/g," "))}function b(e){const t=document.getElementById("results");t.innerHTML="";const n=function(e){const t=document.createDocumentFragment(),n=document.createElement("div");for(n.innerHTML=e;n.firstChild;)t.appendChild(n.firstChild);return t}(e);t.appendChild(n),t.style.visibility=""!=e?"visible":"hidden"}function g(e){b(function(e,t,n,r){let u="";function c(e,t,n){"a"==e?u+="<p>"+t+": "+n+"</p>":"l_start"==e?u+='<div class="seclist"><p><strong>'+t+"</strong><ul>":"b"==e?u+="<li>"+t+"</li>":"l_end"==e?u+="</ul><em>"+t+":</em> "+n+"</p></div>":"t"==e?u+="<p>"+t+"</p>":"x"==e&&(u+=t)}const i=o(parseInt(r)),a=p(i,e,t,n,c);return c("a","Marginal Tax Rate",(100*(p(i,e+1,t,n,function(e,t,n){})-a)).toFixed(2)+"%"),u}(e.income,e.deductions,e.exemptions,e.taxYear))}function x(e){return/^[0-9,.]*$/.test(e)}function y(e){return e.replace(/,/g,"")}function _(e,t,n,r){const o={income:parseFloat(y(e)),deductions:parseFloat(y(t)),exemptions:parseFloat(y(n)),taxYear:r};if(x(e)&&o.income>0&&x(t)&&o.deductions>=0&&x(n)&&o.exemptions>=0)return o;throw function(e,t,n,r){let o="";return t||(o+="Income must be specified. <br />"),t&&0==e.income&&(o+="Income must be greater than zero. <br />"),!t||x(t)&&e.income>=0||(o+="Income: '"+t+"' is not valid. <br />"),n||(o+="The total dollar amount of tax deductions must be specified. <br />"),!n||x(n)&&e.deductions>=0||(o+="Deductions: '"+n+"' is not valid. <br />"),r||(o+="The number of personal exemptions must be specified. <br />"),!r||x(r)&&e.exemptions>=0||(o+="Exemptions: '"+r+"' is not valid. <br />"),o}(o,e,t,n)}function T(e,t,n,r){document.getElementById("agi").value=e,document.getElementById("itd").value=t,document.getElementById("npe").value=n,document.getElementById("taxYearSelector").value=r}function w(){let e=h("income"),t=h("deductions"),n=h("exemptions"),r=h("taxYear");return""===e&&""===t&&""===n&&(e=v),""==t&&(t="0"),""==n&&(n="1"),parseInt(r)>=2014&&parseInt(r)<=2018||(r="2018"),T(e,t,n,r),_(e,t,n,r)}function A(e){return _(e.income,e.deductions,e.exemptions,e.taxYear)}function I(e){const t=[];for(const n in e)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}function E(){const e={income:document.getElementById("agi").value,deductions:document.getElementById("itd").value,exemptions:document.getElementById("npe").value,taxYear:document.getElementById("taxYearSelector").value};try{const t=A(e);history.pushState(e,"","?"+I(e)),g(t)}catch(t){history.pushState(e,"","?"+I(e)),b(t)}}"undefined"!=typeof window&&function(){try{g(w())}catch(e){b(e)}window.history&&history.pushState&&(function(e){document.forms.input_form.onsubmit=function(){return e(),!1}}(E),window.onpopstate=function(e){const t=e.state;t&&T(t.income,t.deductions,t.exemptions);try{g(t?A(t):w())}catch(e){b(e)}}),document.getElementById("taxYearSelector").onchange=E}()}]);