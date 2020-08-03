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
let logSorter_proc = function(context,prospective,distance,name="logSorter",_class='meta'){
let description = `Receives logs,formats and sends`
let logSorter_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
                #${name}title {display:flex;flex-direction:column;max-height: 125px;font-family:lucida console;word-break: break-all;}
                #${name}toscreen {overflow: scroll;scrollbar-width: none;}
                #${name}overlayBottom {    font-size: 12px;  text-align: center; align-items: end;   padding: 4px; width: 300px; align-self: end;  background-color: #eee; justify-content: center;}
            </style>
            \<div id="${name}title">
                    <div id="${name}overlayBottom"> <i>\<b>logSorter\</b> </i></div>
                    \<div> ${description}\</div>
                    \<div> \<b>context: \</b>${context}\</div>
                    \<div> \<b>prospective: \</b>${prospective}\</div>
                    \<div> \<b>distance: \</b>${distance}\</div>
                    \<div> \<b>idea: \</b>${XORcontextprospective(context,prospective,distance)}\</div>
                    \<div> \<b>idea (UTF8): \</b>${stringifyHex(XORcontextprospective(context,prospective,distance))}\</div>

            \</div>
                      `,
  objectDefs : `let toscreen = document.getElementById("${name}toscreen");


  /********************************************************************************/ //handles this oo's layout in meta mode.

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
              //send({"jsonrpc":"2.0","method":"UPDATEPOSITIONS","params":{"to":[parentcontextManId],"from":"${name}"}});
              //send({"jsonrpc":"2.0","method":"SHOWALL","params":{context:"${context}","to":[parentcontextManId],"from":"${name}"}})
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

        function ${name}_left_click(){
          let tel = document.getElementById('${name}_content');
          let ymsg
          if(tel.style.display=='none'){
              tel.style.cssText += ' display:grid;'
              let xpmsg = {"jsonrpc":"2.0","method":"XPANDALL","params":{"toggle":"true","to":["_"+String(hexifyString('context'))+"_"+XORcontextprospective(hexifyString('context'),"${context}",1)],"from":"${name}"}};
              send(xpmsg);
            }
          else{
              tel.style.cssText += ' display:none;'
              let collmsg = {"jsonrpc":"2.0","method":"COLLAPSEALL","params":{"toggle":"true","to":["_"+String(hexifyString('context'))+"_"+XORcontextprospective(hexifyString('context'),"${context}",1)],"from":"${name}"}};
              send(collmsg);
          }
        }
        document.getElementById("${name}_left").addEventListener("click",${name}_left_click);

  /********************************************************************************/

                // logSorterObj: the object used to track value signals, derived from logs.
                let logSorterObj = {}
                logSorterObj['urlContexts'] = {};
                logSorterObj['filterContexts'] = [];
                logSorterObj['filters'] = [];
                logSorterObj['Up'] = "0x114b34b7e79f9bc25710583b64dfdc20ad17f62ef834351320bc9a59edcd16f9";//"0xfe8de7d43091c71bd4e1242db84aa68e72a44484db3dafb693e865c23e24a4a3"
                logSorterObj['Down'] = "0x71692217016403eb4d1438f6603fcc8e64e47905e9759c6a7fb377e977fe4cba";
                logSorterObj['addressObj'] = {};
                logSorterObj['filterAddressObj'] = {};

                function CombineObjects(A, B) {
                    // This combines two objects, it's used when the updated version of the contextObj (describing state of all the ideas managed by this context) is received. Maybe some scope for optimisation as some ideas never change and so don't need to be iterated through
                      for (let item in B) {
                            try {
                                if (typeof B[item] === 'object' && !!B[item] || typeof B[item] === 'function') {
                                    A[item] = CombineObjects(A[item], B[item]);
                                } else {
                                    A[item] = B[item];
                                }
                            } catch(err) {
                                A[item] = B[item];
                            }
                        }
                    return A;
                }


  `,
  RESULTcases : `
                /* DOWORK: receives responses from the webworker. The sorting operations are sent to a webWorker and received back sorted here. The updated logSorterObj array is combined with the old version.

                */
                case 'DOWORK':
                  logSorterObj =  CombineObjects(logSorterObj,msg.result.resultObj);// {...logSorterObj, ...msg.result.resultObj};//
                break;
  `
                    ,
  METHODcases : `

                /* newURLContexts: tells the logsorter to look for URL chunks under this context. These are then sent to the contentGetter for data retrieval.
                   eventLogs: A message containing event logs from blockchain. Prepares a function to send to the webworker for sorting of the logs. Constructs the logSorterObj based on the events. Decides whether it is relevant to and address (I.e. a value singal for a member of a filter) or a idea (i.e. a value signal for one of the oos in the layout) and forwards the signals on to the filters.
                   newFilter: informs the logsorter that there is a new filter for the layout. So the logSorter can forward value signals to it.
                   newAddressInFilter: informs the logSorter that there is a new address in one of the filterst (params.filter). It will look through its record and if that address has already been used (in logSorterObj.addressObj) then logsorter sends the value signal info it already has, for each idea.
                   getAddressAmounts: A request for the value signal amounts recorded for a given address (parms.address), replies with logSorterObj.addressObj[params.address]
                   getAddressAmountsForContext: A request for the value signal amounts recorded for each known address for a geven context (params.context), replies with logSorterObj.addressObj[params.address][params.context]
                */

                case 'newURLContexts':
                    // tells the logsorter to look for URL chunks under this context. These are then sent to the contentGetter for data retrieval.
                    msg.params.urlcontexts.forEach( (t) => {
                          logSorterObj.urlContexts[t] = {};
                    })
                break;

                case 'eventLogs':

                    //A message containing event logs from a blockchain (Ethereum). Prepars a function "func" to send to the webworker for sorting of the logs. Constructs the logSorterObj based on the events. Decides whether it is relevant to and address (I.e. a value singal for a member of a filter) or a idea (i.e. a value signal for one of the oos in the layout) and forwards the signals on to the filters.
                    let logs = msg.params.logs[0];
                    let argstr = ['logSorterObj','logs']
                    let func = \`
                        let metatthisprospective = XORcontextidea('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',hexifyString('this'),0)
                        let metathisooManagersprospective = metatthisprospective//'0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'// XORcontextidea(metatthisprospective,hexifyString('oo'),1)
                        function txtToOOId(txt){
                          return '_' + metathisooManagersprospective + '_' + XORcontextidea(metathisooManagersprospective,hexifyString(txt),1)
                        }
                        let outMsgs = []
                        for (let i=0;i<logs.length;i++){
                            let lg = logs[i];
                            let context = lg.topics[2];
                            let prospective = lg.topics[3];
                            let address = lg.topics[1].toLowerCase();
                            let amt = parseInt(lg.data);
                            if (context in logSorterObj.urlContexts){
                                outMsgs.push({"jsonrpc": "2.0", "method": "URLchunk",params:{"log":lg,"to":[txtToOOId("contentGetter")], "from": "${name}"}});
                            }
                            else {
                                  if (!(address in logSorterObj.addressObj)){
                                    logSorterObj.addressObj[address] = {"total":amt,"updated":true}
                                  }
                                  else {
                                    logSorterObj.addressObj[address].total += amt;
                                    logSorterObj.addressObj[address].updated  = true;
                                  }
                                  if (!(context in logSorterObj.addressObj[address])){
                                    logSorterObj.addressObj[address][context] = {"total":amt}
                                  }
                                  else {
                                    logSorterObj.addressObj[address][context].total  += amt
                                  }
                                  if (!(prospective in logSorterObj.addressObj[address][context])){
                                    logSorterObj.addressObj[address][context][prospective] = {"total" : amt}
                                    logSorterObj.addressObj[address][context][prospective]["prop"] = logSorterObj.addressObj[address][context][prospective].total/logSorterObj.addressObj[address][context].total
                                  }
                                  else {
                                    logSorterObj.addressObj[address][context][prospective].total += amt
                                    logSorterObj.addressObj[address][context][prospective]["prop"] = logSorterObj.addressObj[address][context][prospective].total/logSorterObj.addressObj[address][context].total
                                  }
                                  let signal = (lg.topics[0] == logSorterObj.Up) ? "Up" : "Down";
                                  for (let f of logSorterObj.filters){
                                      if (isAddress(XORcontextprospective(context,prospective,2)) && (address ==  f.split('_')[1].toLowerCase())){
                                            outMsgs.push({"jsonrpc": "2.0", "method": "SignalAddress",params:{"group":"originBlkchnEvent","context": context, "prospective": prospective,"address": address,"amt": logSorterObj.addressObj[address][context][prospective].total, "to":[f], "from": "${name}"}});
                                      }
                                      else {
                                          if (Object.keys(logSorterObj.filterAddressObj).length > 0){
                                                  if (address in logSorterObj.filterAddressObj[f]){
                                                    for (let t in logSorterObj.addressObj[address]){
                                                        if (t == lg.topics[2]){
                                                          outMsgs.push({"jsonrpc": "2.0", "method": "SignalIdea",params:{"group":"originBlkchnEvent","context": t, "address": address,"prospectiveObj":logSorterObj.addressObj[address][t], "to":[f], "from": "${name}"}});
                                                        }
                                                    }
                                                  }
                                            }
                                      }
                                    }
                                }
                              }
                              return [logSorterObj,outMsgs,"${name}"]
\`

                if (logs.length > 0){
                  send({"jsonrpc":"2.0","method":"DOWORK","params":{"data":[argstr,func,[logSorterObj,logs],"${name}"],"to":[txtToOOId("webWorker")],"from":"${name}"}})
                }

                break;
                case 'newFilter':
                        //informs the logsorter that there is a new filter for the layout. So the logSorter can forward value signals to it.
                        logSorterObj.filterContexts.push(msg.params.filter.split('_')[2]);
                        logSorterObj.filters.push(msg.params.filter);
                        logSorterObj['filterAddressObj'][msg.params.filter] = {};
                break;

                case 'newAddressInFilter':
                      // informs the logSorter that there is a new address in one of the filters (params.filter). It will look through its record and if that address has already been used (in logSorterObj.addressObj) then logsorter sends the value signal info it already has, for each idea.
                      if (!(msg.params.filter in logSorterObj.filterAddressObj)){
                        logSorterObj.filterAddressObj[msg.params.filter] = {}
                      }
                      if (!(msg.params.filterAddress in logSorterObj.filterAddressObj[msg.params.filter])){
                        logSorterObj.filterAddressObj[msg.params.filter][msg.params.filterAddress] = {}
                      }

                      for (let f of logSorterObj.filters){
                            if (msg.params.address in logSorterObj.filterAddressObj[f]){
                                      if (!(msg.params.address in logSorterObj.addressObj)){
                                            logSorterObj.addressObj[msg.params.address] = {"total":0,"updated":true}
                                      }
                                      for (let t in logSorterObj.addressObj[msg.params.address]){
                                          if (t != 'total' && t != 'updated'){
                                                send({"jsonrpc": "2.0", "method": "SignalIdea",params:{"group":"originBlkchnEvent","context": t, "address": msg.params.address,"prospectiveObj":logSorterObj.addressObj[msg.params.address][t], "to":[f], "from": "${name}"}});
                                          }
                                      }
                            }
                      }
                break;
                case 'getAddressAmounts':
                    // A request for the value signal amounts recorded for a given address (parms.address), replies with logSorterObj.addressObj[params.address]
                    if (msg.params.address in logSorterObj.addressObj)
                    {

                          send({"jsonrpc": "2.0", "result": {"address" : msg.params.address,"contextProspectiveAmtObj": logSorterObj.addressObj[msg.params.address], "to":[msg.params.from], "from": "${name}"}, "id": msg.id});
                          logSorterObj.addressObj[msg.params.address].updated  = false;

                    }
                break;

                case 'getAddressAmountsForContext':
                    //A request for the value signal amounts recorded for each known address for a geven context (params.context), replies with logSorterObj.addressObj[params.address][params.context]
                    if (msg.params.address in logSorterObj.addressObj)
                    {
                          send({"jsonrpc": "2.0", "result": {"address" : msg.params.address,"prospectiveAmtObj": logSorterObj.addressObj[msg.params.address][msg.params.context], "to":[msg.params.from], "from": "${name}"}, "id": msg.id});
                          logSorterObj.addressObj[msg.params.address].updated  = false;
                    }
                    else {
                          send({"jsonrpc": "2.0", "result": {"address" : msg.params.address,"prospectiveAmtObj": {}, "to":[msg.params.from], "from": "${name}"}, "id": msg.id});
                    }
                break;

                /********************************************************************************/ //handles positioning in the metalayout

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
  STARTUPmessages : `[]`,
  context: context,
  prospective: prospective

}

return base_template(logSorter_outerTemplateObj);
}
