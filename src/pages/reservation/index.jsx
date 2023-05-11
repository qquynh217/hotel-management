import { Button, Form, Input, Table } from "antd";
import { useState } from "react";
import ModalReservation from "../../components/ModalReservation";
import { useMakeReservation } from "../../hooks/useMakeReservation";
import { column } from "./constants";
import "./reservation.scss";

function Reservations() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { reservations, onSubmit } = useMakeReservation();
  const handleSubmit = (val) => {
    console.log(val, reservations);
  };
  return (
    <div id="reservation-page">
      <h1 className="title">Đặt phòng</h1>
      <Form onFinish={handleSubmit}>
        <Form.Item
          label="SĐT khách hàng"
          name="phone"
          rules={[
            {
              required: true,
              message: "Chưa điền số điện thoại.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mã nhân viên"
          name="employeeId"
          rules={[
            {
              required: true,
              message: "Chưa điền mã nhân viên.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button
          type="primary"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Thêm phòng
        </Button>
        <Table
          columns={column}
          dataSource={reservations}
          pagination={false}
        ></Table>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Đặt phòng
          </Button>
        </Form.Item>
      </Form>
      {isModalOpen && (
        <ModalReservation
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
}

export default Reservations;
