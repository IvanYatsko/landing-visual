import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import sliderImg from "../../img/slider-img.webp";
import sliderArrow from "../../img/svg/slider-arrow.svg";
import "./Slider.scss";
import "keen-slider/keen-slider.min.css";
import { ArrowProps } from "../../types";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="navigation-wrapper">
      <div ref={sliderRef} className="keen-slider slider">
        <img
          className="keen-slider__slide slider__image"
          src={sliderImg}
          alt="apartments"
        />
        <img
          className="keen-slider__slide slider__image"
          src={sliderImg}
          alt="apartments"
        />
        <img
          className="keen-slider__slide slider__image"
          src={sliderImg}
          alt="apartments"
        />
        <img
          className="keen-slider__slide slider__image"
          src={sliderImg}
          alt="apartments"
        />
        <img
          className="keen-slider__slide slider__image"
          src={sliderImg}
          alt="apartments"
        />
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
    </div>
  );
}

function Arrow({ disabled, left, onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className={`slider-arrow ${
        left ? "slider-arrow__left" : "slider-arrow__right"
      }${disabled ? ' slider-arrow__disabled' : ''}`}
    >
      <img src={sliderArrow} alt="slider-arrow" />
    </button>
  );
}
