import Image from 'next/image';
import Achivements from '~/components/informations/Achivements';
import Educations from '~/components/informations/Educations';
import Experiences from '~/components/informations/Experiences';
import Personal from '~/components/informations/Personal';
import PersonalProjects from '~/components/informations/PersonalProjects';
import Skills from '~/components/informations/Skills';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-3 pt-3 md:px-5 md:pt-5 lg:px-9 lg:pt-9 bg-black font text-lg">
      <div className="w-full h-full p-3 md:p-5 lg:p-9 bg-white text-black">
        <Personal />
        <div className="flex flex-col gap-2 lg:flex-row">
          <div className="w-3.5"></div>
          <div className="flex flex-col w-full py-4 lg:w-2/3">
            <Experiences />
            <Educations />
          </div>
          <div className="flex flex-col w-full  bg-[#ebebeb] p-4 lg:w-1/3">
            <Skills />
            <PersonalProjects />
            <Achivements />
          </div>
        </div>
      </div>
    </main>
  );
}
