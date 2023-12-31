import { useState, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import PropTypes from "prop-types";

function ProjectItem({ year, title, cover, icons, index }) {
    const [windowWidth] = useState(window.innerWidth);
    const desktopResolution = windowWidth > 640;

    // Détermination des tailles et ratio des dimensions d'un item Project
    // en fonction de la résolution
    const articleWidth = desktopResolution ? 35 : 80;
    const figureHeight = articleWidth * 0.6;

    const article = useRef();
    const image = useRef();
    const [isHover, setIsHover] = useState(false);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Effet de profondeur de l'image des items Project au survol
            if (desktopResolution) {
                if (isHover) {
                    gsap.to(image.current, {
                        scale: 1.3,
                        duration: 0.5,
                        ease: "power1.inOut",
                    });
                }
                if (!isHover) {
                    gsap.from(image.current, {
                        scale: 1.3,
                        duration: 0.5,
                        ease: "power1.inOut",
                    });
                }
            }
        }, article);
        return () => ctx.revert();
    }, [desktopResolution, isHover]);

    return (
        <article
            className=" justify-self-center max-w-[490px] "
            style={{
                width: articleWidth + "vw",
            }}
            ref={article}
        >
            <Link
                to={`/project/${index}`}
                // Gestion du survol du lien contenu dans les items Project
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <figure className="relative max-h-[294px] rounded-sm overflow-hidden shadow-lg">
                    <img
                        src={cover}
                        alt=""
                        className="w-full h-full object-cover object-center project-image"
                        style={{
                            height: figureHeight + "vw",
                        }}
                        ref={image}
                    />
                    <div className="w-full h-full absolute top-0 left-0 z-10 gradient"></div>
                    <figcaption className="absolute left-[5%] bottom-[7%] z-20 text-white leading-none">
                        <span
                            style={{
                                fontSize: "clamp(1rem, 1.5vw, 1.7rem)",
                            }}
                        >
                            {year}
                        </span>
                        <br />
                        <span
                            style={{
                                fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)",
                            }}
                        >
                            {title}
                        </span>
                    </figcaption>
                </figure>
            </Link>
            <div className="flex flex-row flex-wrap gap-5 mt-5">
                {icons.map((icon, index) => (
                    <img
                        src={icon}
                        alt=""
                        key={`icon-${index}`}
                        className="w-8 sm:w-10"
                    />
                ))}
            </div>
        </article>
    );
}

ProjectItem.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    icons: PropTypes.arrayOf(PropTypes.string).isRequired,
    cover: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};

export default ProjectItem;
