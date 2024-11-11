import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  /**BuildingOffice2Icon,*/
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Al-khaser Hatalan",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Al Khaser Jamaluddin Hatalan`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Graphic/Web/Ui-Ux Designer</strong>, currently working in{' '}
        <strong className="text-stone-100">Saudi Arabia</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing <strong className="text-stone-100">Basketball</strong>, Driving
        my <strong className="text-stone-100">car named Rusheeda</strong>, and exploring beautiful{' '}
        <strong className="text-stone-100">Places in Saudi</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `To obtain a responsible & Challenging position where my
education & will have valuable application.`,
  aboutItems: [
    {label: 'Location', text: 'Jeddah, SA', Icon: MapIcon},
    {label: 'Age', text: '35', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Filipino Muslim', Icon: FlagIcon},
    {label: 'Interests', text: 'Designing, Basketball, Driving', Icon: SparklesIcon},
    {label: 'Study', text: 'STI College Zamboanga', Icon: AcademicCapIcon},
    /**   {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},*/
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 7,
      },
      {
        name: 'Arabic',
        level: 5,
      },
      {
        name: 'Tagalog',
        level: 5,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      /** 
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
      */
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      /** 
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
      */
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://www.pinterest.com/princeqhaz/',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://www.pinterest.com/princeqhaz/',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://www.pinterest.com/princeqhaz/',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://www.pinterest.com/princeqhaz/',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://www.pinterest.com/princeqhaz/',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://www.pinterest.com/princeqhaz/',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://www.pinterest.com/princeqhaz/',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://www.pinterest.com/princeqhaz/',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://www.pinterest.com/princeqhaz/',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://www.pinterest.com/princeqhaz/',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://www.pinterest.com/princeqhaz/',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'STI College Zamboanga',
    title: 'Bachelor of Science in Information Technology',
    content: <p>College times was tuff, Designing was my favorite part</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2023 - Present',
    location: 'AL Majal Alaali Company(SAUDI ARABIA)',
    title: 'Graphic/Web/Ui Designer/Admin/Tech Support',
    content: <p>As a Start-up-Company im the who is responsible for all kinds IT works and etc.</p>,
  },
  {
    date: 'March 2020 - February 2023',
    location: 'Bamco(SAUDI ARABIA)',
    title: 'Graphic/Web/Ui/Product Designer',
    content: <p>Responsible for All kinds of Designs</p>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Abdullah Bin Amir',
      text: 'This Guy is All in One - Can works Different Areas/Department',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Ahmad Alamoudi',
      text: 'Person who can trust with Designs',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'princeqhaz12@gmail.com',
      href: 'mailto:princeqhaz12@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Makkah, Saudi Arabia',
      href: 'https://maps.app.goo.gl/7hebkjwHws5e5w4S7',
    },
    {
      type: ContactType.Instagram,
      text: 'princeqhaz12',
      href: 'https://www.instagram.com/alabdullah_1988/',
    },
    {
      type: ContactType.Github,
      text: 'princeqhaz12',
      href: 'https://github.com/princeqhaz12',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/princeqhaz12'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/alkhaserh/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/alabdullah_1988/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/'},
];
