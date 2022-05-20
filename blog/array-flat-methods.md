---
slug: array-flat-methods
title: 数组扁平化方法
authors: jsir
tags: [array, flat]
---


### es6 flat(depth)

``` javascript

let a = [1,[2,3]]

a.flat() // [1,2,3]
a.flat(1) // [1,2,3]

```

### for 循环

``` javascript
let a = [1,[2,3]]

function flatten(arr){

  let arr = [];
  for(var i = 0; i<a.length; i++){

    if( Array.isArray(arr[i]) ){
      arr.concat(...arr[i])
    }else{
      arr.push(arr[i])
    }
  }

  return arr;
}


```

### while 循环

``` javascript

let arr = [1,[2,3],[4,5,6]];

function flatten(arr){

  while( arr.some( (item) => Array.isArray(item) )){

    arr = [].concat(...arr);
  }

  return arr;

}

flatten(arr) // [1,2,3,4,5,6]


```


### ES6 reduce


``` javascript

var arr = [1,[2,3],[4,5,6]]

function flatten(arr){

 return arr.reduce((res,current) => {

    return res.concat( Array.isArray(current) ? flatten(current) : current);
    
  },[])

}

console.log(flatten(arr)) // Array [1, 2, 3, 4, 5, 6]
```

### 使用 stack 无限反嵌套多层嵌套数组

``` javascript

var arr = [1,[2,3],[4,5,6]]

function flatten(arr) {
  var stack = [...arr];

  var res = [];
  while(stack.length){
    
    let first = stack.shift();
    if( Array.isArray(first) ){
      stack.unshift(...first);
    }else{
      res.push(first);
    }

  }
  return res;
}

console.log(flatten( arr)) //  Array [1, 2, 3, 4, 5, 6]
```


### 数组全为数字，可以使用join(), toString();

``` javascript
var arr = [1,[2,3],[4,5,6]]
function flatten(arr){
 // return arr.toString().split(',').map(item => +item)

  return arr.join(',').split(',').map(item => +item)
}

console.log(flatten( arr))

```