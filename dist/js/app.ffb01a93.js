(function(){"use strict";var a={6072:function(a,e,t){var s=t(7764),i=t(4108);function n(a,e,t,s,n,l){const r=(0,i.E1)("MouseCursor"),d=(0,i.E1)("router-view"),c=(0,i.E1)("NavBar"),o=(0,i.E1)("DarkMode");return(0,i.Wz)(),(0,i.An)("div",null,[(0,i.K2)(r),(0,i.K2)(d),(0,i.K2)(c),(0,i.K2)(o)])}var l=t(9096),r=t.p+"img/a.da1106fe.png";const d=a=>((0,i.ED)("data-v-c08d7d4a"),a=a(),(0,i.ii)(),a),c={key:0},o={id:"navbar"},v={class:"nav-header"},p={class:"nav-logo"},u=d((()=>(0,i.QD)("div",{class:"header-divider"},[(0,i.QD)("hr")],-1))),h=d((()=>(0,i.QD)("div",{class:"nav-title"},[(0,i.QD)("h1",{class:"headline-small-2 line-height-low"},"DEV"),(0,i.QD)("h1",{class:"headline-xsmall-2 line-height-low"},"INTERN")],-1))),m={class:"nav-list-items"},b=d((()=>(0,i.QD)("div",{class:"fidget-container"},null,-1)));function g(a,e,t,s,n,d){const g=(0,i.E1)("router-link");return(0,i.Wz)(),(0,i.An)(i.ae,null,[n.isNavbarVisible?(0,i.g1)("",!0):((0,i.Wz)(),(0,i.An)("picture",c,[(0,i.QD)("img",{src:r,alt:"a-logo",class:"logo logo-container",onClick:e[0]||(e[0]=(...a)=>d.toggleNavbar&&d.toggleNavbar(...a))})])),(0,i.QD)("div",{class:(0,l.WN)(["navbar-vertical-fixed",{hidden:!n.isNavbarVisible}])},[(0,i.QD)("nav",o,[(0,i.QD)("div",v,[(0,i.QD)("div",p,[(0,i.QD)("picture",null,[(0,i.QD)("img",{src:r,alt:"a-logo",class:"logo",onClick:e[1]||(e[1]=(...a)=>d.toggleNavbar&&d.toggleNavbar(...a))})])]),u,h]),(0,i.QD)("div",m,[(0,i.K2)(g,{to:"/",class:"nav-item",onClick:d.hideNavbarOnSmallScreens},{default:(0,i.Ql)((()=>[(0,i.mY)("HOME")])),_:1},8,["onClick"]),(0,i.K2)(g,{to:"/about",class:"nav-item",onClick:d.hideNavbarOnSmallScreens},{default:(0,i.Ql)((()=>[(0,i.mY)("ABOUT")])),_:1},8,["onClick"]),(0,i.K2)(g,{to:"/skills",class:"nav-item",onClick:d.hideNavbarOnSmallScreens},{default:(0,i.Ql)((()=>[(0,i.mY)("SKILLS")])),_:1},8,["onClick"]),(0,i.K2)(g,{to:"/projects",class:"nav-item",onClick:d.hideNavbarOnSmallScreens},{default:(0,i.Ql)((()=>[(0,i.mY)("PROJECTS")])),_:1},8,["onClick"])]),b])],2)],64)}var y={name:"NavBar",data(){return{isNavbarVisible:!0}},methods:{toggleNavbar(){this.isNavbarVisible=!this.isNavbarVisible},hideNavbarOnSmallScreens(){window.innerWidth<=900&&(this.isNavbarVisible=!1)}},mounted(){this.hideNavbarOnSmallScreens(),window.addEventListener("resize",this.hideNavbarOnSmallScreens)},beforeUnmount(){window.removeEventListener("resize",this.hideNavbarOnSmallScreens)}},f=t(4100);const D=(0,f.c)(y,[["render",g],["__scopeId","data-v-c08d7d4a"]]);var Q=D;function x(a,e){return(0,i.Wz)(),(0,i.An)("div")}const I={},k=(0,f.c)(I,[["render",x],["__scopeId","data-v-d2753550"]]);var A=k;const S={class:"circle"};function w(a,e,t,s,n,l){return(0,i.Wz)(),(0,i.An)("div",S)}var C={name:"WallpaperComponent",mounted(){console.clear();const a=document.querySelector(".circle"),e={x:0,y:0},t={x:0,y:0},s={x:0,y:0};let i=0,n=0;window.addEventListener("mousemove",(a=>{e.x=a.x,e.y=a.y}));const l=.17,r=()=>{s.x+=(e.x-s.x)*l,s.y+=(e.y-s.y)*l;const d=`translate(${s.x}px, ${s.y}px)`,c=e.x-t.x,o=e.y-t.y;t.x=e.x,t.y=e.y;const v=Math.min(4*Math.sqrt(c**2+o**2),150),p=v/150*.5;i+=(p-i)*l;const u=`scale(${1+i}, ${1-i})`,h=180*Math.atan2(o,c)/Math.PI;v>20&&(n=h);const m=`rotate(${n}deg)`;a.style.transform=`${d} ${m} ${u}`,window.requestAnimationFrame(r)};r()}};const T=(0,f.c)(C,[["render",w]]);var E=T,N={name:"App",components:{NavBar:Q,DarkMode:A,MouseCursor:E}};const O=(0,f.c)(N,[["render",n]]);var L=O,M=t.p+"img/github.09398c5a.svg",V=t.p+"img/instagram.d2f2aaec.svg",_=t.p+"img/linkedin.64d926fb.svg",W=t.p+"media/video-wallpaper.df3b4492.mp4";const P=a=>((0,i.ED)("data-v-250a687b"),a=a(),(0,i.ii)(),a),H=(0,i.IL)('<div class="text-container" data-v-250a687b><h1 class="headline-xsmall" data-v-250a687b>Hi there,</h1><h1 class="headline-large" data-v-250a687b>I&#39;m Aqeel Hanslo</h1><div class="circular-animation" data-v-250a687b><h1 class="headline-medium" data-v-250a687b> &lt;Software Developer/&gt; </h1></div><p class="headline-small" data-v-250a687b><span class="opacity-full" data-v-250a687b><br data-v-250a687b> The design of an application or website usually </span><span class="opacity-half" data-v-250a687b><br data-v-250a687b> mirrors the thought process of the creator. Tell me </span><span class="opacity-quarter" data-v-250a687b><br data-v-250a687b> what to do and I&#39;ll try to visualize your ideas</span></p></div>',1),j={class:"links-container"},z={class:"styled-button"},q=P((()=>(0,i.QD)("div",{class:"left"},[(0,i.QD)("div",{class:"box-1"}),(0,i.QD)("div",{class:"box-2"}),(0,i.QD)("div",{class:"box-3"})],-1))),G={class:"middle"},K=P((()=>(0,i.QD)("div",{class:"box-4"},null,-1))),R={class:"box-5"},U=P((()=>(0,i.QD)("div",{class:"box-6"},null,-1))),Y=P((()=>(0,i.QD)("div",{class:"right"},[(0,i.QD)("div",{class:"box-7"}),(0,i.QD)("div",{class:"box-8"}),(0,i.QD)("div",{class:"box-9"})],-1))),B=(0,i.IL)('<div class="social-links" data-v-250a687b><a href="https://github.com/aqeeluser404" target="_blank" rel="noopener noreferrer" data-v-250a687b><img src="'+M+'" alt="github-logo" class="social-icon" data-v-250a687b></a><a href="#" target="_blank" rel="noopener noreferrer" data-v-250a687b><img src="'+V+'" alt="github-logo" class="social-icon" data-v-250a687b></a><a href="https://www.linkedin.com/in/aqeel-hanslo-234961210" target="_blank" rel="noopener noreferrer" data-v-250a687b><img src="'+_+'" alt="linkedin-logo" class="social-icon unique-icon" data-v-250a687b></a></div>',1),F=P((()=>(0,i.QD)("div",{class:"page-number"},[(0,i.QD)("h1",{class:"headline-xsmall"},"01")],-1))),$=P((()=>(0,i.QD)("video",{autoplay:"",muted:"",loop:"",id:"video-background"},[(0,i.QD)("source",{src:W,type:"video/mp4"}),(0,i.mY)(" Your browser does not support the video tag. ")],-1)));function J(a,e,t,s,n,r){return(0,i.Wz)(),(0,i.An)("div",{class:"main-container",style:(0,l.MN)({marginLeft:a.navbarWidth})},[H,(0,i.QD)("div",j,[(0,i.QD)("div",z,[q,(0,i.QD)("div",G,[K,(0,i.QD)("div",R,[(0,i.QD)("button",{class:"button",onClick:e[0]||(e[0]=(...a)=>r.GotoContact&&r.GotoContact(...a))},"Get In Touch")]),U]),Y]),B]),F,$],4)}t(3248);var X={name:"HomeCard",methods:{GotoContact(){console.log("GotoContact method called"),this.$router.push("/contact")}}};const Z=(0,f.c)(X,[["render",J],["__scopeId","data-v-250a687b"]]);var aa=Z;const ea=a=>((0,i.ED)("data-v-5423125b"),a=a(),(0,i.ii)(),a),ta={class:"main-container"},sa={class:"row-1"},ia={class:"container-one line-height-low"},na=ea((()=>(0,i.QD)("h1",{class:"headline-large-black"},"About Me",-1))),la=ea((()=>(0,i.QD)("br",null,null,-1))),ra={class:"typing-text-animation headline-medium"},da={class:"typed-text weight-bold"},ca=ea((()=>(0,i.QD)("div",null,[(0,i.QD)("p",{class:"headline-small-black"},"My name is Aqeel Hanslo, third year graduate at CPUT, I have chosen the career in Applications Development because I not only enjoy building applications but also consider it one of my strong suits. I possess the ability to think outside the box to create innovative solutions for problems."),(0,i.QD)("br"),(0,i.QD)("br"),(0,i.QD)("button",{class:"button"},"Download CV")],-1))),oa={class:"container-two line-height-low"},va={class:"image-container"},pa=["src"],ua=["src"],ha=(0,i.IL)('<div class="row-2" data-v-5423125b><h1 class="headline-large-blue" data-v-5423125b>Education</h1><div class="timeline" data-v-5423125b><ul data-v-5423125b><li data-v-5423125b><div class="timeline-content" data-v-5423125b><h3 class="date" data-v-5423125b>2023 - 2024</h3><h1 data-v-5423125b>CapaCiTi</h1><br data-v-5423125b><p data-v-5423125b>LEARNERSHIP IN FULLSTACK DEVELOPMENT</p></div></li><li data-v-5423125b><div class="timeline-content" data-v-5423125b><h3 class="date" data-v-5423125b>2021 - 2023</h3><h1 data-v-5423125b>Cape Peninsula University of Technology</h1><br data-v-5423125b><p data-v-5423125b>DIPLOMA IN ICT: APPLICATION DEVELOPMENT</p></div></li><li data-v-5423125b><div class="timeline-content" data-v-5423125b><h3 class="date" data-v-5423125b>2020 - 2021</h3><h1 data-v-5423125b>College of Cape Town</h1><br data-v-5423125b><p data-v-5423125b>HIGHER CERTIFICATION IN INFO &amp; COM</p></div></li><li data-v-5423125b><div class="timeline-content" data-v-5423125b><h3 class="date" data-v-5423125b>2019 - 2020</h3><h1 data-v-5423125b>Gap year at Emcon Construction</h1><br data-v-5423125b><p data-v-5423125b>WORK EXPERIENCE</p></div></li><li data-v-5423125b><div class="timeline-content" data-v-5423125b><h3 class="date" data-v-5423125b>2013 - 2018</h3><h1 data-v-5423125b>Oracle Academy High School</h1><br data-v-5423125b><p data-v-5423125b>BACHELOR&#39;S DEGREE CERTIFICATION</p></div></li></ul></div></div><div class="page-number" data-v-5423125b><h1 class="headline-xsmall" data-v-5423125b>02</h1></div>',2);function ma(a,e,t,s,n,r){return(0,i.Wz)(),(0,i.An)("div",ta,[(0,i.QD)("div",sa,[(0,i.QD)("div",ia,[(0,i.QD)("div",null,[na,la,(0,i.QD)("h1",ra,[(0,i.QD)("span",da,(0,l.WA)(a.typeValue),1),(0,i.QD)("span",{class:(0,l.WN)(["cursor",{typing:a.typeStatus}])}," ",2)])]),ca]),(0,i.QD)("div",oa,[(0,i.QD)("div",va,[(0,i.QD)("img",{src:a.gifPath,alt:"#",class:"image-1"},null,8,pa),(0,i.QD)("img",{src:a.gifPath,alt:"#",class:"image-2"},null,8,ua)])])]),ha])}var ba={name:"AboutCard",data:()=>({typeValue:"",typeStatus:!1,typeArray:["Creative.","Innovative.","Humble.","Curious."],typingSpeed:200,erasingSpeed:100,newTextDelay:500,typeArrayIndex:0,charIndex:0,gifPath:t(7444)}),methods:{typeText(){this.charIndex<this.typeArray[this.typeArrayIndex].length?(this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.typeArray[this.typeArrayIndex].charAt(this.charIndex),this.charIndex+=1,setTimeout(this.typeText,this.typingSpeed)):(this.typeStatus=!1,setTimeout(this.eraseText,this.newTextDelay))},eraseText(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.typeArray[this.typeArrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,setTimeout(this.eraseText,this.erasingSpeed)):(this.typeStatus=!1,this.typeArrayIndex+=1,this.typeArrayIndex>=this.typeArray.length&&(this.typeArrayIndex=0),setTimeout(this.typeText,this.typingSpeed+1e3))}},created(){setTimeout(this.typeText,this.newTextDelay+200)}};const ga=(0,f.c)(ba,[["render",ma],["__scopeId","data-v-5423125b"]]);var ya=ga;const fa=a=>((0,i.ED)("data-v-c9277fd6"),a=a(),(0,i.ii)(),a),Da={class:"main-container"},Qa=(0,i.IL)('<div class="text-container line-height-low" data-v-c9277fd6><h1 class="headline-large" data-v-c9277fd6>Skills</h1><p class="headline-small" data-v-c9277fd6><span class="opacity-full" data-v-c9277fd6><br data-v-c9277fd6> The design of an application or website usually </span><span class="opacity-half" data-v-c9277fd6><br data-v-c9277fd6> mirrors the thought process of the creator. Tell me </span><span class="opacity-quarter" data-v-c9277fd6><br data-v-c9277fd6> what to do and I&#39;ll try to visualize your ideas</span><br data-v-c9277fd6><br data-v-c9277fd6><br data-v-c9277fd6><br data-v-c9277fd6><button class="button" data-v-c9277fd6>View My work</button></p></div><br data-v-c9277fd6>',2),xa=fa((()=>(0,i.QD)("div",{class:"skill-container"},[(0,i.QD)("div",{class:"skill"},[(0,i.QD)("div",{class:"skill-name"},"HTML"),(0,i.QD)("div",{class:"skill-bar"},[(0,i.QD)("div",{class:"skill-per",per:"90%",style:{"max-width":"90%"}})])]),(0,i.QD)("div",{class:"skill"},[(0,i.QD)("div",{class:"skill-name"},"CSS"),(0,i.QD)("div",{class:"skill-bar"},[(0,i.QD)("div",{class:"skill-per",per:"85%",style:{"max-width":"85%"}})])]),(0,i.QD)("div",{class:"skill"},[(0,i.QD)("div",{class:"skill-name"},"Javascript"),(0,i.QD)("div",{class:"skill-bar"},[(0,i.QD)("div",{class:"skill-per",per:"55%",style:{"max-width":"55%"}})])]),(0,i.QD)("div",{class:"skill"},[(0,i.QD)("div",{class:"skill-name"},"Vue.JS"),(0,i.QD)("div",{class:"skill-bar"},[(0,i.QD)("div",{class:"skill-per",per:"60%",style:{"max-width":"60%"}})])]),(0,i.QD)("div",{class:"skill"},[(0,i.QD)("div",{class:"skill-name"},"SPRINGBOOT"),(0,i.QD)("div",{class:"skill-bar"},[(0,i.QD)("div",{class:"skill-per",per:"70%",style:{"max-width":"70%"}})])]),(0,i.QD)("div",{class:"skill"},[(0,i.QD)("div",{class:"skill-name"},"MYSQL"),(0,i.QD)("div",{class:"skill-bar"},[(0,i.QD)("div",{class:"skill-per",per:"70%",style:{"max-width":"70%"}})])]),(0,i.QD)("div",{class:"skill"},[(0,i.QD)("div",{class:"skill-name"},"JAVA"),(0,i.QD)("div",{class:"skill-bar"},[(0,i.QD)("div",{class:"skill-per",per:"80%",style:{"max-width":"80%"}})])]),(0,i.QD)("div",{class:"skill"},[(0,i.QD)("div",{class:"skill-name"},"GIT"),(0,i.QD)("div",{class:"skill-bar"},[(0,i.QD)("div",{class:"skill-per",per:"90%",style:{"max-width":"90%"}})])])],-1))),Ia=fa((()=>(0,i.QD)("div",{class:"page-number"},[(0,i.QD)("h1",{class:"headline-xsmall"},"03")],-1))),ka=fa((()=>(0,i.QD)("video",{autoplay:"",muted:"",loop:"",id:"video-background"},[(0,i.QD)("source",{src:W,type:"video/mp4"}),(0,i.mY)(" Your browser does not support the video tag. ")],-1))),Aa=[Qa,xa,Ia,ka];function Sa(a,e,t,s,n,l){return(0,i.Wz)(),(0,i.An)("div",Da,Aa)}var wa={name:"SkillsCard"};const Ca=(0,f.c)(wa,[["render",Sa],["__scopeId","data-v-c9277fd6"]]);var Ta=Ca,Ea=t.p+"img/first-portfolio.fe3fcf98.png",Na=t.p+"img/animeapp.ff6786e4.png",Oa=t.p+"img/bankapp2.6540f271.png";const La=a=>((0,i.ED)("data-v-49afd937"),a=a(),(0,i.ii)(),a),Ma={class:"main-container"},Va={class:"text-container"},_a=La((()=>(0,i.QD)("h1",{class:"headline-large"},"Projects",-1))),Wa=La((()=>(0,i.QD)("br",null,null,-1))),Pa={class:"typing-text-animation headline-medium"},Ha={class:"typed-text weight-bold"},ja=(0,i.IL)('<div class="card-row" data-v-49afd937><div class="card" data-v-49afd937><img src="'+Ea+'" class="card-img" alt="#" data-v-49afd937><div class="card-body" data-v-49afd937><h1 class="card-title" data-v-49afd937>First Portfolio</h1><p class="card-sub-title" data-v-49afd937>HTML CSS and JavaScript</p><p class="card-info" data-v-49afd937>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt esse vel provident ducimus laborum praesentium perspiciatis, aliquid cupiditate.</p><button class="card-btn" data-v-49afd937>Source Code</button></div></div><div class="card" data-v-49afd937><img src="'+Na+'" class="card-img" alt="#" data-v-49afd937><div class="card-body" data-v-49afd937><h1 class="card-title" data-v-49afd937>Anime Web App</h1><p class="card-sub-title" data-v-49afd937>Java Springboot and Vue.js</p><p class="card-info" data-v-49afd937>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt esse vel provident ducimus laborum praesentium perspiciatis, aliquid cupiditate.</p><button class="card-btn" data-v-49afd937>Source Code</button></div></div><div class="card" data-v-49afd937><img src="'+Oa+'" class="card-img" alt="#" data-v-49afd937><div class="card-body" data-v-49afd937><h1 class="card-title" data-v-49afd937>Project 1</h1><p class="card-sub-title" data-v-49afd937>Sub heading</p><p class="card-info" data-v-49afd937>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt esse vel provident ducimus laborum praesentium perspiciatis, aliquid cupiditate.</p><button class="card-btn" data-v-49afd937>Source Code</button></div></div></div><div class="page-number" data-v-49afd937><h1 class="headline-xsmall" data-v-49afd937>04</h1></div><video autoplay muted loop id="video-background" data-v-49afd937><source src="'+W+'" type="video/mp4" data-v-49afd937> Your browser does not support the video tag. </video>',3);function za(a,e,t,s,n,r){return(0,i.Wz)(),(0,i.An)("div",Ma,[(0,i.QD)("div",Va,[_a,Wa,(0,i.QD)("h1",Pa,[(0,i.QD)("span",Ha,(0,l.WA)(a.typeValue),1),(0,i.QD)("span",{class:(0,l.WN)(["cursor",{typing:a.typeStatus}])}," ",2)])]),ja])}var qa={name:"ProjectsCard",data:()=>({typeValue:"",typeStatus:!1,typeArray:["Willing to implement new ideas.","Learning new things."],typingSpeed:200,erasingSpeed:100,newTextDelay:500,typeArrayIndex:0,charIndex:0}),methods:{typeText(){this.charIndex<this.typeArray[this.typeArrayIndex].length?(this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.typeArray[this.typeArrayIndex].charAt(this.charIndex),this.charIndex+=1,setTimeout(this.typeText,this.typingSpeed)):(this.typeStatus=!1,setTimeout(this.eraseText,this.newTextDelay))},eraseText(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.typeArray[this.typeArrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,setTimeout(this.eraseText,this.erasingSpeed)):(this.typeStatus=!1,this.typeArrayIndex+=1,this.typeArrayIndex>=this.typeArray.length&&(this.typeArrayIndex=0),setTimeout(this.typeText,this.typingSpeed+1e3))}},created(){setTimeout(this.typeText,this.newTextDelay+200)}};const Ga=(0,f.c)(qa,[["render",za],["__scopeId","data-v-49afd937"]]);var Ka=Ga;const Ra=a=>((0,i.ED)("data-v-c15c3b7c"),a=a(),(0,i.ii)(),a),Ua={class:"main-container"},Ya=(0,i.IL)('<div class="container-one line-height-low" data-v-c15c3b7c><div data-v-c15c3b7c><h1 class="headline-large-black" data-v-c15c3b7c>Contact</h1><br data-v-c15c3b7c><h1 class="headline-medium" data-v-c15c3b7c><span class="weight-bold" data-v-c15c3b7c>Let&#39;s Talk</span></h1><br data-v-c15c3b7c><p class="headline-small-black line-height-med" data-v-c15c3b7c><span data-v-c15c3b7c><b data-v-c15c3b7c>Questions</b> or <b data-v-c15c3b7c>ideas?</b></span><br data-v-c15c3b7c><span data-v-c15c3b7c>Drop me a message in the form</span><br data-v-c15c3b7c><br data-v-c15c3b7c><span data-v-c15c3b7c>Let&#39;s talk about your next project!</span></p></div></div>',1),Ba={class:"container-two"},Fa={class:"contact-form"},$a={class:"form-group"},Ja=Ra((()=>(0,i.QD)("label",{for:"name"},"NAME",-1))),Xa={class:"form-group"},Za=Ra((()=>(0,i.QD)("label",{for:"email"},"EMAIL",-1))),ae={class:"form-group"},ee=Ra((()=>(0,i.QD)("label",{for:"message"},"MESSAGE",-1))),te=Ra((()=>(0,i.QD)("div",{class:"form-group"},[(0,i.QD)("div",{class:"g-recaptcha"}),(0,i.QD)("input",{id:"submit",type:"submit",value:"Submit",class:"button"})],-1))),se={id:"msg"},ie=Ra((()=>(0,i.QD)("div",{class:"page-number"},[(0,i.QD)("h1",{class:"headline-xsmall"},"05")],-1)));function ne(a,e,t,n,r,d){return(0,i.Wz)(),(0,i.An)("div",Ua,[Ya,(0,i.QD)("div",Ba,[(0,i.QD)("div",Fa,[(0,i.QD)("form",{onSubmit:e[3]||(e[3]=(0,s.Y7)(((...a)=>d.handleSubmit&&d.handleSubmit(...a)),["prevent"]))},[(0,i.QD)("div",$a,[Ja,(0,i.wt)((0,i.QD)("input",{type:"text",id:"name",name:"name",required:"",placeholder:"Type Here","onUpdate:modelValue":e[0]||(e[0]=a=>r.name=a)},null,512),[[s.Og,r.name]])]),(0,i.QD)("div",Xa,[Za,(0,i.wt)((0,i.QD)("input",{type:"email",id:"email",name:"email",required:"",placeholder:"Type Here","onUpdate:modelValue":e[1]||(e[1]=a=>r.email=a)},null,512),[[s.Og,r.email]])]),(0,i.QD)("div",ae,[ee,(0,i.wt)((0,i.QD)("textarea",{id:"message",name:"message",required:"","onUpdate:modelValue":e[2]||(e[2]=a=>r.message=a)},null,512),[[s.Og,r.message]])]),te,(0,i.QD)("span",se,(0,l.WA)(r.submitMessage),1)],32)])]),ie])}var le=t(884);t(3976);const re={apiKey:"AIzaSyBOwOFP4AczsFXt6U-QgWg1aeEjlpUGVhU",authDomain:"portfolio-version-2-96bc6.firebaseapp.com",projectId:"portfolio-version-2-96bc6",storageBucket:"portfolio-version-2-96bc6.appspot.com",messagingSenderId:"849045256972",appId:"1:849045256972:web:08a57a19023eb61e532729"};le.c.initializeApp(re);const de=le.c.firestore();var ce={name:"ContactCard",data(){return{name:"",email:"",message:"",submitMessage:"",recaptchaToken:null}},methods:{async handleSubmit(){try{const a=await grecaptcha.execute("6LdGoW8pAAAAAK_oMIExegB957yAhvHfVYIJUoOk",{action:"submit"});if(!a)return void console.error("reCAPTCHA verification failed");let e={name:this.name,email:this.email,message:this.message,recaptchaResponse:a};await de.collection("userMessages").add(e),this.name="",this.email="",this.message="",this.submitMessage="Message sent successfully"}catch(a){console.error("Error submitting form:",a),this.submitMessage="Error submitting form. Please try again."}}},mounted(){const a=document.createElement("script");a.src="https://www.google.com/recaptcha/api.js?render=6LdGoW8pAAAAAK_oMIExegB957yAhvHfVYIJUoOk",a.async=!0,a.defer=!0,document.head.appendChild(a)}};const oe=(0,f.c)(ce,[["render",ne],["__scopeId","data-v-c15c3b7c"]]);var ve=oe,pe=t(7464);const ue=[{name:"HomeCard",component:aa,path:"/"},{name:"AboutCard",component:ya,path:"/about"},{name:"SkillsCard",component:Ta,path:"/skills"},{name:"ProjectsCard",component:Ka,path:"/projects"},{name:"ContactCard",component:ve,path:"/contact"}],he=(0,pe.gv)({history:(0,pe.oz)(),routes:ue});var me=he;(0,s.W0)(L).use(me).component("NavBar",Q).mount("#app")},7444:function(a,e,t){a.exports=t.p+"img/me.0c8c7096.png"}},e={};function t(s){var i=e[s];if(void 0!==i)return i.exports;var n=e[s]={exports:{}};return a[s].call(n.exports,n,n.exports,t),n.exports}t.m=a,function(){var a=[];t.O=function(e,s,i,n){if(!s){var l=1/0;for(o=0;o<a.length;o++){s=a[o][0],i=a[o][1],n=a[o][2];for(var r=!0,d=0;d<s.length;d++)(!1&n||l>=n)&&Object.keys(t.O).every((function(a){return t.O[a](s[d])}))?s.splice(d--,1):(r=!1,n<l&&(l=n));if(r){a.splice(o--,1);var c=i();void 0!==c&&(e=c)}}return e}n=n||0;for(var o=a.length;o>0&&a[o-1][2]>n;o--)a[o]=a[o-1];a[o]=[s,i,n]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var s in e)t.o(e,s)&&!t.o(a,s)&&Object.defineProperty(a,s,{enumerable:!0,get:e[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.p="/"}(),function(){var a={524:0};t.O.j=function(e){return 0===a[e]};var e=function(e,s){var i,n,l=s[0],r=s[1],d=s[2],c=0;if(l.some((function(e){return 0!==a[e]}))){for(i in r)t.o(r,i)&&(t.m[i]=r[i]);if(d)var o=d(t)}for(e&&e(s);c<l.length;c++)n=l[c],t.o(a,n)&&a[n]&&a[n][0](),a[n]=0;return t.O(o)},s=self["webpackChunkvue_portfolio"]=self["webpackChunkvue_portfolio"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=t.O(void 0,[999],(function(){return t(6072)}));s=t.O(s)})();
//# sourceMappingURL=app.ffb01a93.js.map