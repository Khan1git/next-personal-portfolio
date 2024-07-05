import About from "@/components/About";
import Connect from "@/components/Connect";
import Profile from "@/components/Profile";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
     <div>
      <Profile/>
      <About/>
      <Skills/>
      <Work/>
      <Project/>
      <Connect/>
     </div>
    </>

  )
}
