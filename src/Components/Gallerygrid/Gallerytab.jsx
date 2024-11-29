import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import { Gallery } from "./Gallery";
import { FoodArray } from "../../assets/Arrays/Gallery/FoodArray";
import { Yogaarray } from "../../assets/Arrays/Gallery/Yogaarray";
   
  export function GalleryWithTab() {
    const data = [
      {
        label: "Restaurant",
        value: "Restaurant",
        images: <Gallery item={FoodArray}/>
      },
      {
        label: "Meditation",
        value: "Meditation",
        images: <Gallery item={Yogaarray}/>
      },
    ];
   
    return (
      <Tabs value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="grid grid-cols-1 gap-4 ">
          {data.map(({ value, images }) => (
            <TabPanel
              className="grid grid-cols-2 gap-4 md:grid-cols-3"
              key={value}
              value={value}
            >
              {images?.map(({ imageLink }, index) => (
                <div key={index}>
                  <img
                    className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                    src={imageLink}
                    alt="image-photo"
                  />
                </div>
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }