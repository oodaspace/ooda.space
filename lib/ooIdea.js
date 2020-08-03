/*
© (c) Copyright 2020 ooda space ltd
###############################################################################
A. Redistribution and use:
    1. Redistribution and use in source and binary forms, without modification, are permitted provided that the following conditions are met:
            i.    Redistributions of source code must retain the above copyright notice and this text (Sections A., B., C., D.*, E.*, and F.*).
            ii.   Redistributions in binary form must reproduce the above copyright notice and this text (Sections A., B., C., D.*, E.*, and F.*) in the documentation and/or other materials provided with the distribution.
    2. Redistribution and use in source and binary forms, with modification, are permitted provided that the following conditions are met:
            i.    Redistributions of source code must retain the above copyright notice and this text (Sections A., B., C., D.*, E.*, and F*. with Section C. modified as per A.2.iii).
            ii.   Redistributions in binary form must reproduce the above copyright notice and this text (Sections A., B., C., D.*, E.*, and F.* with Section C. modified as per A.2.iii) in the documentation and/or other materials provided with the distribution.
            iii.  The modifier has updated Section C. below as described in Section D.
            iv.   The modifier has signalled value in the modified file on the ideas.oodaspace.eth smart contract as described in section E.
            v.    The modified file is stored on the Arweave system as described in Section F.
    3. If any part of this text (Sections A., B., C., D.*, E.*, and F.*) is held to be invalid it shall not invalidate the text as a whole or any other part of this text (Sections A., B., C., D., E., and F.).
    * Sections D., E., and F. may be replaced by reference to an arweave transaction containing version 0 of the full license (with nothing else included). I.e. "For Sections D., E., and F. refer to the Arweave transaction am0Zxgnoxrip32hGUzCd3VTFoLMpZ9VbyfdvA_fIZ-I"
###############################################################################
B. Disclaimer:
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
###############################################################################
C. The file
    1. Media-type:                                              text/plain
    2. Ethereum address of modifier:                            0x266D80d1a7f8926FE44BA310eA2bDa7d302a9615
    3. Distance [integer dec]:                                  0
    4. Context [256bit word hex]:                               0x0000000000000000000000000000000000000000000000000000000000000000
    5. SHA3 256-bit hash of the file [only for redistributions in binary form, else "Not Applicable"]:  Not Applicable
###############################################################################
For Sections D., E., and F. refer to the Arweave transaction am0Zxgnoxrip32hGUzCd3VTFoLMpZ9VbyfdvA_fIZ-I
###############################################################################
*/
let idea_proc = function(context,prospective,distance,x=0,name="idea",cla='base'){
  name = String(name)
let description = `Mangages idea: ${name}`
let idea_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${cla}`,
  content: `<style>
                #${name} {display:none;left:${x}px;}
                #${name}_content {overflow: visible;}
                #${name}title {position: relative;display:grid;grid-template: 25% 25% 25% 25% 25px/ 100px auto;width:100%;align-self:center;height: 100%;}
                #${name}idea {font-size:30px; text-align: center;grid-area: 1 / 1 / 5 / 3;padding-left:0px;padding-right:0px;position: absolute;clip: rect(0px,300px,150px,0px);height: 150px;width: 300px; display: grid;align-items:center;justify-items:center;}
                #${name}desc {display:none;}
                #${name}_rank {display:none;}
                #${name}_ranktotal {display:none;}
                /* container for the +1, +10.. options*/
                #${name}updowninputter {grid-area: 1 / 1 / 2 / 3;overflow: scroll;scrollbar-width: none;border: solid 0px; background-color: rgb(7, 87, 191); display:none;grid-template:auto / repeat(8, auto);grid-gap:0px;background-color: transparent;justify-content:space-around;z-index:1;position: relative;top:-23px;background-color: transparent;height: 20px; max-width:300px;/*box-shadow: black 0px 0px 1px 1px;border-bottom:0px;*/}


                #${name}updowninputter::-webkit-scrollbar {width: 0px;height:0px;}
                #${name}down100000{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#333;cursor: pointer;height:20px;}
                #${name}down10000{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#333;cursor: pointer;height:20px;}
                #${name}down1000{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#333;cursor: pointer;height:20px;}
                #${name}down100{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#333;cursor: pointer;height:20px;}
                #${name}down10{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#333;cursor: pointer;height:20px;}
                #${name}down1{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#333;cursor: pointer;height:20px;}
                #${name}mid{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#333;cursor: pointer;height:20px;}
                #${name}bin{border:0px;background-color:transparent;}/*will be discard selector in future*/
                #${name}up01{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#b1dea0;cursor: pointer;height:20px;}
                #${name}up1{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#b1dea0;cursor: pointer;height:20px;}
                #${name}up10{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#b1dea0;cursor: pointer;height:20px;}
                #${name}up100{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#b1dea0;cursor: pointer;height:20px;}
                #${name}up1000{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#b1dea0;cursor: pointer;height:20px;}
                #${name}up10000{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#b1dea0;cursor: pointer;height:20px;}
                #${name}up100000{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#b1dea0;cursor: pointer;height:20px;}
                #${name}up1000000{width:100%;justify-self:center;align-self:center;text-align:center;background-color:#b1dea0;cursor: pointer;height:20px;}

                #${name}up01:hover{width:100%;background-color:#71a65d;}
                #${name}up1:hover{width:100%;background-color:#71a65d;}
                #${name}up10:hover{width:100%;background-color:#71a65d;}
                #${name}up100:hover{width:100%;background-color:#71a65d;}
                #${name}up1000:hover{width:100%;background-color:#71a65d;}
                #${name}up10000:hover{width:100%;background-color:#71a65d;}
                #${name}up100000:hover{width:100%;background-color:#71a65d;}
                #${name}up1000000:hover{width:100%;background-color:#71a65d;}
                #${name}minimise{grid-area: 1 / 1 / 2 / 2 ;justify-self:start;display:none;padding: 5px;background-color:#d0eaf1;background-color: #d0eaf1;
                  cursor: pointer;
                  padding-right: 5px;
                  height: 20px;}
                  #${name}fullscreenIconcontainer {display:none;grid-template:auto / auto;grid-gap:0px;background-color: transparent;justify-content:space-around;z-index:1;position: relative;top:-40px;left:-62px;background-color: transparent;height: 20px; max-width:300px;}
                  #${name}fullscreenIcon {height:20px;background-color: #d0eaf1;
                  cursor: pointer;
    padding:0px;
                }
                #${name}toRight{grid-area: 2 / 1 / 4 / 2;justify-self:start;align-self:center;display:none;padding: 5px;background-color:white;}
                #${name}SignalOverview{grid-area: 4 / 1 / 5 / 3;width:100%;justify-self:center;align-self:end;text-align:center;background-color:white;}

                /* down functionality to be added in future*/
              /*  #${name}down100000:hover{width:100%;background-color:lightgreen;}
                #${name}down10000:hover{width:100%;background-color:lightgreen;}
                #${name}down1000:hover{width:100%;background-color:lightgreen;}
                #${name}down100:hover{width:100%;background-color:lightgreen;}
                #${name}down10:hover{width:100%;background-color:lightgreen;}
                #${name}down1:hover{width:100%;background-color:lightgreen;}
                #${name}up1:hover{width:100%;background-color:lightgreen;height:20px;}
                #${name}up10:hover{width:100%;background-color:lightgreen;height:20px;}
                #${name}up100:hover{width:100%;background-color:lightgreen;height:20px;}
                #${name}up1000:hover{width:100%;background-color:lightgreen;height:20px;}
                #${name}up10000:hover{width:100%;background-color:lightgreen;height:20px;}
                #${name}up100000:hover{width:100%;background-color:lightgreen;height:20px;}*/


                #${name}toRight:hover{transform: scale(1.2)}

                @keyframes rotation {
                  from {
                    transform: rotate(359deg);
                    transform-origin: 12.5px 12.5px;
                  }
                  to {
                    transform: rotate(0deg);
                    transform-origin: 12.5px 12.5px;
                  }
                }

            </style>
            \<div id="${name}title">
                    \<div id="${name}desc"> \<b>${name}: \</b>${description}\</div>
                  <!--  \<div >

                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <polyline points="9 21 3 21 3 15"></polyline>
                                <line x1="21" y1="3" x2="14" y2="10"></line>
                                <line x1="3" y1="21" x2="10" y2="14"></line>
                                  </svg>
                    \</div>-->
                    \<div id="${name}idea">\</div>

                    \<div id="${name}updowninputter">

                    \<button id="${name}up10">0.01\</button>
                    \<button id="${name}up100">0.1\</button>
                    \<button id="${name}up1000">1\</button>
                    \<button id="${name}up10000">10\</button>
                    \<button id="${name}up100000">100\</button>
                    \<button id="${name}up1000000">1K\</button>
                    \</div>
