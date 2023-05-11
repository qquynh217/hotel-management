/* eslint-disable react/prop-types */
import { Card } from "antd";
import { thousandSeparator } from "../../constants";
import "./roomCard.scss";

function RoomCard({ room }) {
  return (
    <Card title={`Phòng ${room.name}`} bordered={false} className="room-card">
      <p>Loại phòng: {room.type}</p>
      <p>Mô tả: {room.description}</p>
      <p>
        Giá tiền: <b>{thousandSeparator(room.price)}</b>
      </p>
      <p>Dịch vụ:</p>
      <ul>
        {room.service.map((item, id) => (
          <li key={id}>
            {item.name} x {item.quantity}:{" "}
            <b>{thousandSeparator(item.price * item.quantity)}</b>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default RoomCard;
