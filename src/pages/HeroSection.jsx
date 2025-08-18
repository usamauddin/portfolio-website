import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import NavgivationBar from "../components/NavigationBar";

export default function HeroSection() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#041C32",
          padding: { xs: "40px 20px", md: "80px 100px" },
          fontFamily: "Poppins, sans-serif",
          flexWrap: "wrap",
          // margin: 0,
          // padding: 0,
        }}
      >
        {/* Left Content */}
        <Box sx={{ maxWidth: "550px", color: "#fff" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 500,
              mb: 1,
              fontSize: { xs: "28px", md: "40px" },
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Hey, I'm Usama Uddin
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#00AEEF",
              fontSize: { xs: "20px", md: "40px" },
              mb: 2,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Backend Engineer
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 300,
              lineHeight: 1.6,
              color: "#A9B4C2",
              mb: 3,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Architecting and optimizing high-performance backend systems that scale seamlessly. Proficient in modern server-side technologies, delivering secure, efficient, and future-ready solutions that power exceptional digital experiences.
          </Typography>

          {/* Social Icons */}
          <Stack direction="row" spacing={2}>
            <IconButton
              sx={{
                border: "2px solid #00AEEF",
                color: "#00AEEF",
                "&:hover": { boxShadow: "0 0 5px #00AEEF, 0 0 20px #00AEEF" },
              }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              sx={{
                border: "2px solid #00AEEF",
                color: "#00AEEF",
                "&:hover": {
                  // backgroundColor: "rgba(0,174,239,0.1)",
                  boxShadow: "0 0 5px #00AEEF, 0 0 20px #00AEEF",
                },
                //   ":hover": { boxShadow: 0 0 5px '#041C32', 0 0 20px "#041C32" }
              }}

              // style={{ ":hover": { boxShadow: 0 0 5px '#041C32', 0 0 20px "#041C32" }}}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              sx={{
                border: "2px solid #00AEEF",
                color: "#00AEEF",
                "&:hover": { boxShadow: "0 0 5px #00AEEF, 0 0 20px #00AEEF" },
              }}
            >
              <Email />
            </IconButton>
          </Stack>
        </Box>

        {/* Right Profile Image */}
        <Box
          sx={{
            width: { xs: "220px", md: "400px" },
            height: { xs: "220px", md: "400px" },
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid #00AEEF",
            mt: { xs: 4, md: 0 },
            boxShadow: "0 0 30px rgba(0,174,239,0.6)",
          }}
        >
          <img
            src="https://res.cloudinary.com/dqhylmpvk/image/upload/v1755020383/DSC02586_y2lp7j.jpg"
            alt="Usama Uddin"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
    </>
  );
}
