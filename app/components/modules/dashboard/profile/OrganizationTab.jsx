import { useForm } from "react-hook-form";
import { FormGroup } from "@/app/components/modules/FormGroup";
import React from "react";
import { Button } from "flowbite-react";
import { SelectFormGroup } from "@/app/components/modules/SelectFormFroup";

const industryOptions = [
  'Авиационная промышленность',
  'Автомобильная промышленность',
  'Аддитивные технологии',
  'Деревообрабатывающая',
  'Кабельная промышленность',
  'Легкая промышленность',
  'Медицинская промышленность',
  'Металлургия и металлообработка',
  'Научная деятельность',
  'Общее машиностроение (в т.ч. оборудование пищевой переработки, дорожногстроительная и сельскохозяйственная техника)',
  'Пищевая промышленность',
  'Полиграфическая деятельность',
  'Производство бытовой электроники и электрических приборов',
  'Производство ж/д транспорта',
  'Производство кокса и нефтепродуктов',
  'Производство напитков',
  'Производство оружия, боеприпасов, спецхимии, военных машин',
  'Производство прочих товаров народного потребления',
  'Производство строительных материалов',
  'Радиоэлектроника и приборостроение',
  'Станкоинструментальная промышленность',
  'Судостроение',
  'Топливно-энергетический комплекс',
  'Фармацевтическая промышленность',
  'Химическая промышленность',
];

export default function OrganizationTab() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);

  return (
    <>
      <p className="text-[22px] font-medium sm:mb-[20px]">Данные организации</p>
      <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-3">
        <FormGroup
          htmlFor="name"
          label="Наименование организации"
          errors={errors.name}
          placeholder="ООО или ИП"
          register={register}
          conditions={{
            required: {
              value: true,
              message: "Поле Наименование организации пользователя должно быть заполнено",
            },
          }}
        />
        <FormGroup
          htmlFor="inn"
          label="ИНН"
          errors={errors.inn}
          placeholder="0000000000"
          register={register}
          conditions={{
            required: {
              value: true,
              message: "Поле Наименование организации пользователя должно быть заполнено",
            },
            pattern: {
              value: /^\d{10}|\d{12}$/,
              message: "Неверный формат записи ИНН"
            }
          }}
        />
        <SelectFormGroup
          htmlFor="industry"
          label="Отрасль"
          errors={errors.industry}
          register={register}
          conditions={{
            required: {
              value: true,
              message: "Поле отрасль должно быть заполнено"
            }
          }}
        >
          <option value="" selected disabled>Выберите один из вариантов</option>
          {industryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectFormGroup>
        <FormGroup
          htmlFor="website"
          label="Сайт организации"
          errors={errors.website}
          placeholder="https://"
          register={register}
          conditions={{
            pattern: {
              value: /^(http|https):\/\/[^ "]+$/,
              message: 'Некорректный URL',
            },
          }}
        />
        <FormGroup
          htmlFor="job"
          label="Должность"
          errors={errors.name}
          register={register}
        />
        <FormGroup
          htmlFor="country"
          label="Страна"
          placeholder="Россия"
          errors={errors.country}
          register={register}
        />
        <FormGroup
          htmlFor="city"
          label="Город"
          placeholder="Москва"
          errors={errors.country}
          register={register}
        />
        <Button type="submit">Сохранить</Button>
      </form>
    </>
  );
}