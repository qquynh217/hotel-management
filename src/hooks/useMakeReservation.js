import { useState } from "react";
import { formatDate } from "../utils";

export const useMakeReservation = () => {
  const [reservations, setReservations] = useState([]);
  const onSubmit = (value) => {
    value.note = value.note ? value.note : "";
    const data = {
      room: value.room,
      arrival: formatDate(value.date[0]),
      departure: formatDate(value.date[1]),
      note: value.note,
    };
    console.log(data);
    setReservations((prev) => [...prev, data]);
  };
  return {
    onSubmit,
    reservations,
  };
};
