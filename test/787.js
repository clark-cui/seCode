

`
<p><><span>123</span><img id="ROLE_ENG_MAN_SOFT_End"></p>
<p><span>567</span></p>


`
slection insertNode fragment range

class 

new ttsEditor({


})





function curry(fn,len,...outerParams){
  return function (...innerParams){
    let args=[...outerParams,...innerParams];
    if(args>=len)return fn.apply(this,args)
    return curry(fn,len,...[args])
  }
}
