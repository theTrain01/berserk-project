import './Home.scss';

import {TextAnimation} from '../TextAnimation/TextAnimation';
import { Header } from '../Header/Header';
export const Home = () => {
    return (
        <>
        <Header/>
            <main>   
                <section className="about">
                    <div className="about_wrapper">
                        <div className="about_inner">
                            <div className="about_item_text__content">
                                <h1>Berserk</h1>

                                <h2>Who is he...</h2>

                                <p className="about_description">
                                    This site is dedicated to the world famous anime "Berserk". Here you will find a lot of useful information about the world of "Berserk", its characters, plot and much more.
                                </p>
                            </div>

                            <div className="text_japan_right">
                                <TextAnimation text="こ の世界には 人の運命をつかさどる 何らかの超越的な 「律」 神の手が存在するのだろうか 少なくとも 人は自らの意志さえ 自由には出来ない" />
                            </div>

                            <div className='text_japan_right_copy'>
                                <div className='berserk'>
                                    こ の世界には 人の運命をつかさどる 何らかの超越的な 「律」 神の手が存在するのだろうか 少なくとも 人は自らの意志さえ 自由には出来ない
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <section className="last_block">
                    <div className="last_inner_block">
                        <div className="last_item">
                            <p>Stay up to date with the latest news about the world of "Berserk" and follow the updates on our website. Here you will find all the information you need about your favorite characters from the anime "Berserk"!</p>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}