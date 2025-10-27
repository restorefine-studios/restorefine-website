"use client";
import React, { useRef, useState } from "react";

// import luxevent from "@/public/mediahero.jpg";
import Image from "next/image";
import moneyeye from "@/public/rmediahero.svg";
import ctabg from "@/public/rmediactabg.jpg";
import { RestoOverview } from "./resto-services/resto-overview";
import { rMediaServices } from "@/lib/rmediaServices";
import signature from "@/public/restomediasignature.svg";
import bio from "@/public/services/media/restomediabio.jpg";
import { RestoExpectation } from "./resto-services/resto-expectation";
import Link from "next/link";
import { ArrowRight, Play, Pause, VolumeX, Volume2, RotateCcw, RotateCw } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const restoExpectationProps = {
  title: "And These Inspiring Benefits Await You",
  subtitle: " To turn your ideas into impactful solutions",
  partnerCard: {
    title: "Showcase your Business",
    gradient: { from: "#FFE0A7", to: "#483920" },
    backgroundColor: "#C9A585",
  },
  typewriterPhrases: ["Enhance Interaction & Attract New Customers", "Compelling Video Compositions", "Strategy That Speaks Directly To Your Audience"],
  buildingCard: {
    image: "",
    title: "",
    subtitle: "",
  },
  supportCard: {
    avatar: "",
    textImage: "",
    title: "",
    subtitle: "",
  },
  iterationsCard: {
    image: "",
    title: "",
    subtitle: "",
  },
  services: ["Photography", "Videography", "Content Creation", "Social Media Strategy"],
};

interface VideoCardProps {
  video: string;
  title: string;
  subtitle: string;
  isActive: boolean;
  isSectionVisible: boolean;
  index: number;
  videoRefs: React.MutableRefObject<(HTMLVideoElement | null)[]>;
}

