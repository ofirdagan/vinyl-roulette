(()=>{"use strict";var a={756:(a,r,t)=>{t.d(r,{Z:()=>h});var e=t(81),i=t.n(e),s=t(645),n=t.n(s),l=t(667),o=t.n(l),u=new URL(t(372),t.b),m=n()(i()),b=o()(u);m.push([a.id,'@font-face {\n  font-family: "EuroStile";\n  src: url('+b+') format("truetype");\n}\n\n.record-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n\n.record {\n  width: 100%;\n  max-height: 77vh;\n  max-width: 370px;\n}\n\n.page { \n  font-family: "EuroStile", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.record-info {\n  margin-top: 260px;\n  position: absolute;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.album {\n  font-size: 24px;\n  text-align: center;\n  width: 182px;\n}\n\n.artist {\n  font-size: 20px;\n  margin-top: 80px;\n  width: 160px;\n  text-align: center;\n}\n\n.start {\n  font-size: 40px;\n  margin-top: 30px;\n}',""]);const h=m},434:(a,r,t)=>{t.d(r,{Z:()=>l});var e=t(81),i=t.n(e),s=t(645),n=t.n(s)()(i());n.push([a.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const l=n},645:a=>{a.exports=function(a){var r=[];return r.toString=function(){return this.map((function(r){var t="",e=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),e&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=a(r),e&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(a,t,e,i,s){"string"==typeof a&&(a=[[null,a,void 0]]);var n={};if(e)for(var l=0;l<this.length;l++){var o=this[l][0];null!=o&&(n[o]=!0)}for(var u=0;u<a.length;u++){var m=[].concat(a[u]);e&&n[m[0]]||(void 0!==s&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=s),t&&(m[2]?(m[1]="@media ".concat(m[2]," {").concat(m[1],"}"),m[2]=t):m[2]=t),i&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=i):m[4]="".concat(i)),r.push(m))}},r}},667:a=>{a.exports=function(a,r){return r||(r={}),a?(a=String(a.__esModule?a.default:a),/^['"].*['"]$/.test(a)&&(a=a.slice(1,-1)),r.hash&&(a+=r.hash),/["'() \t\n]|(%20)/.test(a)||r.needQuotes?'"'.concat(a.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):a):a}},81:a=>{a.exports=function(a){return a[1]}},379:a=>{var r=[];function t(a){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===a){t=e;break}return t}function e(a,e){for(var s={},n=[],l=0;l<a.length;l++){var o=a[l],u=e.base?o[0]+e.base:o[0],m=s[u]||0,b="".concat(u," ").concat(m);s[u]=m+1;var h=t(b),c={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==h)r[h].references++,r[h].updater(c);else{var d=i(c,e);e.byIndex=l,r.splice(l,0,{identifier:b,updater:d,references:1})}n.push(b)}return n}function i(a,r){var t=r.domAPI(r);return t.update(a),function(r){if(r){if(r.css===a.css&&r.media===a.media&&r.sourceMap===a.sourceMap&&r.supports===a.supports&&r.layer===a.layer)return;t.update(a=r)}else t.remove()}}a.exports=function(a,i){var s=e(a=a||[],i=i||{});return function(a){a=a||[];for(var n=0;n<s.length;n++){var l=t(s[n]);r[l].references--}for(var o=e(a,i),u=0;u<s.length;u++){var m=t(s[u]);0===r[m].references&&(r[m].updater(),r.splice(m,1))}s=o}}},569:a=>{var r={};a.exports=function(a,t){var e=function(a){if(void 0===r[a]){var t=document.querySelector(a);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(a){t=null}r[a]=t}return r[a]}(a);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:a=>{a.exports=function(a){var r=document.createElement("style");return a.setAttributes(r,a.attributes),a.insert(r,a.options),r}},565:(a,r,t)=>{a.exports=function(a){var r=t.nc;r&&a.setAttribute("nonce",r)}},795:a=>{a.exports=function(a){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=a.insertStyleElement(a);return{update:function(t){!function(a,r,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,i&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),r.styleTagTransform(e,a,r.options)}(r,a,t)},remove:function(){!function(a){if(null===a.parentNode)return!1;a.parentNode.removeChild(a)}(r)}}}},589:a=>{a.exports=function(a,r){if(r.styleSheet)r.styleSheet.cssText=a;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(a))}}},372:(a,r,t)=>{a.exports=t.p+"5c0b25e4fd3c37eb2d7d.TTF"}},r={};function t(e){var i=r[e];if(void 0!==i)return i.exports;var s=r[e]={id:e,exports:{}};return a[e](s,s.exports,t),s.exports}t.m=a,t.n=a=>{var r=a&&a.__esModule?()=>a.default:()=>a;return t.d(r,{a:r}),r},t.d=(a,r)=>{for(var e in r)t.o(r,e)&&!t.o(a,e)&&Object.defineProperty(a,e,{enumerable:!0,get:r[e]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"==typeof window)return window}}(),t.o=(a,r)=>Object.prototype.hasOwnProperty.call(a,r),(()=>{var a;t.g.importScripts&&(a=t.g.location+"");var r=t.g.document;if(!a&&r&&(r.currentScript&&(a=r.currentScript.src),!a)){var e=r.getElementsByTagName("script");e.length&&(a=e[e.length-1].src)}if(!a)throw new Error("Automatic publicPath is not supported in this browser");a=a.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=a})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var a=t(379),r=t.n(a),e=t(795),i=t.n(e),s=t(569),n=t.n(s),l=t(565),o=t.n(l),u=t(216),m=t.n(u),b=t(589),h=t.n(b),c=t(756),d={};d.styleTagTransform=h(),d.setAttributes=o(),d.insert=n().bind(null,"head"),d.domAPI=i(),d.insertStyleElement=m(),r()(c.Z,d),c.Z&&c.Z.locals&&c.Z.locals;var y=t(434),T={};T.styleTagTransform=h(),T.setAttributes=o(),T.insert=n().bind(null,"head"),T.domAPI=i(),T.insertStyleElement=m(),r()(y.Z,T),y.Z&&y.Z.locals&&y.Z.locals;const p=[{artist:"10 CC",album:"Sheet Music\r"},{artist:"Adam F",album:"Colours\r"},{artist:"Ahmad Jamal",album:"Intervals\r"},{artist:"Ahmad Jamal",album:"Macanudo\r"},{artist:"Ahmad Jamal",album:"Stepping Out With a Dream\r"},{artist:"Ahmad Jamal Trio",album:"At The Pershing: But Not For Me\r"},{artist:'"Al Dimeola',album:" John McLaughlin"},{artist:"Al Green",album:"I'm Still In Love With You\r"},{artist:"Ambiance",album:"Tight & Tidy (Gida-Gida)\r"},{artist:"Ambiance",album:"Ebun\r"},{artist:"Aretha Franklin",album:"Live At The Filmore West\r"},{artist:"Art Blakey and The Jazz Messengers",album:"Art Blakey and The Jazz Messengers\r"},{artist:"Art Blakey's Big Band and Quintet",album:"Ain't Life Grand\r"},{artist:"Astrud Gilberto",album:"Look To The Rainbow\r"},{artist:"Aswad",album:"New Chapter\r"},{artist:"Atmosfear",album:"En Trance\r"},{artist:"Azambuja & Cia",album:"Azambuja & Cia\r"},{artist:"Azymuth",album:"Light As A Feather\r"},{artist:"Azymuth",album:"Cascades\r"},{artist:"Azymuth",album:"Rapid Transit\r"},{artist:"Azymuth",album:"Spectrum\r"},{artist:"Azymuth",album:"Outurbo\r"},{artist:"Azymuth",album:"Aurora\r"},{artist:"Azymuth",album:"Azymuth\r"},{artist:"Azymuth",album:"Flame\r"},{artist:"Azymuth",album:"Telecommunication\r"},{artist:"Azymuth",album:"Demos (1973-75) Vol.1\r"},{artist:"Azymuth",album:"Demos (1973-75) Vol.2\r"},{artist:"Azymuth",album:"Aguia Nao Coma Mosca\r"},{artist:"Azymuth",album:"Fenix\r"},{artist:"Banda Black Rio",album:"Gafieira Universal\r"},{artist:"Banda Black Rio",album:"Maria Fumaca\r"},{artist:"Bar-Keys",album:"Black Rock\r"},{artist:"Batida",album:"Batida\r"},{artist:"Beard Science ",album:"Full Hollow Ground Collection \r"},{artist:"Berry White",album:"Stone Gon'\r"},{artist:"Billie Holiday",album:"The Best of Billie Holiday\r"},{artist:"Billy Cobham",album:"Spectrum\r"},{artist:"Billy Cobham",album:"Inner Conflicts\r"},{artist:"Billy Cobham",album:"Life & Times\r"},{artist:"Billy Cobham",album:"A Funky Thide Of Sings\r"},{artist:"Billy Cobham - George Duke",album:'"""Live"" On Tour In Europe"\r'},{artist:"Black Sabbath",album:"Paranoid\r"},{artist:"Blackalicious",album:"Blazing Arrow\r"},{artist:"Bob James ",album:"Two\r"},{artist:"Bob James ",album:"Hands Down\r"},{artist:"Bob James ",album:"Three\r"},{artist:"Bob James ",album:"One\r"},{artist:"Bobbi Humphrey",album:"Black and Bluse\r"},{artist:"Bobbi Humphrey",album:"Fancy Dancer\r"},{artist:"Bobbi Humphrey",album:"Flute-In\r"},{artist:"Bobbi Humphrey",album:"Satin Doll\r"},{artist:"Bobbi Humphrey",album:"Tailor Made\r"},{artist:"Bon Jovi",album:"Slippery When Wet\r"},{artist:"Boy Katindig",album:"Midnight Lady\r"},{artist:"Caetano Veloso",album:" Bicho\r"},{artist:"Cal Tjader",album:"Plugs In - At the lighthouse\r"},{artist:"Cal Tjader",album:"Guarabe\r"},{artist:"Cal Tjader - Carmen McRae",album:"Heat Wave\r"},{artist:"Camel",album:"Camel\r"},{artist:"Camel",album:"The Snow Goose\r"},{artist:"Camel",album:"Mirage\r"},{artist:"Cannonball Adderley and Sergio mendes with The Bossa rio Sextet",album:"Cannonball Adderley and Sergio mendes with The Bossa rio Sextet\r"},{artist:"Cerrone ",album:"Supernatural\r"},{artist:"Cerrone ",album:"IV The Golden Touch\r"},{artist:"Cesar Mariano & Cia",album:"Sao Paulo - Brasil\r"},{artist:"Chaka Khan",album:"I Feel For You\r"},{artist:"Chalice",album:"Live AT Reggea Sunspalsh\r"},{artist:"Charles Mingus",album:"Mingus Moves\r"},{artist:"Chick Corea",album:"Light As A Feather\r"},{artist:"Chick Corea",album:"The Leprechaun\r"},{artist:"Chick Corea",album:"The Chick Corea Electric Band\r"},{artist:"Chick Corea ",album:"Return To Forever\r"},{artist:"Chick Webb And Ella Fitzgerald",album:"Ella Sings The Band 1936.1939\r"},{artist:"Cloud One",album:"Atmosphere Strut\r"},{artist:"Common",album:"Electric Circus\r"},{artist:"Common",album:"Electric Circus\r"},{artist:"Communards",album:"Communards\r"},{artist:"Cortex",album:"Troupeau Bleu\r"},{artist:"Cortex",album:"Pourquoi\r"},{artist:"Cortex",album:"I Heard a Sign\r"},{artist:"Crazy Cole and His Orchestra",album:"Drum Beat for Dancing Feet\r"},{artist:'"Crosby',album:" Stills"},{artist:"Curtis Mayfield",album:"Super Fly\r"},{artist:"Cypress Hill",album:"III - Temple Of Boom\r"},{artist:"Daft Punk",album:"Home Work\r"},{artist:"Daft Punk",album:"Discovery\r"},{artist:"Dam-Funk",album:"Toeachizown 3: Life\r"},{artist:"Dam-Funk",album:"Toeachizown 1: Latrik\r"},{artist:"Dam-Funk",album:"Toeachizown 4: Hood\r"},{artist:"Dave Grusin",album:"Mountain Dnce\r"},{artist:"Dave Matthews & Electric Birds",album:"Digital love\r"},{artist:"David Axelrod",album:"Songs Of Experience\r"},{artist:"David Matthews",album:"Dune\r"},{artist:"David Matthews with Whirlwind",album:"Shoogie Wanna Boogie\r"},{artist:"Deodato",album:"Prelude\r"},{artist:"Deodato",album:"Deodato 2\r"},{artist:"Deodato",album:"Very Together\r"},{artist:"Deodato",album:"Happy Hour\r"},{artist:"Deodato",album:"First Cuckoo\r"},{artist:"Dexter Wansel",album:"Life On Mars\r"},{artist:"Dexter Wansel",album:"Voyeger\r"},{artist:"Dire Straits",album:"Alchemy - Live\r"},{artist:"DJ Muggs",album:"The Soul Assassins (Chapter 1)\r"},{artist:"Dom Salvador e Abolicao",album:'"Som'},{artist:"Donald Byrd",album:"Stepping Into Tomorrow\r"},{artist:"Donald Byrd",album:"Places And Spaces\r"},{artist:"Donny Hathaway",album:"Extension Of A Man\r"},{artist:"Doom and Madlib",album:"Madvillain\r"},{artist:"Doris",album:"Did You Give The World Some Love Today Baby\r"},{artist:"Doug Carn",album:"Infant Eyes\r"},{artist:"Duke Ellington",album:"New Orleans Suite\r"},{artist:"Earth Wind & Fire",album:"Raise !\r"},{artist:"Earth Wind & Fire",album:"I AM\r"},{artist:"Earth Wind & Fire",album:"Earth Wind & Fire\r"},{artist:"Earth Wind & Fire",album:"Gratitude\r"},{artist:"Eddie Hazel",album:"Game Dames And Guitar Thangs\r"},{artist:"ELO",album:"Time\r"},{artist:"Elvis",album:"Aloha From Hawaii via Satellite\r"},{artist:"Eric Burdon And War",album:"The Black-Man's Burdon\r"},{artist:"Erikah Badu",album:"Baduizm\r"},{artist:"Fankadelic",album:"Cosmic Slop\r"},{artist:"Fankadelic",album:"Maggot Brain\r"},{artist:"Flora Purim",album:"Open Your Eyes You Can Fly\r"},{artist:"Flora Purim",album:"Butterfly Dreams\r"},{artist:"Flora Purim",album:"Stories To Tell\r"},{artist:"Frank Zappa The Mothers Of Inovation",album:"Overnight Sensation\r"},{artist:"Freddie Gibbs & Alchemist",album:"Alfredo\r"},{artist:"Freddie Gibbs & Madlib",album:"Bandana\r"},{artist:"Freddie Hubbard",album:"Super Blue\r"},{artist:"Freddie Mcgregor",album:"Big Ship\r"},{artist:"French Connection 88",album:"Rene' Maxi-Single\r"},{artist:"Funkapolitan",album:"Funkapolitan\r"},{artist:"G.R.E.S. Estação Primeira De Mangueira",album:"10 Anos de samba - Enrendo\r"},{artist:"Gal Costa",album:"Canta Caymmi\r"},{artist:"Gal Costa",album:"Caras & Bocas\r"},{artist:"Gal Costa",album:"India\r"},{artist:"Gemini",album:"The Music Hall\r"},{artist:"Gentle Giant",album:"Gentle Giant / Three Friends\r"},{artist:"Gentle Giant",album:"The Missing Piece\r"},{artist:"George Duke",album:"Liberated Fantasies\r"},{artist:"George Duke",album:"From Me To You\r"},{artist:"George Duke",album:"A Brazilian Love Affair\r"},{artist:"George Duke",album:"The Aura Will Prevail\r"},{artist:"George Duke",album:"Faces In Reflection\r"},{artist:"George Duke",album:'"I Love The Blues'},{artist:"George Duke",album:"Feel \r"},{artist:"George Duke",album:" George Duke - Pacific Jazz - Comp\r"},{artist:"George Duke",album:"The Inner Source\r"},{artist:"George Duke",album:"The Dream\r"},{artist:"Gershwin",album:"All The Works for Orchestra & for Piano & Orchestre\r"},{artist:"Gil Scott-Heron",album:"Pieces Of A Man\r"},{artist:"Gil Scott-Heron and Brian Jackson",album:"Briges\r"},{artist:"Giorgio",album:"Kinights In White Satin\r"},{artist:"Giorgio",album:"E=MC2\r"},{artist:"Grace Jones",album:"Living My Life\r"},{artist:"Grandmaster Flash Melle Mel and The Furious Five",album:"Grandmaster Flash Melle Mel and The Furious Five\r"},{artist:"Grazia",album:"Grazia\r"},{artist:"Guru",album:"Jazzmatazz\r"},{artist:"Harvey Mason",album:"Funk In A Mason Jar\r"},{artist:'"Henry ""Junjo"" Lawes"',album:"Big Showdown at King Tubby's 1980\r"},{artist:"Herbie Hancock",album:"Sunlight\r"},{artist:"Herbie Hancock",album:"Mr. Hands\r"},{artist:"Herbie Hancock",album:"Maiden Voyage\r"},{artist:"Herbie Hancock",album:"Thrust\r"},{artist:"Herbie Hancock",album:"Inventions And Diamantions\r"},{artist:"Herbie Hancock",album:"Blow-Up (The Original Sound Trak Album)\r"},{artist:"Herbie Hancock & Chick Corea",album:"An Evening With Herbie Hancock & Chick Corea In Concert\r"},{artist:"Herbie Mann",album:'"Hold On'},{artist:"Herbie Mann",album:"Super Mann\r"},{artist:"Herbie Mann & Fire Island",album:"Herbie Mann & Fire Island\r"},{artist:"Hidden Spheres",album:"Well Well\r"},{artist:"Hubert Laws",album:"The Chicago Theme\r"},{artist:"Hubert Laws",album:"Land Of Passion\r"},{artist:"Hubert Laws",album:"Say It With Silence\r"},{artist:"Hubert Laws",album:"Family\r"},{artist:"Idris Ackamoor & The Pyramids",album:"Tinoge Ye Ta'a Ba Pt.1 & 2\r"},{artist:"Idris Muhammad",album:"Turn This Mutha Out\r"},{artist:"Idris Muhammad",album:"Boogie To The Top\r"},{artist:"Imagination",album:"In The Heat Of The Night\r"},{artist:"Ipi 'n Tombia featuring Margaert Singana",album:"The Warrior\r"},{artist:"Isaac Hayas",album:"The Isaac Hayas Movenent\r"},{artist:"Isaac Hayas",album:"To Be Continued\r"},{artist:"Isaac Hayas",album:"Shaft\r"},{artist:"Isaac Hayas",album:"Juice Fruit (Disco Freak)\r"},{artist:"Isaac Hayas",album:"The Best of Isaac Hayas\r"},{artist:"Isaac Hayas",album:"Truck Turner\r"},{artist:"Isaac Hayas",album:"Hot Buttered Soul\r"},{artist:"J.B.'S Internationals",album:"Jam II Disco Fever\r"},{artist:"Jackson Five",album:"Looking Through The Window\r"},{artist:"Jackson Five",album:"Dancing Machine\r"},{artist:"Jaco Patorius",album:"Jaco Pastorius\r"},{artist:"Jaco Patorius",album:"Anthology The Warner Bros. Years\r"},{artist:"Jacques Brell",album:"A L'olympia\r"},{artist:"James Mason ",album:"Rhythm Of Life\r"},{artist:"Jameszoo",album:"Fool\r"},{artist:"Jamiroquai",album:"The Return Of The Space Cowboy\r"},{artist:"Jean Michel Jarre",album:"Oxygene\r"},{artist:"Jean Paul & Angelique",album:"Jean Paul & Angelique\r"},{artist:"Jeff Back",album:"Wired\r"},{artist:"Jethro Tull",album:"Living In the Past\r"},{artist:"Jimi Hendrix",album:"Band Of Gypsys\r"},{artist:"Jimi Hendrix",album:"Electric Ladyland\r"},{artist:"Joe Morello",album:"Another Step Forward\r"},{artist:"John Carroll Kirby",album:"Septet\r"},{artist:"John Coltrane",album:"Coltrane's Sound\r"},{artist:"John Lennon",album:"Imagine\r"},{artist:"Johnny Hammond",album:"Gambler's Life\r"},{artist:"Johnny Hammond",album:"Gears\r"},{artist:"Jose Roberto Bertrami",album:"Dreams Are Real\r"},{artist:"Kaidi Tatham",album:"In Search Of Hope\r"},{artist:"Kaidi Tatham",album:"An Insight To All Minds\r"},{artist:"Kathryn Moses",album:"Music In My Heart\r"},{artist:"Kaytranada",album:"99.90%\r"},{artist:"Kenny Graham's Afro-Cubists Volume One",album:"Mango Walk\r"},{artist:"King Crimson",album:"In The Cort Of The Crimson King\r"},{artist:"King Crimson",album:"Red\r"},{artist:"King Geedorah",album:"Take Me To Your Leader\r"},{artist:"Larry Levan",album:"Padlock\r"},{artist:"Lata Mangeshkar",album:"Bhajans From Films\r"},{artist:"Les McCann & Eddie Harris",album:"Swiss Movement\r"},{artist:"Level 42",album:"World Machine\r"},{artist:"Level 42",album:"The Erly Tapes July/Aug 1980\r"},{artist:"Level 42",album:"Level 42\r"},{artist:"Level 42",album:"Running In The Family\r"},{artist:"Lionel Hampton and His Orchestra",album:'"Lionel Hampton'},{artist:"Logg",album:"Logg\r"},{artist:"London Festival Band ",album:"A Tribute To Satchmo\r"},{artist:"Lone",album:"Reality Testing\r"},{artist:"Lone",album:"Lemurian\r"},{artist:"Lone",album:"Levitate\r"},{artist:"Mack Browne &The Brothers",album:"Shaft\r"},{artist:"Madlib",album:"Shades of Blue\r"},{artist:"Madonna",album:"I'm Breathless - Music From and Ispired by The Film DICK TRACY\r"},{artist:"Mahavishnu Orchestra",album:"Birds Of Fire\r"},{artist:"Makaya McCaraven",album:"Deciphering The Message\r"},{artist:"Mandrill",album:"Mandrill Is\r"},{artist:"Mandrill",album:"We Are On\r"},{artist:"Mano Dibango",album:"O Boso\r"},{artist:"Marcos Valle",album:"Previsao Do Tempo\r"},{artist:"Marcos Valle",album:"Marcos Valle\r"},{artist:"Marian Anderson",album:"Sings Spirituals\r"},{artist:"Martinho Da Villa",album:"Maravilha De Cenario\r"},{artist:"Masayoshi Takanaka",album:"The Rainbow Goblins\r"},{artist:"Masayoshi Takanaka",album:"Open All Summer\r"},{artist:"Massive Attack",album:"Mezzanine\r"},{artist:"Max Graef",album:"Rivers Of The Red Planet\r"},{artist:"Max Graef & Glenn Astro",album:'"""The Yard Work Simulator"""\r'},{artist:"Max Graef Band",album:"Dog\r"},{artist:"MF Doom",album:"MM Food\r"},{artist:"MF Doom",album:"Operation: Doomsday\r"},{artist:"Michael Jackson",album:"Off The Wall\r"},{artist:'"Mike Bloomfield',album:" Al Kooper"},{artist:"Miles Davis",album:"Bitches Brew\r"},{artist:"Miles Davis",album:"The Man With The Horn\r"},{artist:"Miriam Makeba ",album:"Makeba!\r"},{artist:"Mory Kante",album:"Ye Ke Ye Ke \r"},{artist:"Motor Bass",album:"Pansoul\r"},{artist:"Musical Youth",album:"The Youth Of Today\r"},{artist:"Musical Youth",album:"Different Style !\r"},{artist:"Naoya Matsuoka & Wesing",album:"Son\r"},{artist:"Nuyorican Soul",album:"Nuyorican Soul\r"},{artist:"NxWorries",album:"Link Up & Suede EP\r"},{artist:"Ohio Players",album:"Conntradiction\r"},{artist:"Oneness Of Juju",album:"Space Jungle Luv\r"},{artist:"Oneness Of Juju",album:"African Rhythms\r"},{artist:"Os Ritmistas Brasileiros Orchestra",album:"Batucada Fantastica Bossa Nova\r"},{artist:"Osibisa",album:"Osibisa\r"},{artist:"Ottawan",album:"D.I.S.C.O\r"},{artist:"Outkast",album:"Aquemini\r"},{artist:"Pat Metheny",album:"Bright Size Life\r"},{artist:"Pat Metheny Group",album:"Offranp\r"},{artist:"Pat Metheny Group",album:"Letter From Home\r"},{artist:"Pat Metheny Group",album:"Pat Metheny Group\r"},{artist:"Pat Metheny Group",album:"First Circle\r"},{artist:"Paul Horn",album:"Visions\r"},{artist:"Paul Horn",album:"Altura Do Sol\r"},{artist:"Paul Simom",album:"Graceland\r"},{artist:"Paul Simom",album:"There Goes Rhymin' Simon\r"},{artist:"Perez Prado",album:"Perez Prado And His Orchestra\r"},{artist:"Peter Green",album:"In The Skies\r"},{artist:"Pink Floyd",album:"The Dark Side Of The Moon\r"},{artist:"Quasimoto",album:"The Unseen\r"},{artist:"Quasimoto",album:"The Further Advantures of Lord Quas\r"},{artist:"Queens Of The Stone Age",album:"Songs For The Deaf\r"},{artist:"Quincy Jones",album:"The Dude\r"},{artist:"Quincy Jones",album:"Back On the Block\r"},{artist:"Quincy Jones",album:"Ndeda\r"},{artist:"RAMP",album:"Come Into Knowledge\r"},{artist:"RAMP",album:"Come Into Knowledge\r"},{artist:"Ramsey Lewis",album:"Tequila Mockingbird\r"},{artist:"Ramsey Lewis",album:"Sun Goddess\r"},{artist:"Ratgrave",album:"Ratgrave\r"},{artist:"Red Hot Chilly Peppers",album:"Blood Suger Sex Magik\r"},{artist:"Red Hot Chilly Peppers",album:"One Hot Minute\r"},{artist:"Return To Forever featuring Chick Corea",album:"Hymn Of The Seventh Galaxy\r"},{artist:"Return To Forever featuring Chick Corea",album:"No Mystery\r"},{artist:"Roberta Flack",album:"Killing Me Softly\r"},{artist:"Roberta Flack",album:"Feel Like Makin' Love\r"},{artist:"Ronnie Foster",album:"Deilght\r"},{artist:"Ronnie Foster ",album:"Two Headed Freap\r"},{artist:"Ronnie Laws",album:"Fever\r"},{artist:"Ronnie Laws",album:"Friends & Strangers\r"},{artist:"Ronnie Laws",album:"Pressure Sensitive\r"},{artist:"Roy Ayers",album:"Everybody Loves The Sunshine\r"},{artist:"Roy Ayers",album:"Ubiquity\r"},{artist:"Roy Ayers",album:"No Stranger To Love\r"},{artist:"Roy Ayers",album:"Lets Do It\r"},{artist:"Roy Ayers",album:"Silver Vibrations\r"},{artist:"Roy Ayers",album:"You Might Be Surprised\r"},{artist:"Roy Ayers",album:"In The Dark\r"},{artist:"Roy Ayers Present Ubiquity",album:"Starbooty\r"},{artist:"Roy Haynes",album:"Thank You Thank You\r"},{artist:"Rufus Featuring Chaka Khan",album:"Ask Rufus\r"},{artist:"Run DMC",album:"Tougher Then Leather\r"},{artist:"Ryuichi Sakamoto",album:"Tousand Knives Of Ryuichi Sakamoto\r"},{artist:"Santana",album:"Caravanserai\r"},{artist:"Santana",album:"Moonflower\r"},{artist:"Santana",album:"III\r"},{artist:"Santana",album:"Welcome\r"},{artist:"Sargentelli",album:"Oba Oba\r"},{artist:"Scientist",album:"Introducing Scientist - The Best Dub Album In The World…\r"},{artist:"Seanh Presents Sadevillian",album:"The…Mixtape\r"},{artist:"Sergio Mendes & Brazil '66",album:"Sergio Mendes & Brazil '66\r"},{artist:"Sergio Mendes & The New Brazil '77",album:"Sergio Mendes & The New Brazil '77\r"},{artist:"Shalosh",album:"Onwards And Upwards\r"},{artist:"Shigharu Mukai",album:"Margarita\r"},{artist:"Shirley Bassey",album:"The Shirley Bassey Singles Album\r"},{artist:"Shirley Bassey",album:"Live At Carnegie Hall\r"},{artist:"Sister Sledge",album:"We Are Family\r"},{artist:"Sly And The Family Stone",album:"Fresh\r"},{artist:"Soft Machine",album:"Land Of Cockayne\r"},{artist:"Soft Machine",album:"Seven\r"},{artist:"Sonny Rollins",album:"Sonny Rollins In Japan\r"},{artist:"Spyro Gyra",album:"Morning Dance\r"},{artist:"Spyro Gyra",album:"Catching The Sun\r"},{artist:"Spyro Gyra",album:"Spyro Gyra\r"},{artist:"Stanley Clarke",album:"I Wanna Play For You\r"},{artist:"Stanley Clarke",album:"Stanley Clarke\r"},{artist:"Stanley Jordan",album:"Cornucopia\r"},{artist:"Steely Dan",album:"Aja\r"},{artist:"Steely Dan",album:"The Royal Scam\r"},{artist:"Steely Dan",album:"Pretzel Logic\r"},{artist:"Steely Dan",album:"Can't Buy A Thrill\r"},{artist:"Stevie Wonder",album:"Songs In The Key Of Life\r"},{artist:"Stevie Wonder",album:"Innwervisions\r"},{artist:"Stevie Wonder",album:"Hotter Than July\r"},{artist:"Stevie Wonder",album:"Talking Book\r"},{artist:"Stevie Wonder",album:"Music Of My Mind\r"},{artist:"Sunbear",album:"Sunbear\r"},{artist:"Sylvia Striplin",album:"Give Me Your Love\r"},{artist:"Tame Impala",album:"Innerspeaker\r"},{artist:"Taylor Mcferrin",album:"Early Riser\r"},{artist:"Tears For Fears",album:"The Seeds Of Love\r"},{artist:"The Atlanta Disco Band",album:"Bad Luck\r"},{artist:"The Baragwanath Hospital Choir",album:"Live At The Indian Ocean Arts Festival \r"},{artist:"The Beach Boys",album:"Pet Sound\r"},{artist:"The Beatles",album:"The Beatles Ballads\r"},{artist:"The Blackbyrds",album:"Flying Start\r"},{artist:"The Branford Marsalis Quartet Feat Terence Blanchard",album:"Music From a Spike Lee joint Mo' Better Blues\r"},{artist:"The Brothers Johnson",album:"Look Out For #1 (Buscando EL No. 1)\r"},{artist:"The Cal Tjadr Sextet",album:"A Night At The Blackhawk\r"},{artist:"The Dave Brubeck Quartet",album:"Tiime Out\r"},{artist:"The Gaslamp Killer Experience",album:"Live In Los Angeles\r"},{artist:"The Golden Gate Quartet",album:"Greatest Spirituals\r"},{artist:"The Headhunters",album:"Survival Of The Fittest\r"},{artist:"The Jazz Workshop",album:"Mezare Israel Yekabzenu\r"},{artist:"The Modern Jazz Quartet",album:"Blues On Bach\r"},{artist:"The Mystery Kindaichi Band",album:"The Adventuress Of Kindaichi Kosuke\r"},{artist:"The Platters",album:"Encore Of Golden Hits\r"},{artist:"The Ragtimers",album:"Scott Joplin Music Played By The Ragtimers\r"},{artist:"The Simpsons",album:"Do The Bartman\r"},{artist:"The Staple Singers & Curtis Mayfield",album:'"""Lets Do It Again"" Soundtrack"\r'},{artist:"The Trammps",album:"Where The Happy People Go\r"},{artist:"The Undisputed Truth",album:"The Undisputed Truth\r"},{artist:"Theo Parrish",album:"Theo Parrish Black Jazz Signature\r"},{artist:"Thundercat",album:"The Golden Age Of Apocalypse\r"},{artist:"Thundercat",album:"The Beyound / Where The Giant Roam\r"},{artist:"Thundercat",album:"Drunk\r"},{artist:"Thundercat",album:"It Is What It Is\r"},{artist:"Tito Puente and His Latin Esemble",album:"Sensacion\r"},{artist:"Toad",album:"Tomorrow Blue\r"},{artist:"Toad",album:"Toad\r"},{artist:"Tomita",album:"Snowflakes Are Dancing\r"},{artist:"Tsvia Abarbanel",album:"Eastern Soul\r"},{artist:"Us3",album:"Hand On The Torch\r"},{artist:"VA",album:"Atlantic Jazz Fusion\r"},{artist:"VA",album:" יאעללה ! - Soul Messages From Dimona\r"},{artist:"Various",album:"Saturday Night Fever (The Original Movie Sound Track)\r"},{artist:"Various",album:"Black Rio (Brazil Soul Power 1971-1980)\r"},{artist:"Virtuoses Diabate",album:"La Nouvelle Mariee\r"},{artist:"Weather Report",album:"Domino Theory\r"},{artist:"Weather Report",album:"Heavy Weather\r"},{artist:"Weather Report",album:"Tale Spinnin\r"},{artist:"Weather Report",album:"Black Market\r"},{artist:"Wes Montgomery",album:"While We're Young\r"},{artist:"Wham!",album:"The Final\r"},{artist:"Willie Hutch",album:"Foxy Brown\r"},{artist:"Wynton Marsalis",album:"Hot House Flowers\r"},{artist:"Yellowjackts",album:"Yellowjackts\r"},{artist:"Yes",album:"Fragile\r"},{artist:"Yes",album:"Tales From Topographic Oceans\r"},{artist:"Yussef Kamaal",album:"Black Focus\r"},{artist:"אגדת עוץ לי גוץ לי / בת המלך והצפרדע",album:"אגדת עוץ לי גוץ לי / בת המלך והצפרדע\r"},{artist:"אגדת קוקית השעון",album:"אגדת קוקית השעון\r"},{artist:"אטרף",album:"האלבום הראשון\r"},{artist:"אריק איינשטיין",album:"משירי סשה ארגוב\r"},{artist:"אריק איינשטיין אבנר קנר",album:"ארץ ישראל הישנה והטובה חלק ג'\r"},{artist:"אריק איינשטיין שלום חנוך",album:"בהופעה משותפת\r"},{artist:"אריק לביא",album:'"מצה""ל באהבה"\r'},{artist:"ארץ טרופית יפה",album:"ארץ טרופית יפה\r"},{artist:"דני סנדרסון ",album:"חכם על קטנים\r"},{artist:"הגשש החיוור",album:"עובדים עלינו עבודה עברית - חלק ב'\r"},{artist:"החלונות הגבוהים",album:"The High Windows\r"},{artist:"הכבש השישה-עשר",album:"הכבש השישה-עשר\r"},{artist:"להקת גזוז",album:"Gazoz\r"},{artist:"מיץ פטל",album:"מיץ פטל\r"},{artist:"משינה",album:"Machina\r"},{artist:"מתי כספי",album:"שירים במיץ עגבניות\r"},{artist:"פטר והזאב",album:"פטר והזאב\r"},{artist:"שלמה גרוניך ",album:"צמר גפן מתוק\r"},{artist:"ששי קשת",album:"Sassi Keshet\r"},{artist:"ששת",album:"Sheshet"}];var g=document.querySelector("#start"),f=document.querySelector("#album"),S=document.querySelector("#artist"),M=!1,v=null;g.onclick=function(){if(M=!M){g.innerHTML="STOP";var a=p.length;v=setInterval((function(){var r=Math.floor(Math.random()*a);f.innerHTML=p[r].album,S.innerHTML=p[r].artist}),100)}else clearInterval(v),g.innerHTML="START"}})()})();