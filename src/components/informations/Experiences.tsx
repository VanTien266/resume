import { format, parseISO } from "date-fns";
import { READABLE_ROLES } from "~/utils/constants";
import { BriefcaseIcon } from "@heroicons/react/24/solid";

const Experiences = (props: any) => {
  const { experienceList } = props;

  return (
    <div className="flex flex-col mb-2 pr-6">
      <div className="flex justify-start">
        <div className="w-11 h-11 rounded-full border-2 border-[#313c4e] flex justify-center items-center mr-3">
          <BriefcaseIcon className="w-7 h-7 fill-[#313c4e]" />
        </div>
        <div className="uppercase text-3xl font-bold flex items-center justify-center">
          Work Experience
        </div>
      </div>
      <div>
        {experienceList.map((item: any) => (
          <div key={item.key} className="px-2 py-1 text-base">
            <div className="text-2xl font-bold">{item.role}</div>
            <div className="text-2xl">{item.company}</div>
            <div className="italic text-[#449399]">
              {format(parseISO(item.startTime), "MM/yyyy")} -{" "}
              {item.endTime
                ? format(parseISO(item.endTime), "MM/yyyy")
                : "Present"}
            </div>
            {item.projects.map((project: any, index: number) => (
              <div key={index} className="mb-4">
                <div className="italic text-[#7c7c7c]">
                  Project: {project.name}{" "}
                  <span className="italic text-[#449399] text-sm">
                    ({format(parseISO(project.startTime), "MM/yyyy")} -{" "}
                    {item.endTime
                      ? format(parseISO(project.endTime), "MM/yyyy")
                      : "Present"}
                    )
                  </span>
                </div>
                <div className="px-2">
                  {project.responsibilities && (
                    <>
                      <div className="font-bold text-[#449399]">
                        Responsibilities:
                      </div>
                      <ul className="list-none">
                        {project.responsibilities.map(
                          (responsibility: string, index: number) => (
                            <li key={index} className="relative pl-4">
                              <span className="absolute top-3 left-0 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[#449399]"></span>
                              {responsibility}
                            </li>
                          )
                        )}
                      </ul>
                    </>
                  )}
                  {project.technologies && (
                    <>
                      <div className="font-bold text-[#449399]">
                        Technologies used:
                      </div>
                      <ul className="list-none">
                        {project.technologies.map(
                          (technology: string, index: number) => (
                            <li key={index} className="relative pl-4">
                              <span className="absolute top-3 left-0 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[#449399]"></span>
                              {technology}
                            </li>
                          )
                        )}
                      </ul>
                    </>
                  )}
                </div>
                {project.teamMembers && (
                  <div>
                    <span className="text-[#449399] italic">Team size: </span>
                    {Object.values(project.teamMembers).reduce(
                      (acc: number, i: any) => acc + i,
                      0
                    )}{" "}
                    (
                    {Object.keys(project.teamMembers)
                      .map((i) =>
                        project.teamMembers[i]
                          ? `${project.teamMembers[i]} ${READABLE_ROLES[i]}${
                              project.teamMembers[i] > 1 ? "s" : ""
                            }`
                          : undefined
                      )
                      .filter((i) => i)
                      .join(", ")}
                    ).
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

Experiences.defaultProps = {
  experienceList: [
    {
      key: 1,
      role: "Software Engineer",
      company: "CMC Global",
      startTime: "2023-08-01",
      endTime: null,
      projects: [
        {
          name: "Private Market Platform",
          startTime: "2023-08-01",
          endTime: null,
          teamMembers: {
            developer: 5,
            tester: null,
            scrumMaster: 1,
            businessAnalyst: 1,
            projectManager: 1,
            productOwner: 1,
            designer: 1,
            devops: 1,
          },
          responsibilities: [
            "Build and implement UI features base on requirements and designs with monolithic repo structure.",
            "Implement user authentication feature with AWS Cognito.",
            "Create APIs with NodeJS using AWS Lambda Function.",
            "Send custom email message with AWS SQS.",
            "Write unit/integration tests for UI, API with Jest, Jenkins and docker.",
            "Conduct sprint demos to showcase newly implemented features to the team.",
          ],
          technologies: [
            "ReactJS (with Formik, Bootstrap, aws-amplify)",
            "NodeJS, Docker, Jenkins",
            "AWS (Cognito, API Gateway, Lambda Function, Step Function, S3 Bucket, SQS, DynamoDB, Cloud Watch)",
            "Third party (KYC, GreenID)",
          ],
        },
      ],
    },
    {
      key: 2,
      role: "Fullstack Developer",
      company: "TMA Solution",
      startTime: "2022-03-01",
      endTime: "2022-07-01",
      projects: [
        {
          name: "Private Market Platform",
          startTime: "2023-03-01",
          endTime: "2023-07-01",
        },
        {
          name: "UK Wealth Management",
          startTime: "2023-10-01",
          endTime: "2023-02-01",
          teamMembers: {
            developer: 5,
            tester: 4,
            scrumMaster: 1,
            businessAnalyst: 1,
            projectManager: null,
            productOwner: null,
            designer: null,
            devops: null,
          },
          responsibilities: [
            "Implement new UI features and maintain existing ones base on design with micro frontend architecture, ReactJS, React hooks and Formik.",
            "Implement and maintain REST APIs using Spring Boot.",
            "Optimize performance through modifications to UI and SQL stored procedures.",
          ],
          technologies: [
            "ReactJS (with Formik, Bootstrap)",
            "Spring Boot",
            "Microsoft SQL Server",
          ],
        },
      ],
    },
    {
      key: 3,
      role: "Intern Ship",
      company: "FPT Software",
      startTime: "2022-06-01",
      endTime: "2022-08-01",
      projects: [
        {
          name: "Simple Quizz",
          startTime: "2022-06-01",
          endTime: "2022-08-01",
          teamMembers: {
            developer: 8,
            tester: null,
            scrumMaster: null,
            businessAnalyst: null,
            projectManager: null,
            productOwner: null,
            designer: null,
            devops: null,
          },
          technologies: ["Springboot", "HTML/CSS/JS"],
        },
      ],
    },
  ],
};

export default Experiences;
