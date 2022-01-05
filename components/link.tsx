import React, { FC, useCallback } from "react";
import { redirect } from "aleph/web";

export const Link: FC<{ to: string; replace?: boolean }> = (
  { to, replace, children },
) => {
  const onClick = useCallback((e) => {
    e.preventDefault();
    redirect(to, replace);
  }, [to, replace]);

  const layout = replace ? (
    <span onClick={onClick}>
      {children}
    </span>
  ) :(
    <a onClick={onClick}>
      {children}
    </a>
  );

  return layout;
};
