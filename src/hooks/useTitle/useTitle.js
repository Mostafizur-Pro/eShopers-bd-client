import { useEffect } from "react";
const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - eShopers`;
  }, [title]);
};

export default useTitle;
