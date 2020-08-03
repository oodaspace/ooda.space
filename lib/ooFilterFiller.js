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
let filler_proc = function(context,prospective,distance,name="filler",_class='base'){
let description = `filler for filter chain`
let filler_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
                #${name} {display:none;}
                #${name} {z-index: -2} /* tuck behind input dialog (v. slight overlap) */
                #${name}title {display:grid;grid-template: auto auto/ auto;max-height: 150px;}
                #${name}filter {display:flex;overflow: scroll;scrollbar-width: none;grid-area:1 / 1 /2 / 2;padding:5px;justify-self:center;}
                #${name}filter::-webkit-scrollbar {width: 0px;height:0px;}
                #${name}idea {font-size:14px; text-align: center;align-self: center;grid-area: 2 / 1 / 3 / 2;font-family:courier;padding:3px;}
                #${name}idea::-webkit-scrollbar {width: 0px;height:0px;}
                #${name}filtername {display:flex;font-size:30px;padding:3px;overflow: scroll;scrollbar-width: none;grid-area:2 / 1 / 3 / 2;justify-self:center;align-self:start;}
                #${name}filtername::-webkit-scrollbar {width: 0px;height:0px;}
                #${name}_content {min-width:0px;}
                #${name}titleTxt {text-align: center;align-self: center;grid-area: 1 / 1 / 2 / 2;padding:5px;font-family:courier;font-size:16px;font-weight:bold;}
                #${name}directorTxt {text-align: center;align-self: end;grid-area: 2 / 1 / 3 / 2;padding:2px;font-family:courier;}
                #${name}nameTxt {text-align: center;align-self: end;grid-area: 4 / 1 / 6 / 2;padding:2px;font-family:courier;}
                #${name}directorInput {font-size:12px; border:solid 1px black;width:290px;}
                #${name}nameInput {font-size:12px; border:solid 1px black;width:290px;}
            </style>
            \<div id="${name}title">
                \<div id="${name}idea">\</div>
                \<div id="${name}titleTxt">Filter name:</div>

            \</div> `,
  objectDefs : `

           let child
            let leftOffset = -45;
            let colWidth = 0;
            let filtername
            hideBigCircle = true
            // Some reconfiguration of the outer part of the oo:
            document.getElementById('${name}_rank').style.cssText += ' display:none';
            document.getElementById('${name}_ranktotal').style.cssText += ' display:none';

            document.getElementById('${name}_left').style.cssText += ' display: none; top:49px';
            document.getElementById('${name}_right').style.cssText += '  display: none;top:49px';

            document.getElementById('${name}_leftSignalMask').style.cssText += ' display: none; top:37px';
            document.getElementById('${name}_rightSignalMask').style.cssText += '  display: none;top:37px';

            document.getElementById('${name}_upFlagsL').style.cssText += ' display: none; top:37px';
            document.getElementById('${name}_upFlagsR').style.cssText += '  display: none;top:37px';

            // get the ETH address for presentation in the contents div - this is the filter director for the child filter.
            let namen = "${name}"
            let addr = ('0x' + namen.split('_')[2].slice(26)).replace(/(.{7})/g, "$1<br>")

            let nel = document.getElementById("${name}idea");
            nel.innerHTML = String(addr)



            // clicking on left of icon toggles showing of the contentts: an indication of the filter director.
            function ${name}_left_click(){

                        let tel = document.getElementById('${name}_content');

                        if(tel.style.display=='none'){
                            tel.style.cssText += ' display:grid;'
                            send({"jsonrpc":"2.0","method":"XPAND","params":{"to":[child],"from":"${name}"}});
                        }
                        else {
                            tel.style.cssText += ' display:none;'
                            send({"jsonrpc":"2.0","method":"COLLAPSE","params":{"to":[child],"from":"${name}"}});
                        }
                            let width = tel.offsetWidth+35;

                            send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":leftOffset+width,"to":[child],"from":"${name}"}});
            }
            document.getElementById("${name}_left").addEventListener("click",${name}_left_click);

            // clicking on right of icon toggles showing of the contentts: an indication of the filter director.
          function ${name}_right_click(){

                        let tel = document.getElementById('${name}_content');

                        if(tel.style.display=='none'){
                            tel.style.cssText += ' display:grid;'
                            send({"jsonrpc":"2.0","method":"XPAND","params":{"to":[child],"from":"${name}"}});
                        }
                        else {
                            tel.style.cssText += ' display:none;'
                            send({"jsonrpc":"2.0","method":"COLLAPSE","params":{"to":[child],"from":"${name}"}});
                        }
                            let width = tel.offsetWidth+35;
                            send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":leftOffset+width,"to":[child],"from":"${name}"}});
            }
            document.getElementById("${name}_right").addEventListener("click",${name}_right_click);

            // Ensures oo states an coorect position on screen resize.
            function ${name}_onresize(){
                let y = window.innerHeight-235;
                send({"jsonrpc":"2.0","method":"SETY","params":{"y":y,"to":["${name}"],"from":"${name}"}})
            }
            window.addEventListener("resize",${name}_onresize);


  `,
  RESULTcases : ``,
  METHODcases : `
                      /*
                            ShiftLeft: shifts this left to params.left pixels in the layout. Instructs child.
                            refreshFromLeft: prompts this to position itselft according to its position on record.
                            setColour: sets the colour of the out part. for filler and filter oos, this is set to the filter's colour.
                            setChild:  notifies this oo it has a child oo (a filter)
                            setLeft: sets the left amount, but does not update layout.
                      */

                           case 'ShiftLeft':
                                  // ShiftLeft: shifts this left to params.left pixels in the layout. Instructs child.
                                  leftOffset = msg.params.left;
                                  colWidth = 35//document.getElementById('${name}_content').offsetWidth +35
                                  send({"jsonrpc":"2.0","method":"MOVEX","params":{"x":leftOffset,"to":["${name}"],"from":"${name}"}});
                                  send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":leftOffset+colWidth,"to":[child],"from":"${name}"}})
                            break;

                            case 'refreshFromLeft':
                                  colWidth = 35// document.getElementById('${name}_content').offsetWidth +35
                                  send({"jsonrpc":"2.0","method":"MOVEX","params":{"x":leftOffset,"to":["${name}"],"from":"${name}"}});
                                  send({"jsonrpc":"2.0","method":"ShiftLeft","params":{"left":leftOffset+colWidth,"to":[child],"from":"${name}"}})
                            break;

                            case 'setColour':
                                  // sets the filter colour
                                  barColour = msg.params.colour;
                                  document.getElementById('${name}_upFlagsR').style.cssText += ' background-color: ' + barColour;
                                  document.getElementById('${name}_upFlagsL').style.cssText += ' background-color: ' + barColour;
                            break;

                             case 'setChild':
                                  //notifies this oo it has a child oo (a filter)
                                  child = msg.params.child;
                                  send({"jsonrpc":"2.0","method":"setParent","params":{"parent":"${name}","to":[child],"from":"${name}"}})
                                filtername = stringifyHex(child.split('_')[2])
                               document.getElementById("${name}titleTxt").innerHTML = filtername

                            break;

                            case 'setLeft':
                                  //sets the left amount, but does not update layout.
                                  leftOffset = msg.params.left;
                            break;


  `,
  STARTUPmessages : `[{"jsonrpc": "2.0", "method": "HIDEADDRESSES", "params": {"to":["${name}"],"from":"${name}"}},{"jsonrpc":"2.0","method":"SETY","params":{"x":-25,"y":window.innerHeight-235,"to":["${name}"],"from":"${name}"}},{"jsonrpc":"2.0","method":"SHOW","params":{"to":["${name}"],"from":"${name}"}}]`, //must be a list!
  context: context,
  prospective: prospective

}

return base_template(filler_outerTemplateObj);
}
