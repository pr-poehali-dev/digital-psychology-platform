import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold font-heading text-primary">Ольга Бауэр</h2>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('efir')} className="hover:text-primary transition-colors">Эфиры</button>
              <button onClick={() => scrollToSection('calendar')} className="hover:text-primary transition-colors">Календарь</button>
              <button onClick={() => scrollToSection('diag')} className="hover:text-primary transition-colors">Диагностика</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">Обо мне</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight">
              ТЫ УЖЕ<br />
              <span className="text-primary">ОХУЕННА.</span>
            </h1>
            <p className="text-2xl md:text-3xl font-heading font-semibold">
              МОЯ ЗАДАЧА — ПОКАЗАТЬ,<br />КАК ЭТО ИСПОЛЬЗОВАТЬ.
            </p>
            <div className="space-y-4 text-lg">
              <p className="font-semibold">Я — Ольга Бауэр.</p>
              <p>За 2 месяца переехала в Ялту с ребёнком и нулём на карте.</p>
              <p>Нашла охуенную работу за 7 дней.</p>
              <p>Живу у моря. Кайфую.</p>
              <p className="text-secondary text-xl">🌊 Если я смогла — ты тем более.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg font-semibold" onClick={() => scrollToSection('efir')}>
                🔥 Эфир каждый четверг в 20:00
              </Button>
              <Button size="lg" variant="outline" className="text-lg font-semibold" onClick={() => scrollToSection('calendar')}>
                📅 Календарь-2026
              </Button>
            </div>
          </div>
          <div className="animate-slide-up">
            <img 
              src="https://cdn.poehali.dev/files/6069882d-b745-41d9-a8e2-cf622bc26f32.jpg" 
              alt="Ольга Бауэр" 
              className="rounded-lg shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="efir" className="min-h-screen flex items-center justify-center py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/files/a5bd4a78-d4e5-4506-8b09-3b5e0582dbdb.jpg" 
                alt="Ольга Бауэр" 
                className="rounded-lg shadow-2xl w-full object-cover"
              />
            </div>
            <div className="text-center md:text-left space-y-8 animate-fade-in order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold font-heading">
                ЖИВЫЕ ЭФИРЫ<br />
                <span className="text-primary">КАЖДЫЙ ЧЕТВЕРГ В 20:00 (МСК)</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Расшифровываем даты, коды и состояния.
              </p>
              <div className="grid gap-6 text-left pt-8">
                <Card className="bg-background/80 border-primary/20">
                  <CardContent className="p-6 flex gap-4">
                    <span className="text-2xl">🔹</span>
                    <p className="text-lg">Разбираем твою дату рождения — и ты видишь, где теряешь энергию.</p>
                  </CardContent>
                </Card>
                <Card className="bg-background/80 border-primary/20">
                  <CardContent className="p-6 flex gap-4">
                    <span className="text-2xl">🔹</span>
                    <p className="text-lg">Включаем состояние: ХОЧУ. МОГУ. МНЕ МОЖНО.</p>
                  </CardContent>
                </Card>
                <Card className="bg-background/80 border-primary/20">
                  <CardContent className="p-6 flex gap-4">
                    <span className="text-2xl">🔹</span>
                    <p className="text-lg">15 минут практики — и мозг из тумана выходит.</p>
                  </CardContent>
                </Card>
              </div>
              <Button size="lg" className="text-lg font-semibold mt-8" asChild>
                <a href="https://t.me/bauer_kalendar_bot" target="_blank" rel="noopener noreferrer">
                  🚀 Присоединиться к эфиру
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="calendar" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-12 animate-fade-in">
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold font-heading">
                ТВОЙ ЕЖЕДНЕВНЫЙ КОД<br />
                <span className="text-secondary">НА ОХУЕННОСТЬ</span>
              </h2>
              <p className="text-2xl font-semibold">366 дней — твоя личная карта энергии.</p>
            </div>

            <Card className="bg-card border-primary/30">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <p className="text-lg">
                      Каждый день — подсказка: когда действовать, когда замедлиться, когда взлетать.
                    </p>
                    <p className="text-lg">
                      Без эзотерики. Без "вселенских энергий". Только точная работа с твоим кодом.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-primary">
                        <div>
                          <p className="text-sm text-muted-foreground">Пресейл (до 15 декабря)</p>
                          <p className="text-3xl font-bold text-primary">999 ₽</p>
                        </div>
                        <Icon name="Sparkles" className="text-primary" size={32} />
                      </div>
                      <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
                        <div>
                          <p className="text-sm text-muted-foreground">Полная цена</p>
                          <p className="text-2xl font-semibold">1999 ₽</p>
                        </div>
                        <Icon name="Star" className="text-muted-foreground" size={28} />
                      </div>
                    </div>
                    <Button size="lg" className="w-full text-lg font-semibold" asChild>
                      <a href="https://t.me/bauer_kalendar_bot" target="_blank" rel="noopener noreferrer">
                        📅 Купить календарь
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="diag" className="min-h-screen flex items-center justify-center py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold font-heading">
              БЕСПЛАТНАЯ СЕССИЯ —<br />
              <span className="text-primary">ГДЕ ТЫ СЕБЯ ПРЕДАЁШЬ</span>
            </h2>
            <Card className="bg-background border-primary/30">
              <CardContent className="p-8 md:p-12 space-y-6 text-left">
                <p className="text-xl font-semibold text-center">
                  30 минут — и ты видишь, где сливаешь энергию и что мешает жить в своём коде.
                </p>
                <div className="space-y-4 pt-4">
                  <p className="text-lg flex items-start gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={24} />
                    Без "разбора детства". Без соплей.
                  </p>
                  <p className="text-lg flex items-start gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={24} />
                    Выходишь с ясностью и конкретным планом — как включить охуенность.
                  </p>
                </div>
                <div className="pt-6 text-center">
                  <Button size="lg" className="text-lg font-semibold" asChild>
                    <a href="https://t.me/Olga_Bauer" target="_blank" rel="noopener noreferrer">
                      💬 Записаться на диагностику
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold font-heading">
                Ольга Бауэр.
              </h2>
              <p className="text-2xl font-semibold text-primary">
                Девушка, которая не ждала идеальных условий.
              </p>
              <div className="space-y-4 text-lg">
                <p>Переехала в Ялту с ребёнком и нулём.</p>
                <p>Нашла работу за 7 дней.</p>
                <p>Живу у моря. Кайфую.</p>
                <p className="text-xl font-semibold pt-4">
                  Не учу жить — показываю, как это возможно.
                </p>
              </div>
              <div className="pt-8 space-y-4">
                <p className="text-lg font-semibold">Контакты:</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" asChild>
                    <a href="https://t.me/bauer_kalendar_bot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Icon name="Bot" size={20} />
                      @bauer_kalendar_bot
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://t.me/Olga_Bauer" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Icon name="Send" size={20} />
                      @Olga_Bauer
                    </a>
                  </Button>
                </div>
                <p className="text-secondary text-lg pt-4">
                  Эфиры: каждый четверг в 20:00
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/files/1e379f95-1836-4abc-92cf-fca4d4e51409.jpg" 
                alt="Ольга Бауэр" 
                className="rounded-lg shadow-2xl w-full object-cover"
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