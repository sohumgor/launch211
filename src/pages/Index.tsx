import { ArrowRight, BriefcaseBusiness, CalendarDays, GraduationCap, MapPin, Presentation, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqList from "@/components/FaqList";
import ScheduleList from "@/components/ScheduleList";
import Seo from "@/components/Seo";
import chamberLogo from "@/assets/Palatine_Chamber_Logo.png";
import { competitions, event, prizeLevels } from "@/content/site";

const Index = () => (
  <div className="site-shell">
    <Seo title="LaunchPoint" description="A student-led regional business conference where high school students compete, learn from professionals, and build real-world business experience." />
    <Navbar />
    <main id="main-content" tabIndex={-1}>
      <section className="home-hero">
        <div className="hero-grid-pattern" aria-hidden="true" />
        <div className="site-container home-hero-grid">
          <div className="hero-copy">
            <div className="status-pill"><span /> Fall 2026 conference</div>
            <h1>Business gets real<br /><em>at LaunchPoint.</em></h1>
            <p className="hero-lede">Compete in real-world business challenges, pitch original ventures, and learn directly from the professionals shaping the local economy.</p>
            <div className="hero-actions">
              <Link to="/registration" className="button button-primary">Get conference updates <ArrowRight aria-hidden="true" /></Link>
              <Link to="/about" className="button button-ghost">Explore the conference</Link>
            </div>
            <p className="hero-note">Open to high school students. No club membership or prior competition experience required.</p>
          </div>

          <aside className="event-ticket" aria-label="Conference details">
            <div className="ticket-topline"><span>LaunchPoint 2026</span><span>LP—01</span></div>
            <div className="ticket-date ticket-date-tbd"><span>OCT</span><strong>TBD</strong><span>2026</span></div>
            <div className="ticket-rule" />
            <dl className="ticket-details">
              <div><dt><CalendarDays aria-hidden="true" />Date</dt><dd>October 2026 · Date TBD</dd></div>
              <div><dt><MapPin aria-hidden="true" />Venue</dt><dd>Palatine High School</dd></div>
              <div><dt><Users aria-hidden="true" />Expected</dt><dd>75–120 students</dd></div>
            </dl>
            <p className="ticket-planning">Registration updates will include any schedule or venue changes.</p>
          </aside>
        </div>
      </section>

      <section className="proof-strip" aria-label="Conference highlights">
        <div className="site-container proof-grid">
          <div><strong>2</strong><span>business competitions</span></div>
          <div><strong>$2K</strong><span>competition award pool</span></div>
          <div><strong>3</strong><span>workshop tracks</span></div>
          <div><strong>1</strong><span>regional student community</span></div>
        </div>
      </section>

      <section className="section section-intro">
        <div className="site-container split-heading">
          <div>
            <p className="eyebrow">Learning by doing</p>
            <h2>A conference built around the decisions business leaders actually make.</h2>
          </div>
          <div className="intro-copy">
            <p>LaunchPoint closes the distance between classroom concepts and professional practice. Students analyze, present, defend, question, and connect—inside an environment designed with local business leaders.</p>
            <Link to="/about" className="text-link">Why LaunchPoint exists <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="section competition-section">
        <div className="site-container">
          <div className="section-heading-row">
            <div><p className="eyebrow">Choose your challenge</p><h2>Two ways to step into the room.</h2></div>
            <p>One prepared. One live. Both judged by professionals who expect students to explain the thinking behind every decision.</p>
          </div>
          <div className="competition-grid">
            {competitions.map((competition, index) => (
              <Link to={competition.href} className="competition-panel" key={competition.slug}>
                <div className="panel-number">0{index + 1}</div>
                <p className="eyebrow">{competition.eyebrow}</p>
                <h3>{competition.title}</h3>
                <p>{competition.summary}</p>
                <div className="panel-facts"><span>{competition.preparation}</span><span>{competition.format}</span></div>
                <div className="panel-link">See competition details <ArrowRight aria-hidden="true" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section experience-section">
        <div className="site-container experience-grid">
          <div className="experience-lead">
            <p className="eyebrow eyebrow-light">Beyond the competition</p>
            <h2>Meet the people behind the work.</h2>
            <p>Explore Marketing, Finance, and Business Management at LaunchPoint. Workshop details will be announced soon.</p>
            <Link to="/events/workshops" className="button button-light">Explore workshops <ArrowRight aria-hidden="true" /></Link>
          </div>
          <div className="experience-list">
            <article><Presentation aria-hidden="true" /><div><span>01</span><h3>Marketing Workshop</h3></div></article>
            <article><BriefcaseBusiness aria-hidden="true" /><div><span>02</span><h3>Finance Workshop</h3></div></article>
            <article><GraduationCap aria-hidden="true" /><div><span>03</span><h3>Business Management Workshop</h3></div></article>
          </div>
        </div>
      </section>

      <section className="section schedule-section">
        <div className="site-container schedule-layout">
          <div className="schedule-heading">
            <p className="eyebrow">One focused conference day</p>
            <h2>The conference day at a glance.</h2>
            <p>{event.date}<br />{event.time}<br />{event.venue}</p>
            <Link to="/schedule" className="text-link">View schedule notes <ArrowRight aria-hidden="true" /></Link>
          </div>
          <ScheduleList />
        </div>
      </section>

      <section className="section awards-section">
        <div className="site-container awards-grid">
          <div className="awards-copy">
            <p className="eyebrow eyebrow-gold">Awards & continuation</p>
            <h2>Recognition that keeps the work moving.</h2>
            <p>Each primary competition includes a $1,000 award pool, plus opportunities for professional feedback, mentorship, and connections to Chamber member businesses.</p>
            <p className="fine-print">Official competition rules will explain award eligibility, approved uses, and disbursement.</p>
          </div>
          <div className="prize-list">
            {prizeLevels.map((prize) => <div key={prize.place}><span>{prize.place}</span><strong>{prize.amount}</strong><small>per competition</small></div>)}
          </div>
        </div>
      </section>

      <section className="section partner-section">
        <div className="site-container partner-grid">
          <div><p className="eyebrow">Strategic lead partner</p><h2>Built with the Palatine business community.</h2><p>The Palatine Area Chamber of Commerce provides community credibility and helps connect LaunchPoint with judges, speakers, mentors, sponsors, and local businesses.</p></div>
          <div className="partner-logo"><img src={chamberLogo} alt="Palatine Area Chamber of Commerce" /></div>
        </div>
      </section>

      <section className="section faq-section" id="faq" tabIndex={-1}>
        <div className="site-container faq-grid">
          <div><p className="eyebrow">Good to know</p><h2>Questions before registration opens.</h2><p>Registration details and official competition rules will be added as soon as they are confirmed.</p></div>
          <FaqList />
        </div>
      </section>

      <section className="closing-cta">
        <div className="site-container closing-cta-inner">
          <div><p className="eyebrow eyebrow-light">Fall 2026</p><h2>Your next business decision starts here.</h2></div>
          <div><p>Registration details will be posted as soon as eligibility, team selection, and the final conference date are confirmed.</p><Link to="/registration" className="button button-light">View registration updates <ArrowRight aria-hidden="true" /></Link></div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Index;
