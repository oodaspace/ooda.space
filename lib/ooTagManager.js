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
let context_proc = function(context,prospective,distance,name="context",_class='meta'){

name = String(name)
let description = `Mangages a oos under a given`
let context_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
                #${name} {display:none;}
                #${name}title {display:grid;grid-template: auto auto / auto;max-height: 125px;}
                #${name}toscreen {overflow: scroll;scrollbar-width: none;}
            </style>
            \<div id="${name}title">
                    \<div> \<b>${name}: \</b>${description}\</div>
                    \<div id="${name}//toscreen">\</div>
            \</div>
                      `,
  objectDefs : `


  /********************************************************************************/ // thissection handles events for this oo's representation in the meta layer

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
    if(tel.style.display=='none' || tel.style.display==' none'){

        send({"jsonrpc":"2.0","method":"CLICK-Xpand","params":{"to":[parentcontextManId],"from":"${name}"}})
      }
    else{
        send({"jsonrpc":"2.0","method":"CLICK-Collapse","params":{"to":[parentcontextManId],"from":"${name}"}})
    }
  }
  document.getElementById("${name}_left").addEventListener("click",${name}_left_click);


  function ${name}_onresize(){

    let y = window.innerHeight-420;

      send({"jsonrpc":"2.0","method":"SetTopOffset","params":{"to":["${name}"],"from":"${name}"}})

  }
  window.addEventListener("resize",${name}_onresize);

  /********************************************************************************/

                // Initialisation of contextObj, this contains information on the status of each of the prospectives under the context managed by this process. It also contains some base information (e.g. name of context, totals). A copy of the object is sent to the web worker process when a signal is reveived.
                let contextObj = {}
                contextObj['prospectiveObj'] = {'0x0000000000000000000000000000000000000000000000000000000000000000':{'prop':0,'pend':0,'haschild':false,'x':0,'y':0,'z':0,'childContextMan':null}}
                contextObj['sortedKeys'] = ['0x0000000000000000000000000000000000000000000000000000000000000000']
                contextObj['filterObj'] = {}
                contextObj['contextTotalsPerFilter'] = {};
                contextObj['contextTotal'] = 0;
                contextObj['rankedObj'] = {}
                contextObj['contextObj'] = {} //lists all available contexts
                contextObj['currentprospective'] = "${context}"
                contextObj['filterColours'] = {}
                contextObj['x'] = 0
                contextObj['distance'] = 0;
                contextObj['isMetaMan'] = false;
                contextObj['context'] = "${XORcontextprospective(context,prospective,metaoodistance)}"
                contextObj['isXpanded'] = true;
                contextObj['isOneVisible'] = true;
                contextObj['isAllVisible'] = false;
                contextObj['isFixed'] = false;
                contextObj['XdimChanged'] = true;
                contextObj['isAllHidden'] = false;
                contextObj['topindex'] = 0;
                contextObj['leftOffset'] =-14
