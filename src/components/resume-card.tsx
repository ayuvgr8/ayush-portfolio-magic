"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  // Parse bullet points from description
  const bulletPoints = description ? description.split('\n').filter(point => point.trim()) : [];
  const initialBullets = bulletPoints.slice(0, 3);
  const remainingBullets = bulletPoints.slice(3);
  const hasMoreBullets = remainingBullets.length > 0;

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>
          {description && (
            <div className="px-6 pb-4">
              {/* Always show first 3 bullets */}
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                {initialBullets.map((bullet, index) => (
                  <li key={index} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Show remaining bullets with animation */}
              {hasMoreBullets && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                    height: isExpanded ? "auto" : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground mt-2">
                    {remainingBullets.map((bullet, index) => (
                      <li key={index + 3} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Show More/Less button */}
              {hasMoreBullets && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsExpanded(!isExpanded);
                  }}
                  className="mt-3 text-xs font-medium text-primary hover:underline focus:outline-none"
                >
                  {isExpanded ? "Show Less" : `Show ${remainingBullets.length} More`}
                </button>
              )}
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
};
