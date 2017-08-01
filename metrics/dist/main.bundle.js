webpackJsonp([1],{100:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ACTION_PREFIX="app/",a.LAYERS=[{id:0,name:"Ecology"},{id:1,name:"Economics"},{id:2,name:"Community"},{id:3,name:"Ecologically Sustainable Fisheries",parent:0},{id:4,name:"Harvest",parent:1},{id:5,name:"Harvest Assets",parent:1},{id:6,name:"Risk",parent:1},{id:7,name:"Trade",parent:1},{id:8,name:"Product Form",parent:1},{id:101,name:"Managerial Returns",parent:2},{id:9,name:"Labor Returns",parent:2},{id:10,name:"Health & Sanitation",parent:2},{id:11,name:"Community Services",parent:2},{id:12,name:"Local Ownership",parent:2},{id:13,name:"Local Labor",parent:2},{id:14,name:"Career",parent:2},{id:200,name:"Percentage of Stocks Overfished",parent:3},{id:15,name:"Degree of Overfishing",parent:3},{id:16,name:"Stock Declining, Stable, or Rebuilding",parent:3},{id:17,name:"Regulatory Mortality",parent:3},{id:18,name:"Selectivity",parent:3},{id:19,name:"Illegal, Unregulated or Unreported Landings",parent:3},{id:20,name:"Status of Critical Habitat",parent:3},{id:21,name:"Proportion of Harvest with 3rd Party Certification",parent:3},{id:22,name:"Landings Level",parent:4},{id:23,name:"Excess Capacity",parent:4},{id:24,name:"Season Length",parent:4},{id:25,name:"Ex-vessel Price Compared to Historic High",parent:4},{id:26,name:"Ratio of Asset Value to Gross Earnings",parent:5},{id:27,name:"Total Revenue Compared to Historic High",parent:5},{id:28,name:"Asset Value Compared to Historic High",parent:5},{id:29,name:"Borrowing Rate Compared to Risk-free Rate",parent:5},{id:30,name:"Source of Capital ",parent:5},{id:31,name:"Functionality of Harvest Capital",parent:5},{id:32,name:"Annual Total Revenue Volatility",parent:6},{id:33,name:"Annual Landings Volatility",parent:6},{id:34,name:"Intra-annual Landings Volatility",parent:6},{id:35,name:"Annual Price Volatility",parent:6},{id:36,name:"Intra-annual Price Volatility",parent:6},{id:37,name:"Spatial Price Volatility",parent:6},{id:38,name:"Contestability & Legal Challenges",parent:6},{id:39,name:"International Trade",parent:7},{id:40,name:"Final Market Wealth",parent:7},{id:41,name:"Wholesale Price Compared to Similar Products",parent:7},{id:42,name:"Capacity of Firms to Export to the US & EU",parent:7},{id:43,name:"Final Market Use",parent:8},{id:44,name:"Ex-vessel to Wholesale Marketing Margins",parent:8},{id:45,name:"Processing Yield",parent:8},{id:46,name:"Shrink",parent:8},{id:47,name:"Capacity Utilization Rate",parent:8},{id:48,name:"Product Improvement",parent:8},{id:49,name:"Borrowing Rate Compared to Risk-free Rate",parent:100},{id:50,name:"Source of Capitial",parent:100},{id:51,name:"Age of Facilities",parent:100},{id:52,name:"Earnings Compared to Regional Average Earnings",parent:101},{id:53,name:"Fisheries Wages Compared to Non-fishery Wages",parent:101},{id:54,name:"Social Standing of Boat Owners and Permit Holders",parent:101},{id:55,name:"Earnings Compared to Regional Average Earnings",parent:101},{id:56,name:"Manager Wages Compared to Non-fishery Wages",parent:101},{id:57,name:"Social Standing of Processing Managers",parent:101},{id:58,name:"Earnings Compared to Regional Average Earnings",parent:9},{id:59,name:"Fishery Wages Compared to Non-fishery Wages",parent:9},{id:60,name:"Social Standing of Crew",parent:9},{id:61,name:"Earnings Compared to Regional Average Earnings",parent:9},{id:62,name:"Worker Wages Compared to Non-fishery Wages",parent:9},{id:63,name:"Social Standing of Processing Workers",parent:9},{id:64,name:"Harvest Safety",parent:10},{id:65,name:"Owner Access to Health Care",parent:10},{id:66,name:"Crew Access to Health Care",parent:10},{id:67,name:"Sanitation",parent:10},{id:68,name:"Processing Owners Access to Health Care",parent:10},{id:69,name:"Processing Workers Access to Health Care",parent:10},{id:70,name:"Contestability & Legal Challenges",parent:11},{id:72,name:"Owner Education Access",parent:11},{id:73,name:"Crew Education Access",parent:11},{id:74,name:"Regional Support Businesses",parent:11},{id:75,name:"Processing Owners Education Access",parent:11},{id:76,name:"Processing Workers Education Access",parent:11},{id:77,name:"Proportion of Nonresident Employment",parent:12},{id:78,name:"Nonresident Ownership of Processng Capacity",parent:12},{id:79,name:"Crew Proportion of Nonresident Employment",parent:13},{id:80,name:"Processing Workers Proportion of Nonresident Employment",parent:13},{id:81,name:"Crew Experience",parent:14},{id:82,name:"Age Stucture of Harvesters",parent:14},{id:83,name:"Processing Workers Worker Experience",parent:14},{id:100,name:"Post-Harvest Asset Performance",parent:1}]},154:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.getIsOpen=a.toggleIsOpen=void 0;var t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},r=n(588),i=n(100),o=a.toggleIsOpen=(0,r.createAction)(i.ACTION_PREFIX+"SET_IS_OPEN");a.default=(0,r.handleAction)(o,function(e,a){var n=t({},e);return void 0===e[a.payload]?n[a.payload]=!0:delete n[a.payload],n},{}),a.getIsOpen=function(e,a){return void 0!==e.isOpen[a]}},243:function(e,a,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var r=n(69),i=t(r),o=n(232),d=t(o),s=n(230),l=t(s),p=n(43),m=t(p),u=n(100),c=n(248),f=t(c),g=n(434),y=t(g),v=(0,l.default)(d.default,(0,i.default)("App"));a.default=v(function(){return m.default.createElement("ul",{id:y.default.root},m.default.createElement(f.default,{id:0,name:u.LAYERS[0].name,depth:0}),m.default.createElement(f.default,{id:1,name:u.LAYERS[1].name,depth:0}),m.default.createElement(f.default,{id:2,name:u.LAYERS[2].name,depth:0}))})},244:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n(152),r=n(249),i=function(e){return e&&e.__esModule?e:{default:e}}(r);a.default=function(){var e=[];return(0,t.createStore)(i.default,(0,t.compose)(t.applyMiddleware.apply(void 0,e),function(e){return e}))}},246:function(e,a){},248:function(e,a,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var r=n(582),i=t(r),o=n(578),d=t(o),s=n(69),l=t(s),p=n(232),m=t(p),u=n(230),c=t(u),f=n(43),g=t(f),y=n(153),v=n(133),E=n(154),h=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a.default=e,a}(E),C=n(100),P=n(433),_=t(P),O=(0,c.default)((0,y.connect)(function(e,a){var n=a.id;return{isOpen:h.getIsOpen(e,n)}},{toggleIsOpen:h.toggleIsOpen}),m.default,(0,i.default)(function(e){var a=e.id;return{children:C.LAYERS.filter(function(e){return e.parent===a})}}),(0,d.default)({children:v.PropTypes.array.isRequired,depth:v.PropTypes.number.isRequired,id:v.PropTypes.number.isRequired,isOpen:v.PropTypes.bool.isRequired,name:v.PropTypes.string.isRequired,toggleIsOpen:v.PropTypes.func.isRequired}),(0,l.default)("Layer")),S=O(function(e){var a=e.children,n=e.depth,t=e.id,r=e.isOpen,i=e.name,o=e.toggleIsOpen;return g.default.createElement("li",{className:_.default.root+" "+(0===n?_.default.rootZero:"")},g.default.createElement("div",{className:_.default.rootName+" "+_.default["rootName"+n.toString()],onClick:function(){0!==a.length&&o(t)}},g.default.createElement("div",{className:_.default.rootNameText},i),0!==a.length&&g.default.createElement("div",{className:_.default.rootNameToggle+" "+(r?_.default.rootNameToggleOpen:_.default.rootNameToggleClosed)})),0!==a.length&&r&&g.default.createElement("ul",{className:_.default.rootChildren},a.map(function(e){return g.default.createElement(S,{key:e.id,id:e.id,name:e.name,depth:n+1})})))});a.default=S},249:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n(152),r=n(154),i=function(e){return e&&e.__esModule?e:{default:e}}(r);a.default=(0,t.combineReducers)({isOpen:i.default})},250:function(e,a,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}n(245);var r=n(43),i=t(r),o=n(247),d=n(153),s=n(244),l=t(s),p=n(243),m=t(p);n(246);var u=(0,l.default)();(0,o.render)(i.default.createElement(d.Provider,{store:u},i.default.createElement(m.default,null)),document.getElementById("root"))},433:function(e,a){e.exports={root:"_2_Efc_brrzpyOWemO9brDo",rootZero:"_1zh5gRpdo_qq5NhjTSMz9H",rootName:"_1jQZTYcS9sINr8H2BRe4dd",rootNameText:"PTEC25a0JxvOEDbJMie2v",rootNameToggle:"_22l9jg3KkjiKsxJgw0KCt7",rootNameToggleOpen:"_1Kp7qThVsY-D9nt7UOFBQD",rootNameToggleClosed:"_2ngmTA7eRMb-xHytt17IQl",rootName0:"_2urnK6YvSr0X6ftGIk2z_p",rootName1:"_3YBx8Wsa9a5NEsnS5V9Hmu",rootName2:"_2_0QB7cNkpAEPdHIlOxBBN",rootChildren:"_3K_7Lt6tahA8FZWD4u_9WL"}},434:function(e,a){e.exports={root:"_1aOS9Frm6uqYCwQ6XjEoxh"}}},[250]);
//# sourceMappingURL=main.bundle.js.map