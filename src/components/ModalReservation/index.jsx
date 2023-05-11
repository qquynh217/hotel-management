import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import { rooms } from "../../constants/fakeData";

const { RangePicker } = DatePicker;
// eslint-disable-next-line react/prop-types
function ModalReservation({ isOpen, setIsOpen, onSubmit }) {
  // console.log(item);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Modal
      title="Thêm khách hàng"
      open={isOpen}
      onOk={closeModal}
      onCancel={closeModal}
      footer={null}
    >
      <Form onFinish={onSubmit} layout="vertical">
        <Form.Item
          label="Chọn phòng"
          name="room"
          rules={[
            {
              required: true,
              message: "Chưa chọn phòng.",
            },
          ]}
        >
          <Select>
            {rooms.map((item, id) => (
              <Select.Option value={item.name} key={id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Ngày nhận và trả phòng"
          name="date"
          rules={[
            {
              required: true,
              message: "Chưa chọn ngày.",
            },
          ]}
        >
          <RangePicker />
        </Form.Item>

        <Form.Item label="Ghi chú" name="note" initialValue="">
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  );
}

export default ModalReservation;
