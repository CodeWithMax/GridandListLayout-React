import React from 'react'
import MainImage from '../image/mainImage.jpg'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Col, Card } from 'antd';
const { Meta } = Card;





const GridCard = () => {
    return (
        <div>
            <Col>
                <Card hoverable style={{ width: 240 }}

                    cover={<img src={MainImage} alt="examplesImages" />}

                >
                    <Meta title="WingsTech " description="wingsTech is best It company Provide best in class It solutions"

                        style={{ font: "message-box", fontWeight: "bold", }}

                    />
                </Card>
            </Col>

            <div
                style={{ display: "flex", justifyContent: "space-evenly", padding: "2rem" }}
            >
                <DeleteOutlined style={{ color: "red", scale: "2" }} />
                <EditOutlined style={{ color: "blue", scale: "2" }} />
            </div>

        </div>


    )
}

export default GridCard
