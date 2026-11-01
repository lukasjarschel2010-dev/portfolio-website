/* ---------- Photos ----------
   Put image files in /images and map each slot key to its path, e.g.
     "gearbox-built": "images/gearbox-built.jpg",
   Any key left out shows a striped placeholder instead.
   Keys used: home-classes, home-strengths, home-goals, gearbox-sketch, gearbox-built,
   minibot-frame1, minibot-frame2, minibot-w02, minibot-w06, minibot-w07, minibot-w08,
   minibot-w09, minibot-w11, osha-cert, off-top, off-w02 … off-w12,
   season-w01, season-w02, season-w03, season-w06, season-w07, season-w08, season-w10 */
const IMG = {
  "gearbox-built": "images/gearbox-built.png",
  "gearbox-sketch": "images/gearbox-sketch.png",
  "home-classes": "images/home-classes.jpg",
  "home-goals": "images/home-goals.jpg",
  "home-strengths": "images/home-strengths.png",
  "minibot-frame1": "images/minibot-frame1.jpg",
  "minibot-frame2": "images/minibot-frame2.jpg",
  "minibot-w02": "images/minibot-w02.jpg",
  "minibot-w06": "images/minibot-w06.jpg",
  "minibot-w07": "images/minibot-w07.jpg",
  "minibot-w08": "images/minibot-w08.jpg",
  "minibot-w09": "images/minibot-w09.png",
  "minibot-w11": "images/minibot-w11.jpg",
  "off-top": "images/off-top.png",
  "off-w02": "images/off-w02.png",
  "off-w03": "images/off-w03.png",
  "off-w04": "images/off-w04.png",
  "off-w05": "images/off-w05.jpg",
  "off-w06": "images/off-w06.jpg",
  "off-w07": "images/off-w07.jpg",
  "off-w08": "images/off-w08.jpg",
  "off-w09": "images/off-w09.jpg",
  "off-w10": "images/off-w10.jpg",
  "off-w11": "images/off-w11.jpg",
  "off-w12": "images/off-w12.jpg",
  "osha-cert": "images/osha-cert.png",
  "season-w01": "images/season-w01.jpg",
  "season-w02": "images/season-w02.jpg",
  "season-w03": "images/season-w03.jpg",
  "season-w06": "images/season-w06.jpg",
  "season-w07": "images/season-w07.jpg",
  "season-w08": "images/season-w08.jpg",
  "season-w10": "images/season-w10.jpg",
};
const ORIGINAL = "https://sites.google.com/mvla.net/lukasjarschel/home";
const V = id => "https://drive.google.com/file/d/" + id + "/view?usp=sharing";

function ph(key, label, cls=""){
  if (IMG[key]) return `<div class="ph ${cls}"><img src="${IMG[key]}" alt="${label}" loading="lazy"></div>`;
  return `<div class="ph empty ${cls}"><span class="pl">Photo · ${label}</span></div>`;
}
function fig(key, label, n){
  return `<figure class="${IMG[key]?"natural":""}">${ph(key,label)}<figcaption><b>FIG ${n}</b> · ${label}</figcaption></figure>`;
}

/* ---------- Pages ---------- */
const PAGES = [
  {id:"home", nav:"Home"},
  {id:"robotics-1", nav:"Robotics I", group:true},
  {id:"gearbox", nav:"Gearbox", parent:"robotics-1"},
  {id:"minibot", nav:"Minibot", parent:"robotics-1"},
  {id:"osha", nav:"OSHA", parent:"robotics-1"},
  {id:"fluidsim", nav:"FluidSIM", parent:"robotics-1"},
  {id:"robotics-2", nav:"Robotics II", group:true},
  {id:"offseason", nav:"Offseason", parent:"robotics-2"},
  {id:"season", nav:"Season", parent:"robotics-2"},
];
const TITLES = {"robotics-1":"Robotics I","robotics-2":"Robotics II",gearbox:"Gearbox",minibot:"Minibot",osha:"OSHA Training",fluidsim:"FluidSIM",offseason:"Sophomore Offseason",season:"Sophomore Season"};
const SUBS = {"robotics-1":["gearbox","minibot","osha","fluidsim"],"robotics-2":["offseason","season"]};
const BLURB = {
  gearbox:["Project 01","Building a gearbox to drive a wheel, plus my technical drawings for the shaft.","gearbox-built"],
  minibot:["Project 02","A 16-week build of a competition drive robot, from wood frame to final course.","minibot-w11"],
  osha:["Project 03","Ten hours of workplace safety training, a final test, and certification.","osha-cert"],
  fluidsim:["Project 04","Twelve units on pneumatics and automation, ending in a three-station challenge.",null],
  offseason:["Part A","Wiring, soldering, pit crew practice, and offseason competitions in Sacramento and Madera.","off-w07"],
  season:["Part B","Kickoff to competition: field builds, drive base rebuild, turret, shooter, and auto-scouting.","season-w06"],
};

