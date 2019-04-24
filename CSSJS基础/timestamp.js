
//生成时间戳 1554771219
let timestamp=Math.round(new Date()/1000);

let datetime=new Date(timestamp);
//  Mon Jan 19 1970 07:52:51 GMT+0800 (中国标准时间)

let standtime=datetime.toLocaleDateString().replace(/\//g,"-") +" " +datetime.toTimeString().substr(0,8);
console.log(standtime);
