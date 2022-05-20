import React from 'react'
import LinkTo from './components/LinkTo.jsx'
import SectionHeading from './components/SectionHeading.jsx'
import BoldParagraph from './components/BoldParagraph.jsx'
import FoodItems from './components/FoodItems.jsx'
import ListItems from './components/ListItems.jsx'

const App = () => {
    return (
        <>
            <header>
                <h1>Welcome To Sandras Profile Page</h1>
                <nav>
                    <ul>
                        <ListItems items={[
                            <LinkTo href="#about-me" text="About Me"/>,

                            <LinkTo href="#fav-foods" text="Favourite Foods"/>,
    
                            <LinkTo href="#contact" text="Contact Details"/>
                        ]}
                        />
                    </ul>
                </nav>
            </header>
            <section id="about-me">
                <SectionHeading text="This is Me!" />
                <img src="https://randomuser.me/api/portraits/women/8.jpg" alt="profilePic"/>
                <article>
                    <ol>
                        <ListItems items={[
                            <BoldParagraph firstWord="Pop" theRest="culture maven. Beer fan. Award-winning music junkie. Extreme coffee enthusiast. Thinker. Tv specialist."/>,

                            <BoldParagraph firstWord="Friendly" theRest="web maven. Bacon lover. General internet specialist. Incurable travel scholar."/>,

                            <BoldParagraph firstWord="Subtly" theRest="charming twitter lover. Social media fan. Incurable travel geek. Lifelong pop culture specialist. Tv scholar."/>,

                            <BoldParagraph firstWord="Unable" theRest="to type with boxing gloves on. Proud bacon fan. Music junkie. Coffee ninja. Beer specialist."/>
                            ]} />
                    </ol>
                </article>
            </section>
            <section id="fav-foods">
                <SectionHeading text="My Fave Foods" />
                <FoodItems name="Pizza" src="pizza.jpg" time="All the time" place="Queen Margharitas" />

                <FoodItems name="Quesadilla" src="quesadilla.jpg" time="Afternoon Siesta" place="Mejico" />
                
                <FoodItems name="Icecream Pancakes" src="icecream_pancakes.jpg" time="Brekky" place="Pancakes on the Rocks" />

                <FoodItems name="Loaded Fries" src="loaded_fries.jpg" time="During the game" place="My House" />

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
    BoldParagraph,
    FoodItems,
    ListItems
    // Section
}
