(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[8],{38:function(e,c,t){"use strict";t(0);var a=t(39),s=t.n(a),n=t(37),r=t(1);c.a=function(e){return Object(r.jsx)("aside",{className:"".concat(e.isHowItWorksOpen?"sidebar-wrapper show":"sidebar-wrapper "),children:Object(r.jsxs)("div",{className:"sidebar",children:[Object(r.jsx)("button",{className:"close-btn",onClick:e.closeHowItWorks,children:Object(r.jsx)(n.g,{})}),Object(r.jsx)("h3",{className:s.a.header,children:"How it works"}),Object(r.jsxs)("ul",{className:s.a.container,children:[Object(r.jsxs)("li",{className:s.a.item,children:[Object(r.jsx)("span",{className:s.a.number,children:"1"}),Object(r.jsxs)("div",{className:s.a.content,children:[Object(r.jsx)("div",{className:s.a.title,children:"Find your car park!"}),Object(r.jsx)("p",{className:s.a.read,children:"Sign up and check our presence at hotels, restaurants, airport..."})]})]}),Object(r.jsxs)("li",{className:s.a.item,children:[Object(r.jsx)("span",{className:s.a.number,children:"2"}),Object(r.jsxs)("div",{className:s.a.content,children:[Object(r.jsx)("div",{className:s.a.title,children:"Book!"}),Object(r.jsx)("p",{className:s.a.read,children:"Select date and time, check availability, see prices..."})]})]}),Object(r.jsxs)("li",{className:s.a.item,children:[Object(r.jsx)("span",{className:s.a.number,children:"3"}),Object(r.jsxs)("div",{className:s.a.content,children:[Object(r.jsx)("div",{className:s.a.title,children:"And park!"}),Object(r.jsx)("p",{className:s.a.read,children:"Upon arrival, just show your reservation in the car park."})]})]})]}),Object(r.jsx)("a",{className:s.a.car,href:"https://www.animatedimages.org/cat-cars-67.htm",children:Object(r.jsx)("img",{src:"https://www.animatedimages.org/data/media/67/animated-car-image-0021.gif",border:"0",alt:"park here"})})]})})}},39:function(e,c,t){e.exports={header:"HowItWorks_header__2jbTN",container:"HowItWorks_container__1hcMr",item:"HowItWorks_item__2AppD",title:"HowItWorks_title__3O16l",content:"HowItWorks_content__22GD6",read:"HowItWorks_read__1nMb0",number:"HowItWorks_number__1eu40",car:"HowItWorks_car__1PP4K"}},40:function(e,c,t){e.exports={user:"UserIn_user__2gyyo",fadeIn:"UserIn_fadeIn__3GMCt"}},41:function(e,c,t){"use strict";var a=t(42),s=t.n(a),n=t(1);c.a=function(){var e=(new Date).getFullYear();return Object(n.jsx)("div",{className:s.a.footer,children:Object(n.jsx)("footer",{className:s.a.foot,children:Object(n.jsxs)("span",{children:["\xa9 ",e," Parklane. All Rights Reserved."]})})})}},42:function(e,c,t){e.exports={footer:"Footer_footer__2HA2c",foot:"Footer_foot__3oZg2"}},43:function(e,c,t){"use strict";var a=t(7),s=t(0),n=t(11),r=t(37),i=t(38),o=t(10),l=t(40),j=t.n(l),d=t(1),b=function(){var e=Object(o.b)().email;return Object(d.jsx)("div",{className:j.a.user,children:Object(d.jsxs)("p",{children:["Welcome User ",e,"!"]})})};c.a=function(){var e=Object(o.b)(),c=e.logoutHandler,t=e.email,l=Object(s.useState)(!1),j=Object(a.a)(l,2),u=j[0],h=j[1],x=Object(s.useState)(!1),m=Object(a.a)(x,2),O=m[0],p=m[1],k=Object(s.useRef)(null),A=Object(s.useRef)(null),g=Object(s.useRef)(null),N=function(){c()},v=function(){h((function(e){return!e}))};return Object(s.useEffect)((function(){var e=A.current.getBoundingClientRect().height;O?(k.current.style.height="".concat(e,"px"),g.current.style.transform="rotate(90deg)",g.current.style.color="#19222a"):(k.current.style.height="0px",g.current.style.transform="rotate(0deg)",g.current.style.color="beige")}),[O]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("nav",{className:"nav2",children:Object(d.jsxs)("div",{className:"nav-center",children:[Object(d.jsxs)("div",{className:"nav-header2",children:[Object(d.jsx)(n.b,{to:"/",children:Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAABRCAYAAABok8z3AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH5QcYERIk9MPetAAADrJJREFUeNrtnd1TFEfbh6+e/QAEFhbkEQxRA0peBSpgVCooUdHHQg3RRN9KXk/MSf6unKQs81UmUZRo1GiMeTASoUQjIgoqoEZgd9kP9mOm3wOdfUAWdhZYNbV9Vc0B7ExP992/ufvuu3t3xOHDhyUKRYagveoKKBQvEyV4RUahBK/IKJTgFRmFErwio1CCV2QUSvCKjEIJXpFRKMErMgoleEVGoQSvyCiU4BUZhRK8IqNQgldkFErwioxCCV6RUSjBKzIK+6uugEJhBd0AKcWsn2uaRBPJy0koeCnBMARzfffPpkmEhRsoFAvFbpe8vTxC3hKDGaIUYEgY/tvBo1F7Uk3OELyU8K+iGOurQizJMSDBUxWOCjpv5fB4TA0QivQiJeQ4JXsaJ1hdHkYyXY8CSUwX/Piri+Gn+djE3F/RTij44gKdprogSwtiGC9cLwT4AjYGRpxK8IqXhiFBNxK5b5E0GpnKrCFNTIeoLpAJStJn+b9CkS4E/DdckVgW+Iuk5KJF/M6gwnfFy0JKCEU0gpMaUj6boGY55jeHtCz44KRGMKyBBH9IYzKiJK9IP0LAZERwuiOP3GwDBKx+I0JTXQCHPXU/b1nwt+9n8VNHHpHYs5hpIqBS+IqXQ0wX9D90IhEIJNkOiSEF8wlsLAt+MiJ4PG4nEhXT4ymF4iWgaQDPwhhtAb7WegwvQHt+KBT/VFRcosgolOAVGcWirhxJKTEMAznPJL2maWhTAjTDMDAMI+VyhBBomoZ4PtGYbzlzlSWEwGazWSpj6v3NNkop0XUdAJvNFi9/PizE7lNt/mI5qdRrql1Me+m6vmhaWCwWTfBSStxuNxs3bsTlciGlTKkTJycn6evro7+/P26oiooKqquryc7OtlyOYRg8fvyY7u5u/H4/UkrWrFlDTU0NdntqzZVSMjY2RldXFx6PBykltbW1VFVVMTIyQldXF6FQaM522u12ampqeOutt4hGo1y/fp3BwUFKSkrYtGkTTqeTzs5O7t+/P2/R5+fnU1dXR0lJSUoiCYVC3Lx5k8HBQaSUFBQUsGHDBtxuN5FIhO7ubh48eJBUtFJKqqqqqKmpYXx8nD///JNgMMjmzZtZtmxZyu2SUtLf3093d/e87DEXiyr4wsJCmpubKSsrS/l6wzAYGhri22+/pauri8rKSj799FNWr16d8pPu9/spLS2lra2NYDBIRUUFra2tKQsenj2IlZWVHD16FL/fz9q1a9m7dy9dXV309vYSCoVmvVYIwbp16/jkk08oLS3l6tWrdHR0xJ1Dc3MzeXl5DA8PMzAwYHnEmGrz3Nxcdu/ezfbt21myZElK1+u6Tl1dHV999RV37tzB5XKxdetWVq5cGXc4X375JU+fPk0qWtPG9+7d4/bt24TDYRobG6murk7Z5oZhcPbs2ddb8CbmsDg4OMjTp08tnW+z2XjjjTcoLy9n48aN9Pf3U19fT2VlJaOjo3R3dxOJROY0uumFSktLqa2tpaGhgWvXrnHnzp14nQKBAHfv3k3qlc3ylixZQkVFBfX19dy4cYPLly9bDh+klKxcuZLW1lZKS0u5efMmx44d4/HjxwghkFISi8WIRqPzHvallJSXl7N+/XocDgddXV0MDw8DJLVVTk4O1dXVVFZWUl9fT39//7T+M0ez1tZWvvnmG/x+f9IyX7SLGbb19vbGRxEr3t4wDO7cuTMvmyQjLbu/wuEwp0+fpqOjI+m5UkqcTid79+5lz549FBQUkJWVRVFREZqm0dPTw9GjR+Px7lzouk5VVRUrV64kKyuLvLy8aZ8PDQ1x5MgRHj16lNTwhmGwfPlyPvvsMyoqKnC73ZbbbxgGJSUl7N27l8rKSh48eMDx48cZGhqKx++LgZSSvLw8cnNz8Xg8tLe3c+vWLUsPc35+Pg6Hg8bGRnJzc2f03/DwMKWlpTQ0NOD1emlvbycYDKYcnhiGwe3btzl58iTRaHRR2r0Q0iJ488m2MlE0PcNU7zDVqFLK+GGlLCue15xczYVhGMRisfiDZrWjpZS4XC5aWlqor69nfHycU6dO0dfXt6CJqVU7pmqn2c7v7OwkNzeXnTt3sm3bNrxeL7/++mvSkXahdk83aUtLvuqGvYo2SCnJzs6mubmZzZs3E41GOXv2LJ2dnZZGqNcFIQRer5cTJ07wxx9/kJeXx65du6iurv7H96va0D5PzBg8FovFReBwONi0aRPNzc3Y7XbOnTvH+fPnCYfD/zihCCHw+Xz8+OOPuFwuampq+PDDDxkfH2dgYCCl9hiGga7rSR/6F1PA6SBtgk82ZL4qrIZHyepeVFTEe++9F49rzbi4qamJvLw8rly5Mu+493VB0zSePHlCW1sb+fn5rFq1iv3793P06FFL8yCzjBUrVvD+++9Pcw6JCIVC9PX14fF40maztAje4XBQUVFBIBCwJC6n08ny5cux2WzEYrFp12iahtPptDxpnSv1mJ+fT1VVFcXFxUnLklKybNky3G43hmEQiUSmfb5ixQrKy8un/U/TNGw2G4ODg5w9e5axsbG0LJ4kQgiB3W7H4XAkvaeUMn6eFWH19fXR3t7OwYMHqa2txefzcezYMcbHx5NmbjRNo66ujnfeeSdp/Z88ecIXX3zB2NhYyilaq6QlLelwOGhubqapqcnyddnZ2YTDYW7fvk0sFosboaGhgXXr1lm+t9PpxOVy4fP5Zny+bNkyDh06lHAybU6qgLhg7HY7WVlZ3L9/n7t3707r3HA4jMfjmfYgOp1OiouLcbvdrFq1inv37qHreto9vJSSoqIiPv/8c0uTSlOI+fn58b/nQtd1Ojs7yc/PZ//+/TQ0NODz+Whvb8fv9yetXyAQYGJiYs77CCEYHR2d96TYKmnx8LquxytvlcnJSXp6erh48eKMBmdlZVkuZy7vNjk5yejoaELBu1yuuDf/+++/4wtKo6OjXLp0iYGBgWnn9/b2cuTIkWlebunSpRw4cID169fT0tKC1+vl6tWr6TBxQmw2W0qr0lYRQhCLxbhw4QIul4tdu3axY8cOotEoP/30E5OTk3Ned/HiRdrb25PqwczupXNUXHTBCyGIRCKcOXOGW7duWb5ucnISj8dDLBbD5XLFDXDz5k0uXbpkKcVpGAZlZWXs2bMnoZcYGRnhu+++SzgUl5eX8/HHH7N06VKGhoY4c+YMHo8Hr9dLIBCYcf7UhSPzs5GREU6cOIHL5WLNmjW0trYSCAT466+/FtvMM2zu8/k4deqUpdjazCZt2bIlpcxLJBLh559/prCwkMbGRrZv387o6CiXL1+e8zpd14lEImn33lZIWx7e7/czNDRkeYIohIgfU/F4PFy7ds1yDP/2228Ti8USxvLmyDM8PDzjPiMjI2RnZ3PgwAGqq6u5f/8+bW1tKXfSvXv3+P777zl06BArVqzggw8+YGJigocPH6bD1HGi0Sh37961vPDkcrmora1NqW1muvL06dO43W5qa2vZs2cP4+PjKSUDXiVpzcObaSYrx2yGN3clWj2STcRmq5NhGFy5coXz588jpWTHjh00NTVhs9lS6kghBDdu3ODrr7/m0aNHrF27lt27d+N2u2ctx1x4M1N3Vo8XRz1z0pyKnVIVqRCChw8f0tbWxsDAAMuXL2ffvn28+eabs5Y1dXFxvm1bLFQe/jlCCEKhEBcuXKCoqIjGxkZaWloIhUJ0dHSk1AFCCHp6emhra+PgwYNs2LCB8fFxjh8/PiPe1TSNsrIy1q1bl3Ls6vV657UhbjHo7e3l+PHj8Q1+RUVFCZ2DEAK32x0fea2MKFJKPB4PT548WfR6p8VarzpOS1SHROFSomvGxsY4efIkBQUF1NbWsm/fPiKRSDysSmV/+NWrVykuLqalpYVt27bh8/k4d+7ctD0lOTk57Ny5k61bt6Zst+vXr/PgwYMF2TyRnawgpeTatWu4XC4++ugjSkpKEl5vs9l49913U5orGIbBb7/9xg8//DCvNs3Fogpe13V8Ph+apqWUoXkRKSXBYBCPxzPn9tsXMb904PP54jl9cxLt8XiYmJiwtNo3MjLCsWPHcDqdlJWVsWXLFh49esTDhw8JhUJ4PB4CgUBSrx8Khfjll19wuVzU19fT0NDA0NAQPT098Xrm5OSgaVpKmSgTp9NJLBbD6/USiUTi6dxUbRwMBuP9NzExQXZ2tqX+03Wd33//ncLCQjZv3ozdbmdiYiK+p8fv9+P1ehFCpNQ+wzDSNnKJw4cPTxuDDAPWvhXm//7tobhAj//C2H9uLOHbcwVEonP9guuzjjNFlkoHTKuUEDidTux2O9FoNKWHZ2odwuEwuq7jcDhwOBzxBSSr4Ul2dnZ8mDbLMutlZh6sxMDm/U27RKPReD0XkoKLxWIYhoHD4UBKSSQSsbxnx7Sx6Rgikci8+89ut+N0OuMOx7Sxab/5MFu/CwEb14b43x1eshzP+lHXBcd/y+fMlXxsWoq/LbkQDMNIySPPhimwcDi8KHWIRqPz2pqaKL9sptdSIdH9F8tWZvmpYtp4Mepk7imyYr9XjfoStyKjUIJXZBQqLan4R2A8fwOIEJKFpOhTEryUz47XIOuoyCAcdsn/rApTmGcAkjf/FUUT81vVtSz4FcuiHNjuwzAgFBZcubGEx+NqgFCkFykhyyl5vy5A5RuRuMNNlo2ZDcuKLSuOUlYcBQETQRt3HmQpwSteCgJw2OSzn8dewMsQIAXBTw1jtOcvRVAoXhYSFuWtM7MKXojnIk/w1jSF4mVjzh8TydGQ1h+GhIKP6YKJoIbDLpEvzojFszeAxHSlfEX6EQKCk4KvzxaS7UycnpESxidsliayM7YWANg0cDoMNDFLvCQhHNXQ07ODU6GYgSGZM3iPRyRJSOjhdQNCYbUmpXh9WKx5o1K1IqNQgldkFErwioxCCV6RUSjBKzIKJXhFRqEEr8golOAVGYUSvCKjUIJXZBRK8IqMQglekVEowSsyCiV4RUahBK/IKJTgFRmFErwio1CCV2QUSvCKjEIJXpFR/D9cr8IUHPh31AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNy0yNFQxNDoxODozNiswMzowMCGC3NoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDctMjRUMTQ6MTg6MzYrMDM6MDBQ32RmAAAAAElFTkSuQmCC",className:"nav-logo",alt:"parklane"})}),Object(d.jsx)("button",{className:"btn toggle-btn",ref:g,onClick:function(){return p(!O)},children:Object(d.jsx)(r.a,{})})]}),Object(d.jsx)("div",{className:"links-container",ref:k,children:Object(d.jsxs)("ul",{className:"links",ref:A,children:[Object(d.jsx)("li",{className:"splink",children:Object(d.jsx)("span",{children:t})}),Object(d.jsx)("li",{children:Object(d.jsx)(n.b,{to:"/profile",children:Object(d.jsxs)("span",{children:[O&&Object(d.jsx)(r.b,{})," Home"]})})}),Object(d.jsx)("li",{children:Object(d.jsx)(n.b,{to:"/bookings",children:Object(d.jsxs)("span",{children:[O&&Object(d.jsx)(r.f,{})," Bookings"]})})}),Object(d.jsx)("li",{onClick:v,children:Object(d.jsxs)("span",{style:{cursor:"pointer"},children:[O&&Object(d.jsx)(r.c,{})," How it works"]})}),Object(d.jsx)("li",{className:"logout-mobile",children:Object(d.jsxs)("span",{onClick:N,children:[O&&Object(d.jsx)(r.e,{})," Sign out"]})}),Object(d.jsx)("div",{className:"dot"})]})}),Object(d.jsx)(b,{}),Object(d.jsx)("button",{className:"logout-pc",onClick:N,children:"Sign out"})]})}),u&&Object(d.jsx)(i.a,{isHowItWorksOpen:u,closeHowItWorks:v})]})}},56:function(e,c,t){e.exports={heading:"Bookings_heading__17X1b",note:"Bookings_note__13HyI",container:"Bookings_container__13J25","responsive-table":"Bookings_responsive-table__2zyCR","table-header":"Bookings_table-header__2x9bx","table-row":"Bookings_table-row__3h5uJ","col-1":"Bookings_col-1__2bcBh",col:"Bookings_col__2VA05",BookingsError:"Bookings_BookingsError__3E7py",expired:"Bookings_expired__1ikQs"}},60:function(e,c,t){"use strict";t.r(c);var a=t(12),s=t.n(a),n=t(18),r=t(7),i=t(0),o=t.n(i),l=t(43),j=t(41),d=t(17),b=t(56),u=t.n(b),h=t(10),x=t(1),m=function(){var e=Object(h.b)(),c=e.email,t=e.setSearchTerm,a=e.token,b=Object(i.useState)([]),m=Object(r.a)(b,2),O=m[0],p=m[1],k=Object(i.useState)(!0),A=Object(r.a)(k,2),g=A[0],N=A[1],v=Object(i.useState)(),w=Object(r.a)(v,2),f=w[0],S=w[1],y=new Date;Object(i.useEffect)((function(){t("")}),[]);var F=c;return F=F.replace(/\./g,"-"),Object(i.useEffect)((function(){(function(){var e=Object(n.a)(s.a.mark((function e(){var c,t,n,r,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://parklane-24dk-default-rtdb.firebaseio.com/bookings/".concat(F,".json?auth=").concat(a));case 2:if((c=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,c.json();case 7:for(i in t=e.sent,n=[],r=[],t)y>new Date(t[i].user.timeSlot[1])?r.push({ticketId:t[i].user.id,license:t[i].user.license,place:t[i].user.place,entryTime:t[i].user.timeSlot[0],exitTime:t[i].user.timeSlot[1]}):n.push({ticketId:t[i].user.id,license:t[i].user.license,place:t[i].user.place,entryTime:t[i].user.timeSlot[0],exitTime:t[i].user.timeSlot[1]});r.sort((function(e,c){return new Date(e.exitTime)-new Date(c.exitTime)})),r.reverse(),n.reverse(),o=n.concat(r),p(o),N(!1);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){S(e.message),N(!1)}))}),[F,a]),f?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(l.a,{}),Object(x.jsx)("section",{className:u.a.BookingsError,children:Object(x.jsx)("p",{children:f})})]}):Object(x.jsxs)(o.a.Fragment,{children:[Object(x.jsx)(l.a,{}),Object(x.jsx)("h2",{className:u.a.heading,children:"Your Bookings"}),g&&Object(x.jsx)(d.a,{}),!g&&Object(x.jsx)("div",{className:u.a.container,children:Object(x.jsxs)("ul",{className:u.a["responsive-table"],children:[Object(x.jsxs)("li",{className:u.a["table-header"],children:[Object(x.jsx)("div",{className:"".concat(u.a.col," ").concat(u.a["col-1"]),children:"Ticket ID"}),Object(x.jsx)("div",{className:"".concat(u.a.col," ").concat(u.a["col-1"]),children:"License Plate"}),Object(x.jsx)("div",{className:"".concat(u.a.col," ").concat(u.a["col-1"]),children:"Place"}),Object(x.jsx)("div",{className:"".concat(u.a.col," ").concat(u.a["col-1"]),children:"Entry Time"}),Object(x.jsx)("div",{className:"".concat(u.a.col," ").concat(u.a["col-1"]),children:"Exit Time"})]}),O.map((function(e,c){return Object(x.jsxs)("li",{className:u.a["table-row"],children:[y>new Date(e.exitTime)&&Object(x.jsxs)("div",{className:"".concat(u.a.col," ").concat(u.a["col-1"]),"data-label":"Ticket ID",children:[e.ticketId," ",Object(x.jsx)("span",{className:u.a.expired,children:"Expired"})]}),y<=new Date(e.exitTime)&&Object(x.jsx)("div",{className:"".concat(u.a.col," ").concat(u.a["col-1"]),"data-label":"Ticket ID",children:e.ticketId}),Object(x.jsx)("div",{className:"".concat(u.a.col," ").concat(u.a["col-1"]),"data-label":"License Plate",children:e.license}),Object(x.jsx)("div",{className:"".concat(u.a.col," ").concat(u.a["col-1"]),"data-label":"Place",children:e.place}),Object(x.jsx)("div",{className:"".concat(u.a.col," ").concat(u.a["col-1"]),"data-label":"Entry Time",children:e.entryTime}),Object(x.jsx)("div",{className:"".concat(u.a.col," ").concat(u.a["col-1"]),"data-label":"Exit Time",children:e.exitTime})]},c)}))]})}),!g&&Object(x.jsxs)("div",{className:u.a.note,children:[Object(x.jsx)("div",{children:"* There is no need to print anything out! All your bookings are here."}),Object(x.jsx)("div",{children:"* Modern Parking lots are equipped with Automatic License Plate Recognition (ALPR)."})]}),!g&&Object(x.jsx)(j.a,{})]})};c.default=function(){return Object(x.jsx)(m,{})}}}]);
//# sourceMappingURL=8.7ac2d887.chunk.js.map