import React, { useState, useEffect } from 'react'
import { Card, Col, Form, Row, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { uploadFile } from '../action'
import Message from './Message'
import { FILE_UPLOAD_RESET } from '../constants'

function HomesScreen() {

    const [media, setMedia] = useState('')
    const [text, setText] = useState('')
    const [Previewtext, setPreviewText] = useState('Select Text File....')
    const [upError, setupError] = useState(false)


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const fileUpload = useSelector((state) => state.fileUpload)
    const { error, loading, uploaded } = fileUpload

    useEffect(() => {
        if (uploaded) {
            navigate('/files')
            dispatch({ type: FILE_UPLOAD_RESET })
        }


    }, [uploaded, dispatch, navigate])

    const textChangeHandler = (file) => {
        setText(file)
        const reader = new FileReader()
        reader.onload = function (event) {
            const preview = event.target.result
            setPreviewText(preview)



        }
        reader.readAsText(file)



    }

    const MediaChangeHandler = (file) => {
        setMedia(file)


    }



    const submitHandler = (e) => {
        e.preventDefault()
        if (media || text) {
            dispatch(uploadFile({ 'video': media, 'text': text }))
        } else {
            setupError('Please Select atlease One file')
        }



    }

    return (
        <div>
            {loading && <h3>Loading...</h3>}
            {error && <Message variant={'danger'} dismissible>{error}</Message>}
            {upError && <Message variant={'danger'} dismissible>{upError}</Message>}

            <Form onSubmit={submitHandler}>
                <Row>
                    <Col md={6}>
                        <Card style={{ height: '28rem' }}>
                            <Card.Title className='ms-2'>Select Audio/Video File</Card.Title>
                            <Card.Body>
                                {media !== '' && (
                                    <div className='d-flex justify-content-center' key={URL.createObjectURL(media)}>
                                        <video width="400" controls>
                                            <source src={URL.createObjectURL(media)} />
                                        </video>
                                    </div>
                                )}

                            </Card.Body>
                        </Card>
                        <Form.Group className="mb-3">
                            <input
                                type="file"
                                className='form-control'
                                name="media"
                                onChange={(e) => MediaChangeHandler(e.target.files[0])}
                                style={{ width: '29rem' }}
                                accept='.mp4,.WEBM,.MPG,.MP2,.MPEG,.MPE,.MPV,.MP4, .M4P, .M4V,
                                        .AVI,
                                        .MOV, 
                                        .FLV, 
                                        .AVCHD,
                                        .mp3, '

                            />
                        </Form.Group>

                    </Col>
                    <Col md={6} className='ps-0'>
                        <Card style={{ height: '28rem', overflow: 'hidden' }}>
                            <Card.Body>
                                {Previewtext.length > 0 && <Card.Text >{Previewtext}</Card.Text>}
                            </Card.Body>

                        </Card>
                        <Form.Group className="mb-3">

                            <input type='file'

                                onChange={(e) => textChangeHandler(e.target.files[0])} name="text" className='form-control' style={{ width: '29rem' }}
                                accept='.txt' />


                        </Form.Group>


                    </Col>
                </Row>
                <div className='d-flex justify-content-center me-5 my-2'>
                    <Button type='submit' variant='info'>
                        Upload
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default HomesScreen