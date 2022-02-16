


// umu ---> m
//google --> l
// '' -->''
// ggoo --> ''

function get(s){
  if(s.length<1){
    return '';
  }
  const map = new Map();

  for(let i =0;i<s.length;i++){
    if(!map.has(s[i])){
      map.set(s[i],1);
    }else{
      map.set(s[i],map.get(s[i])+1);
    }
  }
  for(let item of map.entries()){
    if(item[1]===1){
      return item[0]
    }
  }
  return '';
}

console.log(get('umu'));


let set =new Set();
set.add(1)
set.add(2)
