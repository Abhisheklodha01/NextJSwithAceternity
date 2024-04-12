import Contactpage from "./ContactPage";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Contact: Music School",
};

function Contact() {
  return <Contactpage />;
}

export default Contact;
