import "./titles.scss";

const Titles = ({ title, sizeTitle, styleTitle }) => {
    const
        titlesType = [
            { key: 1, value: <div className="titles"><h1 className={`titles__${styleTitle}`}>{title}</h1></div> },
            { key: 2, value: <div className="titles"><h2 className={`titles__${styleTitle}`}>{title}</h2></div> },
            { key: 3, value: <div className="titles"><h3 className={`titles__${styleTitle}`}>{title}</h3></div> },
            { key: 4, value: <div className="titles"><h4 className={`titles__${styleTitle}`}>{title}</h4></div> },
            { key: 5, value: <div className="titles"><h5 className={`titles__${styleTitle}`}>{title}</h5></div> },
            { key: 6, value: <div className="titles"><h6 className={`titles__${styleTitle}`}>{title}</h6></div> },
        ],
        filterTitles = () => {
            for (let i = 0; i < titlesType.length; i++) {
                if (sizeTitle === titlesType[i].key) {
                    return titlesType[i].value
                }
            }
        };

    return (
        filterTitles()
    );
};

export default Titles;