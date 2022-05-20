import React from 'react'
import LinkTo from './components/LinkTo'
import SectionHeading from './components/SectionHeading'
import BoldParagraph from './components/BoldParagraph'

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
                <SectionHeading text="This is Me!" />
                <img src="https://randomuser.me/api/portraits/women/8.jpg" alt="profilePic"/>
                <article>
                    <ol>
                        <li>
                        <BoldParagraph firstWord="Pop" theRest="culture maven. Beer fan. Award-winning music junkie. Extreme coffee enthusiast. Thinker. Tv specialist."/>
                        </li>
                        <li>
                        <BoldParagraph firstWord="Friendly" theRest="web maven. Bacon lover. General internet specialist. Incurable travel scholar."/>
                        </li>
                        <li>
                        <BoldParagraph firstWord="Subtly" theRest="charming twitter lover. Social media fan. Incurable travel geek. Lifelong pop culture specialist. Tv scholar."/>
                        </li>
                        <li>
                        <BoldParagraph firstWord="Unable" theRest="to type with boxing gloves on. Proud bacon fan. Music junkie. Coffee ninja. Beer specialist."/>
                        </li>
                    </ol>
                </article>
            </section>
            <section id="fav-foods">
                <SectionHeading text="My Fave Foods" />
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
                <SectionHeading text="Get in Touch!" />

                <BoldParagraph firstWord="Phone:" theRest={<LinkTo external={true} href="tel:12345678" text="12345678"/>}/>

                <BoldParagraph firstWord="Email:" theRest={<LinkTo external={true} href="mailto:test@test" text="thatsme@test.com"/>}/>

                <BoldParagraph firstWord="Twitter:" theRest={<LinkTo external={true} href="#twitter" text="#superfun"/>}/>
                
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
    SectionHeading,
    BoldParagraph
    // FoodItem,
    // ListItems,
    // Section
}