console.log('ACTIVITY',contextObj)

                let topOffset = window.innerHeight - 420;//130;
                let yinc = topOffset*250000/(1000000-(topOffset*topOffset));  // sets y-bounds for layout.
                if (yinc<20){yinc=20}
                if (yinc >125){yinc=125}
                let colWidth = 368;
                let contextPendTotal = 0;
                distance = 0  // n.b initiated in base template so 'let not required'
                let maxProp = 0;
                let y_,z_;
                isInit = true;
                let ancestorObj = {'0x0000000000000000000000000000000000000000000000000000000000000000':true}  // this object tracks the ancestors, used to prevent circular references, updated by setAncestors case.
                let timeout
                let scrolltimeout
                let layoutState = 'atFront' // or atRear or atFore
                let prevtopprospective = "0x0000000000000000000000000000000000000000000000000000000000000000"
                let atTop_layoutSubState = 'oneXpanded';//'allXpanded' //oneXpanded // oneCollapsed
                let isScrolling = false;
                let updatetimeout
                let isUpdating = false;


                function reCalcPositions(postNewIdeaAtFront = false){
                      // This function goes through the list of prospectives and sets the y and z positions, based on the sorted list contextObj.sortedKeys, it starts at the top index, which indicated the index in the sorted list which is top in the current layout.

                      let kj = contextObj.topindex; // set index for for loop:
                      contextObj.rankedObj = {}     // clear array to remove state from last layout recalc:
console.log('recalc',contextObj.sortedKeys)
                      // Loop through each of the prospectives
                      for (let i = 0; i < contextObj.sortedKeys.length; i++) {
                                    let h = contextObj.sortedKeys[i];
                                    contextObj.rankedObj[kj] = h
                                    z_ = -1*200*Math.abs(kj); // calculate z position (apperent distance on screen)
                                    y_ = (topOffset - yinc*kj*(Math.pow(0.9,Math.abs(kj))));  // calculate y position (apperent height on screen)
                                    if(kj==0){
                                          // this means that h is the prospective at the top of the layout, for this context (contextObj.context), messages to update its status are sent
                                          send({"jsonrpc": "2.0", "method": "SHOW", "params": {"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}})
                                          send({"jsonrpc":"2.0","method":"setRank","params":{"rank":i+1,"ranktotal":contextObj.sortedKeys.length-1,"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}});
                                          send({"jsonrpc":"2.0","method":"shiftBackAsIdea","params":{"x":contextObj.leftOffset,"y":String(y_),"z":String(z_),"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}shiftbackasidea1"}});
                                          if (contextObj.prospectiveObj[h].haschild){
                                            // inform descendents that they are at the top of the layout
                                            send({"jsonrpc":"2.0","method":"atFront","params":{"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}reCalcPositions1"}})
                                            send({"jsonrpc":"2.0","method":"SHIFTYZ","params":{"y":y_,"z":z_,"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}});
                                          }
                                          // set the currentprospective to h, for reference elsewhere in this context manager processs
                                          contextObj.currentprospective = h;
                                          contextObj['topIdea'] = h
                                    }
                                    else if (kj > 0) {
                                                  // this means that h is at the rear of the layout, so may still be visible depending on user.
                                                  if (!isUserInteracting){
                                                        send({"jsonrpc": "2.0", "method": "HIDE", "params": {"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}})
                                                  }
                                                  if (contextObj.prospectiveObj[h].haschild){
                                                    send({"jsonrpc":"2.0","method":"atRear","params":{"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}});
                                                    send({"jsonrpc":"2.0","method":"SHIFTYZ","params":{"y":y_,"z":z_,"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}});
                                                  }
                                                send({"jsonrpc":"2.0","method":"shiftBackAsIdea","params":{"x":contextObj.leftOffset,"y":String(y_),"z":String(z_),"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}shiftbackasidea2"}});
                                    }
                                    else if (kj < 0) {
                                        // this means that h is "in front" of the layout, so is never visible to the user
                                        send({"jsonrpc": "2.0", "method": "HIDE", "params": {"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}})
                                        if (contextObj.prospectiveObj[h].haschild){
                                          z_ = z_*-1;
                                          send({"jsonrpc":"2.0","method":"atFore","params":{"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}});
                                        }

                                      }
                                    // move on to the next item in the sortedKeys list
                                    kj++;
                                    contextObj.prospectiveObj[h].y = y_;
                                    contextObj.prospectiveObj[h].z = z_;
                      }
                      if (contextObj.currentprospective != "0x0000000000000000000000000000000000000000000000000000000000000000"){
                          prevtopprospective = contextObj.currentprospective;
                      }


                }




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



    // Add the receiver will drop duplicate messages (oldest first) for methods in dropObj:
    dropObj['UPDATEPOSITIONS']= true;




    // hides all the oos aside from the one currenly at the front, and the input (has prospective 0x000...)
    function hideAllButTop(){
      for (let h in contextObj.prospectiveObj){
          if (h!=contextObj.currentprospective && h!="0x0000000000000000000000000000000000000000000000000000000000000000") {
                send({"jsonrpc":"2.0","method":"HIDE","params":{"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}HIDEALLBUTTOP"}});
                if (contextObj.prospectiveObj[h].haschild){
                      // informs descendents that parent is hidden (so they can hide too)
                      send({"jsonrpc":"2.0","method":"parentHidden","params":{"val":true,"width":64,"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}HIDEALLBUTTOP1"}});
                }
          }
          else {
              // tells top oo too show
              send({"jsonrpc":"2.0","method":"SHOW","params":{"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}HIDEALLBUTTOP"}});
          }
      }
    }

    // Expands all the oos aside from the one currenly at the front, and the input (has prospective 0x000...)
    function XpandTop(){
        send({"jsonrpc":"2.0","method":"XPAND","params":{"to":["_"+String(contextObj.context)+"_"+String(contextObj.currentprospective)],"from":"${name}XpandTop"}})
        colWidth = 368
        if (contextObj.prospectiveObj[contextObj.currentprospective].haschild){
          // informs descendents that x position of parent may have changed (so they can move too)
              send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":contextObj['leftOffset'] + colWidth-29,"to":[contextObj.prospectiveObj[contextObj.currentprospective].childContextMan],"from":"${name}HIDEALLBUTTOP1"}});
        }
    }

    // Collapses the oo aside currently at the front, and the input (has prospective 0x000..., and stays visible)
    function collapseTop(){
        send({"jsonrpc":"2.0","method":"COLLAPSE","params":{"to":["_"+String(contextObj.context)+"_"+String(contextObj.currentprospective)],"from":"${name}XpandTop"}})
        send({"jsonrpc":"2.0","method":"COLLAPSE","params":{"to":["_"+String(contextObj.context)+"_"+"0x0000000000000000000000000000000000000000000000000000000000000000"],"from":"${name}XpandTop"}})
        colWidth = 64
        if (contextObj.prospectiveObj[contextObj.currentprospective].haschild){
              // informs descendents that x dims of parent may have changed (so they can move too)
              send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":contextObj['leftOffset'] + colWidth-29,"to":[contextObj.prospectiveObj[contextObj.currentprospective].childContextMan],"from":"${name}"}});
            }
    }


    // Hides all the oos
    function hideAll(){
      for (let h in contextObj.prospectiveObj){
          send({"jsonrpc":"2.0","method":"HIDE","params":{"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}});
          if (contextObj.prospectiveObj[h].haschild){
                // informs descendents that parent is hidden (so they can hide themselves too)
                send({"jsonrpc":"2.0","method":"parentHidden","params":{"val":true,"width":colWidth,"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}});
          }
      }
    }

// Hides all the oos
function XpandAll(){
  for (let h in contextObj.prospectiveObj){
      colWidth = 368
      send({"jsonrpc":"2.0","method":"XPAND","params":{"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}});
      if (contextObj.prospectiveObj[h].haschild){
            // informs descendents that x dims of parent may have changed (so they can move)
            send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":contextObj['leftOffset'] + colWidth-29,"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}});
          }
    }
}

// Show all the oos, cycles through rankedObj (contains oos indxed by ranking) to avoid showing oos that are currently "in front" of the layout.
function showAll(){
      for (let r in contextObj.rankedObj){
          if (r>=0){
                let h = contextObj.rankedObj[r]
                send({"jsonrpc":"2.0","method":"SHOW","params":{"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}});
                if(r!=0){
                    if (contextObj.prospectiveObj[h].haschild){
                      send({"jsonrpc":"2.0","method":"atRear","params":{"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}});
                    }
                }
                else {
                    if (contextObj.prospectiveObj[h].haschild){
                      send({"jsonrpc":"2.0","method":"atFront","params":{"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}});
                    }
                }
          }
      }
}

// Sets the y and z positions of top, called as a result of a screen resize for example, or layout recalculation
function setYZPositionofTop(y,z){
  contextObj.y=y
  contextObj.z=z
    if(z==0){
        send({"jsonrpc": "2.0", "method": "SHOWADDRESSES", "params": {"to":["_"+String(contextObj.context)+"_"+String(contextObj.currentprospective)],"from":"${name}"}})
    }
    if(z==-200){
        // this means oo has transitioned to "rear" of layout, where its addresses are not shown.
        send({"jsonrpc": "2.0", "method": "HIDEADDRESSES", "params": {"to":["_"+String(contextObj.context)+"_"+String(contextObj.currentprospective)],"from":"${name}"}})
    }
    send({"jsonrpc":"2.0","method":"MOVEYZ","params":{"y":y,"z":z,"to":["_"+String(contextObj.context)+"_"+String(contextObj.currentprospective)],"from":"${name}"}});
    if (contextObj.prospectiveObj[contextObj.currentprospective].haschild){
        send({"jsonrpc":"2.0","method":"SHIFTYZ","params":{"y":y,"z":z,"to":[contextObj.prospectiveObj[contextObj.currentprospective].childContextMan],"from":"${name}"}});
    }
}


// This is a fallback function to make sure layout correctly renders if a msg gets dropped somewhere. It recalculates the layout after a timeout - called following a user event (hover or click). A candidate for removal!
let isUserInteracting = false;
let usertimeout
let updateReady = false
function setUserInteracting(){
      isUserInteracting = true;
      clearTimeout(usertimeout);
      usertimeout = setTimeout(function () {
          isUserInteracting = false;
          if (updateReady){

            if(contextObj.isFixed){

              contextObj.topindex = -1*contextObj.sortedKeys.indexOf(contextObj.currentprospective)
            }
            else {
              contextObj.topindex = 0
            }
            reCalcPositions()
          }
      }, 1000);
}


// This tells the input utility oo to go into a loading state, called when receiving messages updating the order of the ideas (from webworker oo), intended to be called during intialisation and loading of the oos for this context.
let loadingtimeout
function setLoadingIcon(){
    send({"jsonrpc": "2.0", "method": "LOADINGSTATE", "params": {"to":["_"+String(contextObj.context)+"_"+String('0x0000000000000000000000000000000000000000000000000000000000000000')],"from":"${name}"}})
    send({"jsonrpc": "2.0", "method": "MOVEX", "params": {"x":contextObj.leftOffset,"to":["_"+String(contextObj.context)+"_"+String('0x0000000000000000000000000000000000000000000000000000000000000000')],"from":"${name}"}})
    send({"jsonrpc": "2.0", "method": "SHOW", "params": {"to":["_"+String(contextObj.context)+"_"+String('0x0000000000000000000000000000000000000000000000000000000000000000')],"from":"${name}"}})
    send({"jsonrpc": "2.0", "method": "MOVEYZ", "params": {"y":topOffset,"z":0,"to":["_"+String(contextObj.context)+"_"+String('0x0000000000000000000000000000000000000000000000000000000000000000')],"from":"${name}"}})
    loadingtimeout = setTimeout(function () {
        // recalc layout in case of droppped msg
        reCalcPositions()
    }, 20000);
}


// This tells the input utility oo to go back to normal state, called after ideas have finished loading. Cancels peding layout recalcs and does ~immediately.
function loadingComplete(){
    clearTimeout(loadingtimeout)
    send({"jsonrpc": "2.0", "method": "CLEARLOADINGSTATE", "params": {"to":["_"+String(contextObj.context)+"_"+String('0x0000000000000000000000000000000000000000000000000000000000000000')],"from":"${name}"}})
    if(contextObj.isFixed){
        contextObj.topindex = -1*contextObj.sortedKeys.indexOf(contextObj.currentprospective)
    }
    else {
        contextObj.topindex = 0
    }
    reCalcPositions() //could do alternative - animate position update func
}

// moves the layout to and oo with prospective specified. Updates the topindex.
function gotoprospective(hk){
  contextObj.topindex = -1*contextObj.sortedKeys.indexOf(hk)
  reCalcPositions()
}

let awaitingWork = false;
let pendingMsgs = []
                  `,
  RESULTcases : `

                /* DOWORK: receives responses from the webworker. The sorting operations are sent to a webWorker and received back sorted here. The updated contextObj array (contains info on status of each oo) is combined with the old version. If no new messages received for ~ 1s then loading is assumed to be complete and the loading status is cleared.
                */

                case 'DOWORK':
                  setTimeout(function () {
                      clearTimeout(updatetimeout);
                      // isUpdating initialised to false.
                      if(!isUpdating){
                        setLoadingIcon();
                        isUpdating = true;
                      }

                      contextObj =  CombineObjects(contextObj,msg.result.resultObj);// {...contextObj, ...msg.result.resultObj};

                      if (pendingMsgs.length >0){
                        let msg = pendingMsgs.reverse().pop()
                        msg.params.data[2][0] = contextObj
                        send(msg)
                      }
                      else {
                        awaitingWork = false
                      }
                      updatetimeout = setTimeout(function () {
                      isUpdating = false;

                        loadingComplete();
                      }, 750);
                  }, 200);
                break;

                `
                    ,
  METHODcases : `
                /*
                    setMetaManStatus: sets this oo manager as a manager of oos in meta_mode. Notifies child oos and sends spawn request for input oo under this context.
                    setDepth:   sets distance of all children oos. Note the distance of this, in meta mode, is 2. The distance is the "distance" of and oo from the root (root is 0x0000000000000000000000000000000000000000000000000000000000000000 in base and 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff in meta). The distance is used in the XOR calcs to get a idea from a context and a prospective.
                    TAGS:       updates the context object, informs input oo of ancesters (to avoid name conflicts)
                    SHIFTYZ:    calls a function that sets the xY position of the top child, and informs the child context manager.
                    newIdea:   creates a new idea (sends to spawner), places in next to last rank (input idea is last). used the input oo to create a idea when enter is pressed.
                    gotoprospective:   goes to the oo with the prospective in the msg param.
                    gotoprevprospective:  puts the last front prospective back at the front.
                    addideatoMetaManContext: adds a prospective to the contextObj, every context manaager calls this (sending to the meta context manager) on start up. So the contextmanagers can be presented in the meta layout.
                    Signal:     This message contains a signal originating from a public blockchain transaction. It is sent from a filter, indicating what proportion of that filter has signalled value in this idea. From here a function is sent to a webworker, along witht he contextObj and the signal details so that a new sort operation takes place in parallel.
                    ShiftUp:    shifts the ideas up, towards front, in the layout
                    ShiftDown:  shifts the ideas down, towards rear, in the layout
                    ShiftLeft:  shifts the ideas left to a specified pixel setting, tells idea to the right in layout to also ShiftLeft
                    shiftBack:   moves the ideas back, unused?
                    atFront:    sets the layout state to at fron't. updates the child ideas based on the atTop_layoutSubState (set elsewhere)
                    atRear     sets the layout state to at rear. informs the top child
                    atFore      sets the layout state to at fore.this is invisible, so hideAll func called.
                    parentHidden     an instruction to say that the parent of this context manageer is hidden. hideAll called.
                    MOUSEOUT   called when the mouse goes out from the top idea under this context. hideAllButTop called.
                    HOVERING    called when the mouse goes out hovers over the top idea under this context. showAll called.
                    CLICK-Xpand  called when the mouse clicks the left side of the top idea under this context, if it was collapsed. XpandTop called.
                    CLICK-collapse  called when the mouse clicks the left side of the top idea under this context, if it was xpanded. collapseTop called.
                    newContext      notification of new context, this is tracked to be able to send ShiftLeft msgs if required.
                    SetTopPos   sets Y position of all the ideas
                    SetTopOffset  re-calibrates y distance between ideas (usually after screen resize), recalcs layou
                    addtoContextPendingTotal  If transaction has been sent- it's amount is notified here
                    setColours  instruction to tell ideas of the filter colour scheme
                    SetLeftPos sets left offset position
                    setDepthAsIdea: Used to set the distance of this oo. Used to workout the code for interpretting.
                    setAncestors: sends the ancestors object of to child idea and the input oo (to avoid name clashes)
                    refreshTopLeftPositions  called to refresh the left position of the top oo and children
                    shiftBackAsIdea Used to set the position of this oo in the meta layout.
                */



                case 'setMetaManStatus':
                  //sets this as a manager of ideas in meta_mode
                  if(msg.params.left) contextObj['leftOffset'] = msg.params.left;
                  if (msg.params.isForMeta){
                      contextObj.isMetaMan = true;
                      for (let h in contextObj.prospectiveObj) {
                            send({"jsonrpc":"2.0","method":"setMetaStatus","params":{"isForMeta":true,"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}});
                      }
                    }
                    else {
                      contextObj.isMetaMan = false;
                      for (let h in contextObj.prospectiveObj) {
                            send({"jsonrpc":"2.0","method":"setMetaStatus","params":{"isForMeta":false,"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}});

                      }
                    }
                    if (!contextObj.isMetaMan){
                      send({"jsonrpc":"2.0","method":"spawnInput","params":{"context":contextObj.context,"distance":distance,"x":contextObj['leftOffset'],"to":[txtToOOId('Spawner')],"from":"${name}___1"}})
                    }
                    else {
                      send({"jsonrpc":"2.0","method":"spawnInput","params":{"context":contextObj.context,"distance":distance,"x":contextObj['leftOffset'],"_class":'meta',"to":[txtToOOId('Spawner')],"from":"${name}___2"}})
                      XpandAll()
                    }
                break;

                case 'setDepth':
                    //sets distance of all children oos. Note the distance of this, in meta mode, is 2. The distance is the "distance" of and oo from the root (root is 0x0000000000000000000000000000000000000000000000000000000000000000 in base and 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff in meta). The distance is used in the XOR calcs to get a idea from a context and a prospective.
                    contextObj.distance = msg.params.distance;

                    for (let h in contextObj.prospectiveObj) {

                         send({"jsonrpc":"2.0","method":"setDepthAsIdea","params":{"distance":msg.params.distance,"fromParent":true,"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}});
                             if(contextObj.prospectiveObj[h].haschild){
                                 send({"jsonrpc":"2.0","method":"setDepth","params":{"distance":Number(msg.params.distance)+1,"fromParent":true,"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}});

                             }

                         }
                         send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":-14,"fromParent":true,"to":["_0x30326d6d6d111111111111111111111111111111111111111111111111657076_0xd8c0c9b5b5b444444444444444444444444444444444444444444444444595c1"],"from":"${name}"}})
                break;


                case 'TAGS':
                    //updates the context object, informs input oo of ancesters (to avoid name conflicts)
                    contextObj.contextObj = msg.params.contexts
                    send({"jsonrpc":"2.0","method":"setAncestors","params":{"ancestorObj":contextObj.contextObj,"to":["_"+String(contextObj.context)+"_"+String("0x0000000000000000000000000000000000000000000000000000000000000000")],"from":"${name}"}});

                break;

                case 'SHIFTYZ':
                      // calls a function that sets the xY position of the top child, and informs the child context manager.
                      setYZPositionofTop(msg.params.y,msg.params.z)

                break;


                case 'newIdea':
                  // creates a new idea (sends to spawner), places in next to last rank (input idea is last). used the input oo to create a idea when enter is pressed.
                  if (!(String(msg.params.prospective) in contextObj.prospectiveObj)){
                    let ideaname = '_'+String(contextObj.context)+'_'+String(msg.params.prospective)

                              if (contextObj.isMetaMan || msg.params.isForMeta){
                                  send({"jsonrpc":"2.0","method":"spawn","params":{"context":String(contextObj.context),"prospective":String(msg.params.prospective),"x":contextObj['leftOffset'],"distance":msg.params.distance,"_class":'meta',"name":ideaname,"to":[txtToOOId('Spawner')],"from":"${name}___3"}})
                              }
                              else {
                                  send({"jsonrpc":"2.0","method":"spawn","params":{"context":String(contextObj.context),"prospective":String(msg.params.prospective),"x":contextObj['leftOffset'],"distance":msg.params.distance,"name":ideaname,"to":[txtToOOId('Spawner')],"from":"${name}___4"}})
                              }

                    contextObj.prospectiveObj[msg.params.prospective] = {'prop':0,'pend':0,'haschild':false,'x':0,'y':0,'z':0,'childContextMan':null};

                    contextObj.sortedKeys[contextObj.sortedKeys.length-1] = msg.params.prospective
                    contextObj.sortedKeys.push('0x0000000000000000000000000000000000000000000000000000000000000000')

                    gotoprospective(msg.params.prospective)
                    contextObj.currentprospective = msg.params.prospective
                  }


                break;

                case 'gotoprospective':
                    //finds where the sent prospective is, puts it at top.
                    prevtopprospective = contextObj.currentprospective;
                    gotoprospective(msg.params.prospective);
                    contextObj.currentprospective = msg.params.prospective
                    send({"jsonrpc":"2.0","method":"atRear","params":{"to":[contextObj.prospectiveObj[prevtopprospective].childContextMan],"from":"${name}___4"}})

                break;

                case 'gotoprevprospective':
                    //puts the last front prospective back at the front.
                    if(layoutState == 'atFront'){
                        gotoprospective(prevtopprospective);
                        contextObj.currentprospective = prevtopprospective
                    }
                    if (msg.params.dontshowrear){
                      for (let h in contextObj.prospectiveObj) {
                          if (h!=prevtopprospective)
                                 if(contextObj.prospectiveObj[h].haschild){
                                     send({"jsonrpc":"2.0","method":"parentHidden","params":{"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}});
                                 }
                           }
                    }
                break;

                case 'addideatoMetaManContext':
                  //adds a prospective to the contextObj, every context manaager calls this (sending to the meta context manager) on start up. So the contextmanagers can be presented in the meta layout.
                  contextObj.prospectiveObj[msg.params.prospective] = {'prop':0,'pend':0,'haschild':false,'x':0,'y':0,'z':0,'childContextMan':null};

                  contextObj.sortedKeys[contextObj.sortedKeys.length-1] = msg.params.prospective
                  contextObj.sortedKeys.push('0x0000000000000000000000000000000000000000000000000000000000000000')
                  prevtopprospective = msg.params.prospective
                  contextObj.currentprospective = prevtopprospective
                  contextObj.sortedKeys=contextObj.sortedKeys.sort().reverse()
                  let ind = contextObj.topindex
                  contextObj.rankedObj = {}
                  for (let i = 0; i < contextObj.sortedKeys.length; i++) {
                    let h = contextObj.sortedKeys[i];
                    contextObj.rankedObj[ind] = h
                    ind++
                  }
                  reCalcPositions();

                break;


                case 'Signal':
                    // This message contains a signal originating from a public blockchain transaction. It is sent from a filter, indicating what proportion of that filter has signalled value in this idea. From here a function is sent to a webworker, along witht he contextObj and the signal details so that a new sort operation takes place in parallel.
                    if ((!contextObj.isMetaMan && !msg.params.isFromMetaFilter) || (contextObj.isMetaMan && msg.params.isFromMetaFilter)){

                              // One of the filters has sent a signal to a idea under this context

                              let argstr = ['contextObj','args'];

                              // a function to send to a webworker:
                              let func = \`

                              let filter = args[0];
                              let context = args[1];
                              let msgprospectiveObj = args[2];
                              let outMsgs = []
                              let maxProp=0

                              for (let h in msgprospectiveObj){
                                      if (String(h).length > 15){
                                          if (!(String(h) in contextObj.prospectiveObj)){
                                            let ideaname = '_'+String(contextObj.context)+'_'+String(h)
                                            if (contextObj.isMetaMan){
                                                outMsgs.push({"jsonrpc":"2.0","method":"spawn","params":{'context':String(contextObj.context),'prospective':String(h),"distance":contextObj.distance,"_class":'meta',"x":contextObj['leftOffset'],'name':ideaname,"to":["_0x6d6d6d1111111111111111111111111111111111111111111111111165797862_0xc63a3a344444444444444444444444444444444444444444444e2a486b78294f"],"from":"${name}___5"}})
                                                // NOte "_0x30326d6d6d111111111111111111111111111111111111111111111165797862_0xcce4a63a3a34444444444444444444444444444444444444444e2a486b78294f" is "Spawner"
                                              }
                                              else {
                                                outMsgs.push({"jsonrpc":"2.0","method":"spawn","params":{'context':String(contextObj.context),'prospective':String(h),"distance":contextObj.distance,"x":contextObj['leftOffset'],'name':ideaname,"to":["_0x6d6d6d1111111111111111111111111111111111111111111111111165797862_0xc63a3a344444444444444444444444444444444444444444444e2a486b78294f"],"from":"${name}___6"}})
                                              }
                                            contextObj.prospectiveObj[h] = {'prop':0,'pend':0,'haschild':false,'x':0,'y':0,'z':0,'childContextMan':null};
                                            outMsgs.push({"jsonrpc":"2.0","method":"setColours","params":{"filterColours":contextObj.filterColours,"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}","class":'originBlkchnEvent'}});
                                            outMsgs.push({"jsonrpc":"2.0","method":"MOVEX","params":{"x":contextObj['leftOffset'],"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}});
                                          }
                                          contextObj.prospectiveObj[h][filter] = msgprospectiveObj[h].prop;
                                  }
                              }

                              // prepare to normalise the proportions
                              for (let h in contextObj.prospectiveObj){
                              contextObj.prospectiveObj[h]['prop']=0;
                                      for (let f in contextObj.prospectiveObj[h]){
                                        if (f.length > 15){
                                          contextObj.prospectiveObj[h]['prop'] += contextObj.prospectiveObj[h][f]
                                        }
                                      }
                                }
                              for (let h in contextObj.prospectiveObj){
                                    if (contextObj.prospectiveObj[h]['prop'] > maxProp){
                                      maxProp = contextObj.prospectiveObj[h]['prop']; //+=
                                    }
                                }

                              if  (maxProp >0){

                                        for (let h in contextObj.prospectiveObj){
                                              contextObj.prospectiveObj[h].prop = contextObj.prospectiveObj[h].prop/maxProp
                                              outMsgs.push({"jsonrpc":"2.0","method":"Signal","params":{"group":"originBlkchnEvent","filterObj":contextObj.prospectiveObj[h],"maxProp":maxProp,"to":['_'+String(contextObj.context)+'_'+String(h)],"from":"${name}"}})
                                              // do sort here:


                                          }
console.log('ACTIVITY',contextObj)
                                    let keys = Object.keys(contextObj.prospectiveObj);
                                    contextObj.sortedKeys = keys.sort(function(a, b) {return contextObj.prospectiveObj[b].prop - contextObj.prospectiveObj[a].prop});
                                    //if (contextObj.isMetaMan){ //handles the case where this is the manager for the meta layout context for the precesses making up the website.
                                        // swap 0x0000000000000000000000000000000000000000000000000000000000000000 to last - makes sure the input oo ranks last as layout system relies on that. In the metat-man case there are oos with no value signals - the one's representing the oos spawned in this web-session, a unique case handled here.
                                        let inputindex = contextObj.sortedKeys.indexOf('0x0000000000000000000000000000000000000000000000000000000000000000')
                                        if (inputindex != contextObj.sortedKeys[contextObj.sortedKeys.length-1]){
                                            contextObj.sortedKeys[inputindex] = contextObj.sortedKeys[contextObj.sortedKeys.length-1]
                                            contextObj.sortedKeys[contextObj.sortedKeys.length-1] = "0x0000000000000000000000000000000000000000000000000000000000000000"
                                        }
                                    //}

                                }


                                return [contextObj,outMsgs,"${name}"]

                                \`


                                                if (awaitingWork){
                                                    pendingMsgs.push({"jsonrpc":"2.0","method":"DOWORK","params":{"data":[argstr,func,[contextObj,[msg.params.filter,msg.params.context,msg.params.prospectiveObj]],"${name}"],"to":[txtToOOId("webWorker")],"from":"${name}"}})
                                                }
                                                else {
                                                      send({"jsonrpc":"2.0","method":"DOWORK","params":{"data":[argstr,func,[contextObj,[msg.params.filter,msg.params.context,msg.params.prospectiveObj]],"${name}"],"to":[txtToOOId("webWorker")],"from":"${name}"}})
                                                      awaitingWork = true
                                                }


                                              //timetot += (Date.now() - time0);

                      }
                    break;

                    case 'ShiftUp':
                    //shifts the ideas up, towards front, in the layout
                                  isScrolling = true;
                                  clearTimeout(scrolltimeout);
                                  scrolltimeout = setTimeout(function () {
                                      isScrolling = false;
                                  }, 1000);

                                  contextObj['isFixed'] = true;
                                  if (Math.abs(contextObj.topindex) < Object.keys(contextObj.prospectiveObj).length-2 ){
                                        contextObj.topindex--
                                        reCalcPositions()

                                    }
                                  break;

                      case 'ShiftDown':
                                  //shifts the ideas down, towards rear, in the layout
                                  isScrolling = true;

                                  clearTimeout(scrolltimeout);
                                  scrolltimeout = setTimeout(function () {
                                      isScrolling = false;
                                  }, 1000);
                                  contextObj['isFixed'] = true;
                                        if (Math.abs(contextObj.topindex) > 0){
                                          contextObj.topindex++;
                                          reCalcPositions()
                                        }
                      break;
                      case 'ShiftLeft':
                              // shifts the oos left, and tells child oos so they move can too.
                              contextObj['leftOffset'] = msg.params.left;
                                 for (let h in contextObj.prospectiveObj) {
                                            send({"jsonrpc":"2.0","method":"MOVEX","params":{"x":contextObj['leftOffset'],"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}ShiftLeft"}});
                                            if(contextObj.prospectiveObj[h].haschild){
                                                send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":contextObj['leftOffset'] + colWidth-29,"fromParent":true,"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}});
                                            }
                                      }
                      break;

                      case 'shiftBack':
                            //shifts the oos back, unused?
                              contextObj['y'] = msg.params.y;
                              contextObj['z'] = msg.params.z;
                              contextObj['x'] = msg.params.x;
                               for (let h in contextObj.prospectiveObj) {
                                        if (h==contextObj.currentprospective){
                                                send({"jsonrpc":"2.0","method":"shiftBackAsIdea","params":{"x":contextObj.leftOffset,"y":String(msg.params.y),"z":String(msg.params.z),"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}shiftbackasidea3"}});
                                          }
                                      }
                      break;

                      case 'atFront':
                        //sets the layout state to at fron't. updates the child ideas based on the atTop_layoutSubState (set elsewhere)
                        layoutState = 'atFront'
                            switch (atTop_layoutSubState) {
                              case 'allXpanded':
                                    // don't need to do anyidea as all already visible only set from scroll after hover.
                                    XpandAll();
                                    showAll();
                                break;
                                case 'oneXpanded':
                                      hideAllButTop();
                                      XpandTop();
                                  break;
                                case 'oneCollapsed':
                                      hideAllButTop();
                                      collapseTop()
                              default:
                                      hideAllButTop();
                                      XpandTop();
                            }
                            if (contextObj.prospectiveObj[contextObj.currentprospective].haschild){
                              send({"jsonrpc":"2.0","method":"atFront","params":{"to":[contextObj.prospectiveObj[contextObj.currentprospective].childContextMan],"from":"${name}"}})
                            }
                      break;

                      case 'atRear':
                            //sets the layout state to at rear. informs the top child
                            layoutState = 'atRear'
                            hideAllButTop();
                            collapseTop();
                            if (contextObj.prospectiveObj[contextObj.currentprospective].haschild){
                              send({"jsonrpc":"2.0","method":"atRear","params":{"to":[contextObj.prospectiveObj[contextObj.currentprospective].childContextMan],"from":"${name}"}})
                            }
                            send({"jsonrpc": "2.0", "method": "HIDE", "params": {"to":["_"+String(contextObj.context)+"_"+ "0x0000000000000000000000000000000000000000000000000000000000000000"],"from":"${name}"}}); // hide input if at rear
                        break;

                        case 'atFore':
                              //sets the layout state for the group of oos under this context to at fore.this is invisible, so all oos must be hidden
                              layoutState = 'atFore'
                              hideAll();
                              for (let h in contextObj.prospectiveObj) {
                                       if(contextObj.prospectiveObj[h].haschild){
                                           send({"jsonrpc":"2.0","method":"atFore","params":{"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}});
                                   }
                               }
                        break;

                   case 'parentHidden':
                              //an instruction to say that the parent of this context (contextObj.context) is hidden.
                              hideAll();
                              if (msg.params.width){
                                colWidth = msg.params.width
                              }
                    break;

                  case 'MOUSEOUT':
                          //called when the mouse goes out from the top idea under this context. hideAllButTop called.
                          hideAllButTop();
                          atTop_layoutSubState  = 'oneXpanded'
                  break;

                  case 'HOVERING':
                        // called when the mouse goes out hovers over the top idea under this context. showAll called.
                        setUserInteracting()
                        clearTimeout(timeout)
                        XpandAll();
                        showAll();
                        atTop_layoutSubState  = 'allXpanded'
                        contextObj['isFixed'] = true;
                  break;

                  case 'CLICK-Xpand':
                      //called when the mouse clicks the left side of the top idea under this context, if it was collapsed.
                      setUserInteracting()
                      XpandTop();
                      atTop_layoutSubState  == 'oneXpanded'
                      contextObj['isFixed'] = true;
                  break;

                  case 'CLICK-Collapse':
                        // called when the mouse clicks the left side of the top idea under this context, if it was xpanded.
                        setUserInteracting()
                        collapseTop();
                        atTop_layoutSubState  = 'oneCollapsed'
                        contextObj['isFixed'] = true;
                  break;

                  case 'SetLeftPos':
                    contextObj['leftOffset'] = msg.params.left;
                  break;

                  case 'newContext':
                        //notification of new context, this is tracked to be able to send child oos msgs if required.
                        for (let h in contextObj.prospectiveObj){
                          if (h == msg.params.context){
                            contextObj.prospectiveObj[h].haschild = true;
                            contextObj.prospectiveObj[h].childContextMan = '_' + metaooManagerProspective + '_' + XORcontextidea(metaooManagerProspective,h,metaoodistance);
                            send({"jsonrpc":"2.0","method":"setasContext","params":{"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}})

                          }
                        }
                  break

                  case 'SetTopOffset':
                        //re-calibrates y distance between ideas (usually after screen resize), recalcs layou
                        topOffset = window.innerHeight - 420;
                        yinc = topOffset*250000/(1000000-(topOffset*topOffset));
                        if (yinc<20){yinc=20}
                        if (yinc >125){yinc=125}
                        reCalcPositions()
                  break;

                  case 'addtoContextPendingTotal':
                      //If transaction has been sent- it's amount is notified here
                      contextPendTotal -= Math.abs(contextObj.prospectiveObj[msg.params.prospective].pend)
                      contextPendTotal += Math.abs(msg.params.amt)
                      contextPendTotal = Math.round(contextPendTotal)
                      contextObj.prospectiveObj[msg.params.prospective].pend = Math.round(msg.params.amt);
                      for (let h in contextObj.prospectiveObj){
                            send({"jsonrpc":"2.0","method":"setContextPendingTotal","params":{"amt":contextPendTotal,"to":["_"+String(msg.params.context)+"_"+String(h)],"from":"${name}"}})
                      }
                  break;

                  case 'setColours':
                        // instruction to tell oos of the filter colour scheme
                        contextObj.filterColours = msg.params.filterColours
                        for (let h in contextObj.prospectiveObj){
                          send({"jsonrpc":"2.0","method":"setColours","params":{"filterColours":contextObj.filterColours,"to":["_"+String(contextObj.context)+"_"+String(h)],"from":"${name}"}});
                        }
                  break;

                  case 'setAncestors':
                        //sends the ancestors object of to child idea and the input oo (to avoid name clashes)
                        ancestorObj = msg.params.ancestorObj;
                        ancestorObj[contextObj.context] = true;
                        send({"jsonrpc":"2.0","method":"ancestorObj","params":{"ancestorObj":ancestorObj,"to":["_"+String(contextObj.context)+"_"+String("0x0000000000000000000000000000000000000000000000000000000000000000")],"from":"${name}"}});
                        for (let h in contextObj.prospectiveObj){
                            if(contextObj.prospectiveObj[h].haschild){
                                send({"jsonrpc":"2.0","method":"ancestorObj","params":{"ancestorObj":ancestorObj,"to":[contextObj.prospectiveObj[h].childContextMan],"from":"${name}"}})
                            }
                        }
                  break;

              /********************************************************************************/

               case "shiftBackAsIdea":
                      // Used to set the position of this oo in the meta layout.
                      // relay MOVEYZ to self
                      send({"jsonrpc":"2.0","method":"MOVEXYZ","params":{"x":msg.params.x,"y":msg.params.y,"z":msg.params.z,"to":["${name}"],"from":"${name}contextman"}});
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

                  case 'setDepthAsIdea':
                      // Used to set the distance of this oo. Used to workout the code for interpretting.
                      if (distance != msg.params.distance){
                            distance = msg.params.distance;
                            send({"jsonrpc":"2.0","method":"INTERPRET","params":{"idea":XORcontextprospective(context,prospective,distance),"context":"${context}","prospective":"${prospective}","to":[txtToOOId("contentGetter")],"from":"${name}"},"id":"INTERPRET"});
                      }
                  break;
                  /********************************************************************************/

                      `,
  STARTUPmessages : `[{"jsonrpc":"2.0","method":"SetTopOffset","params":{"to":["${name}"],"from":"${name}"}}]`,
  context: context,
  prospective: prospective

}

return base_template(context_outerTemplateObj);
}
