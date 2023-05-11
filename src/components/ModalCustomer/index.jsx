import { Modal, Form, Input, Button } from "antd";

// eslint-disable-next-line react/prop-types
function ModalCustomer({ isOpen, setIsOpen, item }) {
  console.log(item);
  const closeModal = () => {
    setIsOpen(false);
  };
  const onSubmit = (value) => {
    value.note = value.note ? value.note : "";
    console.log(value);
  };
  return (
    <Modal
      title="Thêm khách hàng"
      open={isOpen}
      onOk={closeModal}
      onCancel={closeModal}
      footer={null}
    >
      <Form onFinish={onSubmit} layout="vertical" initialValues={item}>
        <Form.Item
          label="Mã khách hàng"
          name="id"
          rules={[
            {
              required: true,
              message: "Chưa điền mã khách hàng.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Tên khách hàng"
          name="name"
          rules={[
            {
              required: true,
              message: "Chưa điền tên khách hàng.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Số điện thoại"
          name="phone"
          rules={[
            {
              required: true,
              message: "Chưa điền số điện thoại.",
            },
          ]}
        >
          <Input type="number" />
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

export default ModalCustomer;
