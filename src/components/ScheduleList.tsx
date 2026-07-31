import { schedule } from "@/content/site";

const ScheduleList = () => (
  <div className="schedule-list">
    {schedule.map((item, index) => (
      <article className="schedule-row" key={item.time}>
        <div className="schedule-index">{String(index + 1).padStart(2, "0")}</div>
        <time>{item.time}</time>
        <div><h3>{item.title}</h3><p>{item.detail}</p></div>
      </article>
    ))}
  </div>
);

export default ScheduleList;