\<div id="${name}fullscreenIconcontainer">
<button id="${name}fullscreenIcon">&#128470;</button>
\</div>


                    \<div id="${name}toRight">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 909.061 909.061" xml:space="preserve">
                        <g>
                        	<path d="M0,454.53c0,28.996,23.505,52.5,52.5,52.5h538.473l-42.252,41.748c-20.625,20.379-20.824,53.619-0.445,74.244   c10.27,10.395,23.805,15.602,37.348,15.6c13.328,0,26.666-5.045,36.896-15.154L754,493.556c9.904-9.785,15.518-23.105,15.6-37.029   c0.084-13.923-5.367-27.311-15.154-37.214L622.762,286.04c-20.379-20.624-53.617-20.826-74.244-0.445   c-20.625,20.379-20.824,53.619-0.445,74.244l41.689,42.192H52.5C23.505,402.031,0,425.536,0,454.53z"/>
                        	<path d="M856.561,215.72c-28.996,0-52.5,23.505-52.5,52.5v372.621c0,28.994,23.504,52.5,52.5,52.5c28.994,0,52.5-23.506,52.5-52.5   V268.22C909.061,239.225,885.555,215.72,856.561,215.72z"/>
                        </g>

                        </svg>
                    \</div>

\<div id="${name}minimise">
                                <button>&#128469;</button>
                      \</div>
