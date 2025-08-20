import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  IconButton,
  Container,
} from "@mui/material";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";

export default function Contact() {
  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#041C32",
      }}
    >
      <Container maxWidth="lg" sx={{ px: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: 'center',
            alignItems: "center",
            // border: "1px solid white",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: "700",
              mb: 1,
              color: "white",
              fontFamily: "Raleway",
              textAlign: "center",
            }}
          >
            Let's Build Something Together
          </Typography>
          <Typography
            // variant="body"
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              // lineHeight: 1.6,
              color: "hsl(215 20.2% 65.1%)",
              fontFamily: "Livvic",
              fontWeight: 400,
              textAlign: "center",
              maxWidth: "600px",
            }}
          >
            Ready to discuss your next backend project? I'm always open to
            exploring new opportunities and collaborations.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: 'center',
            alignItems: "center",
            // border: "1px solid white",
            gap: 3,
            mt: 5, mb: 8
          }}
        >
          <IconButton
            sx={{
              border: "2px solid #00AEEF",
              color: "#00AEEF",
              "&:hover": { boxShadow: "0 0 5px #00AEEF, 0 0 20px #00AEEF" },
            }}
            onClick={() =>
              window.open("https://github.com/usamauddin", "_blank")
            }
          >
            <GitHub />
          </IconButton>
          <IconButton
            sx={{
              border: "2px solid #00AEEF",
              color: "#00AEEF",
              "&:hover": {
                boxShadow: "0 0 5px #00AEEF, 0 0 20px #00AEEF",
              },
            }}
            onClick={() =>
              window.open("https://www.linkedin.com/in/usama-uddin/", "_blank")
            }
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            sx={{
              border: "2px solid #00AEEF",
              color: "#00AEEF",
              "&:hover": { boxShadow: "0 0 5px #00AEEF, 0 0 20px #00AEEF" },
            }}
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=usamahafeez948@gmail.com",
                "_blank"
              )
            }
          >
            <Email />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
