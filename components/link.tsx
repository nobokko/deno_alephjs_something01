import React, { FC, useCallback, useEffect, useState } from "react";
import { redirect } from "aleph/web";
import { useRouter } from "aleph/react";

import { addHistory, HistoryInfo } from "~/lib/history.ts";
import { nanoid } from "nanoid";

export const Link: FC<{ to: string; replace?: boolean; rel?: string }> = (
  { to, replace, rel, children },
) => {
  const { pathname, routePath } = useRouter();

  const [changed, setChanged] = useState(false);

  // todo : 場所移動
  const PATH_TITLE_MAP: { [key: string]: string } = {
    "/": "Home",
    "/react_todo_list_beginning": "Todo管理",
    "/conways_game_of_life": "らいふげぇむ",
  };

  useEffect(() => {
    if (changed) {
      setChanged(false);
      addHistory(
        {
          url: pathname,
          title: PATH_TITLE_MAP?.[routePath] ?? pathname,
        } as HistoryInfo,
        to
      );
      redirect(to, replace);
    }
  }, [changed]);

  const onClick = (e) => {
    e.preventDefault();
    setChanged(true);
  };

  const layout = replace
    ? (
      <span onClick={onClick} key={'link_' + nanoid()}>
        {children}
      </span>
    )
    : (
      <a rel={rel} onClick={onClick} key={'link_' + nanoid()}>
        {children}
      </a>
    );

  return layout;
};
