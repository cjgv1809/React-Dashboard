import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Page,
  Edit,
  Inject,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

const Employees = () => {
  return (
    <div className="m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        width="auto"
        toolbar={["Search"]}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Resize, Sort, ContextMenu, Page, Edit, Search, Toolbar]}
        />
      </GridComponent>
    </div>
  );
};

export default Employees;
