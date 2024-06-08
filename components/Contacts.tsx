"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import PrimaryButton from "./PrimaryButton";
import UnderlineButton from "./UnderlineButton";
import ArrowButton from "./ArrowButton";
import styles from "./contacts.module.scss";
import vars from "@/data/vars";
import { IconMichelinStar } from "@tabler/icons-react";

const Contacts = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: false,
    message: false,
  });
  const messageText = {
    ok: "Message sent!",
    error: "Something went wrong",
  };
  const messageSent = useRef<HTMLDivElement>(null);
  const [messageSentTimeline, setMessageSentTimeline] =
    useState<GSAPTimeline>();

  useGSAP(() => {
    setMessageSentTimeline(
      gsap
        .timeline({ paused: true })
        .fromTo(
          messageSent?.current,
          { autoAlpha: 0, yPercent: 100, scale: 0.5 },
          { autoAlpha: 1, yPercent: -100, scale: 1, duration: vars?.durationSm }
        )
        .to(messageSent?.current, {
          autoAlpha: 0,
          yPercent: -200,
          delay: vars?.durationLg,
          duration: vars?.durationSm,
        })
    );
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#contacts",
          start: "top bottom",
          end: "bottom bottom",
          toggleActions: "restart none none reverse",
        },
      })
      .from(".contacts_title", {
        x: -vars?.offsetSm,
        yPercent: -vars?.offsetSm,
        autoAlpha: 0,
        duration: vars?.enterAnimationDuration,
      })
      .from(
        ".contacts_form>*",
        {
          autoAlpha: 0,
          x: -vars?.offsetSm,
          y: -vars?.offsetSm,
          duration: vars?.enterAnimationDuration,
          stagger: vars?.enterAnimationDuration / 5,
        },
        `<+=${vars?.enterAnimationDuration / 5}`
      );
  });

  function changeMessageType(isOk: boolean) {
    const currentMessage = messageSent?.current;
    if (currentMessage) {
      if (isOk) {
        if (currentMessage.classList?.contains("red")) {
          currentMessage.classList?.remove("red");
        }
        currentMessage.classList?.add("green");
        currentMessage.innerText = messageText?.ok;
      }
      if (!isOk) {
        if (currentMessage.classList?.contains("green")) {
          currentMessage.classList?.remove("green");
        }
        currentMessage.classList?.add("red");
        currentMessage.innerText = messageText?.error;
      }
    }
  }

  async function handleSubmit(e: any) {
    e?.preventDefault();
    const errors = {
      email: !(validateField(formData.email) && validateEmail(formData.email)),
      message: !validateField(formData?.message),
    };
    setFormErrors(errors);
    if (!(errors.email || errors.message)) {
      console.log("message sent"); //TODO: remove
      try {
        const res = await fetch(`/api/send`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (!data?.error) {
          changeMessageType(true);
        } else {
          changeMessageType(false);
        }
        messageSentTimeline?.restart();
      } catch (error) {
        changeMessageType(false);
        messageSentTimeline?.restart();
      }
    }
  }

  function handleChange(e: any) {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    setFormData({ ...formData, [inputName]: inputValue });
  }

  function handleBlur(e: any) {
    const inputName = e.target.name;
    setFormErrors({
      ...formErrors,
      [inputName]:
        inputName === "email"
          ? !(validateField(formData.email) && validateEmail(formData.email))
          : !validateField(formData?.message),
    });
  }

  function validateField(value: string) {
    return value?.length > 0;
  }

  function validateEmail(value: string) {
    return /\S+@\S+\.\S+/.test(value);
  }

  return (
    <section
      id="contacts"
      className={`${styles.contacts_container} main_opacity`}
    >
      <h2 className={`title hidden contacts_title`}>
        Want to <span className="extra">contact</span> me?
      </h2>
      <div className={styles.form_container}>
        <p className={styles.form_text}>
          <IconMichelinStar />
          Please, leave your email and a message saying what are you contacting
          me for. If you wish to contact me in another way - you are free to use
          my socials under the contact form
        </p>
        <form
          className={`${styles.contacts_form} contacts_form`}
          onSubmit={handleSubmit}
        >
          <div
            className={`${styles.form_group} ${styles.email} ${
              formErrors.email ? styles.error : ""
            } hidden`}
          >
            <label htmlFor="email">
              Your email
              <div className={styles.error_icon}>!</div>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.form_input}
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div
            className={`${styles.form_group} ${styles.message} ${
              formErrors.message ? styles.error : ""
            } hidden`}
          >
            <label htmlFor="message">
              Your message
              <div className={styles.error_icon}>!</div>
            </label>
            <textarea
              name="message"
              id="message"
              className={styles.form_input}
              placeholder="I'm reaching to you to..."
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
          </div>
          {/* <ArrowButton
          text="Send"
          direction="right"
          type="click"
          className={`${styles.contacts_form_button} hidden contacts_form_button`}
        /> */}
          {/* <UnderlineButton
            text="Send"
            icon={true}
            className={`${styles.contacts_form_button} hidden contacts_form_button`}
          /> */}
          <PrimaryButton
            text="Send"
            icon={true}
            className={`${styles.contacts_form_button} hidden contacts_form_button`}
          />
        </form>
      </div>
      <div className={`tag green ${styles.message_sent}`} ref={messageSent}>
        {messageText?.ok}
      </div>
    </section>
  );
};

export default Contacts;
