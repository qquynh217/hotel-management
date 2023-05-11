import { Button, Table } from "antd";
import { useState } from "react";
import ModalService from "../../components/ModalService";
import { service } from "../../constants/fakeData";
import "./service.scss";

function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const column = [
    {
      title: "Mã",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên dịch vụ",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Đơn giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
  ];
  return (
    <div id="service-page">
      <h1>Dịch vụ</h1>
      <Button
        type="primary"
        size="large"
        className="add-button"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Thêm dịch vụ
      </Button>
      <Table dataSource={service} columns={column} />
      {isModalOpen && (
        <ModalService isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </div>
  );
}

export default Services;
