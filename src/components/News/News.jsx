import React from "react";
import classes from './News.module.css';

let News = (props) => {
    if(props.news.length === 0)
    {
        props.setNews([
            {
                id: 1,
                newsUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Achtung.svg/1169px-Achtung.svg.png',
                title: "Опубликовано видео с давкой во время религиозного праздника в Израиле",
                body: 'В Сети появилось видео с религиозного праздника Лаг Ба-Омер в Израиле, где в давке погибли десятки людей.',
                likeCount: 10,
                liked: true
            },
            {
                id: 2,
                newsUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Achtung.svg/1169px-Achtung.svg.png',
                title: "В Крыму ответили на претензии ЕП по судоходству в Керченском проливе",
                body: 'Проблем с судоходством в Керченском проливе нет, для беспрепятственного прохода судам нужно соблюдать действующий порядок, претензии Европарламента на этот счет неуместны, заявил РИА Новости глава комитета крымского парламента по народной дипломатии и межнациональным отношениям Юрий Гемпель.',
                likeCount: 120,
                liked: false
            },
            {
                id: 3,
                newsUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Achtung.svg/1169px-Achtung.svg.png',
                title: "В России выпустили первую партию вакцины от коронавируса для животных",
                body: 'Федеральный центр охраны здоровья животных (ФГБУ ВНИИЗЖ), подведомственное учреждение Россельхознадзора, выпустило первую партию российской вакцины Карнивак-Ков для профилактики COVID-19 у животных в объеме 17 тысяч доз, сообщила журналистам советник руководителя Россельхознадзора Юлия Мелано.',
                likeCount: 18,
                liked: false
            },
            {
                id: 4,
                newsUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Achtung.svg/1169px-Achtung.svg.png',
                title: "В Киргизии рассказали о разрушениях из-за конфликта на таджикской границе",
                body: 'В Киргизии во время конфликта с Таджикистаном сгорели несколько десятков зданий, сообщили РИА Новости в пресс-службе МЧС республики.',
                likeCount: 0,
                liked: false
            }
        ])
    }
    return (
        <div className={classes.newsContainer}>
            {
                props.news.map(n => <div className={classes.news} key={n.id}>
                    <div>
                        <img className={classes.newsImg} src={n.newsUrl}/>
                    </div>
                    <div>
                        <h2 className={classes.title}>{n.title}</h2>
                    </div>
                    <div className={classes.body}>
                        <span>{n.body}</span>
                    </div>
                    <div>
                        {n.liked
                            ? <button className={classes.btn} onClick={() => {
                                props.unlike(n.id)
                            }}>UnLike</button>
                            : <button className={classes.btn} onClick={() => {
                                props.like(n.id)
                            }}>Like</button>
                        }
                    </div>
                </div>)}
        </div>
    );
}

export default News;