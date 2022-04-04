import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto my-16">
      <h2 className="text-5xl font-bold text-gray-600 capitalize border-b-2 border-[#01acfa] py-5 inline-block w-1/2">
        Question and answer
      </h2>
      <div className="my-10 p-5 shadow-lg rounded-lg">
        <h3 className="text-3xl font-semibold text-[#01acfa]">
          What is context api?{" "}
        </h3>
        <p className="text-lg my-5">
          <span className="text-[#01acfa] text-xl font-semibold">Answer: </span>
          In React, we share data by using props. But props had a problem. Let's
          say that there are four components, the fourth component being the
          children of the third component, the third component being the
          children of the second component, and the second component being the
          children of the first component. Whenever we want to share data (like
          an object, a number, an array, anything) from 1st component to 4th
          component, we must pass the data to all 2nd and 3rd components even
          though they are not using the data. The process is known as prop
          drilling. Context API resolves this problem. A context API allows us
          to share data from parent components to children components or
          children of children components without requiring props to do so. The
          context API allows data from the 1st component to be accessed directly
          by the 4th component without having the data sent to the 2nd and 3rd
          components.
        </p>
      </div>
      <div className="my-10 p-5 shadow-lg rounded-lg">
        <h3 className="text-3xl font-semibold text-[#01acfa]">
          What is semantic tag?{" "}
        </h3>
        <p className="text-lg my-5">
          <span className="text-[#01acfa] text-xl font-semibold">Answer: </span>
          A semantic tag is more readable and easier to find what the content is
          about, both for developers and browsers. Developers and browsers are
          able to understand the content more easily. For example When we
          declear a header with the div tag, it does not provide much
          information, but if we use the header tag, it indicates that it is the
          header of the page.
        </p>
      </div>
      <div className="my-10 p-5 shadow-lg rounded-lg">
        <h3 className="text-3xl font-semibold text-[#01acfa]">
          Different between inline and inline-block.{" "}
        </h3>
        <p className="text-lg my-5">
          <span className="text-[#01acfa] text-xl font-semibold">Answer: </span>
          <br />
          <br />
          <span className="font-bold">inline: </span>{" "}
          <span className="text-[#01acfa] font-bold">a)</span> inline element
          takes only the space it needs <br />
          <span className="text-[#01acfa] font-bold">b)</span> width and height
          can't be set in inline element
          <br /> <span className="text-[#01acfa] font-bold">c)</span> inline
          element don't take margin top and margin bottom <br />
          <br />
          <span className="font-bold">inline-block: </span>{" "}
          <span className="text-[#01acfa] font-bold">a)</span> inline-block
          element takes only the space it needs but it behave like a block
          elements <br />
          <span className="text-[#01acfa] font-bold">b)</span> width and height
          can be set in inline element
          <br /> <span className="text-[#01acfa] font-bold">c)</span> inline
          element take margin in all side.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
