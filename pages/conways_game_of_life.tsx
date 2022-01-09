import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import Board, {
  BoardImperativeHandles,
} from "~/components/conways_game_of_life/board.tsx";

export default function LifeGame(
  { pageProps }: { pageProps: Record<string, unknown> },
) {
  const boardLoadEventListener: CallableFunction[] = [];

  const x = 64;
  const y = 32;

  const refCgolOperationBox = useRef(null!);
  const refCgolInformatonBox = useRef(null!);

  const refBoard = useRef<BoardImperativeHandles>(null!);

  const refCgolParameterBox = useRef<
    { setSize: (x: number, y: number) => void }
  >(null!);
  useEffect(() => {
    refCgolParameterBox.current.setSize(x, y);
  }, []);

  const CgolParameterBox = forwardRef(
    (
      { defaultX, defaultY, defaultSec, defaultScale, setSize, setBScale }: {
        defaultX: number;
        defaultY: number;
        defaultSec: number;
        defaultScale: number;
        setSize: CallableFunction;
        setBScale: CallableFunction;
      },
      ref,
    ) => {
      const [x, setX] = useState(defaultX);
      const refX = useRef<HTMLInputElement>(null!);
      const [y, setY] = useState(defaultY);
      const refY = useRef<HTMLInputElement>(null!);
      function onchangesize() {
        try {
          const newx = parseInt(refX.current.value);
          const newy = parseInt(refY.current.value);

          if (newx && newy) {
            setX(newx);
            setY(newy);
            setSize(newx, newy);
          }
        } catch (exce) {
          console.error({ exce });
        }
      }

      const [sec, setSec] = useState(defaultSec);
      const refSec = useRef<HTMLInputElement>(null!);
      function onchangesec() {
        try {
          const newsec = parseInt(refSec.current.value);

          if (newsec) {
            setSec(newsec);
            refCgolOperationBox.current.setSec(newsec);
          }
        } catch (exce) {
          console.error({ exce });
        }
      }

      const [scale, setScale] = useState(defaultScale);
      const refScale = useRef<HTMLInputElement>(null!);
      function onchangescale() {
        try {
          const newscale = parseInt(refScale.current.value);

          if (newscale) {
            setScale(newscale);
            setBScale(newscale);
          }
        } catch (exce) {
          console.error({ exce });
        }
      }

      useImperativeHandle(ref, () => ({
        setSize: (x: number, y: number) => {
          setX(x);
          setY(y);
        },
      }), [x, y]);

      return (
        <details is="cgol-parameter-box" open={true}>
          <summary>parameter</summary>
          <label htmlFor="boardx">x : {x}</label>
          <input
            id="boardx"
            type="range"
            min={8}
            max={128}
            step={8}
            value={x}
            ref={refX}
            onChange={onchangesize}
          >
          </input>

          <label htmlFor="boardy">y : {y}</label>
          <input
            id="boardy"
            type="range"
            min={8}
            max={128}
            step={8}
            value={y}
            ref={refY}
            onChange={onchangesize}
          >
          </input>

          <label htmlFor="boardsec">auto speed : {sec}</label>
          <input
            id="boardsec"
            type="range"
            min={1}
            max={5}
            step={1}
            value={sec}
            ref={refSec}
            onChange={onchangesec}
          >
          </input>

          <label htmlFor="boardscale">scale : {scale}</label>
          <input
            id="boardscale"
            type="range"
            min={25}
            max={1000}
            step={25}
            value={scale}
            ref={refScale}
            onChange={onchangescale}
          >
          </input>
        </details>
      );
    },
  );

  const CgolInformatonBox = forwardRef(({}, ref) => {
    const [step, setStep] = useState(0);

    boardLoadEventListener.push(() => {
      refBoard.current.setNextEventListener((step: number) => {
        setStep(step);
      });
    });

    return (
      <>
        <div>step : {step}</div>
      </>
    );
  });

  const CgolOperationBox = forwardRef(({}, ref) => {
    const [autonext, setAutonext] = useState(false);
    const [sec, setSec] = useState(3);
    useEffect(() => {
      let loop = autonext;
      let stHandle = 0;
      if (autonext) {
        const f = () => {
          refBoard.current.next();
          if (loop) stHandle = setTimeout(f, sec * 1000);
        };
        f();
      }
      return () => {
        loop = false;
        if (stHandle) clearTimeout(stHandle);
      };
    }, [autonext, sec]);

    function onclicknext() {
      refBoard.current.next();
    }

    function onclickautostart() {
      setAutonext(true);
    }
    function onclickautoend() {
      setAutonext(false);
    }

    useImperativeHandle(ref, () => ({
      setSec: (sec: number) => {
        setSec(sec);
      },
    }), [sec]);

    return (
      <details is="cgol-operation-box" open={true}>
        <summary>operation</summary>
        <input id="boardnext" type="button" value="次世代へ" onClick={onclicknext}>
        </input>
        <input
          id="boardautostart"
          type="button"
          value={autonext ? "自動実行の停止" : "自動実行の開始"}
          onClick={autonext ? onclickautoend : onclickautostart}
        >
        </input>
      </details>
    );
  });

  return (
    <div>
      <head>
        <title>Conway's Game of Life</title>
        <link rel="stylesheet" href="../style/conways_game_of_life.css" />
      </head>
      <h1>Conway's Game of Life</h1>
      <CgolParameterBox
        defaultX={x}
        defaultY={y}
        defaultSec={3}
        defaultScale={100}
        setSize={(x: number, y: number) => {
          refBoard.current.setSize(x, y);
        }}
        setBScale={(scale: number) => {
          refBoard.current.setScale(scale);
        }}
        ref={refCgolParameterBox}
      />
      <div>
        <Board
          defaultX={x}
          defaultY={y}
          defaultScale={100}
          ref={refBoard}
          loadEventListener={boardLoadEventListener}
        />
      </div>
      <CgolInformatonBox ref={refCgolInformatonBox} />
      <CgolOperationBox ref={refCgolOperationBox} />
    </div>
  );
}
