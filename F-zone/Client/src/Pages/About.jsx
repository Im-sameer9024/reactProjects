import { assets } from "../assets/assets";
import Newsletter from "../components/Newsletter";
import Title from "../components/Title";

export default function About() {
  return (
    <div>

      <div className=" text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className=" my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="about Image" className=" w-full md:max-w-[450px]" />
        <div className=" flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className=" font-content">Welcome to F-Zone, where innovation meets excellence. We are a dynamic company committed to delivering top-tier services and solutions that cater to the evolving needs of our clients. At F-Zone, we believe in building long-lasting relationships by understanding our customer&#39;s goals and providing personalized experiences that go beyond expectations. Our team of professionals is passionate about quality and creativity, constantly pushing the boundaries to offer cutting-edge solutions that add value to your business. With a customer-first mindset and a drive for perfection, F-Zone is your trusted partner for success.</p>
          <p className=" font-content">At F-Zone, we pride ourselves on offering top-quality services designed to meet your specific needs. Our team is dedicated to providing efficient, reliable, and innovative solutions, ensuring that every interaction delivers value and satisfaction. With a focus on excellence, we aim to exceed your expectations at every step.</p>
          <b className=" text-gray-800 font-heading">Our Mission</b>
          <p className=" font-content">our mission is to empower our clients with innovative solutions that drive success and growth. We are committed to delivering exceptional service, fostering meaningful partnerships, and consistently striving for excellence in everything we do. Our goal is to make a positive impact by creating value and delivering results that exceed expectations.</p>
        </div>

      </div>
      <div className=" text-xl py-4 ">
        <Title text1={'WHY'} text2={'CHOOSE'} />

      </div>
      <div className=" flex flex-col md:flex-row text-sm mb-20">
        <div className=" border px-10 md:px-16 py-4 sm:py-10 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className=" font-content">Quality assurance is at the core of everything we do. We are committed to delivering the highest standards in every service and product, ensuring that each project meets rigorous quality checks. Our focus on precision, reliability, and consistency guarantees that you receive nothing but the best, every time.</p>

        </div>
        <div className=" border px-10 md:px-16 py-4 sm:py-10 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className=" font-content">Convenience is key. We prioritize making your experience seamless and hassle-free by offering easy access to our services and solutions. Our user-friendly approach ensures that you can rely on us for efficient, straightforward support, tailored to fit your busy lifestyle.</p>

        </div>
        <div className=" border px-10 md:px-16 py-4 sm:py-10 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className=" font-content">Exceptional customer service is our promise. We are dedicated to providing personalized support, always putting your needs first. Our friendly and knowledgeable team is here to ensure every interaction is positive, responsive, and exceeds your expectations. Your satisfaction is our top priority.</p>

        </div>

      </div>

      <Newsletter />

    </div>
  )
}
