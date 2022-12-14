
import React from 'react'
import { Avatar, Card } from 'antd';
import mainImage from "../image/mainImage.jpg"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
const { Meta } = Card;

const ListCard = () => {
    return (
        <div
            style={{ padding: "0.5rem", border: "0.3px solid black" }}
        >

            <Card hoverable
                style={{ fontWeight: "bold", color: "coral" }}
            >
                <Meta

                    avatar={<Avatar shape="square" size={{ md: 140, lg: 140, xl: 140, xxl: 140 }


                    }
                        src={mainImage}

                    />}

                    title="WingsTech" description="wingsTech is best It company Provide best in class It solutions" />



            </Card>
            <div
                style={{ display: "flex", justifyContent: "space-between", padding: "2rem" }}
            >
                <DeleteOutlined style={{ color: "red", scale: "2" }} />
                <EditOutlined style={{ color: "blue", scale: "2" }} />
            </div>
        </div>
    )
}

export default ListCard;
