"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
    {
        initials: "SC",
        name: "Sarah Chen",
        role: "Store Owner",
        quote: "CodeConfig transformed our store's conversion rate. The countdown timer is incredibly effective and easy to set up.",
    },
    {
        initials: "MJ",
        name: "Marcus Johnson",
        role: "E-commerce Manager",
        quote: "The Shopify app integration was seamless. We saw a 40% increase in engagement within the first week.",
    },
    {
        initials: "AL",
        name: "Aisha Lopez",
        role: "Product Designer",
        quote: "Ifte delivered a full-stack product that exceeded our expectations. Clean code, solid DevOps, great communication.",
    },
];

export function TestimonialSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="relative p-5">
            <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary" />
                ))}
            </div>

            <Swiper
                direction="vertical"
                slidesPerView={1}
                spaceBetween={0}
                speed={500}
                loop={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                modules={[Autoplay]}
                grabCursor={true}
                touchRatio={1}
                simulateTouch={true}
                watchOverflow={true}
                touchEventsTarget="container"
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="mt-3 !h-[110px]"
            >
                {testimonials.map((t, i) => (
                    <SwiperSlide key={i} className="h-full">
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                            &ldquo;{t.quote}&rdquo;
                        </p>
                        <div className="mt-4 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                                {t.initials}
                            </div>
                            <div>
                                <p className="text-sm font-medium">{t.name}</p>
                                <p className="text-xs text-muted-foreground">
                                    {t.role}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute bottom-3 right-4 flex gap-1.5">
                {testimonials.map((_, i) => (
                    <span
                        key={i}
                        className={`block w-1.5 h-1.5 rounded-full transition-all ${
                            i === activeIndex ? "bg-primary w-3" : "bg-border"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
