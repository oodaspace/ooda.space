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
let metalogo_proc = function(context,prospective,distance,name="metalogo",_class='meta'){
  name = String(name)
let description = `Is the logo on the meta layer.`
let metalogo_outerTemplateObj = {
  name: `${name}`,
  distance: `${distance}`,
  class: `${_class}`,
  content: `<style>
                #${name}_content {display:grid;min-width:0px;width:0px;border:0px;overflow:unset;}
                #${name}_title {display:grid;grid-template: 20px 40px auto auto / auto;max-height: 125px;}
                #${name}filter {display:flex;overflow: scroll;scrollbar-width: none;grid-area:1 / 1 /2 / 2;padding:5px;justify-self:center;}
                #${name}filter::-webkit-scrollbar {width: 0px;height:0px;}
                #${name}idea {font-size:20px; text-align: center;align-self: center;grid-area: 2 / 1 / 5 / 2;font-family:courier;position:relative;left:36px;width: 400px;text-align: left;top: -28.5px;}
                #${name}idea::-webkit-scrollbar {width: 0px;height:0px;}
                #${name}filtername {display:flex;font-size:30px;padding:3px;overflow: scroll;scrollbar-width: none;grid-area:2 / 1 / 3 / 2;justify-self:center;align-self:start;}
                #${name}filtername::-webkit-scrollbar {width: 0px;height:0px;}
                #${name}_leftSignalMask {display:none;}
                #${name}_rightSignalMask {display:none;}
                #${name}metatext {color: green;}
                #${name}initoo {grid-template: auto / auto;background-color:transparent;display:grid;position:absolute;pointer-events:none;left:-24px;top:calc(100vh - 329px);}
            </style>
            \<div id="${name}_title">

            \<div id="${name}idea">|||<b>ooda.space</b>|||<text id='${name}metatext'>meta</text> </div>

            <div id="${name}initoo">
                        <svg viewBox="-1 -1 66 66" width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                                          <g transform="rotate(0,32,32)">
                                                <path stroke-width="2" stroke="black" fill="white" d="M12.5 12.5  A32 32 45 0 1 51.5 12.5">
                                                </path>
                                          </g>
                                          <g transform="rotate(0,32,32)">
                                                <path stroke-width="2" stroke="black" fill="white" d="M12.5 51.5 A32 32 0 0 0 51.5 51.5">
                                                </path>
                                          </g>
            <circle fill="black" stroke-width="1" stroke="white" r="27.5" cy="32" cx="32"></circle>
                                          <g>
                                                    <circle fill="black" stroke-width="1" stroke="white" r="12.5" cy="32" cx="12.5"></circle>
                                          </g>

                                          <g>
                                                    <circle fill="black" stroke-width="1" stroke="white" r="12.5" cy="32" cx="51.5"></circle>

                                          </g>
                                    </svg>
              </div>
            \</div> `,
  objectDefs : `
  document.getElementById('${name}_left').style.cssText += ' display:none;';
  document.getElementById('${name}_right').style.cssText += ' display:none;';


  document.getElementById("${name}_leftSignalMask").style.cssText += ' display: none;'
  document.getElementById("${name}_rightSignalMask").style.cssText += ' display: none;'
  let hasFilter = true;
  isHidden = false;
  stopInitalIconRequest = true;




  `,
  RESULTcases : ``
                    ,
  METHODcases : ``,
  STARTUPmessages : `[ {"jsonrpc":"2.0","method":"HIDEADDRESSES","params":{"to":["${name}"],"from":"${name}"}},{"jsonrpc":"2.0","method":"SHOW","params":{"to":["${name}"],"from":"${name}"}},{"jsonrpc": "2.0", "method": "createSVG", "params": {"context": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff","idea": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff","prospective": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff","idea": "0x0000000000000000000000000000000000000000000000000000000000000000","hideIdea":false,"to":[txtToOOId("IconCreator")],"from":"${name}"},"id": "ICON" },{"jsonrpc":"2.0","method":"MOVE","params":{"x":String(-75),"y":String(-40),"to":["${name}"],"from":"${name}"}}]`,
  context: context,
  prospective: prospective

}
return base_template(metalogo_outerTemplateObj);
}
