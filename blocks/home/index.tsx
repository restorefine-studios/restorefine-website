import React from "react";
import Hero from "./hero";
import { BentoGrid } from "./properties";
import { LogoMarquee } from "./marquee";
import { CreativePotential } from "./potential";
// import { Insights } from "./insights";
import { Reviews } from "./reviews";
import Cta from "@/components/cta";
import { getEntry } from "@/lib/contentful";
import Reels from "./reels";

const defaultModels = [
  {
    id: 0,
    source: '',
    alt: "NFC Cards for your business",
    width: 400,
    height: 400,
    className: "object-cover mt-2 transition-all duration-700 ease-in-out"
  },
  {
    id: 1,
    source: '',
    alt: "Stunning websites and web applications that convert",
    width: 470,
    height: 470,
    className: "object-contain transition-all duration-700 ease-in-out"
  },
  {
    id: 2,
    source: '',
    alt: "High Quality Menu Prints",
    width: 180,
    height: 180,
    className: "object-contain transition-all duration-700 ease-in-out"
  },
  {
    id: 3,
    source: '',
    alt: "High Density Tshirts With Custom Designs",
    width: 190,
    height: 190,
    className: "object-contain transition-all duration-700 ease-in-out"
  },
  {
    id: 4,
    source: '',
    alt: "More Stationery Printouts for your branded business",
    width: 230,
    height: 230,
    className: "object-contain transition-all duration-700 ease-in-out"
  }
];

async function Resto() {
  const entry = await getEntry('4vS3xsxhN1eATw3l21K6ek');
  const clientLogos = entry?.fields?.clientLogo?.map((logo: any) => ({
    name: logo.fields.title || 'Client Logo',
    url: 'https:' + logo.fields.file.url,
    filter: '',
  })) || [];

  const serviceTypeHeadline = entry?.fields?.serviceTypeHeadline || 'Not Reinventing The Wheel, Just Giving You Better';
  const serviceTypeSubtext = entry?.fields?.serviceTypeSubtext || 'Your all-in-one digital partner, dedicated to the vibrant world of hospitality.';

  const serviceTypeImages = entry?.fields?.serviceTypeImages?.map((img: any, index: number) => ({
    id: index,
    source: 'https:' + img.fields.file.url,
    alt: img.fields.title || defaultModels[index]?.alt || 'Service Image',
    width: defaultModels[index]?.width || 400,
    height: defaultModels[index]?.height || 400,
    className: defaultModels[index]?.className || 'object-cover'
  })) || defaultModels;

  const servicePotentialHeadline = entry?.fields?.servicePotentialHeadline || 'Harness Our Full Creative Potential';
  const servicePotentialSubtext = entry?.fields?.servicePotentialSubtext || 'Harness our full creative power to transform your vision into reality. We craft impactful solutions that elevate your brand and leave a lasting impression.';

  const potentialImages = entry?.fields?.servicePotentialImages?.map((img: any, index: number) => ({
    src: 'https:' + img.fields.file.url,
    alt: img.fields.title || 'Potential Image',
    title: index === 0 ? 'Build' : 'Reach',
    subtitle: index === 0 ? 'All your digital needs in-one-house' : 'Serve your restaurant to a global audience'
  })) || [
    { src: '/serviceapps.svg', alt: 'restorefine-service-apps', title: 'Build', subtitle: 'All your digital needs in-one-house' },
    { src: '/restotray.svg', alt: 'restorefine-servingtray-graphic', title: 'Reach', subtitle: 'Serve your restaurant to a global audience' }
  ];

  const clientReviewsHeadline = entry?.fields?.clientReviewsHeadline || 'Our Clients';
  const clientReviewsSubtext = entry?.fields?.clientReviewsSubtext || 'Hear firsthand how our solutions have boosted online success for users like you.';

  // Fetch review entries
  const reviewIds = ['XfhCriML9piZujRwHtunQ', '6Zu9M9XpPT6BLYCX49Xex5'];
  const reviewEntries = await Promise.all(reviewIds.map(id => getEntry(id)));
  const reviews = reviewEntries.map((revEntry, index) => {
    const content = revEntry?.fields?.clientReviewContent;
    let clientName = 'Client';
    let clientReview = 'Great service!';
    let restaurantName = 'Restaurant';
    if (content) {
      let parsed;
      if (typeof content === 'string') {
        try {
          parsed = JSON.parse(content);
        } catch (e) {
          console.error('Error parsing clientReviewContent', e);
        }
      } else if (typeof content === 'object') {
        parsed = content;
      }
      if (parsed) {
        clientName = parsed.clientName || clientName;
        clientReview = parsed.clientReview || clientReview;
        restaurantName = parsed.restaurantName || restaurantName;
      }
    }
    return {
      id: index + 1,
      name: clientName,
      position: restaurantName,
      review: clientReview,
      image: '/reviewuser.svg',
      companyLogo: revEntry?.fields?.clientLogo ? 'https:' + revEntry.fields.clientLogo.fields.file.url : '/reviewuser.svg'
    };
  });


  return (
    <main className="">
      <Hero />
      <LogoMarquee logos={clientLogos} />
      <Reels />
      <BentoGrid headline={serviceTypeHeadline} subtext={serviceTypeSubtext} models={serviceTypeImages} />
      <CreativePotential headline={servicePotentialHeadline} subtext={servicePotentialSubtext} images={potentialImages} />
      {/* <Insights /> */}
      <Reviews reviews={reviews} headline={clientReviewsHeadline} subtext={clientReviewsSubtext} />
      <Cta />
    </main>
  );
}

export default Resto;
