const {chromium}=require('./test-tools/node_modules/playwright');
(async()=>{
const browser=await chromium.launch({executablePath:'C:/Users/agilb/AppData/Local/ms-playwright/chromium-1187/chrome-win/chrome.exe',headless:true,args:['--enable-webgl','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
try{const page=await browser.newPage({viewport:{width:1000,height:800}});page.on('pageerror',e=>console.log('ERROR',e.message));page.on('requestfailed',r=>console.log('REQUEST',r.url().slice(0,150)));
await page.goto('file:///C:/Users/agilb/Downloads/apresentacao_video_html/produtos/robo-explorador.html',{waitUntil:'domcontentloaded',timeout:60000});
console.log(await page.evaluate(()=>({ready:document.readyState,data:document.getElementById('projectData').textContent.slice(0,200),mono:window.mono?.getStatus(),title:window.mono?.getProject().title,id:window.mono?.getProject().pieces[0].id})));
}finally{await browser.close();}})().catch(e=>{console.error(e.message);process.exitCode=1;});
