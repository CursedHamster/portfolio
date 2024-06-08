import {
  IconBrandGithubFilled,
  IconMailFilled,
  IconBrandLinkedin,
  IconCode,
  IconServer,
  IconColorSwatch,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandVue,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandSass,
  IconBrandTailwind,
  IconBrandBootstrap,
  IconBrandThreejs,
  IconBrandFigma,
  IconBrandPython,
  IconSql,
  IconCoffee,
  IconLeaf,
  IconBraces,
  IconSock,
} from "@tabler/icons-react";

export default {
  sections: ["home", "about", "projects"],
  socials: [
    {
      title: "GitHub",
      link: "",
      icon: <IconBrandGithubFilled />,
    },
    {
      title: "Email",
      link: "",
      icon: <IconMailFilled />,
    },
    {
      title: "LinkedIn",
      link: "",
      icon: <IconBrandLinkedin />,
    },
  ],
  about: {
    description: {
      emoji: "🐹🌸",
      titles: ["Hello!", "Вітаю!", "Hallo!"],
      text: "I’m a Front-end Developer with 2+ years of experience in creating websites and coding in general. Hi! I’m a Front-end Developer with 2+ years of experience in creating websites and coding in general. Hi! I’m a Front-end Developer with.",
    },
    roles: [
      { title: "Front-End Developer", icon: <IconCode /> },
      { title: "Back-End Developer", icon: <IconServer /> },
      { title: "Web Designer", icon: <IconColorSwatch /> },
    ],
    languages: [
      {
        name: "UA",
        level: "native",
        flag: "🇺🇦",
      },
      {
        name: "EN",
        level: "B1",
        flag: "🇺🇸",
      },
    ],
    education: {
      university: "Lviv Polytechnic National University",
      years: [2019, 2023],
      degree: "Bachelor's degree, Information Systems and Technologies",
    },
    skills: [
      {title: "HTML", icon: <IconBrandHtml5 />},
      {title: "CSS", icon: <IconBrandCss3 />},
      {title: "JavaScript", icon: <IconBrandJavascript />},
      {title: "Vue.js", icon: <IconBrandVue />},
      {title: "TypeScript", icon: <IconBrandTypescript />},
      {title: "React.js", icon: <IconBrandReact />},
      {title: "Next.js", icon: <IconBrandNextjs />},
      {title: "Sass", icon: <IconBrandSass />},
      {title: "Tailwind", icon: <IconBrandTailwind />},
      {title: "GSAP", icon: <IconSock />},
      {title: "LESS", icon: <IconBraces />},
      {title: "Bootstrap", icon: <IconBrandBootstrap />},
      {title: "Three.js", icon: <IconBrandThreejs />},
      {title: "Figma", icon: <IconBrandFigma />},
      {title: "Spring", icon: <IconLeaf />},
      {title: "Python", icon: <IconBrandPython />},
      {title: "Java", icon: <IconCoffee />},
      {title: "SQL", icon: <IconSql />},
    ],
    interests: [
      {
        name: "drawing",
        icon: (
          // <IconPalette />
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8251 21.1444C9.17375 21.1444 6.63098 20.0911 4.75618 18.2163C2.88138 16.3415 1.82812 13.7988 1.82812 11.1474C1.82812 8.49602 2.88138 5.95324 4.75618 4.07844C6.63098 2.20364 9.17375 1.15039 11.8251 1.15039C17.3457 1.15039 21.8221 5.1292 21.8221 10.0366C21.8221 11.214 21.2956 12.3448 20.3581 13.1779C19.4206 14.011 18.1488 14.4797 16.8236 14.4797H14.0467C13.5511 14.4717 13.0671 14.6297 12.6717 14.9285C12.2762 15.2273 11.992 15.6497 11.8643 16.1286C11.7366 16.6075 11.7727 17.1153 11.9669 17.5713C12.1611 18.0273 12.5022 18.4053 12.9359 18.6451C13.1577 18.8498 13.3098 19.1188 13.3708 19.4143C13.4319 19.7098 13.3988 20.0171 13.2762 20.2928C13.1536 20.5686 12.9478 20.799 12.6875 20.9518C12.4272 21.1045 12.1256 21.1719 11.8251 21.1444Z"
              stroke="url(#paint0_linear_679_324)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.82662 9.48122C6.82662 9.77582 6.94365 10.0583 7.15196 10.2667C7.36027 10.475 7.6428 10.592 7.9374 10.592C8.232 10.592 8.51453 10.475 8.72284 10.2667C8.93115 10.0583 9.04818 9.77582 9.04818 9.48122C9.04818 9.18663 8.93115 8.90409 8.72284 8.69578C8.51453 8.48747 8.232 8.37044 7.9374 8.37044C7.6428 8.37044 7.36027 8.48747 7.15196 8.69578C6.94365 8.90409 6.82662 9.18663 6.82662 9.48122Z"
              stroke="url(#paint1_linear_679_324)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.2697 6.14889C11.2697 6.44349 11.3868 6.72602 11.5951 6.93433C11.8034 7.14264 12.0859 7.25967 12.3805 7.25967C12.6751 7.25967 12.9576 7.14264 13.1659 6.93433C13.3743 6.72602 13.4913 6.44349 13.4913 6.14889C13.4913 5.85429 13.3743 5.57176 13.1659 5.36345C12.9576 5.15514 12.6751 5.03811 12.3805 5.03811C12.0859 5.03811 11.8034 5.15514 11.5951 5.36345C11.3868 5.57176 11.2697 5.85429 11.2697 6.14889Z"
              stroke="url(#paint2_linear_679_324)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.7128 9.48122C15.7128 9.77582 15.8299 10.0583 16.0382 10.2667C16.2465 10.475 16.529 10.592 16.8236 10.592C17.1182 10.592 17.4007 10.475 17.6091 10.2667C17.8174 10.0583 17.9344 9.77582 17.9344 9.48122C17.9344 9.18663 17.8174 8.90409 17.6091 8.69578C17.4007 8.48747 17.1182 8.37044 16.8236 8.37044C16.529 8.37044 16.2465 8.48747 16.0382 8.69578C15.8299 8.90409 15.7128 9.18663 15.7128 9.48122Z"
              stroke="url(#paint3_linear_679_324)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_679_324"
                x1="3.25807"
                y1="2.84872"
                x2="26.7315"
                y2="8.95823"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="0.463433" stopColor="#FFA3BF" />
                <stop offset="1" stopColor="#9FFEE9" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_679_324"
                x1="3.25807"
                y1="2.84872"
                x2="26.7315"
                y2="8.95823"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="0.463433" stopColor="#FFA3BF" />
                <stop offset="1" stopColor="#9FFEE9" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_679_324"
                x1="3.25807"
                y1="2.84872"
                x2="26.7315"
                y2="8.95823"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="0.463433" stopColor="#FFA3BF" />
                <stop offset="1" stopColor="#9FFEE9" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_679_324"
                x1="3.25807"
                y1="2.84872"
                x2="26.7315"
                y2="8.95823"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="0.463433" stopColor="#FFA3BF" />
                <stop offset="1" stopColor="#9FFEE9" />
              </linearGradient>
            </defs>
          </svg>
        ),
      },
      {
        name: "games",
        icon: (
          // <IconDeviceGamepad2 />
          <svg
            width="30"
            height="23"
            viewBox="0 0 30 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.3598 14.484L22.7866 20.1962C23.2436 20.6771 23.8442 20.9968 24.4984 21.1074C25.1525 21.2179 25.8249 21.1134 26.4146 20.8095C27.0043 20.5055 27.4795 20.0186 27.769 19.4216C28.0585 18.8247 28.1466 18.15 28.0201 17.4988L25.8867 6.52248M9.35958 6.48374V9.15047M8.02621 7.81711H10.6929M17.3598 7.81711H20.0265M19.3602 1.15027C21.1283 1.15027 22.824 1.85267 24.0743 3.10294C25.3246 4.35321 26.027 6.04895 26.027 7.81711C26.027 9.58526 25.3246 11.281 24.0743 12.5313C22.824 13.7815 21.1283 14.4839 19.3602 14.4839H12.0266L6.67317 20.1201C6.21523 20.6022 5.613 20.9225 4.95723 21.0325C4.30146 21.1426 3.62768 21.0366 3.03742 20.7304C2.44716 20.4242 1.97241 19.9344 1.68472 19.335C1.39702 18.7355 1.31196 18.0587 1.44236 17.4067L3.62109 6.50907C3.92351 4.99765 4.7403 3.63771 5.93247 2.66068C7.12465 1.68365 8.61854 1.1499 10.1599 1.15027H19.3602Z"
              stroke="url(#paint0_linear_679_318)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_679_318"
                x1="3.2919"
                y1="2.84859"
                x2="33.1486"
                y2="13.2234"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="0.463433" stopColor="#FFA3BF" />
                <stop offset="1" stopColor="#9FFEE9" />
              </linearGradient>
            </defs>
          </svg>
        ),
      },
      {
        name: "movies",
        icon: (
          // <IconMovie />
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.77734 1.15027V21.1503M16.7773 1.15027V21.1503M1.77734 6.15027H6.77734M1.77734 16.1503H6.77734M1.77734 11.1503H21.7773M16.7773 6.15027H21.7773M16.7773 16.1503H21.7773M1.77734 3.65027C1.77734 2.98723 2.04074 2.35134 2.50958 1.8825C2.97842 1.41366 3.6143 1.15027 4.27734 1.15027H19.2773C19.9404 1.15027 20.5763 1.41366 21.0451 1.8825C21.514 2.35134 21.7773 2.98723 21.7773 3.65027V18.6503C21.7773 19.3133 21.514 19.9492 21.0451 20.418C20.5763 20.8869 19.9404 21.1503 19.2773 21.1503H4.27734C3.6143 21.1503 2.97842 20.8869 2.50958 20.418C2.04074 19.9492 1.77734 19.3133 1.77734 18.6503V3.65027Z"
              stroke="url(#paint0_linear_679_321)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_679_321"
                x1="3.20772"
                y1="2.84859"
                x2="26.6873"
                y2="8.96154"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="0.463433" stopColor="#FFA3BF" />
                <stop offset="1" stopColor="#9FFEE9" />
              </linearGradient>
            </defs>
          </svg>
        ),
      },
    ],
    music: {
      title: "Good Luck, Babe",
      link: "https://open.spotify.com/track/0WbMK4wrZ1wFSty9F7FCgu?si=2f9974c2c1314584",
    },
  },
  projects: [
    {
      id: "vitaem",
      title: "Vitaem",
      websiteLink: "https://vitaem.netlify.app/",
      techUsed: ["Vue.js", "TypeScript", "SCSS", "GSAP", "Three.js"],
      type: "Personal project",
      year: 2024,
      role: ["Front-End Developer", "Web Designer"],
      description: "Website about pills, uses WebGL, has unique transitions",
      images: {
        parallax: [
          "/images/projects/vitaem/parallax/vitaem_parallax_1.png",
          "/images/projects/vitaem/parallax/vitaem_parallax_2.png",
          "/images/projects/vitaem/parallax/vitaem_parallax_3.png",
          "/images/projects/vitaem/parallax/vitaem_parallax_4.png",
          "/images/projects/vitaem/parallax/vitaem_parallax_5.png",
          "/images/projects/vitaem/parallax/vitaem_parallax_6.png",
          "/images/projects/vitaem/parallax/vitaem_parallax_7.png",
          "/images/projects/vitaem/parallax/vitaem_parallax_8.png",
        ],
        screenshots: [
          "/images/projects/vitaem/screenshots/vitaem_screenshot_1.png",
          "/images/projects/vitaem/screenshots/vitaem_screenshot_2.png",
          "/images/projects/vitaem/screenshots/vitaem_screenshot_3.png",
          "/images/projects/vitaem/screenshots/vitaem_screenshot_4.png",
          "/images/projects/vitaem/screenshots/vitaem_screenshot_5.png",
        ],
      },
      video:
        "https://www.youtube.com/embed/DIM9gJf_V4M?si=r08g1_NYZTWBWj8D&amp;controls=0",
      svg: {
        viewBox: "0 0 393.1 70.8",
        text: [
          "M 52.7 0 L 76.3 0 L 52.5 70.8 L 23.8 70.8 L 0 0 L 23.6 0 L 38.2 48.7 L 52.7 0 Z",
          "M 81.3 0 L 103.5 0 L 103.5 70.8 L 81.3 70.8 L 81.3 0 Z",
          "M 109.5 0 L 169.1 0 L 169.1 17.6 L 150.3 17.6 L 150.3 70.8 L 128.1 70.8 L 128.1 17.6 L 109.5 17.6 L 109.5 0 Z",
          "M 224 70.8 L 220.5 60.1 L 196.9 60.1 L 193.4 70.8 L 170.1 70.8 L 196 0 L 221.6 0 L 247.4 70.8 L 224 70.8 Z M 202.3 43.4 L 215.1 43.4 L 208.7 23.7 L 202.3 43.4 Z",
          "M 299.6 17.7 L 274.6 17.7 L 274.6 26.4 L 296.6 26.4 L 296.6 43.1 L 274.6 43.1 L 274.6 53.1 L 299.6 53.1 L 299.6 70.8 L 252.4 70.8 L 252.4 0 L 299.6 0 L 299.6 17.7 Z",
          "M 366 0 L 393.1 0 L 393.1 70.8 L 371 70.8 L 371 35.5 L 360.1 70.8 L 341.1 70.8 L 330.2 35.5 L 330.2 70.8 L 308 70.8 L 308 0 L 335.2 0 L 350.8 42.5 L 366 0 Z",
        ],
      },
    },
    {
      id: "healthiu",
      title: "HealthiU",
      websiteLink: "https://healthiu.netlify.app/",
      techUsed: [
        "React.js",
        "JavaScript",
        "Bootstrap",
        "GSAP",
        "Java",
        "Spring",
        "MySQL",
        "Firebase",
      ],
      type: "Personal project",
      year: 2023,
      role: [
        "Full-Stack Developer",
        "Front-End Developer",
        "Back-End Developer",
        "Web Designer",
      ],
      description: "Website about health",
      images: {
        parallax: [
          "/images/projects/vitaem/parallax/vitaem_parallax_1.png",
          "/images/projects/vitaem/parallax/vitaem_parallax_2.png",
          "/images/projects/vitaem/parallax/vitaem_parallax_3.png",
          "/images/projects/vitaem/parallax/vitaem_parallax_4.png",
          "/images/projects/vitaem/parallax/vitaem_parallax_5.png",
          "/images/projects/vitaem/parallax/vitaem_parallax_6.png",
          "/images/projects/vitaem/parallax/vitaem_parallax_7.png",
          "/images/projects/vitaem/parallax/vitaem_parallax_8.png",
        ],
        screenshots: [
          "/images/projects/vitaem/screenshots/vitaem_screenshot_1.png",
          "/images/projects/vitaem/screenshots/vitaem_screenshot_2.png",
          "/images/projects/vitaem/screenshots/vitaem_screenshot_3.png",
          "/images/projects/vitaem/screenshots/vitaem_screenshot_4.png",
          "/images/projects/vitaem/screenshots/vitaem_screenshot_5.png",
        ],
      },
      video:
        "https://www.youtube.com/embed/DIM9gJf_V4M?si=r08g1_NYZTWBWj8D&amp;controls=0",
      svg: {
        viewBox: "0 0 490.601 71.501",
        text: [
          "M 43.3 0 L 65.5 0 L 65.5 70.8 L 43.3 70.8 L 43.3 43.2 L 22.2 43.2 L 22.2 70.8 L 0 70.8 L 0 0 L 22.2 0 L 22.2 25.5 L 43.3 25.5 L 43.3 0 Z",
          "M 122.7 17.7 L 97.7 17.7 L 97.7 26.4 L 119.7 26.4 L 119.7 43.1 L 97.7 43.1 L 97.7 53.1 L 122.7 53.1 L 122.7 70.8 L 75.5 70.8 L 75.5 0 L 122.7 0 L 122.7 17.7 Z",
          "M 180 70.8 L 176.5 60.1 L 152.9 60.1 L 149.4 70.8 L 126.1 70.8 L 152 0 L 177.6 0 L 203.4 70.8 L 180 70.8 Z M 158.3 43.4 L 171.1 43.4 L 164.7 23.7 L 158.3 43.4 Z",
          "M 230.6 0 L 230.6 54 L 252 54 L 252 70.8 L 208.4 70.8 L 208.4 0 L 230.6 0 Z",
          "M 255 0 L 314.6 0 L 314.6 17.6 L 295.8 17.6 L 295.8 70.8 L 273.6 70.8 L 273.6 17.6 L 255 17.6 L 255 0 Z",
          "M 363.9 0 L 386.1 0 L 386.1 70.8 L 363.9 70.8 L 363.9 43.2 L 342.8 43.2 L 342.8 70.8 L 320.6 70.8 L 320.6 0 L 342.8 0 L 342.8 25.5 L 363.9 25.5 L 363.9 0 Z",
          "M 396.1 0 L 418.3 0 L 418.3 70.8 L 396.1 70.8 L 396.1 0 Z",
          "M 427.9 0 L 450 0 L 450 39.9 A 18.087 18.087 0 0 0 450.248 42.994 Q 450.731 45.769 452.15 47.65 Q 454.3 50.5 459.1 50.5 Q 462.597 50.5 464.767 48.987 A 6.914 6.914 0 0 0 466.2 47.65 A 9.743 9.743 0 0 0 467.978 44.105 Q 468.369 42.703 468.467 41.038 A 19.381 19.381 0 0 0 468.5 39.9 L 468.5 0 L 490.6 0 L 490.6 39.9 A 40.548 40.548 0 0 1 489.81 48.104 A 29.491 29.491 0 0 1 486.4 57.15 Q 482.2 64.3 474.9 67.9 A 35.166 35.166 0 0 1 462.186 71.351 A 42.584 42.584 0 0 1 458.6 71.5 A 38.309 38.309 0 0 1 449.864 70.543 A 30.905 30.905 0 0 1 442.65 67.9 Q 435.7 64.3 431.8 57.2 A 30.216 30.216 0 0 1 428.757 48.781 Q 427.9 44.681 427.9 39.9 L 427.9 0 Z",
        ],
      },
    },
    {
      id: "good",
      title: "GOOD Restaurant",
      websiteLink: "https://good-restaurant.netlify.app/",
      techUsed: ["Vue.js", "JavaScript", "Tailwind", "GSAP"],
      type: "Personal project",
      year: 2023,
      role: ["Front-End Developer", "Web Designer"],
      description: "Website contains menu and delivery info of restaurant",
      images: {
        parallax: [
          "/images/projects/good/parallax/good_parallax_1.png",
          "/images/projects/good/parallax/good_parallax_2.png",
          "/images/projects/good/parallax/good_parallax_3.png",
          "/images/projects/good/parallax/good_parallax_4.png",
          "/images/projects/good/parallax/good_parallax_5.png",
          "/images/projects/good/parallax/good_parallax_6.png",
          "/images/projects/good/parallax/good_parallax_7.png",
          "/images/projects/good/parallax/good_parallax_8.png",
        ],
        screenshots: [
          "/images/projects/good/screenshots/good_screenshot_1.png",
          "/images/projects/good/screenshots/good_screenshot_2.png",
          "/images/projects/good/screenshots/good_screenshot_3.png",
          "/images/projects/good/screenshots/good_screenshot_4.png",
          "/images/projects/good/screenshots/good_screenshot_5.png",
        ],
      },
      video:
        "https://www.youtube.com/embed/DIM9gJf_V4M?si=r08g1_NYZTWBWj8D&amp;controls=0",
      svg: {
        viewBox: "0 0 301.102 72.704",
        text: [
          "M 68.801 25.402 L 45.401 25.402 A 8.483 8.483 0 0 0 42.141 22.376 A 10.32 10.32 0 0 0 41.701 22.152 Q 39.488 21.092 36.426 21.009 A 19.425 19.425 0 0 0 35.901 21.002 A 15.794 15.794 0 0 0 31.759 21.515 A 11.172 11.172 0 0 0 26.001 25.152 A 14.024 14.024 0 0 0 23.244 30.513 Q 22.663 32.599 22.536 35.081 A 27.793 27.793 0 0 0 22.501 36.502 Q 22.501 41.839 24.113 45.439 A 12.217 12.217 0 0 0 26.401 48.902 A 12.075 12.075 0 0 0 31.327 51.969 Q 34.335 53.002 38.401 53.002 A 15.391 15.391 0 0 0 45.156 51.547 Q 48.377 49.999 50.801 46.802 L 33.101 46.802 L 33.101 31.102 L 69.201 31.102 L 69.201 53.302 A 41.934 41.934 0 0 1 58.471 65.404 A 49.238 49.238 0 0 1 56.501 66.852 Q 48.401 72.502 36.001 72.502 A 44.881 44.881 0 0 1 26.314 71.502 A 34.581 34.581 0 0 1 16.851 67.952 Q 8.701 63.402 4.351 55.202 Q 0.001 47.002 0.001 36.502 A 43.354 43.354 0 0 1 1.228 25.995 A 35.949 35.949 0 0 1 4.351 17.802 Q 8.701 9.602 16.801 5.052 A 35.09 35.09 0 0 1 28.638 1.04 A 46.045 46.045 0 0 1 35.801 0.502 A 47.207 47.207 0 0 1 45.502 1.444 Q 51.813 2.769 56.693 5.957 A 28.821 28.821 0 0 1 58.451 7.202 Q 67.201 13.902 68.801 25.402 Z",
          "M 111.701 72.702 Q 101.701 72.702 93.351 68.002 Q 85.001 63.302 80.101 55.002 Q 75.201 46.702 75.201 36.302 A 37.895 37.895 0 0 1 77.115 24.122 A 34.406 34.406 0 0 1 80.101 17.602 Q 85.001 9.302 93.351 4.652 Q 101.701 0.002 111.701 0.002 Q 121.701 0.002 130.001 4.652 Q 138.301 9.302 143.151 17.602 A 35.729 35.729 0 0 1 147.925 33.735 A 42.999 42.999 0 0 1 148.001 36.302 A 38.253 38.253 0 0 1 146.106 48.482 A 34.576 34.576 0 0 1 143.151 55.002 Q 138.301 63.302 129.951 68.002 Q 121.601 72.702 111.701 72.702 Z M 111.701 52.002 Q 118.301 52.002 121.901 47.752 A 14.467 14.467 0 0 0 124.812 42.037 Q 125.501 39.452 125.501 36.302 Q 125.501 29.002 121.901 24.752 Q 118.301 20.502 111.701 20.502 A 16.869 16.869 0 0 0 107.461 21.004 A 11.519 11.519 0 0 0 101.401 24.752 Q 97.801 29.002 97.801 36.302 A 23.358 23.358 0 0 0 98.246 41 Q 98.836 43.872 100.207 46.104 A 13.418 13.418 0 0 0 101.401 47.752 A 11.686 11.686 0 0 0 108.268 51.684 A 17.615 17.615 0 0 0 111.701 52.002 Z",
          "M 190.501 72.702 Q 180.501 72.702 172.151 68.002 Q 163.801 63.302 158.901 55.002 Q 154.001 46.702 154.001 36.302 A 37.895 37.895 0 0 1 155.915 24.122 A 34.406 34.406 0 0 1 158.901 17.602 Q 163.801 9.302 172.151 4.652 Q 180.501 0.002 190.501 0.002 Q 200.501 0.002 208.801 4.652 Q 217.101 9.302 221.951 17.602 A 35.729 35.729 0 0 1 226.725 33.735 A 42.999 42.999 0 0 1 226.801 36.302 A 38.253 38.253 0 0 1 224.906 48.482 A 34.576 34.576 0 0 1 221.951 55.002 Q 217.101 63.302 208.751 68.002 Q 200.401 72.702 190.501 72.702 Z M 190.501 52.002 Q 197.101 52.002 200.701 47.752 A 14.467 14.467 0 0 0 203.612 42.037 Q 204.301 39.452 204.301 36.302 Q 204.301 29.002 200.701 24.752 Q 197.101 20.502 190.501 20.502 A 16.869 16.869 0 0 0 186.261 21.004 A 11.519 11.519 0 0 0 180.201 24.752 Q 176.601 29.002 176.601 36.302 A 23.358 23.358 0 0 0 177.046 41 Q 177.636 43.872 179.007 46.104 A 13.418 13.418 0 0 0 180.201 47.752 A 11.686 11.686 0 0 0 187.068 51.684 A 17.615 17.615 0 0 0 190.501 52.002 Z",
          "M 264.301 72.002 L 234.801 72.002 L 234.801 1.202 L 264.301 1.202 A 46.337 46.337 0 0 1 274.409 2.258 A 36.203 36.203 0 0 1 283.751 5.702 Q 292.101 10.202 296.601 18.202 A 35.207 35.207 0 0 1 300.915 32.349 A 43.423 43.423 0 0 1 301.101 36.402 A 38.946 38.946 0 0 1 299.387 48.107 A 34.695 34.695 0 0 1 296.601 54.602 Q 292.101 62.702 283.751 67.352 Q 275.401 72.002 264.301 72.002 Z M 262.301 20.602 L 257.001 20.602 L 257.001 52.202 L 262.301 52.202 Q 269.482 52.202 273.821 48.443 A 14.077 14.077 0 0 0 274.201 48.102 Q 278.501 44.095 278.599 36.745 A 25.845 25.845 0 0 0 278.601 36.402 Q 278.601 29.906 275.386 25.967 A 12.723 12.723 0 0 0 274.201 24.702 A 14.772 14.772 0 0 0 267.391 21.155 Q 265.055 20.602 262.301 20.602 Z",
        ],
      },
    },
    {
      id: "lumity",
      title: "Lumity Translate",
      websiteLink: "https://lumity-translate.netlify.app/",
      techUsed: ["Vue.js", "TypeScript", "LESS", "GSAP"], //TODO: add database
      type: "Personal project",
      year: 2024,
      role: ["Front-End Developer", "Web Designer"],
      description: "Website translator",
      images: {
        parallax: [
          "/images/projects/lumity/parallax/lumity_parallax_1.png",
          "/images/projects/lumity/parallax/lumity_parallax_2.png",
          "/images/projects/lumity/parallax/lumity_parallax_3.png",
          "/images/projects/lumity/parallax/lumity_parallax_4.png",
          "/images/projects/lumity/parallax/lumity_parallax_5.png",
          "/images/projects/lumity/parallax/lumity_parallax_6.png",
          "/images/projects/lumity/parallax/lumity_parallax_7.png",
          "/images/projects/lumity/parallax/lumity_parallax_8.png",
        ],
        screenshots: [
          "/images/projects/lumity/screenshots/lumity_screenshot_1.png",
          "/images/projects/lumity/screenshots/lumity_screenshot_2.png",
          "/images/projects/lumity/screenshots/lumity_screenshot_3.png",
          "/images/projects/lumity/screenshots/lumity_screenshot_4.png",
          "/images/projects/lumity/screenshots/lumity_screenshot_5.png",
        ],
      },
      video:
        "https://www.youtube.com/embed/DIM9gJf_V4M?si=r08g1_NYZTWBWj8D&amp;controls=0",
      svg: {
        viewBox: "0 0 379.4 71.501",
        text: [
          "M 22.2 0 L 22.2 54 L 43.6 54 L 43.6 70.8 L 0 70.8 L 0 0 L 22.2 0 Z",
          "M 50.2 0 L 72.3 0 L 72.3 39.9 A 18.087 18.087 0 0 0 72.548 42.994 Q 73.031 45.769 74.45 47.65 Q 76.6 50.5 81.4 50.5 Q 84.897 50.5 87.067 48.987 A 6.914 6.914 0 0 0 88.5 47.65 A 9.743 9.743 0 0 0 90.278 44.105 Q 90.669 42.703 90.767 41.038 A 19.381 19.381 0 0 0 90.8 39.9 L 90.8 0 L 112.9 0 L 112.9 39.9 A 40.548 40.548 0 0 1 112.11 48.104 A 29.491 29.491 0 0 1 108.7 57.15 Q 104.5 64.3 97.2 67.9 A 35.166 35.166 0 0 1 84.486 71.351 A 42.584 42.584 0 0 1 80.9 71.5 A 38.309 38.309 0 0 1 72.164 70.543 A 30.905 30.905 0 0 1 64.95 67.9 Q 58 64.3 54.1 57.2 A 30.216 30.216 0 0 1 51.057 48.781 Q 50.2 44.681 50.2 39.9 L 50.2 0 Z",
          "M 180.5 0 L 207.6 0 L 207.6 70.8 L 185.5 70.8 L 185.5 35.5 L 174.6 70.8 L 155.6 70.8 L 144.7 35.5 L 144.7 70.8 L 122.5 70.8 L 122.5 0 L 149.7 0 L 165.3 42.5 L 180.5 0 Z",
          "M 217.6 0 L 239.8 0 L 239.8 70.8 L 217.6 70.8 L 217.6 0 Z",
          "M 245.8 0 L 305.4 0 L 305.4 17.6 L 286.6 17.6 L 286.6 70.8 L 264.4 70.8 L 264.4 17.6 L 245.8 17.6 L 245.8 0 Z",
          "M 354.4 0 L 379.4 0 L 354 49.3 L 354 70.8 L 331.8 70.8 L 331.8 49.3 L 306.4 0 L 331.8 0 L 343.1 25.1 L 354.4 0 Z",
        ],
      },
    },
    {
      id: "aquashopia",
      title: "Aquashopia",
      websiteLink: "https://aquashopia.netlify.app/",
      techUsed: ["React.js", "JavaScript", "GSAP"],
      type: "Personal project",
      year: 2023,
      role: ["Front-End Developer", "Web Designer"],
      description: "Website about selling fish",
      images: {
        parallax: [
          "/images/projects/aquashopia/parallax/aquashopia_parallax_1.png",
          "/images/projects/aquashopia/parallax/aquashopia_parallax_2.png",
          "/images/projects/aquashopia/parallax/aquashopia_parallax_3.png",
          "/images/projects/aquashopia/parallax/aquashopia_parallax_4.png",
          "/images/projects/aquashopia/parallax/aquashopia_parallax_5.png",
          "/images/projects/aquashopia/parallax/aquashopia_parallax_6.png",
          "/images/projects/aquashopia/parallax/aquashopia_parallax_7.png",
          "/images/projects/aquashopia/parallax/aquashopia_parallax_8.png",
        ],
        screenshots: [
          "/images/projects/aquashopia/screenshots/aquashopia_screenshot_1.png",
          "/images/projects/aquashopia/screenshots/aquashopia_screenshot_2.png",
          "/images/projects/aquashopia/screenshots/aquashopia_screenshot_3.png",
          "/images/projects/aquashopia/screenshots/aquashopia_screenshot_4.png",
          "/images/projects/aquashopia/screenshots/aquashopia_screenshot_5.png",
        ],
      },
      video:
        "https://www.youtube.com/embed/DIM9gJf_V4M?si=r08g1_NYZTWBWj8D&amp;controls=0",
      svg: {
        viewBox: "0 0 696.5 83.502",
        text: [
          "M 53.9 72.002 L 50.4 61.302 L 26.8 61.302 L 23.3 72.002 L 0 72.002 L 25.9 1.202 L 51.5 1.202 L 77.3 72.002 L 53.9 72.002 Z M 32.2 44.602 L 45 44.602 L 38.6 24.902 L 32.2 44.602 Z",
          "M 155.1 83.502 L 128.9 83.502 L 122.1 72.302 Q 119.991 72.669 117.293 72.699 A 43.708 43.708 0 0 1 116.8 72.702 Q 106.8 72.702 98.45 68.002 Q 90.1 63.302 85.2 55.002 Q 80.3 46.702 80.3 36.302 A 37.895 37.895 0 0 1 82.214 24.122 A 34.406 34.406 0 0 1 85.2 17.602 Q 90.1 9.302 98.45 4.652 Q 106.8 0.002 116.8 0.002 Q 126.8 0.002 135.1 4.652 Q 143.4 9.302 148.25 17.602 A 35.729 35.729 0 0 1 153.024 33.735 A 42.999 42.999 0 0 1 153.1 36.302 A 38.217 38.217 0 0 1 151.469 47.588 A 34.785 34.785 0 0 1 149.8 51.952 Q 146.5 59.102 140.7 64.102 L 155.1 83.502 Z M 102.9 36.302 A 23.358 23.358 0 0 0 103.345 41 Q 103.935 43.872 105.307 46.104 A 13.418 13.418 0 0 0 106.5 47.752 A 11.686 11.686 0 0 0 113.368 51.684 A 17.615 17.615 0 0 0 116.8 52.002 Q 123.4 52.002 127 47.752 A 14.467 14.467 0 0 0 129.911 42.037 Q 130.6 39.452 130.6 36.302 Q 130.6 29.002 127 24.752 Q 123.4 20.502 116.8 20.502 A 16.869 16.869 0 0 0 112.56 21.004 A 11.519 11.519 0 0 0 106.5 24.752 Q 102.9 29.002 102.9 36.302 Z",
          "M 160.7 1.202 L 182.8 1.202 L 182.8 41.102 A 18.087 18.087 0 0 0 183.048 44.196 Q 183.531 46.971 184.95 48.852 Q 187.1 51.702 191.9 51.702 Q 195.397 51.702 197.567 50.189 A 6.914 6.914 0 0 0 199 48.852 A 9.743 9.743 0 0 0 200.778 45.307 Q 201.169 43.905 201.267 42.241 A 19.381 19.381 0 0 0 201.3 41.102 L 201.3 1.202 L 223.4 1.202 L 223.4 41.102 A 40.548 40.548 0 0 1 222.61 49.306 A 29.491 29.491 0 0 1 219.2 58.352 Q 215 65.502 207.7 69.102 A 35.166 35.166 0 0 1 194.986 72.554 A 42.584 42.584 0 0 1 191.4 72.702 A 38.309 38.309 0 0 1 182.664 71.745 A 30.905 30.905 0 0 1 175.45 69.102 Q 168.5 65.502 164.6 58.402 A 30.216 30.216 0 0 1 161.557 49.983 Q 160.7 45.883 160.7 41.102 L 160.7 1.202 Z",
          "M 281.9 72.002 L 278.4 61.302 L 254.8 61.302 L 251.3 72.002 L 228 72.002 L 253.9 1.202 L 279.5 1.202 L 305.3 72.002 L 281.9 72.002 Z M 260.2 44.602 L 273 44.602 L 266.6 24.902 L 260.2 44.602 Z",
          "M 308.1 49.302 L 331.7 49.302 A 11.323 11.323 0 0 0 332.118 51.642 Q 333.253 55.402 337.1 55.402 A 6.335 6.335 0 0 0 338.558 55.242 A 4.74 4.74 0 0 0 340.15 54.552 A 2.758 2.758 0 0 0 341.331 52.694 A 4.334 4.334 0 0 0 341.4 51.902 Q 341.4 49.402 338.7 47.852 A 25.192 25.192 0 0 0 336.944 46.945 Q 334.994 46.022 332.135 44.963 A 112.959 112.959 0 0 0 330.3 44.302 A 126.153 126.153 0 0 1 325.53 42.516 Q 321.831 41.04 319.05 39.602 Q 314.6 37.302 311.4 32.902 A 15.656 15.656 0 0 1 308.829 27.095 Q 308.297 24.758 308.297 22.018 A 28.698 28.698 0 0 1 308.3 21.602 A 22.354 22.354 0 0 1 309.029 15.77 A 17.734 17.734 0 0 1 311.85 9.852 A 21.236 21.236 0 0 1 319.335 3.522 A 26.257 26.257 0 0 1 321.55 2.502 A 33.728 33.728 0 0 1 330.178 0.311 A 42.825 42.825 0 0 1 335.4 0.002 A 45.742 45.742 0 0 1 343.705 0.711 Q 351.03 2.065 356.05 6.002 A 20.554 20.554 0 0 1 363.822 19.774 A 29.245 29.245 0 0 1 364.1 22.902 L 340.2 22.902 Q 340.14 21.115 339.62 19.931 A 3.961 3.961 0 0 0 338.7 18.602 Q 337.3 17.302 335.3 17.302 A 3.367 3.367 0 0 0 334.143 17.494 A 2.944 2.944 0 0 0 333 18.252 A 3.127 3.127 0 0 0 332.26 19.601 Q 332.13 20.075 332.106 20.638 A 6.096 6.096 0 0 0 332.1 20.902 Q 332.1 23.302 334.75 24.852 A 27.076 27.076 0 0 0 336.49 25.775 Q 338.237 26.632 340.753 27.647 A 126.392 126.392 0 0 0 343.2 28.602 A 134.09 134.09 0 0 1 347.895 30.449 Q 350.054 31.349 351.89 32.221 A 61.885 61.885 0 0 1 354.25 33.402 A 23.324 23.324 0 0 1 361.599 39.548 A 26.692 26.692 0 0 1 361.8 39.802 A 14.831 14.831 0 0 1 364.655 46.259 A 20.515 20.515 0 0 1 365 50.102 A 22.576 22.576 0 0 1 363.695 57.854 A 20.798 20.798 0 0 1 361.8 61.752 A 20.695 20.695 0 0 1 354.772 68.583 A 25.996 25.996 0 0 1 352.5 69.802 A 28.892 28.892 0 0 1 345.14 72.107 Q 341.91 72.683 338.237 72.701 A 48.37 48.37 0 0 1 338 72.702 A 44.542 44.542 0 0 1 328.757 71.794 Q 322.547 70.477 317.765 67.251 A 27.889 27.889 0 0 1 317.05 66.752 A 21.014 21.014 0 0 1 308.533 52.926 A 30.362 30.362 0 0 1 308.1 49.302 Z",
          "M 416.1 1.202 L 438.3 1.202 L 438.3 72.002 L 416.1 72.002 L 416.1 44.402 L 395 44.402 L 395 72.002 L 372.8 72.002 L 372.8 1.202 L 395 1.202 L 395 26.702 L 416.1 26.702 L 416.1 1.202 Z",
          "M 482.8 72.702 Q 472.8 72.702 464.45 68.002 Q 456.1 63.302 451.2 55.002 Q 446.3 46.702 446.3 36.302 A 37.895 37.895 0 0 1 448.214 24.122 A 34.406 34.406 0 0 1 451.2 17.602 Q 456.1 9.302 464.45 4.652 Q 472.8 0.002 482.8 0.002 Q 492.8 0.002 501.1 4.652 Q 509.4 9.302 514.25 17.602 A 35.729 35.729 0 0 1 519.024 33.735 A 42.999 42.999 0 0 1 519.1 36.302 A 38.253 38.253 0 0 1 517.205 48.482 A 34.576 34.576 0 0 1 514.25 55.002 Q 509.4 63.302 501.05 68.002 Q 492.7 72.702 482.8 72.702 Z M 482.8 52.002 Q 489.4 52.002 493 47.752 A 14.467 14.467 0 0 0 495.911 42.037 Q 496.6 39.452 496.6 36.302 Q 496.6 29.002 493 24.752 Q 489.4 20.502 482.8 20.502 A 16.869 16.869 0 0 0 478.56 21.004 A 11.519 11.519 0 0 0 472.5 24.752 Q 468.9 29.002 468.9 36.302 A 23.358 23.358 0 0 0 469.345 41 Q 469.935 43.872 471.307 46.104 A 13.418 13.418 0 0 0 472.5 47.752 A 11.686 11.686 0 0 0 479.368 51.684 A 17.615 17.615 0 0 0 482.8 52.002 Z",
          "M 558.1 49.502 L 549.3 49.502 L 549.3 72.002 L 527.1 72.002 L 527.1 1.202 L 558.1 1.202 A 40.995 40.995 0 0 1 565.894 1.896 Q 573.353 3.342 578.05 7.802 Q 585 14.402 585 25.502 Q 585 32.202 581.9 37.652 A 21.608 21.608 0 0 1 574.393 45.358 A 26.558 26.558 0 0 1 572.75 46.302 A 26.417 26.417 0 0 1 565.602 48.799 Q 562.457 49.436 558.851 49.496 A 45.334 45.334 0 0 1 558.1 49.502 Z M 555.6 19.002 L 549.3 19.002 L 549.3 32.002 L 555.6 32.002 Q 561.469 32.002 562.346 27.299 A 9.817 9.817 0 0 0 562.5 25.502 A 8.799 8.799 0 0 0 562.146 22.89 Q 560.937 19.002 555.6 19.002 Z",
          "M 592 1.202 L 614.2 1.202 L 614.2 72.002 L 592 72.002 L 592 1.202 Z",
          "M 673.1 72.002 L 669.6 61.302 L 646 61.302 L 642.5 72.002 L 619.2 72.002 L 645.1 1.202 L 670.7 1.202 L 696.5 72.002 L 673.1 72.002 Z M 651.4 44.602 L 664.2 44.602 L 657.8 24.902 L 651.4 44.602 Z",
        ],
      },
    },
  ],
};
