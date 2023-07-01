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
        <div className="flex">
          <div className="flex flex-col w-full md:w-1/2">
            <Experiences />
            <Educations />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <Skills />
            <PersonalProjects />
            <Achivements />
          </div>
        </div>
      </div>
    </main>
  );
}
