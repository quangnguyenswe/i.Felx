import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function LocalTime() {
  const [localTime, setLocalTime] = useState<string>(
    dayjs().tz("Asia/Ho_Chi_Minh").format("h:mm A"),
  );

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setLocalTime(dayjs().tz("Asia/Ho_Chi_Minh").format("h:mm A"));
    }, 5000);

    return () => clearInterval(timeInterval);
  }, []);

  return <>{localTime}</>;
}
