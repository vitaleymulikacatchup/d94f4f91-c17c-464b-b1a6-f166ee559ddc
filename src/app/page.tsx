"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BookOpen, Camera, Heart, Flower, Zap, Mountain, Play, Palette, Star, HelpCircle, Users, Sword } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Characters", id: "characters" },
            { name: "Story", id: "story" },
            { name: "Episodes", id: "episodes" },
            { name: "Community", id: "community" }
          ]}
          brandName="Demon Slayer"
          button={{
            text: "Watch Now",
            href: "https://www.crunchyroll.com/demon-slayer-kimetsu-no-yaiba"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Demon Slayer: Kimetsu no Yaiba"
          description="Follow Tanjiro Kamado's epic journey as he becomes a demon slayer to save his sister Nezuko and avenge his family. Experience breathtaking battles, incredible characters, and stunning animation."
          tag="Epic Anime Series"
          tagIcon={Sword}
          imageSrc="https://images.pexels.com/photos/32175666/pexels-photo-32175666.jpeg"
          imageAlt="Tanjiro Kamado with his sword in dramatic pose"
          imagePosition="right"
          buttons={[
            {
              text: "Watch Episodes",
              href: "https://www.crunchyroll.com/demon-slayer-kimetsu-no-yaiba"
            },
            {
              text: "Learn More",
              href: "story"
            }
          ]}
        />
      </div>

      <div id="characters" data-section="characters">
        <SplitAbout
          title="Main Characters"
          description="Meet the unforgettable characters who bring this incredible story to life"
          tag="Heroes"
          tagIcon={Users}
          imageSrc="https://images.pexels.com/photos/33575752/pexels-photo-33575752.jpeg"
          imageAlt="Tanjiro Kamado main character"
          imagePosition="left"
          bulletPoints={[
            {
              title: "Tanjiro Kamado",
              description: "Kind-hearted protagonist determined to cure his sister and defeat demons",
              icon: Heart
            },
            {
              title: "Nezuko Kamado",
              description: "Tanjiro's sister turned demon who retains her humanity",
              icon: Flower
            },
            {
              title: "Zenitsu Agatsuma",
              description: "Thunder Breathing user with incredible speed when unconscious",
              icon: Zap
            },
            {
              title: "Inosuke Hashibira",
              description: "Beast Breathing warrior raised by boars in the mountains",
              icon: Mountain
            }
          ]}
        />
      </div>

      <div id="story" data-section="story">
        <FeatureCardOne
          title="Story Arcs"
          description="Experience the most memorable arcs and battles from the series"
          tag="Adventures"
          tagIcon={BookOpen}
          features={[
            {
              title: "Water Breathing Techniques",
              description: "Master the fundamental breathing style that starts Tanjiro's journey as a demon slayer",
              imageSrc: "https://images.pexels.com/photos/6538917/pexels-photo-6538917.jpeg",
              imageAlt: "Water breathing sword technique"
            },
            {
              title: "Demon Encounters",
              description: "Face terrifying demons and uncover the dark secrets behind their existence",
              imageSrc: "https://images.pexels.com/photos/5435309/pexels-photo-5435309.jpeg",
              imageAlt: "Scary demon in dark forest"
            },
            {
              title: "Hashira Training",
              description: "Train with the elite Demon Slayer Corps' strongest warriors",
              imageSrc: "https://images.pexels.com/photos/6253303/pexels-photo-6253303.jpeg",
              imageAlt: "Traditional Japanese training dojo"
            },
            {
              title: "Final Selection",
              description: "Survive the brutal final selection to become an official demon slayer",
              imageSrc: "https://images.pexels.com/photos/1363873/pexels-photo-1363873.jpeg",
              imageAlt: "Mystical mountain peak at night"
            }
          ]}
        />
      </div>

      <div id="episodes" data-section="episodes">
        <ProductCardOne
          title="Episodes & Seasons"
          description="Explore all seasons and episodes of this incredible anime series"
          tag="Watch Now"
          tagIcon={Play}
          products={[
            {
              id: "season-1",
              name: "Season 1: Unwavering Resolve",
              price: "26 Episodes",
              imageSrc: "https://images.pexels.com/photos/33575752/pexels-photo-33575752.jpeg",
              imageAlt: "Season 1 cover art",
              onProductClick: () => window.open('https://www.crunchyroll.com/demon-slayer-kimetsu-no-yaiba', '_blank')
            },
            {
              id: "mugen-train",
              name: "Mugen Train Arc",
              price: "Movie + TV",
              imageSrc: "https://images.pexels.com/photos/20276428/pexels-photo-20276428.jpeg",
              imageAlt: "Mugen Train arc cover",
              onProductClick: () => window.open('https://www.crunchyroll.com/demon-slayer-kimetsu-no-yaiba', '_blank')
            },
            {
              id: "season-2",
              name: "Entertainment District",
              price: "11 Episodes",
              imageSrc: "https://images.pexels.com/photos/7181912/pexels-photo-7181912.jpeg",
              imageAlt: "Entertainment District arc cover",
              onProductClick: () => window.open('https://www.crunchyroll.com/demon-slayer-kimetsu-no-yaiba', '_blank')
            },
            {
              id: "season-3",
              name: "Swordsmith Village",
              price: "11 Episodes",
              imageSrc: "https://images.pexels.com/photos/1308648/pexels-photo-1308648.jpeg",
              imageAlt: "Swordsmith Village arc cover",
              onProductClick: () => window.open('https://www.crunchyroll.com/demon-slayer-kimetsu-no-yaiba', '_blank')
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Creative Team"
          description="The talented creators behind Demon Slayer's incredible animation and storytelling"
          tag="Creators"
          tagIcon={Palette}
          members={[
            {
              id: "1",
              name: "Koyoharu Gotouge",
              role: "Original Creator",
              description: "Manga artist who created the beloved Demon Slayer series with incredible world-building and character development.",
              imageSrc: "https://images.pexels.com/photos/2014865/pexels-photo-2014865.jpeg",
              socialLinks: [{
                icon: "BookOpen",
                url: "https://viz.com/demon-slayer"
              }]
            },
            {
              id: "2",
              name: "Haruo Sotozaki",
              role: "Director",
              description: "Anime director who brought the manga to life with stunning visuals and breathtaking animation sequences.",
              imageSrc: "https://images.pexels.com/photos/32764753/pexels-photo-32764753.jpeg",
              socialLinks: [{
                icon: "Camera",
                url: "https://ufotable.com"
              }]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Fans Are Saying"
          description="See why millions of anime fans worldwide love Demon Slayer"
          tag="Fan Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Akira Tanaka",
              role: "Anime Enthusiast",
              company: "MyAnimeList Reviewer",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/2014865/pexels-photo-2014865.jpeg",
              imageAlt: "Portrait of Akira Tanaka"
            },
            {
              id: "2",
              name: "Sarah Johnson",
              role: "Anime Blogger",
              company: "Otaku Central",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/32764753/pexels-photo-32764753.jpeg",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "3",
              name: "Miguel Rodriguez",
              role: "Content Creator",
              company: "Anime Reviews Plus",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34418422/pexels-photo-34418422.jpeg",
              imageAlt: "Portrait of Miguel Rodriguez"
            },
            {
              id: "4",
              name: "Yuki Nakamura",
              role: "Manga Collector",
              company: "Tokyo Anime Club",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/16049911/pexels-photo-16049911.jpeg",
              imageAlt: "Portrait of Yuki Nakamura"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about Demon Slayer"
          tag="FAQ"
          tagIcon={HelpCircle}
          imageSrc="https://images.pexels.com/photos/1340913/pexels-photo-1340913.jpeg"
          imageAlt="Demon Slayer anime community"
          mediaPosition="left"
          faqs={[
            {
              id: "1",
              title: "What is Demon Slayer about?",
              content: "Demon Slayer follows Tanjiro Kamado, whose family is slaughtered by demons. His sister Nezuko is turned into a demon, but she retains her humanity. Tanjiro becomes a demon slayer to find a cure for his sister and avenge his family."
            },
            {
              id: "2",
              title: "How many seasons are there?",
              content: "Currently, there are 3 seasons plus the Mugen Train movie. Season 1 has 26 episodes, the Mugen Train Arc, Entertainment District Arc with 11 episodes, and Swordsmith Village Arc with 11 episodes."
            },
            {
              id: "3",
              title: "Where can I watch Demon Slayer?",
              content: "You can watch Demon Slayer on Crunchyroll, Funimation, Hulu, and Netflix (availability varies by region). The series is available with both subtitles and English dub."
            },
            {
              id: "4",
              title: "Is the manga finished?",
              content: "Yes, the Demon Slayer manga completed its run with 23 volumes. The anime is still ongoing and adapting the remaining manga content with more seasons planned."
            }
          ]}
        />
      </div>

      <div id="community" data-section="community">
        <ContactSplit
          tag="Community"
          title="Join the Demon Slayer Community"
          description="Connect with fellow fans, get the latest updates, and dive deeper into the world of demon slayers. Subscribe to stay updated with new episodes, merchandise, and exclusive content."
          imageSrc="https://images.pexels.com/photos/1340913/pexels-photo-1340913.jpeg"
          imageAlt="Demon Slayer fan community gathering"
          mediaPosition="right"
          tagIcon={Users}
          inputPlaceholder="Enter your email"
          buttonText="Join Community"
          termsText="By joining, you agree to receive updates about Demon Slayer news, episodes, and community events."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Watch",
              items: [
                { label: "Episodes", href: "episodes" },
                { label: "Mugen Train", href: "https://www.crunchyroll.com/demon-slayer-kimetsu-no-yaiba" },
                { label: "Streaming Guide", href: "https://www.crunchyroll.com" }
              ]
            },
            {
              title: "Explore",
              items: [
                { label: "Characters", href: "characters" },
                { label: "Story Arcs", href: "story" },
                { label: "Breathing Techniques", href: "story" }
              ]
            },
            {
              title: "Community",
              items: [
                { label: "Join Fans", href: "community" },
                { label: "Discussion", href: "https://reddit.com/r/KimetsuNoYaiba" },
                { label: "Fan Art", href: "https://reddit.com/r/KimetsuNoYaiba" }
              ]
            },
            {
              title: "Official",
              items: [
                { label: "Manga", href: "https://viz.com/demon-slayer" },
                { label: "Merchandise", href: "https://shop.viz.com" },
                { label: "News", href: "https://kimetsu.com" }
              ]
            }
          ]}
          copyrightText="© 2025 Demon Slayer: Kimetsu no Yaiba"
        />
      </div>
    </ThemeProvider>
  );
}