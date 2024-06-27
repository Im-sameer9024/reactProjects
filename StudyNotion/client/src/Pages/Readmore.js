import React from "react";
import owner from "../assets/img/owner.png";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "100vw",
  },
};

const pageTransition = {
  type: "spring",
  stiffness: 50,
  damping: 10,
};

const Readmore = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-[100vw] bg-darkBlue mt-[3rem] h-auto"
    >
      <div className="w-11/12 mx-auto flex">
        <p className=" font-smallContent text-[0.7rem] sm:text-[0.9rem] md:text-[1.5rem]">
          <div className=" text-center w-5/12 float-left mr-5 mt-4">
            <img src={owner} alt="owner" />
            <h1 className="mt-1 text-[1rem] sm:text-[1.4rem] font-smallContent">
              Mr.Frank Link
            </h1>
            <p className="text-sky-300 text-[0.7rem] sm:text-[1.2rem]">
              ( Owner )
            </p>
          </div>
          <h1 className=" flex font-smallHeading text-[0.8rem] sm:text-[1.4rem] md:text-[1.8rem] justify-center items-center gap-2 pt-3">
            <span className="flex flex-col gap-2 items-end ">
              <hr className=" w-[1rem] h-[0.2rem] bg-sky-400 rounded-lg" />
              <hr className=" w-[2rem] h-[0.2rem] bg-sky-400 rounded-lg" />
            </span>
            Owner Says !
            <span className="flex flex-col gap-2">
              <hr className=" w-[1rem] h-[0.2rem] bg-sky-400 rounded-lg" />
              <hr className=" w-[2rem] h-[0.2rem] bg-sky-400 rounded-lg" />
            </span>
          </h1>
          Starting an education institute has been an incredible journey filled
          with challenges and rewards. From envisioning a place where students
          could thrive academically and personally to seeing it come to life,
          each step has been a testament to dedication and hard work. Building a
          team of passionate educators, creating a curriculum that meets diverse
          needs, and fostering an environment of growth and discovery have been
          core to our mission. The joy of witnessing students achieve their
          goals and grow into confident, capable individuals is unmatched. This
          journey is a continuous learning experience, and I am committed to
          making a positive impact in the field of education.
        </p>
      </div>
      {/* Essay  */}
      <div data-aos="fade-up" className="w-11/12 mx-auto font-smallContent text-[0.7rem]  sm:text-[0.9rem] md:text-[1.2rem] mt-3">
        <span data-aos="fade-up" className=" font-smallHeading text-[1rem] font-bold sm:text-[1.4rem] md:text-[1.8rem]">
          StudyNotion Education Institute: Shaping the Future of Learning :-{" "}
        </span>
        <br />
        <div data-aos="fade-up">
          <strong className="text-sky-300 text-[1rem] sm:text-[1.4rem] md:text-[1.8rem]">
            Introduction:-
          </strong>
          <strong className="text-[1rem] sm:text-[1.4rem] md:text-[1.8rem]">
            E
          </strong>
          ducation is the cornerstone of a thriving society, and StudyNotion
          Education Institute stands at the forefront of this mission, dedicated
          to nurturing the minds of tomorrow. As an institution, StudyNotion is
          not just a place of learning but a community where innovation,
          dedication, and excellence converge. This essay explores the journey,
          values, and impact of StudyNotion Education Institute, emphasizing its
          commitment to providing a transformative educational experience.
        </div>
        <br />
        <div data-aos="fade-up">
        <strong className="text-sky-300 text-[1rem] sm:text-[1.4rem] md:text-[1.8rem]">
          Founding Vision:-
        </strong>
        <strong className="text-[1rem] sm:text-[1.4rem] md:text-[1.8rem]">
          T
        </strong>
        he inception of StudyNotion was driven by a profound vision to create an
        educational environment where students could flourish academically,
        personally, and socially. Recognizing the gaps in traditional education
        systems, StudyNotion was established with the aim of offering a holistic
        approach to learning. The institute’s founders believed in an education
        that goes beyond textbooks, focusing on critical thinking, creativity,
        and character development.
        </div> 
        <br />
       <div data-aos="fade-up">
       <strong className="text-sky-300 text-[1rem] sm:text-[1.4rem] md:text-[1.8rem]">
          Academic Excellence:-
        </strong>
        <strong className="text-[1rem] sm:text-[1.4rem] md:text-[1.8rem]">
          A
        </strong>
        t the heart of StudyNotion’s mission is academic excellence. The
        institute offers a comprehensive curriculum designed to meet the diverse
        needs of its students. From foundational subjects to advanced courses,
        StudyNotion ensures that every student receives a well-rounded
        education. The faculty, comprising experienced educators and industry
        experts, employs innovative teaching methods to engage and inspire
        students. Regular assessments, personalized feedback, and continuous
        support are integral to the academic framework, ensuring that each
        student can achieve their full potential. 
       </div> <br />
       <div data-aos="fade-up">
       <strong className="text-sky-300 text-[1rem] md:text-[1.8rem] sm:text-[1.4rem]">
          Innovation Teaching and Learning:-
        </strong>
        <strong className="text-[1rem] sm:text-[1.4rem] md:text-[1.8rem]">
          S
        </strong>
        tudyNotion Education Institute embraces modern pedagogical approaches to
        create a dynamic learning environment. The integration of technology in
        classrooms, interactive learning sessions, and hands-on projects are
        some of the ways StudyNotion makes learning enjoyable and effective. The
        use of digital tools and resources allows students to explore subjects
        in depth and at their own pace, fostering a sense of independence and
        responsibility in their learning journey.
       </div> <br />
        <div data-aos="fade-up">
        <strong className="text-sky-300 md:text-[1.8rem] text-[1rem] sm:text-[1.4rem]">
          Holistic Development:-
        </strong>{" "}
        <strong className="text-[1rem] sm:text-[1.4rem] md:text-[1.8rem]">
          B
        </strong>
        eyond academics, StudyNotion is committed to the holistic development of
        its students. The institute offers a variety of extracurricular
        activities, including sports, arts, and community service, to ensure
        that students develop a broad range of skills and interests. These
        activities help students build teamwork, leadership, and communication
        skills, which are essential for success in the real world. StudyNotion
        also prioritizes mental and emotional well-being, providing counseling
        services and wellness programs to support students’ overall health.
        </div>
        <br />
        <div data-aos="fade-up">
        <strong className="text-sky-300 text-[1rem] sm:text-[1.4rem] md:text-[1.8rem]">
          Community and Collaboration:-
        </strong>
        <strong className="text-[1rem] sm:text-[1.4rem] md:text-[1.8rem]">
          S
        </strong>
        tudyNotion believes in the power of community and collaboration. The
        institute fosters a supportive and inclusive environment where students,
        teachers, and parents work together towards common goals. Regular
        parent-teacher meetings, collaborative projects, and community events
        are part of the institute’s efforts to build strong relationships and a
        sense of belonging among all stakeholders. This collaborative spirit
        extends beyond the institute, as StudyNotion actively engages with local
        communities through outreach programs and partnerships.
        </div>
        <br />
        <div data-aos="fade-up">
        <strong className="text-sky-300 text-[1rem] md:text-[1.8rem] sm:text-[1.4rem]">
          Conclusion:-
        </strong>
        <strong className="text-[1rem] sm:text-[1.4rem] md:text-[1.8rem]">
          S
        </strong>
        tudyNotion Education Institute is more than just an educational
        institution; it is a place where dreams take flight, and futures are
        shaped. Through its commitment to academic excellence, innovative
        teaching, holistic development, and community collaboration, StudyNotion
        is preparing students to become the leaders, innovators, and
        change-makers of tomorrow. As the institute continues to grow and
        evolve, its core values remain steadfast, ensuring that every student
        who walks through its doors is equipped with the knowledge, skills, and
        confidence to succeed in an ever-changing world.
        </div>
      </div>
      <div data-aos="fade-up" className=" w-10/12 mx-auto flex flex-col justify-center items-center my-[1rem] pb-5">
        <h1 className="sm:text-[1.4rem]">Thanks to visit</h1>
        <p className="text-[0.7rem] sm:text-[1rem] relative">
          <span className=" absolute text-[8px] -left-[10px]">
            <i class="fa-solid fa-quote-left"></i>
          </span>
          Alone we can do so little,together we can do so much.
          <span className=" absolute text-[8px] -right-[10px]">
            <i class="fa-solid fa-quote-right"></i>
          </span>
        </p>
        <p className="font-smallContent text-sky-300 text-[0.7rem] sm:text-[0.9rem]">
        
          <i className="font-smallContent text-[0.6rem] text-white sm:text-[0.8rem]">
            Written by:-
          </i>
          Mr. Frank Link
        </p>
      </div>
    </motion.div>
  );
};

export default Readmore;
