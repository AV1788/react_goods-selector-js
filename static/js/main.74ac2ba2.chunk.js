(this["webpackJsonpreact_goods-selector-js"]=this["webpackJsonpreact_goods-selector-js"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),a=c(4),o=(c(9),c(10),c(1)),i=c(0),r=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],l=function(){var e=Object(o.useState)("Jam"),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(i.jsxs)("main",{className:"section container",children:[Object(i.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[c?"".concat(c," is selected"):"No goods selected",c&&Object(i.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){return s("")}})]}),Object(i.jsx)("table",{className:"table",children:Object(i.jsx)("tbody",{children:r.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"Good",className:"".concat(c===e?"has-background-success-light":""),children:[Object(i.jsx)("td",{children:Object(i.jsx)("button",{"data-cy":c===e?"RemoveButton":"AddButton",type:"button",className:"button ".concat(c===e?"is-info":""),onClick:c===e?function(){s("")}:function(){s(e)},children:c===e?"-":"+"})}),Object(i.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:e})]},e)}))})})]})};n.a.render(Object(i.jsx)(l,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.74ac2ba2.chunk.js.map