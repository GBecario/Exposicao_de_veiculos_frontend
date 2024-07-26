import React, { useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { useState } from "react";
import { Exhibition } from "../types";
import { Link } from "react-router-dom";
import { getAllExhibiton } from "../api/exhibition";

const Home = () => {
    const [exhibitions, setExhibitions] = useState<Exhibition[]>([]);

    const styles: { [key: string]: React.CSSProperties} = {
        container: {
            backgroundColor: '#dedcb0',
        },
        containerCard: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        },
        card: {
            backgroundColor: "#884000",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            padding: "20px",
            margin: "20px",
            borderRadius: "10px",
            height: "240px",
            width: "300px",
            color: "white"
        },
        cardColumn: {
            display: "flex",
            flexDirection: "row"
        }
    };

    useEffect(() => {
        const fetchExhibition = async () => {
            try {
                const response = await getAllExhibiton();
                console.log(response);
                setExhibitions(response);
                console.log(exhibitions);
            } catch (error) {
                console.log("Error fetching exhibition: ", error);
            }
        };
        fetchExhibition();
    }, []);
    

    return(
        <Container style={styles.container}>
            <button>
                <Link to="/cadastro">Cadastrar exposição</Link>
            </button>
            <Row style={styles.containerCard}>
                {exhibitions.length > 0 ? (
                    exhibitions.map((exhibition) => (
                    <Col
                        md={6}
                        key={exhibition.id}
                    >
                        <Card
                            tabIndex={0}
                        >
                            <Card.Body style={styles.card}>
                                <Card.Title>
                                    {exhibition.title}
                                </Card.Title>
                                <Card.Text>
                                    {exhibition.vehicle}
                                </Card.Text>
                                <Card.Text>
                                    {exhibition.description}
                                </Card.Text>
                            </Card.Body>
                            
                            
                            
                        </Card>
                    </Col>))
                ) : (
                    <Col>
                        <p>Parece que não há nenhuma exposição cadastrada no momento.</p>
                        <button>
                            <Link to="/cadastro">Cadastrar exposição</Link>
                        </button>
                    </Col>
                )}
                
            </Row>
        </Container>
    );
};

export default Home;