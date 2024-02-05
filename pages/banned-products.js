import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
//import styles from "../styles/Home.module.scss";

export default function Contact() {
  return (
    <div className="contactpage">
      <Head>
        <title>Banned Products | NTT DATA Payment Services</title>
        <meta
          name="description"
          content="NTT DATA Payment Services – leading payment partner in industry stringently follows RBI and Government mandates and is limited towards providing its services to a few segments of the business."
        />
      </Head>

      <div className="contact-main-bnr-wrp">
        <div className="container_1300 d-block">
          <h2 className="common-ttle ">Banned Products & Services</h2>
        </div>
      </div>
      <nav className="bread-wrp" aria-label="breadcrumb">
        <div className="container_1300 d-block">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Banned Products
            </li>
          </ol>
        </div>
      </nav>

      <div className="privacy-cvr-wrp">
        <div className="container_1300 d-block">
          <p>
            NTT DATA Payment Services shall not provide its services to
            clients/merchants who directly or indirectly engage/deal in such
            product(s) and/or service(s) under the restricted categories as
            mentioned below:
          </p>

          <ol>
            <li>
              Adult goods and services which includes pornography and other
              sexually suggestive materials (including literature, imagery and
              other media); escort or prostitution services. Apparatus such as
              personal massagers/vibrators and sex toys and enhancements.
            </li>
            <li>
              Body parts, which includes organs or other body parts – live,
              cultured/preserved or from cadaver.
            </li>
            <li>
              Bulk marketing tools which include email lists, software, or other
              products enabling unsolicited email messages (spam).
            </li>
            <li>
              Cable TV descramblers and black boxes which include devices
              intended to obtain cable and satellite signals for free.
            </li>
            <li>Child pornography in any form.</li>
            <li>
              Copyright unlocking devices which include Mod chips or other
              devices designed to circumvent copyright protection.
            </li>
            <li>
              Copyrighted media, which includes unauthorized copies of books,
              music, movies, and other licensed or protected materials.
            </li>
            <li>
              Copyrighted software which includes unauthorized copies of
              software, video games and other licensed or protected materials,
              including OEM or bundled software
            </li>
            <li>
              Counterfeit and unauthorized goods which includes replicas or
              imitations of designer goods; items without a celebrity
              endorsement that would normally require such an association; fake
              autographs, counterfeit stamps, and other potentially unauthorized
              goods.
            </li>
            <li>
              Drugs and drug paraphernalia which includes illegal drugs and drug
              accessories, including herbal drugs including but not limited to
              salvia and magic mushrooms
            </li>
            <li>
              Drug test circumvention aids which include drug cleansing shakes,
              urine test additives, and related items.
            </li>
            <li>
              Endangered species, which includes plants, animals, or other
              organisms (including product derivatives) in danger of extinction.
            </li>
            <li>
              Gambling which includes lottery tickets, sports bets, memberships/
              enrolment in online gambling sites, and related content.
            </li>
            <li>
              Government IDs or documents which includes fake IDs, passports,
              diplomas, and noble titles.
            </li>
            <li>
              Hacking and cracking materials which include manuals, how-to
              guides, information, or equipment enabling illegal access to
              software, servers, websites, or other protected property.
            </li>
            <li>
              Illegal goods which include materials, products, or information
              promoting illegal goods or enabling illegal acts.
            </li>
            <li>
              Miracle cures which include unsubstantiated cures, remedies or
              other items marketed as quick health fixes.
            </li>
            <li>
              Offensive goods which include literature, products or other
              materials that: (a) Defame or slander any person or groups of
              people based on race, ethnicity, national origin, religion, sex,
              or other factors; (b) Encourage or incite violent acts; and (c)
              Promote intolerance or hatred.
            </li>
            <li>
              Offensive goods, crime which includes crime scene photos or items,
              such as personal belongings, associated with criminals.
            </li>
            <li>
              Pyrotechnic devices and hazardous materials which includes
              fireworks and related goods; toxic, flammable, and radioactive
              materials and substances.
            </li>
            <li>
              Regulated goods which include air bags; batteries containing
              mercury; Freon or similar substances/refrigerants;
              chemical/industrial solvents; government uniforms; car titles;
              license plates; police badges and law enforcement equipment;
              lock-picking devices; pesticides; postage meters; recalled items;
              slot machines; surveillance equipment; goods regulated by
              government or other agency specifications.
            </li>
            <li>
              Tobacco and cigarettes which includes cigarettes, cigars, chewing
              tobacco, and related products.
            </li>
            <li>
              Traffic devices, which includes radar detectors/ jammers, license
              plate covers, traffic signal changers, and related products.
            </li>
            <li>
              Weapons, which includes firearms, ammunition, knives, brass
              knuckles, gun parts, and other armaments.
            </li>
            <li>
              Live animals or hides/skins/teeth, nails, and other parts etc of
              animals.
            </li>
            <li>
              Any intangible goods or services or aggregation/consolidation
              business.
            </li>
            <li>Drop-shipped merchandise</li>
            <li>
              Web-based telephony/ SMS/Text/Facsimile services or Calling Cards.
              Bandwidth or Data transfer/ allied services. Voice process
              /knowledge process services.
            </li>
            <li>
              Any product or service, which is not in compliance with all
              applicable laws and regulations whether federal, state, both local
              and international, including the laws of India.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
