import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './MasterpieceCreator.scss';

import { Header } from '../Header/Header';

export const MasterpieceCreator = () => {
    const settings = {
        speed: 300,
        arrows: false, 
        dots: false, 
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <Header />
            <div className='masterpiece_creator_box'>
                <h3>Kantaro Miura (三浦 建太郎 miura Kentarō) - Japanese Mangaka, best known as the creator of the manga Berserk.</h3>
                <p>
                    Miura was born in the Japanese city of Tiba on July 11, 1966. He began to draw his first manga “Miyurager” in 1976, at the age of ten; According to Miura, Manga, totaled forty volumes. During his studies at the school, Miura created another manga called “The Way to the Sword” (剣 の 道 道 Ken E No Michi, The Way to the Sword). In 1982, Miura began to be published in small fenzins.
                    In 1985, Miura, working in parallel on two science fiction projects-“again” (再び futatabi) and “Noah” (ノア Noa)-entered the Faculty of Art of the University of Nihon. The “re -” brought Miure the Prize “Best Debut” from the Weekly Shonen Magazine magazine; In the same journal, he was published during the year, but left Weekly Shonen Magazine due to disagreements with one of the editors.
                    The 48-page manga “Berserk: Prototype”, created by Miura in 1988, won the Comi Manga School Award. Having graduated from the university in 1989, Miura began working on the manga “King of the Wolves” (王 狼 狼 狼 狼 狼 ouru) along with Yoshiyuki Okamura (“Bunronson”); At the same time, Bunronson wrote the manga script, and Miura was responsible for their graphic embodiment. In 1990, the continuation was released - the manga “Legend of the king of wolves” (王狼伝 王狼伝 Ououden); In 1992, Miura and Bunronson last time worked together on the manga "Japan" (ジャパン japan).
                    Miura at work.
                    The first volume of the manga Berserk, which also published in 1990, remained almost unnoticed by the general public. Manga, since 1992, published on the pages of the Young Animal magazine, Hakusensha, gained popularity thanks to the Golden Age arch and turned into Magnum Opus Miura, the main thing of his life. Her fame additionally spurred by the anime series created by Oriental Light and Magic and released in the fall of 1997. In 2002, Berserk received a second prize at the ceremony of the cultural prize to Osamu Tazuki (the first prize received the “monastery” of Takehiko Inuue). In 2013, the new project of Miura - the manga "Gigantomachia" (ギガント マキア gigantomakia) launched; Especially for her sake, Miura took a half -year break in work on the Berserk. The release of Berserk resumed only in 2014.
                    Miura no longer releases the new chapters of the Berserk. The author died on May 6, 2021 at the age of 54 from the aortic gap.
                </p>

                <div className='box_slider'>
                    <div className='slider_inner'>
                        <Slider {...settings}>
                            <div className="slider_item"></div>
                            <div className="slider_item image2"></div>
                            <div className="slider_item image3"></div>
                            <div className="slider_item image4"></div>
                            <div className="slider_item image5"></div>
                            <div className="slider_item image6"></div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}