"use client";

import { useState } from "react";
import Countdown from "react-countdown";

function CountdownAlert() {
  const [date, setDate] = useState(Date.now() + 79200000);
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      setDate(Date.now() + 79200000);
      return <></>;
    } else {
      return (
        <div className="countdown">
          <span>
            {days}
            <p>Hari</p>
          </span>
          :
          <span>
            {hours}
            <p>Jam</p>
          </span>
          :
          <span>
            {minutes}
            <p>Menit</p>
          </span>
          :
          <span>
            {seconds}
            <p>Detik</p>
          </span>
        </div>
      );
    }
  };

  return (
    <div className="countdown-container">
      <p>Batas Waktu Promo Berakhir</p>
      <Countdown overtime={true} date={date} renderer={renderer} />
    </div>
  );
}

export default CountdownAlert;
