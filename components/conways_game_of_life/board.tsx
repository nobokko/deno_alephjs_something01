import React, {
  createRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { nanoid } from "nanoid";

import Cell, {
  CellImperativeHandles,
} from "~/components/conways_game_of_life/cell.tsx";

export interface BoardImperativeHandles {
  getStep: () => number;
  setSize: (x: number, y: number) => void;
  setScale: (scale: number) => void;
  setNextEventListener: (listener: CallableFunction) => void;
  next: () => void;
}

const Board = forwardRef<BoardImperativeHandles, {
  defaultX?: number;
  defaultY?: number;
  defaultScale?: number;
  loadEventListener: CallableFunction[];
}>(function (
  { defaultX = 32, defaultY = 32, defaultScale = 100, loadEventListener = [] },
  ref,
) {
  interface prevBoardInfo {
    x: number;
    y: number;
    alivemap: boolean[];
  }
  const [prev, setPrev] = useState(
    {
      x: defaultX,
      y: defaultY,
      alivemap: Array(defaultX * defaultY).fill(true),
    } as prevBoardInfo,
  );
  useEffect(() => {
    loadEventListener.forEach((fn) => fn());
  });
  const [x, setX] = useState(defaultX);
  const [y, setY] = useState(defaultY);
  const boardElement = useRef<HTMLDivElement>(null!);

  const [scale, setScale] = useState(defaultScale);
  const style = {
    gridTemplateColumns: `repeat(${x}, 1fr)`,
    height: `1px`,
    width: `1px`,
  };

  useEffect(() => {
    boardElement.current.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    boardElement.current.style.height = `calc(min(95vh, 95vw) * ${
      (x < y ? 1 : (y / x)) * (scale / 100)
    })`;
    boardElement.current.style.width = `calc(min(95vh, 95vw) * ${
      (x > y ? 1 : (x / y)) * (scale / 100)
    })`;
  }, [x, y, scale]);

  let step = 0;
  const NextEventListenerList: CallableFunction[] = [];

  const refCells = useRef<React.MutableRefObject<CellImperativeHandles>[]>([]);
  refCells.current = Array(x * y).fill(null).map((_, i) =>
    refCells.current[i] || createRef<CellImperativeHandles>()
  );
  const cells = Array((x) * (y)).fill(null, 0, x * y).map((_, index) => {
    const cx = Number(index % x);
    const cy = (index - (index % x)) / x;
    return (
      <Cell
        x={cx}
        y={cy}
        life={cx >= prev.x
          ? false
          : (cy >= prev.y ? false : prev.alivemap[prev.x * cy + cx])}
        key={nanoid()}
        ref={refCells.current[index]}
      />
      // <Cell x={1} y={1} key={nanoid()} />
    );
  });

  useImperativeHandle(ref, () => ({
    getStep: () => {
      return step;
    },
    setSize: (newx, newy) => {
      setPrev({
        x: x,
        y: y,
        alivemap: refCells.current.map((r) => r.current.alive()),
      });
      // console.log({ prev });
      setX(newx);
      setY(newy);
    },
    setScale: (newscale) => {
      setPrev({
        x: x,
        y: y,
        alivemap: refCells.current.map((r) => r.current.alive()),
      });
      setScale(newscale);
    },
    setNextEventListener: (listener: CallableFunction) => {
      NextEventListenerList.push(listener);
    },
    next: () => {
      const currentcells = refCells.current.map((r) => r.current);
      const neighbours = currentcells.map((cell, index) => {
        const [cx, cy] = [index % x, (index - (index % x)) / x];
        const px = [cx];
        if (0 <= cx - 1) px.push(cx - 1);
        if (cx + 1 < x) px.push(cx + 1);
        const py = [cy];
        if (0 <= cy - 1) py.push(cy - 1);
        if (cy + 1 < y) py.push(cy + 1);
        return (px.reduce((prev, curx) => {
          return py.reduce((prev, cury) => {
            const idx = cury * x + curx;
            if (index == idx) return prev;
            return prev + (currentcells[idx].alive() ? 1 : 0);
          }, prev);
        }, 0));
      });
      currentcells.forEach((cell, index) => {
        cell.next(neighbours[index]);
      });
      step++;
      NextEventListenerList.forEach((listener) => listener(step));
    },
  }), [x, y, scale, step, refCells]);

  return (
    <>
      <div
        is="cgl-board"
        style={style}
        // data-x={x}
        // data-y={y}
        ref={boardElement}
      >
        {cells}
      </div>
    </>
  );
});

export default Board;
