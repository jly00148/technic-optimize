var obj = {name:'jly',age:18,sex:'man'}

// 1.for ... in ...
for(var i in obj){
    
    console.log(i,obj[i])
    // name jly
    // age 18
    // sex man
}

// 2.Object.keys() or Object.values()