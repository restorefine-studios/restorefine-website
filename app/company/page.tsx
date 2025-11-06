import AboutUs from "@/blocks/about";
import { Footer } from "@/components/footer";
import React from "react";
import { getEntry } from "@/lib/contentful";

async function Company() {
  const entry = await getEntry('2sn0IjTvv7GmiWqgDpyOCm');

  let heroHeadline = entry?.fields?.heroHeadline || 'Default Hero Headline';
  if (typeof heroHeadline === 'object') {
    const obj = heroHeadline as any;
    if (obj.nodeType === 'document') {
      heroHeadline = obj.content?.[0]?.content?.[0]?.value || 'Default Hero Headline';
    } else if (obj.nodeType === 'paragraph') {
      heroHeadline = obj.content?.[0]?.value || 'Default Hero Headline';
    } else {
      heroHeadline = 'Default Hero Headline';
    }
  }
  const heroHeadlineImage = entry?.fields?.heroHeadlineImage ? 'https:' + entry.fields.heroHeadlineImage.fields.file.url : '/placeholder.svg';

  let aboutHeadline = entry?.fields?.aboutHeadline || 'About Headline';
  if (typeof aboutHeadline === 'object') {
    const obj = aboutHeadline as any;
    if (obj.nodeType === 'document') {
      aboutHeadline = obj.content?.[0]?.content?.[0]?.value || 'About Headline';
    } else if (obj.nodeType === 'paragraph') {
      aboutHeadline = obj.content?.[0]?.value || 'About Headline';
    } else {
      aboutHeadline = 'About Headline';
    }
  }
  let aboutParagraph = entry?.fields?.aboutParagraph || 'About paragraph';
  if (typeof aboutParagraph === 'object') {
    if (aboutParagraph.nodeType === 'document') {
      aboutParagraph = aboutParagraph.content?.[0]?.content?.[0]?.value || 'About paragraph';
    } else if (aboutParagraph.nodeType === 'paragraph') {
      aboutParagraph = aboutParagraph.content?.[0]?.value || 'About paragraph';
    } else {
      aboutParagraph = 'About paragraph';
    }
  }
  const aboutImage = entry?.fields?.aboutImage ? 'https:' + entry.fields.aboutImage.fields.file.url : '/placeholder.svg';

  let strategyHeadline = entry?.fields?.strategyHeadline || 'Strategy Headline';
  if (typeof strategyHeadline === 'object') {
    const obj = strategyHeadline as any;
    if (obj.nodeType === 'document') {
      strategyHeadline = obj.content?.[0]?.content?.[0]?.value || 'Strategy Headline';
    } else if (obj.nodeType === 'paragraph') {
      strategyHeadline = obj.content?.[0]?.value || 'Strategy Headline';
    } else {
      strategyHeadline = 'Strategy Headline';
    }
  }
  let strategySubtext = entry?.fields?.strategySubtext || 'Strategy Subtext';
  if (typeof strategySubtext === 'object') {
    const obj = strategySubtext as any;
    if (obj.nodeType === 'document') {
      strategySubtext = obj.content?.[0]?.content?.[0]?.value || 'Strategy Subtext';
    } else if (obj.nodeType === 'paragraph') {
      strategySubtext = obj.content?.[0]?.value || 'Strategy Subtext';
    } else {
      strategySubtext = 'Strategy Subtext';
    }
  }

  const strategies = [];
  for (let i = 1; i <= 5; i++) {
    const jsonField = `strategy${i}`;
    const json = entry?.fields?.[jsonField];
    let title = `Strategy ${i}`;
    let description = 'Description';
      if (json) {
        let parsed;
        if (typeof json === 'string') {
          try {
            parsed = JSON.parse(json);
          } catch (e) {}
        } else if (typeof json === 'object') {
          parsed = json;
        }
        if (parsed) {
          title = parsed.title || title;
          description = parsed.description || description;
          if (typeof description === 'object') {
            const obj = description as any;
            if (obj.nodeType === 'document') {
              description = obj.content?.[0]?.content?.[0]?.value || 'Description';
            } else if (obj.nodeType === 'paragraph') {
              description = obj.content?.[0]?.value || 'Description';
            } else {
              description = 'Description';
            }
          }
        }
      }
    strategies.push({ title, description });
  }

  let founderHeadline = entry?.fields?.founderHeadline || 'Founder Headline';
  if (typeof founderHeadline === 'object') {
    const obj = founderHeadline as any;
    if (obj.nodeType === 'document') {
      founderHeadline = obj.content?.[0]?.content?.[0]?.value || 'Founder Headline';
    } else if (obj.nodeType === 'paragraph') {
      founderHeadline = obj.content?.[0]?.value || 'Founder Headline';
    } else {
      founderHeadline = 'Founder Headline';
    }
  }
  let founderSubtext = entry?.fields?.founderSubtext || 'Founder Subtext';
  if (typeof founderSubtext === 'object') {
    const obj = founderSubtext as any;
    if (obj.nodeType === 'document') {
      founderSubtext = obj.content?.[0]?.content?.[0]?.value || 'Founder Subtext';
    } else if (obj.nodeType === 'paragraph') {
      founderSubtext = obj.content?.[0]?.value || 'Founder Subtext';
    } else {
      founderSubtext = 'Founder Subtext';
    }
  }

  const founders = [];
  for (let i = 1; i <= 2; i++) {
    const imgField = `founder${i}Image`;
    const jsonField = `founder${i}`;
    const img = entry?.fields?.[imgField];
    const json = entry?.fields?.[jsonField];
    let name = `Founder ${i}`;
    let role = 'Role';
    let about = 'About';
    if (json) {
      let parsed;
      if (typeof json === 'string') {
        try {
          parsed = JSON.parse(json);
        } catch (e) {}
      } else if (typeof json === 'object') {
        parsed = json;
      }
      if (parsed) {
        name = parsed.name || name;
        role = parsed.role || role;
        about = parsed.about || about;
        if (typeof about === 'object') {
          const obj = about as any;
          if (obj.nodeType === 'document') {
            about = obj.content?.[0]?.content?.[0]?.value || 'About';
          } else if (obj.nodeType === 'paragraph') {
            about = obj.content?.[0]?.value || 'About';
          } else {
            about = 'About';
          }
        }
      }
    }
    // Replace \n\n with <br><br>
    about = about.replace(/\n\n/g, '<br><br>');
    founders.push({
      name,
      role,
      about,
      image: img ? 'https:' + img.fields.file.url : '/placeholder.svg'
    });
  }

  return (
    <main className="">
      <AboutUs
        heroHeadline={heroHeadline}
        heroHeadlineImage={heroHeadlineImage}
        aboutHeadline={aboutHeadline}
        aboutParagraph={aboutParagraph}
        aboutImage={aboutImage}
        strategyHeadline={strategyHeadline}
        strategySubtext={strategySubtext}
        strategies={strategies}
        founderHeadline={founderHeadline}
        founderSubtext={founderSubtext}
        founders={founders}
      />
      <Footer />
    </main>
  );
}

export default Company;
