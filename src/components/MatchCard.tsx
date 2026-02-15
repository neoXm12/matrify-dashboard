import React from "react";
import { Profile } from "../types";

export function MatchCard({
  name,
  age,
  location,
  image,
  interests,
  preference,
}: Profile) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <img src={image} alt={name} className="w-screen h-48 object-contain" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">
          {name}, {age}
        </h3>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="mt-2 text-sm">Interests: {interests.join(", ")}</p>
        <p className="mt-2 text-sm">Preference: {preference.join(",")}</p>
      </div>
    </div>
  );
}
