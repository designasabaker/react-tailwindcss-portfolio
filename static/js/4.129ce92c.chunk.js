(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[4],{41:function(e,t,r){"use strict";t.a=r.p+"static/media/WeLight.6bb56a82.png"},42:function(e,t,r){"use strict";t.a=r.p+"static/media/EcoHomeCover.6ef576db.png"},43:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return x}));var a=r(8),i=r(1),c=r(41),n=r(44),s=r(42),o=r.p+"static/media/FPSCover.f2a1f741.png",l=r.p+"static/media/SimpleNim-cover.b1ec959f.png",d=r.p+"static/media/shekon-cover.3f6669d2.png",m=r.p+"static/media/nasa-cover.7d87edf6.png",g=r.p+"static/media/gd-cover.05c3d240.png",p=r.p+"static/media/oceanic-cover.46b1578c.png",b=r.p+"static/media/carpet-cover.59d05454.png",j=(r(45),[{id:1,name:"WeLight",title:"WeLight Tech",brief:"Education Website Development",category:"Web Application",img:c.a,ProjectHeader:{title:"WeLight Tech",publishDate:"Apr 15, 2023",tags:"UI / Frontend"}},{id:2,name:"OSB",title:"OSB",brief:"Cosmetic Ingredients Website Development",category:"Web Application",img:n.a,ProjectHeader:{title:"OSB Website",publishDate:"Apr 15, 2023",tags:"UI / Frontend"}},{id:3,name:"EcoHome",title:"EcoHome",brief:"Energy Saving Mobile Design",category:"UI/UX Design",img:s.a,ProjectHeader:{title:"EcoHome",publishDate:"Feb 21, 2021",tags:"UI / Frontend"}},{id:4,name:"FPShopping",title:"FPShopping",brief:"Academic Design Thesis",category:"Web Application",img:o},{id:6,name:"Shekon",title:"Sh\xe9:kon",category:"XR Application",brief:"Unity VR Development",img:d},{id:11,name:"Carpet",title:"Magic Carpet",category:"Computational Design",brief:"Recursion Generated Form Study",img:b},{id:7,name:"NasaSuit",title:"Nasa Suit AR Challenge",category:"XR Application",brief:"Unity AR Development",img:m},{id:5,name:"SimpleNim",title:"Simple Nim",brief:"Web Game Development",category:"Web Application",img:l},{id:9,name:"gd",title:"Graphic Design Collection",category:"Graphic Design",brief:"Professional Works",img:g},{id:10,name:"Oceanic",title:"Oceanic",category:"Computational Design",brief:"Algorithm Based Form Study",img:p},{id:2,name:"Interactive Architecture",title:"Interactive Architecture",category:"Web Application",brief:"Web Game Development",img:p}]),u=r(2),h=Object(i.createContext)(),x=function(e){var t=Object(i.useState)(j),r=Object(a.a)(t,2),c=r[0],n=r[1],s=Object(i.useState)(""),o=Object(a.a)(s,2),l=o[0],d=o[1],m=Object(i.useState)(""),g=Object(a.a)(m,2),p=g[0],b=g[1],x=Array.from(new Set(c.map((function(e){return e.category}))));console.log("projectCategories",x);var y=c.filter((function(e){return e.title.toLowerCase().includes(l.toLowerCase())||""===l?e:""})),f=c.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(p)}));return Object(u.jsx)(h.Provider,{value:{projects:c,setProjects:n,searchProject:l,setSearchProject:d,searchProjectsByTitle:y,selectProject:p,setSelectProject:b,selectProjectsByCategory:f,projectCategories:x},children:e.children})}},44:function(e,t,r){"use strict";t.a=r.p+"static/media/OSB-2.3f91919c.png"},45:function(e,t,r){"use strict";t.a=r.p+"static/media/ide-02.71d53b0f.png"},46:function(e,t,r){"use strict";var a=r(1),i=r(6),c=r(39),n=r(13),s=r(2),o=function(e){var t=e.title,r=e.category,a=e.brief,i=e.image,o=e.name;return Object(s.jsx)(c.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(s.jsx)(n.b,{to:"/react-tailwindcss-portfolio/projects/".concat(o),"aria-label":"".concat(o),children:Object(s.jsxs)("div",{className:"relative shadow-lg h-lg rounded-xl hover:shadow-xl cursor-pointer dark:bg-ternary-dark",children:[Object(s.jsx)("div",{className:"hover-zoom",children:Object(s.jsx)("img",{src:i,className:"w-full h-1/2 object-contain overflow-hidden",alt:"Single Project"})}),Object(s.jsxs)("div",{className:"flex-grow px-6 py-4",children:[Object(s.jsx)("div",{className:"font-bold mt-2 text-xl py-0 dark:text-ternary-light ",children:t}),Object(s.jsx)("p",{className:"text-gray-700 text-sm dark:text-ternary-light",children:a})]}),Object(s.jsx)("div",{className:"px-6 pb-0 mb-0 top-12 absolute bottom",children:Object(s.jsx)("p",{className:"z-10 bg-gray-50 rounded-full px-35 py-1 text-sm font-semibold text-secondary-dark mr-2 mb-2",children:r})})]})})})},l=r(43),d=function(e){var t=e.setSelectProject,r=Object(a.useContext)(l.a).projectCategories;return Object(s.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"font-general-medium \r px-4\r sm:px-6\r py-2\r border\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r dark:font-medium\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",children:[Object(s.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),r.map((function(e){return Object(s.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))]})};t.a=function(){var e=Object(a.useContext)(l.a),t=e.projects,r=e.searchProject,c=e.setSearchProject,n=e.searchProjectsByTitle,m=e.selectProject,g=e.setSelectProject,p=e.selectProjectsByCategory;return Object(s.jsxs)("section",{id:"homeProjects",className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),Object(s.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(s.jsx)("h3",{className:"font-general-regular \r text-center text-secondary-dark\r dark:text-ternary-light\r text-md\r sm:text-xl\r mb-3\r ",children:"Search projects by title or filter by category"}),Object(s.jsxs)("div",{className:"\r flex\r justify-between\r border-b border-primary-light\r dark:border-secondary-dark\r pb-3\r gap-3\r ",children:[Object(s.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(s.jsx)("span",{className:"\r hidden\r sm:block\r bg-primary-light\r dark:bg-ternary-dark\r p-2.5\r shadow-sm\r rounded-xl\r cursor-pointer\r ",children:Object(s.jsx)(i.j,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(s.jsx)("input",{onChange:function(e){c(e.target.value)},className:"font-general-medium \r pl-3\r pr-1\r sm:px-4\r py-2\r border \r border-gray-200\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(s.jsx)(d,{setSelectProject:g})]})]}),Object(s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:m?p.map((function(e){return Object(s.jsx)(o,{title:e.title,brief:e.brief,category:e.category,image:e.img,name:e.name},e.id)})):r?n.map((function(e){return Object(s.jsx)(o,{title:e.title,brief:e.brief,category:e.category,image:e.img,name:e.name},e.id)})):t.map((function(e){return Object(s.jsx)(o,{title:e.title,brief:e.brief,category:e.category,image:e.img,name:e.name},e.id)}))})]})}},49:function(e,t,r){"use strict";r.r(t);var a=r(46),i=r(43),c=r(2);t.default=function(){return Object(c.jsx)(i.b,{children:Object(c.jsx)("div",{className:"container mx-auto",children:Object(c.jsx)(a.a,{})})})}}}]);
//# sourceMappingURL=4.129ce92c.chunk.js.map