function crumbs(id){
  const p = PAGES.find(x=>x.id===id);
  let h = `<nav class="crumbs" aria-label="Breadcrumb"><a href="#home">Home</a>`;
  if (p.parent) h += `<span>/</span><a href="#${p.parent}">${TITLES[p.parent]}</a>`;
  return h + `<span>/</span><span>${TITLES[id]}</span></nav>`;
}
function pager(id){
  const order = ["gearbox","minibot","osha","fluidsim","offseason","season"];
  const i = order.indexOf(id), prev = order[i-1], next = order[i+1];
  return `<div class="pager">${prev?`<a href="#${prev}"><span class="mono">← Previous</span><b>${TITLES[prev]}</b></a>`:""}${next?`<a class="next" href="#${next}"><span class="mono">Next →</span><b>${TITLES[next]}</b></a>`:""}</div>`;
}
const CONTACT = `<section class="sheet"><span class="tag">CONTACT</span><div class="pad contact"><div><span class="mono">Get in touch</span><h2>Questions about a project?</h2></div><div class="email"><code id="email">100034183@mvla.net</code><button type="button" data-copy>Copy email</button></div></div></section>`;

function cards(ids){
  return `<div class="cards">${ids.map(s=>`<a class="card" href="#${s}">${BLURB[s][2]?ph(BLURB[s][2],TITLES[s]):`<div class="ph empty"><span class="pl">12 units</span></div>`}<div class="cb"><span class="mono">${BLURB[s][0]}</span><h3>${TITLES[s]}</h3><p>${BLURB[s][1]}</p></div></a>`).join("")}</div>`;
}

/* Weekly entry renderer: [label, title, paragraphs|bullets, imgKey, videoId, bullets?] */
function weeks(rows, prefix, figStart){
  let n = figStart;
  return rows.map(r=>{
    const [wk,title,content,img,vid,asList] = r;
    const body = asList ? `<ul>${content.map(x=>`<li>${x}</li>`).join("")}</ul>` : content.map(x=>`<p>${x}</p>`).join("");
    const v = vid ? `<a class="vid" href="${V(vid)}" target="_blank" rel="noopener">Watch progress video</a>` : "";
    const f = img ? fig(img, `${prefix} ${wk}`, `${n++}`) : "";
    return `<div class="step${img?" wimg":""}" id="${prefix.toLowerCase().replace(/\s/g,"")}-${wk}"><div class="k">WEEK<b>${wk}</b></div><div class="c"><div class="txt"><h3>${title}</h3>${body}${v}</div>${f}</div></div>`;
  }).join("");
}

