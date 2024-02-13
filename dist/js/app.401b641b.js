(function(){"use strict";var a={4808:function(a,e,t){var s=t(7764),i=t(4108);function l(a,e,t,s,l,d){const n=(0,i.E1)("MouseCursor"),r=(0,i.E1)("router-view"),o=(0,i.E1)("NavBar"),c=(0,i.E1)("DarkMode");return(0,i.Wz)(),(0,i.An)("div",null,[(0,i.K2)(n),(0,i.K2)(r),(0,i.K2)(o),(0,i.K2)(c)])}var d=t(9096),n=t.p+"img/a.da1106fe.png";const r=a=>((0,i.ED)("data-v-bbd52372"),a=a(),(0,i.ii)(),a),o={key:0},c={id:"navbar"},v={class:"nav-header"},p={class:"nav-logo"},u=r((()=>(0,i.QD)("div",{class:"header-divider"},[(0,i.QD)("hr")],-1))),h=r((()=>(0,i.QD)("div",{class:"nav-title"},[(0,i.QD)("h1",{class:"headline-small-2 line-height-low"},"DEV"),(0,i.QD)("h1",{class:"headline-xsmall-2 line-height-low"},"INTERN")],-1))),m={class:"nav-list-items"},f=r((()=>(0,i.QD)("div",{class:"fidget-container"},null,-1)));function b(a,e,t,s,l,r){const b=(0,i.E1)("router-link");return(0,i.Wz)(),(0,i.An)(i.ae,null,[a.isNavbarVisible?(0,i.g1)("",!0):((0,i.Wz)(),(0,i.An)("picture",o,[(0,i.QD)("img",{src:n,alt:"a-logo",class:"logo logo-container",onClick:e[0]||(e[0]=(...e)=>a.toggleNavbar&&a.toggleNavbar(...e))})])),(0,i.QD)("div",{class:(0,d.WN)(["navbar-vertical-fixed",{hidden:!a.isNavbarVisible}])},[(0,i.QD)("nav",c,[(0,i.QD)("div",v,[(0,i.QD)("div",p,[(0,i.QD)("picture",null,[(0,i.QD)("img",{src:n,alt:"a-logo",class:"logo",onClick:e[1]||(e[1]=(...e)=>a.toggleNavbar&&a.toggleNavbar(...e))})])]),u,h]),(0,i.QD)("div",m,[(0,i.K2)(b,{to:"/",class:"nav-item",onClick:r.hideNavbarOnSmallScreens},{default:(0,i.Ql)((()=>[(0,i.mY)("HOME")])),_:1},8,["onClick"]),(0,i.K2)(b,{to:"/about",class:"nav-item",onClick:r.hideNavbarOnSmallScreens},{default:(0,i.Ql)((()=>[(0,i.mY)("ABOUT")])),_:1},8,["onClick"]),(0,i.K2)(b,{to:"/skills",class:"nav-item",onClick:r.hideNavbarOnSmallScreens},{default:(0,i.Ql)((()=>[(0,i.mY)("SKILLS")])),_:1},8,["onClick"]),(0,i.K2)(b,{to:"/projects",class:"nav-item",onClick:r.hideNavbarOnSmallScreens},{default:(0,i.Ql)((()=>[(0,i.mY)("PROJECTS")])),_:1},8,["onClick"])]),f])],2)],64)}var g=t(7192),y={name:"NavBar",computed:{...(0,g.ys)(["isNavbarVisible"])},methods:{...(0,g.sR)(["toggleNavbar"]),hideNavbarOnSmallScreens(){window.innerWidth<=900&&this.isNavbarVisible&&this.toggleNavbar()}},mounted(){this.hideNavbarOnSmallScreens(),window.addEventListener("resize",this.hideNavbarOnSmallScreens)},beforeUnmount(){window.removeEventListener("resize",this.hideNavbarOnSmallScreens)}},D=t(4100);const Q=(0,D.c)(y,[["render",b],["__scopeId","data-v-bbd52372"]]);var x=Q;function A(a,e){return(0,i.Wz)(),(0,i.An)("div")}const k={},I=(0,D.c)(k,[["render",A],["__scopeId","data-v-d2753550"]]);var w=I;const S={class:"circle"};function T(a,e,t,s,l,d){return(0,i.Wz)(),(0,i.An)("div",S)}var N={name:"WallpaperComponent",mounted(){console.clear();const a=document.querySelector(".circle"),e={x:0,y:0},t={x:0,y:0},s={x:0,y:0};let i=0,l=0;window.addEventListener("mousemove",(a=>{e.x=a.x,e.y=a.y}));const d=.17,n=()=>{s.x+=(e.x-s.x)*d,s.y+=(e.y-s.y)*d;const r=`translate(${s.x}px, ${s.y}px)`,o=e.x-t.x,c=e.y-t.y;t.x=e.x,t.y=e.y;const v=Math.min(4*Math.sqrt(o**2+c**2),150),p=v/150*.5;i+=(p-i)*d;const u=`scale(${1+i}, ${1-i})`,h=180*Math.atan2(c,o)/Math.PI;v>20&&(l=h);const m=`rotate(${l}deg)`;a.style.transform=`${r} ${m} ${u}`,window.requestAnimationFrame(n)};n()}};const C=(0,D.c)(N,[["render",T]]);var E=C,O={name:"App",components:{NavBar:x,DarkMode:w,MouseCursor:E}};const V=(0,D.c)(O,[["render",l]]);var M=V,W=t.p+"img/github.09398c5a.svg",L=t.p+"img/instagram.d2f2aaec.svg",P=t.p+"img/linkedin.64d926fb.svg",_=t.p+"media/video-wallpaper.df3b4492.mp4";const j=a=>((0,i.ED)("data-v-fd56f536"),a=a(),(0,i.ii)(),a),H=(0,i.IL)('<div class="text-container" data-v-fd56f536><h1 class="headline-xsmall" data-v-fd56f536>Hi there,</h1><h1 class="headline-large" data-v-fd56f536>I&#39;m Aqeel Hanslo</h1><div class="circular-animation" data-v-fd56f536><h1 class="headline-medium" data-v-fd56f536> &lt;Software Developer/&gt; </h1></div><p class="headline-small" data-v-fd56f536><span class="opacity-full" data-v-fd56f536><br data-v-fd56f536> The design of an application or website usually </span><span class="opacity-half" data-v-fd56f536><br data-v-fd56f536> mirrors the thought process of the creator. Tell me </span><span class="opacity-quarter" data-v-fd56f536><br data-v-fd56f536> what to do and I&#39;ll try to visualize your ideas</span></p></div>',1),z={class:"links-container"},G={class:"styled-button"},Y=j((()=>(0,i.QD)("div",{class:"left"},[(0,i.QD)("div",{class:"box-1"}),(0,i.QD)("div",{class:"box-2"}),(0,i.QD)("div",{class:"box-3"})],-1))),q={class:"middle"},R=j((()=>(0,i.QD)("div",{class:"box-4"},null,-1))),K={class:"box-5"},U=j((()=>(0,i.QD)("div",{class:"box-6"},null,-1))),B=j((()=>(0,i.QD)("div",{class:"right"},[(0,i.QD)("div",{class:"box-7"}),(0,i.QD)("div",{class:"box-8"}),(0,i.QD)("div",{class:"box-9"})],-1))),F=(0,i.IL)('<div class="social-links" data-v-fd56f536><a href="https://github.com/aqeeluser404" target="_blank" rel="noopener noreferrer" data-v-fd56f536><img src="'+W+'" alt="github-logo" class="social-icon" data-v-fd56f536></a><a href="#" target="_blank" rel="noopener noreferrer" data-v-fd56f536><img src="'+L+'" alt="github-logo" class="social-icon" data-v-fd56f536></a><a href="https://www.linkedin.com/in/aqeel-hanslo-234961210" target="_blank" rel="noopener noreferrer" data-v-fd56f536><img src="'+P+'" alt="linkedin-logo" class="social-icon unique-icon" data-v-fd56f536></a></div>',1),$=j((()=>(0,i.QD)("div",{class:"page-number"},[(0,i.QD)("h1",{class:"headline-xsmall"},"01")],-1))),J=j((()=>(0,i.QD)("video",{autoplay:"",muted:"",loop:"",id:"video-background"},[(0,i.QD)("source",{src:_,type:"video/mp4"}),(0,i.mY)(" Your browser does not support the video tag. ")],-1)));function X(a,e,t,s,l,n){return(0,i.Wz)(),(0,i.An)("div",{class:"main-container",style:(0,d.MN)(n.getAdjustedWidth)},[H,(0,i.QD)("div",z,[(0,i.QD)("div",G,[Y,(0,i.QD)("div",q,[R,(0,i.QD)("div",K,[(0,i.QD)("button",{class:"button",onClick:e[0]||(e[0]=(...a)=>n.GotoContact&&n.GotoContact(...a))},"Get In Touch")]),U]),B]),F]),$,J],4)}t(3248);var Z={name:"HomeCard",computed:{...(0,g.ys)(["isNavbarVisible"]),getAdjustedWidth(){return{width:this.isNavbarVisible?"calc(100% - 6.5rem)":"100%",position:"relative",left:this.isNavbarVisible?"6.5rem":"0"}}},methods:{GotoContact(){console.log("GotoContact method called"),this.$router.push("/contact")}}};const aa=(0,D.c)(Z,[["render",X],["__scopeId","data-v-fd56f536"]]);var ea=aa;const ta=a=>((0,i.ED)("data-v-0ffe8968"),a=a(),(0,i.ii)(),a),sa={class:"row-1"},ia={class:"container-one line-height-low"},la=ta((()=>(0,i.QD)("h1",{class:"headline-large-black"},"About Me",-1))),da=ta((()=>(0,i.QD)("br",null,null,-1))),na={class:"typing-text-animation headline-medium"},ra={class:"typed-text weight-bold"},oa=ta((()=>(0,i.QD)("div",null,[(0,i.QD)("p",{class:"headline-small-black"},[(0,i.mY)("My name is "),(0,i.QD)("b",null,"Aqeel Hanslo"),(0,i.mY)(" , third year graduate at CPUT, I have chosen the career in Applications Development because I not only enjoy building applications but also consider it one of my strong suits. "),(0,i.QD)("br"),(0,i.QD)("br"),(0,i.mY)(" I possess the ability to think outside the box to create innovative solutions for problems.")]),(0,i.QD)("br"),(0,i.QD)("br"),(0,i.QD)("br"),(0,i.QD)("br"),(0,i.QD)("button",{class:"button-2"},"Download CV")],-1))),ca={class:"container-two line-height-low"},va={class:"image-container"},pa=["src"],ua=["src"],ha=["src"],ma=(0,i.IL)('<div class="row-2" data-v-0ffe8968><h1 class="headline-large-blue" data-v-0ffe8968>Education</h1><br data-v-0ffe8968><div class="timeline" data-v-0ffe8968><ul data-v-0ffe8968><li data-v-0ffe8968><div class="timeline-content" data-v-0ffe8968><h3 class="date" data-v-0ffe8968>2023 - 2024</h3><h1 data-v-0ffe8968>CapaCiTi</h1><br data-v-0ffe8968><p data-v-0ffe8968>LEARNERSHIP IN FULLSTACK DEVELOPMENT</p></div></li><li data-v-0ffe8968><div class="timeline-content" data-v-0ffe8968><h3 class="date" data-v-0ffe8968>2021 - 2023</h3><h1 data-v-0ffe8968>Cape Peninsula University of Technology</h1><br data-v-0ffe8968><p data-v-0ffe8968>DIPLOMA IN ICT: APPLICATION DEVELOPMENT</p></div></li><li data-v-0ffe8968><div class="timeline-content" data-v-0ffe8968><h3 class="date" data-v-0ffe8968>2020 - 2021</h3><h1 data-v-0ffe8968>College of Cape Town</h1><br data-v-0ffe8968><p data-v-0ffe8968>HIGHER CERTIFICATION IN INFO &amp; COM</p></div></li><li data-v-0ffe8968><div class="timeline-content" data-v-0ffe8968><h3 class="date" data-v-0ffe8968>2019 - 2020</h3><h1 data-v-0ffe8968>Gap year at Emcon Construction</h1><br data-v-0ffe8968><p data-v-0ffe8968>WORK EXPERIENCE</p></div></li><li data-v-0ffe8968><div class="timeline-content" data-v-0ffe8968><h3 class="date" data-v-0ffe8968>2013 - 2018</h3><h1 data-v-0ffe8968>Oracle Academy High School</h1><br data-v-0ffe8968><p data-v-0ffe8968>BACHELOR&#39;S DEGREE CERTIFICATION</p></div></li></ul></div></div><div class="page-number" data-v-0ffe8968><h1 class="headline-xsmall" data-v-0ffe8968>02</h1></div>',2);function fa(a,e,t,s,l,n){return(0,i.Wz)(),(0,i.An)("div",{class:"main-container",style:(0,d.MN)(n.getAdjustedWidth)},[(0,i.QD)("div",sa,[(0,i.QD)("div",ia,[(0,i.QD)("div",null,[la,da,(0,i.QD)("h1",na,[(0,i.QD)("span",ra,(0,d.WA)(a.typeValue),1),(0,i.QD)("span",{class:(0,d.WN)(["cursor",{typing:a.typeStatus}])}," ",2)])]),oa]),(0,i.QD)("div",ca,[(0,i.QD)("div",va,[(0,i.QD)("img",{src:a.gifPath,alt:"#",class:"image-1"},null,8,pa),(0,i.QD)("img",{src:a.gifPath,alt:"#",class:"image-2"},null,8,ua),(0,i.QD)("img",{src:a.gifPath,alt:"#",class:"image-3"},null,8,ha)])])]),ma],4)}var ba={name:"AboutCard",computed:{...(0,g.ys)(["isNavbarVisible"]),getAdjustedWidth(){return{width:this.isNavbarVisible?"calc(100% - 6.5rem)":"100%",position:"relative",left:this.isNavbarVisible?"6.5rem":"0"}}},data:()=>({typeValue:"",typeStatus:!1,typeArray:["Creative.","Innovative.","Humble.","Curious."],typingSpeed:200,erasingSpeed:100,newTextDelay:500,typeArrayIndex:0,charIndex:0,gifPath:t(7444)}),methods:{typeText(){this.charIndex<this.typeArray[this.typeArrayIndex].length?(this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.typeArray[this.typeArrayIndex].charAt(this.charIndex),this.charIndex+=1,setTimeout(this.typeText,this.typingSpeed)):(this.typeStatus=!1,setTimeout(this.eraseText,this.newTextDelay))},eraseText(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.typeArray[this.typeArrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,setTimeout(this.eraseText,this.erasingSpeed)):(this.typeStatus=!1,this.typeArrayIndex+=1,this.typeArrayIndex>=this.typeArray.length&&(this.typeArrayIndex=0),setTimeout(this.typeText,this.typingSpeed+1e3))}},created(){setTimeout(this.typeText,this.newTextDelay+200)}};const ga=(0,D.c)(ba,[["render",fa],["__scopeId","data-v-0ffe8968"]]);var ya=ga;const Da=a=>((0,i.ED)("data-v-7aa984e1"),a=a(),(0,i.ii)(),a),Qa=(0,i.IL)('<div class="text-container line-height-low" data-v-7aa984e1><h1 class="headline-large" data-v-7aa984e1>Skills</h1><p class="headline-small" data-v-7aa984e1><span class="opacity-full" data-v-7aa984e1><br data-v-7aa984e1> The design of an application or website usually </span><span class="opacity-half" data-v-7aa984e1><br data-v-7aa984e1> mirrors the thought process of the creator. Tell me </span><span class="opacity-quarter" data-v-7aa984e1><br data-v-7aa984e1> what to do and I&#39;ll try to visualize your ideas</span><br data-v-7aa984e1><br data-v-7aa984e1><br data-v-7aa984e1><br data-v-7aa984e1><button class="button" data-v-7aa984e1>View My work</button></p></div><br data-v-7aa984e1>',2),xa=Da((()=>(0,i.QD)("div",{class:"skill-container"},[(0,i.QD)("div",{class:"skill"},[(0,i.QD)("div",{class:"skill-name"},"HTML"),(0,i.QD)("div",{class:"skill-bar"},[(0,i.QD)("div",{class:"skill-per",per:"90%",style:{"max-width":"90%"}})])]),(0,i.QD)("div",{class:"skill"},[(0,i.QD)("div",{class:"skill-name"},"CSS"),(0,i.QD)("div",{class:"skill-bar"},[(0,i.QD)("div",{class:"skill-per",per:"85%",style:{"max-width":"85%"}})])]),(0,i.QD)("div",{class:"skill"},[(0,i.QD)("div",{class:"skill-name"},"Javascript"),(0,i.QD)("div",{class:"skill-bar"},[(0,i.QD)("div",{class:"skill-per",per:"55%",style:{"max-width":"55%"}})])]),(0,i.QD)("div",{class:"skill"},[(0,i.QD)("div",{class:"skill-name"},"Vue.JS"),(0,i.QD)("div",{class:"skill-bar"},[(0,i.QD)("div",{class:"skill-per",per:"60%",style:{"max-width":"60%"}})])]),(0,i.QD)("div",{class:"skill"},[(0,i.QD)("div",{class:"skill-name"},"SPRINGBOOT"),(0,i.QD)("div",{class:"skill-bar"},[(0,i.QD)("div",{class:"skill-per",per:"70%",style:{"max-width":"70%"}})])]),(0,i.QD)("div",{class:"skill"},[(0,i.QD)("div",{class:"skill-name"},"MYSQL"),(0,i.QD)("div",{class:"skill-bar"},[(0,i.QD)("div",{class:"skill-per",per:"70%",style:{"max-width":"70%"}})])]),(0,i.QD)("div",{class:"skill"},[(0,i.QD)("div",{class:"skill-name"},"JAVA"),(0,i.QD)("div",{class:"skill-bar"},[(0,i.QD)("div",{class:"skill-per",per:"80%",style:{"max-width":"80%"}})])]),(0,i.QD)("div",{class:"skill"},[(0,i.QD)("div",{class:"skill-name"},"GIT"),(0,i.QD)("div",{class:"skill-bar"},[(0,i.QD)("div",{class:"skill-per",per:"90%",style:{"max-width":"90%"}})])])],-1))),Aa=Da((()=>(0,i.QD)("div",{class:"page-number"},[(0,i.QD)("h1",{class:"headline-xsmall"},"03")],-1))),ka=Da((()=>(0,i.QD)("video",{autoplay:"",muted:"",loop:"",id:"video-background"},[(0,i.QD)("source",{src:_,type:"video/mp4"}),(0,i.mY)(" Your browser does not support the video tag. ")],-1))),Ia=[Qa,xa,Aa,ka];function wa(a,e,t,s,l,n){return(0,i.Wz)(),(0,i.An)("div",{class:"main-container",style:(0,d.MN)(n.getAdjustedWidth)},Ia,4)}var Sa={name:"SkillsCard",computed:{...(0,g.ys)(["isNavbarVisible"]),getAdjustedWidth(){return{width:this.isNavbarVisible?"calc(100% - 6.5rem)":"100%,",position:"relative",left:this.isNavbarVisible?"6.5rem":"0"}}}};const Ta=(0,D.c)(Sa,[["render",wa],["__scopeId","data-v-7aa984e1"]]);var Na=Ta,Ca=t.p+"img/first-portfolio.fe3fcf98.png",Ea=t.p+"img/animeapp.ff6786e4.png",Oa=t.p+"img/bankapp2.6540f271.png";const Va=a=>((0,i.ED)("data-v-0dda57f2"),a=a(),(0,i.ii)(),a),Ma={class:"text-container"},Wa=Va((()=>(0,i.QD)("h1",{class:"headline-large"},"Projects",-1))),La=Va((()=>(0,i.QD)("br",null,null,-1))),Pa={class:"typing-text-animation headline-medium"},_a={class:"typed-text weight-bold"},ja=(0,i.IL)('<div class="card-row" data-v-0dda57f2><div class="card" data-v-0dda57f2><img src="'+Ca+'" class="card-img" alt="#" data-v-0dda57f2><div class="card-body" data-v-0dda57f2><h1 class="card-title" data-v-0dda57f2>First Portfolio</h1><p class="card-sub-title" data-v-0dda57f2>HTML CSS and JavaScript</p><p class="card-info" data-v-0dda57f2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt esse vel provident ducimus laborum praesentium perspiciatis, aliquid cupiditate.</p><button class="card-btn" data-v-0dda57f2>Source Code</button></div></div><div class="card" data-v-0dda57f2><img src="'+Ea+'" class="card-img" alt="#" data-v-0dda57f2><div class="card-body" data-v-0dda57f2><h1 class="card-title" data-v-0dda57f2>Anime Web App</h1><p class="card-sub-title" data-v-0dda57f2>Java Springboot and Vue.js</p><p class="card-info" data-v-0dda57f2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt esse vel provident ducimus laborum praesentium perspiciatis, aliquid cupiditate.</p><button class="card-btn" data-v-0dda57f2>Source Code</button></div></div><div class="card" data-v-0dda57f2><img src="'+Oa+'" class="card-img" alt="#" data-v-0dda57f2><div class="card-body" data-v-0dda57f2><h1 class="card-title" data-v-0dda57f2>Project 1</h1><p class="card-sub-title" data-v-0dda57f2>Sub heading</p><p class="card-info" data-v-0dda57f2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt esse vel provident ducimus laborum praesentium perspiciatis, aliquid cupiditate.</p><button class="card-btn" data-v-0dda57f2>Source Code</button></div></div></div><div class="page-number" data-v-0dda57f2><h1 class="headline-xsmall" data-v-0dda57f2>04</h1></div><video autoplay muted loop id="video-background" data-v-0dda57f2><source src="'+_+'" type="video/mp4" data-v-0dda57f2> Your browser does not support the video tag. </video>',3);function Ha(a,e,t,s,l,n){return(0,i.Wz)(),(0,i.An)("div",{class:"main-container",style:(0,d.MN)(n.getAdjustedWidth)},[(0,i.QD)("div",Ma,[Wa,La,(0,i.QD)("h1",Pa,[(0,i.QD)("span",_a,(0,d.WA)(a.typeValue),1),(0,i.QD)("span",{class:(0,d.WN)(["cursor",{typing:a.typeStatus}])}," ",2)])]),ja],4)}var za={name:"ProjectsCard",computed:{...(0,g.ys)(["isNavbarVisible"]),getAdjustedWidth(){return{width:this.isNavbarVisible?"calc(100% - 6.5rem)":"100%",position:"relative",left:this.isNavbarVisible?"6.5rem":"0"}}},data:()=>({typeValue:"",typeStatus:!1,typeArray:["Willing to implement new ideas.","Learning new things."],typingSpeed:200,erasingSpeed:100,newTextDelay:500,typeArrayIndex:0,charIndex:0}),methods:{typeText(){this.charIndex<this.typeArray[this.typeArrayIndex].length?(this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.typeArray[this.typeArrayIndex].charAt(this.charIndex),this.charIndex+=1,setTimeout(this.typeText,this.typingSpeed)):(this.typeStatus=!1,setTimeout(this.eraseText,this.newTextDelay))},eraseText(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.typeArray[this.typeArrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,setTimeout(this.eraseText,this.erasingSpeed)):(this.typeStatus=!1,this.typeArrayIndex+=1,this.typeArrayIndex>=this.typeArray.length&&(this.typeArrayIndex=0),setTimeout(this.typeText,this.typingSpeed+1e3))}},created(){setTimeout(this.typeText,this.newTextDelay+200)}};const Ga=(0,D.c)(za,[["render",Ha],["__scopeId","data-v-0dda57f2"]]);var Ya=Ga;const qa=a=>((0,i.ED)("data-v-178d70a2"),a=a(),(0,i.ii)(),a),Ra=(0,i.IL)('<div class="container-one line-height-low" data-v-178d70a2><div data-v-178d70a2><h1 class="headline-large-black" data-v-178d70a2>Contact</h1><br data-v-178d70a2><h1 class="headline-medium" data-v-178d70a2><span class="weight-bold" data-v-178d70a2>Let&#39;s Talk</span></h1><br data-v-178d70a2><p class="headline-small-black line-height-med" data-v-178d70a2><span data-v-178d70a2><b data-v-178d70a2>Questions</b> or <b data-v-178d70a2>ideas?</b></span><br data-v-178d70a2><span data-v-178d70a2>Drop me a message in the form</span><br data-v-178d70a2><br data-v-178d70a2><span data-v-178d70a2>Let&#39;s talk about your next project!</span></p></div></div>',1),Ka={class:"container-two"},Ua={class:"contact-form"},Ba=["action"],Fa={class:"form-group"},$a=qa((()=>(0,i.QD)("label",{for:"name"},"NAME",-1))),Ja={class:"form-group"},Xa=qa((()=>(0,i.QD)("label",{for:"email"},"EMAIL",-1))),Za={class:"form-group"},ae=qa((()=>(0,i.QD)("label",{for:"message"},"MESSAGE",-1))),ee=qa((()=>(0,i.QD)("div",{class:"form-group"},[(0,i.QD)("div",{class:"g-recaptcha"}),(0,i.QD)("input",{id:"submit",type:"submit",value:"Say Hi!",class:"button-2"})],-1))),te={key:0},se=qa((()=>(0,i.QD)("div",{class:"page-number"},[(0,i.QD)("h1",{class:"headline-xsmall"},"05")],-1)));function ie(a,e,t,l,n,r){return(0,i.Wz)(),(0,i.An)("div",{class:"main-container",style:(0,d.MN)(r.getAdjustedWidth)},[Ra,(0,i.QD)("div",Ka,[(0,i.QD)("div",Ua,[(0,i.QD)("form",{action:n.FORM_ENDPOINT,onSubmit:e[3]||(e[3]=(...a)=>r.handleSubmit&&r.handleSubmit(...a)),method:"POST"},[(0,i.QD)("div",Fa,[$a,(0,i.wt)((0,i.QD)("input",{type:"text",id:"name",name:"Name",required:"",placeholder:"Type Here","onUpdate:modelValue":e[0]||(e[0]=a=>n.name=a)},null,512),[[s.Og,n.name]])]),(0,i.QD)("div",Ja,[Xa,(0,i.wt)((0,i.QD)("input",{type:"email",id:"email",name:"Email",required:"",placeholder:"Type Here","onUpdate:modelValue":e[1]||(e[1]=a=>n.email=a)},null,512),[[s.Og,n.email]])]),(0,i.QD)("div",Za,[ae,(0,i.wt)((0,i.QD)("textarea",{id:"message",name:"Message",required:"","onUpdate:modelValue":e[2]||(e[2]=a=>n.message=a)},null,512),[[s.Og,n.message]])]),ee,n.submitted?((0,i.Wz)(),(0,i.An)("div",te)):(0,i.g1)("",!0)],40,Ba)])]),se],4)}var le=t(884);t(3976);const de={apiKey:"AIzaSyBOwOFP4AczsFXt6U-QgWg1aeEjlpUGVhU",authDomain:"portfolio-version-2-96bc6.firebaseapp.com",projectId:"portfolio-version-2-96bc6",storageBucket:"portfolio-version-2-96bc6.appspot.com",messagingSenderId:"849045256972",appId:"1:849045256972:web:08a57a19023eb61e532729"};le.c.initializeApp(de);const ne=le.c.firestore();var re={name:"ContactCard",data(){return{name:"",email:"",message:"",submitMessage:"",recaptchaToken:null,submitted:!1,FORM_ENDPOINT:"https://public.herotofu.com/v1/037ba170-ca37-11ee-bb69-515451de93af"}},computed:{...(0,g.ys)(["isNavbarVisible"]),getAdjustedWidth(){return{width:this.isNavbarVisible?"calc(100% - 6.5rem)":"100%",position:"relative",left:this.isNavbarVisible?"6.5rem":"0"}}},methods:{async handleSubmit(){try{const a=await grecaptcha.execute("6LdGoW8pAAAAAK_oMIExegB957yAhvHfVYIJUoOk",{action:"submit"});if(!a)return void console.error("reCAPTCHA verification failed");let e={name:this.name,email:this.email,message:this.message,recaptchaResponse:a};await ne.collection("userMessages").add(e),this.name="",this.email="",this.message="",this.submitMessage="Message sent successfully",setTimeout((()=>{this.submitted=!0}),100)}catch(a){console.error("Error submitting form:",a),this.submitMessage="Error submitting form. Please try again."}}},mounted(){const a=document.createElement("script");a.src="https://www.google.com/recaptcha/api.js?render=6LdGoW8pAAAAAK_oMIExegB957yAhvHfVYIJUoOk",a.async=!0,a.defer=!0,document.head.appendChild(a)}};const oe=(0,D.c)(re,[["render",ie],["__scopeId","data-v-178d70a2"]]);var ce=oe;const ve={class:"main-container"},pe=(0,i.QD)("h2",{class:"headline-small-blue"},"Thanks you!",-1),ue=(0,i.QD)("div",{class:"headline-small-black"},"We'll be in touch soon.",-1),he=(0,i.QD)("br",null,null,-1);function me(a,e,t,s,l,d){return(0,i.Wz)(),(0,i.An)("div",ve,[pe,ue,he,(0,i.QD)("button",{class:"button",onClick:e[0]||(e[0]=(...a)=>d.GoToHome&&d.GoToHome(...a))},"Go Back")])}var fe={name:"ThankYou",methods:{GoToHome(){this.$router.push("/")}}};const be=(0,D.c)(fe,[["render",me]]);var ge=be,ye=t(7464);const De=[{name:"HomeCard",component:ea,path:"/"},{name:"AboutCard",component:ya,path:"/about"},{name:"SkillsCard",component:Na,path:"/skills"},{name:"ProjectsCard",component:Ya,path:"/projects"},{name:"ContactCard",component:ce,path:"/contact"},{name:"ThankYou",component:ge,path:"/thank-you"}],Qe=(0,ye.gv)({history:(0,ye.oz)(),routes:De});var xe=Qe,Ae=(0,g.eC)({state:{isNavbarVisible:!0},mutations:{toggleNavbar(a){a.isNavbarVisible=!a.isNavbarVisible}}});(0,s.W0)(M).use(xe).use(Ae).component("NavBar",x).mount("#app")},7444:function(a,e,t){a.exports=t.p+"img/me.0c8c7096.png"}},e={};function t(s){var i=e[s];if(void 0!==i)return i.exports;var l=e[s]={exports:{}};return a[s].call(l.exports,l,l.exports,t),l.exports}t.m=a,function(){var a=[];t.O=function(e,s,i,l){if(!s){var d=1/0;for(c=0;c<a.length;c++){s=a[c][0],i=a[c][1],l=a[c][2];for(var n=!0,r=0;r<s.length;r++)(!1&l||d>=l)&&Object.keys(t.O).every((function(a){return t.O[a](s[r])}))?s.splice(r--,1):(n=!1,l<d&&(d=l));if(n){a.splice(c--,1);var o=i();void 0!==o&&(e=o)}}return e}l=l||0;for(var c=a.length;c>0&&a[c-1][2]>l;c--)a[c]=a[c-1];a[c]=[s,i,l]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var s in e)t.o(e,s)&&!t.o(a,s)&&Object.defineProperty(a,s,{enumerable:!0,get:e[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.p="/"}(),function(){var a={524:0};t.O.j=function(e){return 0===a[e]};var e=function(e,s){var i,l,d=s[0],n=s[1],r=s[2],o=0;if(d.some((function(e){return 0!==a[e]}))){for(i in n)t.o(n,i)&&(t.m[i]=n[i]);if(r)var c=r(t)}for(e&&e(s);o<d.length;o++)l=d[o],t.o(a,l)&&a[l]&&a[l][0](),a[l]=0;return t.O(c)},s=self["webpackChunkvue_portfolio"]=self["webpackChunkvue_portfolio"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=t.O(void 0,[999],(function(){return t(4808)}));s=t.O(s)})();
//# sourceMappingURL=app.401b641b.js.map