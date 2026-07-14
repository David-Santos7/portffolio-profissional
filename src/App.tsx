import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import Privacy from "@/pages/Privacy";

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/") {
    return <Index />;
  }

  if (path === "/privacidade") {
    return <Privacy />;
  }

  return <NotFound />;
}

export default App;
