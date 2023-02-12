import Image from "next/image";
import { Montserrat, Playfair_Display } from "@next/font/google";
import Photo1 from "public/recipe-page/photo1.png";
import Footer from "src/components/devchallenges.io/footer";

const playfair_display = Playfair_Display({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const SixDotsIcon = () => (
  <svg
    width="13"
    height="8"
    viewBox="0 0 13 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="1.5" cy="1.5" r="1.5" fill="#C4C4C4" />
    <circle cx="1.5" cy="6.5" r="1.5" fill="#C4C4C4" />
    <circle cx="6.5" cy="1.5" r="1.5" fill="#C4C4C4" />
    <circle cx="6.5" cy="6.5" r="1.5" fill="#C4C4C4" />
    <circle cx="11.5" cy="1.5" r="1.5" fill="#C4C4C4" />
    <circle cx="11.5" cy="6.5" r="1.5" fill="#C4C4C4" />
  </svg>
);

const IconLabel = ({
  materialIcon,
  topLabel,
  bottomLabel,
  customColor,
}: {
  materialIcon: string;
  topLabel: string;
  bottomLabel: string;
  customColor?: string;
}) => (
  <div className="flex gap-1 px-1 py-2">
    <span className={`material-icons ${customColor ?? ""}`}>
      {materialIcon}
    </span>
    <div className="flex flex-col">
      <div
        className={`${montserrat.className} text-[8px] font-bold text-gray-400`}
      >
        {topLabel}
      </div>
      <div
        className={`${montserrat.className} text-[10px] font-medium ${
          customColor ?? ""
        }`}
      >
        {bottomLabel}
      </div>
    </div>
  </div>
);

const Ingredient = ({ label }: { label: JSX.Element }) => (
  <div className="flex items-start gap-2">
    <input type={"checkbox"} className="h-5 w-5 flex-shrink-0" />
    {label}
  </div>
);

const Instruction = ({
  number,
  label,
}: {
  number: string;
  label: JSX.Element;
}) => (
  <div className="flex gap-4">
    <div
      className={`${playfair_display.className} h-8 w-8 flex-shrink-0 rounded bg-orange-300 text-center text-2xl font-bold text-white`}
    >
      {number}
    </div>
    {label}
  </div>
);

export default function RecipePage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <div className="flex flex-col px-3 pt-8 md:px-40">
        <div className={`${playfair_display.className} text-2xl font-bold`}>
          Classic Cheesecake Recipe
        </div>
        <div className="flex gap-3 pt-3">
          <div className="pt-0.5">
            <SixDotsIcon />
          </div>
          <div
            className={`${montserrat.className} text-xs font-medium italic text-neutral-500 md:w-2/5`}
          >
            Look no further for a creamy and ultra smooth classic cheesecake
            recipe! Paired with a buttery graham cracker crust, no one can deny
            its simple decadence. For the best results, bake in a water bath.
          </div>
        </div>
        <Image src={Photo1} alt="Cheesecake" className="mt-6 rounded-xl" />
        <div className="md:flex md:flex-row-reverse">
          <div className="flex h-full flex-shrink-0 rounded pt-6 md:ml-10 md:mt-6 md:min-w-fit md:px-6 md:pb-6 md:shadow-md">
            <div className="flex flex-col">
              <IconLabel
                materialIcon="local_dining"
                topLabel="YIELDS"
                bottomLabel="12 servings"
                customColor="text-orange-300"
              />
              <div className="flex gap-8 md:flex-col md:gap-0">
                <IconLabel
                  materialIcon="schedule"
                  topLabel="PREP TIME"
                  bottomLabel="45 minutes"
                  customColor="text-gray-900"
                />
                <IconLabel
                  materialIcon="schedule"
                  topLabel="COOK TIME"
                  bottomLabel="1 hour"
                  customColor="text-gray-900"
                />
                <IconLabel
                  materialIcon="schedule"
                  topLabel="TOTAL TIME"
                  bottomLabel="7,75 hours"
                  customColor="text-gray-900"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="pt-6">
              <div
                className={`${playfair_display.className} text-lg font-bold`}
              >
                Ingredients
              </div>
              <div>
                <div
                  className={`${playfair_display.className} py-4 italic text-gray-700`}
                >
                  Graham Cracker Crust
                </div>
                <div className="grid gap-4">
                  <Ingredient
                    label={
                      <div
                        className={`${montserrat.className} text-sm font-normal text-gray-700`}
                      >
                        1 and 1/2 cups (150g){" "}
                        <span className="font-bold">graham cracker crumbs</span>{" "}
                        (about 10 full sheet graham crackers)
                      </div>
                    }
                  />
                  <Ingredient
                    label={
                      <div
                        className={`${montserrat.className} text-sm font-normal text-gray-700`}
                      >
                        5 Tablespoons (70g){" "}
                        <span className="font-bold">unsalted butter</span>,
                        melted
                      </div>
                    }
                  />
                  <Ingredient
                    label={
                      <div
                        className={`${montserrat.className} text-sm font-normal text-gray-700`}
                      >
                        1/4 cup (50g){" "}
                        <span className="font-bold">granulated sugar</span>
                      </div>
                    }
                  />
                </div>
              </div>
              <div>
                <div
                  className={`${playfair_display.className} pt-8 pb-3 italic text-gray-700`}
                >
                  Cheesecake
                </div>
                <div className="grid gap-4">
                  <Ingredient
                    label={
                      <div
                        className={`${montserrat.className} text-sm font-normal text-gray-700`}
                      >
                        four 8-ounce blocks (904g) full-fat{" "}
                        <span className="font-bold">cream cheese</span>,
                        softened to room temperature
                      </div>
                    }
                  />
                  <Ingredient
                    label={
                      <div
                        className={`${montserrat.className} text-sm font-normal text-gray-700`}
                      >
                        1 cup (200g){" "}
                        <span className="font-bold"> granulated sugar</span>
                      </div>
                    }
                  />
                  <Ingredient
                    label={
                      <div
                        className={`${montserrat.className} text-sm font-normal text-gray-700`}
                      >
                        1 cup (240g){" "}
                        <span className="font-bold">full-fat sour cream</span>,
                        at room temperature
                      </div>
                    }
                  />
                  <Ingredient
                    label={
                      <div
                        className={`${montserrat.className} text-sm font-normal text-gray-700`}
                      >
                        1 teaspoon{" "}
                        <span className="font-bold">pure vanilla extract</span>
                      </div>
                    }
                  />
                  <Ingredient
                    label={
                      <div
                        className={`${montserrat.className} text-sm font-normal text-gray-700`}
                      >
                        2 teaspoons{" "}
                        <span className="font-bold">fresh lemon juice</span>{" "}
                        (optional, but recommended)
                      </div>
                    }
                  />
                  <Ingredient
                    label={
                      <div
                        className={`${montserrat.className} text-sm font-normal text-gray-700`}
                      >
                        3 large eggs <span className="font-bold">eggs</span>, at
                        room temperature
                      </div>
                    }
                  />
                  <Ingredient
                    label={
                      <div
                        className={`${montserrat.className} text-sm font-normal text-gray-700`}
                      >
                        topping suggestions:{" "}
                        <span className="italic">
                          salted caramel, lemon curd, strawberry topping,
                          chocolate ganache, red wine chocolate ganache, fresh
                          fruit, whipped cream, or raspberry sauce
                        </span>{" "}
                        (recipe in notes)
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div
                className={`${playfair_display.className} pb-4 text-xl font-bold`}
              >
                Instructions
              </div>
              <div className="grid gap-4">
                <Instruction
                  number="1"
                  label={
                    <div className={`${montserrat.className} text-base`}>
                      Adjust the oven rack to the lower-middle position and
                      preheat oven to 350°F (177°C).
                    </div>
                  }
                />
                <Instruction
                  number="2"
                  label={
                    <div className={`${montserrat.className} text-base`}>
                      <span className="font-bold">Make the crust</span>: Using a
                      food processor, pulse the graham crackers into crumbs.
                      Pour into a medium bowl and stir in sugar and melted
                      butter until combined. (You can also pulse it all together
                      in the food processor.) Mixture will be sandy. Press
                      firmly into the bottom and slightly up the sides of a
                      9-inch or 10-inch springform pan. No need to grease the
                      pan first. I use the bottom of a measuring cup to pack the
                      crust down tightly. Pre-bake for 8 minutes. Remove from
                      the oven and place the hot pan on a large piece of
                      aluminum foil. The foil will wrap around the pan for the
                      water bath in step 4. Allow crust to slightly cool as you
                      prepare the filling.
                    </div>
                  }
                />
                <Instruction
                  number="3"
                  label={
                    <div className={`${montserrat.className} text-base`}>
                      <span className="font-bold">Make the filling</span>: Using
                      a handheld or stand mixer fitted with a paddle attachment,
                      beat the cream cheese and granulated sugar together on
                      medium-high speed in a large bowl until the mixture is
                      smooth and creamy, about 2 minutes. Add the sour cream,
                      vanilla extract, and lemon juice then beat until fully
                      combined. On medium speed, add the eggs one at a time,
                      beating after each addition until just blended. After the
                      final egg is incorporated into the batter, stop mixing. To
                      help prevent the cheesecake from deflating and cracking as
                      it cools, avoid over-mixing the batter as best you can.
                    </div>
                  }
                />
                <Instruction
                  number="4"
                  label={
                    <div className={`${montserrat.className} text-base`}>
                      <span className="font-bold">
                        Prepare the simple water bath (see note)
                      </span>{" "}
                      Boil a pot of water. You need 1 inch of water in your
                      roasting pan for the water bath, so make sure you boil
                      enough. I use an entire kettle of hot water. As the water
                      is heating up, wrap the aluminum foil around the
                      springform pan. Pour the cheesecake batter on top of the
                      crust. Use a rubber spatula or spoon to smooth it into an
                      even layer. Place the pan inside of a large roasting pan.
                      Carefully pour the hot water inside of the pan and place
                      in the oven. (Or you can place the roasting pan in the
                      oven first, then pour the hot water in. Whichever is
                      easier for you.)
                    </div>
                  }
                />
                <Instruction
                  number="5"
                  label={
                    <div className={`${montserrat.className} text-base`}>
                      Bake cheesecake for 55-70 minutes or until the center is
                      almost set. When it’s done, the center of the cheesecake
                      will slightly wobble if you gently shake the pan. Turn the
                      oven off and open the oven door slightly. Let the
                      cheesecake sit in the oven in the water bath as it cools
                      down for 1 hour. Remove from the oven and water bath, then
                      cool cheesecake completely at room temperature. Then
                      refrigerate the cheesecake for at least 4 hours or
                      overnight.
                    </div>
                  }
                />
                <Instruction
                  number="6"
                  label={
                    <div className={`${montserrat.className} text-base`}>
                      Use a knife to loosen the chilled cheesecake from the rim
                      of the springform pan, then remove the rim. Using a clean
                      sharp knife, cut into slices for serving. For neat slices,
                      wipe the knife clean and dip into warm water between each
                      slice.
                    </div>
                  }
                />
                <Instruction
                  number="7"
                  label={
                    <div className={`${montserrat.className} text-base`}>
                      Serve cheesecake with desired toppings. Cover and store
                      leftover cheesecake in the refrigerator for up to 5 days.
                    </div>
                  }
                />
              </div>
            </div>
            <div
              className={`${montserrat.className} grid pt-6 text-xs text-gray-400`}
            >
              <div>Source:</div>
              <div>https://sallysbakingaddiction.com/classic-cheesecake/</div>
            </div>
            <div className="pt-10">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
