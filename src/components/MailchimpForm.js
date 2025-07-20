export const MailchimpForm = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "40px 20px" }}>
      <div
        style={{
          backgroundColor: "#f9f9f9",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          padding: "30px",
          maxWidth: "500px",
          position: "relative",
          top: "-120px",  // Slightly smoother than bottom
          width: "100%",
          textAlign: "center",
          transition: "all 0.3s ease"
        }}
      >
        <h2 style={{ marginBottom: "10px", color: "#111" }}>Download My Resume</h2>
        <p style={{ marginBottom: "20px", color: "#333" }}>
          Want a copy of my resume? Just click below to download!
        </p>
        <a
          href="/Harish_Resume.pdf"
          download="Harish_Adithyan_Resume.pdf"
          style={{
            padding: "12px 24px",
            backgroundColor: "#007bff",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "500",
            transition: "background-color 0.2s ease"
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};
