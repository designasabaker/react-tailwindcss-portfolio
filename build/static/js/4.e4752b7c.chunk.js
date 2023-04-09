(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[4],{41:function(e,t,r){"use strict";t.a=r.p+"static/media/WeLight.6bb56a82.png"},42:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var a=r(8),i=r(1),c=r(41),s=r(43),n=r.p+"static/media/EcoHomeCover.6ef576db.png",o=[{id:1,name:"WeLight",title:"WeLight Tech",brief:"Education Website Development",category:"Web Application",img:c.a,ProjectHeader:{title:"WeLight Tech",publishDate:"Apr 15, 2023",tags:"UI / Frontend"}},{id:2,name:"OSB",title:"OSB",brief:"Cosmetic Ingredients Website Development",category:"Web Application",img:s.a,ProjectHeader:{title:"OSB Website",publishDate:"Apr 15, 2023",tags:"UI / Frontend"}},{id:3,name:"EcoHome",title:"EcoHome",brief:"Energy Saving Mobile Design",category:"UI/UX Design",img:n,ProjectHeader:{title:"EcoHome",publishDate:"Feb 21, 2021",tags:"UI / Frontend"}},{id:4,title:"FPShopping",brief:"Academic Design Thesis",category:"Web Application",img:s.a},{id:5,title:"Simple Nim",brief:"Web Game Development",category:"Web Application",img:s.a},{id:6,title:"Sh\xe9:kon",category:"XR Application",brief:"Unity VR Development",img:s.a},{id:7,title:"Nasa Suit AR Challenge",category:"XR Application",brief:"Unity AR Development",img:s.a},{id:8,title:"Crossing the Pell",category:"XR Application",brief:"Unity VR Development",img:s.a},{id:9,title:"Graphic Design Collection",category:"Graphic Design",brief:"3D Printing Design",img:s.a},{id:10,title:"3D Design Collection",category:"3D",brief:"3D Printing Design",img:s.a}],l=r(2),d=Object(i.createContext)(),m=function(e){var t=Object(i.useState)(o),r=Object(a.a)(t,2),c=r[0],s=r[1],n=Object(i.useState)(""),m=Object(a.a)(n,2),g=m[0],b=m[1],j=Object(i.useState)(""),p=Object(a.a)(j,2),x=p[0],u=p[1],h=Array.from(new Set(c.map((function(e){return e.category}))));console.log("projectCategories",h);var y=c.filter((function(e){return e.title.toLowerCase().includes(g.toLowerCase())||""===g?e:""})),f=c.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(x)}));return Object(l.jsx)(d.Provider,{value:{projects:c,setProjects:s,searchProject:g,setSearchProject:b,searchProjectsByTitle:y,selectProject:x,setSelectProject:u,selectProjectsByCategory:f,projectCategories:h},children:e.children})}},43:function(e,t,r){"use strict";t.a=r.p+"static/media/OSB-2.3f91919c.png"},44:function(e,t,r){"use strict";var a=r(1),i=r(6),c=r(39),s=r(13),n=r(2),o=function(e){var t=e.title,r=e.category,a=e.brief,i=e.image,o=e.name;return Object(n.jsx)(c.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(n.jsx)(s.b,{to:"/react-tailwindcss-portfolio/projects/".concat(o),"aria-label":"".concat(o),children:Object(n.jsxs)("div",{className:"relative shadow-lg h-lg rounded-xl hover:shadow-xl cursor-pointer dark:bg-ternary-dark",children:[Object(n.jsx)("img",{src:i,className:"w-full h-1/2 object-cover overflow-hidden",alt:"Single Project"}),Object(n.jsxs)("div",{className:"flex-grow px-6 py-4",children:[Object(n.jsx)("div",{className:"font-bold mt-2 text-xl py-0 dark:text-ternary-light ",children:t}),Object(n.jsx)("p",{className:"text-gray-700 text-sm dark:text-ternary-light",children:a})]}),Object(n.jsx)("div",{className:"px-6 pb-0 mb-0 top-12 absolute bottom",children:Object(n.jsx)("p",{className:"z-10 bg-gray-50 rounded-full px-35 py-1 text-sm font-semibold text-secondary-dark mr-2 mb-2",children:r})})]})})})},l=r(42),d=function(e){var t=e.setSelectProject,r=Object(a.useContext)(l.a).projectCategories;return Object(n.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"font-general-medium \r px-4\r sm:px-6\r py-2\r border\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r dark:font-medium\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",children:[Object(n.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),r.map((function(e){return Object(n.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))]})};t.a=function(){var e=Object(a.useContext)(l.a),t=e.projects,r=e.searchProject,c=e.setSearchProject,s=e.searchProjectsByTitle,m=e.selectProject,g=e.setSelectProject,b=e.selectProjectsByCategory;return Object(n.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),Object(n.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(n.jsx)("h3",{className:"font-general-regular \r text-center text-secondary-dark\r dark:text-ternary-light\r text-md\r sm:text-xl\r mb-3\r ",children:"Search projects by title or filter by category"}),Object(n.jsxs)("div",{className:"\r flex\r justify-between\r border-b border-primary-light\r dark:border-secondary-dark\r pb-3\r gap-3\r ",children:[Object(n.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(n.jsx)("span",{className:"\r hidden\r sm:block\r bg-primary-light\r dark:bg-ternary-dark\r p-2.5\r shadow-sm\r rounded-xl\r cursor-pointer\r ",children:Object(n.jsx)(i.j,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(n.jsx)("input",{onChange:function(e){c(e.target.value)},className:"font-general-medium \r pl-3\r pr-1\r sm:px-4\r py-2\r border \r border-gray-200\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(n.jsx)(d,{setSelectProject:g})]})]}),Object(n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:m?b.map((function(e){return Object(n.jsx)(o,{title:e.title,brief:e.brief,category:e.category,image:e.img,name:e.name},e.id)})):r?s.map((function(e){return Object(n.jsx)(o,{title:e.title,brief:e.brief,category:e.category,image:e.img,name:e.name},e.id)})):t.map((function(e){return Object(n.jsx)(o,{title:e.title,brief:e.brief,category:e.category,image:e.img,name:e.name},e.id)}))})]})}},47:function(e,t,r){"use strict";r.r(t);var a=r(44),i=r(42),c=r(2);t.default=function(){return Object(c.jsx)(i.b,{children:Object(c.jsx)("div",{className:"container mx-auto",children:Object(c.jsx)(a.a,{})})})}}}]);
//# sourceMappingURL=4.e4752b7c.chunk.js.map