/* ---------- Content ---------- */
const MINIBOT_PREP = [
  ["1","Build the frame and boxes",["We used many machines and tools to create flat sides and sharp edges on the planks, which we later nailed together to make a frame."],"gallery"],
  ["2","Code the motors",["We started coding with Arduinos and using the controllers to move the motors. By the end we had fully functioning code and wiring."],"mov"],
  ["3","Plan the layout",["We planned where we wanted to put all of the electronics and motors in our frames, and picked spots to drill and mount our batteries and circuit breakers. The plan for next semester was to permanently install all the electronics in those spots."],null],
];
const MINIBOT = [
  ["01","Starting the build",["This week we started building the robot. I coded the robot's movement, but the code was simple and very basic. We built two gearboxes and got the controls working on both of them. We mapped out where we wanted to set up our electronics and where the screws would go."]],
  ["02","Shafts, and a rough week",["We started installing the electronics and designing the shafts. I cut the shafts to the correct length on the bandsaw and gave them to Max so he could plan. Will lathed the shafts after, and everything was fine.","However, we planned our electronics installation wrong. Not everything fit, and we had already drilled holes. After this we lost one of our shafts and the other one didn't work, so this week wasn't really good progress."],"minibot-w02"],
  ["03","Redoing the electronics",["We started by removing all of the electronics we had installed because we messed it up. Akshay started modeling a 3D-printed Arduino holder to keep it in place, and we started using shafts with temporary tape instead of e-clips.","I uploaded the code to the Arduino, and it worked with a few issues. Forward and backward, and left and right, were swapped, but once we swapped them back it worked. Our only other issue was speed: we didn't have enough control while turning."],null,"1o5qvXOVdJMOK6x1E4_zqeravZYDgiNoU"],
  ["04","Limiting speed",["This week I updated the Minibot code and limited the speed of the motors. We mostly worked on FluidSIM and OSHA this week, so we didn't get much done on the robot."]],
  ["05","Driving smoothly",["I finished re-updating the code, and we started reorganizing the inside of the Minibot. We reapplied the temporary tape on the shafts for more security and re-secured the rest of our parts and the Arduino. After all this we tested its driving, and everything went smoothly."],null,"1DXcmD7et0fkQtYA8kUmENzm5yzKEqE-R"],
  ["06","A whole new base",["Our frame had many holes from our earlier mistake and was disorganized in general, so we built a whole new base and installed our new gearboxes.","Max and I took measurements and started designing new shafts to replace the taped ones. I used the bandsaw to cut them to length. Max changed the length afterward, so I'll need to re-cut them, but we can repurpose these for the front wheels."],"minibot-w06"],
  ["07","Machining shafts",["We finished taking measurements and designing the front and back shafts. We used the bandsaw and lathe to build them and completed three before the bandsaw broke.","We removed the bearings from the old plank and reused them in our new planks. We installed the first gearbox, but we need to re-drill the holes because it is tilted a lot. We also drilled holes for the second gearbox, which we still need to finish building and install."],"minibot-w07"],
  ["08","Second gearbox done",["We finished lathing the shafts. Next we need to put them through the bearings and gearbox and add e-clips to test them. We also finally finished building the second gearbox, and we plan to install it next week.","We started screwing the planks together to build the base, but it isn't complete yet. We re-drilled Will's holes, though we still don't know if the new ones are correct, so we'll test them next week along with the new front-wheel shafts. We also added more slots in case we want to try chain and sprocket."],"minibot-w08"],
  ["09","FluidSIM and OSHA week",["We agreed to all work on OSHA and FluidSIM because it was the last week Mr. Hine allowed us to. I was done with unit 11 at the start of the week and had 5 hours of OSHA.","Unit 12 took me a long time because I made a lot of small mistakes, and the suction segment would not reset even though I had the reset in FluidSIM. I retried it the next day and it worked, even though I didn't change anything. I did all 5 remaining hours of OSHA at home on Thursday and finished the OSHA test on Friday."],"minibot-w09"],
  ["10","Omni wheels",["We added omni wheels to help with turning. When we ran a test drive, it was perfect. It turned super well, and the gear ratios really helped with the speed and safety of the parts.","We installed the new box over the battery. It works very well and is sturdy because we used triangular supports. We started adding chains but only got one on, so we don't know the exact effect yet. The second one was either too loose or too tight; we're having trouble with the length."]],
  ["11","Fixing the controller bug",["Akshay finished the 3D-printed mount. It worked out super well and lets us secure the Arduino properly to the base.","I fixed the code for the controller bug. The issue was that pulseIn() was set to −3 instead of 0, which made the wheels turn slowly on their own. Max helped me a lot with this because I didn't fully understand it at first. We added the chain, but needed an extra shaft to tension it to the correct tightness."],"minibot-w11"],
  ["12","The turning obstacle",["We tested our robot on the obstacle where we had to turn at the top. It was hard because our Minibot was so powerful and our movements weren't precise enough. To help, we changed to a gear ratio that favored power less. This helped a lot, but the shape of our frame still isn't good enough to make it around.","We also noticed we were losing traction because of dust buildup on the tires. We cleaned them with paper towels, but there wasn't a noticeable difference."],null,"1TigTmNIVPE3w-NSF-fXgJMM6x83B659L"],
  ["13","Obstacle passed",["We fixed our chain tensioning, because it was rotating when we turned. We secured it even more with zip ties.","We had a mysterious issue that made the controller randomly stop working so the robot couldn't move. We suspected a wire issue because it only worked when certain parts made contact, but after changing the battery it worked fine again. We also successfully passed the turning obstacle."],null,"1aRcV3f8GpyURbXKxexNU0T4wBcvUykes"],
  ["14","New battery box",["Akshay printed his new battery box design. We changed it because of its height in the limbo obstacle. The battery made us change the layout of the robot: moving the distribution hub to the corner, moving the SPARK MAXes, installing the Arduino, and more.","When we tested, the robot hit a small bump and the whole right side stopped working. It got worse until it happened constantly, even without a bump. We narrowed it down to a SPARK MAX, and Mr. Hine said he would help us look at it or reset it next week."],null,"1HXtU6MoGuwFwSHy0AT9z5GLFVCaAc0Z4"],
  ["15","Pushing 15 weights",["We added the rims, which Max made. He cut holes in specific spots for our chain tensioner, and Will and I installed it with wood screws. Combined with the lower battery box, it worked really well and we could push 15 weights even with limited power.","We also fixed the SPARK MAX issue: one cable was just barely connected, enough to stop the whole robot from working. More testing at the end showed everything working as planned."],null,"1WHhQkzdli5LVuQMyeiqiAnDpV55XNgws"],
  ["16","Final course",["More testing showed we were good at pushing weight and the turning obstacle, but weaker at balancing and speed bumps because the robot sits low to the ground.","On the final course we set the turning obstacle to the highest level and pushed a lot of weight, but picked smaller speed bumps to be safe. We couldn't retry anything, but we did add googly eyes to make the robot cooler. Max accidentally put them on the wrong side, but it still looked good."],null,"1o6gSxAVh18Ogy4XHc6Ac6ou7qw_ok4kx"],
];
const OFF = [
  ["02","My first week",["This was my first week, since I joined one week late.","We started by learning how the robot worked and all of its wiring.","We did races to see who could repair the robot the fastest.","We also did soldering and had soldering tests."],"off-w02",null,1],
  ["03","Wire gauges",["We did more soldering and got tested even more.","We learned about 4 gauge, 12 gauge, and 18 gauge wires.","We practiced working on the robot in crevices and cramped spaces."],"off-w03",null,1],
  ["04","Driving and pit practice",["We started staying after school, and Rayhan started letting us drive and operate the robot.","Rayhan told us to come to practice at Kohl's for a chance to potentially be on pit crew.","I helped with battery changes and robot fixes at Kohl's."],"off-w04",null,1],
  ["05","Showcase",["I helped with the showcase during lunch and ACT, rotating between driving and operating the robot.","We redid cable management on the robot to reduce future confusion.","Dhruv and I built the competition batteries."],"off-w05",null,1],
  ["06","CANcoder chase",["We had an issue on the robot that seemed related to the CANcoder, so we worked on that.","We later realized it wasn't the CANcoder and stopped working on it.","I went to Kohl's and helped as usual with batteries and anything else that was needed."],"off-w06",null,1],
  ["07","Sacramento competition",["To prepare for the competition in Sacramento, we attended a scouting meeting hosted by Eddie.","We packed up for the competition.","The competition went well and we finished 7th, although we got out in the first round."],"off-w07",null,1],
  ["08","Second reef",["We helped unpack after getting back from the competition, although 6th period did a lot of it.","We had another practice at Kohl's where a second reef was installed, which was exciting."],"off-w08",null,1],
  ["09","Rewiring",["A lot of wiring broke this week. More than five wires came apart.","Since Rayhan was working on other things, I was assigned to fix them.","I fixed 4 of the 5 wires (Rayhan did one as an example). That was a big deal because I had been working on my crimping for a while."],"off-w09",null,1],
  ["10","Madera competition",["We went to the competition in Madera. It didn't go well, due to worse overall team performance and much stronger competition.","When we returned, we had a meeting about prototyping led by Aaron."],"off-w10",null,1],
  ["11","Prototyping",["Period 6 moved furniture and equipment around, so we spent time putting everything back.","I helped move the competition batteries back to the charging station.","I helped prototype with my group (Max and Eddie)."],"off-w11",null,1],
  ["12","Prototype session",["We attended a prototyping session led by Aroush and learned a lot from it.","Our group started making a prototype, and I helped measure different parts."],"off-w12",null,1],
  ["13","Shop organization",["We started making organization boxes with the laser cutter. Theo cut them while Dhruv and I hot-glued them together.","We added pegs so the boards in the drawers and boxes would align."],null,null,1],
];
const SEASON = [
  ["01","Kickoff and the outpost",["Attended the season kickoff, reviewed the game reveal, and analyzed the rules and required field elements.","Chose to focus on constructing the outpost field element instead of robot prototyping, including cutting and assembling the wooden components.","Collaborated with Alden and Dhruv throughout the build to improve efficiency, verify measurements, and solve assembly issues.","Resolved minor alignment and fitting challenges while balancing time between field building and early prototyping.","Next steps: finalize adjustments to the outpost, verify field specifications, and support prototype testing and other team builds."],"season-w01",null,1],
  ["02","Kraken motors",["Assisted with assembling Kraken motors and preparing them for use on the robot.","Helped disassemble the old drive base to clear out outdated components and prepare for upgrades.","Supported the mechanical team with general hands-on assembly and disassembly throughout the week.","Worked with experienced team members to learn proper assembly techniques.","Next steps: help with new component installation, drivetrain work, and continued robot assembly."],"season-w02",null,1],
  ["03","Drive base teardown",["Disassembled the old drive base by unscrewing components and drilling out rivets.","Helped prepare the chassis for repairs, upgrades, and reassembly.","Gained experience with the robot's mechanical structure, fastening systems, and safe tool use.","Drilled out worn or tightly fitted rivets carefully, with guidance from teammates.","Next steps: continue disassembly, help install new components, and take on more mechanical responsibilities."],"season-w03",null,1],
  ["04","Camera install",["Helped install robot components, including mounting and setting up the camera.","Stayed after school to help work on the drive base and assembly.","Gained hands-on experience with hardware installation, component alignment, and assembly.","Managed scheduling by attending build sessions after lacrosse practice.","Next steps: continue robot assembly, refine the drive base, and support future installations."],null,"1YwbJH6aDuZzowgXWDD2HGps3yGr_VDOj",1],
  ["05","AI auto-scouting",["Helped develop the AI Scouting / Auto Scout system, collaborating with Rodin and Alden on automation ideas and development tasks.","Kept contributing while waiting on project access by working alongside teammates.","Stayed after school to help shave and adjust the hopper, improving its fit and performance.","Made gradual hopper adjustments and checked alignment often to avoid removing too much material.","Next steps: get full access to the scouting system, keep testing, and refine the hopper based on results."],null,"19IFmN7S8YWdl49kh5UdOcN6CzXQZcl_8",1],
  ["06","Bumpers, turret, shooter",["Melted and shaped plastic for the robot hopper to improve fit and function.","Built and stapled the robot bumpers as part of final assembly.","Helped Evan assemble the turret and helped Aaron build the shooter.","Helped solder new control buttons while learning proper soldering and assembly technique.","Next steps: finish the hopper, turret, and shooter, and test every component."],"season-w06",null,1],
  ["07","Designing a printed part",["Kept developing the auto-scouting system to make match data collection faster and more reliable.","Refined the scouting workflow for tracking the autonomous period.","Worked with Dhruv to measure and design a wheel-related component for 3D printing.","Produced the final printed part with Rodin after double-checking the measurements.","Next steps: test and refine auto-scouting, and adjust the wheel part if testing shows it needs it."],"season-w07",null,1],
  ["08","Competition scouting",["Tested the auto-scouting system by tracing robot movements and checking tracking accuracy.","Packed and organized tools, robot parts, and supplies for competition.","Scouted at competition, recording team performance and match observations for strategy.","Worked through robot-tracing issues and tight prep time with the team.","Next steps: improve auto-scouting, analyze the scouting data, and share insights with the team."],"season-w08",null,1],
  ["09","Scouting reflection",["Joined a scouting reflection meeting with Eddie to evaluate workflows, data collection, and team performance.","Gave feedback on balancing numbers with written observational notes.","Helped Aaron and Max with robot assembly.","Kept working on auto-scouting with Rodin alongside team strategy discussions.","Next steps: follow up on assembly, clarify the team's scouting data needs, and keep contributing to build and scouting."],null,null,1],
  ["10","Competition prep",["Vacuumed and swept the shop to keep the workspace clean.","Packed tools and materials for Thursday's competition.","Helped Aaron with a build task.","Left early for a lacrosse game but finished key prep tasks earlier in the week.","Next steps: keep the shop organized, follow up on competition tasks, and document future work better."],"season-w10",null,1],
];
const UNITS = [
  ["Safety","We learned about safety with pneumatics, including questions like what a safe PSI is, and took a test on the reading."],
  ["Fundamentals of Automation Technology","Automation technology makes decisions automatically based on inputs. It uses actuators, sensors, and controllers to do this."],
  ["Electro-Pneumatic Systems","A pneumatic system uses compressed air to transmit and control energy. We used these to build systems that complete specific tasks."],
  ["FluidSIM 6","We used what we had learned to create our first circuit design."],
  ["Stacking Magazine Station","We learned about different types of valves, cylinders, and sensors and their uses, plus the multi-pin distributor and the basic parts we needed."],
  ["Container/Lid Control Program","We had to place the cap on the container and press it on. My second piston fired too soon, so I added a delay and it worked great.",1],
  ["Fundamentals of Automation Programming","We learned about logic gates like NOT, AND, and OR, and about programmable logic controllers (PLCs)."],
  ["Conveyor Station","We got familiar with the conveyor station's parts. It brought plastic caps to the end but stopped for metal caps, using optical sensors, solenoids, and inductive sensors."],
  ["Conveyor Station Program","The conveyor had to redirect metal caps with an inductive sensor, while an optical sensor detected any cap and started the belt.",2],
  ["Handling Station","We learned the suction cup system that picks up and moves caps, using vertical guided double-acting cylinders, solenoid valves, and flow control valves."],
  ["\"Pick and Place\" Program","We had to get the suction cup to pick up and move the caps. Getting the suction into position was hard, but I eventually got it and everything worked.",3],
  ["Challenge: 3 Stations Combined","The final project combined projects 1, 2, and 3. It was really hard and took a lot of reading and work, but I got it working and was super proud of myself.","C"],
];

