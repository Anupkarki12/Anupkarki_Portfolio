import React from "react";

const Education = () => {
  const qualifications = [
    {
      name: "Aryan School of Engineering and Management (PU)",
      description:
        "Aryan School of Engineering and Management is a distinguished institution offering quality education in engineering and management. With a focus on practical learning and professional development, it aims to equip students with the skills and knowledge needed to excel in their careers.",
      address: "Mid-Baneshwor, Kathmandu",
      level: "Bachelor",
      grade: "",
      status: "Running",
      year: "",
    },
    {
      name: "Gyankunj School/College",
      description:
        "Gyankunj College/School is a respected academic institution celebrated for its dedication to educational excellence and the promotion of cultural values. Managed by Bhaktapur Municipality, it delivers high-quality education at an affordable cost, nurturing disciplined, socially conscious individuals.",
      address: "Ravibhawan,Kalanki",
      level: "+2",
      grade: "A",
      status: "completed",
      year: "2020",
    },
    {
      name: "Himalayan English Sec boarding school",
      description:
        "Himalayan English Secondary School is a reputed institution based in Bardibas, Mahottari, committed to delivering quality education while nurturing the overall growth and development of its students.",
      address: "Thaha-3,Makwanpur",
      level: "10th",
      grade: "A+",
      status: "completed",
      year: "2018",
    },
  ];
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 pb-20 text-sm leading-relaxed text-gray-400 md:text-lg">
      <h1 className="text-center text-3xl font-semibold text-cyan-500">
        My Education
      </h1>
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:flex-row lg:grid-cols-3">
        {qualifications.map((qualification, index) => (
          <div
            key={index}
            className="flex h-auto flex-col gap-5 rounded-md border-2 border-gray-800 bg-transparent p-2 text-left shadow-xl transition-all duration-700 hover:border-cyan-500 md:hover:scale-105"
          >
            <h2 className="text-center text-[16px] font-semibold underline md:text-xl">
              {qualification.name}
            </h2>
            <p className="">{qualification.description}</p>
            <span>Address: {qualification.address}</span>
            <span>Level: {qualification.level}</span>
            <span>Obtained Grade: {qualification.grade}</span>
            <span>Status: {qualification.status}</span>
            <span>Completed Year: {qualification.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
