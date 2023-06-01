import uuid from "react-uuid";
import { eye, git } from "../utils/Icons";
import gpt3 from '../img/portImages/gpt3.png';
import music from '../img/portImages/music.png';
import airdnd from "../img/portImages/airdnd.png";
import carbox from "../img/portImages/carbox.png";
import cryptoQ from "../img/portImages/cryptoQ.png";
import portfolio from "../img/portImages/portfolio.png";

export const portfolios = [
    {
        id: uuid(),
        category: "Full Stack Web Application",
        title: "Airdnd Booking App",
        image: airdnd,
        link1: "https://github.com/chinnarut/airdnd-booking-app",
        link2: "https://airdnd-booking-app.vercel.app",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Web Design with Rapid API",
        title: "Music Wep Application",
        image: music,
        link1: "https://github.com/chinnarut/musify-app",
        link2: "https://musiclyriks-app.netlify.app",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Web Design with Rapid API",
        title: "CryptoQ",
        image: cryptoQ,
        link1: "https://github.com/chinnarut/cryptoQ",
        link2: "https://crypto-q.vercel.app",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Web Design",
        title: "My Portfolio",
        image: portfolio,
        link1: "https://github.com/chinnarut/portfolio",
        link2: "https://chinnarut-porfoliot-web.vercel.app",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Web Design",
        title: "GPT3 AI Web Design",
        image: gpt3,
        link1: "https://github.com/chinnarut/gpt-ui-design",
        link2: "https://gpt-ui-design.netlify.app",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Full Stack Web Application",
        title: "CarDataBox",
        image: carbox,
        link1: "https://github.com/chinnarut/car-data-box",
        link2: "https://car-data-box.vercel.app",
        icon1: git,
        icon2: eye,
    }
]