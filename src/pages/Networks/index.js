import React from "react";
import { useState, useEffect } from "react";
import "./networks.css";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MdAddLink } from "react-icons/md";
import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export default function Networks() {
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [github, setGithub] = useState("");

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setLinkedin(snapshot.data().linkedin);
          setInstagram(snapshot.data().instagram);
          setGithub(snapshot.data().github);
        }
      });
    }

    loadLinks();
  }, []);

  function handleSave(e) {
    e.preventDefault();
    setDoc(doc(db, "social", "link"), {
      linkedin: linkedin,
      instagram: instagram,
      github: github,
    })
      .then(() => {
        console.log("URL's salvas com sucesso!");
        toast.success("URL's salvas com sucesso!");
      })
      .catch((error) => {
        console.log("Erro ao salvar" + error);
        toast.error("Erro ao salvar links!");
      });
  }

  return (
    <div className="admin-container">
      <Header />
      <h1 className="title-social">Suas redes sociais</h1>
      <form className="form" onSubmit={handleSave}>
        <label className="label">Link do Linkedin</label>
        <Input
          placeholder="Digite a URL do Linkedin..."
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />

        <label className="label">Link do Instagram</label>
        <Input
          placeholder="Digite a URL do instagram..."
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <label className="label">Link do GitHub</label>
        <Input
          placeholder="Digite a URL do github..."
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />

        <button type="submit" className="btn-register">
          Salvar links <MdAddLink size={24} color="#fff" />
        </button>
      </form>
    </div>
  );
}
