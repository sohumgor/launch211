import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ScheduleList from "@/components/ScheduleList";
import Seo from "@/components/Seo";
import { event } from "@/content/site";

const Schedule = () => <div className="site-shell"><Seo title="Schedule | LaunchPoint" description="The working schedule for LaunchPoint on October 17, 2026."/><Navbar/><main>
  <PageHero eyebrow="Conference day" title="One focused Saturday." intro="Competition in the morning. Professional learning in the afternoon. A clear day built to keep students moving and engaged."/>
  <section className="section"><div className="site-container schedule-layout"><div className="schedule-heading"><p className="eyebrow">Working plan</p><h2>{event.dateShort}</h2><p>{event.time}<br/>{event.venue}<br/>{event.address}</p><div className="callout"><strong>Planning note</strong><p>Date, venue, and session times reflect the current conference plan. Final confirmation will be posted before registration opens.</p></div></div><ScheduleList/></div></section>
</main><Footer/></div>;
export default Schedule;

