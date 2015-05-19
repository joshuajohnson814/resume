!function(){"use strict";function e(e){e.state("resume",{"abstract":!0,url:"/resume",templateUrl:"app/resume/resume.html",controller:"Resume",controllerAs:"vm"}).state("resume.about",{url:"/about",title:"About Me: Joshua Johnson",header:"About Me",templateUrl:"app/resume/pages/about.html"}).state("resume.skills",{url:"/skills",title:"Technical Skills: Joshua Johnson",header:"Technical Skills",templateUrl:"app/resume/pages/skills.html"}).state("resume.experience",{url:"/experience",title:"Experience: Joshua Johnson",header:"Experience",templateUrl:"app/resume/pages/experience.html"}).state("resume.education",{url:"/education",title:"Education: Joshua Johnson",header:"Education",templateUrl:"app/resume/pages/education.html"})}angular.module("app.resume",[]).config(e),e.$inject=["$stateProvider"]}(),function(){"use strict";function e(e,t){function a(){e("left").toggle()}function n(e){t.go(e),o.toggleNav()}function i(e){}var o=this;o.contact={},o.toggleNav=a,o.goToNav=n,o.sendMessage=i}angular.module("app.resume").controller("Resume",e),e.$inject=["$mdSidenav","$state"]}(),function(){"use strict";angular.module("app.core",["ngAnimate","ngTouch","ngSanitize","ui.router","ngMaterial"])}(),function(){"use strict";angular.module("app",["app.core","app.resume"])}(),function(){"use strict";function e(e,t,a){FastClick.attach(document.body),e.$state=t,e.$stateParams=a,e.$on("$stateChangeSuccess",function(t,a){e.title=a.title||"Joshua Johnson",e.header=a.header||"Resume"})}angular.module("app").run(e),e.$inject=["$rootScope","$state","$stateParams"]}(),function(){"use strict";function e(e,t){e.otherwise("/resume/about"),t.html5Mode(!0).hashPrefix("!")}angular.module("app").config(e),e.$inject=["$urlRouterProvider","$locationProvider"]}(),angular.module("app").run(["$templateCache",function(e){e.put("app/resume/resume.html",'<md-sidenav class="md-sidenav-left md-whiteframe-z2" md-component-id="left" md-is-locked-open="$mdMedia(\'gt-md\')"><md-content layout-padding=""><md-list><md-list-item ng-click="vm.goToNav(\'resume.about\')"><img ng-src="assets/images/avatar.png" class="md-avatar"><p>About Me</p></md-list-item><md-list-item ng-click="vm.goToNav(\'resume.skills\')"><i class="fa fa-html5"></i><p>Technical Skills</p></md-list-item><md-list-item ng-click="vm.goToNav(\'resume.experience\')"><i class="fa fa-server"></i><p>Experience</p></md-list-item><md-list-item ng-click="vm.goToNav(\'resume.education\')"><i class="fa fa-graduation-cap"></i><p>Education</p></md-list-item></md-list></md-content></md-sidenav><div layout="column" layout-fill="" layout-align="top center"><md-toolbar class="md-theme-indigo md-toolbar-tools"><md-button class="md-icon-button md-default-theme" hide-gt-md="" ng-click="vm.toggleNav()"><i class="fa fa-bars"></i></md-button><h2>{{header}}</h2></md-toolbar><md-content layout-padding="" class="doc-content"><div ui-view=""></div></md-content></div>'),e.put("app/resume/about/about.html",'<section class="about"><img ng-src="assets/images/avatar.png" class="md-avatar"><h1>Joshua L. Johnson</h1><h4>(480) 381-5613</h4><h4>joshua.johnson.814@gmail.com</h4></section>'),e.put("app/resume/pages/about.html",'<section class="about"><div class="info text-center"><img ng-src="assets/images/avatar.png" class="md-avatar"><h1>Joshua L. Johnson</h1><h4>(480) 381-5613</h4><h4>joshua.johnson.814@gmail.com</h4><md-button ng-href="https://www.linkedin.com/in/joshuajohnson814" target="_blank" class="md-fab md-primary" style="background-color: #4875B4 !important"><i class="fa fa-linkedin"></i></md-button><md-button ng-href="https://www.facebook.com/joshuajohnson814" target="_blank" class="md-fab md-primary" style="background-color: #3b5998 !important"><i class="fa fa-facebook"></i></md-button></div><br><md-card><md-card-content><h2 class="md-title">How I Would Describe Myself...</h2><p>Constantly evolving, professional front-end engineer. Self-motivated and works best in an agile, team-oriented environment consistently improving engineering skills. Obsessed with solving challenging problems and staying on the bleeding edge of technology. Passionate about building beautiful, highly performant, responsive, user-friendly applications.</p></md-card-content></md-card><md-card><md-card-content><h2 class="md-title">In My Free Time...</h2><p>I\'m always looking to build the next big thing with the next technology and when I\'m not tinkering I\'m spending time with my family. I love to play and watch just about any sport but my favorite would have to be basketball.</p></md-card-content></md-card></section>'),e.put("app/resume/pages/contact.html",'<section class="contact"><h2>Send me a message</h2><form name="contactForm" novalidate="" ng-submit="vm.sendMessage(contactForm.$valid)"><md-input-container flex=""><label>Name</label> <input type="text" required="" name="name" ng-model="vm.contact.name"><div ng-messages="contactForm.name.$error" ng-show="contactForm.name.$invalid && contactForm.$submitted"><div ng-message="required">Please enter your name</div></div></md-input-container><md-input-container flex=""><label>Email</label> <input type="email" required="" name="email" ng-model="vm.contact.email"><div ng-messages="contactForm.email.$error" ng-show="contactForm.email.$invalid && contactForm.$submitted"><div ng-message="email">Please enter your email</div></div></md-input-container><md-input-container flex=""><label>Message</label> <textarea md-maxlength="1000" required="" name="message" ng-model="vm.contact.message"></textarea><div ng-messages="contactForm.message.$error" ng-show="contactForm.message.$invalid && contactForm.$submitted"><div ng-message="required">Please enter your message</div></div></md-input-container><md-button type="submit" class="md-raised md-primary">Send</md-button></form></section>'),e.put("app/resume/pages/education.html",'<section class="education"><h2>Arizona State University</h2><ul><li>Majored in Computer Science, August 2006 to May 2010</li><li>Graduated Summa Cum Laude 3.8 GPA on a 4.0 scale</li><li>National Society of Collegiate Scholars, 2006-2010</li><li>University Scholarship Recipient, 2006-2010</li><li>Member, Dean’s List, 2006-2010</li></ul></section>'),e.put("app/resume/pages/experience.html",'<section class="experience"><md-card><md-card-content><h3 class="md-title">Senior Architect and Web Developer</h3><h4><i>IntraEdge</i>, Chandler, Arizona</h4><h4>November 2014 to Present</h4><img src="assets/images/intraedge.png" alt="IntraEdge"><ul><li>Lead front-end role on redesign of Choice Hotels website</li><li>AngularJS and Bootstrap</li><li>Consistently the go-to developer for product owners</li></ul></md-card-content></md-card><md-card><md-card-content><h3 class="md-title">Co-Founder and Lead Web Developer</h3><h4><i>Dropback LLC</i>, Chandler, Arizona</h4><h4>February 2015 to Present</h4><img src="assets/images/dropback.png" alt="IntraEdge"><ul><li>Web and mobile applications currently in development</li><li>Developing web application with AngularJS, Foundation for Apps, Gulp and Node.js</li><li>Full unit test and e2e test coverage integrated through wercker CI/CD system</li></ul></md-card-content></md-card><md-card><md-card-content><h3 class="md-title">Co-Founder and Lead Developer</h3><h4><i>Pyrium LLC</i>, Chandler, Arizona</h4><h4>March 2014 to Present</h4><img src="assets/images/firstandfive.png" alt="IntraEdge"><ul><li>1st&5 Fantasy football website and mobile applications</li><li>Developed iOS and Android applications using AngularJS and Cordova</li><li>Built REST API layer using Node.js and Express.js, consumed by all applications</li></ul></md-card-content></md-card><md-card><md-card-content><h3 class="md-title">Lead Mobile Web Developer</h3><h4><i>GoDaddy</i>, Scottsdale, Arizona</h4><h4>August 2012 to Present</h4><img src="assets/images/godaddy.png" alt="IntraEdge"><ul><li>Lead UI development for a high traffic e-commerce mobile website using .NET</li><li>Decreased page load time by 50% using web performance techniques</li><li>Development manager for mobile website and native applications</li><li>Constantly met with marketing and stakeholders to deliver the best product</li></ul></md-card-content></md-card><md-card><md-card-content><h3 class="md-title">Software Engineer</h3><h4><i>Garmin Ltd.</i>, Chandler, Arizona</h4><h4>June 2010 to August 2012</h4><img src="assets/images/garmin.png" alt="IntraEdge"><ul><li>Lead developer on three AutoOEM web portals</li><li>Went through entire development life-cycle of each web portal</li><li>Development manager for mobile website and native applications</li><li>Developed web applications using HTML, Java, Grails, CSS, Javascript and jQuery</li></ul></md-card-content></md-card></section>'),e.put("app/resume/pages/skills.html",'<section class="skills"><md-card><md-card-content><h2 class="md-title">Web Stack</h2><p>HTML, CSS, AngularJS, JavaScript, SASS, Bootstrap, Foundation, Material</p></md-card-content></md-card><md-card><md-card-content><h2 class="md-title">Native App Stack</h2><p>Cordova</p></md-card-content></md-card><md-card><md-card-content><h2 class="md-title">Automation</h2><p>Gulp, Grunt, Yeoman, Bower, NPM</p></md-card-content></md-card><md-card><md-card-content><h2 class="md-title">CI/CD</h2><p>Jenkins, Wercker</p></md-card-content></md-card><md-card><md-card-content><h2 class="md-title">Server</h2><p>Node.js, Express.js, .NET, Apache</p></md-card-content></md-card><md-card><md-card-content><h2 class="md-title">Apps/Tools</h2><p>Git, GitHub, Bitbucket, Stash, Eclipse, JIRA, Rally, TFS, Visual Studio</p></md-card-content></md-card><md-card><md-card-content><h2 class="md-title">Database Systems</h2><p>MongoDB, MySQL</p></md-card-content></md-card><md-card><md-card-content><h2 class="md-title">Web Services</h2><p>REST, JSON</p></md-card-content></md-card><md-card><md-card-content><h2 class="md-title">Software Development</h2><p>Agile, Scrum master, Team leadership, Work closely with designers</p></md-card-content></md-card></section>')}]);