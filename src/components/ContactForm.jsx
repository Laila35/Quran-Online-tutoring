"use client";

import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import countriesList from "../lib/countries.json";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import {
  FaUser,
  FaEnvelope,
  FaGlobeAmericas,
  FaRegCommentDots,
} from "react-icons/fa";
import countries from "i18n-iso-countries";
import axios from "axios";

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

async function getIP() {
  try {
    const res = await axios.get(
      `https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IP_TOKEN}`
    );
    return res.data;
  } catch (error) {
    console.error("Failed to fetch IP:", error);
    return null;
  }
}

const ContactForm = () => {
  const router = useRouter();
  const [defaultCountry, setDefaultCountry] = useState("");
  const [phoneCountryCode, setPhoneCountryCode] = useState("");
  const [ip, setIp] = useState("");
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const fetchIPInfo = async () => {
      const ipInfo = await getIP();
      if (ipInfo && ipInfo.country) {
        const countryCode = ipInfo.country.toUpperCase();
        const countryName = countries.getName(countryCode, "en");

        const matchedCountry = countriesList.countries.find(
          (country) =>
            country.short_name.toLowerCase() === countryName.toLowerCase()
        );

        if (matchedCountry) {
          setDefaultCountry(matchedCountry.country_id);
          setPhoneCountryCode(countryCode.toLowerCase());
          setIp(ipInfo.ip);
          setRegion(ipInfo.region);
        }
      }
    };

    fetchIPInfo();
  }, []);

  // =========================
  // FIXED SUBMIT FUNCTION
  // =========================
  const submitContact = async (data, resetForm) => {
    setLoading(true);

    try {
      const payload = {
        FULL_NAME: data.name,
        EMAIL: data.email,
        PHONE_NO: `+${data.phone}`,
        REMARKS: data.message,
        COUNTRY: data.country,
        STATE: region,
        LEAD_IP: ip,
        REQUEST_FORM: 11,
      };

      const response = await axios.post("/api/submitLead", payload);

      if (response.data.success) {
        resetForm();
        router.push("/thank-you");
        return;
      } else {
        toast.error("Form submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Form submit error:", err);
      toast.error("Something went wrong while submitting.");
    } finally {
      setLoading(false);
    }
  };

  // Redirect after formSubmitted
  useEffect(() => {
    if (formSubmitted) {
      router.push("/thank-you");
    }
  }, [formSubmitted, router]);

  return (
    <>
      <ToastContainer position="top-center" autoClose={5000} />

      <Formik
        initialValues={{
          name: "",
          email: "",
          country: defaultCountry || "",
          phone: "",
          message: "",
        }}
        enableReinitialize
        onSubmit={(values, actions) => {
          submitContact(values, actions.resetForm);
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Name is required"),
          email: Yup.string().email("Invalid email").required("Email is required"),
          country: Yup.string().required("Country is required"),
          phone: Yup.string().required("Phone number is required"),
          message: Yup.string(),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            handleBlur,
            handleChange,
            setFieldValue,
          } = props;

          return (
            <Form>
              {/* NAME */}
              <div className="mb-4">
                <div className="relative">
                  <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Name Here"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full text-[13px] py-3 pl-10 pr-4 rounded-xl bg-white border"
                  />
                </div>
                {errors.name && touched.name && (
                  <p className="text-red-500 text-xs">{errors.name}</p>
                )}
              </div>

              {/* EMAIL */}
              <div className="mb-4">
                <div className="relative">
                  <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Here"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full text-[13px] py-3 pl-10 pr-4 rounded-xl bg-white border"
                  />
                </div>
                {errors.email && touched.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>

              {/* PHONE */}
              <div className="mb-4">
                <PhoneInput
                  country={phoneCountryCode || "us"}
                  placeholder="Number"
                  value={values.phone}
                  onChange={(phone) => setFieldValue("phone", phone)}
                  inputStyle={{
                    width: "100%",
                    borderRadius: "0.75rem",
                    paddingTop: "22px",
                    paddingBottom: "22px",
                    paddingLeft: "48px",
                  }}
                />
                {errors.phone && touched.phone && (
                  <p className="text-red-500 text-xs">{errors.phone}</p>
                )}
              </div>

              {/* COUNTRY */}
              <div className="mb-4 relative">
                <FaGlobeAmericas className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black" />
                <select
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full text-[13px] py-3 pl-10 pr-4 rounded-xl bg-white border"
                >
                  <option value="">Country</option>
                  {countriesList.countries.map((item, index) => (
                    <option key={index} value={item.country_id}>
                      {item.short_name}
                    </option>
                  ))}
                </select>
                {errors.country && touched.country && (
                  <p className="text-red-500 text-xs">{errors.country}</p>
                )}
              </div>

              {/* MESSAGE */}
              <div className="mb-6">
                <div className="relative">
                  <FaRegCommentDots className="absolute top-[30%] left-3 transform -translate-y-1/2 text-black" />
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full text-[13px] py-3 pl-10 pr-4 rounded-xl bg-white border"
                  />
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-xl text-white font-semibold ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#A86739] to-[#DC913F]"
                }`}
              >
                {loading ? "Submitting..." : "Start Your Free Trial Today"}
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default ContactForm;
