import { Box, Card, CardContent, Container, Typography } from "@mui/material";

const WhoIAm = () => {
  const expertise = [
    {
      title: "System Architecture",
      description:
        "Designing scalable microservices architectures with proper separation of concerns and high availability patterns.",
      icon: "🏗️",
    },
    {
      title: "Database Design",
      description:
        "Optimizing relational and NoSQL databases for performance, implementing efficient queries and data modeling.",
      icon: "🗄️",
    },
    {
      title: "API Development",
      description:
        "Building robust RESTful APIs and GraphQL endpoints with comprehensive documentation and testing.",
      icon: "🔌",
    },
    {
      title: "DevOps & CI/CD",
      description:
        "Implementing automated deployment pipelines, containerization, and infrastructure as code practices.",
      icon: "⚙️",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        backgroundColor: "#041C32",
      }}
    >
      <Container maxWidth="lg" sx={{ px: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            // gap: 6,
            // alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: "700",
                mb: 3,
                color: "hsl(210 40% 98%)",
                fontFamily: "Raleway",
                textAlign: "center",
              }}
            >
              Who Am I
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.125rem",
                  lineHeight: 1.6,
                  color: "hsl(215 20.2% 65.1%)",
                  fontFamily: "Livvic",
                  fontWeight: 400,
                  textAlign: "center",
                }}
              >
                Passionate backend developer with expertise in building
                high-performance, scalable server-side applications. Specialized
                in modern frameworks like
                <Typography
                  component="span"
                  sx={{
                    color: "hsl(200 100% 60%)",
                    fontFamily: "Livvic",
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  {" "}
                  NestJS{" "}
                </Typography>
                and experienced with both SQL and NoSQL databases. Strong
                background in system design, microservices architecture, and
                message queuing systems. Committed to writing clean,
                maintainable code and implementing best practices for
                enterprise-level applications. Currently focused on{" "}
                <Typography
                  component="span"
                  sx={{
                    color: "hsl(280 100% 70%)",
                    fontFamily: "Livvic",
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  {" "}
                  cloud-native{" "}
                </Typography>
                solutions and
                <Typography
                  component="span"
                  sx={{
                    color: "hsl(150 70% 60%)",
                    fontFamily: "Livvic",
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  {" "}
                  event-driven{" "}
                </Typography>
                architectures that can handle massive scale and provide
                exceptional user experiences.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr 1fr" },
              gap: 2,
            }}
          >
            {expertise.map((item) => (
              <Card
                key={item.title}
                sx={{
                  p: 3,
                  backgroundColor: "#082A43",
                  //   border: "1px solid hsl(225 15% 18% / 0.5)",
                  //   boxShadow: "0 10px 30px -10px hsl(225 25% 3% / 0.5)",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  "&:hover": {
                    // boxShadow: "0 0 40px hsl(200 100% 60% / 0.2)",
                    transform: "scale(1.05)",
                    "& .icon": {
                      transform: "scale(1.1)",
                    },
                    // "& .title": {
                    //   color: "hsl(200 100% 60%)",
                    // },
                  },
                }}
              >
                <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                  <Typography
                    className="icon"
                    sx={{
                      fontSize: "2rem",
                      mb: 1.5,
                      transition: "transform 0.3s ease",
                      fontFamily: "Raleway",
                    }}
                  >
                    {item.icon}
                  </Typography>
                  <Typography
                    variant="h6"
                    className="title"
                    sx={{
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      mb: 1,
                      color: "#00AEEF",
                      transition: "color 0.3s ease",
                      fontFamily: "Raleway",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "0.875rem",
                      color: "hsl(215 20.2% 65.1%)",
                      lineHeight: 1.6,
                      fontFamily: "Livvic",
                      fontWeight: 400,
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhoIAm;
