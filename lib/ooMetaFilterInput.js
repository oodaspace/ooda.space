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
let metaFilterInput_proc = function(context,prospective,distance,name="metaFilterInput",_class='meta'){
let description = `template for a filter input`
let metaFilterInput_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>


    #${name}title {display:grid;grid-template: auto 20px 25px auto 20px 25px auto/ auto;max-height: 150px;}
    #${name}idea {font-size:14px; text-align: center;align-self: center;grid-area: 4 / 1 / 5 / 2;font-family:courier;display:none;}
    #${name}_content {display:none;}
    #${name}titleTxt {text-align: center;align-self: end;grid-area: 1 / 1 / 2 / 2;padding:4px;font-family:courier;font-size:16px;}
    #${name}directorTxt {text-align: center;align-self: end;grid-area: 2 / 1 / 3 / 2;padding:2px;font-family:courier;}
    #${name}nameTxt {text-align: center;align-self: end;grid-area: 4 / 1 / 6 / 2;padding:2px;font-family:courier;}
    #${name}directorInput {font-size:12px; border:solid 1px black;width:290px;}
    #${name}nameInput {font-size:12px; border:solid 1px black;width:290px;}
    #${name}directorInputcontainer {display:grid;grid-area: 3 / 1 / 4 / 1; padding-bottom: 22.5px;align-self:start;justify-self:start;width:100%;justify-content: start;padding: 2px;}
    #${name}nameInputcontainer {display:grid;grid-area: 6 / 1 / 7 / 1; padding-bottom: 22.5px;align-self:start;justify-self:start;width:100%;justify-content: start;padding: 2px;}
    #${name}buttoncontainer {display:flex;font-size:15px;padding:10px;overflow: scroll;scrollbar-width: none;grid-area:7 / 1 / 8 / 2;justify-self:center;align-self:center;}
    #${name}buttoncontainer::-webkit-scrollbar {width: 0px;height:0px;}
    #${name}addbutton {border:2px solid black; background-color:gray;cursor: pointer;}
        </style>
        \<div id="${name}title">
                \<div id="${name}idea">\</div>
                \<div id="${name}titleTxt">Enter a new filter here:</div>
                \<div id="${name}directorTxt">You. The director of this filter.<!--PUT in helper <i>If you want to direct the filter, use and address that you have. If you want to see someone else's filter, use their address.</i>--></div>
                \<div id="${name}directorInputcontainer">\<input id="${name}directorInput" placeholder="Valid address (Ethereum address space)">\</input>\</div>
                \<div id="${name}nameTxt">Your name for this filter:</div>
                \<div id="${name}nameInputcontainer">\<input id="${name}nameInput" placeholder="Filter name">\</input></div>
                \<div id="${name}buttoncontainer"> \<div id="${name}addbutton"> Add this filter</div></div>
              \</div>

        \</div>
                      `,
  objectDefs : `
      stopInitalIconRequest = true;
document.getElementById('${name}_content').style.cssText += ' border:solid 2px black;';


document.getElementById('${name}_left').style.cssText += ' top:22px';
  document.getElementById('${name}_right').style.cssText += ' display:none;top:22px';

document.getElementById('${name}_leftSignalMask').style.cssText += '  display:none;top:37px';
document.getElementById('${name}_rightSignalMask').style.cssText += '  display:none;top:37px';

document.getElementById('${name}_upFlagsL').style.cssText += ' top:37px';
document.getElementById('${name}_upFlagsR').style.cssText += ' top:37px';


let colours =  ["grey","tomato","khaki","lightgreen","dodgerblue","plum","black"];
let colourIndex = 0;
  let currentidea = '0x0000000000000000000000000000000000000000000000000000000000000000'

hideBigCircle = true
  let currentcontext = "${context}";
  let currentaddresspad = "0x0000000000000000000000000000000000000000000000000000000000000000"
  let filterprospective = "0x0000000000000000000000000000000000000000000000000000000000000000"
  let filternamehex = "0x0000000000000000000000000000000000000000000000000000000000000000"
  let isUp = false;
  hideBigCircle = true
  isContextAnAddress = true


    // This is the click handler for the add filter button. After user has added filter director address and name to inputs...
    function ${name}addFilterClick(e){
                let filtercontext = XORcontextidea(currentaddresspad,filternamehex,1)
                let initfilterDict = {fromBlock:"0x0",toBlock:'latest',address:oodaspacev0._address,topics:[[web3.utils.sha3('Up(address,uint256,uint256,uint256)')],[currentaddresspad],filtercontext]}
                let filterid = '_' + currentaddresspad + '_' + filtercontext
                send({"jsonrpc":"2.0","method":"newFilter","params":{"filterDict":initfilterDict,"filter":filterid,"isFilter":true,"isMeta":true,"to":[txtToOOId("web3wsManager"),txtToOOId("logSorter"),txtToOOId("filterCurator")],"from":"${name}"}});
                currentcontext = "0x0000000000000000000000000000000000000000000000000000000000000000"
                send({"jsonrpc": "2.0", "method": "setContext", "params": {"context": "0x0000000000000000000000000000000000000000000000000000000000000000","to":["${name}"],"from":"${name}"}})
                send({"jsonrpc": "2.0", "method": "setProspective", "params": {"prospective": "0x0000000000000000000000000000000000000000000000000000000000000000","to":["${name}"],"from":"${name}"}})
                document.getElementById('${name}_right').style.cssText += ' display:none;';
                document.getElementById("${name}nameInputcontainer").firstChild.value = ''
                document.getElementById("${name}directorInputcontainer").firstChild.value = ''
                document.getElementById("${name}_content").style.cssText += " display:none;"
    }
    document.getElementById("${name}addbutton").addEventListener("click", ${name}addFilterClick);

  // handles input of prospective filter director address. checks if valid.
    function ${name}inputfunc(e){
            if(!(isUp)){
              document.getElementById('${name}directorInputcontainer').style.cssText += '  top: -2px; left: -2px;'
              document.getElementById("${name}directorInput").style.cssText += ' max-width: 300px;';
            }
            document.getElementById('${name}_content').style.cssText += ' display:grid; border:solid 2px black;';
            document.getElementById('${name}_left').style.cssText += ' display:block';
            document.getElementById('${name}_right').style.cssText += ' display:block';
            document.getElementById('${name}_upFlagsL').style.cssText += ' display:grid';
            document.getElementById('${name}directorTxt').style.cssText += ' display:block';

            if(isAddress(this.value)){
                    // input field has valid address, update icon.
                    currentaddresspad = hexifyString(this.value)
                    let str = this.value
                    let val = str.toLowerCase()//.replace('"','').replace("'",'')
                    str = val.replace(/(.{21})/g, "$1<br>").slice(0,-2)
                    document.getElementById("${name}idea").innerHTML = \`\${str} <br>\`
                    currentaddresspad =  hexifyString(val);
                    send({"jsonrpc": "2.0", "method": "setContext", "params": {"context": currentaddresspad,"to":[txtToOOId("metaFilterInput")],"from":"${name}"}})
                    send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": currentaddresspad,"idea":filternamehex ,"prospective":XORcontextidea(currentaddresspad,filternamehex,1) ,"hideIdea":true,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" });
            }
            else {
                    document.getElementById("${name}idea").innerHTML = \`\${"Please enter a valid ETH address"} <br>\`
                    send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": "0x0000000000000000000000000000000000000000000000000000000000000000","idea": "0x0000000000000000000000000000000000000000000000000000000000000000","prospective":"0x0000000000000000000000000000000000000000000000000000000000000000" ,"hideIdea":true,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" });
            }
         }
document.getElementById("${name}directorInput").addEventListener("keyup", ${name}inputfunc);

function ${name}nameInputfunc(e){
      filternamehex = hexifyString(this.value)
      send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": currentaddresspad,"idea":filternamehex ,"prospective":XORcontextidea(currentaddresspad,filternamehex,1) ,"hideIdea":true,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" });
     }
document.getElementById("${name}nameInput").addEventListener("keyup", ${name}nameInputfunc);

// expand collapse display on click of left icon
function ${name}_left_click(){
      let tel = document.getElementById('${name}_content');
      if(tel.style.display=='none'){
          tel.style.cssText += ' display:grid;'
        }
      else{
          tel.style.cssText += ' display:none;'
        }

}
document.getElementById("${name}_left").addEventListener("click",${name}_left_click);

  //handles screen resize
  function ${name}_onresize(){
    let y = window.innerHeight-220;
    send({"jsonrpc":"2.0","method":"SETY","params":{"y":y,"to":["${name}"],"from":"${name}"}})
  }
  window.addEventListener("resize",${name}_onresize);

  `,
  RESULTcases : ` `
                    ,
  METHODcases : `

                  /*
                      setContext:     sets the context and request new icon from icon creator oo (ensures that address icon shown for zero case)
                      setProspective:    sets the prospective and request new icon from icon creator oo
                      ShiftLeft   Used to set the position of this oo in the layout.
                      incColourIndex: increment colour index (sets colour of next inuptted filter)
                      setColour  sets the colour of the prospective filter

                    */


                    case 'setContext':
                        currentcontext = msg.params.context;
                        if (currentcontext == "0x0000000000000000000000000000000000000000000000000000000000000000"){
                          send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": currentcontext,"idea": filternamehex,"prospective": XORcontextidea(currentcontext,filternamehex,1),"hideIdea":true,"isContextAnAddress":true,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" })
                        }
                        else {
                          send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": currentcontext,"idea": filternamehex,"prospective": XORcontextidea(currentcontext,filternamehex,1),"hideIdea":true,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" })
                        }

                    break;
                    case 'setProspective':
                        currentprospective = msg.params.prospective;
                        if (currentcontext == "0x0000000000000000000000000000000000000000000000000000000000000000"){
                          send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": currentcontext,"idea": filternamehex,"prospective": currentprospective,"hideIdea":true,"isContextAnAddress":true,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" })
                        }
                        else {
                          send({"jsonrpc": "2.0", "method": "createSVG", "params": {"context": currentcontext,"idea": filternamehex,"prospective": currentprospective,"hideIdea":true,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" })
                        }
                    break;

                    case 'ShiftLeft':
                      send({"jsonrpc":"2.0","method":"MOVEX","params":{"x":msg.params.left+35,"to":["${name}"],"from":"${name}"}});
                    break;

                    case 'incColourIndex':
                      colourIndex ++;
                    break;
                    case 'setColour':
                      document.getElementById('${name}_upFlagsL').style.cssText += ' background-color:'+msg.params.colour;
                      document.getElementById('${name}_upFlagsR').style.cssText += ' background-color:'+msg.params.colour;

                      break;
                      `,
  STARTUPmessages : `[{"jsonrpc":"2.0","method":"SETY","params":{"y":window.innerHeight-220,"to":["${name}"],"from":"${name}"}},{"jsonrpc": "2.0", "method": "HIDEADDRESSES", "params": {"to":["${name}"],"from":"${name}"}},{"jsonrpc": "2.0", "method": "createSVG", "params": {"context": "0x0000000000000000000000000000000000000000000000000000000000000000","idea": "0x0000000000000000000000000000000000000000000000000000000000000000","prospective": "0x0000000000000000000000000000000000000000000000000000000000000000","isContextAnAddress":true,"hideIdea":true,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" }]`,
  context: context,
  prospective: prospective

}

return base_template(metaFilterInput_outerTemplateObj);
}
