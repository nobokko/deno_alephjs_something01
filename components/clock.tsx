// react is a compulsoy import in Aleph
import React, { useEffect, useState } from "react";
import { Fallback } from "aleph/react";

// import the dayjs npm library using esm.sh
import dayjs from "dayjs";
import utc from "dayjs/utc";
import timezone from "dayjs/timezone";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "my-clock": { children: (string | Element)[] };
    }
  }
}

dayjs.extend(utc);
dayjs.extend(timezone);

// capitalize the function name so it's recognized as a React component
export default function Clock() {
  const [nowdatetime, setNowdatetime] = useState(
    dayjs().format("YYYY-MM-DD HH:mm:ss"),
  );
  const [tztypes, setTztypes] = useState([
    "Asia/Tokyo",
    "Europe/London",
    "America/Los_Angeles",
  ]);
  const [nowTimezone, setNowTimezone] = useState(tztypes[0]);

  const handleTztypesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log([e.target.value]);
    const val = e.target.value;
    setNowTimezone(tztypes[parseInt(val)]);
  };

  useEffect(() => {
    // console.log({ nowTimezone });
    let loop = true;
    const f = () => {
      if (loop) {
        setNowdatetime(dayjs().tz(nowTimezone).format("YYYY-MM-DD HH:mm:ss"));
        setTimeout(f, 500);
      }
    };
    f();

    return () => {
      loop = false;
    };
  }, [nowTimezone]);

  // call the dayjs function directly to display today's date
  return (
    <my-clock>
      <Fallback to={<p>loading...</p>}>
        {nowdatetime}
        <select
          name="clock-tz"
          onChange={(e) => handleTztypesChange(e)}
        >
          {tztypes.map((Add) => Add).map((address, key) => (
            <option key={key} value={key}>{address}</option>
          ))}
        </select>
      </Fallback>
    </my-clock>
  );
}
