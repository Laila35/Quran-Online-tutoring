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
import countries from "i18n-iso-countries";
import axios from "axios";
import "dotenv/config";

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

async function getIP() {
  try {
    const res = await fetch(
      `https://ipinfo.io/?token=${process.env.NEXT_PUBLIC_IP_TOKEN}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching IP data:", error);
    return null;
  }
}

const ContactFormRegister = ({ onSubmit }) => {
  const router = useRouter();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [defaultCountry, setDefaultCountry] = useState("");
  const [phoneCountryCode, setPhoneCountryCode] = useState("");
  const [ip, setIp] = useState("");
  const [region, setRegion] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);



  // const handleMessage = async (data) => {
  //   try {
  //     const updatedData = { ...data, COUNTRY: country };

  //     // Send message asynchronously
  //     await axios.post(
  //       "/api/first-response",
  //       updatedData
  //     );
  //     console.log("Message sent successfully!");
  //   } catch (error) {
  //     console.error("Error sending message:", error);
  //   }
  // };



  const submitContact = async (data, resetForm) => {
    setLoading(true);
    try {
      // Prepare the payload for the first endpoint
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

      // Post to the first endpoint
      const leadResponse = await axios.post(
        `/api/submitLead`,
        payload
      );
      setTimeout(() => handleMessage(leadResponse.data.data.data), 0); // Non-blocking execution

      // Show success notification and update state
      setFormSubmitted(true);
      resetForm();

      // Redirect to thank-you page
      setTimeout(() => {
        router.push("/thank-you");
      }, 2000);
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error(
        err?.response?.data?.message || err.message || "An error occurred"
      );
    } finally {
      setLoading(false); // Re-enable the button when submission is done
    }
  };

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

  useEffect(() => {
    if (formSubmitted && isMounted) {
      router.push("/thank-you");
    }
  }, [formSubmitted, isMounted, router]);
  return (
    <>
      {!formSubmitted ? (
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
            setTimeout(() => {
              actions.setSubmitting(false);
            }, 500);
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email().required("Email is required"),
            country: Yup.string().required("Country is Required"),
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
                {/* First Row: Name and Email */}
                <div className="flex flex-col gap-6 mb-8">
                  <div className="w-full relative flex flex-col">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name Here"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full  text-[13px]  py-3 px-4 rounded-xl bg-white border border-grey focus:border-amber-500 focus:ring-0 outline-none placeholder:text-black"
                      required
                    />
                  </div>

                  <div className="w-full relative flex flex-col">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Here"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full  text-[13px]  py-3 px-4 rounded-xl bg-white border border-grey focus:border-amber-500 focus:ring-0 outline-none placeholder:text-black"
                      required
                    />
                  </div>
                </div>

                {/* Second Row: Phone and Country */}
                <div className="flex flex-col lg:flex-row gap-6 mb-8">
                  <div className="w-full lg:w-1/2 relative flex flex-col">
                    <PhoneInput
                      country={phoneCountryCode || "us"}
                      placeholder="Number"
                      value={values.phone}
                      onChange={(phone) => setFieldValue("phone", phone)}
                      containerStyle={{ width: "100%" }}
                      inputStyle={{
                        width: "100%",
                        paddingTop: "22px",
                        paddingBottom: "22px",
                        paddingLeft: "48px",
                        paddingRight: "16px",
                        borderRadius: "0.75rem",
                        boxSizing: "border-box",
                        fontSize: "13px",
                        backgroundColor: "white",
                        border: "1px solid #d1d1d1",
                      }}
                      buttonStyle={{
                        color: "black",
                        backgroundColor: "white",
                        borderRight: "1px solid #d1d1d1",
                        borderStartStartRadius: "0.75rem",
                        borderEndStartRadius: "0.75rem",
                      }}
                      inputClass="focus-border-emerald"
                      aria-describedby="phone-number"
                    />
                    {errors.phone && touched.phone && (
                      <div className="text-red-500 mt-2">{errors.phone}</div>
                    )}
                  </div>

                  <div className="w-full lg:w-1/2 relative  flex flex-col">
                    <select
                      name="country"
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className="w-full  text-[13px]  py-3 px-4 rounded-xl bg-white border border-grey focus:border-amber-500 focus:ring-0 outline-none placeholder:text-black"
                    >
                      <option value="">Country</option>
                      {countriesList?.countries &&
                      countriesList.countries.length > 0 ? (
                        countriesList.countries.map((item, index) => (
                          <option
                            className="text-black"
                            key={index}
                            value={item?.country_id}
                          >
                            {item?.short_name}
                          </option>
                        ))
                      ) : (
                        <option disabled>No countries available</option>
                      )}
                    </select>
                  </div>
                </div>

                {/* Full Width Message Field */}
                <div className="mb-8 relative flex flex-col">
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full  text-[13px]  py-3 px-4 rounded-xl bg-white border border-grey focus:border-amber-500 focus:ring-0 outline-none placeholder:text-black"
                  />
                </div>

                <div className="mt-6 flex justify-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-40 text-[14px] font-semibold py-3 px-4 rounded-xl
                    ${
                      loading
                        ? "bg-emerald-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#A86739] to-[#DC913F]"
                    } 
                 text-white transition-all duration-200 ease-in-out focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 transform hover:shadow-md hover:scale-[1.02]`}
                  >
                    {loading ? "Submitting your form..." : "Get Free Trial"}
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      ) : (
        <p>Redirecting to Thank You page...</p>
      )}
    </>
  );
};

export default ContactFormRegister;
