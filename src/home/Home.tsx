import cn from "classnames";

export const Home = () => {
  const context = {
    title: "Послуги асенізатора",
    phoneNumber: "+380679967143",
    location: "Zhytomyr, Ukraine",
    sections: [
      {
        icon: "about",
        title: "Про транспорт",
        description: [
          "Асенізатор на 7 кубів зі шлангом до 50 метрів. Завжди в наявності в районах Житомира та області",
        ],
      },
      {
        icon: "services",
        title: "Послуги",
        description: [
          "Викачка каналізацій",
          "Викачка зливних та вигрібних ям",
          "Викачка сетпиків та вуличних туалетів",
          "Вивіз та утилізація ЖБВ (рідких побутових відходів)",
          "Чистка стоків та асенізація вигрібних зливних ям",
        ],
      },
      {
        icon: "contacts",
        title: "Контакти",
        description: ["+380679967143 - Юрій", "+380679611891 - Наталя"],
      },
      {
        icon: "price",
        title: "Ціна",
        description: ["Договірна"],
      },
    ],
  };

  return (
    <article className="flex flex-col lg:flex-row lg:gap-[15vw]">
      {/* Header */}
      <div className="flex flex-col items-center lg:items-start gap-7 my-8">
        <h1 className="font-semibold text-[32px] sm:text-[48px]">
          {context.title}
        </h1>

        <div className="flex flex-col items-center lg:items-start gap-3">
          <img
            className="h-[90vw] max-h-[260px] sm:max-h-[350px] lg:h-[30vw] w-[90vw] max-w-[350px] sm:max-w-[550px] lg:w-[35vw] object-cover rounded-[20px]"
            src="/images/header.JPG"
            alt="header-image"
          />

          <div className="w-[100%] flex justify-between">
            <a
              href={`tel:${context.phoneNumber}`}
              className="text-[12px] sm:text-[20px]"
            >
              {context.phoneNumber}
            </a>

            <div className="flex items-center gap-1">
              <p className="text-[12px] sm:text-[20px]">{context.location}</p>

              <div className="location h-4 w-4 bg-no-repeat bg-contain" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:mt-8">
        {context.sections.map((section) => (
          <div className="lg:max-w-[500px] flex flex-col gap-3 mb-7">
            <div className="flex items-center gap-3">
              <div
                className={`${section.icon} h-6 w-6 bg-no-repeat bg-contain`}
              />

              <h5 className="font-medium text-[20px] sm:text-[24px]">
                {section.title}
              </h5>
            </div>

            <ul
              className={cn("pl-9 flex flex-col gap-2", {
                dot: section.icon === "services",
              })}
            >
              {section.description.map((li) => (
                <li className="text-[16px] sm:text-[20px]">{li}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
};
