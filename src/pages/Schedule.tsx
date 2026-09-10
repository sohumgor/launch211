import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ScheduleList from "@/components/ScheduleList";
import Seo from "@/components/Seo";
import { event } from "@/content/site";

const Schedule = () => <div className="site-shell"><Seo title="Schedule | LaunchPoint" description="The planned schedule for the LaunchPoint conference in October 2026."/><Navbar/><main>
  <PageHero eyebrow="Conference day" title="One focused conference day." intro="Competition in the morning. Professional learning in the afternoon. A clear day built to keep students moving and engaged."/>
  <section className="section"><div className="site-container schedule-layout"><div className="schedule-heading"><p className="eyebrow">Conference schedule</p><h2>{event.dateShort}</h2><p>{event.time}<br/>{event.venue}<br/>{event.address}</p><div className="callout"><strong>Schedule updates</strong><p>Session timing may be adjusted as speakers and workshop leaders are confirmed. Registered participants will receive the final event-day schedule.</p></div></div><ScheduleList/></div></section>
</main><Footer/></div>;
export default Schedule;
