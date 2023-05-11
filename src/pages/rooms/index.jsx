import { Col, Row } from "antd";
import RoomCard from "../../components/RoomCard";
import { rooms } from "../../constants/fakeData";

function Rooms() {
  return (
    <div id="room-page">
      <h1>Phòng</h1>
      <Row gutter={20}>
        {rooms.map((item, id) => (
          <Col span={6} key={id}>
            <RoomCard room={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Rooms;
