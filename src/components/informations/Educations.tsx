import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { format, parseISO } from 'date-fns';

const Educations = (props: any) => {
  const { educations } = props;
  return (
    <div className="flex flex-col mb-2 pr-6">
      <div className="flex justify-start">
        <div className="w-11 h-11 rounded-full border-2 border-[#313c4e] flex justify-center items-center mr-3">
          <AcademicCapIcon className="w-7 h-7 fill-[#313c4e]" />
        </div>
        <div className="uppercase text-3xl font-bold flex items-center justify-center">
          Education
        </div>
      </div>
      <div>
        {educations.map((education: any, index: number) => (
          <div key={index} className="p-2 my-2 text-base">
            <div className="text-2xl font-bold">{education.level}</div>
            <div className="text-2xl">{education.name}</div>
            <div className="flex justify-between italic text-[#449399]">
              <div>
                {format(parseISO(education.startTime), 'MM/yyyy')} -{' '}
                {education.endTime
                  ? format(parseISO(education.endTime), 'MM/yyyy')
                  : 'Present'}
              </div>
              <div>GPA: {education.GPA}</div>
            </div>
            <div className="italic text-[#449399]">{education.major}</div>
            <ul className="list-none">
              {education.details.map(
                (responsibility: string, index: number) => (
                  <li key={index} className="relative pl-4">
                    <span className="absolute top-3 left-0 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[#449399]"></span>
                    {responsibility}
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

Educations.defaultProps = {
  educations: [
    {
      level: 'University',
      name: 'Ho Chi Minh University of Technology',
      startTime: '2018-08-01',
      endTime: '2022-06-01',
      major: 'Computer Science',
      GPA: 7.27,
      details: ['Bachelor of engineering', 'Classification: Good'],
    },
  ],
};

export default Educations;
