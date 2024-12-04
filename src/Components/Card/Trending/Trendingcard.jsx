import React from "react";
import { trendingRecipes } from "../../../assets/Arrays/Restaurant/Trendingreceipearray";
import { MenuCard } from "../Menucard";
import { Trendingmenu } from "./Trendingcardmain";

export function Trendingcard(props) {
  return (
    <>
      {trendingRecipes.map((element) => (
        <Trendingmenu
          key={element.id}
          iconbg={element.image}
          title={element.title}
          description={element.description}
          subdescription={element.ingredients}
          classname={element.classname}
        />
      ))}
    </>
  );
}
