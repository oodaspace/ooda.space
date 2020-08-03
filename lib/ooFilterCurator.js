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
let filterCurator_proc = function(context,prospective,distance,name="filterCurator",_class='meta'){
let description = `Filter Curator: keeps track of all the filters, routes new filter, colour scheme and layout messages.`
let filterCurator_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
                #${name}title {display:flex;flex-direction:column;max-height: 125px;font-family:lucida console;word-break: break-all;}
                #${name}toscreen {overflow: scroll;scrollbar-width: none;}
                #${name}overlayBottom {    font-size: 12px;  text-align: center; align-items: end;   padding: 4px; width: 300px; align-self: end;  background-color: #eee; justify-content: center;}
            </style>
            \<div id="${name}title">
                    <div id="${name}overlayBottom"> <i>\<b>filterCurator\</b> </i></div>
                    \<div> ${description}\</div>
                    \<div> \<b>context: \</b>${context}\</div>
                    \<div> \<b>prospective: \</b>${prospective}\</div>
                    \<div> \<b>distance: \</b>${distance}\</div>
                    \<div> \<b>idea: \</b>${XORcontextprospective(context,prospective,distance)}\</div>
                    \<div> \<b>idea (UTF8): \</b>${stringifyHex(XORcontextprospective(context,prospective,distance))}\</div>

            \</div>
                      `,
  objectDefs : `let toscreen = document.getElementById("${name}toscreen");


  function ${name}_left_click(){
    let tel = document.getElementById('${name}_content');
    let ymsg
    if(tel.style.display=='none'){
        tel.style.cssText += ' display:grid;'
        let xpmsg = {"jsonrpc":"2.0","method":"XPANDALL","params":{"toggle":"true","to":["_"+String(hexifyString('context'))+"_"+String(XORcontextprospective(hexifyString('context'),"${context}"))],"from":"${name}"}};
        send(xpmsg);
      }
    else{
        tel.style.cssText += ' display:none;'
        let collmsg = {"jsonrpc":"2.0","method":"COLLAPSEALL","params":{"toggle":"true","to":["_"+String(hexifyString('context'))+"_"+String(XORcontextprospective(hexifyString('context'),"${context}"))],"from":"${name}"}};
        send(collmsg);
    }
  }
  document.getElementById("${name}_left").addEventListener("click",${name}_left_click);

let leftOffset = -14;
let metaLeftOffset = -14;

/********************************************************************************/

let hasChildren = false


let isTop = false;
function setTop(val){
  if (val){
    isTop = true;
  }
  else {
    isTop = false;
  }
}




function ${name}_content_hover(e){
    send({"jsonrpc":"2.0","method":"setLayoutState","params":{"setting":"isFixed","flag":true,"to":[parentcontextManId],"from":"${name}"}})
    if (!(isHidden)){
      send({"jsonrpc":"2.0","method":"HOVERING","params":{"to":[parentcontextManId],"from":"${name}"}})
    }
}
document.getElementById("${name}_content").addEventListener("mouseover",${name}_content_hover);
send({"jsonrpc":"2.0","method":"addideatoMetaManContext","params":{"prospective":"${prospective}","fromParent":true,"to":["_"+ metaooManagerProspective + "_" + XORcontextidea(metaooManagerProspective,metaooManagerProspective,metaoodistance)],"from":"${name}"}});




let parentcontextManId = thisContextMan
function ${name}_scroll(e){
  if (e.deltaY >0){
    send({"jsonrpc":"2.0","method":"ShiftUp","params":{context:"${context}","to":[parentcontextManId],"from":"${name}"}});
  }
  else {
    send({"jsonrpc":"2.0","method":"ShiftDown","params":{context:"${context}","to":[parentcontextManId],"from":"${name}"}});
  }
}
document.getElementById("${name}").addEventListener("wheel",${name}_scroll);

function ${name}_content_mouseout(e){
    if (!(isHidden)){
      send({"jsonrpc":"2.0","method":"MOUSEOUT","params":{context:"${context}","to":[parentcontextManId],"from":"${name}"}})
    }
}
document.getElementById("${name}_content").addEventListener("mouseout",${name}_content_mouseout);

/********************************************************************************/


                let filterObj = {};
                let filterchain = ['0x0000000000000000000000000000000000000000000000000000000000000000']
                let metafilterchain = ['0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff']
                let addressObj = {"0x000000000000000000000000f962a476089faa4c4d447e4e34ba2b52df86ca71":{}}
                let contextObj = {}
                filterColours = {}
                let colours =  ["lightblue","grey","lightblue"]//["grey","tomato","khaki","lightgreen","dodgerblue","plum","black"].reverse();
                let endprospective = '0x0000000000000000000000000000000000000000000000000000000000000000'
                let metaendprospective = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
                let text
                let currentchain
                let createProc = (txt) => {
                  let jel = document.createElement('script');
                   jel.innerHTML = txt;
                  document.body.append(jel);
                }
                //const pause =  sec => new Promise(r => setTimeout(r, 1000 * sec))

                // The filters that define what to look up first are defined here:
                let initfilterDict2 = {fromBlock:"0x0",toBlock:'latest',address:oodaspacev0._address,topics:[[web3.utils.sha3('ValueSignal(address,uint256,uint256,uint256,int256)')],["0x00000000000000000000000058ab48E82cC3aC964967E22b1d3ad87F64065337"],XORcontextidea("0x00000000000000000000000058ab48E82cC3aC964967E22b1d3ad87F64065337",hexifyString("Welcome"),1)]}

                //the filter that gets the "meta" ideas. The code that defines the site:



                // These are presently sent in the startup messages section of this oo.

                `,
  RESULTcases : ``
                    ,
  METHODcases : ` /*


                  newFilter: creates a new filter, consisting a "filler oo" and a "filter oo". Sets them in the layout. A filter id must be of format "_0x000000000000000000000000<ETH address>_0x<64charhex>" Note the ETH address - this is used as the filter director that controls the filter.
                                params:
                                  filter: the id of the new filter
                                  isMeta: is the filter for the base layer [true], or meta.
                  newAddress: notification that a new address is to be put into a one or more of the filters. A new blockchain filter is prepared to retrieve any value signals from this new address, for all the contexts on record (in contextObj).
                                params:
                                    address: the address to add.
                  newContext:  Informs the filter curator of a new context. This is needed because, when a new address is added in any filter, a blockchain filter must be added for all the existing contexts in the layout.  This requests a new blockchain filter for all the known addressses, for teh new context.
                                params:
                                    context: the context to add
                  */

                  case 'newFilter':
                  //creates a new filter, consisting a "filler oo" and a "filter oo". Sets them in the layout. The fillers are just to ensure that the prospective of the next filter is an ethereum address.
                //  debugger;
                    if (!(msg.params.filter in filterObj)){
                            filterObj[msg.params.filter] = {};
                            filterColours[msg.params.filter] = colours.pop()
                            //if filter doesn't already exist, spawn filter...
                            if (msg.params.isMeta){
                              // if new filter is for the meta layer, put in filler oometa layer
                              send({"jsonrpc":"2.0","method":"spawnFiller","params":{"context":String(metaendprospective),"prospective":msg.params.filter.split('_')[1],"distance":1,"isMeta":true,"to":[txtToOOId('Spawner')],"from":"${name}"}})
                              metafilterchain.push(msg.params.filter.split('_')[1]);
                              metafilterchain.push(msg.params.filter.split('_')[2]);
                              currentchain = metafilterchain
                              send({"jsonrpc":"2.0","method":"MOVEX","params":{"x":String(metaLeftOffset),"to":['_'+String(metaendprospective)+'_'+String(msg.params.filter.split('_')[1])],"from":"${name}"}});
                            }
                            else {
                              // if new filter is for the base layer, put filler oo in base layer layer
                              send({"jsonrpc":"2.0","method":"spawnFiller","params":{"context":String(endprospective),"prospective":msg.params.filter.split('_')[1],"distance":1,"isMeta":false,"to":[txtToOOId('Spawner')],"from":"${name}"}})
                              filterchain.push(msg.params.filter.split('_')[1]);
                              filterchain.push(msg.params.filter.split('_')[2]);
                              currentchain = filterchain
                              send({"jsonrpc":"2.0","method":"MOVEX","params":{"x":String(leftOffset),"to":['_'+String(endprospective)+'_'+String(msg.params.filter.split('_')[1])],"from":"${name}"}});
                            }

                            // tracks the current x position of the end of the filter chain in the layout.
                            if (msg.params.isMeta){
                              metaLeftOffset += 35.5;
                            }
                            else {
                              leftOffset += 35.5;
                            }

                            let name = String(msg.params.filter);

                            // put filter oo in meta/base layer as per isMeta flag
                            if (msg.params.isMeta){
                                send({"jsonrpc":"2.0","method":"spawnFilter","params":{"context":msg.params.filter.split('_')[1],"prospective":msg.params.filter.split('_')[2],"distance":0,"isMeta":true,"to":[txtToOOId('Spawner')],"from":"${name}"}})
                                send({"jsonrpc":"2.0","method":"setColour","params":{"colour":filterColours[msg.params.filter],"to":['_'+String(metaendprospective)+'_'+String(msg.params.filter.split('_')[1])],"from":"${name}"}});
                                metaendprospective = msg.params.filter.split('_')[2];
                            }
                            else {
                              send({"jsonrpc":"2.0","method":"spawnFilter","params":{"context":msg.params.filter.split('_')[1],"prospective":msg.params.filter.split('_')[2],"distance":0,"isMeta":false,"to":[txtToOOId('Spawner')],"from":"${name}"}})
                                send({"jsonrpc":"2.0","method":"setColour","params":{"colour":filterColours[msg.params.filter],"to":['_'+String(endprospective)+'_'+String(msg.params.filter.split('_')[1])],"from":"${name}"}});
                                endprospective = msg.params.filter.split('_')[2];
                            }

                            //inform filter and curators of colour scheme. move the filter
                            send({"jsonrpc":"2.0","method":"setColour","params":{"colour":filterColours[msg.params.filter],"to":[String(msg.params.filter)],"from":"${name}"}});
                            if(!(msg.params.isFilter)){
                                  send({"jsonrpc":"2.0","method":"setColours","params":{"filterColours":filterColours,"to":[txtToOOId("contextCurator")],"from":"${name}"}});
                            }


                            if (msg.params.isMeta){
                              send({"jsonrpc":"2.0","method":"MOVEX","params":{"x":String(metaLeftOffset),"to":[String(msg.params.filter)],"from":"${name}"}});
                              metaLeftOffset += 35.5;
                            }
                            else {
                              send({"jsonrpc":"2.0","method":"MOVEX","params":{"x":String(leftOffset),"to":[String(msg.params.filter)],"from":"${name}"}});
                              leftOffset += 35.5;
                            }
                            // the currentchain keeps a list of the filter and filter oos in the current base layout. Here, a refresh of the currentchain in all of the current fillers/filter oo is initiated. As will as a x-axis positioning refresh.
                            for (let i=0;i<currentchain.length-2;i++){
                                send({"jsonrpc":"2.0","method":"setChild","params":{"child":String('_'+String(currentchain[i+1])+'_'+String(currentchain[i+2])),"to":['_'+String(currentchain[i])+'_'+String(currentchain[i+1])],"from":"${name}"}})
                            }



                            // inform new filter of which contexts must be tracked, so it can request a new filter from the contract manager.
                            for (t in contextObj){
                                  send({"jsonrpc":"2.0","method":"newContext","params":{"context":String(t),"to":[String(msg.params.filter)],"from":"${name}"}})
                            }
                            if (msg.params.isMeta){
                                send({"jsonrpc":"2.0","method":"setChild","params":{"child":txtToOOId("metaFilterInput"),"to":['_'+String(currentchain[currentchain.length-2])+'_'+String(currentchain[currentchain.length-1])],"from":"${name}"}})
                                setTimeout(function () {
                                  // forces refresh of oo positions - bug fix for meta layer.
                                  send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":-49.5,"to":['_'+String(currentchain[0])+'_'+String(currentchain[1])],"from":"${name}"}})
                                }, 100);
                            }
                            else {
                                send({"jsonrpc":"2.0","method":"setChild","params":{"child":txtToOOId("filterInput"),"to":['_'+String(currentchain[currentchain.length-2])+'_'+String(currentchain[currentchain.length-1])],"from":"${name}"}})
                            }
                            send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":-49.5,"to":['_'+String(currentchain[0])+'_'+String(currentchain[1])],"from":"${name}"}})

                    } //end of if new filter !exists
                    break;
                    case 'newAddress':
                          //notification that a new address is to be put into a one or more of the filters. A new blockchain filter is prepared to retrieve any value signals from this new address, for all the contexts on record (in contextObj).
                          if (!(msg.params.address in addressObj)){
                                // if not filter for address not already installed
                                addressObj[msg.params.address] = {}
                                if (Object.keys(contextObj).length>0){
                                    // new filter prepared and send for the new address for each existing context
                                    let filterDict = {fromBlock:"0x0",toBlock:'latest',address:oodaspacev0._address,topics:[[web3.utils.sha3('ValueSignal(address,uint256,uint256,uint256,int256)')],msg.params.address,Object.keys(contextObj)]}
                                    send({"jsonrpc":"2.0","method":"newFilter","params":{"filterDict":filterDict,"to":[txtToOOId("web3wsManager")],"from":"${name}"}}) //new filter to install in web3
                                }
                            }
                    break;
                 case 'newContext':
                          //Informs the filter curator of a new context. This is needed because, when a new address is added in any filter, a blockchain filter must be added for all the existing contexts in the layout.
                          contextObj[msg.params.context] = {};
                          for (f in filterObj){
                            // inform all of the filters of the new context.
                            msg.params.to = [f];
                            msg.params.from = "${name}";
                            send(msg)
                          }
                          if (Object.keys(addressObj).length>0){
                            //This requests a new blockchain filter for all the known addressses, for the new context.
                            let filterDict = {fromBlock:"0x0",toBlock:'latest',address:oodaspacev0._address,topics:[[web3.utils.sha3('ValueSignal(address,uint256,uint256,uint256,int256)')],Object.keys(addressObj),msg.params.context]}
                            send({"jsonrpc":"2.0","method":"newFilter","params":{"filterDict":filterDict,"to":[txtToOOId("web3wsManager")],"from":"${name}"}})
                          }
                          break;


                      /********************************************************************************/

                   case "shiftBackAsIdea":

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
                          //if has children, get right dim of self and inform context manager to shift back.

                      break;

                      case 'setDistanceAsIdea':
                          if (distance != msg.params.distance){
                                distance = msg.params.distance;
                                send({"jsonrpc":"2.0","method":"INTERPRET","params":{"idea":XORcontextprospective(context,prospective,distance),"context":"${context}","prospective":"${prospective}","to":[txtToOOId("contentGetter")],"from":"${name}"},"id":"INTERPRET"});
                              }

                          break;


                          /********************************************************************************/
                      `,
  STARTUPmessages : `[ {"jsonrpc":"2.0","method":"newFilter","params":{"filterDict":initfilterDict2,"isMeta":false,"filter":"_0x00000000000000000000000058ab48E82cC3aC964967E22b1d3ad87F64065337_"+String(XORcontextidea("0x00000000000000000000000058ab48E82cC3aC964967E22b1d3ad87F64065337",hexifyString("Welcome"),1)),"to":[txtToOOId("web3wsManager"),txtToOOId("logSorter"),txtToOOId("filterCurator")],"from":"${name}"}}]`,
  context: context,
  prospective: prospective

}

return base_template(filterCurator_outerTemplateObj);
}
