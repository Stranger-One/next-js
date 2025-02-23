import React from "react";

function Layout(props: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <>
      {props.modal}
      {props.children}
    </>
  );
}

export default Layout;
