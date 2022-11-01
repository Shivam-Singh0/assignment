import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { downloadFiles } from '../action'
import { Row, Col, Card } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import Message from './Message'

function FilesScreen() {

    const dispatch = useDispatch()




    const getFiles = useSelector((state) => state.getFiles)
    const { files } = getFiles



    useEffect(() => {
        dispatch(downloadFiles())
    }, [dispatch])

    return (
        <div>
            <Link className='btn btn-primary btn-sm' to='/'>Go Back</Link>

            {files.length > 0 ? (<div>

                {files.map((x) => (
                    <div className='d-flex justify-content-center mb-4' key={x.id}>
                        <Row>
                            <Col md={6}>
                                <Card style={{ height: '400px', width: '400px' }}>
                                    <Card.Body>
                                        <div className='d-flex justify-content-center'>
                                            <ReactPlayer url={x.video} controls='true' width={'360px'} height={'283px'} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card style={{ height: '400px', width: '400px' }}>
                                    <Card.Body>
                                        <Card.Text>
                                            {x.text_data}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </Col>
                        </Row>
                    </div>

                ))}
            </div>) :
                <div className='mt-2'>
                    <Message variant={'info'}>No Files</Message>
                </div>
            }



        </div>
    )
}

export default FilesScreen