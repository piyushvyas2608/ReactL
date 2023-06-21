import Hourcounter from "./HourCounter";
import ImportantNotice from "./props";
// import SectionFaq from "./components/home/Faq";
// import Project from "./components/home/Userprofile";
export default function Home(){
    return(
        <>
        <ImportantNotice notice="Every Employ shoud work Atleast 8 hours a Day"></ImportantNotice>
        <div className="d-flex">
          <Hourcounter name="Piyush" lastname="Vyas" Location="Jodhpur" description="FrontEnd Web Developer Intern"></Hourcounter>
          <Hourcounter name="Mohan" lastname="Singh " Location="Jodhpur" description="FullStack Web Developer"></Hourcounter>
          <Hourcounter name="Ankit" lastname="Goyal" Location="Jodhpur" description="FullStack Web Developer"></Hourcounter>
        </div>
        {/* <Hourcounter></Hourcounter> */}
        
        {/* <SectionFaq></SectionFaq> */}
        </>
    )
}