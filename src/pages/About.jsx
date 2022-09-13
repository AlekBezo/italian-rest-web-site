import React from "react";
import MultiplePizzas from "../assets/new-look.jpg";
import Team from "../assets/11330702-Gino-Sorbillo-a-pizza-baker-from-Naples-holding-a-pizza.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-me-container">
      <img src={MultiplePizzas} alt="aboutme" />
      <div className="about-me">
        <h1>Our Story</h1>
        <p>
          The story of the Sorbillo family begins in Via dei Tribunali: there,
          in the Thirties, his grandfather Luigi opened a small pizzeria. Of his
          twenty-one children, one daughter grew especially passionate about the
          art of dough-making. She’s called Esterina and worked in the
          restaurant for sixty-three years. Nephew Gino learnt everything from
          her, first by observing her, then working by her side. And then again
          running the pizzeria himself, renewing it and enlarging it, increasing
          its popularity in an exponential way.Today Gino Sorbillo, forty, has
          two pizzerias in Naples: the historic one in Via dei Tribunali and the
          more recent one, Lievito Madre al Mare, by the seaside, in Via
          Partenope. It is indeed following the format of this second one that
          since October 16th he has exported in Milan Lievito Madre al Duomo,
          officially opened last night in Largo Corsia dei Servi. The curse, at
          one point, seemed to persecute this arrival too, but Sorbillo’s smile,
          and most of all his tenacity, won over it.
        </p>
      </div>

      <div className="about-me">
        <h1>Meet the Pizza Chef</h1>
        <p>
          Gino Sorbillo was born into one of the oldest and most revered
          families of pizza makers in Naples. His grandparents founded the first
          pizzeria in 1935, on the Via dei Tribunali, described by many as the
          “Via della Pizza Napoletana”, in the old city center. The spouses of
          the Sorbillo men gave birth to 21 children, who later all became pizza
          chefs. They are among the undisputed symbol-figures of the
          “traditional Neapolitan pizzeria.” He founded “La Casa Della Pizza”, a
          meeting place and cultural exchange venue for artists from the various
          Parthenopean arts. Gino was awarded a Master of Arts and Crafts in the
          category of Pizzaiuoli, by the International School of Italian Cuisine
          (ALMA) in the presence of the Ministry of Cultural Heritage and the
          President of the Republic (2016). The true Neapolitan pizza (and the
          art of the Neapolitan pizza maker) has become part of the Intangible
          Heritage of Mankind of UNESCO, a symbol like the Mediterranean Diet,
          firstly described by Ancel Keys. Witness of an artisanal product and a
          traditional Neapolitan folk culture, Gino is also the most progressive
          among the pizza makers of his beloved city. As his new frontier, he
          employs the use of organic flour, combined with the best raw materials
          and products of excellence for its condiments that he can find.
          Frequently seen on television and as a figure of reference in the
          field of Haute Pizzeria d’Autore, Gino is a participant in many
          cultural promotional initiatives. From Naples to New York, he has
          conquered all.
        </p>
      </div>
      <img src={Team} alt="aboutme" />
    </div>
  );
};

export default About;
