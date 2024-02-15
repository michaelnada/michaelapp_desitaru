import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="logo">
    My exciting website!
   </div>

    <nav>
     <ul>
       <li>
        <a href="">Home</a>
       </li>
        <li>
         <a href="">Blog</a>
       </li>
       <li>
          <a href="">About us</a>
       </li>
        <li>
         <a href="">Our history</a>
       </li>
       <li>
         <a href="">Contacts</a>
      </li>
     </ul>
   </nav>
    <main className="grid">
    <article>
      <h1>
        An Exciting Blog Post
      </h1>
      <img src="images/balloon-sq6.jpg" alt="placeholder" className="feature"/>
      <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon
        azuki bean garlic.</p>

      <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens
        dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>

      <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon
        napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko.
        Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram
        corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress.
        Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.</p>

      <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie
        turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki
        bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify.</p>

      <p>Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle
        seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.</p>

    </article>

    <aside>
      <h2>
        Photography
      </h2>
      <ul className="photos">
        <li>
          <img src="images/balloon-sq1.jpg" alt="placeholder"/>
        </li>
        <li>
          <img src="images/balloon-sq2.jpg" alt="placeholder"/>
        </li>
        <li>
          <img src="images/balloon-sq3.jpg" alt="placeholder"/>
        </li>
        <li>
          <img src="images/balloon-sq4.jpg" alt="placeholder"/>
        </li>
        <li>
          <img src="images/balloon-sq5.jpg" alt="placeholder"/>
        </li>
      </ul>

    </aside>
    </main>
    </>
    
  )
}
