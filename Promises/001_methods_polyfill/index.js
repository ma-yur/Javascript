// promise.all
/* 
1. Takes an iterable of promises as input and returns a  single Promise.
2. This returned promise fulfills when all of the input's promises fulfill
  (including when an empty iterable is passed), with an array of the fulfillment values.
3. It rejects when any of the input's promises rejects, with this first rejection reason
*/

function promiseAll(promises) {
  const result = []
  let promisesCompleted = 0;
  return new Promise ((resolve,reject){
    promises.forEach((promise,index)=>{
      promise.then((val)=>{
        result[index] = val
        promisesCompleted+=1;
        if(promisesCompleted===promises.length){
          resolve(result)
        }
      }
      ).catch((err)=>reject(err))
    })
  })
}


function task(time){
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{resolve(time)},time)
  })
}