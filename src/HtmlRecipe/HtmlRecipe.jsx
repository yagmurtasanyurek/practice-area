import Photo from "./sogan-halkasi.jpg";
export function HtmlRecipe() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Recipes</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
        </ul>
      </nav>

      <header>
        <h1> Onion Ring</h1>
      </header>

      <main>
        <img src={Photo} alt="Onion Ring" width={300} height={300} />
        <h2>How to Make Homemade Onion Rings</h2>
        <section>
          <div>
            <h3>Step 1</h3>
            <p>Gather all ingredients.</p>
          </div>
          <div>
            <h3>Step 2</h3>
            <p>
              Slice onion into 1/3-inch-thick rings. Heat oil in a deep-fryer to
              365 degrees F (185 degrees C). Place a wire rack over a sheet of
              aluminum foil..
            </p>
          </div>
          <div>
            <h3>Step 3</h3>
            <p>
              Prepare breading station by setting out 3 wide, shallow dishes.
              Whisk flour, baking powder, and salt together in the first dish.
              Whisk milk and egg together in the second dish. Place bread crumbs
              in the third dish.
            </p>
          </div>
          <div>
            <h3>Step 4</h3>
            <p>
              Dip each onion ring into the flour mixture, turning several times
              until fully coated with flour.
            </p>
          </div>
          <div>
            <h3>Step 5</h3>
            <p>
              Transfer to the egg mixture and use a fork to turn until coated.
              Lift onion with the fork and shake gently so excess liquid drips
              back into the dish.
            </p>
          </div>
          <div>
            <h3>Step 6</h3>
            <p>
              Place onion in the bread crumbs and turn several times to coat,
              scooping crumbs over the ring if necessary.
            </p>
          </div>
          <div>
            <h3>Step 7</h3>
            <p>
              Lift again with the fork, tap any excess bread crumbs back into
              the dish, and place on the wire rack while you prepare the
              remaining onion rings.
            </p>
          </div>
          <div>
            <h3>Step 8</h3>
            <p>
              Deep-fry 3 to 3 onion rings at a time in the preheated oil until
              golden brown, 2 to 3 minutes. Drain on paper towels while you
              deep-fry the remaining rings.
            </p>
          </div>
          <div>
            <h3>Step 9</h3>
            <p>Sprinkle with seasoning salt before serving.</p>
          </div>
        </section>

        <section>
          <h2>Ingredients</h2>
          <ul>
            <li>1 large Vidalia or other sweet onion</li>
            <li>1 quart oil for frying, or as needed</li>
            <li>1 ¼ cups all-purpose flour</li>
            <li>1 teaspoon baking powder</li>
            <li>1 teaspoon salt</li>
            <li>1 cup milk, or as needed</li>
            <li>1 large egg</li>
            <li>¾ cup dry bread crumbs</li>
            <li>⅛ teaspoon seasoned salt, or to taste</li>
          </ul>
        </section>
      </main>
    </>
  );
}
