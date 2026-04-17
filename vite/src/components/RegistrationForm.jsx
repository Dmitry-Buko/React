import React from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => alert(JSON.stringify(data, null, 2));
  // console.log(errors);

  const password = watch("password");

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Имя пользователя"
        {...register("username", {
          required: "Имя пользователя обязательно",
          minLength: {
            value: 3,
            message: "Должно быть более 3-х символов",
          },
          maxLength: {
            value: 20,
            message: "Не более 20 символов",
          },
          pattern: {
            value: /^[a-zA-Z0_]+$/,
            message: "Только латинские буквы",
          },
        })}
      />
      {errors.username && <p className="error">{errors.username.message}</p>}

      <input
        type="email"
        placeholder="Электронная почта"
        {...register("email", {
          required: "Электронная почта обязательна",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Введите корректный e-mail",
          },
        })}
      />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <input
        type="password"
        placeholder="Пароль"
        {...register("password", {
          required: "Пароль обязателен",
          minLength: {
            value: 6,
            message: "Минимум 6 символов",
          },
          validate: {
            hasUpperCase: (value) =>
              /[A-Z]/.test(value) || "Нужна хотя бы одна заглавная буква",
          },
        })}
      />
      {errors.password && <p className="error">{errors.password.message}</p>}

      <input
        type="password"
        placeholder="Подтверждение пароля"
        {...register("confirmPassword", {
          required: "Подтверждение пароля обязательно",
          validate: {
            confirmPassword: (value) =>
              value === password || "Пароли не совпадают",
          },
        })}
      />
      {errors.confirmPassword && (
        <p className="error">{errors.confirmPassword.message}</p>
      )}

      <input
        type="date"
        placeholder="Дата рождения"
        {...register("dateBirth", {
          required: "Дата рождения обязательна",
          validate: {
            validateDate: (prevDate) => {
              const selectDate = new Date(prevDate);
              const today = new Date();
              return selectDate < today || "Вы родились в будущем?";
            },
          },
        })}
      />
      {errors.dateBirth && <p className="error">{errors.dateBirth.message}</p>}

      {/* <label htmlFor="gender"></label> */}
      <select
        defaultValue=""
        id="gender"
        {...register("gender", {
          required: "Указать ваш пол обязательно",
        })}
      >
        <option value="" disabled selected>
          Ваш пол
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <input
        type="tel"
        placeholder="+375 __ ___-__-__"
        {...register("phoneNumber", {
          required: 'Номер телефона обязателен',
          pattern: {
            value: /^\+375\d{9}$/,
            message: "Формат: +375XXXXXXXXX (всего 12 цифр)"
          }
        })}
      />
      {errors.phoneNumber && <p className="error">{errors.phoneNumber.message}</p>}
        <button type="submit">Зарегистрироваться</button>
      {/* <button type="submit" /> */}
    </form>
  );
};

export default RegistrationForm;
