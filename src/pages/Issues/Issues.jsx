import React from "react";
import "./issues.css";
import { useTranslation } from "react-i18next";
import earthlings from "../../images/earthlings.jpg";
import dominion from "../../images/dominion.jpg";
import sanctuary from "../../images/donate.jpg";

function Issues() {
  const { t } = useTranslation();
  return (
    <div className="issues-main">
      <div className="issues-hero">
        <div className="overlay">
          <div className="issues-inner">
            <h1>From animal perspective</h1>
          </div>
        </div>
      </div>

      <div className="issues">
        <h2>Lives of farm animals</h2>
        <p>
          Do you know how every time you see a commercial for a food product be
          it on TV or in the shop, there is a picture of a happy animal on it.
        </p>
        <p>
          Most people (like i was) are unaware of the treatement of animals on
          factory farms. As food industry is working very hard to hide it from
          all of us.
        </p>
        <p>
          Animals, just like humans feel strong emotions, they are happy just as
          we are, they are sad just as we are and they get scared and feel pain,
          just as we do.
        </p>
        <p>
          If you know how pain and sadness feels, why would you want to inflict
          that on an innocent beings?
        </p>
      </div>

      <div className="issues-meat">
        <img
          src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="issues-meat-inner">
          <h2>The meat industry</h2>
          <p>
            Every time you go to a supermaket and by a piece of meat, there is a
            hidden story behind it, that involves unimagineable suffering and
            death.
          </p>
          <p>
            Farmed animals are sent to slaughter at just a fraction of their
            natural lifespan.
          </p>
          <button className="btn">
            <a href={t("routes.issues_meat")}>Learn More</a>
          </button>
        </div>
      </div>

      <div className="issues-dairy">
        <img
          src="https://images.unsplash.com/photo-1602153508753-4ace888c10a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="issues-dairy-inner">
          <h2>The dairy industry</h2>
          <p>
            In order to keep producing milk for humans, diary cows have to
            become pregnant and have claves, just like any mammal.
          </p>
          <p>
            This is done forecibly, through artificial insemination. And the
            baby is taken away and slaughtered.
          </p>
          <button className="btn">
            <a href={t("routes.issues_dairy")}>Learn More</a>
          </button>
        </div>
      </div>

      <div className="issues-eggs">
        <img
          src="https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWdnc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="issues-eggs-inner">
          <h2>The egg industry</h2>
          <p>
            Hens, whether raised in free-range or caged farming systems, endure
            lives filled with pain and suffering during their shortened
            existence.
          </p>
          <p>
            Male chicks are of no use for egg industry, and are killed almost
            immediately after hatching. They are either thrown into an
            industrial grinder while still alive or gassed to death.
          </p>
          <button className="btn">
            <a href={t("routes.issues_eggs")}>Learn More</a>
          </button>
        </div>
      </div>

      <div className="issues-fish">
        <img
          src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="issues-fish-inner">
          <h2>The fish industry</h2>
          <p>
            Every year, trillions of fish are slaughtered to meet human
            consumption demands, often without regard for the suffering
            inflicted on these animals and with limited consideration for the
            environmental consequences.
          </p>
          <p>
            Some are genetically engineered on fish farms, while the rest are
            hooked by the mouth or netted by huge trawlers that catch and kill
            everything in their path.
          </p>
          <button className="btn">
            <a href={t("routes.issues_fish")}>Learn More</a>
          </button>
        </div>
      </div>

      <div className="issues-quote">
        <div className="bg-color">
          <p>
            Veganism is not about food, it's about love and respect for life
            itself.
          </p>
        </div>
      </div>

      <div className="issues-other">
        <p>
          Of course meat, egg, dairy and fish industries are not the only ones
          causing animal exploitation and abuse.
        </p>
        <p>
          Animals are being used for clothing, for "fun", in the wild and also
          for testing.
        </p>
        <p>
          You can read more about it in our{" "}
          <a href={t("routes.resources")}>resources</a> section.
        </p>
      </div>

      <div className="documentaries">
        <h2>Documentaries</h2>

        <div className="earthlings">
          <img src={earthlings} alt="" />
          <h3>Earthlings</h3>
          <p>
            Using hidden cameras and never-before-seen footage, Earthlings
            chronicles the day-to-day practices of the largest industries in the
            world, all of which rely entirely on animals for profit.
          </p>
          <a
            href="https://youtu.be/8gqwpfEcBjI?si=stwlm9TnvgZ7B0bx"
            target="_blank"
          >
            Watch now
          </a>
        </div>

        <div className="dominion">
          <img src={dominion} alt="" />
          <h3>Dominion</h3>
          <p>
            Dominion uses drones, hidden and handheld cameras to expose the dark
            underbelly of modern animal agriculture, questioning the morality
            and validity of humankind's dominion over the animal kingdom.
          </p>
          <a
            href="https://youtu.be/LQRAfJyEsko?si=BDCtsy8pNt76hjvS"
            target="_blank"
          >
            Watch now
          </a>
        </div>
      </div>

      <div className="animal-sanctuary">
        <h2>Animal sanctuary</h2>
        <p>
          Animal sanctuary is a place where animals, often rescued from neglect,
          abuse, or difficult situations, are provided with a safe environment
          to live out their lives.
        </p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cDCY5EPYSZE?si=q0j0PcKPzYhEkZ8z"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>

        <button className="btn">
          <a href="">Watch more</a>
        </button>
      </div>
    </div>
  );
}

export default Issues;
