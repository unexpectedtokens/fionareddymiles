import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Cursor } from "../components/cursor";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <Cursor />
      <Outlet />
    </>
  );
}
