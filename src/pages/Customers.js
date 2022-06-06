import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
  Search,
  Resize,
  ContextMenu,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        width="auto"
        toolbar={["Search", "Delete"]}
        editSettings={{ allowEditing: true, allowDeleting: true }}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Page,
            Edit,
            Search,
            Toolbar,
            Selection,
            Filter,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
