import './App.css';
import TitleHeader from './components/TitleHeader';

function App() {
  return (
    <div className="App">
      <TitleHeader />
      <div className='main-page-container'>

        <div className='card'>
          <div className='title'>Intro.</div>
          <div className='sub-text'>who-am-i.txt</div>
          <div className='body-text'><a href="https://github.com/Andromas14">My GitHub</a></div>
          <div className='body-text'>My name is Andrew, I am a third-year Computing Science student at SFU, and an aspiring software engineer, with plenty of applied experiences. I have had a big passion for computers since I was little, and over the years I have applied it in various projects.
          </div>
          <div className='body-text'>This page is a summary of my projects and experiences related to programming so far, but this list will keep growing and expanding over the years as I further my career in software engineering.
          </div>
        </div>

        <div className='card'>
          <div className='title'>Education.</div>
          <div className='sub-text'>Simon Fraser University</div>
          <div className='body-text'>SFU courses and clubs have provided me with much of the best software developement practices that I have.
          </div>
          <div className='body-text'>I have completed courses on OOP, Data Structures, computer architecture, RISC-V assembly, full stack software development and more. These classes have given me a solid understanding of the base concepts behind most programming languages and their differences, allowing for effortless adjustment to new languages and platforms. I always find ways to apply myself in school, be it by joining clubs or puting extra working into programming assignements and learning as much as I can.
          </div>
        </div>

      </div>

      <div className='big-header'>/Experience:</div>

      <div className='main-page-container-sub'>

        <div className='card'>
          <div className='title'>Team Phantom Formula SAE.</div>
          <div className='sub-text'>Controls Team DAQ and Network </div>
          <div className='body-text'>I am currently an Engineering team member of Team Phantom SFU Formula SAE, where we develop embedded software and firmware for a vehicle, in order to compete in the Formula SAE competititon .
          </div>
          <div className='body-text'>My duties include developing Data Acquisition (DAQ) Firmware to interface, collect and process data from multiple sensors, as well as debugging the hardware components. I have programmed the DAQ backend in C++ for the ESP32 microcontroller, helping streamline the process of integrating new sensors.
            I have also started developing The Controller Area Network Protocol (CAN) Software in order to encode and send data between critical systems of the car at high transmission rates. Team Phantom has provided me with many applied experiences of software engineering, with things such as Git, embedded firmware developement, debugging, testing, project responsibilities and much more.
            <div className='body-text'><a href="https://github.com/sfuphantom/DAQ">Team Phantom DAQ Repository</a></div>
          </div>
          <div className='body-text'>
            <img src={require("./images/TP-img.jpg")} alt="Search Page" />
          </div>
        </div>

        <div className='card'>
          <div className='title'>Cullinary Website Project.</div>
          <div className='sub-text'>cmpt-276 font-end final project</div>
          <div className='body-text'>An in-developement cullinary Website, that will let it's users chose from a variety of features to find the perfect recipes for the user. It is currently being developed using ReactJS, in the Agile/Kanban SDLC method. The team has been making good progress, having more than most of the first API and it's features working, as well as the general user interface and seperate pages being done.
          </div>
          <div className='body-text'>
            <img src={require("./images/project-website-img.png")} alt="Search Page" />
          </div>
          <div className='body-text'>We hope to finalize the website in the next week and get ready for the presentation. This project has given us all very good experience in profesional front-end developemnt, API uses and webiste Routing, testing and depoloyement, especially being my first introduction to ReactJS. I have created the Search page, pulling and sorting and displaying data from the API, allowing for users to search for the items they want. Currently I am working to integrate other pages that our members have been working on into the app, so that the features work together as intended.
          </div>
          <div className='body-text'>
            <img src={require("./images/proj-website-wireframe.png")} alt="Search Page" />
          </div>

          <div className='body-text'><a href="https://github.com/Andromas14/cmpt276_project_clouds">Link to the project's GitHub Repository</a></div>
        </div>

        <div className='card'>
          <div className='title'>Game Dev.</div>
          <div className='sub-text'>"Where The Line Leads" - developed in Unity using C#</div>
          <div className='body-text'>I have developed multiple full-stack game projects using the Unity game engine. One of my most succesful projects has been "Where The Line Leads", which I developled in a team of 3 during grade 12.
          </div>
          <div className='body-text'>
            <img src="https://lh5.googleusercontent.com/huenx7VOSmh6eXIsMWbu7XwvdKwVGgHjnt2RmAqNeydQFDkmGdGp8UpXHrnBmNIrG3IGhRhsoXHhfHEnyiPVKS7WzWMZhYZ-oQ80Hcae64qyI3sTknXXTH9YOFm6fRSrpw=w1280" alt="Search Page" />
          </div>
          <div className='body-text'>
          </div>

          <div className='body-text'>
            This game was created in 2 months from start to finish, introducing me to full-stack developement concepts, and showing why they are so imporant. "Where The Line leads" is 3d platformer developed in Unity engine using C#, the main concept of the game is to use the tools you are provided, mainly the grappling hook and movement abilities, in order to get to the end of the levels while avoiding the enemies.
          </div>

          <div className='body-text'>
            <img src="https://lh3.googleusercontent.com/lrqJGYqVZ70v5Wpy3Yj5ek1gfbgWBxjLtbGYDOA_hKsIT-akmszixJiq5weDcsrgTf3ZKlHVc-7kuxAdsLqVUtodwD3zS7SV5JGsa6M4rKzIFxL_bqgfdVkTnboJtvn1jQ=w1280" alt="Search Page" />
          </div>

          <div className='body-text'>
            <img src="https://lh6.googleusercontent.com/8E6ZMjA2iW6my3SKWnXayeQQTrO3wKNKqL5Iazgoz2OJQHZ4sQoHSKjLTvX_tJxFErVlowoZVqnXdHD8RLi8A2lPhjMrBwztYcdnjVm0w_qV25HWN9_XTdrfupKE99vATg=w1280" alt="Search Page" />
          </div>

          <div className='body-text'>
            I was the main programmer of the game, while the other 2 members did the level design and UI concepts, it was up to me to implement all of the base systems of the game. We tested the game by giving prototype versions of it to play to our friends and families, providing us with valuable feedback on what works well and what doesn't. The final project was deployed to a website after modifiying it with the feedback we got. This was a full application, with a menu options, tutorial and 5 full levels of gameplay conent.
          </div>

          <div className='body-text'>
            <img src="https://lh5.googleusercontent.com/ZbJ3W62I-ZkaxDrN4Yk2QjtWTU7bFUyyf2pH2ve6lwu4IbYXIpTEXDvJKHlyUBvmZgxZ3cY3RR8U-w-RdLsuPr9CCg9HkvGGiXW3POuwoaxyF5tFCqnwpydo4UH-TXGDlQ=w1280" alt="Search Page" />
          </div>

          <div className='body-text'>
            The team recieved an A+ for the final project, labeling it a huge success, and teaching me many software developement practices that I still use to this day.
          </div>
        </div>


        <div className='card'>
          <div className='title'>Trading Science Ltd.</div>
          <div className='sub-text'>Software Engineering Intern - Machine Learning Research</div>
          <div className='body-text'>Analysed and Researched Machine Learning Models in order to asist the team in identifying the best choice for their specific objectives. Gained lots of valuable experience by working in a profesional software devepement setting.
          </div>
          <div className='body-text'>
            Used python in order to modify and run machine learning models for my tasks, while inputing excel data into them, obtaining data science experience in python. At the end of the internship I did a written reprot and a presentation to the team, showcasing my findings and helping discuss the ideal solutions and changes to their current system.
          </div>
        </div>

      </div>

      <div className='big-header'>/Ideas and Future Projects:</div>

      <div className='main-page-container-sub'>

        <div className='card'>
          <div className='title'>Team Phantom.</div>
          <div className='sub-text'>Finalize the Car and compete</div>
          <div className='body-text'>The team and I hope to finalize the vehicle for 2024 and use it to comptete. This is quite the undertaking, and will require lots of effort and time from everyone involved, but if succesful it will be very rewarding for everyone involved.
          </div>
          <div className='body-text'>We are currently making good progress on the Controls side. I am currently working on programming and testing the Network components of the vehicle with good success, and the next steps will involve integration with the rest of the components. Making such a project is not an easy task, but I believe the team has it in ourselves to succeed.
          </div>
        </div>

        <div className='card'>
          <div className='title'>Game Developement.</div>
          <div className='sub-text'>Rediscovering game dev</div>
          <div className='body-text'>Due to a bit of ab overload with University studies and work, I haven't had the time to do any more game developement since my first year at SFU. I hope to return to it soon as I have many creative ideas and concepts that I want to try, but just don't have the time to. I am potentially looking to pick a course that might involve game developement as well, and see if it is something I want to do professionally.
          </div>
          <div className='body-text'>I also want to learn new engines, such as <a href="https://godotengine.org/">GODOT</a> or <a href="https://www.unrealengine.com/en-US">Unreal Engine</a>, to expand my abilities and knowledge. Game developement let me express many of the creative ideas and storeis that I have in a very unique way, compared to other methods of software developement, and I hope to revisit it soon.
          </div>
        </div>


      </div>

    </div >
  );
}

export default App;
