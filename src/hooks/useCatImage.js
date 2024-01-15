import { useEffect, useState } from "react";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com/cat/says/";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    console.log(fact);
    if (!fact) return;
    const firstWord = fact.split(" ", 1)[0];
    setImageUrl(firstWord);
  }, [fact]);

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` };
}
