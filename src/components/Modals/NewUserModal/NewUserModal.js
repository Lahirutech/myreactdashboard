import React, { useEffect, useState } from 'react'
import BasicModal from '../../common/BasicModal/BasicModal'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'
import { Box } from '@mui/system';
import { TextField } from '@mui/material';

const defaultInputValues = {
    userId: '',
    email: '',
    phoneNumber: ''
};

export default function NewUserModal({open, onClose, addNewUser}) {
    const [values, setValues] = useState(defaultInputValues);

    // validation schema
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const validationSchema = Yup.object().shape({
        userId: Yup.string().required('User ID is required')
            .min(6, 'User ID must be at least 6 characters'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is valid'),
        phoneNumber: Yup.string()
            .matches(phoneRegExp, 'Phone no is req')
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const handleChange = (value) => {
        setValues(value)
    };

    const addUser = (data) => {
        console.log(data)
        addNewUser(data);
    };


    useEffect(() => {
      if(open) setValues(defaultInputValues)
    
        
    }, [open])
    

    const getContent = () => {
        <Box>
            <TextField placeholder='User Id'
                name='userId'
                label='User Id'
                required
                {...register('userId')}
                error={errors.userId ? true : false}
                helperText={errors.userId?.message}
                value={values.userId}
                onChange={(event) => handleChange({ ...values, userId: event.target.value })}
            />
             <TextField
                placeholder="Email"
                name="email"
                label="Email"
                required
                {...register('email')}
                error={errors.email ? true : false}
                helperText={errors.email?.message}
                value={values.email}
                onChange={(event) => handleChange({ ...values, email: event.target.value })}
            />
             <TextField
                placeholder="Phone number"
                name="phoneNumber"
                label="Phone number"
                required
                {...register('phoneNumber')}
                error={errors.phoneNumber ? true : false}
                helperText={errors.phoneNumber?.message}
                value={values.phoneNumber}
                onChange={(event) => handleChange({ ...values, phoneNumber: event.target.value })}
            />
        </Box>

    }

    return (
        <BasicModal 
            open={open}
            onClose={onClose}
            title="New User"
            subTitle="Fill out and submit"
            content={getContent()}
            onSubmit={handleSubmit(addUser)}
        />

    )
}
