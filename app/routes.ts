import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("/contact", "./routes/contact.tsx"),
    route("/register", "./routes/register.tsx"),
    route("/categories", "./routes/categories.tsx"),
    route("/schedule", "./routes/schedule.tsx"),
  ]),
] satisfies RouteConfig;
