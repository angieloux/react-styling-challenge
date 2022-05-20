import React from 'react'
import LinkTo from './components/LinkTo'
import LinkTop from './components/LinkTop'

const App = () => {
    return (
        <>
            <header>
                <h1>Welcome To Sandras Profile Page</h1>
                <nav>
                    <ul>
                        <li><LinkTo href="#about-me" text="About Me"/></li>

                        <li><LinkTo href="#fav-foods" text="Favourite Foods"/></li>

                        <li><LinkTo href="#contact" text="Contact Details"/></li>

                    </ul>
                </nav>
            </header>
            <section id="about-me">
                <div>
                    <h2>This is Me!</h2>
                    <LinkTop />
                </div>
                <img src="https://randomuser.me/api/portraits/women/8.jpg" alt="profilePic"/>
                <article>
                    <ol>
                        <li>
                            <p>
                                <b>Pop</b> culture maven. Beer fan. Award-winning music junkie. Extreme coffee enthusiast. Thinker. Tv specialist.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Friendly</b> web maven. Bacon lover. General internet specialist. Incurable travel scholar.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Subtly</b> charming twitter lover. Social media fan. Incurable travel geek. Lifelong pop culture specialist. Tv scholar.
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Unable</b> to type with boxing gloves on. Proud bacon fan. Music junkie. Coffee ninja. Beer specialist.
                            </p>
                        </li>
                    </ol>
                </article>
            </section>
            <section id="fav-foods">
                <div>
                    <h2>My Fave Foods</h2>
                    <LinkTop />
                </div>
                <article>
                    <h4>Pizza</h4>
                    <img src="pizza.jpg" alt="pizza"/>
                    <p>Best time to eat: <span>All the time</span></p>
                    <p>Best place: <span>Queen Margharitas</span></p>
                </article>
                <article>
                    <h4>Quesadillas</h4>
                    <img src="quesadilla.jpg" alt="quesadillas"/>
                    <p>Best time to eat: <span>Afternoon Siesta</span></p>
                    <p>Best place: <span>Mejico</span></p>
                </article>
                <article>
                    <h4>Icecream Pancakes</h4>
                    <img src="icecream_pancakes.jpg" alt="pancakes"/>
                    <p>Best time to eat: <span>Brekky</span></p>
                    <p>Best place: <span>Pancakes on the Rocks</span></p>
                </article>
                <article>
                    <h4>Loaded Fries</h4>
                    <img src="loaded_fries.jpg" alt="fries"/>
                    <p>Best time to eat: <span>During the game</span></p>
                    <p>Best place: <span>My House</span></p>
                </article>
            </section>
            <section id="contact">
                <div>
                    <h2>Get In Touch!</h2>
                    <LinkTop />
                </div>
                <p>
                    <b>Phone:</b> 
                    <LinkTo external={true} href="tel:12345678" text="12345678"/>
                </p>
                <p>
                    <b>Email:</b> 
                    <LinkTo external={true} href="mailto:test@test" text="thatsme@test.com"/>
                </p>
                <p>
                    <b>Twitter:</b> 
                    <LinkTo external={true} href="#twitter" text="#superfun"/>
                </p>
            </section>
            <footer>
            <h5>Thanks for visiting my profile. Hope to here from you soon!</h5>
        </footer>
        </>
    )
}

export default App

export {
    LinkTo,
    LinkTop
    // SectionHeading,
    // BoldParagraph,
    // FoodItem,
    // ListItems,
    // Section
}
