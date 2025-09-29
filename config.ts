import {
  Github,
  Linkedin,
  EnvelopeFill,
  Phone,
  JournalAlbum,
  FileEarmarkPdf,
} from "react-bootstrap-icons";
const data: Data = {
  title: "Mokshit Jain - Links",
  theme: "default",
  animation: {
    nameRandomizer: false,
  },
  name: "Mokshit Jain",
  description: "Software Engineer Intern At Drcode ",
  links: [
    {
      name: "GitHub",
      url: "https://github.com/mokbhai",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mokshit-jain/",
      icon: Linkedin,
    },
    {
      name: "Portfolio",
      url: "https://mokshitjain.jainparichay.online/",
      icon: JournalAlbum,
    },
    {
      name: "Resume",
      url: "https://drive.google.com/file/d/1ntcqtugio0k2qZ-0D2ajdHKyLe_gkW7F/view?usp=drive_link",
      icon: FileEarmarkPdf,
    },
    {
      name: "Email",
      url: "mailto:mokshitjain18@gmail.com",
      icon: EnvelopeFill,
    },
    {
      name: "Phone",
      url: "tel:+919103367481",
      icon: Phone,
    },
  ],
  sortByLength: true,
};

export default data;
