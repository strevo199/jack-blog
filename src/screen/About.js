import React,{useState} from 'react'

function About() {
    const [image, setimage] = useState(['https://res.cloudinary.com/stephyll/image/upload/v1623758407/myProtifolio/port2_lngnrn.jpg',
    'https://res.cloudinary.com/stephyll/image/upload/v1623756010/myProtifolio/port3_xhceer.jpg',
    'https://res.cloudinary.com/stephyll/image/upload/v1623756009/myProtifolio/port4_d9tvlh.jpg'])

    const chagImage = () =>{
        
        const img = image? image[Math.floor(Math.random() * 3 )]: ''
        return img;
    }
    return (
        <div className="about p-4">
            <div className="about_header h-36 sm:h-56 flex justify-center flex-col">
                <h1 className ="text-white text-5xl sm:text-8xl"> About <span className="seconday">Me</span></h1>
                <p className ="text-white text-lg sm:text-2xl">Let me tell you a few things...</p>
            </div>
            <div className="about_bio sm:grid flex flex-col items-start sm:grid-cols-4">
                <img className="rounded-md h-72 sm:col-start-1 sm:col-end-2 col-start-1 col-end-3" src={chagImage()} alt="" />
                <div className="lg:col-start-2 col-start-3 mt-4 sm:mt-0 col-end-5 lg:col-end-6 flex flex-col justify-evenly">
                    <h1 className="text-3xl seconday">BIO</h1>
                    <p className="text-white text-sm sm:text-md my-8">I am a hard-working reliable web developer and software developer. I'm a MERN Stack developer. I love being in this work because I am passionate about technology, design, and innovation. Do you need a high-quality clean-coded website Or Software? I will help you with that, My service is affordable and maintains the best quality design for you. Kindly inbox me to discuss more on your project.</p>
                    <a href="./StephenCv.pdf" target="_blank" class="resume">Download Resume</a>
                </div>
            </div>
            <div className="about_skill grid grid-cols-1 sm:grid-cols-3 mt-5 gap-10 ">
                <div className="flex-1 border-b-4 p-4 border-yellow-500 text-white flex flex-col justify-evenly bg-gray-900">
                    <h1 className="text-sm sm:text-md"><span className="seconday text-xl">Worked at:</span>  Aztlan Pvt Ltd, Hyderabad,Telangana,India</h1>
                    <h1 className="text-sm sm:text-md"><span className="seconday text-xl">Postion:</span>  Aztlan Pvt Ltd, Hyderabad,Telangana,India</h1>
                    <p className="text-sm sm:text-md"><span className="seconday  text-xl">Role:</span> Determining the structure and design of web pages. Ensuring user experience determines design choices. Developing features to enhance the user experience. Striking a balance between functional and aesthetic design</p>
   
                </div>
                <div className="flex-1 p-4  flex flex-col items-center justify-evenly border-yellow-500 border-b-4 bg-gray-800">
                    <span className="seconday text-xl ">Programming Skills</span>
                    <ul className="grid gap-2 grid-cols-3 text-sm sm:text-md text-white programming items-center">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>OOP</li>
                        <li>Phyton</li>
                        <li>Git</li>
                        <li>MongoDb</li>
                        <li>Node</li>
                        <li>SCSS</li>
                        <li>Tailwind</li>
                        <li>React</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div className="flex-1 p-4  flex flex-col items-center justify-evenly border-yellow-500 border-b-4 bg-gray-900">
                <span className="seconday text-xl ">I can work with:</span>
                    <ul className="flex flex-col text-white justify-center items-center">
                        <li>React.Js</li>
                        <li>Express.Js</li>
                        <li>ChatJs</li>
                        <li>React Native</li>
                    </ul>
                </div>
                
            </div>
            <div className="about_header">

            </div>
        </div>
    )
}

export default About