import { Col, Modal } from "react-bootstrap";
import { useRef, useState } from "react";

export const ProjectCard = ({ title, description, vidUrl }) => {
  const modalVideoRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const handleVideoClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
  };

  return (
    <>
      <Col xs={12} sm={6} md={4}>
        <div
          className="proj-vidbx"
          style={{
            position: "relative",
            borderRadius: "16px",
            overflow: "hidden",
            marginBottom: "24px",
            aspectRatio: "16 / 9",
            cursor: "pointer",
          }}
          onClick={handleVideoClick}
        >
          <video
            src={vidUrl}
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              borderRadius: "16px",
            }}
          />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>

      {/* Fullscreen Modal */}
      <Modal show={showModal} onHide={handleClose} size="xl" centered>
        <Modal.Body style={{ padding: 0, backgroundColor: "black" }}>
          <video
            ref={modalVideoRef}
            src={vidUrl}
            controls
            autoPlay
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};
