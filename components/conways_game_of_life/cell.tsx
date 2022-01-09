import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export interface CellImperativeHandles {
  alive: () => boolean;
  next: (neighbour: number) => void;
}

const Cell = forwardRef<
  CellImperativeHandles,
  { x?: number; y?: number; life?: boolean }
>(
  function (
    { x, y, life },
    ref,
  ) {
    const [alive, setAlive] = useState(life ?? false);
    const c = useRef<HTMLDivElement>(null!);
    function onclickcell() {
      if (c.current.hasAttribute("data-live")) {
        // c.current.removeAttribute("data-live");
        setAlive(false);
      } else {
        // c.current.setAttribute("data-live", "true");
        setAlive(true);
      }
    }
    useEffect(() => {}, [alive]);

    useImperativeHandle(ref, () => ({
      alive: () => {
        // console.log(`${x} ${y} ${alive}`);
        return alive;
      },
      next: (neighbour: number) => {
        switch (true) {
          // 誕生
          // 死んでいるセルに隣接する生きたセルがちょうど3つあれば、次の世代が誕生する。
          case (!alive && neighbour === 3):
            // console.log("誕生");
            setAlive(true);
            break;
          // 生存
          // 生きているセルに隣接する生きたセルが2つか3つならば、次の世代でも生存する。
          case (alive && (neighbour === 2 || neighbour === 3)):
            // console.log("生存");
            break;
          // 過疎
          // 生きているセルに隣接する生きたセルが1つ以下ならば、過疎により死滅する。
          case (alive && (neighbour <= 1)):
            // console.log("過疎");
            setAlive(false);
            break;
          // 過密
          // 生きているセルに隣接する生きたセルが4つ以上ならば、過密により死滅する。
          case (alive && (4 <= neighbour)):
            // console.log("過密");
            setAlive(false);
            break;
        }
        // setNeighbour(0);
      },
    }), [alive]);

    return (
      <div
        is="cgl-cell"
        data-x={x}
        data-y={y}
        data-live={alive ? true : null}
        ref={c}
        onClick={() => onclickcell()}
      >
      </div>
    );
  },
);

export default Cell;
