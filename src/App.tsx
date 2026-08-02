import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Registration = lazy(() => import("./pages/Registration"));
const Schedule = lazy(() => import("./pages/Schedule"));
const GetInvolved = lazy(() => import("./pages/GetInvolved"));
const Pitch = lazy(() => import("./pages/competitions/PitchCompetition"));
const Roleplay = lazy(() => import("./pages/competitions/BusinessRoleplayCompetition"));
const Workshops = lazy(() => import("./pages/events/Workshops"));
const NotFound = lazy(() => import("./pages/NotFound"));

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let animationFrame = 0;
    let observer: MutationObserver | undefined;
    let timeout = 0;

    const finishRouteChange = () => {
      const target = hash
        ? document.getElementById(decodeURIComponent(hash.slice(1)))
        : document.getElementById("main-content") ?? document.querySelector<HTMLElement>("main");

      if (!target) return false;

      if (hash) {
        target.scrollIntoView({ block: "start" });
        target.focus({ preventScroll: true });
      } else {
        window.scrollTo({ top: 0, left: 0 });
        target.focus({ preventScroll: true });
      }

      observer?.disconnect();
      window.clearTimeout(timeout);
      return true;
    };

    animationFrame = window.requestAnimationFrame(() => {
      if (finishRouteChange()) return;

      observer = new MutationObserver(finishRouteChange);
      observer.observe(document.getElementById("root") ?? document.body, { childList: true, subtree: true });
      finishRouteChange();
      timeout = window.setTimeout(() => observer?.disconnect(), 2500);
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(timeout);
      observer?.disconnect();
    };
  }, [pathname, hash]);

  return null;
}

const App = () => (
  <BrowserRouter>
    <ScrollHandler />
    <Suspense fallback={<div className="route-loading" role="status">Loading LaunchPoint...</div>}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/competitions/pitch" element={<Pitch />} />
        <Route path="/competitions/roleplay" element={<Roleplay />} />
        <Route path="/events/workshops" element={<Workshops />} />
        <Route path="/competitions/marketing" element={<Navigate replace to="/competitions/roleplay" />} />
        <Route path="/competitions/ethics" element={<Navigate replace to="/competitions/roleplay" />} />
        <Route path="/competitions/investing" element={<Navigate replace to="/events/workshops" />} />
        <Route path="/events/career-panel" element={<Navigate replace to="/events/workshops" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
