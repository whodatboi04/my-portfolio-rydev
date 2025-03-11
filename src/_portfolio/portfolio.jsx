
import AboutMe from "./_pages/aboutme";
import Home from "./_pages/home";
import Project from "./_pages/project";
import Experience from "./_pages/experience";
import Contact from "./_pages/contact";

export default function portfolio() {

    return (
        <main className='flex flex-col justify-center items-center dark:bg-dark'>
            <Home/>
            <AboutMe/>
            <Project/>
            <Experience/>
            <Contact />
        </main>
    )
}
