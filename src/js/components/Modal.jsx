import React, { useState } from "react";

const Modal = ({ onAddPost }) => {
  // Estado local del formulario
  const [formData, setFormData] = useState({
    caption: "",
    imageUrl: "",
  });

  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar el envío del formulario
  const handlePublish = () => {
    // Validar que haya caption e imagen
    if (!formData.caption.trim() || !formData.imageUrl.trim()) {
      alert("Por favor completa todos los campos");
      return;
    }

    // Crear nuevo post
    const newPost = {
      id: Date.now(), // ID único basado en timestamp
      title: formData.caption.substring(0, 30), // Primeras 30 caracteres como título
      date: new Date().toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
      }),
      image: formData.imageUrl,
      alt: "user-post",
      likes: "0",
      text: formData.caption,
    };

    // Llamar a la función del padre para agregar el post
    onAddPost(newPost);

    // Limpiar formulario
    setFormData({
      caption: "",
      imageUrl: "",
    });

    // Cerrar modal (Bootstrap)
    const modalElement = document.getElementById("createPostModal");
    const modal = window.bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  };

  // Manejar cancelar/cerrar
  const handleClose = () => {
    setFormData({
      caption: "",
      imageUrl: "",
    });
  };

  return (
    <div
      className="modal fade"
      id="createPostModal"
      tabIndex="-1"
      aria-labelledby="createPostModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {/* Header del Modal */}
          <div className="modal-header">
            <h5 className="modal-title" id="createPostModalLabel">
              Create a new post
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>

          {/* Body del Modal */}
          <div className="modal-body">
            {/* Campo de Caption */}
            <div className="mb-3">
              <label htmlFor="caption" className="form-label fw-bold">
                Caption:
              </label>
              <textarea
                className="form-control"
                id="caption"
                name="caption"
                rows="3"
                placeholder="Add the caption of your post here"
                value={formData.caption}
                onChange={handleInputChange}
              ></textarea>
            </div>

            {/* Campo de URL de Imagen */}
            <div className="mb-3">
              <label htmlFor="imageUrl" className="form-label fw-bold">
                Image URL:
              </label>
              <input
                type="text"
                className="form-control"
                id="imageUrl"
                name="imageUrl"
                placeholder="https://example.com/image.jpg"
                value={formData.imageUrl}
                onChange={handleInputChange}
              />
            </div>

            {/* Botones de Iconos (Camera y Location) */}
            <div className="d-flex gap-2">
              <button type="button" className="btn btn-outline-secondary">
                <i className="fa-solid fa-camera"></i>
              </button>
              <button type="button" className="btn btn-outline-secondary">
                <i className="fa-solid fa-location-dot"></i>
              </button>
            </div>
          </div>

          {/* Footer del Modal */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={handlePublish}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
