import { Table, Button, Space } from "antd";
import { customers } from "../../constants/fakeData";
import "./customer.scss";
import { useState } from "react";
import ModalCustomer from "../../components/ModalCustomer";

function Customers() {
  // eslint-disable-next-line no-unused-vars
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customer, setCustomer] = useState({});
  const handleEdit = (item) => {
    setCustomer(item);
    setIsModalOpen(true);
  };
  const column = [
    {
      title: "Mã",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên khách hàng",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Ghi chú",
      dataIndex: "note",
      key: "note",
    },
    {
      title: "Action",
      key: "action",
      // eslint-disable-next-line no-unused-vars
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => {
              handleEdit(record);
            }}
          >
            Sửa
          </Button>
          <Button type="primary" danger>
            Xóa
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div id="customer-page">
      <h1>Khách hàng</h1>
      <Button
        type="primary"
        size="large"
        className="add-button"
        onClick={() => {
          setCustomer({});
          setIsModalOpen(true);
        }}
      >
        Thêm khách hàng
      </Button>
      <Table columns={column} dataSource={customers} />
      {isModalOpen && (
        <ModalCustomer
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          item={customer}
        />
      )}
    </div>
  );
}

export default Customers;
