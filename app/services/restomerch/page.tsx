import RMerch from "@/blocks/service/rmerch";
import { getEntry } from "@/lib/contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Image from "next/image";

async function fetchMerchData() {
  const entry = await getEntry('6y59CZhEyBonqcGU1jhE1C');
  if (!entry) return null;

  const heroHeadline = entry.fields?.heroHeadline || 'Merchandise That Speaks';
  const heroSubtext = entry.fields?.heroSubtext || 'Custom merchandise that resonates.';
  const heroImage = entry.fields?.heroImage ? entry.fields.heroImage.map((img: any) => 'https:' + img.fields.file.url) : [];

  const mainServiceTitle = entry.fields?.mainServiceTitle || 'Define Your Merch Identity';
  const mainServiceSubtext = entry.fields?.mainServiceSubtext || 'Shaping merchandise through creative strategy.';
  const merchTypes = entry.fields?.merchTypes || { block1: [], block2: [], block3: [] };
  const features = [
    ...merchTypes.block1.map((service: any, index: number) => {
      const image = entry.fields?.[`mainService${index+1}Image`] ? 'https:' + entry.fields[`mainService${index+1}Image`].fields.file.url : '/placeholder.svg';
      return {
        title: service.title,
        description: service.context,
        image,
      };
    }),
    ...merchTypes.block2.map((service: any, index: number) => {
      const image = entry.fields?.[`mainService${index+2}Image`] ? 'https:' + entry.fields[`mainService${index+2}Image`].fields.file.url : '/placeholder.svg';
      return {
        title: service.title,
        description: service.context,
        image,
      };
    }),
    ...merchTypes.block3.map((service: any, index: number) => {
      const image = entry.fields?.[`mainService${index+3}Image`] ? 'https:' + entry.fields[`mainService${index+3}Image`].fields.file.url : '/placeholder.svg';
      return {
        title: service.title,
        description: service.context,
        image,
      };
    }),
  ];

  const mainGoalHeadline = entry.fields?.mainBenefitHeadline  || 'And These Inspiring Benefits Await You';
  const mainGoalSubtext = entry.fields?.mainBenefitSubtext || 'To turn your ideas into impactful solutions';
  const mainGoalSideImage = entry.fields?.mainGoalSideImages ? entry.fields.mainGoalSideImages.map((img: any) => 'https:' + img.fields.file.url) : [];

  const mainBenefitHeadline = entry.fields?.mainGoalHeadline || 'And We Make It Easier For You';
  const mainBenefitSubtext = entry.fields?.mainGoalSubtext   || 'Simplifying the complex, so you can focus on what matters.';
  const benefitBlock1 = entry.fields?.benefitBlock1 ? documentToReactComponents(entry.fields.benefitBlock1, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <Image src={'https:' + node.data.target.fields.file.url} alt={node.data.target.fields.title || ''} />
      ),
    },
  }) : <p>Make Your Request</p>;
  const benefitBlock2 = entry.fields?.benefitBlock2 || { typewriterPhrases: [] };
  const benefitServiceTypes = entry.fields?.benefitServiceTypes || { services: [] };

  const benefitLowerBlocks = entry.fields?.benefitLowerBlocks ? entry.fields.benefitLowerBlocks.map((img: any) => 'https:' + img.fields.file.url) : [];
  const benefitLowerBlocksText = entry.fields?.benefitLowerBlocksText || { block1: [], block2: [], block3: [] };

  const mainGoalImage = entry.fields?.mainGoalImage ? 'https:' + entry.fields.mainGoalImage.fields.file.url : '/placeholder.svg';
  const overflowImage = entry.fields?.overflowImage ? 'https:' + entry.fields.overflowImage.fields.file.url : '/restomerchsignature.svg';

  return {
    hero: { titletop: 'Merchandise That', titlebottom: 'Speaks Volumes', description: heroSubtext, image: heroImage[0] },
    overview: { title: mainServiceTitle, subtitle: mainServiceSubtext, features },
    services:{ title: merchTypes.block1[0]?.title || 'Our Merchandise Types', context: merchTypes.block1[0]?.context, features},
    benefits: { title: mainBenefitHeadline, subtitle: mainBenefitSubtext, makeRequest: benefitBlock1, receiveRefine: <p>Receive and Refine</p> },
    expectation: {
      title: mainGoalHeadline,
      subtitle: mainGoalSubtext,
      typewriterPhrases: benefitBlock2.typewriterPhrases,
      services: benefitServiceTypes.services,
      buildingCard: { image: benefitLowerBlocks[0], title: 'Building', subtitle: 'future' },
      supportCard: { avatar: benefitLowerBlocks[1] || '/placeholder.svg', textImage: benefitLowerBlocks[3] || '/placeholder.svg', title: benefitLowerBlocksText.block2[0]?.headline || 'Reliable 24h Support', subtitle: benefitLowerBlocksText.block2[0]?.des || 'This means just as much to us, reach us anytime' },
      iterationsCard: { image: benefitLowerBlocks[2] || '/placeholder.svg', title: benefitLowerBlocksText.block3[0]?.headline || 'Iterations', subtitle: benefitLowerBlocksText.block3[0]?.des || 'As many needed to achieve excellence' },
    },
    starIcon: mainGoalImage,
    signature: overflowImage,
  };
}

export default async function RestoMerch() {
  const data = await fetchMerchData();
  return (
    <main>
      <RMerch data={data} />
    </main>
  );
}