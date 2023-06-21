import PropTypes from "prop-types";

function Project({ year, title, cover, icons }) {
    const articleWidth = 35;
    const figureHeight = articleWidth * 0.6;

    return (
        <article
            className=" justify-self-center max-w-[490px]"
            style={{
                width: `${articleWidth}vw`,
            }}
        >
            <figure
                className="bg-cover bg-center relative max-h-[294px]"
                style={{
                    background: `url('${cover}')`,
                    height: `${figureHeight}vw`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
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
            <div className="flex flex-row flex-wrap gap-5 mt-5">
                {icons.map((icon, index) => (
                    <img
                        src={icon}
                        alt=""
                        key={`icon-${index}`}
                        className="w-10"
                    />
                ))}
            </div>
        </article>
    );
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    icons: PropTypes.arrayOf(PropTypes.string).isRequired,
    cover: PropTypes.string.isRequired,
};

export default Project;