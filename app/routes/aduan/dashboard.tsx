import React from "react";
import { Card, CardContent, Typography, Grid, Container, Button } from "@mui/material";
import { Link } from "react-router";

const Dashboard: React.FC = () => {
    // Sample data for aduan
    const aduanList = [
        {
            title: "Aduan 1",
            description: "This is the description for Aduan 1.",
            date: "2023-10-01",
        },
        {
            title: "Aduan 2",
            description: "This is the description for Aduan 2.",
            date: "2023-10-02",
        },
        {
            title: "Aduan 3",
            description: "This is the description for Aduan 3.",
            date: "2023-10-03",
        },
    ];

    return (
        <Container
            style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom>
                Dashboard
            </Typography>
            <Button
                variant="contained"
                color="primary"
                style={{ marginBottom: "20px" }}
                component={Link}
                to="/aduan/borang-aduan"
            >
                Borang Aduan
            </Button>
            <Grid
                container
                spacing={3}
                style={{
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {aduanList.map((aduan, index) => (
                    <Grid item xs={12} key={index} style={{ width: "100%", maxWidth: "500px" }}>
                        <Card>
                            <CardContent style={{ textAlign: "center" }}>
                                <Typography variant="h6" component="h2" gutterBottom>
                                    {aduan.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" gutterBottom>
                                    {aduan.description}
                                </Typography>
                                <Typography variant="caption" color="textSecondary">
                                    {aduan.date}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Dashboard;