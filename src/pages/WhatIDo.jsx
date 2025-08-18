import { Box, Typography } from "@mui/material";
import React from "react";

export default function WhatIDo() {
  const images = [
    {
      url: "https://img.icons8.com/?size=100&id=9ESZMOeUioJS&format=png&color=000000",
      label: "Nest JS",
    },
    {
      url: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000",
      label: "JavaScript",
    },
    {
      url: "https://img.icons8.com/?size=100&id=PZQVBAxaueDJ&format=png&color=000000",
      label: "Express JS",
    },
    {
      url: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
      label: "PostgreSQL",
    },
    {
      url: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
      label: "MongoDB",
    },
    {
      url: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
      label: "TypeScript",
    },
    {
      url: "https://res.cloudinary.com/dqhylmpvk/image/upload/v1754993983/Node.js_tqfsia.svg",
      label: "Node JS ",
    },
    {
      url: "https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000",
      label: "Postman",
    },
    {
      url: "https://img.icons8.com/?size=100&id=pHS3eRpynIRQ&format=png&color=000000",
      label: "Redis",
    },
    {
      url: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000",
      label: "Docker",
    },
    {
      url: "https://img.icons8.com/?size=100&id=vArWbbq0EbTM&format=png&color=000000",
      label: "Stripe",
    },
    {
      url: "https://res.cloudinary.com/dqhylmpvk/image/upload/v1754994614/RabbitMQ_kw72wa.svg",
      label: "RabbitMQ",
    },
    {
      url: "https://res.cloudinary.com/dqhylmpvk/image/upload/v1754994766/Swagger_bxponq.svg",
      label: "Swagger",
    },
    {
      url: "https://res.cloudinary.com/dqhylmpvk/image/upload/v1755020302/kafka_d1reat.svg",
      label: "Kafka",
    },
    {
      url: "https://res.cloudinary.com/dqhylmpvk/image/upload/v1755021353/dg_ubswlr.svg",
      label: "Digital Ocean",
    },
    {
      url: "https://res.cloudinary.com/dqhylmpvk/image/upload/v1755021353/githubactions_cvqe6e.svg",
      label: "CI-CD",
    },
    {
      url: "https://res.cloudinary.com/dqhylmpvk/image/upload/v1755021695/sockets_edgkso.svg",
      label: "Web Sockets",
    },
  ];
  return (
    <>
      <Box style={{ width: "100%", display: "flex", justifyContent: "center", backgroundColor: '#041C32' }}>
        <Typography
          variant="h2"
          style={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontFamily: "Poppins",
            color: 'white'
          }}
          sx={{ mt: 1, fontWeight: 700, textAlign: "center" }}
        >
          What I Do
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 80px)",
          gap: "20px 55px",
          justifyContent: "center",
          padding: "30px",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          backgroundColor: "#041C32",
        }}
      >
        {images.map((item) => (
          <Box
            key={item.url}
            sx={{
              backgroundColor: "#082A43",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              padding: "40px 60px",
              transition: "transform 0.3s ease",
              position: "relative",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.1)",
                "& .label": { color: "red" }
              }
              
            }}
          >
            <img
              src={item.url}
              alt=""
              loading="lazy"
              style={{
                width: "70px",
                height: "70px",
              }}
            />
            <Typography
              variant="body2"
              className="label"
              style={{
                fontSize: "0.8em",
                fontFamily: "Poppins",
                position: "absolute",
                bottom: 7,
                color: "#A9B4C2",
              }}
              sx={{ mt: 1, fontWeight: 500, textAlign: "center" }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}
