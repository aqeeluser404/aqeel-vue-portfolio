(function(){"use strict";var a={3940:function(a,e,t){var i=t(7764),s=t(4108);function n(a,e,t,i,n,l){const r=(0,s.E1)("MouseCursor"),o=(0,s.E1)("router-view"),d=(0,s.E1)("NavBar"),c=(0,s.E1)("NoiseBackground"),u=(0,s.E1)("DarkMode");return(0,s.Wz)(),(0,s.An)("div",null,[(0,s.K2)(r),(0,s.K2)(o),(0,s.K2)(d),(0,s.K2)(c),(0,s.K2)(u)])}var l=t(9096),r=t.p+"img/a.da1106fe.png";const o=a=>((0,s.ED)("data-v-0005d6b6"),a=a(),(0,s.ii)(),a),d={key:0},c={id:"navbar"},u={class:"nav-header"},v={class:"nav-logo"},p=o((()=>(0,s.QD)("div",{class:"header-divider"},[(0,s.QD)("hr")],-1))),h=o((()=>(0,s.QD)("div",{class:"nav-title"},[(0,s.QD)("h1",{class:"headline-small-2 line-height-low"},"DEV"),(0,s.QD)("h1",{class:"headline-xsmall-2 line-height-low"},"INTERN")],-1))),m={class:"nav-list-items"},b=o((()=>(0,s.QD)("div",{class:"fidget-container"},null,-1)));function g(a,e,t,i,n,o){const g=(0,s.E1)("router-link");return(0,s.Wz)(),(0,s.An)(s.ae,null,[o.showLoadingPage||o.isNavbarVisible?(0,s.g1)("",!0):((0,s.Wz)(),(0,s.An)("picture",d,[(0,s.QD)("img",{src:r,alt:"a-logo",class:"logo logo-container",onClick:e[0]||(e[0]=(...a)=>o.toggleNavbar&&o.toggleNavbar(...a))})])),(0,s.QD)("div",{class:(0,l.WN)(["navbar-vertical-fixed",{hidden:!o.isNavbarVisible}])},[(0,s.QD)("nav",c,[(0,s.QD)("div",u,[(0,s.QD)("div",v,[(0,s.QD)("picture",null,[(0,s.QD)("img",{src:r,alt:"a-logo",class:"logo",onClick:e[1]||(e[1]=(...a)=>o.toggleNavbar&&o.toggleNavbar(...a))})])]),p,h]),(0,s.QD)("div",m,[(0,s.K2)(g,{to:"/",class:"nav-item",onClick:o.hideNavbarOnSmallScreens},{default:(0,s.Ql)((()=>[(0,s.mY)("HOME")])),_:1},8,["onClick"]),(0,s.K2)(g,{to:"/about",class:"nav-item",onClick:o.hideNavbarOnSmallScreens},{default:(0,s.Ql)((()=>[(0,s.mY)("ABOUT")])),_:1},8,["onClick"]),(0,s.K2)(g,{to:"/skills",class:"nav-item",onClick:o.hideNavbarOnSmallScreens},{default:(0,s.Ql)((()=>[(0,s.mY)("SKILLS")])),_:1},8,["onClick"]),(0,s.K2)(g,{to:"/projects",class:"nav-item",onClick:o.hideNavbarOnSmallScreens},{default:(0,s.Ql)((()=>[(0,s.mY)("PROJECTS")])),_:1},8,["onClick"])]),b])],2)],64)}var f=t(7192),y={name:"NavBar",computed:{...(0,f.ys)(["isNavbarVisible"]),isNavbarVisible(){return this.$store.state.isNavbarVisible},showLoadingPage(){return this.$store.state.showLoading}},methods:{...(0,f.sR)(["toggleNavbar"]),hideNavbarOnSmallScreens(){window.innerWidth<=900&&this.isNavbarVisible&&this.toggleNavbar()},toggleNavbar(){this.$store.commit("toggleNavbar")}},mounted(){this.hideNavbarOnSmallScreens(),window.addEventListener("resize",this.hideNavbarOnSmallScreens)},beforeUnmount(){window.removeEventListener("resize",this.hideNavbarOnSmallScreens)}},D=t(4100);const Q=(0,D.c)(y,[["render",g],["__scopeId","data-v-0005d6b6"]]);var k=Q;function x(a,e){return(0,s.Wz)(),(0,s.An)("div")}const w={},A=(0,D.c)(w,[["render",x],["__scopeId","data-v-d2753550"]]);var S=A;const I={class:"circle"};function T(a,e,t,i,n,l){return(0,s.Wz)(),(0,s.An)("div",I)}var N={name:"MouseCursor",mounted(){console.clear();const a=document.querySelector(".circle"),e={x:0,y:0},t={x:0,y:0},i={x:0,y:0};let s=0,n=0;window.addEventListener("mousemove",(a=>{e.x=a.x,e.y=a.y}));const l=.17,r=()=>{i.x+=(e.x-i.x)*l,i.y+=(e.y-i.y)*l;const o=`translate(${i.x}px, ${i.y}px)`,d=e.x-t.x,c=e.y-t.y;t.x=e.x,t.y=e.y;const u=Math.min(4*Math.sqrt(d**2+c**2),150),v=u/150*.5;s+=(v-s)*l;const p=`scale(${1+s}, ${1-s})`,h=180*Math.atan2(c,d)/Math.PI;u>20&&(n=h);const m=`rotate(${n}deg)`;a.style.transform=`${o} ${m} ${p}`,window.requestAnimationFrame(r)};r()}};const C=(0,D.c)(N,[["render",T]]);var E=C;const O={class:"noise"};function L(a,e,t,i,n,l){return(0,s.Wz)(),(0,s.An)("div",O)}var V={};const M=(0,D.c)(V,[["render",L]]);var P=M,j={name:"App",components:{NavBar:k,DarkMode:S,MouseCursor:E,NoiseBackground:P}};const W=(0,D.c)(j,[["render",n]]);var _=W;const H=a=>((0,s.ED)("data-v-64464a36"),a=a(),(0,s.ii)(),a),B={class:"row-1"},q={class:"container-one line-height-low"},z=H((()=>(0,s.QD)("h1",{class:"headline-large-black"},"About Me",-1))),F=H((()=>(0,s.QD)("br",null,null,-1))),G={class:"typing-text-animation headline-medium"},R={class:"typed-text weight-bold"},K=H((()=>(0,s.QD)("div",null,[(0,s.QD)("p",{class:"alt-font-3"},"My name is Aqeel Hanslo , third year graduate at CPUT, I have chosen the career in Applications Development because I not only enjoy building applications but also consider it one of my strong suits. I possess the ability to think outside the box to create innovative solutions for problems."),(0,s.QD)("br"),(0,s.QD)("br"),(0,s.QD)("br"),(0,s.QD)("br"),(0,s.QD)("a",{href:"/aqeel-cv.pdf",download:"",class:"button-2",target:"_blank"},"Download CV")],-1))),U={class:"container-two line-height-low"},Y={class:"image-container"},$=["src"],J=["src"],X=["src"],Z=(0,s.IL)('<div class="row-2" data-v-64464a36><h1 class="headline-large-blue" data-v-64464a36>Education</h1><br data-v-64464a36><div class="timeline" data-v-64464a36><ul data-v-64464a36><li data-v-64464a36><div class="timeline-content" data-v-64464a36><h3 class="date" data-v-64464a36>2023 - 2024</h3><h1 data-v-64464a36>CapaCiTi</h1><br data-v-64464a36><p data-v-64464a36>LEARNERSHIP IN FULLSTACK DEVELOPMENT</p></div></li><li data-v-64464a36><div class="timeline-content" data-v-64464a36><h3 class="date" data-v-64464a36>2021 - 2023</h3><h1 data-v-64464a36>Cape Peninsula University of Technology</h1><br data-v-64464a36><p data-v-64464a36>DIPLOMA IN ICT: APPLICATION DEVELOPMENT</p></div></li><li data-v-64464a36><div class="timeline-content" data-v-64464a36><h3 class="date" data-v-64464a36>2020 - 2021</h3><h1 data-v-64464a36>College of Cape Town</h1><br data-v-64464a36><p data-v-64464a36>HIGHER CERTIFICATION IN INFO &amp; COM</p></div></li><li data-v-64464a36><div class="timeline-content" data-v-64464a36><h3 class="date" data-v-64464a36>2019 - 2020</h3><h1 data-v-64464a36>Gap year at Emcon Construction</h1><br data-v-64464a36><p data-v-64464a36>WORK EXPERIENCE</p></div></li><li data-v-64464a36><div class="timeline-content" data-v-64464a36><h3 class="date" data-v-64464a36>2013 - 2018</h3><h1 data-v-64464a36>Oracle Academy High School</h1><br data-v-64464a36><p data-v-64464a36>BACHELOR&#39;S DEGREE CERTIFICATION</p></div></li></ul></div></div><div class="page-number" data-v-64464a36><h1 class="headline-xsmall" data-v-64464a36>02</h1></div><div class="scroll-watcher" data-v-64464a36></div>',3);function aa(a,e,t,i,n,r){return(0,s.Wz)(),(0,s.An)("div",{class:"main-container",style:(0,l.MN)(r.getAdjustedWidth)},[(0,s.QD)("div",B,[(0,s.QD)("div",q,[(0,s.QD)("div",null,[z,F,(0,s.QD)("h1",G,[(0,s.QD)("span",R,(0,l.WA)(a.typeValue),1),(0,s.QD)("span",{class:(0,l.WN)(["cursor",{typing:a.typeStatus}])}," ",2)])]),K]),(0,s.QD)("div",U,[(0,s.QD)("div",Y,[(0,s.QD)("img",{src:a.gifPath,alt:"#",class:"image-1"},null,8,$),(0,s.QD)("img",{src:a.gifPath,alt:"#",class:"image-2"},null,8,J),(0,s.QD)("img",{src:a.gifPath,alt:"#",class:"image-3"},null,8,X)])])]),Z],4)}var ea={name:"AboutCard",computed:{...(0,f.ys)(["isNavbarVisible"]),getAdjustedWidth(){return{width:this.isNavbarVisible?"calc(100% - 6.5rem)":"100%",position:"relative",left:this.isNavbarVisible?"6.5rem":"0"}}},data:()=>({typeValue:"",typeStatus:!1,typeArray:["Creative.","Innovative.","Humble.","Curious."],typingSpeed:200,erasingSpeed:100,newTextDelay:500,typeArrayIndex:0,charIndex:0,gifPath:t(7444)}),methods:{typeText(){this.charIndex<this.typeArray[this.typeArrayIndex].length?(this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.typeArray[this.typeArrayIndex].charAt(this.charIndex),this.charIndex+=1,setTimeout(this.typeText,this.typingSpeed)):(this.typeStatus=!1,setTimeout(this.eraseText,this.newTextDelay))},eraseText(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.typeArray[this.typeArrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,setTimeout(this.eraseText,this.erasingSpeed)):(this.typeStatus=!1,this.typeArrayIndex+=1,this.typeArrayIndex>=this.typeArray.length&&(this.typeArrayIndex=0),setTimeout(this.typeText,this.typingSpeed+1e3))}},created(){setTimeout(this.typeText,this.newTextDelay+200)}};const ta=(0,D.c)(ea,[["render",aa],["__scopeId","data-v-64464a36"]]);var ia=ta,sa=t.p+"img/quote.025f6838.png",na=t.p+"img/afika.53023677.jpg",la=t.p+"img/coding-2.ce2e8042.svg",ra=t.p+"img/coding.8d98c147.svg",oa=t.p+"img/coding-3.ee245071.svg",da=t(1936);const ca=a=>((0,s.ED)("data-v-77168b2a"),a=a(),(0,s.ii)(),a),ua={class:"column-left"},va={class:"text-container line-height-low"},pa=ca((()=>(0,s.QD)("h1",{class:"headline-large"},"Skills",-1))),ha={class:"alt-font-2"},ma=ca((()=>(0,s.QD)("span",{class:"opacity-full"},[(0,s.QD)("br"),(0,s.mY)(" I've always been the type of person who can spend hours designing stuff. ")],-1))),ba=ca((()=>(0,s.QD)("span",{class:"opacity-half"},[(0,s.QD)("br"),(0,s.mY)(" I simply enjoy being able to illustrate my thoughts into something visually appealing. ")],-1))),ga=ca((()=>(0,s.QD)("span",{class:"opacity-quarter"},[(0,s.QD)("br"),(0,s.mY)(" That being said, I am knowledgeable in most languages, including some backend code.")],-1))),fa=ca((()=>(0,s.QD)("br",null,null,-1))),ya=ca((()=>(0,s.QD)("br",null,null,-1))),Da=ca((()=>(0,s.QD)("br",null,null,-1))),Qa=ca((()=>(0,s.QD)("br",null,null,-1))),ka=ca((()=>(0,s.QD)("br",null,null,-1))),xa=ca((()=>(0,s.QD)("div",{class:"skill-container"},[(0,s.QD)("div",{class:"skill"},[(0,s.QD)("div",{class:"skill-name"},"HTML"),(0,s.QD)("div",{class:"skill-bar"},[(0,s.QD)("div",{class:"skill-per",per:"90%",style:{"max-width":"90%"}})])]),(0,s.QD)("div",{class:"skill"},[(0,s.QD)("div",{class:"skill-name"},"CSS"),(0,s.QD)("div",{class:"skill-bar"},[(0,s.QD)("div",{class:"skill-per",per:"85%",style:{"max-width":"85%"}})])]),(0,s.QD)("div",{class:"skill"},[(0,s.QD)("div",{class:"skill-name"},"Javascript"),(0,s.QD)("div",{class:"skill-bar"},[(0,s.QD)("div",{class:"skill-per",per:"55%",style:{"max-width":"55%"}})])]),(0,s.QD)("div",{class:"skill"},[(0,s.QD)("div",{class:"skill-name"},"Vue.JS"),(0,s.QD)("div",{class:"skill-bar"},[(0,s.QD)("div",{class:"skill-per",per:"60%",style:{"max-width":"60%"}})])]),(0,s.QD)("div",{class:"skill"},[(0,s.QD)("div",{class:"skill-name"},"SPRINGBOOT"),(0,s.QD)("div",{class:"skill-bar"},[(0,s.QD)("div",{class:"skill-per",per:"70%",style:{"max-width":"70%"}})])]),(0,s.QD)("div",{class:"skill"},[(0,s.QD)("div",{class:"skill-name"},"MYSQL"),(0,s.QD)("div",{class:"skill-bar"},[(0,s.QD)("div",{class:"skill-per",per:"70%",style:{"max-width":"70%"}})])]),(0,s.QD)("div",{class:"skill"},[(0,s.QD)("div",{class:"skill-name"},"JAVA"),(0,s.QD)("div",{class:"skill-bar"},[(0,s.QD)("div",{class:"skill-per",per:"80%",style:{"max-width":"80%"}})])]),(0,s.QD)("div",{class:"skill"},[(0,s.QD)("div",{class:"skill-name"},"GIT"),(0,s.QD)("div",{class:"skill-bar"},[(0,s.QD)("div",{class:"skill-per",per:"90%",style:{"max-width":"90%"}})])])],-1))),wa=(0,s.IL)('<div class="column-right" data-v-77168b2a><div class="container" data-v-77168b2a><h1 class="headline-small-2" data-v-77168b2a><span class="headline-large-blue" data-v-77168b2a><img src="'+sa+'" alt="#" width="50px" data-v-77168b2a></span><br data-v-77168b2a>Aqeel has good coding knowledge. He is quite shy and quiet but always gets work done on time and meets deadlines. </h1><div class="container-splitter" data-v-77168b2a><hr data-v-77168b2a></div><div class="testimonial-box" data-v-77168b2a><div data-v-77168b2a><img src="'+na+'" alt="#" class="testimonial-img" data-v-77168b2a></div><h1 class="nav-item" data-v-77168b2a>Afika Maliwa <br data-v-77168b2a>Line Manager - CapaCiTi</h1></div></div><br data-v-77168b2a><div class="text-block-row" data-v-77168b2a><div class="text-block" data-v-77168b2a><img src="'+la+'" alt="#" data-v-77168b2a><p class="nav-item-2" data-v-77168b2a> Backend Frontend Coding Languages</p></div><div class="text-block" data-v-77168b2a><img src="'+ra+'" alt="#" data-v-77168b2a><p class="nav-item-2" data-v-77168b2a>Full stack java applications</p></div><div class="text-block" data-v-77168b2a><img src="'+oa+'" alt="#" data-v-77168b2a><p class="nav-item-2" data-v-77168b2a>Practical coding experience</p></div></div></div><div class="page-number" data-v-77168b2a><h1 class="headline-xsmall" data-v-77168b2a>03</h1></div><video autoplay muted loop id="video-background" data-v-77168b2a><source src="'+da+'" type="video/mp4" data-v-77168b2a> Your browser does not support the video tag. </video>',3);function Aa(a,e,t,i,n,r){return(0,s.Wz)(),(0,s.An)("div",{class:"main-container",style:(0,l.MN)(r.getAdjustedWidth)},[(0,s.QD)("div",ua,[(0,s.QD)("div",va,[pa,(0,s.QD)("p",ha,[ma,ba,ga,fa,ya,Da,Qa,(0,s.QD)("button",{class:"button",onClick:e[0]||(e[0]=(...a)=>r.GoToProjects&&r.GoToProjects(...a))},"View My work")])]),ka,xa]),wa],4)}t(3248);var Sa={name:"SkillsCard",computed:{...(0,f.ys)(["isNavbarVisible"]),getAdjustedWidth(){return{width:this.isNavbarVisible?"calc(100% - 6.5rem)":"100%",position:"relative",left:this.isNavbarVisible?"6.5rem":"0"}}},methods:{GoToProjects(){this.$router.push("/projects")}}};const Ia=(0,D.c)(Sa,[["render",Aa],["__scopeId","data-v-77168b2a"]]);var Ta=Ia,Na=t.p+"img/first-portfolio.fe3fcf98.png",Ca=t.p+"img/animeapp.ff6786e4.png",Ea=t.p+"img/bankapp2.6540f271.png";const Oa=(0,s.IL)('<div class="text-container" data-v-481900e8><h1 class="headline-large" data-v-481900e8>Projects</h1><br data-v-481900e8><p class="alt-font-2" data-v-481900e8><span class="opacity-full" data-v-481900e8><br data-v-481900e8> I&#39;ve always been the type of person who can spend hours designing stuff. </span><span class="opacity-half" data-v-481900e8><br data-v-481900e8> I simply enjoy being able to illustrate my thoughts into something visually appealing. </span><span class="opacity-quarter" data-v-481900e8><br data-v-481900e8> That being said, I am knowledgeable in most languages, including some backend code.</span></p></div><div class="card-row" data-v-481900e8><div class="card" data-v-481900e8><img src="'+Na+'" class="card-img" alt="#" data-v-481900e8><div class="card-body" data-v-481900e8><h1 class="card-title headline-small-blue" data-v-481900e8>First Portfolio</h1><p class="card-sub-title alt-font-medium" data-v-481900e8>Static - HTML - CSS - JS <br data-v-481900e8> <b data-v-481900e8>(No Framework)</b></p><p class="card-info alt-font-2" data-v-481900e8>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt esse vel provident ducimus laborum praesentium perspiciatis, aliquid cupiditate.</p><button class="button" data-v-481900e8>Source Code</button></div></div><div class="card" data-v-481900e8><img src="'+Ca+'" class="card-img" alt="#" data-v-481900e8><div class="card-body" data-v-481900e8><h1 class="card-title headline-small-blue" data-v-481900e8>Anime Web App</h1><p class="card-sub-title alt-font-medium" data-v-481900e8>Java - Springboot - Workbench <br data-v-481900e8> <b data-v-481900e8>(Vue Framework)</b></p><p class="card-info alt-font-2" data-v-481900e8>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt esse vel provident ducimus laborum praesentium perspiciatis, aliquid cupiditate.</p><button class="button" data-v-481900e8>Source Code</button></div></div><div class="card" data-v-481900e8><img src="'+Ea+'" class="card-img" alt="#" data-v-481900e8><div class="card-body" data-v-481900e8><h1 class="card-title headline-small-blue" data-v-481900e8>Python Bank App</h1><p class="card-sub-title alt-font-medium" data-v-481900e8>Python - Custom Tkinter - Gui <br data-v-481900e8> <b data-v-481900e8>(CapaCiTi Project)</b></p><p class="card-info alt-font-2" data-v-481900e8>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt esse vel provident ducimus laborum praesentium perspiciatis, aliquid cupiditate.</p><button class="button" data-v-481900e8>Source Code</button></div></div></div><button class="button" data-v-481900e8>View GitHub</button><div class="page-number" data-v-481900e8><h1 class="headline-xsmall" data-v-481900e8>04</h1></div><video autoplay muted loop id="video-background" data-v-481900e8><source src="'+da+'" type="video/mp4" data-v-481900e8> Your browser does not support the video tag. </video>',5),La=[Oa];function Va(a,e,t,i,n,r){return(0,s.Wz)(),(0,s.An)("div",{class:"main-container",style:(0,l.MN)(r.getAdjustedWidth)},La,4)}var Ma={name:"ProjectsCard",computed:{...(0,f.ys)(["isNavbarVisible"]),getAdjustedWidth(){return{width:this.isNavbarVisible?"calc(100% - 6.5rem)":"100%",position:"relative",left:this.isNavbarVisible?"6.5rem":"0"}}},data:()=>({typeValue:"",typeStatus:!1,typeArray:["Willing to implement new ideas.","Learning new things."],typingSpeed:200,erasingSpeed:100,newTextDelay:500,typeArrayIndex:0,charIndex:0}),methods:{typeText(){this.charIndex<this.typeArray[this.typeArrayIndex].length?(this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.typeArray[this.typeArrayIndex].charAt(this.charIndex),this.charIndex+=1,setTimeout(this.typeText,this.typingSpeed)):(this.typeStatus=!1,setTimeout(this.eraseText,this.newTextDelay))},eraseText(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.typeArray[this.typeArrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,setTimeout(this.eraseText,this.erasingSpeed)):(this.typeStatus=!1,this.typeArrayIndex+=1,this.typeArrayIndex>=this.typeArray.length&&(this.typeArrayIndex=0),setTimeout(this.typeText,this.typingSpeed+1e3))}},created(){setTimeout(this.typeText,this.newTextDelay+200)}};const Pa=(0,D.c)(Ma,[["render",Va],["__scopeId","data-v-481900e8"]]);var ja=Pa;const Wa=a=>((0,s.ED)("data-v-baf16040"),a=a(),(0,s.ii)(),a),_a=(0,s.IL)('<div class="container-one line-height-low" data-v-baf16040><div data-v-baf16040><h1 class="headline-large-black" data-v-baf16040>Contact</h1><br data-v-baf16040><h1 class="headline-medium" data-v-baf16040><span class="weight-bold" data-v-baf16040>Let&#39;s Talk</span></h1><br data-v-baf16040><p class="headline-small-black line-height-med" data-v-baf16040><span data-v-baf16040><b data-v-baf16040>Questions</b> or <b data-v-baf16040>ideas?</b></span><br data-v-baf16040><span data-v-baf16040>Drop me a message in the form</span><br data-v-baf16040><br data-v-baf16040><span data-v-baf16040>Let&#39;s talk about your next project!</span></p></div></div>',1),Ha={class:"container-two"},Ba={class:"contact-form"},qa=["action"],za={class:"form-group"},Fa=Wa((()=>(0,s.QD)("label",{for:"name"},"NAME",-1))),Ga={class:"form-group"},Ra=Wa((()=>(0,s.QD)("label",{for:"email"},"EMAIL",-1))),Ka={class:"form-group"},Ua=Wa((()=>(0,s.QD)("label",{for:"message"},"MESSAGE",-1))),Ya=Wa((()=>(0,s.QD)("div",{class:"form-group"},[(0,s.QD)("div",{class:"g-recaptcha"}),(0,s.QD)("input",{id:"submit",type:"submit",value:"Say Hi!",class:"button-2"})],-1))),$a={key:0},Ja=Wa((()=>(0,s.QD)("div",{class:"page-number"},[(0,s.QD)("h1",{class:"headline-xsmall"},"05")],-1)));function Xa(a,e,t,n,r,o){return(0,s.Wz)(),(0,s.An)("div",{class:"main-container",style:(0,l.MN)(o.getAdjustedWidth)},[_a,(0,s.QD)("div",Ha,[(0,s.QD)("div",Ba,[(0,s.QD)("form",{action:r.FORM_ENDPOINT,onSubmit:e[3]||(e[3]=(...a)=>o.handleSubmit&&o.handleSubmit(...a)),method:"POST"},[(0,s.QD)("div",za,[Fa,(0,s.wt)((0,s.QD)("input",{type:"text",id:"name",name:"Name",required:"",placeholder:"Type Here","onUpdate:modelValue":e[0]||(e[0]=a=>r.name=a)},null,512),[[i.Og,r.name]])]),(0,s.QD)("div",Ga,[Ra,(0,s.wt)((0,s.QD)("input",{type:"email",id:"email",name:"Email",required:"",placeholder:"Type Here","onUpdate:modelValue":e[1]||(e[1]=a=>r.email=a)},null,512),[[i.Og,r.email]])]),(0,s.QD)("div",Ka,[Ua,(0,s.wt)((0,s.QD)("textarea",{id:"message",name:"Message",required:"","onUpdate:modelValue":e[2]||(e[2]=a=>r.message=a)},null,512),[[i.Og,r.message]])]),Ya,r.submitted?((0,s.Wz)(),(0,s.An)("div",$a)):(0,s.g1)("",!0)],40,qa)])]),Ja],4)}var Za=t(884);t(3976);const ae={apiKey:"AIzaSyBOwOFP4AczsFXt6U-QgWg1aeEjlpUGVhU",authDomain:"portfolio-version-2-96bc6.firebaseapp.com",projectId:"portfolio-version-2-96bc6",storageBucket:"portfolio-version-2-96bc6.appspot.com",messagingSenderId:"849045256972",appId:"1:849045256972:web:08a57a19023eb61e532729"};Za.c.initializeApp(ae);const ee=Za.c.firestore();var te={name:"ContactCard",data(){return{name:"",email:"",message:"",submitMessage:"",recaptchaToken:null,submitted:!1,FORM_ENDPOINT:"https://public.herotofu.com/v1/037ba170-ca37-11ee-bb69-515451de93af"}},computed:{...(0,f.ys)(["isNavbarVisible"]),getAdjustedWidth(){return{width:this.isNavbarVisible?"calc(100% - 6.5rem)":"100%",position:"relative",left:this.isNavbarVisible?"6.5rem":"0"}}},methods:{async handleSubmit(){try{const a=await grecaptcha.execute("6LdGoW8pAAAAAK_oMIExegB957yAhvHfVYIJUoOk",{action:"submit"});if(!a)return void console.error("reCAPTCHA verification failed");let e={name:this.name,email:this.email,message:this.message,recaptchaResponse:a};await ee.collection("userMessages").add(e),this.name="",this.email="",this.message="",this.submitMessage="Message sent successfully",setTimeout((()=>{this.submitted=!0}),100)}catch(a){console.error("Error submitting form:",a),this.submitMessage="Error submitting form. Please try again."}}},mounted(){const a=document.createElement("script");a.src="https://www.google.com/recaptcha/api.js?render=6LdGoW8pAAAAAK_oMIExegB957yAhvHfVYIJUoOk",a.async=!0,a.defer=!0,document.head.appendChild(a)}};const ie=(0,D.c)(te,[["render",Xa],["__scopeId","data-v-baf16040"]]);var se=ie;const ne={class:"main-container"},le=(0,s.QD)("h2",{class:"headline-small-blue weight-bold"},[(0,s.QD)("b",null,"Thank you!")],-1),re=(0,s.QD)("br",null,null,-1),oe=(0,s.QD)("div",{class:"headline-small-black"},"We'll be in touch soon.",-1),de=(0,s.QD)("br",null,null,-1),ce=(0,s.QD)("br",null,null,-1);function ue(a,e,t,i,n,l){return(0,s.Wz)(),(0,s.An)("div",ne,[le,re,oe,de,ce,(0,s.QD)("button",{class:"button-2",onClick:e[0]||(e[0]=(...a)=>l.GoToHome&&l.GoToHome(...a))},"Go Back")])}var ve={name:"ThankCard",methods:{GoToHome(){this.$router.push("/")}}};const pe=(0,D.c)(ve,[["render",ue]]);var he=pe,me=t(7464);const be=[{name:"HomeCard",component:()=>t.e(296).then(t.bind(t,1996)),path:"/"},{name:"AboutCard",component:ia,path:"/about"},{name:"SkillsCard",component:Ta,path:"/skills"},{name:"ProjectsCard",component:ja,path:"/projects"},{name:"ContactCard",component:se,path:"/contact"},{name:"ThankCard",component:he,path:"/thank-you"}],ge=(0,me.gv)({history:(0,me.oz)(),routes:be});var fe=ge,ye=t.p+"img/hour.4527c937.gif";const De=a=>((0,s.ED)("data-v-0fe146eb"),a=a(),(0,s.ii)(),a),Qe={class:"main-container"},ke=De((()=>(0,s.QD)("div",null,[(0,s.QD)("img",{src:ye,alt:"#",class:"hour-glass"})],-1))),xe=De((()=>(0,s.QD)("h1",{class:"headline-small"},[(0,s.mY)("Loading"),(0,s.QD)("span",{class:"loading-dots"})],-1))),we=[ke,xe];function Ae(a,e,t,i,n,l){return(0,s.Wz)(),(0,s.An)("div",Qe,we)}var Se={name:"LoadingCard"};const Ie=(0,D.c)(Se,[["render",Ae],["__scopeId","data-v-0fe146eb"]]);var Te=Ie,Ne=(0,f.eC)({state:{isNavbarVisible:!0,showLoading:!0},mutations:{toggleNavbar(a){a.isNavbarVisible=!a.isNavbarVisible},setShowLoading(a,e){a.showLoading=e}}});let Ce=!0;const Ee=document.createElement("div");document.body.appendChild(Ee),Ne.commit("toggleNavbar"),fe.beforeResolve(((a,e,t)=>{Ce?((0,i.W0)(Te).mount(Ee),setTimeout((()=>{Ee.remove(),Ce=!1,Ne.commit("toggleNavbar"),t()}),4e3)):t()})),fe.afterEach((()=>{Ne.commit("setShowLoading",!1)})),(0,i.W0)(_).use(fe).use(Ne).component("NavBar",k).mount("#app")},7444:function(a,e,t){a.exports=t.p+"img/me.0c8c7096.png"},1936:function(a,e,t){a.exports=t.p+"media/video-wallpaper.df3b4492.mp4"}},e={};function t(i){var s=e[i];if(void 0!==s)return s.exports;var n=e[i]={exports:{}};return a[i].call(n.exports,n,n.exports,t),n.exports}t.m=a,function(){var a=[];t.O=function(e,i,s,n){if(!i){var l=1/0;for(c=0;c<a.length;c++){i=a[c][0],s=a[c][1],n=a[c][2];for(var r=!0,o=0;o<i.length;o++)(!1&n||l>=n)&&Object.keys(t.O).every((function(a){return t.O[a](i[o])}))?i.splice(o--,1):(r=!1,n<l&&(l=n));if(r){a.splice(c--,1);var d=s();void 0!==d&&(e=d)}}return e}n=n||0;for(var c=a.length;c>0&&a[c-1][2]>n;c--)a[c]=a[c-1];a[c]=[i,s,n]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var i in e)t.o(e,i)&&!t.o(a,i)&&Object.defineProperty(a,i,{enumerable:!0,get:e[i]})}}(),function(){t.f={},t.e=function(a){return Promise.all(Object.keys(t.f).reduce((function(e,i){return t.f[i](a,e),e}),[]))}}(),function(){t.u=function(a){return"js/"+a+".74445256.js"}}(),function(){t.miniCssF=function(a){return"css/"+a+".2b8a6feb.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){var a={},e="vue-portfolio:";t.l=function(i,s,n,l){if(a[i])a[i].push(s);else{var r,o;if(void 0!==n)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==e+n){r=u;break}}r||(o=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",e+n),r.src=i),a[i]=[s];var v=function(e,t){r.onerror=r.onload=null,clearTimeout(p);var s=a[i];if(delete a[i],r.parentNode&&r.parentNode.removeChild(r),s&&s.forEach((function(a){return a(t)})),e)return e(t)},p=setTimeout(v.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=v.bind(null,r.onerror),r.onload=v.bind(null,r.onload),o&&document.head.appendChild(r)}}}(),function(){t.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var a=function(a,e,t,i,s){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var l=function(t){if(n.onerror=n.onload=null,"load"===t.type)i();else{var l=t&&t.type,r=t&&t.target&&t.target.href||e,o=new Error("Loading CSS chunk "+a+" failed.\n("+l+": "+r+")");o.name="ChunkLoadError",o.code="CSS_CHUNK_LOAD_FAILED",o.type=l,o.request=r,n.parentNode&&n.parentNode.removeChild(n),s(o)}};return n.onerror=n.onload=l,n.href=e,t?t.parentNode.insertBefore(n,t.nextSibling):document.head.appendChild(n),n},e=function(a,e){for(var t=document.getElementsByTagName("link"),i=0;i<t.length;i++){var s=t[i],n=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(n===a||n===e))return s}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],n=s.getAttribute("data-href");if(n===a||n===e)return s}},i=function(i){return new Promise((function(s,n){var l=t.miniCssF(i),r=t.p+l;if(e(l,r))return s();a(i,r,null,s,n)}))},s={524:0};t.f.miniCss=function(a,e){var t={296:1};s[a]?e.push(s[a]):0!==s[a]&&t[a]&&e.push(s[a]=i(a).then((function(){s[a]=0}),(function(e){throw delete s[a],e})))}}}(),function(){var a={524:0};t.f.j=function(e,i){var s=t.o(a,e)?a[e]:void 0;if(0!==s)if(s)i.push(s[2]);else{var n=new Promise((function(t,i){s=a[e]=[t,i]}));i.push(s[2]=n);var l=t.p+t.u(e),r=new Error,o=function(i){if(t.o(a,e)&&(s=a[e],0!==s&&(a[e]=void 0),s)){var n=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.src;r.message="Loading chunk "+e+" failed.\n("+n+": "+l+")",r.name="ChunkLoadError",r.type=n,r.request=l,s[1](r)}};t.l(l,o,"chunk-"+e,e)}},t.O.j=function(e){return 0===a[e]};var e=function(e,i){var s,n,l=i[0],r=i[1],o=i[2],d=0;if(l.some((function(e){return 0!==a[e]}))){for(s in r)t.o(r,s)&&(t.m[s]=r[s]);if(o)var c=o(t)}for(e&&e(i);d<l.length;d++)n=l[d],t.o(a,n)&&a[n]&&a[n][0](),a[n]=0;return t.O(c)},i=self["webpackChunkvue_portfolio"]=self["webpackChunkvue_portfolio"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=t.O(void 0,[999],(function(){return t(3940)}));i=t.O(i)})();
//# sourceMappingURL=app.38eb97d9.js.map