import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import moment from "moment";
import "./styles.css";

dayjs.extend(utc);

// ------------------------------------ //
// -------------- toDate -------------- //
// ------------------------------------ //
const momentToDate = () => {
  // const startOfTodayUTC = moment.utc().startOf('day').toDate();
  const endOfTomorrowUTC = moment.utc().endOf("day").add(1, "day").toDate();
  return endOfTomorrowUTC;
};

const dayjsToDate = () => {
  const endOfTomorrowUTC = dayjs().utc().toDate();
  return endOfTomorrowUTC;
};

// ------------------------------------ //
// -------------- toDate -------------- //
// ------------------------------------ //
const momentAddDay = (dayNumber = 1) => {
  const day = moment.utc().startOf("day").add(dayNumber, "day").toDate();
  return day;
};

const dayJsAddDay = (dayNumber = 1) => {
  const day = dayjs().utc().startOf("day").add(dayNumber, "day").toDate();
  return day;
};

// ------------------------------------ //
// --------------- Unix --------------- //
// ------------------------------------ //
const momentDateToUnix = () => {
  const day = moment.utc().startOf("day").valueOf();
  return day;
};

const dayjsDateToUnix = () => {
  const day = dayjs.utc().startOf("day").valueOf();
  return day;
};

// ------------------------------------ //
// ----------- Unix to Date ----------- //
// ------------------------------------ //
const momentUnixToDate = (date = 1657756800000) => {
  const day = moment.utc(date).startOf("day").toDate();
  return day;
};

const dayjsUnixToDate = (date = 1657756800000) => {
  const day = dayjs.utc(date).startOf("day").toDate();
  return day;
};

console.log("------");
console.log("momentToDate", momentToDate());
console.log("dayjsToDate", dayjsToDate());
console.log("------");
console.log("momentAddDay", momentAddDay());
console.log("dayJsAddDay", dayJsAddDay());
console.log("------");
console.log("momentDateToUnix", momentDateToUnix());
console.log("dayjsDateToUnix", dayjsDateToUnix());
console.log("------");
console.log("momentUnixToDate", momentUnixToDate());
console.log("dayjsUnixToDate", dayjsUnixToDate());

const App = () => {
  return (
    <div className="App">
      <div className="main">
        <h1>Javascript Date manipulation</h1>
        <h3>MomentJs vs DayJs</h3>
      </div>
      <footer>
        <a href="https://tiavina-michael-ralainirina.herokuapp.com/">
          Tiavina Michael Ralainirina
        </a>
      </footer>
    </div>
  );
};

export default App;