/* ---------- Views ---------- */
const VIEWS = {
home(){ return `
<section class="sheet hero"><span class="tag">DWG LJ-001</span>
  <div class="hero-main">
    <p class="mono">Lukas Jarschel's portfolio</p>
    <h1>Lukas <span>Jarschel</span></h1>
    <p class="dek">Student at Los Altos High School. This site collects the robotics projects I've worked on since 9th grade, week by week.</p>
    <span class="cert">■ OSHA 10-hour certified</span>
  </div>
  <div class="tblock">
    <div class="wide"><span class="mono">Name</span><b>Lukas Jarschel</b></div>
    <div class="wide"><span class="mono">School</span><b>Los Altos High School</b></div>
    <div><span class="mono">Classes</span><b>Robotics I &amp; II</b></div>
    <div><span class="mono">Team role</span><b>Pit crew &amp; scouting</b></div>
    <div class="wide"><span class="mono">Goal</span><b>To create a functioning robot</b></div>
  </div>
</section>

<section class="sheet"><span class="tag">SHEET 1 · ABOUT</span>
  <div class="pad two">
    <div><h2 class="sec">About me</h2>
      <div style="display:flex;flex-direction:column;gap:14px">
        <p class="lead">Hi, I'm Lukas, and I'm a student at Los Altos High School. Some of my passions are playing basketball, playing video games, and watching football.</p>
        <p>On this website you can see the projects I've worked on, starting with Robotics I in 9th grade: a gearbox, a Minibot built over 16 weeks, OSHA certification, and twelve FluidSIM automation units. In Robotics II I joined the competition team for the offseason and the build season.</p>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:10px;justify-content:center">
      <span class="mono">By the numbers</span>
      <div class="figs" style="grid-template-columns:repeat(2,1fr);border:1.5px solid var(--ink)">
        <div class="fig"><b>16</b><span>weeks on the Minibot</span></div>
        <div class="fig"><b>12</b><span>FluidSIM units</span></div>
        <div class="fig" style="border-left:none;border-top:1px solid var(--rule)"><b>10</b><span>hours of OSHA</span></div>
        <div class="fig" style="border-top:1px solid var(--rule)"><b>7th</b><span>at Sacramento</span></div>
      </div>
    </div>
  </div>
  <div class="specs">
    <div class="spec">${ph("home-classes","Classes","thumb")}<h3>Classes</h3><ul><li><a href="#robotics-1">Robotics I</a></li><li><a href="#robotics-2">Robotics II</a></li></ul></div>
    <div class="spec">${ph("home-strengths","Strengths","thumb")}<h3>Strengths</h3><ul><li>Writing</li><li>Making technical drawings</li><li>Ideas</li></ul></div>
    <div class="spec">${ph("home-goals","Goals","thumb")}<h3>Goals</h3><ul><li>To create a functioning robot</li></ul></div>
  </div>
</section>

<section class="sheet"><span class="tag">SHEET 2 · PROJECTS</span>
  <div class="pad" style="display:flex;flex-direction:column;gap:26px">
    <div><div class="divider"><span class="mono">Robotics I · 9th grade</span></div></div>
    ${cards(SUBS["robotics-1"])}
    <div class="divider"><span class="mono">Robotics II · 10th grade</span></div>
    ${cards(SUBS["robotics-2"])}
  </div>
</section>
${CONTACT}`;},

"robotics-1"(){ return `
<section class="sheet"><span class="tag">ROBOTICS I</span><div class="pad page-h">
  ${crumbs("robotics-1")}
  <h1>Robotics I</h1>
  <p class="dek">Under this tab I'll upload all of the projects I did throughout Robotics I.</p>
  <div class="meta-row"><div><span class="mono">Year</span><b>9th grade</b></div><div><span class="mono">Projects</span><b>4</b></div><div><span class="mono">Teacher</span><b>Mr. Hine</b></div></div>
</div></section>
<section class="sheet"><div class="pad">${cards(SUBS["robotics-1"])}</div></section>
${CONTACT}`;},

gearbox(){ return `
<section class="sheet"><span class="tag">PROJECT 01</span><div class="pad page-h">
  ${crumbs("gearbox")}
  <h1>Gearbox</h1>
  <p class="dek">Our first project was to build a gearbox that would later be powered to turn gears and, at the end, a wheel.</p>
  <div class="meta-row"><div><span class="mono">Class</span><b>Robotics I</b></div><div><span class="mono">Steps</span><b>6</b></div><div><span class="mono">Drawings</span><b>2</b></div></div>
</div></section>
<section class="sheet"><div class="pad body">
  <div class="step wimg"><div class="k">STEP<b>1</b></div><div class="c"><div class="txt"><h3>Sketch and plan</h3><p>Sketch the design, mark where the holes should go, and plan the build.</p></div>${fig("gearbox-sketch","Design sketch","1.1")}</div></div>
  <div class="step"><div class="k">STEP<b>2</b></div><div class="c"><h3>Drill the holes</h3><p>Drill the holes in the board where the sketch shows.</p></div></div>
  <div class="step"><div class="k">STEP<b>3</b></div><div class="c"><h3>Build the gearbox</h3><p>Assemble the gears and shafts into the gearbox.</p></div></div>
  <div class="step wimg"><div class="k">STEP<b>4</b></div><div class="c"><div class="txt"><h3>Add grease</h3><p>Grease the gears so they turn smoothly.</p></div>${fig("gearbox-built","Assembled gearbox","1.2")}</div></div>
  <div class="step"><div class="k">STEP<b>5</b></div><div class="c"><h3>Make the wheel shaft</h3><p>Make a shaft to mount the tire on, from my technical drawing.</p><a class="file" href="${ORIGINAL}/robotics-i/gearbox" target="_blank" rel="noopener"><span>Jarschel_Wheel_Motor_Shaft Drawing v1.pdf</span></a></div></div>
  <div class="step"><div class="k">STEP<b>6</b></div><div class="c"><h3>Add the tire</h3><p>Add the tire and fasten it with clips.</p><p class="note">No photos of this step, because we did it a while ago and have since taken it apart.</p></div></div>
  <div class="step"><div class="k">NEXT</div><div class="c"><h3>Sprocket and chain</h3><p>This is where we left off, but I've made a new technical drawing for the same design using a sprocket and chain.</p><a class="file" href="${ORIGINAL}/robotics-i/gearbox" target="_blank" rel="noopener"><span>Jarschel_Wheel_Motor_Chain_Shaft Drawing v1.pdf</span></a></div></div>
</div></section>
${pager("gearbox")}${CONTACT}`;},

minibot(){ return `
<section class="sheet"><span class="tag">PROJECT 02</span><div class="pad page-h">
  ${crumbs("minibot")}
  <h1>Minibot</h1>
  <p class="dek">Our second project was to build the base for a Minibot. We coded the motors and built boxes for the electronics, then spent a semester building and testing the full robot.</p>
  <div class="meta-row"><div><span class="mono">Team</span><b>Akshay, Max, Will &amp; me</b></div><div><span class="mono">Duration</span><b>Prep + 16 weeks</b></div><div><span class="mono">My role</span><b>Code, shafts, assembly</b></div></div>
</div></section>

<section class="sheet"><span class="tag">PART 1 · PROTOTYPE</span><div class="pad body">
  <h2 class="sec" style="margin:0">First semester prototype</h2>
  <div class="step"><div class="k">STEP<b>1</b></div><div class="c"><h3>Build the frame and boxes</h3><p>${MINIBOT_PREP[0][2][0]}</p><div class="gallery">${fig("minibot-frame1","Frame build","2.1")}${fig("minibot-frame2","Frame build","2.2")}</div></div></div>
  <div class="step"><div class="k">STEP<b>2</b></div><div class="c"><h3>Code the motors</h3><p>${MINIBOT_PREP[1][2][0]}</p><a class="file mov" href="${ORIGINAL}/robotics-i/minibot-prototype" target="_blank" rel="noopener"><span>IMG_3697.MOV · motor test video</span></a></div></div>
  <div class="step"><div class="k">STEP<b>3</b></div><div class="c"><h3>Plan the layout</h3><p>${MINIBOT_PREP[2][2][0]}</p><p class="note">We didn't get a photo of this, but I planned to add one the next semester.</p></div></div>
</div></section>

<section class="sheet"><span class="tag">PART 2 · BUILD LOG</span><div class="pad body">
  <div><h2 class="sec" style="margin-bottom:10px">Second semester build</h2><p>After winter break we got new groups and a new frame, and started building our Minibot. My group was Akshay, Max, and Will, and we documented our progress every week.</p></div>
  ${weeks(MINIBOT,"Minibot",3)}
</div></section>
${pager("minibot")}${CONTACT}`;},

osha(){ return `
<section class="sheet"><span class="tag">PROJECT 03</span><div class="pad page-h">
  ${crumbs("osha")}
  <h1>OSHA Training</h1>
  <p class="dek">For OSHA we had to learn a lot and complete 10 hours of training. We also answered questions and took a test. In the end I finished it, and I'm now OSHA certified.</p>
  <div class="meta-row"><div><span class="mono">Hours</span><b>10</b></div><div><span class="mono">Assessment</span><b>Final test</b></div><div><span class="mono">Status</span><b>Certified</b></div></div>
</div></section>
<section class="sheet"><div class="pad two">
  <div style="display:flex;flex-direction:column;gap:14px">
    <h2 class="sec" style="margin:0">How it went</h2>
    <p>I worked on OSHA during class alongside FluidSIM. By the last allowed week I had 5 hours done. I completed the remaining 5 hours at home on Thursday and passed the OSHA test on Friday.</p>
    <span class="cert">■ OSHA certified</span>
  </div>
  ${fig("osha-cert","OSHA certification","3.1")}
</div></section>
${pager("osha")}${CONTACT}`;},

fluidsim(){ return `
<section class="sheet"><span class="tag">PROJECT 04</span><div class="pad page-h">
  ${crumbs("fluidsim")}
  <h1>FluidSIM</h1>
  <p class="dek">Twelve units on pneumatics and industrial automation. Each project unit has its circuit file in the shared folder.</p>
  <div class="meta-row"><div><span class="mono">Units</span><b>12</b></div><div><span class="mono">Projects</span><b>3 + final challenge</b></div><div><span class="mono">Software</span><b>FluidSIM 6</b></div></div>
  <a class="vid" style="margin-top:6px" href="https://drive.google.com/drive/folders/1rfguvOcSxKJJXykmE-oawFBprAJtEBps?usp=sharing" target="_blank" rel="noopener">Open FluidSIM files folder</a>
</div></section>
<section class="sheet"><div class="pad">
  <div class="units">${UNITS.map(([t,d,p],i)=>`<div class="unit"><span class="n">${String(i+1).padStart(2,"0")}</span><div>${p?`<span class="pill">${p==="C"?"FINAL CHALLENGE":"PROJECT "+p}</span>`:""}<h3>${t}</h3><p>${d}</p></div></div>`).join("")}</div>
</div></section>
${pager("fluidsim")}${CONTACT}`;},

"robotics-2"(){ return `
<section class="sheet"><span class="tag">ROBOTICS II</span><div class="pad page-h">
  ${crumbs("robotics-2")}
  <h1>Robotics II</h1>
  <p class="dek">My sophomore year on the school's competition robotics team, split into the offseason and the build season.</p>
  <div class="meta-row"><div><span class="mono">Year</span><b>10th grade</b></div><div><span class="mono">Competitions</span><b>Sacramento, Madera</b></div></div>
</div></section>
<section class="sheet"><div class="pad">${cards(SUBS["robotics-2"])}</div></section>
${CONTACT}`;},

offseason(){ return `
<section class="sheet"><span class="tag">PART A</span><div class="pad page-h">
  ${crumbs("offseason")}
  <h1>Sophomore Offseason</h1>
  <p class="dek">Learning the competition robot from the wiring up, earning time on pit crew, and two offseason events.</p>
  <div class="meta-row"><div><span class="mono">Weeks</span><b>2–13</b></div><div><span class="mono">Best finish</span><b>7th, Sacramento</b></div><div><span class="mono">Skills</span><b>Soldering, crimping, driving</b></div></div>
</div></section>
<section class="sheet"><div class="pad body">
  ${fig("off-top","Offseason","5.0")}
  ${weeks(OFF,"Offseason",1)}
</div></section>
${pager("offseason")}${CONTACT}`;},

season(){ return `
<section class="sheet"><span class="tag">PART B</span><div class="pad page-h">
  ${crumbs("season")}
  <h1>Sophomore Season</h1>
  <p class="dek">From kickoff through competition: field elements, the drive base rebuild, turret and shooter assembly, and an AI auto-scouting system.</p>
  <div class="meta-row"><div><span class="mono">Weeks</span><b>1–10</b></div><div><span class="mono">Focus</span><b>Mechanical &amp; scouting</b></div></div>
</div></section>
<section class="sheet"><div class="pad body">${weeks(SEASON,"Season",1)}</div></section>
${pager("season")}${CONTACT}`;},
};