const VideoCard = ({ video, title, subtitle, isActive, isSectionVisible, index, videoRefs }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Changed to false - videos start unmuted

  // Auto play/pause based on active state AND section visibility
  React.useEffect(() => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      if (isActive && isSectionVisible) {
        videoElement.play();
        setIsPlaying(true);
      } else {
        videoElement.pause();
        setIsPlaying(false);
      }
    }
  }, [isActive, isSectionVisible, index, videoRefs]);

  const togglePlay = () => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      videoElement.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const skipForward = () => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      videoElement.currentTime += 5;
    }
  };

  const skipBackward = () => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      videoElement.currentTime -= 5;
    }
  };

  return (
    <div className="relative h-[600px] w-full rounded-lg overflow-hidden bg-black">
      <video
        ref={(el) => {
          videoRefs.current[index] = el;
        }}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ aspectRatio: "9/16" }}
        muted={isMuted}
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Controls Overlay - Fade out when playing */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isPlaying ? "opacity-0" : "opacity-100"}`}>
        <div className="flex items-center gap-4">
          {/* Skip Backward Button */}
          <button onClick={skipBackward} className="bg-black/50 backdrop-blur-sm text-white rounded-full p-3 hover:bg-black/70 transition-colors flex items-center gap-1">
            <RotateCcw size={20} />
            <span className="text-xs font-medium">5s</span>
          </button>

          {/* Play/Pause Button */}
          <button onClick={togglePlay} className="bg-black/50 backdrop-blur-sm text-white rounded-full p-4 hover:bg-black/70 transition-colors">
            {isPlaying ? <Pause size={32} /> : <Play size={32} />}
          </button>

          {/* Skip Forward Button */}
          <button onClick={skipForward} className="bg-black/50 backdrop-blur-sm text-white rounded-full p-3 hover:bg-black/70 transition-colors flex items-center gap-1">
            <span className="text-xs font-medium">5s</span>
            <RotateCw size={20} />
          </button>
        </div>
      </div>

      {/* Mute Button */}
      <button onClick={toggleMute} className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white rounded-full p-2 hover:bg-black/70 transition-colors">
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white/90 text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

function RMedia() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const items = [
    {
      id: 1,
      video: "/reels/reel1.mp4", // Changed from image to video
      title: "SpudKingz Launch",
      subtitle: "Launch of SpudKingz - A Crispy Revolution!",
    },
    {
      id: 2,
      video: "/reels/reel2.mp4", // Changed from image to video
      title: "100 Spuds Giveaway",
      subtitle: "100 Spuds Giveaway. Join us for a chance to win!",
    },
    {
      id: 3,
      video: "/reels/reel3.mp4", // Changed from image to video
      title: "SpudKingz Location",
      subtitle: "SpudKingz Location Reveal - Find Us Here!",
    },
    {
      id: 4,
      video: "/reels/reel4.mp4", // Changed from image to video
      title: "Extra Special Cheesy Spuds",
      subtitle: "Customers React to Our New Cheesy Spuds!",
    },
  ];

  const initialSlideIndex = Math.floor(items.length / 2);

  // Initialize video refs array
  React.useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, items.length);
  }, [items.length]);

  // Set initial active slide
  React.useEffect(() => {
    setActiveSlideIndex(initialSlideIndex);
  }, [initialSlideIndex]);

  // Intersection Observer to detect when section is visible
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "-100px 0px", // Add some margin for better UX
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const handleSlideChange = (swiper: any) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  return (
    <main className="">
      {/* <div className="w-full h-full object-cover absolute top-0 left-0 z-0">
          <Image
            src={luxevent}
            alt="luxevent"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <span className="min-h-screen relative z-10 flex items-center justify-center">
            <Image
              src={mlogo}
              alt="restomedialogo"
              width={100}
              height={100}
              className=""
            />
          </span>
        </div> */}

      <section className="relative z-0 min-h-screen flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between text-left gap-y-16 md:gap-y-4">
        <div className="flex flex-col items-start gap-y-5">
          <h1 className="relative z-0 text-left font-medium tracking-tight rservicehero text-4xl md:text-7xl">
            <span className="p-1 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent tracking-tight">
              Shot, Shared,
              <br />& Selling Out
            </span>
          </h1>
          <p className="md:max-w-lg max-w-full">From perfectly lit plates to behind-the-scenes reels, we turn your business into the content your audience didn&apos;t know they needed. This is digital media, tailored for visibility and built for connection.</p>

          <Link href="/enquire-now" className="flex items-center gap-1 mt-1 hover:opacity-90">
            <div className="w-auto bg-white text-black text-sm rounded-[32px] px-6 py-3">Lets Craft Something</div>
            <ArrowRight className="flex items-center justify-center bg-[red] text-white rounded-full p-2.5 size-10" />
          </Link>
        </div>

        <div className="w-auto md:w-[500px]">
          <Image src={moneyeye || "/placeholder.svg"} alt="Money Eye" width={450} height={450} className="w-full h-auto" />
        </div>
      </section>

      <section ref={sectionRef} className="flex flex-col items-center py-12">
        <div className="mb-8 flex flex-col items-center">
          <h2 className="text-2xl text-white font-medium mb-4 border border-[red] rounded-full px-6 py-2">Reels</h2>
          <p className="text-sm text-center text-white/50">Real projects, real results. Watch how we transform businesses into scroll-stopping content that drives engagement and sales.</p>
        </div>
        <Swiper
          initialSlide={initialSlideIndex} // Set the initial slide index to 3 (4th slide)
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-[350px]"
          onSlideChange={handleSlideChange}
        >
          {items?.map((item, index) => (
            <SwiperSlide className="shadow-lg" key={item.id}>
              <VideoCard video={item.video} title={item.title} subtitle={item.subtitle} isActive={index === activeSlideIndex} isSectionVisible={isSectionVisible} index={index} videoRefs={videoRefs} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="py-24 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="relative h-[350px] bg-[#d9d9d9] rounded-[24px]">
          <Image src={bio} alt="resto media bio" fill className="absolute rounded-[24px] object-cover w-full" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-medium">What is Resto Media</h2>
          <p className="text-sm text-white/50">
            RestoMedia manages your social media and content creation, delivering high-quality photography and videography that showcases the best of your business. We handle your social platforms, ensuring engaging content that drives visibility and customer interaction.
          </p>
        </div>
      </section>

      <RestoOverview {...rMediaServices} />

      <section className="py-12">
        <div className="flex w-full inset-x-0 overflow-x-hidden">
          <Image src={ctabg} alt="mediactabackground" layout="responsive" width={100} height={100} className="w-full bg-norepeat" objectFit="cover" />
        </div>
      </section>

      <RestoExpectation {...restoExpectationProps} />

      <section className="absolute inset-x-0 flex w-full overflow-x-hidden bg-transparent py-0 gap-x-4">
        <div className="animate-marquee-infinite flex min-w-full shrink-0 items-center justify-around gap-0">
          <Image src={signature} alt="signature" layout="responsive" width={500} height={500} className="w-full" />
        </div>
        <div className="animate-marquee-infinite flex min-w-full shrink-0 items-center justify-around gap-0">
          <Image src={signature} alt="signature" layout="responsive" width={500} height={500} className="w-full" />
        </div>
      </section>
    </main>
  );
}

export default RMedia;
