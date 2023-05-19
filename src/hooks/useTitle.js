import { useEffect } from "react"

const useTitle = title => {
    // const name = ToyVerse;
    useEffect(() => {
        document.title = `ToyVerse | ${title}`;
    }, [title])
}

export default useTitle;