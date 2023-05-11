import { Table } from "antd";
import { employees } from "../../constants/fakeData";

function Employees() {
  const colums = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mức lương",
      dataIndex: "salary",
      key: "salary",
    },
    {
      title: "Vị trí",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Số điện thoại",
      dataIndex: "contact",
      key: "contact",
    },
  ];
  return (
    <div id="employee-page">
      <h1>Nhân viên</h1>
      <Table dataSource={employees} columns={colums} />
    </div>
  );
}

export default Employees;
