import { Button, Row } from 'antd'
import React from 'react'
import { useState } from "react"
import { UnorderedListOutlined, AppstoreOutlined, DeleteOutlined } from "@ant-design/icons"
import GridCard from './GridCard'
import ListCard from './ListCard'

const GridListView = () => {
    const [view, setView] = useState(false)
    return (
        <>


            <div
                style={{ textAlign: "center", margin: "2rem", padding: "2rem" }}>

                {
                    view === true ? <>

                        <Button
                            size="large" onClick={() => setView(false)} icon={<UnorderedListOutlined style={{ fontSize: "1.5rem" }} />}
                        />
                    </> : <>

                        <Button
                            size="large" onClick={() => setView(true)} icon={<AppstoreOutlined style={{ fontSize: "1.5rem" }} />}
                        />
                    </>
                }



            </div>

            {
                view === true ? <>

                    <Row gutter={[50, 50]} >
                        <GridCard />
                        <GridCard />
                        <GridCard />
                        <GridCard />
                        <GridCard />
                        <GridCard />
                        <GridCard />
                        <GridCard />
                        <GridCard />
                        <GridCard />
                        <GridCard />
                        <GridCard />
                        <GridCard />
                        <GridCard />
                        <GridCard />

                    </Row>

                </> : <>

                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />

                </>
            }



        </>
    )
}

export default GridListView;
