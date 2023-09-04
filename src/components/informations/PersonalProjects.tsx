import { StarIcon } from '@heroicons/react/24/solid';
import { format, parseISO } from 'date-fns';

function PersonalProjects(props: any) {
  const { personalProjects } = props;
  return (
    <div className="flex flex-col mb-4 pr-6">
      <div className="flex justify-start">
        <div className="w-11 h-11 rounded-full border-2 border-[#313c4e] flex justify-center items-center mr-3">
          <StarIcon className="w-7 h-7 fill-[#313c4e]" />
        </div>
        <div className="uppercase text-3xl font-bold flex items-center justify-center">
          Personal Projetcs
        </div>
      </div>
      <div>
        {personalProjects.map((personalProject: any) => (
          <div key={personalProject.key} className="px-2 py-1 text-base">
            <div className="text-2xl">{personalProject.name}</div>
            <div className="italic text-[#449399]">
              {format(parseISO(personalProject.startTime), 'MM/yyyy')} -{' '}
              {personalProject.endTime
                ? format(parseISO(personalProject.endTime), 'MM/yyyy')
                : 'Present'}
            </div>
            <div className="font-bold text-[#449399]">Responsibilities:</div>
            <ul>
              {personalProject.responsbilities.map(
                (responsbility: string, index: number) => (
                  <li key={index} className="relative pl-4">
                    <span className="absolute top-3 left-0 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[#449399]" />
                    {responsbility}
                  </li>
                )
              )}
            </ul>
            <div>
              <span className="text-[#449399] italic">Team size: </span>
              {personalProject.teamSize}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

PersonalProjects.defaultProps = {
  personalProjects: [
    {
      name: 'Fabric Order Management',
      startTime: '2021-10-01',
      endTime: '2022-05-01',
      teamSize: 3,
      responsbilities: [
        'Analyze user requirements, and system requirements.',
        'Design system architecture, use case, use case specification, and database design (ERD, conceptual schema).',
        'Design UI in Figma.',
        'Implement web app frontend with ReactJS, materialUI and mobile app frontend with ReactNative based on Figma design.',
        'Build backend with NodeJS using Express, connect with MongoDB Atlas, and create RESTful API.',
      ],
    },
  ],
};

export default PersonalProjects;
