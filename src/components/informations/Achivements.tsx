import { LinkIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { format, parseISO } from 'date-fns';

function Achivements(props: any) {
  const { achivements } = props;
  return (
    <div className="flex flex-col mb-4 pr-6">
      <div className="flex justify-start">
        <div className="w-11 h-11 rounded-full border-2 border-[#313c4e] flex justify-center items-center mr-3">
          <SparklesIcon className="w-7 h-7 fill-[#313c4e]" />
        </div>
        <div className="uppercase text-3xl font-bold flex items-center justify-center">
          Achivements
        </div>
      </div>
      <div>
        {achivements.map((achivement: any, index: number) => (
          <div key={index} className="px-2 py-1 text-base">
            <div className="text-xl">
              {achivement.name}
              <a href={achivement.ref} target="_blank" className="ml-2" rel="noreferrer">
                <LinkIcon className="w-4 h-4 fill-[#449399] inline" />
              </a>
            </div>
            <div className="italic text-[#449399]">
              {format(parseISO(achivement.time), 'MM/yyyy')}
            </div>
            <div className="italic text-[#7c7c7c]">{achivement.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Achivements.defaultProps = {
  achivements: [
    {
      name: 'IIG TOEIC Listening & Reading Cetificate',
      time: '2022-10-01',
      note: '720 points',
      ref: 'https://drive.google.com/file/d/1eOoFd1IBco2hCm1E3b6iLifdaQPcaT0W/view?usp=sharing',
    },
    {
      name: 'The Complete JavaScript Course: From Zero to Expert!',
      time: '2022-01-01',
      note: null,
      ref: 'https://drive.google.com/file/d/1jClSAqy4y2CUPbUNQ0z3A9CMeIKZTqYM/view?usp=sharing',
    },
  ],
};

export default Achivements;
