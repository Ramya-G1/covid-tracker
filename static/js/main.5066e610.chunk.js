(this["webpackJsonpcovidtracking-app"]=this["webpackJsonpcovidtracking-app"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3a6Qz",card:"Cards_card__ELBmG",infected:"Cards_infected__2SF7B",recovered:"Cards_recovered__JSz0s",deceased:"Cards_deceased__2S-Ol"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(70),o=a.n(c),s=a(5),u=a.n(s),i=a(10),l=a(71),d=a(72),p=a(81),m=a(80),f=a(225),v=a(229),h=a(226),b=a(227),y=a(30),E=a.n(y),g=a(13),x=a.n(g),_=a(31),O=a.n(_),C=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:x.a.container},r.a.createElement(f.a,{container:!0,spacing:7,justify:"center"},r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:O()(x.a.card,x.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary"},"Infected"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(E.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()," "),r.a.createElement(b.a,{variant:"body2"},"Number of active cases of COVID cases"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:O()(x.a.card,x.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary"},"Recovered"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(E.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()," "),r.a.createElement(b.a,{variant:"body2"},"Number of recovered cases of COVID cases"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:O()(x.a.card,x.a.deceased)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary"},"Deaths"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(E.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()," "),r.a.createElement(b.a,{variant:"body2"},"Number of deaths of COVID cases"))))):"loading..."},w=a(29),S=a(32),j=a.n(S),k="https://covid19.mathdro.id/api",D=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,r,c,o,s,i,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=k,t&&(a="".concat(k,"/countries/").concat(t)),e.prev=2,e.next=5,j.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,i=r.dailySummary,l=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,dailySummary:i,lastUpdate:l});case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(k,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(k,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),V=a(43),U=a(77),A=a.n(U),B=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,s=e.country,l=Object(n.useState)([]),d=Object(w.a)(l,2),p=d[0],m=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}));var f=p.length?r.a.createElement(V.Line,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,v=a?r.a.createElement(V.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"people",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"current state in ".concat(s)}}}):null;return r.a.createElement("div",{className:A.a.container},s?v:f)},G=a(230),J=a(228),z=a(78),L=a.n(z);var R=function(e){var t=e.handlecountrychange,a=Object(n.useState)([]),c=Object(w.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),r.a.createElement(G.a,{className:L.a.formControl},r.a.createElement(J.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),";"))},F=a(44),H=a.n(F),M=a(79),P=a.n(M),Q=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handlecountrychange=function(){var t=Object(i.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:H.a.container},r.a.createElement("img",{className:H.a.image,src:P.a,alt:"COVID-19"}),r.a.createElement(C,{data:t}),r.a.createElement(R,{handlecountrychange:this.handlecountrychange}),r.a.createElement(B,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(Q,null),document.getElementById("root"))},44:function(e,t,a){e.exports={container:"App_container__2XoyG",image:"App_image__2---h"}},77:function(e,t,a){e.exports={container:"Chart_container__2U0UA"}},78:function(e,t,a){e.exports={formControl:"Countrypicker_formControl__1S68P",container:"Countrypicker_container__2x1HV"}},79:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},84:function(e,t,a){e.exports=a(207)}},[[84,1,2]]]);
//# sourceMappingURL=main.5066e610.chunk.js.map