/*
合并两个文件
1. 文科生成绩表
语文 数学  英语  政治
132	143	110	87
...
2. 理科生成绩表
数学	英语	化学	物理
 134	111	87	98  
....

语文 数学  英语  政治	化学	物理
...

\t按列分割成绩,成绩两侧可能有空格
可能存在空行和包含制表符的空行,

输入：
["语文	数学	英语	政治", "132	134	110	87", "130	111	109	97", ...]
["数学	英语	化学	物理", "   134   	  111	 87	  98  ", "130	111	109	97", ...]
输出：
["语文	数学	英语	政治	化学	物理", "132	134	110	87	0	0", "0	134	111	0	87	98", ...]

其中科目的内容和数量都是可变的
*/
const mergeGrades = (p, q) => {
  const res = [];
  let p1 = p.shift();
  let q1 = q.shift();
  p1=p1.split(/\t/);
  q1=q1.split(/\t/);
  console.log(p1,q1);
  let arr1 = Array.from(new Set([...p1, ...q1]));
  res.push(arr1);
  let map1 = new Map(),
    map2 = new Map();
  p1.forEach((item) => {
    let index = arr1.indexOf(item);
    if (index > -1) {
      map1.set(item, index);
    }
  })
  arr1.forEach((item) => {
    if (!map1.has(item)) {
      map1.set(item, -1);
    }
  })

  q1.forEach((item) => {
    let index = arr1.indexOf(item);
    if (index > -1) {
      map2.set(item, index);
    }
  })
  arr1.forEach((item) => {
    if (!map2.has(item)) {
      map2.set(item, -1);
    }
  })

  //p
  console.log(p1,'grade');
  p.forEach((item, index) => {
    let grades = item.split(' ');
    let itemAll = [];
    grades.forEach((gradeItem, gradeIndex) => {
      let allKey = map1.get(p1[gradeIndex])
      itemAll[allKey] = gradeItem;
    })
    //补0
    const zerop=[]
    for ( let {key:value} of map1){
      if(value===-1){
        zerop.push(arr1.indexOf(key));
      }
    }
    zerop.forEach(item=>{
      itemAll[item] = 0;
    })
    itemS = itemAll.join(' ');
    res.push(itemS);
  })

  // q
  q.forEach((item, index) => {
    let grades = item.split(' ');
    let itemAll = [];
    grades.forEach((gradeItem, gradeIndex) => {
      let allKey = map1.get(q1[gradeIndex])
      itemAll[allKey] = gradeItem;
    })
    //补0
    const zeroq=[]
    for ( let {key:value} of map2){
      if(value===-1){
        zeroq.push(arr1.indexOf(key));
      }
    }
    zeroq.forEach(item=>{
      itemAll[item] = 0;
    })
    itemS = itemAll.join(' ');
    res.push(itemS);
  })

  return res;
}

console.log(mergeGrades(["语文	数学	英语	政治", "132	134	110	87", "130	111	109	97"],["数学	英语	化学	物理", "134 111	87 98 ", "130	111	109	97"]))