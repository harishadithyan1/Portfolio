import { Col, Modal } from "react-bootstrap";
import { useState } from "react";

export const Cert = ({ title, description, imgUrl }) => {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Col size={12} sm={6} md={4}>
        <div
          className="proj-imgbx"
          style={{
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
            marginBottom: "24px",
            cursor: "pointer",
          }}
          onClick={handleImageClick}
        >
          <img
            src={imgUrl}
            alt={title}
            style={{
              width: "100%",
              maxWidth: "320px",
              height: "220px",
              objectFit: "cover",
              display: "block",
              margin: "0 auto",
              borderRadius: "10px",
            }}
          />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>

      {/* Fullscreen Modal to View Certificate */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Body style={{ padding: 0, backgroundColor: "black" }}>
          <img
            src={imgUrl}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};
