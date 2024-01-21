import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col w-full flex-grow ">{children}</div>;
}

export default layout;
