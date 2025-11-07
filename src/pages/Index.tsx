import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-heading text-primary">Ольга Бауэр</h2>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('efir')} className="hover:text-primary transition-colors">Эфиры</button>
              <button onClick={() => scrollToSection('calendar')} className="hover:text-primary transition-colors">Календарь</button>
              <button onClick={() => scrollToSection('diag')} className="hover:text-primary transition-colors">Диагностика</button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">Обо мне</button>
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden p-2 hover:text-primary transition-colors"
              aria-label="Меню"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-3 pb-4 animate-fade-in">
              <button onClick={() => scrollToSection('hero')} className="text-left py-2 hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('efir')} className="text-left py-2 hover:text-primary transition-colors">Эфиры</button>
              <button onClick={() => scrollToSection('calendar')} className="text-left py-2 hover:text-primary transition-colors">Календарь</button>
              <button onClick={() => scrollToSection('diag')} className="text-left py-2 hover:text-primary transition-colors">Диагностика</button>
              <button onClick={() => scrollToSection('reviews')} className="text-left py-2 hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 hover:text-primary transition-colors">Обо мне</button>
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="w-full md:hidden space-y-4 animate-fade-in text-center">
              <h1 className="text-4xl font-bold font-heading leading-tight">
                ТЫ УЖЕ<br />
                <span className="text-primary">ОХУЕННА.</span>
              </h1>
            </div>
            
            <div className="w-full md:hidden animate-slide-up">
              <Carousel 
                className="w-full" 
                opts={{ loop: true }}
                plugins={[Autoplay({ delay: 4000 })]}
              >
                <CarouselContent>
                  <CarouselItem>
                    <img 
                      src="https://cdn.poehali.dev/files/2676d461-1711-48b0-8756-d79154955ce9.jpg" 
                      alt="Ольга Бауэр" 
                      className="rounded-lg shadow-2xl w-full object-contain max-h-[50vh]"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="https://cdn.poehali.dev/files/6069882d-b745-41d9-a8e2-cf622bc26f32.jpg" 
                      alt="Ольга Бауэр" 
                      className="rounded-lg shadow-2xl w-full object-contain max-h-[50vh]"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>

            <div className="space-y-4 md:space-y-8 animate-fade-in w-full">
              <h1 className="hidden md:block text-5xl md:text-7xl font-bold font-heading leading-tight">
                ТЫ УЖЕ<br />
                <span className="text-primary">ОХУЕННА.</span>
              </h1>
              <p className="text-lg md:text-3xl font-heading font-semibold">
                МОЯ ЗАДАЧА — ПОКАЗАТЬ, КАК ЭТО ИСПОЛЬЗОВАТЬ.
              </p>
              <div className="space-y-2 text-sm md:text-lg">
                <p className="font-semibold">Я — Ольга Бауэр.</p>
                <p>Прошла взлёты, падения, абьюз, страхи и нули.</p>
                <p>Но однажды поняла свой код охуенности — и всё изменилось.</p>
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                <Button size="default" className="text-sm md:text-lg font-semibold w-full md:w-auto" onClick={() => scrollToSection('efir')}>
                  Эфир каждый четверг в 20:00
                </Button>
                <Button size="default" variant="outline" className="text-sm md:text-lg font-semibold w-full md:w-auto" onClick={() => scrollToSection('calendar')}>
                  Календарь-2026
                </Button>
              </div>
            </div>
            <div className="hidden md:block animate-slide-up">
              <Carousel 
                className="w-full" 
                opts={{ loop: true }}
                plugins={[Autoplay({ delay: 4000 })]}
              >
                <CarouselContent>
                  <CarouselItem>
                    <img 
                      src="https://cdn.poehali.dev/files/2676d461-1711-48b0-8756-d79154955ce9.jpg" 
                      alt="Ольга Бауэр" 
                      className="rounded-lg shadow-2xl w-full object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="https://cdn.poehali.dev/files/6069882d-b745-41d9-a8e2-cf622bc26f32.jpg" 
                      alt="Ольга Бауэр" 
                      className="rounded-lg shadow-2xl w-full object-cover"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="min-h-screen flex items-center justify-center py-8 md:py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl scroll-animate">
          <div className="space-y-4 md:space-y-12 animate-fade-in">
            <div className="text-center space-y-2 md:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-5xl font-bold font-heading leading-tight">
                Показываю, что возможно всё —<br />
                <span className="text-primary">когда ты в соединении с собой.</span>
              </h2>
            </div>

            <div className="space-y-4 md:space-y-0">
              {/* Мобильная версия - вертикальная */}
              <div className="md:hidden space-y-4 px-[17px]">
                <div className="text-sm">
                  <p>
                    Сейчас я живу у моря, дышу свободой и помогаю другим включать свой код силы.
                  </p>
                </div>

                <div className="animate-slide-up">
                  <Carousel 
                    className="w-full" 
                    opts={{ loop: true }}
                    plugins={[Autoplay({ delay: 4000 })]}
                  >
                    <CarouselContent>
                      <CarouselItem>
                        <img 
                          src="https://cdn.poehali.dev/files/56ae766e-b7a6-4cea-9bcc-fcb40c57688e.jpg" 
                          alt="Ольга Бауэр" 
                          className="rounded-lg shadow-2xl w-full object-cover h-[300px]"
                        />
                      </CarouselItem>
                      <CarouselItem>
                        <img 
                          src="https://cdn.poehali.dev/files/83f24ec3-0d41-45dd-8a67-838a9071a10c.jpg" 
                          alt="Ольга Бауэр" 
                          className="rounded-lg shadow-2xl w-full object-cover h-[300px]"
                        />
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                </div>

                <div className="text-center">
                  <p className="text-base font-semibold">
                    Помогаю увидеть твой внутренний код — ту силу, из которой рождается уверенность, ясность и деньги.
                  </p>
                </div>
              </div>

              {/* Десктоп версия - две колонки */}
              <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-lg">
                  <p>
                    Сейчас я живу у моря, дышу свободой и помогаю другим включать свой код силы.
                  </p>
                  <p className="text-base font-normal">
                    Помогаю увидеть твой внутренний код — ту силу, из которой рождается уверенность, ясность и деньги.
                  </p>
                </div>
                <div className="animate-slide-up">
                  <Carousel 
                    className="w-full" 
                    opts={{ loop: true }}
                    plugins={[Autoplay({ delay: 4000 })]}
                  >
                    <CarouselContent>
                      <CarouselItem>
                        <img 
                          src="https://cdn.poehali.dev/files/56ae766e-b7a6-4cea-9bcc-fcb40c57688e.jpg" 
                          alt="Ольга Бауэр" 
                          className="rounded-lg shadow-2xl w-full object-cover h-[500px] lg:h-[700px]"
                        />
                      </CarouselItem>
                      <CarouselItem>
                        <img 
                          src="https://cdn.poehali.dev/files/83f24ec3-0d41-45dd-8a67-838a9071a10c.jpg" 
                          alt="Ольга Бауэр" 
                          className="rounded-lg shadow-2xl w-full object-cover h-[500px] lg:h-[700px]"
                        />
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="efir" className="min-h-screen flex items-center justify-center py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl scroll-animate">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-fade-in order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/files/a5bd4a78-d4e5-4506-8b09-3b5e0582dbdb.jpg" 
                alt="Ольга Бауэр" 
                className="rounded-lg shadow-2xl w-full object-cover"
              />
            </div>
            <div className="text-center md:text-left space-y-6 md:space-y-8 animate-fade-in order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold font-heading">
                <span className="text-primary">ЖИВЫЕ ЭФИРЫ</span><br />
                КАЖДЫЙ ЧЕТВЕРГ В 20:00 (МСК)
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Расшифровываем даты, коды и состояния.
              </p>
              <div className="grid gap-4 md:gap-6 text-left pt-6 md:pt-8">
                <Card className="bg-card/50 backdrop-blur border-primary/30 scroll-animate-fast">
                  <CardContent className="p-6">
                    <p className="text-base md:text-lg">Разбираем твою дату рождения — и ты видишь свои сильные стороны.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 backdrop-blur border-primary/30 scroll-animate-fast">
                  <CardContent className="p-6">
                    <p className="text-base md:text-lg">Снимаем внутренние тормоза, чтобы захотелось ДЕЙСТВОВАТЬ.</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 backdrop-blur border-primary/30 scroll-animate-fast">
                  <CardContent className="p-6">
                    <p className="text-base md:text-lg">Переключаем мозг из тревоги в ясность — и энергия возвращается.</p>
                  </CardContent>
                </Card>
              </div>
              <Button size="lg" className="text-base sm:text-lg font-semibold mt-6 md:mt-8 w-full sm:w-auto" asChild>
                <a href="https://t.me/BauerVibe" target="_blank" rel="noopener noreferrer">
                  Присоединиться к эфиру
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="calendar" className="min-h-screen flex items-center justify-center py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl scroll-animate">
          <div className="space-y-8 md:space-y-12 animate-fade-in">
            <div className="text-left md:text-center space-y-4 md:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold font-heading">
                ТВОЙ ЕЖЕДНЕВНЫЙ КОД<br />
                <span className="text-secondary">НА ОХУЕННОСТЬ</span>
              </h2>
              <p className="text-lg md:text-2xl font-semibold">366 дней — твоя личная карта энергии.</p>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              <div className="w-full md:hidden">
                <img 
                  src="https://cdn.poehali.dev/files/547fedd2-d8bc-427e-86e9-66355ae0a1a9.jpg" 
                  alt="Ольга Бауэр" 
                  className="rounded-lg shadow-2xl w-full object-cover"
                />
              </div>
              
              <div className="w-full space-y-4">
                <p className="text-sm md:text-lg text-left">
                  Каждый день — подсказка: когда действовать, когда замедлиться, когда взлетать.
                </p>
                <p className="md:text-lg text-lg font-bold px-0 mx-0 my-[33px]">3 дня в твоей энергии — бесплатно.
