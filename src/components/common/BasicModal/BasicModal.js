import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import CommonButton from '../commonButton/CommonButton'

export default function BasicModal({ open, onClose, title, subTitle, content, onSubmit }) {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box >
                <Typography
                    variant="h6"
                    component="h2">
                    {title}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    {subTitle}
                </Typography>
                {content}
                <Box>
                    <CommonButton onClick={onSubmit}>
                        Submit
                    </CommonButton>
                    <CommonButton onClick={onClose}>
                        Cancel
                    </CommonButton>
                </Box>
            </Box>
        </Modal>
    )
}
