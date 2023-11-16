/**
 * 案例 代码雨
 */
let canvas1:HTMLCanvasElement = document.querySelector('canvas') as HTMLCanvasElement;
let ctx = canvas1.getContext('2d') as CanvasRenderingContext2D;

canvas1.width = screen.availWidth
canvas1.height = screen.availHeight
let str1:string[] = 'XMZFGHJJKKKLL))1'.split('');
let Arr = Array(Math.ceil(canvas1.width / 10)).fill(0);

console.log(Arr);
const rain = () => {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0,0,canvas1.width,canvas1.height);
    ctx.fillStyle = '#0f0';
    Arr.forEach((item,index)=> {
        ctx?.fillText(str1[Math.floor(Math.random() *str1.length)],index* 10,item +10);
        Arr[index] = item > canvas1.height || item > 6000 * Math.random() ? 0 : item +1
    })
}
setInterval(rain,40)