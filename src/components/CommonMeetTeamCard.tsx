"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface CommonMeetTeamCardProps {
  imgSrc: StaticImageData;
  imgAlt: string;
  title: string;
  subtitle: string;
}

const CommonMeetTeamCard: React.FC<CommonMeetTeamCardProps> = ({
  title,
  subtitle,
  imgSrc,
  imgAlt,
}) => {
  return (
    <div className="col-md-4">
      <div className="team-member-card">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={200}
          height={200}
          className="member-img"
        />
        <h5 className="name">{title}</h5>
        <p className="position">{subtitle}</p>
      </div>
    </div>
  );
};

export default CommonMeetTeamCard;