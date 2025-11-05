import RestoServices from "@/blocks/service";
import { Footer } from "@/components/footer";
import React from "react";
import { getEntry } from "@/lib/contentful";

async function Services() {
  const entry = await getEntry('ZKnGlZmCtrKEuXLgGnbgu');

  // Parse subServices
  const subServices = [];
  for (let i = 1; i <= 5; i++) {
    const imgField = `subService${i}Image`;
    const jsonField = `subService${i}`;
    const img = entry?.fields?.[imgField];
    const json = entry?.fields?.[jsonField];
    let title = `SubService ${i}`;
    let content = 'Description';
    if (json) {
      if (typeof json === 'string') {
        try {
          const parsed = JSON.parse(json);
          title = parsed.title || title;
          content = parsed.content || content;
        } catch (e) {}
      } else if (typeof json === 'object') {
        title = json.title || title;
        content = json.content || content;
      }
    }
    subServices.push({
      title,
      description: content,
      image: img ? 'https:' + img.fields.file.url : '/placeholder.svg',
      href: `/services/${title.toLowerCase().replace('resto', '')}`,
    });
  }

  // Parse altServices for serviceDetails
  const serviceDetails = [];
  for (let i = 1; i <= 4; i++) {
    const jsonField = `altService${i}`;
    const json = entry?.fields?.[jsonField];
    let tags = [];
    let title = `Service ${i}`;
    let number = `${i}`;
    let description = 'Description';
    if (json) {
      if (typeof json === 'string') {
        try {
          const parsed = JSON.parse(json);
          tags = parsed.tags || [];
          title = parsed.title || title;
          number = parsed.number || number;
          description = parsed.description || description;
        } catch (e) {}
      } else if (typeof json === 'object') {
        tags = json.tags || [];
        title = json.title || title;
        number = json.number || number;
        description = json.description || description;
      }
    }
    serviceDetails.push({
      number,
      title,
      description,
      services: tags,
    });
  }

  const heroHeadline = entry?.fields?.heroHeadline || 'Transforming Visions Into Impactful Brands';
  const heroSubtext = entry?.fields?.heroSubtext || 'From concept to creation, we craft brands that resonate, inspire, and drive results.';
  const heroImage = entry?.fields?.heroImage ? 'https:' + entry.fields.heroImage.fields.file.url : '/servicesherographic.svg';
  const heroMarquee = entry?.fields?.heroMarquee || 'RestoWeb. RestoBranding. RestoPrinting. RestoMerch. RestoMedia.';

  const serviceHeadline = entry?.fields?.serviceHeadline || 'Our Services';
  const serviceSubtext = entry?.fields?.serviceSubtext || 'Shaping Brands with Purpose and Precision';

  return (
    <main>
      <RestoServices
        heroHeadline={heroHeadline}
        heroSubtext={heroSubtext}
        heroImage={heroImage}
        heroMarquee={heroMarquee}
        serviceHeadline={serviceHeadline}
        serviceSubtext={serviceSubtext}
        subServices={subServices}
        serviceDetails={serviceDetails}
      />
      <Footer />
    </main>
  );
}

export default Services;
