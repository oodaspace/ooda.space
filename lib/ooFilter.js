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
let filter_proc = function(context,prospective,distance=0,name="filter",_class='base'){
let description = `a filter oo`;
let filter_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
                #${name}title {display:grid;grid-template: 18px auto 34px 18px/ auto 30px 30px;max-width:300px;}
                #${name} {z-index: -2} /* tuck behind input dialog (v. slight overlap) */
                #${name}filter {display:flex;overflow: scroll;scrollbar-width: none;grid-area:2 / 1 / 4 / 2;padding-left:30px;padding-bottom: 3px;padding-right:0px;z-index:1;}
                #${name}filter::-webkit-scrollbar  {width: 0px;height:0px;}
                #${name}filterbackground {display:flex;overflow: scroll;scrollbar-width: none;grid-area:2 / 1 / 4 / 2;padding-left:30px;padding-bottom: 3px;padding-right:0px;z-index:0;}
                #${name}filterbackground::-webkit-scrollbar  {width: 0px;height:0px;}
                .${name}iconbackground {width:30px;display:grid;justify-content:center;align-content:end;}
                #${name}filterid {grid-area:1 / 1 / 5 / 2;display:grid;grid-template: 18px auto auto / auto;font-size:14px; text-align: center;align-self: center;font-family:courier;justify-self: start;height:100%;}
                #${name}filtername {display:flex;overflow: scroll;scrollbar-width: none;grid-area:1 / 1 / 2 / 4;font-size:14px; text-align: center;align-self: center;font-family:courier;padding:3px;justify-self:center;max-width:300px;}
                #${name}filterdirector {overflow: scroll;scrollbar-width: none;grid-area:4 / 1 / 5 / 4;justify-self:center;padding:10px;align-self:center;font-size:10px;justify-self: center;font-family:courier;}
                #${name}filtername::-webkit-scrollbar {width: 0px;height:0px;}
                #${name}filterdirector::-webkit-scrollbar {width: 0px;height:0px;}


                #${name}desc {display: none;}
                #${name}_content {min-width: 300px; width:auto;max-width:300px;}
                #${name}inputcontainer {grid-area:3 / 1 / 4 / 3; padding-bottom: 0px;align-self:center;justify-self:end;width:100%;justify-content: end;display:grid;grid-template: auto / auto;padding-right: 3px;}
                #${name}input {text-align:center;width:18px;}


                #${name}updowninputter {grid-area: 4 / 1 / 5 / 4;overflow: scroll;scrollbar-width: none;justify-self:stretch;height:auto;border: solid 0px black; display:none;grid-template:auto / repeat(6,50px);grid-gap:0px;background-color:transparent;padding:1px;justify-content:space-around;}
                #${name}updowninputter::-webkit-scrollbar {width: 0px;height:0px;}





                #${name}mid{width:100%;justify-self:center;align-self:center;text-align:center;background-color:white;cursor: pointer;padding-right:5px;}
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
      </style>
      \<div id="${name}title">

              \<div id="${name}filtername">\</div>
              \<div id="${name}filterdirector">\</div>
              \<div id="${name}inputcontainer">\<input id="${name}input" placeholder="+">\</input>\</div>

              \<div id="${name}filter">\</div>

              \<div id="${name}filterbackground">

                  \<div class="${name}iconbackground">
                        \<div style="display:grid; grid-template:  auto 30px / auto;padding-top:4px;">
                                    <div style="width:30px;align-self:end;"></div><div style="height:32px; width:30px;background-color:white;align-self:start;text-align:center;padding-top:2px;"><svg width="27" height="27" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"> <defs> </defs> <g transform="translate(0,0)"> <path d="M16 0 L32 16 L16 32 L0 16 Z" fill="white" stroke="black" stroke-width="1"> </path> </g></svg></div>
                        </div>
                  \</div>
                  \<div class="${name}iconbackground">
                        \<div style="display:grid; grid-template:  auto 30px / auto;padding-top:4px;">
                                    <div style="width:30px;align-self:end;"></div><div style="height:32px; width:30px;background-color:white;align-self:start;text-align:center;padding-top:2px;"><svg width="27" height="27" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"> <defs> </defs> <g transform="translate(0,0)"> <path d="M16 0 L32 16 L16 32 L0 16 Z" fill="white" stroke="black" stroke-width="1"> </path> </g></svg></div>
                        </div>
                  \</div>
                  \<div class="${name}iconbackground">
                        \<div style="display:grid; grid-template:  auto 30px / auto;padding-top:4px;">
                                    <div style="width:30px;align-self:end;"></div><div style="height:32px; width:30px;background-color:white;align-self:start;text-align:center;padding-top:2px;"><svg width="27" height="27" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"> <defs> </defs> <g transform="translate(0,0)"> <path d="M16 0 L32 16 L16 32 L0 16 Z" fill="white" stroke="black" stroke-width="1"> </path> </g></svg></div>
                        </div>
                  \</div>
                  \<div class="${name}iconbackground">
                        \<div style="display:grid; grid-template:  auto 30px / auto;padding-top:4px;">
                                    <div style="width:30px;align-self:end;"></div><div style="height:32px; width:30px;background-color:white;align-self:start;text-align:center;padding-top:2px;"><svg width="27" height="27" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"> <defs> </defs> <g transform="translate(0,0)"> <path d="M16 0 L32 16 L16 32 L0 16 Z" fill="white" stroke="black" stroke-width="1"> </path> </g></svg></div>
                        </div>
                  \</div>
                  \<div class="${name}iconbackground">
                        \<div style="display:grid; grid-template:  auto 30px / auto;padding-top:4px;">
                                    <div style="width:30px;align-self:end;"></div><div style="height:32px; width:30px;background-color:white;align-self:start;text-align:center;padding-top:2px;"><svg width="27" height="27" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"> <defs> </defs> <g transform="translate(0,0)"> <path d="M16 0 L32 16 L16 32 L0 16 Z" fill="white" stroke="black" stroke-width="1"> </path> </g></svg></div>
                        </div>
                  \</div>
                  \<div class="${name}iconbackground">
                        \<div style="display:grid; grid-template:  auto 30px / auto;padding-top:4px;">
                                    <div style="width:30px;align-self:end;"></div><div style="height:32px; width:30px;background-color:white;align-self:start;text-align:center;padding-top:2px;"><svg width="27" height="27" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"> <defs> </defs> <g transform="translate(0,0)"> <path d="M16 0 L32 16 L16 32 L0 16 Z" fill="white" stroke="black" stroke-width="1"> </path> </g></svg></div>
                        </div>
                  \</div>
                  \<div class="${name}iconbackground">
                        \<div style="display:grid; grid-template:  auto 30px / auto;padding-top:4px;">
                                    <div style="width:30px;align-self:end;"></div><div style="height:32px; width:30px;background-color:white;align-self:start;text-align:center;padding-top:2px;"><svg width="27" height="27" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"> <defs> </defs> <g transform="translate(0,0)"> <path d="M16 0 L32 16 L16 32 L0 16 Z" fill="white" stroke="black" stroke-width="1"> </path> </g></svg></div>
                        </div>
                  \</div>
              \</div>

              \<div id="${name}updowninputter">
              \<button id="${name}up10">0.01\</button>
              \<button id="${name}up100">0.1\</button>
              \<button id="${name}up1000">1\</button>
              \<button id="${name}up10000">10\</button>
              \<button id="${name}up100000">100\</button>
              \<button id="${name}up1000000">1K\</button>
            \</div>
      \</div>
                      `,
  objectDefs : `

document.getElementById('${name}_left').style.cssText += ' top:22px';
document.getElementById('${name}_right').style.cssText += ' top:22px';

document.getElementById('${name}_leftSignalMask').style.cssText += ' top:10px';
document.getElementById('${name}_rightSignalMask').style.cssText += ' top:10px';

  document.getElementById('${name}_upFlagsL').style.cssText += 'display:grid;background-color:transparent;top:49px;left:-12px;';
  document.getElementById('${name}_upFlagsR').style.cssText += 'display:grid;background-color:transparent;top:49px;left:0px;';
  let child = txtToOOId("inputFilterName");
  let leftOffset = -14;
  let update = false;
  let pendamt = 0;
  let amt =0;
  let parent

  let filtername = stringifyHex(XORcontextprospective("${context}","${prospective}",1))
  document.getElementById("${name}filtername").innerHTML = filtername
  let addr = ("0x"+  "${context}".slice(26))//.replace(/(.{7})/g, "$1<br>");
  document.getElementById("${name}filterdirector").innerHTML = addr

  // these functions handle the value signals for the addresses with the filter. The signal details are sent to the pending transaction manager and the context manaager for this (why?). The amount is added to total and the Signall address method is called to adjust the ui of the filter.
  function ${name}up1000000_click(e){
    send({"jsonrpc":"2.0","method":"ValueSignal","params":{"context":filterProspective,"prospective":XORcontextidea(filterProspective,currentAddr,2),"distance":2,"amt": 1000000000000000000000,"to":[txtToOOId("pendingTx")],"from":"${name}"}})
    pendamt += 1000000000000000000000
    amt= 1000000000000000000000
    if ((currentAddr in filterObj)){ amt += filterObj[currentAddr].amt}
    send({"jsonrpc": "2.0", "method": "SignalAddress",params:{"context": filterProspective, "prospective": XORcontextidea(filterProspective,currentAddr,2),"address": currentAddr ,"amt": amt, "to":["${name}"], "from": "${name}"}});
  }
  document.getElementById("${name}up1000000").addEventListener("click",${name}up1000000_click);
  function ${name}up100000_click(e){
    send({"jsonrpc":"2.0","method":"ValueSignal","params":{"context":filterProspective,"prospective":XORcontextidea(filterProspective,currentAddr,2),"distance":2,"amt": 100000000000000000000,"to":[txtToOOId("pendingTx")],"from":"${name}"}})
    pendamt += 100000000000000000000
    amt= 100000000000000000000
    if ((currentAddr in filterObj)){ amt += filterObj[currentAddr].amt}
    send({"jsonrpc": "2.0", "method": "SignalAddress",params:{"context": filterProspective, "prospective": XORcontextidea(filterProspective,currentAddr,2),"address": currentAddr ,"amt": amt, "to":["${name}"], "from": "${name}"}});
  }
  document.getElementById("${name}up100000").addEventListener("click",${name}up100000_click);

  function ${name}up10000_click(e){
    send({"jsonrpc":"2.0","method":"ValueSignal","params":{"context":filterProspective,"prospective":XORcontextidea(filterProspective,currentAddr,2),"distance":2,"amt": 10000000000000000000,"to":[txtToOOId("pendingTx")],"from":"${name}"}})
    pendamt += 10000000000000000000
    amt= 10000000000000000000
    if ((currentAddr in filterObj)){ amt += filterObj[currentAddr].amt}
    send({"jsonrpc": "2.0", "method": "SignalAddress",params:{"context": filterProspective, "prospective": XORcontextidea(filterProspective,currentAddr,2),"address": currentAddr ,"amt": amt, "to":["${name}"], "from": "${name}"}});
  }
  document.getElementById("${name}up10000").addEventListener("click",${name}up10000_click);

  function ${name}up1000_click(e){
    send({"jsonrpc":"2.0","method":"ValueSignal","params":{"context":filterProspective,"prospective":XORcontextidea(filterProspective,currentAddr,2),"distance":2,"amt": 1000000000000000000,"to":[txtToOOId("pendingTx")],"from":"${name}"}})
    pendamt += 1000000000000000000
    amt= 1000000000000000000
    if ((currentAddr in filterObj)){ amt += filterObj[currentAddr].amt}
    send({"jsonrpc": "2.0", "method": "SignalAddress",params:{"context": filterProspective, "prospective": XORcontextidea(filterProspective,currentAddr,2),"address": currentAddr ,"amt": amt, "to":["${name}"], "from": "${name}"}});
  }
  document.getElementById("${name}up1000").addEventListener("click",${name}up1000_click);

  function ${name}up100_click(e){
    send({"jsonrpc":"2.0","method":"ValueSignal","params":{"context":filterProspective,"prospective":XORcontextidea(filterProspective,currentAddr,2),"distance":2,"amt": 100000000000000000,"to":[txtToOOId("pendingTx")],"from":"${name}"}})
    pendamt += 100000000000000000
    amt= 100000000000000000
    if ((currentAddr in filterObj)){ amt += filterObj[currentAddr].amt}
    send({"jsonrpc": "2.0", "method": "SignalAddress",params:{"context": filterProspective, "prospective": XORcontextidea(filterProspective,currentAddr,2),"address": currentAddr ,"amt": amt, "to":["${name}"], "from": "${name}"}});

  }
  document.getElementById("${name}up100").addEventListener("click",${name}up100_click);

  function ${name}up10_click(e){
          send({"jsonrpc":"2.0","method":"ValueSignal","params":{"context":filterProspective,"prospective":XORcontextidea(filterProspective,currentAddr,2),"distance":2,"amt": 10000000000000000,"to":[txtToOOId("pendingTx")],"from":"${name}"}})
          pendamt += 10000000000000000
          amt= 10000000000000000
          if ((currentAddr in filterObj)){ amt += filterObj[currentAddr].amt}
          send({"jsonrpc": "2.0", "method": "SignalAddress",params:{"context": filterProspective, "prospective": XORcontextidea(filterProspective,currentAddr,2),"address": currentAddr ,"amt": amt, "to":["${name}"], "from": "${name}"}});
  }
  document.getElementById("${name}up10").addEventListener("click",${name}up10_click);



    function ${name}_focusin(e){
          //document.getElementById("${name}updowninputter").style.cssText = " display: none;";
          document.getElementById("${name}input").style.cssText = \`width: 250px;text-align:left;\`
          document.getElementById("${name}inputcontainer").style.cssText = \`z-index:2;\`
          document.getElementById("${name}input").placeholder = "Enter ETH address"
          document.getElementById("${name}_content").style.cssText += "padding-left: 0px;"
          let width = document.getElementById("${name}_content").offsetWidth+35;
          send({"jsonrpc":"2.0","method":"ShiftLeft","params":{left:leftOffset+width,"to":[child],"from":"${name}"}});
    }
    document.getElementById("${name}input").addEventListener("focusin",${name}_focusin);

    function ${name}_focusout(e){
        //  document.getElementById("${name}updowninputter").style.cssText = " display: grid;";
          document.getElementById("${name}input").style.cssText = \`width: 18px; text-align:center;\`
          document.getElementById("${name}inputcontainer").style.cssText = \`z-index:0;\`
          document.getElementById("${name}input").placeholder = "+"
          document.getElementById("${name}_content").style.cssText += "padding-left: 0px"
          let width = document.getElementById("${name}_content").offsetWidth+35
          send({"jsonrpc":"2.0","method":"ShiftLeft","params":{left:leftOffset+width,"to":[child],"from":"${name}"}});
    }
    document.getElementById("${name}input").addEventListener("focusout",${name}_focusout);


                let filterObj = {}    // contains members of this filter
                let contextAddressProspectiveObj = {}
                let prospectiveObj = {}
                let filterTotal = 0;
                let filterProspective = "${name}".split('_')[2];
                let barColour = "orange";
                let currentAddr
                let colWidth
                hideBigCircle = true
                // to do assert that XORcontextprospective(context,prospective) must be an address - this is the filter director address

                document.getElementById('${name}_rank').style.cssText += ' display:none';
                document.getElementById('${name}_ranktotal').style.cssText += ' display:none';

                // toggle display of filter summary and details on click of left side of filter icon.
                function ${name}_left_click(){
                      let tel = document.getElementById('${name}_content');
                      if(tel.style.display=='none'){
                          tel.style.cssText += ' display:grid;'
                        }
                      else{
                          tel.style.cssText += ' display:none;'
                        }
                        send({"jsonrpc":"2.0","method":"refreshFromLeft","params":{"to":[parent],"from":"${name}"}});
                }
                document.getElementById("${name}_left").addEventListener("click",${name}_left_click);


                function ${name}_right_click(){
                        let tel = document.getElementById('${name}_content');
                        if(tel.style.display=='none'){
                            tel.style.cssText += ' display:grid;'
                          }
                        else{
                            tel.style.cssText += ' display:none;'
                          }
                          send({"jsonrpc":"2.0","method":"refreshFromLeft","params":{"to":[parent],"from":"${name}"}});
                  }
                document.getElementById("${name}_right").addEventListener("click",${name}_right_click);

                //This allows used to select and address for signaling value of ( NOT from, i.e. not the users address, necessarily)
                function ${name}iconclickfunc(e){
                        document.getElementById("${name}updowninputter").style.cssText = " display: grid;";
                        send({"jsonrpc":"2.0","method":"refreshFromLeft","params":{"to":[parent],"from":"${name}"}});
                        let addrlong = this.id.split('_')[3].replace("icon","")
                        let addr = addrlong//.replace("000000000000000000000000","")
                        currentAddr = addr//.replace("000000000000000000000000","")

                        // put 'selected' styling on selected address icon wiidea filter, remove from other address icons.
                        for (let i of this.parentNode.parentNode.childNodes){
                            i.children[1].getElementsByTagName('svg')[0].style.cssText += ' box-shadow: black 0px 0px 0px 0px;'
                        }
                        this.getElementsByTagName('svg')[0].style.cssText += ' box-shadow: black 0px 0px 1px 1px;'

                        // re-initialise this onclcik func for each of the addresses.
                        for (let i of this.parentNode.parentNode.childNodes){
                            i.children[1].onclick = ${name}iconclickfunc;
                        }
                }

                // the function that addles the input of a new address in the input box.
                function ${name}inputfunc(e){
                  let tel = document.getElementById("${name}input");
                  if(isAddress(this.value.toLowerCase())){
                          let address = this.value.toLowerCase().replace('0x','0x000000000000000000000000');
                          if (!(address in filterObj)){   // New address in filter
                                    filterObj[address] = {"amt":0,"prop":0}
                                    for (let t in contextAddressProspectiveObj){
                                        contextAddressProspectiveObj[t][address] = {}
                                    }
                                    send({"jsonrpc":"2.0","method":"newAddress","params":{"address":address,"to":[txtToOOId("filterCurator")],"from":"${name}"}});
                                    send({"jsonrpc":"2.0","method":"ADDRICON","params":{"address":address,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id":"ADDRICON"});
                                    let uel = document.getElementById(\`\${name}filter\`);
                                    uel.innerHTML += \`<div style="display:grid; grid-template:  auto 30px / auto;padding-top:4px;">
                                                          <div id="\${String(name)+'_'+String(address)}" style="width:30px;background-color:\${barColour};align-self:end;"></div>
                                                          <div id="\${String(name)+'_'+String(address)}icon" style="height:32px; width:30px;background-color:white;align-self:start;text-align:center;padding-top:2px;"></div>
                                                      </div>\`
                                    for (let i of uel.childNodes){
                                        i.children[1].onclick = ${name}iconclickfunc;
                                    }
                                    let iel = document.getElementById("${name}input");
                                    iel.style.cssText = \`width: \${Object.keys(filterObj).length * 30 -2}px\`;
                                    send({"jsonrpc":"2.0","method":"newAddressInFilter","params":{"filter":"${name}","filterAddress":address,"address":address,"to":[txtToOOId("logSorter")],"from":"${name}"}});
                            }
                        }
                }
                document.getElementById("${name}input").addEventListener("keyup", ${name}inputfunc);

                // handle window resize - repositon on y axis
                function ${name}_onresize(){
                      let y = window.innerHeight-220;
                      send({"jsonrpc":"2.0","method":"SETY","params":{"y":y,"to":["${name}"],"from":"${name}"}})
                }
                window.addEventListener("resize",${name}_onresize);

                dropObj['setChild'] = true;
                dropObj['ShiftLeft'] = true;
                let isMetaFilter = false;
                if (cla == 'meta'){
                  isMetaFilter = true;
                }
                setTimeout(function () {
                       document.getElementById("${name}_leftSignalMask").style.cssText += "display:grid;"
                       document.getElementById("${name}_rightSignalMask").style.cssText += "display:grid;"
                }, 500);

  `,
  RESULTcases : ` /*
                      ADDRICON: Responding with the icon for a filter address, from icon creator oo
                  */

                  case 'ADDRICON':
                              let ael = document.getElementById(\`\${name+'_'+String(msg.result.address)}icon\`);
                              ael.innerHTML += msg.result.svg
                  break;
                  `
                    ,
  METHODcases : `
                  /*
                      newContext: notifcation of a new context.
                      SignalAddress: notifcation of a value signal for one of the addresses in this filter. The filter director has indicated relative value of and address. This adjusts the weighting of the addresses within the filter accordingly, adding a new address if necessary. Updates the bar-chart.
                      SignalIdea: A notification of a new value signal for an oo in the layout. This calculates the distribution of value signals from this filter and sends to the contextcurator for co-ordination of updates to oos.
                      setColour: set the colour of this filter.
                      ShiftLeft: moves to a position on the x-axis.
                      setChild: sets the child (the oo to the left in the layout chain) should be either a  filler or the filter input  oo
                      setParent: sets the parent (the oo to the left in the layout chain) should be a filler.
                  */

                  case 'newContext':
                          // notifcation of a new context.
                          contextAddressProspectiveObj[msg.params.context] = {}
                  break;

                  case 'SignalAddress':
                          //notifcation of a value signal for one of the addresses in this filter. The filter director has indicated relative value of and address. This adjusts the weighting of the addresses within the filter accordingly, adding a new address if necessary. Updates the bar-chart.
                          let address = XORcontextprospective(msg.params.context,msg.params.prospective,2);
                          let context = msg.params.context;
                          let prospective = msg.params.prospective;
                          let idea = address;
                          if (String(context) == filterProspective){
                                  if (!(address in filterObj)){   // New address in filter
                                                    currentAddr = address;
                                                    filterObj[address] = {"amt":0,"prop":0}//{}
                                                    for (let t in contextAddressProspectiveObj){
                                                        contextAddressProspectiveObj[t][address] = {}
                                                    }
                                                    send({"jsonrpc":"2.0","method":"newAddress","params":{"address":address,"to":[txtToOOId("filterCurator")],"from":"${name}"}})
                                                    send({"jsonrpc":"2.0","method":"ADDRICON","params":{"address":address,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id":"ADDRICON"})
                                                    let uel = document.getElementById(\`\${name}filter\`);
                                                    uel.innerHTML += \`<div style="display:grid; grid-template:  auto 30px / auto;padding-top:4px;">
                                                                          <div id="\${String(name)+'_'+String(address)}" style="width:30px;background-color:\${barColour};align-self:end;"></div>
                                                                          <div id="\${String(name)+'_'+String(address)}icon" style="height:32px; width:30px;background-color:white;align-self:start;text-align:center;padding-top:2px;"></div>
                                                                      </div>\`
                                                    for (let i of uel.childNodes){
                                                        i.children[1].onclick = ${name}iconclickfunc;//document.getElementById(String(name)+'_'+String(address) + "icon").addEventListener("click", ${name}iconclickfunc);
                                                    }
                                                    let iel = document.getElementById("${name}input");
                                                    //iel.style.cssText = \`width: \${Object.keys(filterObj).length * 30 -2}px\`;
                                                    send({"jsonrpc":"2.0","method":"newAddressInFilter","params":{"filter":"${name}","filterAddress":address,"address":address,"to":[txtToOOId("logSorter")],"from":"${name}"}});
                                    }
                                    filterTotal = 0;
                                    filterObj[address].amt = msg.params.amt;
                                    for (let f in filterObj){
                                        filterTotal += (f == address) ? msg.params.amt : filterObj[f].amt;
                                    }

                                    if (filterTotal != 0){
                                              for (let k in filterObj){
                                                filterObj[k].prop = filterObj[k].amt/filterTotal;
                                              }
                                              for (let f in filterObj){

                                                    let pel = document.getElementById(\`\${String(name)+'_'+String(f)}\`);
                                                    let pr =  \`height:\${filterObj[f].prop*100}%\`
                                                    pel.style.cssText += pr;
                                              }
                                    }
                              }
                              else if (idea in filterObj){
                                            filterTotal = 0
                                            filterObj[idea].amt = msg.params.amt;
                                            for (let f in filterObj){
                                                    filterTotal += (f == idea) ? msg.params.amt : filterObj[f].amt;
                                            }
                                            if (filterTotal != 0){
                                                    for (let k in filterObj){
                                                        filterObj[k].prop = filterObj[k].amt/filterTotal
                                                    }
                                                    for (let f in filterObj){
                                                        let uel = document.getElementById(\`\${String(name)+'_'+String(f)}\`);
                                                        uel.style['height'] =  \`"\${filterObj[f].prop*100}%;"\`
                                                    }
                                              }
                              }
                    break;


                      case 'SignalIdea':
                                // A notification of a new value signal for an oo in the layout. This calculates the distribution of value signals from this filter and sends to the contextcurator for co-ordination of updates to oos.
                                let maxP = 0;
                                let total = 0;

                                if (!(msg.params.context in contextAddressProspectiveObj)){
                                    contextAddressProspectiveObj[msg.params.context] = {}

                                }
                                contextAddressProspectiveObj[msg.params.context][msg.params.address] = msg.params.prospectiveObj
                                prospectiveObj = {total:0}

                                for (let a in contextAddressProspectiveObj[msg.params.context]){
                                        if (a in filterObj){
                                              for (let h in contextAddressProspectiveObj[msg.params.context][a]){
                                                if (h != 'total'){
                                                    if (!(h in prospectiveObj)){
                                                      prospectiveObj[h] = {total:0,prop:0}

                                                      prospectiveObj[h].total = contextAddressProspectiveObj[msg.params.context][a][h].total*filterObj[a].prop
                                                      prospectiveObj[h].prop = contextAddressProspectiveObj[msg.params.context][a][h].prop*filterObj[a].prop
                                                    }
                                                    else {
                                                      prospectiveObj[h].total += contextAddressProspectiveObj[msg.params.context][a][h].total*filterObj[a].prop
                                                      prospectiveObj[h].prop += contextAddressProspectiveObj[msg.params.context][a][h].prop*filterObj[a].prop
                                                    }
                                                    prospectiveObj.total += contextAddressProspectiveObj[msg.params.context][a][h].total*filterObj[a].prop
                                              }
                                            }
                                        }
                                }


                                  for (let h in prospectiveObj){
                                    if (h != 'total'){
                                          prospectiveObj[h].prop = prospectiveObj[h].total/prospectiveObj.total
                                        }
                                    }

                                send({"jsonrpc": "2.0", "method": 'SignalForContextCurator',params:{"context": msg.params.context, "isFromMetaFilter":isMetaFilter,"filter": "${name}","prospectiveObj": prospectiveObj,"total":total, "to":[txtToOOId("contextCurator")], "from": "${name}"}})

                        break;
                        case 'setColour':
                                  //set the colour of this filter.
                                  barColour = msg.params.colour;

                                  document.getElementById("${name}_upFlagsL").innerHTML =     '<rect x="0%" y ="0" width="100%" height="116" fill="' + String(barColour) + '" clip-path="url(#${name}flagtrim)" />'
                                  document.getElementById("${name}_upFlagsR").innerHTML =     '<rect x="0%" y ="0" width="100%" height="116" fill="' + String(barColour) + '" clip-path="url(#${name}flagtrim)" />'

                        break;
                        case 'ShiftLeft':
                                  //moves to a position on the x-axis.
                                  leftOffset = msg.params.left;
                                  colWidth = document.getElementById('${name}_content').offsetWidth + 35;
                                  send({"jsonrpc":"2.0","method":"MOVEX","params":{"x":leftOffset,"to":["${name}"],"from":"${name}"}});
                                  send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":leftOffset+colWidth,"to":[child],"from":"${name}"}})
                        break;
                        case 'setChild':
                                  //sets the child (the oo to the left in the layout chain) should be either a  filler or the filter input  oo
                                  child = msg.params.child;
                                  send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":leftOffset+colWidth,"to":[child],"from":"${name}"}})
                        break;
                        case 'setParent':
                                  //sets the parent (the oo to the left in the layout chain) should be a filler.
                                  parent = msg.params.parent;
                        break;




                      `,
  STARTUPmessages : `[{"jsonrpc": "2.0", "method": "HIDEADDRESSES", "params": {"to":["${name}"],"from":"${name}"}},{"jsonrpc":"2.0","method":"SETY","params":{"x":-25,"y":window.innerHeight-220,"to":["${name}"],"from":"${name}"}},{"jsonrpc":"2.0","method":"SHOW","params":{"to":["${name}"],"from":"${name}"}}]`,
  context: context,
  prospective: prospective

}

return base_template(filter_outerTemplateObj);
}
