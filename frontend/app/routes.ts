import type { RouteConfig } from "@react-router/dev/routes";
import { index, layout, route } from "@react-router/dev/routes";

export default [
  layout("components/MainLayout.tsx", [
    index("routes/home.tsx"),
    route("login", "routes/login.tsx"),
    route("AboutMe", "routes/AboutMe.tsx"),
    route("ArbeitsErfahrung", "routes/ArbeitsErfahrung.tsx"),
    route("Projekte", "routes/Projekte.tsx"),
    layout("components/ProtectedRoute.tsx", [
      route("admin", "routes/admin/layout.tsx", [
        index("routes/admin/index.tsx"),
        route("new-post", "routes/admin/new-post.tsx"),
        route("edit-post/:slug", "routes/admin/edit-post.tsx"),
      ]),
    ]),
    route("blog", "routes/blog/index.tsx"),
    route("blog/:slug", "routes/blog/post.tsx"),
  ]),
] satisfies RouteConfig;
