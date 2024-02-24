import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">About Martins Blog</h1>
          <div className="text-md text-gray-500 flex flex-col gap-6 dark:text-white">
            <p>
              Welcome to Martins Blog, a platform dedicated to exploring the
              world of coding. We are passionate about sharing valuable
              insights, tips, and tutorials to help you enhance your coding
              skills and stay updated with the latest trends in technology.
            </p>
            <p>
              At Martins Blog, we believe in the power of community. Join us as
              we connect developers, enthusiasts, and learners from around the
              globe, fostering a collaborative environment where ideas are
              shared, and knowledge is gained.
            </p>
            <p>
              Our commitment to quality drives everything we do. From in-depth
              articles to hands-on coding examples, Martins Blog is your go-to
              resource for informative and engaging content that inspires and
              educates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
