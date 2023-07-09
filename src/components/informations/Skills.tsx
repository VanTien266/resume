import { PuzzlePieceIcon } from '@heroicons/react/24/solid';

const Skills = (props: any) => {
  const { skills } = props;
  return (
    <div className="flex flex-col mb-2 pr-6">
      <div className="flex justify-start">
        <div className="w-11 h-11 rounded-full border-2 border-[#313c4e] flex justify-center items-center mr-3">
          <PuzzlePieceIcon className="w-7 h-7 fill-[#313c4e]" />
        </div>
        <div className="uppercase text-3xl font-bold flex items-center justify-center">
          Skills
        </div>
      </div>
      <div>
        {skills.map((skill: any, index: number) => (
          <>
            <div key={index} className="font-bold text-[#449399]">
              {skill.name}
            </div>
            {skill.list.map((name: string, index: number) => (
              <div
                key={index}
                className="bg-[#989da6] rounded-md m-1 px-2 py-1 inline-flex justify-center items-center text-white"
              >
                <p>{name}</p>
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

Skills.defaultProps = {
  skills: [
    { name: 'Frontend', list: ['React', 'React Hooks', 'Formik', 'Bootstrap'] },
    { name: 'Backend', list: ['Springboot', 'NodeJS'] },
    { name: 'Database', list: ['Microsoft SQL Server', 'MongoDB', 'DynamoDB'] },
    {
      name: 'Cloud Services',
      list: [
        'Cognito',
        'API Gateway',
        'Lambda funtion',
        'S3 Bucket',
        'SQS',
        'Cloud Watch',
      ],
    },
    { name: 'Others', list: ['Git', 'Scrum/Agile'] },
  ],
};

export default Skills;
