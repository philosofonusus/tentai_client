import React, { useState, useEffect, useRef } from "preact/compat";
import styled from "styled-components";

const placeHolder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";

const Image = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  // Add a smooth animation on loading
  @keyframes loaded {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }

  // I use utilitary classes instead of props to avoid style regenerating
  &.loaded:not(.has-error) {
    animation: loaded 300ms ease-in-out;
  }

  &.has-error {
    content: url(${placeHolder});
  }
`;

const LazyImage = ({ src, alt }) => {
    const placeholder = useRef();
    const [showImage, setShowImage] = useState(false);

    const onLoad = event => {
        event.target.classList.add("loaded");
    };

    const onError = event => {
        event.target.classList.add("has-error");
    };

    useEffect(() => {
        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setShowImage(true);
                }
            });
        };

        const options = {
            threshold: 1.0
        };

        const observer = new IntersectionObserver(callback, options);
        observer.observe(placeholder.current);

        return () => observer.disconnect();
    }, []);
    return (
        <>
            {!showImage
                ? <Image src={placeHolder} ref={placeholder} alt={alt}/>
                : <Image
                    onLoad={onLoad}
                    onError={onError}
                    src={src} alt={alt}
                />
            }
        </>
    )
}

export default LazyImage