Проверь, как работает твой личный код силы.
</p>
                
                <div className="pt-2">
                  <div className="flex items-center justify-between p-3 md:p-4 bg-card rounded-lg border border-primary">
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground">Пресейл (до 15 декабря)</p>
                      <div className="flex items-center gap-2">
                        <p className="text-2xl md:text-3xl font-bold text-primary">999 ₽</p>
                        <p className="text-lg md:text-xl text-muted-foreground line-through">1999 ₽</p>
                      </div>
                    </div>
                    <Icon name="Sparkles" className="text-primary" size={28} />
                  </div>
                </div>
                
                <Button size="lg" className="w-full text-base md:text-lg font-semibold mt-4" asChild>
                  <a href="https://t.me/bauer_kalendar_bot" target="_blank" rel="noopener noreferrer">
                    Купить календарь
                  </a>
                </Button>
              </div>

              <div className="hidden md:block w-full">
                <img 
                  src="https://cdn.poehali.dev/files/547fedd2-d8bc-427e-86e9-66355ae0a1a9.jpg" 
                  alt="Ольга Бауэр" 
                  className="rounded-lg shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="diag" className="min-h-screen flex items-center justify-center py-12 md:py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 md:space-y-8 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold font-heading leading-tight">
              БЕСПЛАТНАЯ СЕССИЯ<br />
              <span className="text-primary">ГДЕ ТЫ СЕБЯ ПРЕДАЁШЬ</span>
            </h2>
            <Card className="bg-background border-primary/30 scroll-animate">
              <CardContent className="p-6 md:p-8 lg:p-12 space-y-6 text-left">
                <p className="text-lg md:text-xl font-semibold text-center">
                  30 минут — и ты видишь, где сливаешь энергию и что мешает жить в своём коде.
                </p>
                <div className="space-y-4 pt-4">
                  <p className="text-base md:text-lg flex items-start gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={24} />
                    Без "разбора детства". Без соплей.
                  </p>
                  <p className="text-base md:text-lg flex items-start gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={24} />
                    Выходишь с ясностью и конкретным планом — как включить охуенность.
                  </p>
                </div>
                <div className="pt-6 text-center">
                  <Button size="lg" className="text-sm sm:text-base md:text-lg font-semibold w-full whitespace-normal h-auto py-3" asChild>
                    <a href="https://t.me/Olga_Bauer" target="_blank" rel="noopener noreferrer">
                      Записаться на диагностику
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="min-h-screen flex items-center justify-center py-12 md:py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl scroll-animate">
          <div className="space-y-8 md:space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-heading">
                <span className="text-primary">ОТЗЫВЫ</span> КЛИЕНТОВ
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Реальные истории тех, кто уже нашёл свой код силы
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <Card className="bg-background/90 backdrop-blur border-primary/20">
                <CardContent className="p-6 md:p-8 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl">👩</span>
                    </div>
                    <div>
                      <p className="font-bold text-lg">Елизавета</p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed">
                    Еще раз благодарю за мощную сессию, за открытие четкого понимания, как двигаться дальше, как не сливаться, и как действовать 🙏
                  </p>
                  <p className="text-base leading-relaxed">
                    Ты очень крутая 😍 Особенно еще подтверждение для меня, что я хочу учится на психолога у Лиллит 🙈 а то я тут уже искала другие академии, где подешевле или «лучше» 😬
                  </p>
                  <p className="text-base leading-relaxed">
                    Даже передать словами не могу, благодарю, что взяла в работу меня, именно в то время когда было нужно, пришла как раз в нужный момент ❤️
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/90 backdrop-blur border-primary/20">
                <CardContent className="p-6 md:p-8 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl">👩</span>
                    </div>
                    <div>
                      <p className="font-bold text-lg">Оля</p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed">
                    Олечка хочу отзыв оставить, забегалась совсем 😊🙏 а в голове держу. Хоть и знаем мы друг друга давно, на встрече с тобой по диагностики ты меня прям отрезвила, буд-то дала по щекам, и сказала давай, блядть, вперёд, чего ты ждёшь, выжидаешь.
                  </p>
                  <p className="text-base leading-relaxed">
                    Короче дала мне нужных пиздюлей, подсветила где надо, чему я очень рада и благодарна тебе, что самое интересное, это всего за 30 минут. И отмечу как важно себя прорабатывать 😊, я сдвинулась с места и сделала то, что так долго откладывала, стало намного легче, и энергии появилось больше) ❤️🙏 люблю, благодарю, обращусь ещё обязательно.
                  </p>
                  <p className="text-base leading-relaxed">
                    И знай, ты супер детка, ты супер коуч, мастер своего дела, ты на своём месте, ты огонь 🔥🔥🔥
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/90 backdrop-blur border-primary/20">
                <CardContent className="p-6 md:p-8 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl">👩</span>
                    </div>
                    <div>
                      <p className="font-bold text-lg">Elza</p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed">
                    Оль, хочу сказать, спасибо за разбор-сессию. В начале у меня не очень получалось включится в свою проблему и отвечать на вопросы, которые ты мне задавала, но в моменте, получилось найти коннект и все прошло спокойно, легко и результативно.
                  </p>
                  <p className="text-base leading-relaxed">
                    Редко где (в какой-то области психологии) и редко с кем (имею ввиду проводника) получается с первого сеанса найти первопричину проблемы, а у нас получилось. Чему я очень рада.
                  </p>
                  <p className="text-base leading-relaxed">
                    Оль, спасибо еще раз ❤️ Желаю успехов и роста во всех сферах жизни, которые важны для тебя 💕
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/90 backdrop-blur border-primary/20">
                <CardContent className="p-6 md:p-8 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl">👩</span>
                    </div>
                    <div>
                      <p className="font-bold text-lg">Клиент</p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed">
                    И еще очень круто, что вы сказала про действия, что нужно через материальное развиваться чтобы не остаться мечтателем. А я так люблю философствовать и думать, нужно искать этому выход!
                  </p>
                  <p className="text-base leading-relaxed">
                    И 2 недели назад меня посетила мысль-а что если начать писать, просто рандомно фиксировать свои мысли, вдруг из этого потом что-то выйдет 😳 и ты говоришь- можно писать..
                  </p>
                  <p className="text-base leading-relaxed">
                    Говоришь нужно осознать и уяснить, что есть что-то высшее, высшие силы.. так вот они, дают мне знаки через тебя и наше мимолетное знакомство ✨
                  </p>
                  <p className="text-base leading-relaxed">
                    Оля, спасибо тебе огромнейшее, это было мне так нужно сейчас 🙏😌
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl scroll-animate">
          <div className="grid md:grid-cols-[1fr,400px] gap-6 md:gap-16 items-start animate-fade-in">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading">
                  Ольга Бауэр.
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-primary mt-3">
                  Девушка, которая не ждала идеальных условий.
                </p>
              </div>
              
              <div className="md:hidden">
                <img 
                  src="https://cdn.poehali.dev/files/1e379f95-1836-4abc-92cf-fca4d4e51409.jpg" 
                  alt="Ольга Бауэр" 
                  className="rounded-lg shadow-2xl w-full object-cover max-h-[50vh]"
                />
              </div>

              <div className="space-y-3 text-sm md:text-lg">
                <p>Год назад я была там, где ты сейчас.</p>
                <p>Сегодня — живу у моря с ребёнком и помогаю другим найти свой код силы.</p>
                <p className="text-base md:text-xl font-semibold pt-2">
                  Не мотивирую. Показываю реальный путь.
                </p>
              </div>
              
              <div className="pt-4 space-y-4">
                <p className="text-sm md:text-lg font-semibold">Контакты:</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="w-full sm:w-auto" asChild>
                    <a href="https://t.me/bauer_kalendar_bot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Icon name="Bot" size={20} />
                      @bauer_kalendar_bot
                    </a>
                  </Button>
                </div>
                <p className="text-secondary text-sm md:text-lg">
                  Эфиры: каждый четверг в 20:00
                </p>
              </div>
            </div>
            
            <div className="hidden md:block sticky top-24">
              <img 
                src="https://cdn.poehali.dev/files/1e379f95-1836-4abc-92cf-fca4d4e51409.jpg" 
                alt="Ольга Бауэр" 
                className="rounded-lg shadow-2xl w-full object-cover max-h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Ольга Бауэр. Цифровой психолог.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;