import {
  CalendarDaysIcon,
  EnvelopeIcon,
  LinkIcon,
  MapPinIcon,
  PhoneIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid';

const Personal = () => {
  const personalInformationList = [
    {
      key: 'email',
      icon: <EnvelopeIcon />,
      text: 'luuvantien20006@gmail.com',
    },
    {
      key: 'phoneNumber',
      icon: <PhoneIcon />,
      text: '0826755114',
    },
    {
      key: 'address',
      icon: <MapPinIcon />,
      text: 'Tan Binh, Ho Chi Minh, Viet Nam',
    },
    {
      key: 'birthDay',
      icon: <CalendarDaysIcon />,
      text: '20 June, 2000',
    },
    {
      key: 'linkedin',
      icon: <LinkIcon />,
      text: 'linkedin.com/in/luuvantien',
    },
  ];
  return (
    <div className="flex flex-col mb-11">
      <div className="flex justify-between items-center md:h-60">
        <div className="flex w-full md:w-1/2 items-center">
          <UserCircleIcon className="w-52 h-52" />
          <div className="flex flex-1 flex-col">
            <div className="text-5xl">Luu Van Tien</div>
            <div className="text-2xl">Fullstack Developer</div>
          </div>
        </div>
        <div className="md:w-1/2 flex h-full py-5 flex-col justify-between">
          {personalInformationList.map((item) => (
            <div key={item.key} className="flex justify-end">
              <div className="text-base">{item.text}</div>
              <div className="w-6 h-6 ml-2">{item.icon}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        Frontend Developer, with experience in many fields of Web development,
        always looking for new knowledge and willing to learn. My short-term
        goal is to be an expert Fullstack Developer and my long-term goal is to
        be a Tech Lead, Solution Architect. I am seeking a position that allows
        me to apply my skills to achieve our goals.
      </div>
    </div>
  );
};

export default Personal;
