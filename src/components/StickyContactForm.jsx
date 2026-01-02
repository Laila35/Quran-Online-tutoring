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
    console.error("Error fetching IP data:", error);
    return null;
  }
}

const StickyContactForm = () => {
  const router = useRouter();
  const [defaultCountry, setDefaultCountry] = useState("");
  const [phoneCountryCode, setPhoneCountryCode] = useState("");
  const [ip, setIp] = useState("");
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch IP-based country and region
  useEffect(() => {
    const fetchIP = async () => {
      try {
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
            setIp(ipInfo?.ip);
            setRegion(ipInfo?.region);
          }
        }
      } catch (error) {
        console.error("Failed to fetch IP information:", error);
      }
    };

    fetchIP();
  }, []);

  // ===============================
  // SUBMIT FORM
  // ===============================
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
      console.error("Error submitting form:", err);
      toast.error(
        err?.response?.data?.message || "Something went wrong while submitting."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full py-8 px-4 h-full">
      <ToastContainer position="top-center" autoClose={5000} />

      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Start Your Free Trial Today
        </h3>

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
            email: Yup.string().email().required("Email is required"),
            country: Yup.string().required("Country is required"),
            phone: Yup.string().required("Phone number is required"),
            message: Yup.string(),
          })}
        >
          {({
            values,
            touched,
            errors,
            handleBlur,
            handleChange,
            setFieldValue,
          }) => (
            <Form className="space-y-4">
              {/* NAME + EMAIL */}
              <div className="space-y-4">
                {/* NAME */}
                <div>
                  <div className="relative">
                    <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Name Here"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full text-sm py-3 pl-10 pr-4 rounded-lg bg-white border border-gray-300 focus:border-amber-500"
                    />
                  </div>
                  {errors.name && touched.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <div className="relative">
                    <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Here"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full text-sm py-3 pl-10 pr-4 rounded-lg bg-white border border-gray-300 focus:border-amber-500"
                    />
                  </div>
                  {errors.email && touched.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* PHONE + COUNTRY */}
              <div className="grid grid-cols-1 gap-4">
                {/* PHONE */}
                <div>
                  <div className="relative">
                    <PhoneInput
                      country={phoneCountryCode || "us"}
                      placeholder="Phone Number"
                      value={values.phone}
                      onChange={(phone) => setFieldValue("phone", phone)}
                      inputProps={{
                        name: "phone",
                        required: true,
                      }}
                      inputStyle={{
                        color: "black",
                        width: "100%",
                        paddingTop: "22px",
                        paddingBottom: "22px",
                        paddingLeft: "48px",
                        paddingRight: "16px",
                        borderRadius: "0.75rem",
                        backgroundColor: "white",
                        border: "1px solid #d1d1d1",
                      }}
                      buttonStyle={{
                        color: "black",
                        backgroundColor: "transparent",
                        borderRight: "1px solid #d1d1d1",
                        borderStartStartRadius: "0.75rem",
                        borderEndStartRadius: "0.75rem",
                      }}
                    />
                  </div>
                  {errors.phone && touched.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>

                {/* COUNTRY */}
                <div>
                  <div className="relative">
                    <FaGlobeAmericas className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                    <select
                      name="country"
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full text-sm py-3 pl-10 pr-4 rounded-lg bg-white border border-gray-300 focus:border-amber-500"
                    >
                      <option value="">Select Country</option>
                      {countriesList?.countries?.map((item, index) => (
                        <option key={index} value={item?.country_id}>
                          {item?.short_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.country && touched.country && (
                    <p className="mt-1 text-xs text-red-500">{errors.country}</p>
                  )}
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <div className="relative">
                  <FaRegCommentDots className="absolute top-3 left-3 text-gray-400" />
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows="3"
                    className="w-full text-sm py-3 pl-10 pr-4 rounded-lg bg-white border border-gray-300 focus:border-amber-500"
                  />
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full text-sm font-semibold py-3 px-4 rounded-lg
                ${
                  loading
                    ? "bg-emerald-500 cursor-not-allowed"
                    : "bg-amber-600 hover:bg-amber-700"
                } 
                text-white transition-colors duration-200`}
              >
                {loading ? "Submitting..." : "Start Free Trial"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default StickyContactForm;
