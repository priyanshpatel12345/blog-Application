import React from "react";

function About() {
  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold  text-center mb-11">About</h1>
      <p>
        I am a passionate MERN stack developer with a strong foundation in
        building full-stack web applications. My expertise lies in leveraging
        the power of MongoDB, Express, React, and Node.js to create dynamic and
        responsive web solutions. I thrive in fast-paced environments and enjoy
        turning complex problems into user-friendly interfaces.
      </p>

      <h2 className="text-xl font-semibold mt-4">Skills:</h2>
      <ul className="list-disc pl-6 mt-3">
        <li>
          <strong>MongoDB:</strong>
          <ul className="list-disc pl-6">
            <li>
              Proficient in designing and managing NoSQL databases for scalable
              applications.
            </li>
          </ul>
        </li>
        <li>
          <strong>Express:</strong>
          <ul className="list-disc pl-6">
            <li>
              Experienced in creating robust back-end APIs and middleware.
            </li>
          </ul>
        </li>
        <li>
          <strong>React:</strong>
          <ul className="list-disc pl-6">
            <li>
              Skilled in developing interactive and modern front-end
              applications using React and related libraries.
            </li>
          </ul>
        </li>
        <li>
          <strong>Node.js:</strong>
          <ul className="list-disc pl-6">
            <li>
              Adept at building server-side applications with a focus on
              performance and scalability.
            </li>
          </ul>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-1">
        Projects and Experience:
      </h2>
      <ul className="list-disc pl-6">
        <li>
          Developed a full-stack blog application featuring:
          <ul className="list-disc pl-6">
            <li>User authentication</li>
            <li>CRUD operations</li>
            <li>Real-time commenting</li>
            <li>Deployed on Render</li>
          </ul>
        </li>
        <li>
          Implemented responsive and visually appealing UI components using
          Tailwind CSS.
        </li>
        <li>
          Collaborated with cross-functional teams to deliver high-quality
          software solutions.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-1">Professional Values:</h2>
      <ul className="list-disc pl-6">
        <li>
          <strong>Continuous Learning:</strong>
          <ul className="list-disc pl-6">
            <li>
              Committed to staying updated with the latest industry trends and
              technologies.
            </li>
          </ul>
        </li>
        <li>
          <strong>Problem-Solving:</strong>
          <ul className="list-disc pl-6">
            <li>Enjoy tackling challenges and finding efficient solutions.</li>
          </ul>
        </li>
        <li>
          <strong>Collaboration:</strong>
          <ul className="list-disc pl-6">
            <li>
              Strong believer in the power of teamwork and effective
              communication.
            </li>
          </ul>
        </li>
      </ul>

      <p className="mt-4">
        I am always eager to connect with fellow developers, share knowledge,
        and explore new opportunities in the tech world. Let's connect and
        create something amazing together!
      </p>
    </div>
  );
}

export default About;
