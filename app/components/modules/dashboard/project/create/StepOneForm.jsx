import { FormGroup } from "@/app/components/modules/FormGroup";
import { SelectFormGroup } from "@/app/components/modules/SelectFormFroup";
import React, { useState } from "react";
import { Label, Radio } from "flowbite-react";
import CustomCheckbox from "@/app/components/elements/CustomCheckbox";
import CustomRadio from "@/app/components/elements/CustomRadio";

export default function StepOneForm({ register, errors, onSubmit }) {
  const organizations = [
    "Индивидуальное предприятие(ИП)",
    "Юр. лицо или ООО"
  ];

  const industries = [
    "Авиационная промышленность",
    "Автомобильная промышленность",
    "Аддитивные технологии",
    "Деревообрабатывающая",
    "Кабельная промышленность",
    "Легкая промышленность",
    "Медицинская промышленность",
    "Металлургия и металлообработка",
    "Научная деятельность",
    "Общее машиностроение (в т.ч. оборудование пищевой переработки, дорожногстроительная и сельскохозяйственная техника)",
    "Пищевая промышленность",
    "Полиграфическая деятельность",
    "Производство бытовой электроники и электрических приборов",
    "Производство ж/д транспорта",
    "Производство кокса и нефтепродуктов",
    "Производство напитков",
    "Производство оружия, боеприпасов, спецхимии, военных машин",
    "Производство прочих товаров народного потребления",
    "Производство строительных материалов",
    "Радиоэлектроника и приборостроение",
    "Станкоинструментальная промышленность",
    "Судостроение",
    "Топливно-энергетический комплекс",
    "Фармацевтическая промышленность",
    "Химическая промышленность"
  ];

  const [selectedRadio, setSelectedRadio] = useState('');

  return (
    <form onSubmit={onSubmit} className="grid lg:grid-cols-2 gap-2">
      <div className="space-y-3">
        <FormGroup
          label="Название проекта"
          placeholder="Название вашего проекта"
          htmlFor="name"
          register={register}
          conditions={{
            required: {
              value: true,
              message: "Поле Название должно быть обязательно заполнено"
            }
          }}
          errors={errors.name}
        />
        <SelectFormGroup
          label="Организация"
          htmlFor="organization"
          register={register}
          conditions={{
            required: {
              value: true,
              message: "Поле Отрасль должно быть заполнено"
            }
          }}
        >
          <option value="" selected disabled>Выберите один из вариантов</option>
          {organizations.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectFormGroup>
        <SelectFormGroup
          htmlFor="industry"
          label="Отрасль"
          errors={errors.industry}
          register={register}
          conditions={{
            required: {
              value: true,
              message: "Поле Отрасль должно быть заполнено"
            }
          }}
        >
          <option value="" selected disabled>Выберите один из вариантов</option>
          {industries.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectFormGroup>
        <FormGroup
          label="Планируемая штатная численность"
          placeholder="22,7"
          htmlFor="staff_number"
          type="number"
          register={register}
          isClue={true}
          clueContent="Среднесписочная численность 75% компаний отрасли составляет не более ХХ.Х чел."
          conditions={{
            required: {
              value: true,
              message: "Поле Название должно быть обязательно заполнено"
            }
          }}
          errors={errors.stuff_number}
        />
        <div>
          <div className="mb-2 flex items-center justify-between">
            <Label htmlFor="salary" value="Планируемая средняя зарплата" />
          </div>
          <fieldset
            className="flex flex-col gap-4"
            id="radio"
          >
            <CustomRadio register={register} registerName="stuff" label="Средняя зарплата" htmlFor="middle" checked={false} />
            <CustomRadio register={register} registerName="stuff" label="Высокая (выше 75% компании отрасли)" htmlFor="high" />
            <CustomRadio register={register} registerName="stuff" label="Ручной ввод" htmlFor="custom" />
          </fieldset>
          {errors.message && (
            <p className="text-red-600 leading-4 mt-[4px] text-[14px]">
              {errors.message}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}