interface EmailTemplateProps {
  email: string;
  message: string;
}
export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  message,
}) => (
  <div>
    <div
      style={{
        background: "#0D0D0D",
        width: "100%",
        color: "#F7F7F7",
      }}
    >
      <div
        style={{
          backgroundColor: "#232325",
          padding: "2rem 3rem",
          display: "flex",
        }}
      >
        <div style={{ margin: "auto 2rem auto 0" }}>
          <div
            style={{
              width: "1rem",
              height: "1rem",
              backgroundColor: "#F7F7F7",
              borderRadius: "50%",
            }}
          ></div>
          <div
            style={{
              width: "3rem",
              height: "3rem",
              backgroundColor: "#FFB9CE",
              borderRadius: "50%",
            }}
          ></div>
        </div>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 900,
            textTransform: "uppercase",
          }}
        >
          You have{" "}
          <span
            style={{
              fontStyle: "italic",
              color: "#FFB9CE",
            }}
          >
            new message
          </span>{" "}
          from the portfolio website
        </h1>
      </div>
      <table
        style={{
          width: "100%",
          padding: "2rem 2.5rem",
          fontSize: "1.3rem",
          borderCollapse: "separate",
          borderSpacing: "0.5rem",
        }}
      >
        <tbody style={{ width: "100%" }}>
          <tr style={{}}>
            <td style={{ width: "30%", verticalAlign: "top" }}>
              <p style={{ color: "#DDDDDD" }}>Client email</p>
            </td>
            <td>
              <a
                href={`mailto: ${email}`}
                style={{
                  color: "#F7F7F7",
                  fontWeight: 500,
                }}
              >
                {email}
              </a>
            </td>
          </tr>
          <tr>
            <td style={{ verticalAlign: "top" }}>
              <p style={{ color: "#DDDDDD" }}>Client message</p>
            </td>
            <td>
              <p style={{ fontWeight: 500 }}>{message}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
