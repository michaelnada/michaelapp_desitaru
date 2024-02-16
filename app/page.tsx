import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className=" text-[150%] sm:text-[200%]
    px-[50px] py-[20px] w-auto">
    My exciting website!
   </div>
   <div className="container py-[5px]
   sticky top-0 left-0 right-0 bg-black  
   ">
    <nav className ="text-white flex flex-row space-between text-center
    " >
     <div className ="w-1/5">
      Home
     </div>
     <div className ="w-1/5">
      Blog
     </div>
     <div className ="w-1/5">
      About us
     </div>
     <div className ="w-1/5">
      Our history
     </div>
     <div className ="w-1/5">
      Contacts
      </div>
   </nav>
   </div>
   <div  className ="">
    <main className="my-[20px] flex flex-wrap">
      <article className =" w-[70%]">
        <h1 className = "text-[130%] font-bold">
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

    <div className = "w-[30%]">
      <h2 className = "text-[130%] font-bold">
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

    </div>
    </main>
    </div>
    </>
    
  )
}