/* ---------- Router ---------- */
const nav = document.getElementById("nav");
nav.innerHTML = PAGES.map((p,i)=>(p.group&&i?`<span class="sep" aria-hidden="true"></span>`:"")+`<a href="#${p.id}" data-id="${p.id}">${p.nav}</a>`).join("");
function show(){
  const id = (location.hash||"#home").slice(1);
  const key = VIEWS[id] ? id : "home";
  const main = document.getElementById("main");
  main.innerHTML = `<div class="view">${VIEWS[key]()}</div>`;
  nav.querySelectorAll("a").forEach(a=>{ if(a.dataset.id===key) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current"); });
  const cur = nav.querySelector('[aria-current="page"]'); if (cur) cur.scrollIntoView({block:"nearest",inline:"center"});
  document.title = key==="home" ? "Lukas Jarschel Portfolio" : TITLES[key]+" · Lukas Jarschel";
  window.scrollTo(0,0);
}
addEventListener("hashchange",show);
show();

document.addEventListener("click",e=>{
  const b = e.target.closest("[data-copy]"); if(!b) return;
  const el = document.getElementById("email"), t = el.textContent;
  const reset = ()=>setTimeout(()=>b.textContent="Copy email",1600);
  const fallback = ()=>{const r=document.createRange();r.selectNodeContents(el);const s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent="Selected";reset()};
  try{navigator.clipboard.writeText(t).then(()=>{b.textContent="Copied";reset()},fallback)}catch(_){fallback()}
});
