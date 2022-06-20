import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../data/dummy";
import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Calendar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height={window.innerHeight - 200}
        eventSettings={{ dataSource: scheduleData }}
        // style={{ backgroundColor: currentMode === "Dark" ? "#33373E" : "#fff" }}
      >
        <Inject
          services={[Resize, Day, Week, WorkWeek, Month, Agenda, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
