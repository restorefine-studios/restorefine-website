"use client";
import React, { useRef, useState } from "react";

import { ArrowRight, Play, Pause, VolumeX, Volume2, RotateCcw, RotateCw } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

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
  const [isMuted, setIsMuted] = useState(false);
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

export default function Reels() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const items = [
    {
      id: 1,
      video: "/reels/reel1.mp4",
      title: "SpudKingz Launch",
      subtitle: "Launch of SpudKingz - A Crispy Revolution!",
    },
    {
      id: 2,
      video: "/reels/reel2.mp4",
      title: "100 Spuds Giveaway",
      subtitle: "100 Spuds Giveaway. Join us for a chance to win!",
    },
    {
      id: 3,
      video: "/reels/reel3.mp4",
      title: "SpudKingz Location",
      subtitle: "SpudKingz Location Reveal - Find Us Here!",
    },
    {
      id: 4,
      video: "/reels/reel4.mp4",
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
    <section ref={sectionRef} className="flex flex-col items-center mb-24 py-12">
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
  );
}
