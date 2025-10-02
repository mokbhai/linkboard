"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import data from "@/config";
import { Container } from "@/components/loading/loadingStyles";

const RESUME_URL =
  data.links.find((link) => link.name === "Resume")?.url || "/";

export default function ResumePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the resume URL
    window.location.href = RESUME_URL;
  }, []);

  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginBottom: "20px", fontSize: "2rem", color: "#ffffff" }}>
          Redirecting to Resume...
        </h1>
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "3px solid rgba(255,255,255,0.3)",
            borderTop: "3px solid white",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            margin: "0 auto",
          }}
        ></div>
        <p style={{ marginTop: "20px", fontSize: "1.1rem", color: "#ffffff" }}>
          If you're not redirected automatically,
          <br />
          <a
            href={RESUME_URL}
            style={{ color: "#3b86ffff", textDecoration: "underline" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            click here to view the resume
          </a>
        </p>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Container>
  );
}
