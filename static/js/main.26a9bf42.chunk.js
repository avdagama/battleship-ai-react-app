(this["webpackJsonpbattleship-ai-react-app"]=this["webpackJsonpbattleship-ai-react-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(7),a=n.n(i),l=(n(12),n(6)),s=n(2),o=(n(13),n(14),n(0));var u=function(e){var t,n=e.value,r=e.x,c=e.y,i=e.hideShips,a=e.onCellClick;switch(n){case"W":t="royalblue";break;case"M":t="lightgray";break;case"D":t="black";break;case"H":t="crimson";break;case"S":t=i?"royalblue":"green";break;default:t="white"}return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{onClick:function(){return a(r,c)},className:"cell",style:{background:t}})})};var j=function(e){for(var t=e.board,n=e.hideShips,r=e.onCellClick,c=[],i=0;i<t.length;i++){for(var a=[],l=0;l<t[i].length;l++)a.push(Object(o.jsx)(u,{value:t[i][l],x:l,y:i,hideShips:n,onCellClick:r},i+" "+l));c.push(Object(o.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:a},i))}return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{children:c})})};var b=function(){var e=Array.from(Array(10),(function(e){return Array(10).fill("W")})),t=Array.from(Array(10),(function(e){return Array(10).fill("W")})),n=[[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5],[.5,.6,.6,.6,.6,.6,.6,.6,.6,.5],[.5,.6,.7,.7,.7,.7,.7,.7,.6,.5],[.5,.6,.7,.8,.8,.8,.8,.7,.6,.5],[.5,.6,.7,.8,.9,.9,.8,.7,.6,.5],[.5,.6,.7,.8,.9,.9,.8,.7,.6,.5],[.5,.6,.7,.8,.8,.8,.8,.7,.6,.5],[.5,.6,.7,.7,.7,.7,.7,.7,.6,.5],[.5,.6,.6,.6,.6,.6,.6,.6,.6,.5],[.5,.5,.5,.5,.5,.5,.5,.5,.5,.5]],c=Object(r.useState)(e),i=Object(s.a)(c,2),a=i[0],u=i[1],b=Object(r.useState)(t),h=Object(s.a)(b,2),d=h[0],f=h[1],O=Object(r.useState)(n),x=Object(s.a)(O,2),p=x[0],g=x[1],S=Object(r.useState)(!0),y=Object(s.a)(S,2),v=y[0],m=y[1],k=Object(r.useState)(null),C=Object(s.a)(k,2),w=C[0],A=C[1];function F(e){switch(e){case"W":return"M";case"S":return"H";default:return null}}function I(e){for(var t=0;t<e.length;t++)for(var n=0;n<e[t].length;n++)if("S"===e[t][n])return!1;return!0}return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{style:{margin:40},children:"BATTLESHIP AI"}),null!=w&&Object(o.jsxs)("div",{className:"grow",style:{margin:60,textAlign:"center"},children:[Object(o.jsx)("h2",{children:w?"You won!":"You lost!"}),Object(o.jsx)("button",{onClick:function(){u(e),f(t),g(n),m(!0),A(null)},className:"button",children:"Play again"})]}),Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",margin:40},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"You"}),Object(o.jsx)(j,{board:a,hideShips:!1,onCellClick:function(e,t){v&&u((function(n){var r=n.map((function(e){return e.slice()}));return r[t][e]="S"===r[t][e]?"W":"S",r}))}})]}),v?Object(o.jsxs)("div",{style:{textAlign:"center",width:"30vw",margin:"auto 0"},children:[Object(o.jsx)("p",{children:"Your goal is to sink all of the AI's ships before it can sink yours."}),Object(o.jsx)("p",{children:"To start, place the following ships horizontally or verically by clicking cells on the grid:"}),Object(o.jsxs)("p",{children:["Carrier (5 spaces)",Object(o.jsx)("br",{}),"Battleship (4 spaces)",Object(o.jsx)("br",{}),"Cruiser (3 spaces)",Object(o.jsx)("br",{}),"Submarine (3 spaces)",Object(o.jsx)("br",{}),"Destroyer (2 spaces)"]}),Object(o.jsx)("button",{onClick:function(){d[8][1]="S",d[8][2]="S",d[8][3]="S",d[8][4]="S",d[8][5]="S",d[0][1]="S",d[1][1]="S",d[2][1]="S",d[3][1]="S",d[4][4]="S",d[4][5]="S",d[4][6]="S",d[7][9]="S",d[8][9]="S",d[9][9]="S",d[2][7]="S",d[1][7]="S",m((function(){return!1}))},className:"button",children:"I'm done placing my ships"})]}):Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"AI"}),Object(o.jsx)(j,{board:d,hideShips:!0,onCellClick:function(e,t){null==w&&!1!==function(e,t){var n=F(d[t][e]);return null!=n&&(d[t][e]=n,f((function(e){return Object(l.a)(e)})),!0)}(e,t)&&(I(d)?A(!0):(!function(){var e=function(){for(var e,t=0,n=0;n<p.length;n++)for(var r=0;r<p[n].length;r++)p[n][r]>t&&(t=p[n][r],e={x:r,y:n});return e}(),t=e.x,n=e.y,r=F(a[n][t]);(function(e,t,n){p[t][e]=0,n})(t,n,r),a[n][t]=r,u((function(e){return Object(l.a)(e)}))}(),I(a)&&A(!1)))}})]})]}),Object(o.jsx)("div",{style:{margin:80,textAlign:"center"},children:Object(o.jsx)("a",{style:{fontSize:14,color:"dimgray"},href:"https://github.com/avdagama/battleship-ai-react-app",children:"View project on GitHub"})})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.26a9bf42.chunk.js.map