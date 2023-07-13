import { useEffect } from "react"

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-explor`;
  }, [title])
}

export default useTitle;