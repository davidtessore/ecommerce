import "./titles.scss";

const Titles = ({ data, typeData, style }) => {
    const
        titlesType = [
            { key: 1, value: <h1 className={`titles__${style}`}>{data}</h1> },
            { key: 2, value: <h2 className={`titles__${style}`}>{data}</h2> },
            { key: 3, value: <h3 className={`titles__${style}`}>{data}</h3> },
            { key: 4, value: <h4 className={`titles__${style}`}>{data}</h4> },
            { key: 5, value: <h5 className={`titles__${style}`}>{data}</h5> },
            { key: 6, value: <h6 className={`titles__${style}`}>{data}</h6> },
        ],
        filterTitles = () => {
            for (let i = 0; i < titlesType.length; i++) {
                if (typeData === titlesType[i].key) {
                    return titlesType[i].value
                }
            }
        };

    return (
        filterTitles()
    );
};

export default Titles;