import React, {useState, FormEvent, useEffect} from "react";
import emailjs from "emailjs-com";
import {useRouter} from "next/router";

const Contact = () => {

  const router = useRouter();

  useEffect(() => {
    if (window.location.hash === '#contact') {
      router.replace("");
    }
  }, [router]);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      subject,
      message,
    };

    emailjs.send('service_ildm99r', 'template_clu44kg', templateParams, 'xrp4TFbBhGrnWi-Aa')
        .then((response) => {
          console.log('Email sent successfully:', response);
          alert('Email sent successfully!');
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          alert('Failed to send email. Please try again later.');
        });
  };

  return (
      <div className="pt-[5rem] pb-[3rem] bg-gray-900 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
          <div>
            <p className="heading__mini">Get in Touch</p>
            <h1 className="heading__primary">
              Let’s Turn Your <span className="text-yellow-400">Ideas</span>{" "}
              Into Reality
            </h1>
            <p className="text-[15px] text-white mt-[1rem] opacity-75">
              I&aposm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Whether you have a question, a project in mind, or just want to say hello, feel free to reach out!
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
                />
              </div>
              <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
              />
              <textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
                  rows={4}
              ></textarea>
              <button type="submit" className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-blue-700 hover:bg-blue-800 rounded-md px-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Contact;


