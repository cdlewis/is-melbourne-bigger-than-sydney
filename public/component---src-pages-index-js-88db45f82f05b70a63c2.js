(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{189:function(t,e,n){"use strict";n.r(e);var a=n(190),i=n(9),L=n(0),r=n.n(L),o=Object(a.a)("div",{target:"e1qsw1o60"})({name:"qa302v",styles:'font-family:"Montserrat",sans-serif;display:flex;justify-content:center;margin:40px 50px;'}),u=Object(a.a)("main",{target:"e1qsw1o61"})({name:"12h7p4q",styles:"width:1000px;max-width:100%;"}),l=function(t){var e=t.children;return Object(i.b)(o,null,Object(i.b)(u,null,e))},j=(n(195),n(196),n(90),n(43),n(201)),M=n.n(j),s=n(204),c={red:"#f67019",blue:"#5da2d5"},y=(n(65),n(42),n(205),function(t,e,n){return t+n*(e-t)}),b=function(t){return[t.x-25,t.y+10]},w=function(t){return[t.x-30,t.y+52+20]};var d=n(207),x=n.n(d);function T(t){for(var e=s.projections[t],n=e[0],a=e[1],i=s.historicalLabels.map(function(t){return null}).concat(a),L=s.historicalLabels.map(function(t){return null}).concat(n),r=0,o=0;o<a.length;o++)if(a[o]>=n[o]){r=s.historicalLabels.length+o;break}return[L,i,r]}var g=s.historicalLabels.concat(s.projectionLabels),N=T("B"),p=N[0],C=N[1],O=N[2],f={type:"line",data:{labels:g,datasets:[{label:"Melbourne",backgroundColor:"transparent",borderColor:c.blue,data:s.melbourneHistorical,pointBorderColor:"transparent"},{label:"Melbourne (Projected)",backgroundColor:"transparent",borderColor:c.blue,data:C,pointBorderColor:"transparent",borderDash:[10,5]},{label:"Sydney",backgroundColor:"transparent",borderColor:c.red,data:s.sydneyHistorical,pointBorderColor:"transparent"},{label:"Sydney (Projected)",backgroundColor:"transparent",borderColor:c.red,data:p,pointBorderColor:"transparent",borderDash:[10,5]}]},options:{legend:{display:!1,position:"left",labels:{generateLabels:function(){return[{text:"Melbourne",index:0,fillStyle:c.blue},{text:"Sydney",index:1,fillStyle:c.red}]}}},intersectionPoint:{datasetIndex:1,dataIndex:O,dataLabel:g[O]},tooltips:{enabled:!0,mode:"index",position:"nearest",intersect:!1,callbacks:{label:function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n&&(n=n.replace(/ \(Projected\)/,"")+": "),n+=t.yLabel.toLocaleString(),n}}},scales:{xAxes:[{display:!0,ticks:{maxTicksLimit:10},gridLines:{display:!1}}],yAxes:[{gridLines:{display:!1},scaleLabel:{display:!0,labelString:"Population (millions)"},ticks:{max:14e6,callback:function(t,e,n){return t/1e3/1e3}}}]}}},S=function(t){var e,n,a=t.projection,r=L.useRef(),o=L.useRef(),u=L.useRef();return e=M.a,n=o,Object(L.useEffect)(function(){if(e){var t=null,a=null,i=null,L=null,r=null,o=null,u=null,l=null;e.defaults.global.defaultFontFamily="'Montserrat', sans-serif",e.plugins.register({afterDraw:function(e,j){var M=e.config.options.intersectionPoint,s=e.chart.ctx;M&&n.current&&e.data.datasets.forEach(function(e,c){for(var d=0;d<e.data.length;d++)if(c===M.datasetIndex&&d===M.dataIndex){var x=e._meta[Object.keys(e._meta)[0]].data[d]._model,T=b(x),g=T[0],N=T[1],p=w(x),C=p[0],O=p[1];1!==j&&null!==t||(t=g,a=N,r=C,o=O),g!==i&&(t=i,a=L,r=u,o=l,i=g,L=N,u=C,l=O),g!==t||N!==a?s.drawImage(n.current,y(t,g,j),y(a,N,j),38,52):s.drawImage(n.current,g,N,38,52),s.fillStyle="black",s.font="24px Permanent Marker",s.textAlign="right",C!==r||O!==o?s.fillText(M.dataLabel,y(r,C,j),y(o,O,j)):s.fillText(M.dataLabel,C,O)}})}})}},[]),L.useEffect(function(){r.current&&(!function(t,e){var n=T(e),a=n[0],i=n[1],L=n[2],r=t.data.datasets,o=Array.isArray(r),u=0;for(r=o?r:r[Symbol.iterator]();;){var l;if(o){if(u>=r.length)break;l=r[u++]}else{if((u=r.next()).done)break;l=u.value}var j=l;"Sydney (Projected)"===j.label?j.data=a:"Melbourne (Projected)"===j.label&&(j.data=i)}t.options.intersectionPoint.dataIndex=L,t.options.intersectionPoint.dataLabel=g[L]}(f,a),u.current||(u.current=new M.a(r.current,f)),u.current.update())},[a]),Object(i.b)(L.Fragment,null,Object(i.b)("canvas",{ref:r}),Object(i.b)("img",{src:x.a,ref:o,style:{display:"none"},alt:""}))},m=Object(a.a)("div",{target:"e1yacyry0"})({name:"mfbegv",styles:"position:absolute;top:6px;left:76px;"}),E=Object(a.a)("div",{target:"e1yacyry1"})({name:"83483n",styles:"font-size:12px;color:#6f6f6f;margin-bottom:6px;display:flex;align-items:center;"}),h=Object(a.a)("div",{target:"e1yacyry2"})("width:40px;height:14px;margin-right:8px;background-color:",function(t){return t.colour},";");function D(){return Object(i.b)(m,null,Object(i.b)(E,null,Object(i.b)(h,{colour:c.blue}),"Melbourne"),Object(i.b)(E,null,Object(i.b)(h,{colour:c.red}),"Sydney"))}var I=Object(a.a)("form",{target:"ej0gbvz0"})({name:"um18c7",styles:"display:flex;margin:40px auto;"}),z=Object(a.a)("input",{target:"ej0gbvz1"})({name:"1k0p0y1",styles:"display:none;:checked + label{background-color:#fecd60;box-sizing:content-box;}"}),k=Object(a.a)("label",{target:"ej0gbvz2"})({name:"1f25yjg",styles:"display:flex;justify-content:center;max-width:200px;flex-direction:column;margin-right:50px;padding:10px;cursor:pointer;"}),A=Object(a.a)("div",{target:"ej0gbvz3"})({name:"lwjl83",styles:"font-size:40px;text-align:center;"}),Y=Object(a.a)("div",{target:"ej0gbvz4"})({name:"1engoik",styles:"font-size:14px;font-weight:bold;text-align:center;"}),v=Object(a.a)("div",{target:"ej0gbvz5"})({name:"1301shh",styles:"margin-top:16px;font-size:14px;text-align:center;"});function Q(t){var e=t.projection,n=t.setProjection;return Object(i.b)(r.a.Fragment,null,Object(i.b)("h2",null,"What if..."),Object(i.b)("p",null,"This graph is a illustrates what population growth would look like if current trends in births, life expectancy, and migration hold. It is one of"," ",Object(i.b)("a",{href:"http://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/3222.0Main+Features12017%20(base)%20-%202066?OpenDocument"},"72 projections")," ","created by the ABS."),Object(i.b)(I,null,Object(i.b)(z,{type:"radio",onChange:function(){return n("A")},name:"projection",value:"A",id:"optionA",checked:"A"===e}),Object(i.b)(k,{for:"optionA"},Object(i.b)(A,null,Object(i.b)("span",{role:"img","aria-label":"rocket emoji"},"🚀")),Object(i.b)(Y,null,"Higher Growth"),Object(i.b)(v,null,"A more optimistic forecast, which assumes more favourable growth factors")),Object(i.b)(z,{type:"radio",onChange:function(){return n("B")},name:"projection",value:"B",id:"optionB",checked:"B"===e}),Object(i.b)(k,{for:"optionB"},Object(i.b)(A,null,Object(i.b)("span",{role:"img","aria-label":"shrug emoji"},"🤷")),Object(i.b)(Y,null,"Current Growth"),Object(i.b)(v,null,"A more optimistic forecast, which assumes more favourable growth factors")),Object(i.b)(z,{type:"radio",onChange:function(){return n("C")},name:"projection",value:"C",id:"optionC",checked:"C"===e}),Object(i.b)(k,{for:"optionC"},Object(i.b)(A,null,Object(i.b)("span",{role:"img","aria-label":"turtle emoji"},"🐢")),Object(i.b)(Y,null,"Slower Growth"),Object(i.b)(v,null,"A more optimistic forecast, which assumes more favourable growth factors"))))}var U=n(208),W=n.n(U);var B=function(){return Object(i.b)(W.a,null,Object(i.b)("title",null,"Is Melbourne bigger than Sydney?"))},P=Object(a.a)("span",{target:"e12h3s7g0"})({name:"pdhsr0",styles:"color:#f67019;"}),H=Object(a.a)("h1",{target:"e12h3s7g1"})({name:"byz5ah",styles:"margin-top:0px;margin-bottom:24px;"}),Z=Object(a.a)("p",{target:"e12h3s7g2"})({name:"1os3lpb",styles:"font-size:16px;line-height:24px;"}),J=Object(a.a)("div",{target:"e12h3s7g3"})({name:"1xem9sr",styles:"position:relative;margin-top:24px;margin-left:-26px;"});e.default=function(){var t=r.a.useState("B"),e=t[0],n=t[1];return Object(i.b)(l,null,Object(i.b)(B,null),Object(i.b)(H,null,"Is Melbourne bigger than Sydney yet? ",Object(i.b)(P,null,"No")),Object(i.b)(Z,null,"We all know Melbourne is better than Sydney. Population trends also reflect this fact. Within the next twenty years Melbourne is projected to overtake Sydney and become Australia's biggest/best city"," ",Object(i.b)("span",{role:"img","aria-label":"party emoji"},"🎉")),Object(i.b)(J,null,Object(i.b)(D,null),Object(i.b)(S,{projection:e})),Object(i.b)(Q,{projection:e,setProjection:n}))}},204:function(t,e){t.exports={historicalLabels:[1901,1906,1911,1916,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],projectionLabels:[2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,2043,2044,2045,2046,2047,2048,2049,2050,2051,2052,2053,2054,2055,2056,2057,2058,2059,2060,2061,2062,2063,2064,2065,2066],sydneyHistorical:[496990,559800,656800,764600,885e3,912750,934540,952620,974540,996100,1019860,1044770,1066400,1176900,1190590,1200830,1213880,1237130,1241900,1245590,1251150,1256500,1263220,1274930,1294080,1331290,1363010,1402790,1433e3,1456350,1475150,1489620,1503740,1530060,1557220,1574880,1579790,1576480,1863161,1906340,1949400,1996010,2043200,2085790,2132680,2303807,2353280,2397620,2441570,2491320,2542207,2583650,2630690,2690580,2751830,3015900,3053900,3079600,3108500,3129e3,3143800,3168100,3197700,3226800,3257500,3279539,3319302,3351105,3385017,3424594,3471489,3526166,3587999,3621273,3642763,3672914,3708310,3728426,3758844,3802786,3856646,3905123,3945098,3991974,4041730,4102580,4135637,4162593,4184763,4217563,4256161,4325525,4409562,4492380,4555516,4608949,4677196,4757364,4841349,4930189,5024923],melbourneHistorical:[501580,530660,600160,695640,763e3,800520,831060,861760,889720,917080,945500,971e3,990650,1006e3,999650,995600,993800,995800,1e6,1008300,1016500,1024300,1035600,1050700,1083e3,1114900,1143900,1156600,1168900,1180200,1189800,1228300,1247800,1272300,1302200,1330800,1359100,1388800,1524111,1575300,1629400,1677100,1726100,1777700,1831100,1984936,2029240,2077560,2130980,2180800,2230793,2283e3,2331e3,2389700,2447600,2606900,2651600,2686400,2722400,2746200,2764100,2782600,2800700,2816300,2835500,2857907,2887744,2916524,2942787,2970627,2996733,3035229,3075917,3121026,3163590,3194707,3217776,3231603,3243516,3268881,3304912,3336088,3368966,3407286,3450077,3500249,3545579,3594031,3641951,3697372,3760760,3841760,3931438,4031787,4105857,4169366,4265843,4370067,4476030,4586012,4714387],projections:{A:[[5132355,5250815,5370562,5491302,5612150,5732931,5852916,5971957,6089646,6206158,6321341,6437595,6554391,6671617,6789178,6906958,7024983,7143167,7261495,7379976,7498729,7617806,7737229,7857007,7977185,8097790,8218902,8340541,8462768,8585607,8709120,8833377,8958441,9084364,9211215,9339072,9468004,9598072,9729348,9861829,9995546,10130448,10266444,10403433,10541318,10680019,10819410,10959409,11099912,11240860],[4843781,4974551,5111561,5250299,5389949,5530384,5670892,5811389,5951489,6091340,6230867,6371729,6513453,6655902,6798958,6942513,7086532,7230939,7375696,7520830,7666455,7812607,7959303,8106536,8254349,8402758,8551818,8701541,8851962,9003098,9154998,9307716,9461300,9615809,9771304,9927865,10085535,10244392,10404496,10565830,10728430,10892248,11057209,11223232,11390221,11558046,11726591,11895760,12065419,12235490]],B:[[5132355,5246937,5361123,5474309,5585563,5694962,5801426,5905164,6005766,6103426,6197580,6291750,6385749,6479478,6572845,6665692,6758053,6849867,6941139,7031904,7122261,7212307,7302095,7391669,7481091,7570416,7659721,7749026,7838386,7927804,8017310,8106942,8196710,8286637,8376733,8467030,8557569,8648364,8739460,8830847,8922525,9014440,9106504,9198629,9290722,9382726,9474554,9566143,9657456,9748444],[4843781,4970028,5099975,5228742,5355460,5480180,5601863,5720686,5836227,5948626,6057365,6166182,6274943,6383515,6491792,6599624,6707004,6813877,6920239,7026147,7131670,7236885,7341857,7446621,7551258,7655815,7760359,7864917,7969513,8074158,8178871,8283672,8388556,8493534,8598606,8703787,8809098,8914540,9020129,9125845,9231678,9337573,9443477,9549295,9654957,9760379,9865487,9970211,10074496,10178283]],C:[[5132355,5242922,5351097,5456593,5558479,5656505,5749938,5838709,5922702,6001839,6075894,6149225,6221974,6294043,6365340,6435713,6505207,6573766,6641415,6708198,6774230,6839616,6904422,6968712,7032554,7096004,7159142,7221985,7284580,7346911,7408984,7470804,7532351,7593600,7654533,7715144,7775445,7835420,7895096,7954451,8013483,8072154,8130402,8188166,8245393,8302063,8358126,8413556,8468346,8522481],[4843781,4965526,5088273,5207437,5322112,5432049,5536460,5635210,5728180,5815204,5896068,5976190,6055718,6134520,6212508,6289541,6365623,6440718,6514843,6588071,6660498,6732213,6803308,6873834,6943881,7013514,7082806,7151783,7220467,7288856,7356947,7424732,7492175,7559244,7625899,7692124,7757898,7823196,7888015,7952319,8016104,8079327,8141957,8203929,8265214,8325762,8385548,8444546,8502737,8560099]]}}},207:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjE4LjQgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMTguNCA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZD0iTTIxNS44LDE5My41YzIuMi00LjcsMy44LTEwLjYsMS41LTE1LjVjLTMuOS04LjUtOC43LTE2LjQtMTMuMy0yNC41Yy00LjItNy4zLTguMi0xNC44LTEyLjEtMjIuMgoJYy00LTcuNi03LjYtMTUuMy0xMS40LTIzLjFjLTYuNy0xMy45LTEyLjgtMjgtMTcuOS00Mi42Yy01LjEtMTUuNC05LjEtMzEuMS0xMy4yLTQ2LjdjLTAuOC0yLjktMi01LjQtNS41LTUuMQoJYy0wLjQsMC4xLTAuNywwLjItMSwwLjNjLTAuMi0wLjEtMC40LTAuMy0wLjYtMC40Yy0wLjktMC4zLTEuOC0wLjQtMi43LTAuNGMwLjMtMS4zLDAuNi0yLjcsMC45LTRjMC42LTIuOCwxLjctOS43LTMuMy05LjMKCWMtMi41LDAuMi00LjgsMi45LTYuMSw0LjhjLTAuNywxLTEuMiwyLTEuNywzYy0wLjUsMS0wLjksMi4xLTEuMiwzLjNjLTMuNiwxNS4yLTcuNCwzMC4zLTExLjUsNDUuNGMtMy4xLDExLjItNi44LDIyLjEtMTAuNywzMy4xCgljLTQuNiwxMS41LTkuMywyMy0xNC41LDM0LjJjLTMuMSw2LjYtNi4zLDEzLTkuNywxOS40Yy0yLjEsNC4xLTQuNCw4LTYuNywxMmMtMyw0LjktNS45LDkuNy05LDE0LjZjLTQuMSw2LjQtOCwxMy0xMi44LDE4LjkKCWMwLjEtMC4yLDAuMy0wLjMsMC40LTAuNWMtMi40LDMuMi00LjMsNi41LTUuNCwxMC41Yy0wLjgsMi44LTEuMSw1LjYtMC44LDguNWMwLjIsMi4xLDEuMiwzLjgsMyw0LjljMiwwLjcsMy45LDAuNCw1LjctMC44CgljNi43LTQuMiwxMS4xLTExLDE1LjItMTcuN2MxLjgtMywzLjYtNiw1LjMtOWMzLjgtNi41LDcuNy0xMywxMS4yLTE5LjdjMy40LTYuNCw2LjctMTIuOCw5LjktMTkuNGMzLjItNi42LDYtMTMuMiw4LjktMjAKCWM0LTkuNCw3LjUtMTkuMSwxMS0yOC44YzIuMi02LjIsNC40LTEyLjQsNi4zLTE4LjdjMCwxMC4zLDAsMjAuNywwLDMxYzAsNi4xLTAuMywxMi4yLTAuNiwxOC4zYy0wLjQsOS4zLTAuNiwxOC42LTEuMSwyNy45CgljLTAuNSwxMC40LTEuNSwyMC44LTIuMywzMS4yYy0wLjcsOS4yLTEuOCwxOC40LTIuOCwyNy42Yy0wLjQsMy45LTEuMSw3LjktMS42LDExLjhjLTAuNyw1LjItMS40LDEwLjMtMi4yLDE1LjUKCWMtMS4xLDcuNi0yLjcsMTUuMi00LjEsMjIuOGMtMS44LDcuNy0zLjUsMTUuNC01LjMsMjMuMWMtMS43LDcuNS00LjEsMTQuOS02LjEsMjIuM2MtMiw3LjMtNC42LDE0LjUtNi45LDIxLjcKCWMtMS42LDUuMS0zLjUsMTAtNS40LDE1Yy02LjMsMTUuNi0xMi45LDMxLjEtMTkuOCw0Ni41Yy0zLjEsNi45LTYuMywxMy45LTkuNywyMC42Yy0yLDQtMy45LDguMS02LjEsMTJjLTEuMiwyLjItMi41LDQuNS0zLjcsNi43CgljLTMuNSw1LjUtNywxMC45LTEwLjgsMTYuMmMtMyw0LjItNi4zLDguMi05LjYsMTIuMmMtNS4xLDYtMTAuMiwxMi0xNS4xLDE4LjFjLTAuMiwwLjItMC40LDAuNS0wLjYsMC43Yy0wLjksMS0xLjcsMi0yLjUsM2wwLDAKCWMtMi45LDMuOS01LjMsOC02LjYsMTIuOGMtMS4xLDMuNC0xLjQsNi45LTAuOSwxMC41YzAuMiwyLjcsMS41LDQuNywzLjcsNmMyLjUsMC44LDQuOCwwLjUsNy0xYzkuMi00LjksMTUuNi0xNC4xLDIyLTIyCgljNi03LjIsMTEuOS0xNC41LDE3LjMtMjIuMWMyLjktNC4xLDUuNi04LjQsOC4zLTEyLjZjMy43LTUuOCw3LTEyLDEwLjQtMTguMWM0LjYtOC4yLDguNS0xNi43LDEyLjUtMjUuMgoJYzMuNy03LjgsNy4yLTE1LjYsMTAuNi0yMy41YzQuMS05LjcsOC4yLTE5LjQsMTIuMS0yOS4yYzIuMi01LjUsNC4zLTExLjEsNi4yLTE2LjdjMS41LTQuMywzLjItOC42LDQuNS0xMwoJYzIuOC05LjEsNS44LTE4LjIsOC4yLTI3LjRjMS40LTUuNCwyLjktMTAuOCw0LjMtMTYuMmMxLjEtNC4zLDEuOS04LjcsMi44LTEzYzEuMy02LDIuNy0xMS45LDMuNy0xNy45YzAuOC01LjIsMS43LTEwLjMsMi42LTE1LjUKCWMwLjYtMy45LDEuNC03LjksMS45LTExLjhjMC43LTUuNSwxLjQtMTEuMSwyLTE2LjZjMi4zLTE5LjEsMy40LTM4LjIsNC41LTU3LjRjMS4xLTE5LjQsMS41LTM4LjcsMS42LTU4LjFjMS45LDUuNSw0LDExLDYuMiwxNi40CgljMiw1LDQsMTAuMSw2LjMsMTUuMWM0LjEsOC44LDgsMTcuOCwxMi4zLDI2LjZjNC41LDkuMSw5LDE4LjIsMTMuNiwyNy4yYzIsMy45LDQuMiw3LjcsNi40LDExLjVjMS4zLDIuMiwyLjcsNC4zLDQuMiw2LjMKCWMxLjksMi42LDQuNCw0LjgsNi44LDYuOWMxLjksMC43LDMuNywwLjQsNS40LTAuN2MxLTAuOCwyLTEuNSwyLjktMi4zQzIxMi43LDE5OC45LDIxNC41LDE5Ni4zLDIxNS44LDE5My41eiIvPgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-index-js-88db45f82f05b70a63c2.js.map