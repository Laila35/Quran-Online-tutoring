import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      LEAD_ID,
      FULL_NAME,
      EMAIL,
      PHONE_NO,
      REMARKS,
      COUNTRY,
      STATE,
      LEAD_IP,
      REQUEST_FORM,
    } = await req.json();

    
    // First API request
    // const response = await axios.post(
    //   "https://www.ilmulquran.com/api/first-response",
    //   {
    //     LEAD_ID,
    //     FULL_NAME,
    //     EMAIL,
    //     PHONE_NO,
    //     REMARKS,
    //     COUNTRY,
    //     STATE,
    //     LEAD_IP,
    //     REQUEST_FORM,
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    return NextResponse.json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.error("Proxy error:", error);

    if (error.response) {
      return NextResponse.json(
        {
          success: false,
          message: error.response.data?.message || "Error submitting form",
          data: error.response.data,
        },
        { status: error.response.status }
      );
    } else if (error.request) {
      return NextResponse.json(
        {
          success: false,
          message: "No response received from the server",
        },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: error.message || "Error setting up request",
        },
        { status: 500 }
      );
    }
  }
}
