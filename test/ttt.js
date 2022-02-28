// const str = '12234abc56712'
// 编写一个函数, 返回字符串中的最长连续递增数字子序, 如上字符串返回结果应该为: '567'
// 时间复杂度优先解

// const func = (s) => {
//   let i = 1,
//     j = 0,
//     result = '';
//   for (i; i < s.length; i++) {
//     if (Number(s[i]) && Number(s[j]) && s[i] > s[i - 1]) {
//       let mid = s.slice(j, i + 1);
//       if (mid.length >= result.length) result = mid;
//     }else{
//       j=i;

//     }
//   }
//   return result;
// }
// const func = (s) => {
//   let i = 1,
//     j = 0,
//     result = '';
//   for (i; i < s.length; i++) {
//     if (Number(s[i]) && Number(s[j]) && s[i] > s[i - 1]) {
//       let mid = s.slice(j, i + 1);
//       if (mid.length >= result.length) result = mid;
//     }else{
//       j=i;

//     }
//   }
//   return result;
// }
const func = (s) => {
  let r = 1,
    l = 0,
    result = '';
  for (r; r < s.length; r++) {
    if (Number(s[r]) && Number(s[l]) && s[r] > s[r - 1]) {
      let mid = s.slice(l, r + 1);
      if (mid.length >= result.length) result = mid;
    } else {
      l = r
    }
  }
  return result;
}
let x = func('12234abc56712')
console.log(x)


let prev = null,curr=head,next=null;
while(curr){
  next=curr.next;
  curr.next=prev;
  prev=curr;
  curr=next;
}
return prev;

if(head ===null)return head;

head.next=removeElements(head.next,val);
return head.val ===val?head.next:head;

if(!root)return [];
const queue=[],res=[];
queue.push(root);
while(queue.length>0){
  const size =queue.length;
  cosnt part=[];
  for(let i =0;i<size;i++){
    let item =queue.shift();
    part.push(item.val);
    if(item.left)queue.push(item.left);
    if(item.right)queue.push(item.right);
  }
  res.unshift(part);
}
return res;

const res =[];
const helper=(node,s)=>{
  if(!node)return s;
  if(!node.left&&!node.right){
    s+=node.val;
    res.push(s);
    return
  }
  s+=node.val+'->';
  helper(node.left,s);
  helper(node.right,s);

}
helper(root,s);
return res;

if(!node)return true;
if(node.val<=lower||node.val>=upper)return false
return helper(node.left,lower,node.val)&&helper(node.right,node.val,upper);
return ;

const helper=(node,p,q)=>{
  if(!node)return node;
  if(node===p||node===q){
    return node;
  }
  let left =helper(node.left,p,q);
  let right=helper(node.right,p,q);
  if(left&&right){
    return node;
  }else if (!left){
    return right;
  }else return left;
}