import {
  CalendarDaysIcon,
  EnvelopeIcon,
  LinkIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';

function Personal(props: any) {
  const { personalInformations } = props;
  return (
    <div className="flex flex-col gap-2 mb-2 h-full lg:flex-row lg:h-96">
      <div className="bg-[#313c4e] w-full rounded-xl lg:w-3.5" />
      <div className="flex flex-col w-full p-5 items-center bg-[#ebebeb] rounded-l-lg sm:flex-row lg:w-2/3">
        <div className="rounded-full border-2 border-[#449399]">
          <Image
            src="/avatar.jpeg"
            alt="My Image"
            width={210}
            height={210}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1 sm:px-4">
          <div className="text-center text-5xl text-[#313c4e] sm:text-left">Luu Van Tien</div>
          <div className="text-center text-2xl text-[#449399] sm:text-left">Fullstack Developer</div>
          <div className="text-base text-justify">
            Frontend Developer, with experience in many fields of Web
            development, always looking for new knowledge and willing to learn.
            My short-term goal is to be an expert Fullstack Developer and my
            long-term goal is to be a Tech Lead, Solution Architect. I am
            seeking a position that allows me to apply my skills to achieve our
            goals.
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 h-full w-full p-7 justify-between bg-[#313c4e] rounded-r-lg lg:w-1/3 ">
        {personalInformations.map((item: any) => (
          <div key={item.key} className="flex items-center">
            <div className="w-12 h-12 rounded-full border-2 border-[#449399] p-2 mr-2">
              {item.icon}
            </div>
            <p className="text-base text-white flex items-center justify-center h-full">
              {item.ref ? (
                <a href={item.ref} target="_blank" rel="noreferrer">
                  {item.text}
                </a>
              ) : (
                item.text
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

Personal.defaultProps = {
  personalInformations: [
    {
      key: 'email',
      icon: <EnvelopeIcon className="fill-[#449399] w-7 h-7" />,
      text: 'luuvantien20006@gmail.com',
    },
    {
      key: 'phoneNumber',
      icon: <PhoneIcon className="fill-[#449399] w-7 h-7" />,
      text: '0826755114',
    },
    {
      key: 'address',
      icon: <MapPinIcon className="fill-[#449399] w-7 h-7" />,
      text: 'Tan Binh, Ho Chi Minh, Viet Nam',
    },
    {
      key: 'birthDay',
      icon: <CalendarDaysIcon className="fill-[#449399] w-7 h-7" />,
      text: '20 June, 2000',
    },
    {
      key: 'linkedin',
      icon: <LinkIcon className="fill-[#449399] w-7 h-7" />,
      text: 'linkedin.com/in/luuvantien',
      ref: 'https://www.linkedin.com/in/luuvantien/',
    },
  ],
};

export default Personal;
