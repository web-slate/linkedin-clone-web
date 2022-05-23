import React from 'react'
import { Modal, InputText, Switch }  from '../../../../ui'
import { useForm } from 'react-hook-form'
import styles from './AddOrEditExperienceModal.module.css'

function AddOrEditExperienceModal({ show, handleModalClose }) {
  const { register, handleSubmit, formState, reset } = useForm()
  
  const handleCreateChannelFormSubmit = async (data) => {
    data.organization_id = organizationId

    reset()
  }

  return (
    <>
      <Modal
        show={show}
        handleModalClose={handleModalClose}
        title="Add a Experience"
      >
        <div className={styles.formBlock}>
          <form onSubmit={handleSubmit(handleCreateChannelFormSubmit)}>
            <div className={styles.formContainer}>
              <label className={styles.label}>
                 Title
              </label>
              <InputText
                {...register('title', {
                  required: true,
                  maxLength: 80,
                  value: '',
                })}
                className={styles.textField}
                placeholder="title"
              />
              {formState.errors?.title && (
                <span className={`${styles.error} ${styles.subLabel}`}>
                  title_error 
                </span>
              )}
            </div>

            <div className={styles.formContainer}>
              <label className={styles.label}>
                 Employment Type
              </label>
              <InputText
                {...register('employment_type', {
                  required: true,
                  maxLength: 80,
                  value: '',
                })}
                className={styles.textField}
                placeholder="employmenttype"
              />
              {formState.errors?.employment_type && (
                <span className={`${styles.error} ${styles.subLabel}`}>
                  employment_type_error 
                </span>
              )}
            </div>
            
            <div className={styles.formContainer}>
              <label className={styles.label}>
                 Company Name
              </label>
              <InputText
                {...register('company_name', {
                  required: true,
                  maxLength: 80,
                  value: '',
                })}
                className={styles.textField}
                placeholder="Company Name"
              />
              {formState.errors?.company_name && (
                <span className={`${styles.error} ${styles.subLabel}`}>
                  company_name_error 
                </span>
              )}
            </div>    
            
            <div className={styles.formContainer}>
              <label className={styles.label}>
                 Location
              </label>
              <InputText
                {...register('Location', {
                  required: true,
                  maxLength: 80,
                  value: '',
                })}
                className={styles.textField}
                placeholder="Location"
              />
              {formState.errors?.location && (
                <span className={`${styles.error} ${styles.subLabel}`}>
                  location_error 
                </span>
              )}
            </div>   

            <div className={styles.formContainer}>
              <label className={styles.label}>
                 Description
              </label>
              <InputText
                {...register('description', {
                  required: true,
                  maxLength: 80,
                  value: '',
                })}
                className={styles.textField}
                placeholder="Description"
              />
              {formState.errors?.description && (
                <span className={`${styles.error} ${styles.subLabel}`}>
                  description_error 
                </span>
              )}
            </div>   

            <div
              className={`${styles.formContainer} ${styles.createModalRight}`}
            >
            </div>
          </form>
        </div>
      </Modal>
    </>
  )
}

export default AddOrEditExperienceModal
