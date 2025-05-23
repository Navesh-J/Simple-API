import * as yup from 'yup'

export const getUser={
    schema: {
        params: {
            yupSchema:yup.object().shape({
                id:yup.number().required(),
            })
        },
    },
}

export const addUser={
    schema: {
        body: {
            yupSchema:yup.object().shape({
                name:yup.string().required(),
                email:yup.string().email(),
                city:yup.string(),
                country:yup.string(),
            })
        },
    },
}

export const updateUser={
    schema: {
        params: {
            yupSchema:yup.object().shape({
                id:yup.number().required(),
            })
        },
        body: {
            yupSchema:yup.object().shape({
                name:yup.string().required(),
                email:yup.string().email(),
                city:yup.string(),
                country:yup.string(),
            })
        },
    },
}

export const deleteUser={
    schema: {
        params: {
            yupSchema:yup.object().shape({
                id:yup.number().required(),
            })
        },
    },
}