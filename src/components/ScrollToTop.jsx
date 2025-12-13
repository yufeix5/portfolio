import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash, search } = useLocation();

  useEffect(() => {
    // 每次路由变化都回到顶部
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash, search]);

  return null;
}
