export const column = [
  {
    title: "STT",
    dataIndex: "id",
    key: "id",
    render: (item, record, id) => <>{id + 1}</>,
  },
  {
    title: "Phòng",
    dataIndex: "room",
    key: "room",
  },
  {
    title: "Ngày nhận",
    dataIndex: "arrival",
    key: "arrival",
  },
  {
    title: "Ngày trả",
    dataIndex: "departure",
    key: "departure",
  },
  {
    title: "Ghi chú",
    dataIndex: "note",
    key: "note",
  },
];
