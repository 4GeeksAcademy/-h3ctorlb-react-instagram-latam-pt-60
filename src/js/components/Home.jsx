import React, { useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Modal from "./Modal";

const Home = () => {
  // Estado para controlar la vista (grid o list)
  const [viewMode, setViewMode] = useState("grid");

  // Estado para los posts (ahora es dinámico)
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Beautiful Red Mushroom",
      date: "10/01",
      image:
        "https://plus.unsplash.com/premium_photo-1759494145084-7cdfa7049c13?q=80&w=870&auto=format&fit=crop",
      alt: "hongo-rojo",
      likes: "150",
      text: "A beautiful red mushroom found in the forest",
    },
    {
      id: 2,
      title: "Autumn Leaves",
      date: "10/02",
      image:
        "https://plus.unsplash.com/premium_photo-1759494144563-9277754f151f?q=80&w=1374&auto=format&fit=crop",
      alt: "hojas-verdes",
      likes: "320",
      text: "Beautiful autumn colors through the trees",
    },
    {
      id: 3,
      title: "Palm Tree Against Blue Sky",
      date: "10/03",
      image:
        "https://images.unsplash.com/photo-1742812174810-c7525d200248?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "palmera-contra-cielo-azul",
      likes: "410",
      text: "Tall palm tree reaching towards a clear blue tropical sky",
    },
    {
      id: 4,
      title: "Pink Wildflowers",
      date: "10/04",
      image:
        "https://plus.unsplash.com/premium_photo-1725880495508-283923dfb0a5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "flores-silvestres-rosadas-en-la-hierba",
      likes: "380",
      text: "Beautiful pink and purple wildflowers blooming in the grass",
    },
    {
      id: 5,
      title: "Tiny Owl on Cactus",
      date: "10/05",
      image:
        "https://plus.unsplash.com/premium_photo-1759353494863-d4da32a4b5cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "pequeno-buho-posado-en-cactus",
      likes: "520",
      text: "Adorable small owl perched on a spiny cactus in the desert",
    },
    {
      id: 6,
      title: "White Blossoms Close-Up",
      date: "10/06",
      image:
        "https://plus.unsplash.com/premium_photo-1669863791280-fd9c40cc9e3c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "flores-blancas-primer-plano",
      likes: "295",
      text: "Delicate white flowers captured in stunning close-up detail",
    },
    {
      id: 7,
      title: "Penguin Colony on Rocks",
      date: "10/07",
      image:
        "https://images.unsplash.com/photo-1748753429195-0f40250173ed?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "pinguino-sobre-roca-con-colonia",
      likes: "615",
      text: "A penguin standing proudly on a rock surrounded by its colony",
    },
    {
      id: 8,
      title: "Turbulent Ocean Waves",
      date: "10/08",
      image:
        "https://images.unsplash.com/photo-1754038373296-77dfb664da12?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "olas-oceano-turbulentas",
      likes: "740",
      text: "Powerful ocean waves swirling and crashing with stunning energy",
    },
    {
      id: 9,
      title: "Endangered Snowy Plover",
      date: "10/09",
      image:
        "https://plus.unsplash.com/premium_photo-1664297470158-9c4a9a9f3028?q=80&w=942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "chorlitejo-patinegro-en-peligro-playa",
      likes: "525",
      text: "An endangered snowy plover bird resting on the sandy beach",
    },
  ]);

  // Función para agregar un nuevo post
  const handleAddPost = (newPost) => {
    // Agregar el nuevo post al inicio del array
    setPosts([newPost, ...posts]);
  };

  return (
    <>
      <Navbar />

      {/* Modal para Crear Posts */}
      <Modal onAddPost={handleAddPost} />

      {/* Botones de Cambio de Vista - Centrados */}
      <div className="container mt-4">
        <div className="d-flex justify-content-center mb-4">
          <div className="btn-group" role="group" aria-label="View toggle">
            <button
              type="button"
              className={`btn ${
                viewMode === "grid" ? "btn-primary" : "btn-outline-secondary"
              }`}
              onClick={() => setViewMode("grid")}
            >
              <i className="fa-solid fa-table-cells"></i>
            </button>
            <button
              type="button"
              className={`btn ${
                viewMode === "list" ? "btn-primary" : "btn-outline-secondary"
              }`}
              onClick={() => setViewMode("list")}
            >
              <i className="fa-solid fa-square"></i>
            </button>
          </div>
        </div>

        {/* Vista Grid */}
        {viewMode === "grid" && (
          <div className="row">
            {posts.map((post, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                <Card
                  title={post.title}
                  date={post.date}
                  image={post.image}
                  alt={post.alt}
                  likes={post.likes}
                  text={post.text}
                />
              </div>
            ))}
          </div>
        )}

        {/* Vista List */}
        {viewMode === "list" && (
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              {posts.map((post, index) => (
                <Card
                  key={post.id}
                  title={post.title}
                  date={post.date}
                  image={post.image}
                  alt={post.alt}
                  likes={post.likes}
                  text={post.text}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
