const puppy=require("puppeteer");                        

const id= "kolal26670@animex98.com";                                                                       //login credentials
const password="Random69";

async function main(){
    let browser=await puppy.launch({
        headless:false,
        defaultViewport:false,
        args: ["--disable-notifications"]
    });
    let tabs=await browser.pages();
    let tab=tabs[0];
    await tab.goto("https://www.google.com");                                                              //open google chrome
    await tab.click(".pR49Ae.gsfi");
    await tab.type(".pR49Ae.gsfi","zoom");
    await tab.keyboard.press("Enter");
    await tab.waitForSelector(".LC20lb.DKV0Md",{visible: true});
    await tab.click(".LC20lb.DKV0Md");
    await tab.waitForSelector(".signin",{visible: true});
    await tab.click(".signin");
    await tab.waitForSelector(".col-sm-3.col-xs-6.login-btn.login-btn-facebook",{visible: true});          //signing in zomm through facebook login credentials
    await tab.click(".col-sm-3.col-xs-6.login-btn.login-btn-facebook");
    await tab.waitForSelector('input[name="email"]',{visible: true});
    await tab.click('input[name="email"]');
    await tab.type('input[name="email"]',id);
    await tab.type('input[name="pass"]',password);
    await tab.keyboard.press("Enter");
    await tab.waitForSelector(".scheduleameeting.light",{visible: true});                                  //scheduling meeting on zoom
    await tab.click(".scheduleameeting.light");
    await tab.waitForSelector(".sch-desc.form-control",{visible: true});
    await tab.click(".sch-desc.form-control");
    await tab.type(".sch-desc.form-control"," pepcoding meeting ppmar14");
    await tab.waitForTimeout(2000);
    await tab.click(`div`);
    await tab.click(".btn.btn-primary.btn-lg.submit");
    await tab.waitForSelector('a[aria-labelledby="copyInvitation copy-invite-title"]',{visible: true});                                         //coping invitaions links and other data 
    await tab.click('a[aria-labelledby="copyInvitation copy-invite-title"]');
    await tab.screenshot( { path: "C:\\Users\\RHYTHM\\Desktop\\Hackathon\\Project\\screenshot.png"});     // taking screenshots of the same details and storing in the same folder as our code
    await tab.waitForSelector(".btn.btn-primary.select-all",{visible: true});
    await tab.click(".btn.btn-primary.select-all");
    const page = await browser.newPage();                                                                 //moving to new tab  for loging in to the rediit social media
    await page.goto("https://www.google.com");
    await page.click(".pR49Ae.gsfi");
    await page.type(".pR49Ae.gsfi","reddit login");
    await page.keyboard.press("Enter");                                                   
    await page.waitForSelector(".LC20lb.DKV0Md",{visible:true});
    await page.click(".LC20lb.DKV0Md");
    await page.waitForSelector('input[name="username"]',{visible:true});
    await page.type('input[name="username"]',"random__6969");
    await page.type('input[type="password"]',password);
    await page.click(".AnimatedForm__submitButton.m-full-width");                                           //succefully logged in reddit
    await page.waitForNavigation();
    await page.waitForTimeout(3000);
    await page.waitForSelector(".zgT5MfUrDMC54cpiCpZFu",{visible:true});                                    //creating a post in rediit platform to post details of the zoom meeting
    await page.click(".zgT5MfUrDMC54cpiCpZFu");
    await page.waitForSelector(".PqYQ3WC15KaceZuKcFI02._1ec_Oj5SWdypd8L-VELKg-",{visible:true});
    await page.click(".PqYQ3WC15KaceZuKcFI02._1ec_Oj5SWdypd8L-VELKg-");
    await page.type(".PqYQ3WC15KaceZuKcFI02._1ec_Oj5SWdypd8L-VELKg-","hackathon ppmar-14");
    await page.click(".notranslate.public-DraftEditor-content");
    await page.type(".notranslate.public-DraftEditor-content"," welcome to ");
    await page.keyboard.down("Control");
    await page .keyboard.press("V");
    await page.keyboard.up("Control");
    await page.click("._1MHSX9NVr4C2QxH2dMcg4M");
    await page.type("._1MHSX9NVr4C2QxH2dMcg4M","u/random__6969");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    await page.waitForSelector("._18Bo5Wuo3tMV-RDB8-kh8Z._2iuoyPiKHN3kfOoeIQalDT._10BQ7pjWbeYP63SAPNS8Ts.HNozj_dKjQZ59ZsfEegz8",{visible:true});
    await page.click("._18Bo5Wuo3tMV-RDB8-kh8Z._2iuoyPiKHN3kfOoeIQalDT._10BQ7pjWbeYP63SAPNS8Ts.HNozj_dKjQZ59ZsfEegz8")
    await page.waitForTimeout(2000);                                                                       //sucesfuuly created the post on rediit sharing the details of zoom meeting
    const tab_page = await browser.newPage();
    await tab_page.goto("https://www.google.com");                                                         // moving to new web page for creating a post on facebook which includes uploading a screenshot of the same details wwe took while cpying zoom details
    await tab_page.click(".pR49Ae.gsfi");
    await tab_page.type(".pR49Ae.gsfi","facebook login");
    await tab_page.keyboard.press("Enter");
    await tab_page.waitForSelector(".LC20lb.DKV0Md",{visible:true});
    await tab_page.click(".LC20lb.DKV0Md");
    await tab_page.goto("https://www.facebook.com/profile.php?id=100067383890545");
    await tab_page.waitForSelector(`div[style="border-radius: 20px;"]`);
    await tab_page.click(`div[style="border-radius: 20px;"]`);
    await page.waitForTimeout(2000);
    await tab_page.keyboard.down("Control");
    await tab_page.keyboard.press("V");
    await tab_page.keyboard.up("Control");
    const [fileChooser] = await Promise.all([                                                               //uploading the screenshot
        tab_page.waitForFileChooser(),
        tab_page.click('div[aria-label="Photo/Video"]'),                                                   // some button that triggers file selection
      ]);
    await fileChooser.accept(['C:\\Users\\RHYTHM\\Desktop\\Hackathon\\Project\\screenshot.png']);          // path to fetch the screenshot
    await page.waitForTimeout(2000);
    await tab_page.click(".bp9cbjyn.rq0escxv.j83agx80.i1fnvgqd.hv4rvrfc.dati1w0a.discj3wi.k4urcfbm");
    await page.waitForTimeout(2000);
    const page_tab = await browser.newPage();
    await page_tab.goto("https://www.google.com");                                                          //moving to new tab to open whatsapp to share the details of the same
    await page_tab.click(".pR49Ae.gsfi");
    await page_tab.type(".pR49Ae.gsfi","whatsapp web");
    await page_tab.keyboard.press("Enter");
    await page_tab.waitForSelector(".LC20lb.DKV0Md",{visible:true});
    await page_tab.click(".LC20lb.DKV0Md");
    await page_tab.waitForSelector("._2MwRD",{visible:true});
    await page_tab.click("._2MwRD");
    await page_tab.type("._2MwRD","personal");
    await page_tab.keyboard.press("Enter");                                                                // succesfully ping all the details to the meeting
    await page_tab.waitForSelector("._1JAUF._2x4bz", {visible: true});
    await page_tab.click("._1JAUF._2x4bz")
    await page_tab.keyboard.down("Control");
    await page_tab.keyboard.press("V");
    await page_tab.keyboard.up("Control");
    await page_tab.keyboard.press("Enter");
    
} 
main();