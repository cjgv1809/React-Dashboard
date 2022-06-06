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

const Calendar = () => {
  return (
    <div className="m-2 md:m-10 p-2 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height={window.innerHeight - 200}
        eventSettings={{ dataSource: scheduleData }}
      >
        <Inject
          services={[Resize, Day, Week, WorkWeek, Month, Agenda, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
