export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Грузовой транспорт в пути"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему выбирают нас</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Более 10 лет на рынке грузоперевозок. Охватываем все регионы России — от Калининграда до Владивостока. Ваш груз застрахован и прибудет в срок.
        </p>
        <div className="grid grid-cols-2 gap-6 mb-10">
          <div>
            <p className="text-3xl font-bold text-neutral-900">500+</p>
            <p className="text-sm text-neutral-500 uppercase tracking-wide mt-1">городов доставки</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-neutral-900">98%</p>
            <p className="text-sm text-neutral-500 uppercase tracking-wide mt-1">доставок в срок</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-neutral-900">10 лет</p>
            <p className="text-sm text-neutral-500 uppercase tracking-wide mt-1">на рынке</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-neutral-900">24/7</p>
            <p className="text-sm text-neutral-500 uppercase tracking-wide mt-1">поддержка клиентов</p>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Оставить заявку
        </button>
      </div>
    </div>
  );
}
