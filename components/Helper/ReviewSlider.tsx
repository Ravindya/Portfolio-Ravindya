import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from "./ClientReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ReviewSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      itemClass="item"
    >
      <ClientReviewCard
        image="/images/user1.png"
        user="DR. J.A.S.C.Jayasinghe"
        role="Senior Lecturer,Department of Civil Engineering,University of Peradeniya"
       paragraph={"As an undergraduate, Ravindya demonstrated exceptional dedication and a strong aptitude for research. Their analytical skills, attention to detail, and ability to think critically were evident throughout the project. Ravindya consistently met deadlines, showed a keen interest in exploring innovative solutions, and contributed valuable insights to the research. It was a pleasure to supervise someone so committed to excellence and continuous learning."}/>
      <ClientReviewCard
        image="/images/user2.png"
        user="Warsha Kanakarathna"
        role="B. Sc. Engineering (Hons) specialized in Civil Engineering | Peradeniya , Instructor of FoE,UoP"
       paragraph={"I want to extend my heartfelt congratulations as she embarks on her new career. I have no doubt that her drive and intelligence will lead her to great success. She is my research partner and I am incredibly fortunate to have had ravindya as my research partner. Her dedication and hard work were instrumental in the success of our research. Her ability to combine smart strategies with relentless effort truly set her apart and ensured that we completed our work to the highest standard."}/>
      <ClientReviewCard
        image="/images/user3.png"
        user="Dasuni Sembanayake"
        role="B. Sc. Engineering (Hons)(Moratuwa), AMIESL, A.Eng. ECSL."
       paragraph={"Ravindya! I am so excited to see you showcase your amazing talents and achievements.\n" +
           "\n" +
           "I had the pleasure of working closely with Ravindya during our A/L time, and I can confidently say that she is an exceptional individual with a unique blend of skills and qualities. She has excellent problem-solving skills and consistently approaches challenges with a creative mindset. Her ability to think outside the box and develop innovative solutions is truly inspiring.\n" +
           "\n" +
           "She is also a fast learner who adapts quickly to new environments and tasks, making her a valuable asset to any team. Her excellent communication skills allow her to express ideas clearly and collaborate effectively with others, fostering a positive and productive work environment. Additionally, her dedication and strong time management skills ensure that she always delivers high-quality work on time. I am confident that her creativity and hard work will continue to lead her to even greater success. Wishing you all the best in this exciting new chapter!"}/>
      <ClientReviewCard
        image="/images/user4.png"
        user="Thulani Iddamalgoda"
        role="B. Sc. Engineering (Hons) specialized in Civil Engineering | Peradeniya , Instructor of FoE,UoP"
       paragraph={"First, I would like to congratulate you on your latest achievement—well-deserved! We were batchmates for nearly five years at the same university, and during that time, I consistently saw you embrace challenges with confidence and determination. You have always been someone who tackles obstacles head-on, without hesitation.\n" +
           "\n" +
           "Beyond your ability to face challenges, I’ve also admired your sense of responsibility and strong decision-making skills. Whether it was in group projects, class discussions, or extracurricular activities, you always approached every situation thoughtfully and with a clear sense of direction. Your commitment to excellence and your ability to navigate complex situations have always set you apart.\n" +
           "\n" +
           "I'm confident that these qualities will continue to serve you well in all your future endeavors.."}/>
      <ClientReviewCard
        image="/images/user5.png"
        user="Tharindu Rukshan"
        role="Traning Software Engineer , ISE , Panadura"
       paragraph={"Working with Ravindya has been a remarkable experience. She stands out as one of the best colleagues I've had the pleasure of collaborating with. Her commitment to delivering high-quality work consistently and on time is truly impressive, and her potential for further growth is very promising. What really distinguishes Ravindya, however, is her exceptional personality. She brings a blend of humility and friendliness that greatly contributes to a positive and collaborative atmosphere. Her enthusiasm for learning new skills is truly motivating, and her ability to appreciate and value diverse viewpoints makes her an outstanding team player. Ravindya's organizational skills, dedication, and overall presence make her an invaluable member of any team."}/>
    </Carousel>
  );
};

export default ReviewSlider;
