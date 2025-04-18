"use client";

import { useState } from "react";
import { Modal, Box, IconButton, Snackbar, Alert } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./ContactUs.module.css";

const initialFormState = {
  name: "",
  companyName: "",
  phone: "",
  email: "",
  consent: false,
  source: "commit-id.tech"
};

export const ContactUs = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorToastOpen, setIsErrorToastOpen] = useState(false);

  const resetForm = () => {
    setFormData(initialFormState);
    setIsSubmitted(false);
    setErrors({});
    setIsLoading(false);
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) error = "Обязательное поле";
        break;
      case "companyName":
        if (!value.trim()) error = "Обязательное поле";
        break;
      case "phone":
        if (!value) {
          error = "Обязательное поле";
        } else {
          const isValidFormat = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value);
          if (!isValidFormat) {
            error = "Введите полный номер телефона";
          }
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Обязательное поле";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = "Некорректный email";
        }
        break;
      case "consent":
        if (!value)
          error = "Необходимо согласие на обработку персональных данных";
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
      if (isSubmitted) {
        setErrors((prev) => ({
          ...prev,
          [name]: validateField(name, checked),
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (isSubmitted) {
        setErrors((prev) => ({
          ...prev,
          [name]: validateField(name, value),
        }));
      }
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const cleaned = value.replace(/\D/g, "");
    const numbers = cleaned.startsWith("7") ? cleaned.slice(1) : cleaned;

    let phoneNumber = "";

    if (numbers.length > 0) {
      phoneNumber = "+7 (";
      if (numbers.length >= 1) phoneNumber += numbers.slice(0, 3);
      if (numbers.length >= 4) phoneNumber += ") " + numbers.slice(3, 6);
      if (numbers.length >= 7) phoneNumber += "-" + numbers.slice(6, 8);
      if (numbers.length >= 9) phoneNumber += "-" + numbers.slice(8, 10);
    }

    setFormData((prev) => ({
      ...prev,
      phone: phoneNumber,
    }));

    if (isSubmitted) {
      setErrors((prev) => ({
        ...prev,
        phone: validateField("phone", phoneNumber),
      }));
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleToastClose = () => {
    setIsErrorToastOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const newErrors = {};
    Object.entries(formData).forEach(([fieldName, fieldValue]) => {
      newErrors[fieldName] = validateField(fieldName, fieldValue);
    });
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (!hasErrors) {

		const { consent, ...filteredData} = formData;
      setIsLoading(true);
      try {
        const response = await fetch("http://31.130.147.14:8080/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filteredData),
        });

        if (response.ok) {
          setIsModalOpen(true);
          resetForm();
        } else {
          throw new Error("Failed to send form");
        }
      } catch (error) {
        console.error("Error:", error);
        setIsErrorToastOpen(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <section className={styles.contactUs} id="ContactUs">
        <div className={styles.contactUsSVG} />
        <div className={styles.formContainer}>
          <div className={styles.textContainer}>
            <h2>
              <span className={styles.highlight}>
                Хотите проконсультироваться?
              </span>
              <br />
              Оставьте заявку, мы с вами <br /> свяжемся!
            </h2>
          </div>
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            key={isSubmitted ? "submitted" : "fresh"}
          >
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${styles.input} ${errors.name ? styles.error : ""}`}
                required
              />
              <label
                className={`${styles.label} ${
                  formData.name ? styles.filled : ""
                }`}
              >
                Ваше имя
              </label>
              {isSubmitted && errors.name && (
                <span className={styles.errorMessage}>{errors.name}</span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className={`${styles.input} ${
                  errors.companyName ? styles.error : ""
                }`}
                required
              />
              <label
                className={`${styles.label} ${
                  formData.companyName ? styles.filled : ""
                }`}
              >
                Ваша компания
              </label>
              {isSubmitted && errors.companyName && (
                <span className={styles.errorMessage}>{errors.companyName}</span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                className={`${styles.input} ${
                  errors.phone ? styles.error : ""
                }`}
                required
              />
              <label
                className={`${styles.label} ${
                  formData.phone ? styles.filled : ""
                }`}
              >
                Ваш телефон
              </label>
              {isSubmitted && errors.phone && (
                <span className={styles.errorMessage}>{errors.phone}</span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.input} ${
                  errors.email ? styles.error : ""
                }`}
                required
              />
              <label
                className={`${styles.label} ${
                  formData.email ? styles.filled : ""
                }`}
              >
                Ваша почта
              </label>
              {isSubmitted && errors.email && (
                <span className={styles.errorMessage}>{errors.email}</span>
              )}
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading ? "Отправка..." : "Отправить"}
            </button>

            <div
              className={`${styles.checkboxContainer} ${
                errors.consent ? styles.error : ""
              }`}
            >
              <input
                type="checkbox"
                id="consent"
                name="consent"
                className={styles.checkbox}
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              <label className={styles.labelDesciption} htmlFor="consent">
                Я соглашаюсь на обработку персональных данных и принимаю
                политику обработки и защиты персональных данных
              </label>
              {isSubmitted && errors.consent && (
                <span className={styles.consentError}>{errors.consent}</span>
              )}
            </div>
          </form>
        </div>
      </section>
      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="success-modal-title"
      >
        <Box className={styles.modalContent}>
          <IconButton
            aria-label="close"
            onClick={handleModalClose}
            className={styles.modalCloseButton}
          >
            <CloseIcon />
          </IconButton>
          <h3 className={styles.modalTitle}>Спасибо за заявку!</h3>
          <p className={styles.modalText}>
            Мы получили ваше сообщение и свяжемся с вами в ближайшее время.
          </p>
        </Box>
      </Modal>
      <Snackbar
        open={isErrorToastOpen}
        autoHideDuration={4000}
        onClose={handleToastClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleToastClose}
          severity="error"
          sx={{
            backgroundColor: "rgba(45, 45, 61, 0.9)",
            color: "#fff",
            border: "1px solid var(--color-carmine-red)",
            backdropFilter: "blur(32px)",
            "& .MuiAlert-icon": {
              color: "var(--color-carmine-red)",
            },
            "& .MuiAlert-action": {
              color: "#fff",
            },
          }}
        >
          Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.
        </Alert>
      </Snackbar>
    </>
  );
};