\<div id="${name}SignalOverview">\</div>
            \</div>
                      `,
  objectDefs : `


                let contextTotal = 0;
                let hasFilter = false;
                let isHidden = false;
                let isTop = false;
                let pendamt = 0;
                let filterColours = {};
                let fullScreen = false;
                let colours =  ["red","red","red","red","red","blue"]//["grey","tomato","khaki","lightgreen","dodgerblue","plum","black"];

                let rootcontextMan
                // the root of the tree of words,
                if (!isMeta){
                  rootcontextMan = "_"+metaooManagerProspective+"_"+XORcontextidea(metaooManagerProspective,"0x0000000000000000000000000000000000000000000000000000000000000000",metaoodistance) //"_"+String(hexifyString('context'))+"_0x0000000000000000000000000000000000000000000000000000000000000000";
                }
                else {
                  rootcontextMan = "_"+metaooManagerProspective+"_"+XORcontextidea(metaooManagerProspective,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",metaoodistance) //"_"+String(hexifyString('context'))+"_0x0000000000000000000000000000000000000000000000000000000000000000";
                }


                // The following functions respond to clicks on the value signalling boxes. Send notifications to the pending Transaction manager and self (to inform user)

                function ${name}up1000000_click(e){
                      send({"jsonrpc":"2.0","method":"ValueSignal","params":{"context":"${context}","prospective":"${prospective}","distance":distance,"amt": 1000000000000000000000,"to":[txtToOOId("pendingTx")],"from":"${name}"}});
                      pendamt += 1000000000000000000000


                }
                document.getElementById("${name}up1000000").addEventListener("click",${name}up1000000_click);
                function ${name}up100000_click(e){
                      send({"jsonrpc":"2.0","method":"ValueSignal","params":{"context":"${context}","prospective":"${prospective}","distance":distance,"amt": 100000000000000000000,"to":[txtToOOId("pendingTx")],"from":"${name}"}});
                      pendamt += 100000000000000000000


                }1000000000000000
                document.getElementById("${name}up100000").addEventListener("click",${name}up100000_click);

                function ${name}up10000_click(e){
                      send({"jsonrpc":"2.0","method":"ValueSignal","params":{"context":"${context}","prospective":"${prospective}","distance":distance,"amt": 10000000000000000000,"to":[txtToOOId("pendingTx")],"from":"${name}"}})
                      pendamt += 10000000000000000000

                }
                document.getElementById("${name}up10000").addEventListener("click",${name}up10000_click);

                function ${name}up1000_click(e){
                      send({"jsonrpc":"2.0","method":"ValueSignal","params":{"context":"${context}","prospective":"${prospective}","distance":distance,"amt": 1000000000000000000,"to":[txtToOOId("pendingTx")],"from":"${name}"}})
                      pendamt += 1000000000000000000

                }
                document.getElementById("${name}up1000").addEventListener("click",${name}up1000_click);

                function ${name}up100_click(e){
                      send({"jsonrpc":"2.0","method":"ValueSignal","params":{"context":"${context}","prospective":"${prospective}","distance":distance,"amt": 100000000000000000,"to":[txtToOOId("pendingTx")],"from":"${name}"}})
                      pendamt += 100000000000000000

                }
                document.getElementById("${name}up100").addEventListener("click",${name}up100_click);

                function ${name}up10_click(e){
                      send({"jsonrpc":"2.0","method":"ValueSignal","params":{"context":"${context}","prospective":"${prospective}","distance":distance,"amt": 10000000000000000,"to":[txtToOOId("pendingTx")],"from":"${name}"}})
                      pendamt += 10000000000000000

                }
                document.getElementById("${name}up10").addEventListener("click",${name}up10_click);


                // This handles what happens to transfor an oo to fullscreen on user click on the fullScreen icon.
                function ${name}fullscreenIcon_click(e){
                      document.getElementById("${name}minimise").style.cssText += ' display:grid;'
                      document.getElementById('${name}fullscreenIcon').style.cssText += " display: none;"
                      fullScreen = true;
                      document.getElementById("${name}idea").style.cssText += "position:unset;clip:none;width:unset;height:unset;"
                      let tel = document.getElementById("${name}_content")
                      tel.style.cssText += " position: absolute;max-width:none;max-height:none;width:100vw;height:100vh;top:-1px;left:-1px;z-index:1;overflow:auto;"
                      let main = document.getElementById('main')
                      main.appendChild(tel)
                      document.getElementById("${name}idea").style['font-size'] = String(window.innerWidth/10) + 'px'
                }
                document.getElementById("${name}fullscreenIcon").addEventListener("click",${name}fullscreenIcon_click);

                // When fullscreen, the minimise icon is shown. This handles the click  -minimising the oo.
                function ${name}minimise_click(e){
                      fullScreen = false;
                      document.getElementById("${name}idea").style.cssText += "position:absolute;clip:rect(0px,300px,150px,0px);width:300px;height:150px;"
                      let tel = document.getElementById("${name}_content")
                      tel.style.cssText += " position:unset;max-width:300px;max-height:150px;width:300px;height:150px;top:none;left:none;z-index:none;overflow:unset;"
                      document.getElementById("${name}minimise").style.cssText += ' display:none;'
                      document.getElementById('${name}fullscreenIcon').style.cssText += " display: unset;"
                      let main = document.getElementById("${name}")
                      main.appendChild(tel)
                      document.getElementById("${name}idea").style['font-size'] = String(30) + 'px'
                }
                document.getElementById("${name}minimise").addEventListener("click",${name}minimise_click);

                /* Now commented but kept as future possibility, an action to show oo as "half screen"
                function ${name}toRightIcon_click(e){
                      document.getElementById("${name}minimise").style.cssText += ' display:none;'
                      document.getElementById('${name}fullscreenIcon').style.cssText += " display: none;"
                      //document.getElementById('${name}toRight').style.cssText += " display: none;"
                      sideScreen = true;
                      let tel = document.getElementById("${name}_content")
                      tel.style.cssText += " position: absolute;max-width:none;max-height:none;width:50vw;height:50vh;top:-1px;left:-1px;z-index:1;"
                      let main = document.getElementById('side')
                      main.style.cssText += ' display:grid;'
                      main.appendChild(tel)
                }
                document.getElementById("${name}toRight").addEventListener("click",${name}toRightIcon_click);*/

                // on scroll, msgs context manager which updates layout if necessary
                let justScrolled = false  // flag to stop erroneous mouseout event message being setn to context manager.
                function ${name}_scroll(e){
                  justScrolled = true
                  if (e.deltaY >0){
                    send({"jsonrpc":"2.0","method":"ShiftUp","params":{context:"${context}","to":[thisContextMan],"from":"${name}"}});
                  }
                  else {
                    send({"jsonrpc":"2.0","method":"ShiftDown","params":{context:"${context}","to":[thisContextMan],"from":"${name}"}});
                  }
                  send({"jsonrpc":"2.0","method":"HOVERING","params":{"to":[thisContextMan],"from":"${name}"}})
                  setTimeout(function () {
                    justScrolled = false;
                    send({"jsonrpc":"2.0","method":"HOVERING","params":{"to":[thisContextMan],"from":"${name}"}})
                  }, 100);

                }
                document.getElementById("${name}_content").addEventListener("wheel",${name}_scroll);

                // on hover, msgs context manager which updates layout if necessary, display value signaling options
                function ${name}_content_hover(e){
                    if (!(isHidden)){
                      send({"jsonrpc":"2.0","method":"HOVERING","params":{"to":[thisContextMan],"from":"${name}"}})
                    }
                    if (isTop && !fullScreen){
                      document.getElementById('${name}updowninputter').style.cssText += " display: flex;"
                      document.getElementById('${name}fullscreenIconcontainer').style.cssText += " display: grid;"
                      document.getElementById('${name}_rank').style.cssText += " display: grid;"
                      document.getElementById('${name}_ranktotal').style.cssText += " display: grid;"
                      //document.getElementById('${name}toRight').style.cssText += " display: grid;"
                    }
                    else {
                      document.getElementById('${name}updowninputter').style.cssText += " display: none;"
                      document.getElementById('${name}fullscreenIconcontainer').style.cssText += " display: none;"
                      document.getElementById('${name}_rank').style.cssText += " display: none;"
                      document.getElementById('${name}_ranktotal').style.cssText += " display: none;"
                    }
                    send({"jsonrpc":"2.0","method":"slideDownInput","params":{"to":["_"+"${context}"+"_"+"0x0000000000000000000000000000000000000000000000000000000000000000"],"from":"${name}"}});

                }
                document.getElementById("${name}_content").addEventListener("mouseover",${name}_content_hover);


                // on mouseout from the content box, hides icons and msgs context manager which updates layout if necessary
                function ${name}_content_mouseout(e){
                    document.getElementById('${name}updowninputter').style.cssText += " display: none;"
                    document.getElementById('${name}fullscreenIconcontainer').style.cssText += " display: none;"
                    document.getElementById('${name}_rank').style.cssText += " display: none;"
                    document.getElementById('${name}_ranktotal').style.cssText += " display: none;"
                    //document.getElementById('${name}toRight').style.cssText += " display: none;"
                    if (!(isHidden)){
                      let mousedownwards = (e.clientY > window.innerHeight - 420 + 160) ? true : false;
                      if (!mousedownwards) send({"jsonrpc":"2.0","method":"slideUpInput","params":{"to":["_"+"${context}" + "_"+"0x0000000000000000000000000000000000000000000000000000000000000000"],"from":"${name}"}});
                      if (!justScrolled) {
                            send({"jsonrpc":"2.0","method":"MOUSEOUT","params":{"to":[thisContextMan],"from":"${name}"}})
                      }
                    }
                }
                document.getElementById("${name}_content").addEventListener("mouseout",${name}_content_mouseout);

                // on mouseout from entire element, hides icons
                function ${name}_mouseout(e){
                    document.getElementById('${name}updowninputter').style.cssText += " display: none;"
                    document.getElementById('${name}fullscreenIconcontainer').style.cssText += " display: none;"
                    document.getElementById('${name}_rank').style.cssText += " display: none;"
                    document.getElementById('${name}_ranktotal').style.cssText += " display: none;"
                    //document.getElementById('${name}toRight').style.cssText += " display: none;"

                }
                document.getElementById("${name}").addEventListener("mouseout",${name}_mouseout);


                // on mouseout from right element, hides icons - picks up occasion miss from browser for content box mouseout()??)
                function ${name}_right_mouseout(e){
                      document.getElementById('${name}updowninputter').style.cssText += " display: none;"
                      document.getElementById('${name}fullscreenIconcontainer').style.cssText += " display: none;"
                      document.getElementById('${name}_rank').style.cssText += " display: none;"
                      document.getElementById('${name}_ranktotal').style.cssText += " display: none;"
                      //document.getElementById('${name}toRight').style.cssText += " display: none;"
                }
                document.getElementById("${name}_right").addEventListener("mouseout",${name}_right_mouseout);


                // on mouseout from left element, hides icons - picks up occasion miss from browser for content box mouseout()??)
                function ${name}_left_mouseout(e){
                      document.getElementById('${name}updowninputter').style.cssText += " display: none;"
                      document.getElementById('${name}fullscreenIconcontainer').style.cssText += " display: none;"
                      document.getElementById('${name}_rank').style.cssText += " display: none;"
                      document.getElementById('${name}_ranktotal').style.cssText += " display: none;"
                      //document.getElementById('${name}toRight').style.cssText += " display: none;"
                }
                document.getElementById("${name}_left").addEventListener("mouseout",${name}_left_mouseout);

                // on click of left side of icon. toggle expand or collapse msg to context manager
                function ${name}_left_click(e){
                    let tel = document.getElementById('${name}_content');
                    let ymsg
                    let relX = e.clientX - el.getBoundingClientRect().left
                    let relY = e.clientY - el.getBoundingClientRect().top

                    if(tel.style.display=='none' || tel.style.display==' none'){
                        isHidden = false;
                        send({"jsonrpc":"2.0","method":"CLICK-Xpand","params":{"to":[thisContextMan],"from":"${name}"}})
                      }
                    else{
                      isHidden = true;
                        send({"jsonrpc":"2.0","method":"CLICK-Collapse","params":{"to":[thisContextMan],"from":"${name}"}})
                    }
                }
                document.getElementById("${name}_left").addEventListener("click",${name}_left_click);

                // Handles a click on the right side of the icon. This messages contextCurator and filterCurator to add a new context to the blockchain filters, tells context manager to update layout.
                function ${name}_right_click(e){
                  let sl = window.scrollX
                  let el = document.getElementById("${name}_right");
                  let l = Number(document.getElementById("${name}").style.left.split('px')[0]) + 10;
                      if(!(hasFilter)){
                        let newchildcontextid = '_' + metaooManagerProspective +'_'+XORcontextidea(metaooManagerProspective,selfProspective,metaoodistance);
                        send({"jsonrpc":"2.0","method":"setDistance","params":{"distance":Number(distance)+1,"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
                        send({"jsonrpc":"2.0","method":"newContext","params":{"context":selfProspective,"isForMeta":isMeta,"to":[txtToOOId("contextCurator"),txtToOOId("filterCurator")],"from":"${name}"}});
                        setTimeout(function () {
                          send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":-14,"to":[rootcontextMan],"from":"${name}"}})


                        }, 10);
                        hasFilter = true;
                        //window.scrollTo(document.getElementById("${name}").getBoundingClientRect().right,0)

                        let left = window.pageXOffset
                        let right = left + window.innerWidth

                        // scroll viewport if necessary
                        setTimeout(function () {
                                if  (l + (2 * 374) > sl + window.innerWidth + 100){
                                      window.scrollBy(330,0)
                                      //window.scrollTo(document.getElementById("${name}").getBoundingClientRect().left+45,0)
                                }
                        }, 2000);

                    }


                  // This last part of the function makes the right prospective icon spin for 10 seconds.
                  let ccel = el.getElementsByClassName('prospectiveiconparent')[0];
                  let ccelchild = ccel.childNodes[2];
                  ccelchild.style.cssText = "animation: rotation 2s infinite linear;";
                  setTimeout(function () {
                    ccelchild.style.cssText = "animation: none;";
                }, 10000);

                }
                document.getElementById("${name}_right").addEventListener("click",${name}_right_click);

                //this takes the same action as if the user had clicked the righ side of this oo's icon (creates a new live context)
                function simulate_right_click(){
                  let el = document.getElementById("${name}_right");
                      if(!(hasFilter)){
                        let newchildcontextid = '_' + metaooManagerProspective +'_'+XORcontextidea(metaooManagerProspective,selfProspective,metaoodistance);
                        send({"jsonrpc":"2.0","method":"setDistance","params":{"distance":Number(distance)+1,"fromParent":true,"to":[newchildcontextid],"from":"${name}"}});
                        send({"jsonrpc":"2.0","method":"newContext","params":{"context":selfProspective,"isForMeta":isMeta,"to":[txtToOOId("contextCurator"),txtToOOId("filterCurator")],"from":"${name}"}});
                        setTimeout(function () {
                          send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":-14,"to":[rootcontextMan],"from":"${name}"}})
                        }, 10);
                        hasFilter = true;
                    }


                  // This last part of the function makes the right prospective icon spin for 2 seconds.
                  try{
                            let ccel = el.getElementsByClassName('prospectiveiconparent')[0];
                            let ccelchild = ccel.childNodes[2];
                            ccelchild.style.cssText = "animation: rotation 2s infinite linear;";
                            setTimeout(function () {
                            ccelchild.style.cssText = "animation: none;";

                        }, 2000);
                  }
                  catch{}

                }


                // this function sets a flag to indicate if this oo is presently at the front of the layout.
                function setTop(val){
                  if (val){
                    isTop = true;
                  }
                  else {
                    isTop = false;
                  }
                }

                let hasChildren = false;

                // Add the receiver will drop duplicate messages (oldest first) for methods in dropObj:
                dropObj['Signal'] = true;  // note the context manager always sends the full array encapsulating all past signals to this oo.
                dropObj['SETTOP'] = true;
                dropObj['shiftBack'] = true;


              // initialise as expanded content.
              document.getElementById("${name}_content").style.cssText += ' display: grid;'



                // asks the content getter oo to interpret this oo's idea.
                send({"jsonrpc":"2.0","method":"INTERPRET","params":{"idea":"${XORcontextprospective(context,prospective,distance)}","context":"${context}","prospective":"${prospective}","to":[txtToOOId("contentGetter")],"from":"${name}"},"id":"INTERPRET"});

                let yprev = 0
                // rudimentary touchscreen support. Not yet tested out.
                function ${name}touchmove(e){
                  if(e.touches[0].screenY > yprev+10){
                    // as scrolldown
                    justScrolled = true

                      send({"jsonrpc":"2.0","method":"ShiftUp","params":{context:"${context}","to":[thisContextMan],"from":"${name}"}});
                      yprev = e.touches[0].screenY
                  }
                  else if(e.touches[0].screenY < yprev-10){
                      //as scrollup
                      justScrolled = true
                      send({"jsonrpc":"2.0","method":"ShiftDown","params":{context:"${context}","to":[thisContextMan],"from":"${name}"}});
                      yprev = e.touches[0].screenY
                }

                send({"jsonrpc":"2.0","method":"HOVERING","params":{"to":[thisContextMan],"from":"${name}"}})
                setTimeout(function () {
                  justScrolled = false;
                  send({"jsonrpc":"2.0","method":"MOUSEOUT","params":{"to":[thisContextMan],"from":"${name}"}})
                }, 2000);

                }
                document.getElementById("${name}").addEventListener("touchmove",${name}touchmove);

                setTimeout(function () {
                       document.getElementById("${name}_leftSignalMask").style.cssText += "display:grid;"
                       document.getElementById("${name}_rightSignalMask").style.cssText += "display:grid;"
                }, 500);
  `,
  RESULTcases : `

                /* INTERPRET:   results from content getter, should be html for display in content div. Sets content html.
                */

                  case 'INTERPRET':
                      if (msg.result.fmt == 'CHR'){
                        document.getElementById("${name}idea").style.cssText += ' align-self: center;justify-self: center;'
                      }
                      if (msg.result.fmt == 'VID'){
                        document.getElementById("${name}fullscreenIcon").innerHTML = ''
                        document.getElementById("${name}fullscreenIcon").style.cssText += ' padding: 0px;'
                      }
                      document.getElementById("${name}idea").innerHTML = msg.result.html;
                      break;
                  case 'getAddressAmountsForContext':
                      break;

  `
                    ,
  METHODcases : `
  /*
      setDistanceAsIdea:  Used to set the distance of this oo. Used to workout the code for interpretting, re-asks content getter oo for idea, in case distance was incorrectly initialised (e.g. due to msg dropping, or error else where)
      setRank:  Used to set the rank of this oo, in its context, based on the live filters. Updates the rank indicators.
      Signal:     a new signal from a filter for this idea, contains the latest information on the weighted contribution from each live filter. This is used to colour in the outer part of the oo's icon
      setColour   sets the filter colour for a specified filter
      setColours  sets the filter colour scheme
      setMetaStatus: tells this oo whether or not it's in the meta layout or the base.
      SETTOP: notifies this oo that it's at the front of the layout
      shiftBackAsIdea: Used to set the position of this oo in the layout.
      setasContext: notifies this oo that it has descendents in the layout.
      simulteClickOnRight: calls the simulate_right_click func which take the same action as if the user had clicked the righ side of this oo's icon (creates a new live context)

  */

      case 'setDistanceAsIdea':
        // Used to set the distance of this oo. Used to workout the code for interpretting, re-asks content getter oo for idea, in case distance was incorrectly initialised (e.g. due to msg dropping, or error else where)

          if (distance != msg.params.distance){
              distance = msg.params.distance;
              send({"jsonrpc":"2.0","method":"INTERPRET","params":{"idea":XORcontextprospective(context,prospective,distance),"context":"${context}","prospective":"${prospective}","to":[txtToOOId("contentGetter")],"from":"${name}"},"id":"INTERPRET"});
              send({"jsonrpc": "2.0", "method": "requestInitiators", "params": {"context": hexifyString("${context}"),"prospective": hexifyString("${prospective}"),"idea":XORcontextprospective(context,prospective,distance),"to":[txtToOOId("web3wsManager")],"from":"${name}"},"id": "requestInitiators" })
          }

      break;


      case 'setRank':
          document.getElementById("${name}_rank").innerHTML = String(msg.params.rank)
          document.getElementById("${name}_ranktotal").innerHTML = msg.params.ranktotal
      break;

      case 'setMetaStatus':
        //sets this as a manager of ideas in meta_mode
        if (msg.params.isForMeta){
            isMeta = true
            el.classList.add('meta');
            el.classList.remove('base');
          }
          else {
            isMeta = false;
            el.classList.add('base');
            el.classList.remove('meta');
          }
      break;

      case 'Signal':
            // a new signal from a filter for this idea, contains the latest information on the weighted contribution from each live filter. This is used to colour in the outer part of the oo's icon
            let nofilters = Object.keys(msg.params.filterObj).length -1
            let maxProp = msg.params.maxProp//1/
            //update filter colour indicators:
            let uel = document.getElementById(\`\${name}_upFlagsL\`);
            let del = document.getElementById(\`\${name}_upFlagsR\`);
            uel.innerHTML = \`<rect x="0%" y ="0" width="100%" height="116" fill="white" clip-path="url(#${name}flagtrim)" />\`
            del.innerHTML = \`<rect x="0%" y ="0" width="100%" height="116" fill="white" clip-path="url(#${name}flagtrim)" />\`
            let i = 0;
            let runtot = 0
            let filters = Object.keys(msg.params.filterObj).sort()
            filters.forEach((f)=>{
                  if (f.length > 30){
                          if (runtot < 0.5){ //colour in the left of the icon...
                                  if ((runtot + (msg.params.filterObj[f]/maxProp)) > 0.5) {
                                          let leftwidth =  0.5 - runtot
                                          let rightwidth = (msg.params.filterObj[f]/maxProp) - leftwidth
                                          uel.innerHTML += \`<rect x="\${runtot*100}%" y ="0" width="\${leftwidth*100*2}%" height="116" fill="\${(f in filterColours) ? filterColours[f] : colours[i]}" clip-path="url(#${name}flagtrim)" />\` //\`<div class="_u\${f}" style="width:\${leftwidth*100*2}%; height:100%;background-color:\${(f in filterColours) ? filterColours[f] : colours[i]};"></div>\`
                                          del.innerHTML += \`<rect x="\${0.5*100}%" y ="0" width="\${rightwidth*100}%" height="116" fill="\${(f in filterColours) ? filterColours[f] : colours[i]}" clip-path="url(#${name}flagtrim)" />\` //\`<div class="_d\${f}" style="width:\${rightwidth*100*2}%; height:100%;background-color:\${(f in filterColours) ? filterColours[f] : colours[i]};"></div>\`
                                  }
                                  else {
                                          //colour in the remaining portion of right of the icon...
                                          uel.innerHTML += \`<rect x="\${runtot*100}%" y ="0" width="\${(msg.params.filterObj[f]*100)}%" height="116" fill="\${(f in filterColours) ? filterColours[f] : colours[i]}" clip-path="url(#${name}flagtrim)" />\` //\`<div style="width:\${(msg.params.filterObj[f]*100*2)}%; height:100%;background-color:\${(f in filterColours) ? filterColours[f] : colours[i]};"></div>\`
                                  }
                          }
                          else {
                                  del.innerHTML += \`<rect x="\${runtot*100}%" y ="0" width="\${msg.params.filterObj[f]*100}%" height="116" fill="\${(f in filterColours) ? filterColours[f] : colours[i]}" clip-path="url(#${name}flagtrim)" />\` //\`<div style="width:\${msg.params.filterObj[f]*100*2}%; height:100%;background-color:\${(f in filterColours) ? filterColours[f] : colours[i]};"></div>\`
                          }
                          i++
                          runtot += msg.params.filterObj[f]/maxProp
                  }
            })
            // this updates the curvyness of the icon at the top and bottom.
            send({"jsonrpc": "2.0", "method": "UPDATECURVES", "params": {"val":runtot,"to":["${name}"],"from":"${name}"}})
        break;

        case 'SETTOP':
            //notifies this oo that it's at the front of the layout
            setTop(msg.params.isTop)
        break;

        case "shiftBackAsIdea":
            //Used to set the position of this oo in the layout.
            // relay MOVEYZ to self
            send({"jsonrpc":"2.0","method":"MOVEXYZ","params":{"x":msg.params.x,"y":msg.params.y,"z":msg.params.z,"to":["${name}"],"from":"${name}"}});
            //if z <0 then check if has children
            if (msg.params.z < 0){
                if (hasChildren){
                  let rightpos = el.getBoundingClientRect().right;
                  send({"jsonrpc":"2.0","method":"shiftBack","params":{"x":String(rightpos),"y":msg.params.y,"z":msg.params.z,"to":["_"+String(hexifyString('context'))+"_"+String(XORcontextidea(hexifyString('context'),"${prospective}"),1)],"from":"${name}"}});
                }
                send({"jsonrpc": "2.0", "method": "HIDEADDRESSES", "params": {"to":["${name}"],"from":"${name}"}})
                setTop(false)
              }
              else if (msg.params.z == 0){
                setTop(true)
                send({"jsonrpc": "2.0", "method": "SHOWADDRESSES", "params": {"to":["${name}"],"from":"${name}"}})
                if (hasChildren){
                  send({"jsonrpc":"2.0","method":"atFront","params":{"to":["_"+String(hexifyString('context'))+"_"+String(XORcontextidea(hexifyString('context'),"${prospective}"),1)],"from":"${name}"}});
                }
              }
            //if has children, get right dim of self and inform context manager to shift back. uneeded now.
        break;

        case "setasContext":
            // notifies this oo that it has descendents in the layout.
             hasChildren = true;
        break;

        case 'setColour':
            //sets the filter colour for a specified filter
            filterColours[msg.params.filter] = msg.params.colour;
        break;

        case 'setColours':
              // sets colours for eac hof the filters
              filterColours = msg.params.filterColours;
              for (let f in filterColours){
                  let ellist = document.getElementById(\`\${name}_upFlagsL\`).getElementsByClassName(\`_u\${f}\`);
                  if(ellist.length ==1){ellist[0].style.cssText += \` background-color: \${filterColours[f]}\`;}
              }
              for (let f in filterColours){
                let ellist = document.getElementById(\`\${name}_upFlagsR\`).getElementsByClassName(\`_u\${f}\`);
                if(ellist.length ==1){
                    ellist[0].style.cssText += \` background-color: \${filterColours[f]}\`;
                }
              }
          break;

          case 'simulteClickOnRight':
                simulate_right_click()
          break;
                      `,
  STARTUPmessages : `[{"jsonrpc": "2.0", "method": "createSVG", "params": {"context": "${context}","idea": "${XORcontextprospective(context,prospective,distance)}","prospective": "${prospective}","to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" }]`,
  context: context,
  prospective: prospective

}
return base_template(idea_outerTemplateObj);
}
