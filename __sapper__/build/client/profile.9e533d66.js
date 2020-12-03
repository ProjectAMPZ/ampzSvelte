import{S as a,i as s,s as t,e,a as r,t as l,m as n,c as o,b as c,d as f,f as i,g as m,o as u,h as d,I as p,O as h,k as $,j as v,q as g,v as x,w as b,a7 as w,x as j,P as y,Q as N,R as E,W as P,a6 as I,n as B}from"./index.4905b719.js";import"./cookie-universal-common.86071cdf.js";import{g as F}from"./app.3fad8882.js";import{g as R}from"./api.818ad135.js";import{T as S}from"./Textbox.7ead876e.js";import{B as k}from"./Button.acf292d1.js";import"./index.fd4d24bb.js";import{a as A}from"./auth.f85113de.js";import{f as D,a as M}from"./pageFade.073d6706.js";function O(a){let s,t;return{c(){s=e("p"),t=l("Profile Updated"),this.h()},l(a){s=o(a,"P",{class:!0});var e=c(s);t=m(e,"Profile Updated"),e.forEach(f),this.h()},h(){d(s,"class","mb-2 p-2 text-xs bg-yellow-400 rounded")},m(a,e){$(a,s,e),v(s,t)},p:B,d(a){a&&f(s)}}}function T(a){let s,t;return{c(){s=e("p"),t=l(a[2]),this.h()},l(e){s=o(e,"P",{class:!0});var r=c(s);t=m(r,a[2]),r.forEach(f),this.h()},h(){d(s,"class","mb-2 p-2 text-xs primary rounded")},m(a,e){$(a,s,e),v(s,t)},p:B,d(a){a&&f(s)}}}function U(a){let s;return{c(){s=l("Save")},l(a){s=m(a,"Save")},m(a,t){$(a,s,t)},d(a){a&&f(s)}}}function V(a){let s,t,B,F,R,A,V,q,z,H,L,Q,W,C,G,J,K,X,Y,Z,_;function aa(a,s){return a[2]?T:a[1]?O:void 0}let sa=aa(a),ta=sa&&sa(a);function ea(s){a[5].call(null,s)}let ra={label:"First Name"};void 0!==a[0].firstName&&(ra.value=a[0].firstName);const la=new S({props:ra});function na(s){a[6].call(null,s)}y.push(()=>N(la,"value",ea));let oa={label:"Last Name"};void 0!==a[0].lastName&&(oa.value=a[0].lastName);const ca=new S({props:oa});y.push(()=>N(ca,"value",na));const fa=new k({props:{full:!0,rounded:!0,size:"xl",color:"primary",$$slots:{default:[U]},$$scope:{ctx:a}}});return{c(){s=e("main"),t=e("div"),B=e("a"),F=e("i"),R=r(),A=e("h1"),V=l("Profile"),q=r(),ta&&ta.c(),z=r(),H=e("form"),L=e("div"),n(la.$$.fragment),W=r(),n(ca.$$.fragment),G=r(),J=e("br"),K=r(),n(fa.$$.fragment),this.h()},l(a){s=o(a,"MAIN",{class:!0});var e=c(s);t=o(e,"DIV",{class:!0});var r=c(t);B=o(r,"A",{href:!0});var l=c(B);F=o(l,"I",{class:!0}),c(F).forEach(f),l.forEach(f),R=i(r),A=o(r,"H1",{class:!0});var n=c(A);V=m(n,"Profile"),n.forEach(f),r.forEach(f),q=i(e),ta&&ta.l(e),z=i(e),H=o(e,"FORM",{class:!0});var d=c(H);L=o(d,"DIV",{class:!0});var p=c(L);u(la.$$.fragment,p),W=i(p),u(ca.$$.fragment,p),p.forEach(f),G=i(d),J=o(d,"BR",{}),K=i(d),u(fa.$$.fragment,d),d.forEach(f),e.forEach(f),this.h()},h(){d(F,"class","fa fa-arrow-left"),d(B,"href","/my"),d(A,"class","text-2xl font-bold p-6 text-center"),d(t,"class","flex justify-between items-center my-4"),d(L,"class",""),d(H,"class","center bg-white"),d(s,"class","m-auto w-full lg:w-1/2"),_=p(H,"submit",h(a[3]))},m(a,e){$(a,s,e),v(s,t),v(t,B),v(B,F),v(t,R),v(t,A),v(A,V),v(s,q),ta&&ta.m(s,null),v(s,z),v(s,H),v(H,L),g(la,L,null),v(L,W),g(ca,L,null),v(H,G),v(H,J),v(H,K),g(fa,H,null),Z=!0},p(a,t){sa===(sa=aa(a))&&ta?ta.p(a,t):(ta&&ta.d(1),(ta=sa&&sa(a))&&(ta.c(),ta.m(s,z)));const e={};!Q&&1&t[0]&&(Q=!0,e.value=a[0].firstName,E(()=>Q=!1)),la.$set(e);const r={};!C&&1&t[0]&&(C=!0,r.value=a[0].lastName,E(()=>C=!1)),ca.$set(r);const l={};128&t[0]&&(l.$$scope={dirty:t,ctx:a}),fa.$set(l)},i(a){Z||(x(la.$$.fragment,a),x(ca.$$.fragment,a),x(fa.$$.fragment,a),P(()=>{Y&&Y.end(1),X||(X=I(s,M,{})),X.start()}),Z=!0)},o(a){b(la.$$.fragment,a),b(ca.$$.fragment,a),b(fa.$$.fragment,a),X&&X.invalidate(),Y=w(s,D,{}),Z=!1},d(a){a&&f(s),ta&&ta.d(),j(la),j(ca),j(fa),a&&Y&&Y.end(),_()}}}function q(a,s,t){let e={},r=!1;async function l(){try{t(0,e=await R("users/me"))}catch(a){F("/login")}}return l(),[e,r,null,async function(){try{t(0,e=await A.updateProfile(e)),t(1,r=!0)}catch(a){}},l,function(a){e.firstName=a,t(0,e)},function(a){e.lastName=a,t(0,e)}]}export default class extends a{constructor(a){super(),s(this,a,q,V,t,{})}}
