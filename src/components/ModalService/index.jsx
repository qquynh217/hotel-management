import { Form, Input, Modal, Button } from "antd";

// eslint-disable-next-line react/prop-types
function ModalService({ setIsOpen, isOpen }) {
  const closeModal = () => {
    setIsOpen(false);
  };
  const onSubmit = (value) => {
    console.log(value);
  };
  return (
    <Modal
      title="Thêm dịch vụ"
      open={isOpen}
      onOk={closeModal}
      onCancel={closeModal}
      footer={null}
    >
      <Form onFinish={onSubmit} layout="vertical">
        <Form.Item
          label="Tên dịch vụ"
          name="name"
          rules={[
            {
              required: true,
              message: "Chưa điền tên dịch vụ.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Đơn giá"
          name="price"
          rules={[
            {
              required: true,
              message: "Chưa điền đơn giá.",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Mô tả"
          name="description"
          rules={[
            {
              required: true,
              message: "Chưa điền mô tả dịch vụ.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  );
}

export default ModalService;
