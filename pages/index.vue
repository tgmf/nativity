<template>
  <div ref="content">
    <b-navbar id="navigation" ref="navigation" v-b-scrollspy=navHeight toggleable="md" :fixed="!slidersInit ? null : 'top'">
      <b-navbar-brand class="d-none d-md-flex"><nuxt-img alt="Nativity" src="/img/blue_nativity.svg"/></b-navbar-brand>
      <b-navbar-nav class="d-none d-md-flex align-items-center mx-auto w-100" >
        <b-nav-item href="#pros" @click.prevent="scrollIntoView">Платформа</b-nav-item>
        <b-nav-item href="#audience" @click.prevent="scrollIntoView">Аудитория</b-nav-item>
        <!-- <b-nav-item href="#plans" @click.prevent="scrollIntoView">Тарифы</b-nav-item> -->
        <b-nav-item href="#legal" @click.prevent="scrollIntoView">Закон о рекламе</b-nav-item>
        <!-- <b-nav-item href="#other" @click.prevent="scrollIntoView">Другие форматы рекламы</b-nav-item> -->
        <!-- <div class="main-links ml-auto mr-32 bg-white rounded-pill d-flex justify-content-between">
          <b-nav-item href="/" class="index-link main-link text-center">Заказчикам</b-nav-item>
          <b-nav-item href="/platform/" class="platform-link main-link text-center">Владельцам каналов</b-nav-item>
        </div> -->
      </b-navbar-nav>
      <b-sidebar id="sidebar-nav" ref="sidebar" v-model="showSidebar" is-nav right backdrop>
        <div class="d-flex flex-column h-100">
          <div class="px-16 mb-auto mx-auto d-flex h-100">
            <b-navbar-nav>
              <b-nav-item href="#pros" @click.prevent="scrollIntoView">Платформа</b-nav-item>
              <b-nav-item href="#audience" @click.prevent="scrollIntoView">Аудитория</b-nav-item>
              <!-- <b-nav-item href="#plans" @click.prevent="scrollIntoView">Тарифы</b-nav-item> -->
              <b-nav-item href="#legal" @click.prevent="scrollIntoView">Закон о рекламе</b-nav-item>
              <!-- <b-nav-item href="#other" @click.prevent="scrollIntoView">Другие форматы рекламы</b-nav-item> -->
              <!-- <div class="main-links mt-auto mb-32 bg-white rounded-pill d-flex justify-content-between">
                <b-nav-item href="/" class="index-link main-link text-center">Заказчикам</b-nav-item>
                <b-nav-item href="/platform/" class="platform-link main-link text-center">Владельцам каналов</b-nav-item>
              </div> -->
            </b-navbar-nav>
          </div>
          <div class="p-3 text-center">
            <a href="https://client.nativity.tech/login" class="rounded-pill btn btn-primary">Личный кабинет</a>
            <!-- <b-button class="rounded-pill" variant="dark" @click="currentForm = forms.seedForm; formModal = !formModal">
              Отправить запрос
            </b-button> -->
          </div>
        </div>
      </b-sidebar>

      <div class="ml-md-auto navbar-button">
        <a href="https://client.nativity.tech/login" class="rounded-pill btn btn-primary mr-2">Личный кабинет</a>
        <b-button class="rounded-pill" variant="dark" @click="currentForm = forms.seedForm; formModal = !formModal">
          Отправить запрос
        </b-button>
      </div>

      <b-navbar-toggle v-b-toggle.sidebar-nav target="sidebar-nav" class="border-0 text-dark p-0 navbar-navbar-toggler" />
      
    </b-navbar>
    <section id="hero" class="bg-hero">
      <div class="hero-bg-1 position-absolute"></div>
      <div class="hero-bg-2 position-absolute"></div>
      <div class="hero-bg-3 position-absolute"></div>
      <div class="hero-bg-around position-absolute">
        <nuxt-img src="/img/around.svg" class="mw-100"/>
      </div>
      <div class="hero-bg-tg position-absolute">
        <nuxt-img v-if="window.canUseWebP" format="webp" src="/img/tg_003.png" class='mw-100' />
        <img v-else src="/img/tg_003.png" class='mw-100' />
      </div>
      <div class="hero-bg-marble position-absolute">
        <nuxt-img v-if="window.canUseWebP" format="webp" src="/img/marble.png" class='mw-100' />
        <img v-else src="/img/marble.png" class='mw-100' />
      </div>
      <b-container fluid>
        <b-row>
          <b-col cols="12" >
            <div class="d-md-none hero-brand"><nuxt-img alt="Nativity" src="/img/blue_nativity.svg"/></div>
            <h1 class="text-white text-center">
              Nativity — платформа<br/><u>эффективной рекламы</u><br/>в лучших Telegram-каналах
            </h1>

            <p class="text-white text-center mx-auto ml-md-0 hero-description">
              Автоматизированные рекламные размещения с&nbsp;оплатой за&nbsp;просмотр<br/>в&nbsp;верифицированных каналах с&nbsp;соблюдением <span class="rounded-pill bg-white">Закона&nbsp;о&nbsp;рекламе</span>
            </p>
          </b-col>
          <b-col cols="12" md="4" class="d-flex">
            <div class="bg-white mx-auto mb-md-0 info">
              <div class="info-icon">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="8.18306" cy="7.89051" rx="7.93892" ry="7.89051" fill="white"/>
                  <path d="M8.18306 0.000140826C6.07756 0.000140826 4.0581 0.831423 2.56948 2.31128C1.08053 3.79095 0.244141 5.79807 0.244141 7.89058C0.244141 9.98309 1.08053 11.9903 2.56948 13.4699C4.05825 14.9497 6.0777 15.781 8.18306 15.781C10.2884 15.781 12.308 14.9497 13.7966 13.4699C15.2856 11.9902 16.122 9.98309 16.122 7.89058C16.122 6.5056 15.7552 5.1448 15.0583 3.94529C14.3615 2.74578 13.3593 1.74974 12.1525 1.05715C10.9456 0.364564 9.57641 0 8.18292 0L8.18306 0.000140826ZM8.92404 2.84864C9.69677 2.84864 9.92436 3.29575 9.92436 3.80598C9.92436 4.44244 9.41102 5.03175 8.53512 5.03175C7.80208 5.03175 7.45286 4.6661 7.47667 4.06121C7.47649 3.551 7.91841 2.84869 8.92409 2.84869L8.92404 2.84864ZM6.94187 12.625C6.41265 12.625 6.02628 12.3041 6.39677 10.9048L7.00279 8.41657C7.10856 8.01937 7.12443 7.85902 7.00279 7.85902C6.55828 7.96855 6.13592 8.15257 5.7538 8.40356L5.48909 7.9748C6.77517 6.90703 8.25453 6.28105 8.88692 6.28105C9.41614 6.28105 9.50347 6.90173 9.23894 7.85926L8.54559 10.4737C8.42118 10.9366 8.47415 11.0944 8.59857 11.0944V11.0942C9.03772 10.9975 9.44588 10.794 9.78683 10.5025L10.0859 10.9022C8.83415 12.1384 7.46849 12.625 6.94186 12.625L6.94187 12.625Z" fill="url(#paint0_linear_590_4295)"/>
                  <defs>
                    <linearGradient id="paint0_linear_590_4295" x1="16.122" y1="0" x2="-2.03311" y2="3.31705" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FCB950"/>
                      <stop offset="1" stop-color="#F19338"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <p class="text-center">
                Новый закон о&nbsp;рекламе в&nbsp;Telegram — обязательная маркировка и&nbsp;передача данных в&nbsp;ОРД
              </p>
            </div>
          </b-col>
          <b-col cols="12" md="4" class="d-flex">
            <b-button class="rounded-pill text-uppercase mx-auto my-md-auto" variant="dark" @click="currentForm = forms.seedForm; formModal = !formModal">
              Запустить рекламу
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="partners" class="partners">
      <b-container fluid>
        <b-row>
          <b-col cols="12" md="10" class="p-0 mx-md-auto">
            <h2 class="text-center mb-md-20">Рекламодатели</h2>
            <div v-if="!slidersInit" class="d-flex justify-content-between flex-wrap">
              <nuxt-img alt="Магнит" class="h-20" src="/img/partners/magnit.svg" />
              <nuxt-img alt="Сколково" class="h-30" src="/img/partners/sk.svg" />
              <!-- <nuxt-img alt="Битрикс24" class="h-20" src="/img/partners/bitrix.svg" /> -->
              <!-- <nuxt-img alt="Avon" class="h-20" src="/img/partners/avon.svg" /> -->
              <nuxt-img alt="Правительство Москвы" class="h-30" src="/img/partners/moscow.svg" />
              <nuxt-img alt="МТС" class="h-20" src="/img/partners/mts.svg" />
              <nuxt-img alt="Xiaomi" class="h-30" src="/img/partners/xiaomi.svg" />
              <nuxt-img alt="IU.ru" class="h-30" src="/img/partners/iu.svg" />
              <nuxt-img alt="Пятерочка" class="h-30" src="/img/partners/pyaterochka.svg" />
              <nuxt-img alt="Вкусвилл" class="h-20" src="/img/partners/vkusville.svg" />
              <nuxt-img alt="ВЭБ РФ" class="h-30" src="/img/partners/web.svg" />
              <nuxt-img alt="ВТБ" class="h-30" src="/img/partners/vtb.svg" />
              <nuxt-img alt="Worlds" class="h-20" src="/img/partners/worlds.svg" />
            </div>
            <vue-slick-carousel v-else v-show="slidersReady.partners" v-bind="partnersSliderSettings" ref="partnersSlider" @init="onSliderInit('partners')">
              <nuxt-img alt="Магнит" class="h-20" src="/img/partners/magnit.svg" />
              <nuxt-img alt="Сколково" class="h-30" src="/img/partners/sk.svg" />
              <!-- <nuxt-img alt="Битрикс24" class="h-20" src="/img/partners/bitrix.svg" /> -->
              <!-- <nuxt-img alt="Avon" class="h-20" src="/img/partners/avon.svg" /> -->
              <nuxt-img alt="Правительство Москвы" class="h-30" src="/img/partners/moscow.svg" />
              <nuxt-img alt="МТС" class="h-20" src="/img/partners/mts.svg" />
              <nuxt-img alt="Xiaomi" class="h-30" src="/img/partners/xiaomi.svg" />
              <nuxt-img alt="IU.ru" class="h-30" src="/img/partners/iu.svg" />
              <nuxt-img alt="Пятерочка" class="h-30" src="/img/partners/pyaterochka.svg" />
              <nuxt-img alt="Вкусвилл" class="h-20" src="/img/partners/vkusville.svg" />
              <nuxt-img alt="ВЭБ РФ" class="h-30" src="/img/partners/web.svg" />
              <nuxt-img alt="ВТБ" class="h-30" src="/img/partners/vtb.svg" />
              <nuxt-img alt="Worlds" class="h-20" src="/img/partners/worlds.svg" />
            </vue-slick-carousel>
            <div v-if="slidersInit && !slidersReady.partners" class="m-auto d-flex mb-10 mt-10 justify-content-center"><b-spinner class="text-primary"></b-spinner><span class="sr-only">Загружаем партнеров...</span></div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="pros" class="pros">
      <b-container fluid>
        <b-row class="justify-content-between">
          <b-col cols="12">
            <h2 class="text-center mb-md-30">Преимущества рекламы <br class="d-md-none"/>на платформе</h2>
          </b-col>
          <b-col cols="6" md="auto" class="pro pro-1 d-flex flex-column pr-2 pr-md-0">
          <nuxt-img src="/img/pros/tg_4.svg" />
          <h3>Проверенные каналы</h3>
            <p class="fw-light mb-auto">
              2 000+ верифицированных Telegram-каналов
            </p>
            <a class="rounded-pill text-black position-relative" href="#channels">
              <u>Примеры каналов</u>
              <i class="rounded-pill ml-auto"></i>
            </a>
          </b-col>
          <b-col cols="6" md="auto" class="pro pro-2 d-flex flex-column pl-2 p-md-0">
          <nuxt-img src="/img/pros/check.svg" />
          <h3>Соблюдение Закона&nbsp;о&nbsp;рекламе</h3>
            <p class="fw-light mb-auto">
              Автоматизированное получение токена и&nbsp;сдача отчетности по&nbsp;кампаниям
            </p>
            <a class="rounded-pill text-black position-relative" href="#legal">
              <u>Схема&nbsp;взаимодействия</u>
              <i class="rounded-pill ml-auto"></i>
            </a>
          </b-col>
          <b-col cols="6" md="auto" class="pro pro-3 d-flex flex-column pr-2 p-md-0">
          <nuxt-img src="/img/pros/card.svg" />
          <h3>Модель закупки CPV</h3>
            <p class="fw-light mb-auto">
              Оплата только за контакт с&nbsp;клиентом, а&nbsp;не&nbsp;слепые размещения в&nbsp;каналах
            </p>
            <a class="rounded-pill text-black position-relative" href="#calculator">
              <u>Автоматический медиаплан</u>
              <i class="rounded-pill ml-auto"></i>
            </a>
          </b-col>
          <b-col cols="6" md="auto" class="pro pro-4 d-flex flex-column pl-2 pl-md-0">
            <nuxt-img src="/img/pros/plot.svg" />
            <h3>
              Глубокая аналитика
            </h3>
            <p class="fw-light mb-auto">
              Прогноз показателей и&nbsp;данные по&nbsp;аудиториям и&nbsp;контактам
            </p>
            <a class="rounded-pill text-black position-relative" href="#analytics">
              <u>Данные <br class="d-md-none"/>по&nbsp;кампаниям</u>
              <i class="rounded-pill ml-auto"></i>
            </a>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="telegram" class="telegram">
      <b-container fluid>
        <b-row>
          <b-col cols="12">
            <h2 class="text-center mb-md-18">
              Реклама в&nbsp;Telegram на&nbsp;платформе Nativity
            </h2>
          </b-col>
          <b-col cols="12" md="8" order-md="2">
            <div class="telegram-card telegram-card-blue">
              <p class="mb-0 fs-md-20"><span class="fs-md-32">800+ млн.</span><br/>рекламных просмотров ежемесячно</p>
            </div>
            <nuxt-img v-if="window.canUseWebP" format="webp" class="tg_5" src="/img/telegram/tg_5.png"/>
            <img v-else class="tg_5" src="/img/telegram/tg_5.png" />
            <div class="telegram-card telegram-card-nm">
              <nuxt-img v-if="window.canUseWebP"  format="webp" alt="канал Мысли-НеМысли" class="w-100 mw-100" src="/img/telegram/nm.png"/>
              <img v-else  alt="канал Мысли-НеМысли" class="w-100 mw-100" src="/img/telegram/nm.png" />
            </div>
            <div class="telegram-card telegram-card-al">
              <nuxt-img v-if="window.canUseWebP" format="webp" alt="канал Артемия Лебедева" class="w-100 mw-100" src="/img/telegram/al.png"/>
              <img v-else alt="канал Артемия Лебедева" class="w-100 mw-100" src="/img/telegram/al.png"/>
            </div>
            <div class="telegram-card telegram-card-bnk">
              <nuxt-img v-if="window.canUseWebP" format="webp" alt="канал Банкста" class="w-100 mw-100" src="/img/telegram/bnk.png"/>
              <img v-else alt="канал Банкста" class="w-100 mw-100" src="/img/telegram/bnk.png" />
            </div>
            <div class="telegram-card telegram-card-xpl">
              <nuxt-img v-if="window.canUseWebP"  format="webp" alt="канал Эксплойт" class="w-100 mw-100" src="/img/telegram/xpl.png"/>
              <img v-else alt="канал Эксплойт" class="w-100 mw-100" src="/img/telegram/xpl.png" />
            </div>
          </b-col>
          <b-col cols="12" md="4" order-md="1" class="d-flex flex-column">
            <div class="telegram-card bg-white">
              <h3>Быстрый запуск</h3>
              <p>
                рекламная кампания за&nbsp;24&nbsp;часа
              </p>
            </div>
            <div class="telegram-card bg-white">
              <h3>Официально / Эдо</h3>
              <p>
                оплата по&nbsp;счету, договор и&nbsp;все закрывающие документы по&nbsp;ЭДО
              </p>
            </div>
            <div class="telegram-card bg-white">
              <h3>Точный таргетинг</h3>
              <p>
                максимальный охват именно вашей целевой аудитории
              </p>
            </div>
            <div class="telegram-card bg-white">
              <h3>Закон о рекламе</h3>
              <p>
                соблюдение нового закона о&nbsp;рекламе и&nbsp;сдача отчетности
              </p>
            </div>
            <nuxt-img v-if="window.canUseWebP"  format="webp" class="tg_8" src="/img/tg_008.png" />
            <img v-else class="tg_8" src="/img/tg_008.png" />
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="convinience" class="convinience">
      <b-container fluid>
        <b-row>
          <b-col cols="12" md="10" class="m-auto">
            <h2 class="text-center">
              Удобный запуск рекламы&nbsp;за&nbsp;24&nbsp;часа
            </h2>
            <p class="text-center section-info mb-0">
              Запустить рекламу <b class="text-primary">самостоятельно</b> или&nbsp;запросить <b class="text-primary">персональное&nbsp;ведение</b>
            </p>
          </b-col>
          <b-col cols="12" class="p-0">
            <div v-if="!slidersInit" class="d-flex justify-content-between mt-76">
              <div class="convinience-slide">
                <div class="d-flex card-light">
                  <div class="convinience-inner inner-1 bg-primary"><b class="text-white">РЕГИСТРАЦИЯ</b></div>
                </div>
                <p class="text-center"><b>Регистрация</b> на&nbsp;платформе или&nbsp;заявка на&nbsp;ведение рекламы</p>
                <div class="next">
                  <nuxt-img src="/img/right-round-black.svg" class="w-100"/>
                </div>
              </div>
              <div class="convinience-slide">
                <div class="d-flex card-light">
                  <div class="convinience-inner inner-2">
                    <nuxt-img src="/img/convinience/sl21.svg"/>
                    <nuxt-img src="/img/convinience/sl22.svg"/>
                    <nuxt-img src="/img/convinience/sl23.svg"/>
                  </div>
                </div>
                <p class="text-center"><b>Выбор параметров рекламы</b> —&nbsp;аудитория, просмотры, ставки и&nbsp;бюджет кампании</p>
                <div class="next">
                  <nuxt-img src="/img/right-round-black.svg" class="w-100"/>
                </div>
              </div>
              <div class="convinience-slide">
                <div class="d-flex card-light">
                  <div class="convinience-inner inner-3">
                    <nuxt-img src="/img/convinience/sl3.svg"/>
                    <b>Получение токена</b>
                  </div>
                </div>
                <p class="text-center"><b>Загрузка креативов</b> для&nbsp;получения токенов или&nbsp;запрос на&nbsp;разработку коммуникации</p>
                <div class="next">
                  <nuxt-img src="/img/right-round-black.svg" class="w-100"/>
                </div>
              </div>
              <div class="convinience-slide">
                <div class="d-flex card-light">
                  <div class="convinience-inner inner-4">
                    <nuxt-img src="/img/convinience/sl4.svg"/>
                  </div>
                </div>
                <p class="text-center"><b>Пополнение рекламного кабинета</b> и&nbsp;получение счета, медиаплана и&nbsp;договора по&nbsp;ЭДО</p>
                <div class="next">
                  <nuxt-img src="/img/right-round-black.svg" class="w-100"/>
                </div>
              </div>
              <div class="convinience-slide">
                <div class="d-flex card-light">
                  <div class="convinience-inner inner-5">
                    <nuxt-img src="/img/convinience/sl5.svg"/>
                  </div>
                </div>
                <p class="text-center"><b>Запуск рекламы</b>  на аудиторию в&nbsp;проверенных Telegram-каналах и&nbsp;оплата только за&nbsp;просмотры</p>
              </div>
            </div>
            <vue-slick-carousel v-else v-show="slidersReady.convinience" v-bind="convinienceSliderSettings" ref="convinienceSlider" @init="onSliderInit('convinience')">
              <div class="convinience-slide">
                <div class="d-flex card-light">
                  <div class="convinience-inner inner-1 bg-primary"><b class="text-white">РЕГИСТРАЦИЯ</b></div>
                </div>
                <p class="text-center"><b>Регистрация</b> в&nbsp;сервисе или&nbsp;заявка на&nbsp;ведение рекламы</p>
                <div class="next" @click="nextConvinienceSlide">
                  <nuxt-img src="/img/right-round-black.svg" class="w-100"/>
                </div>
              </div>
              <div class="convinience-slide">
                <div class="d-flex card-light">
                  <div class="convinience-inner inner-2">
                    <nuxt-img src="/img/convinience/sl21.svg"/>
                    <nuxt-img src="/img/convinience/sl22.svg"/>
                    <nuxt-img src="/img/convinience/sl23.svg"/>
                  </div>
                </div>
                <p class="text-center"><b>Выбор параметров рекламы</b> —&nbsp;аудитория, просмотры, ставки и&nbsp;бюджет кампании</p>
                <div class="next" @click="nextConvinienceSlide">
                  <nuxt-img src="/img/right-round-black.svg" class="w-100"/>
                </div>
              </div>
              <div class="convinience-slide">
                <div class="d-flex card-light">
                  <div class="convinience-inner inner-3">
                    <nuxt-img src="/img/convinience/sl3.svg"/>
                    <b>Получение токена</b>
                  </div>
                </div>
                <p class="text-center"><b>Загрузка креативов</b> для&nbsp;получения токенов или&nbsp;запрос на&nbsp;разработку коммуникации</p>
                <div class="next" @click="nextConvinienceSlide">
                  <nuxt-img src="/img/right-round-black.svg" class="w-100"/>
                </div>
              </div>
              <div class="convinience-slide">
                <div class="d-flex card-light">
                  <div class="convinience-inner inner-4">
                    <nuxt-img src="/img/convinience/sl4.svg"/>
                  </div>
                </div>
                <p class="text-center"><b>Пополнение рекламного кабинета</b> и&nbsp;получение счета, медиаплана и&nbsp;договора по&nbsp;ЭДО</p>
                <div class="next" @click="nextConvinienceSlide">
                  <nuxt-img src="/img/right-round-black.svg" class="w-100"/>
                </div>
              </div>
              <div class="convinience-slide">
                <div class="d-flex card-light">
                  <div class="convinience-inner inner-5">
                    <nuxt-img src="/img/convinience/sl5.svg"/>
                  </div>
                </div>
                <p class="text-center"><b>Запуск рекламы</b> на&nbsp;аудиторию проверенных Telegram-каналах и&nbsp;оплата только за&nbsp;просмотры</p>
              </div>
            </vue-slick-carousel>
            <div v-if="slidersInit && !slidersReady.convinience" class="m-auto d-flex mb-10 mt-10 justify-content-center"><b-spinner class="text-primary"></b-spinner><span class="sr-only">Загружаем преимущества...</span></div>
          </b-col>
          <b-col cols="12" class="d-flex">
            <b-button class="rounded-pill text-uppercase mx-auto mt-md-64" variant="dark" @click="currentForm = forms.seedForm; formModal = !formModal">
              Оставить заявку
            </b-button>
            <nuxt-img v-if="window.canUseWebP"  format="webp" class="tg_8" src="/img/tg_008.png"/>
            <img v-else class="tg_8" src="/img/tg_008.png"/>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="audience" class="audience">
      <b-container fluid>
        <b-row>
          <b-col cols="12" md="10" class="m-md-auto">
            <h2 class="text-center">
              Готовые аудитории<br class="d-md-none"/> и&nbsp;интересы
            </h2>
            <p class="text-center section-info">
              Мы обеспечиваем фильтрацию просмотров и&nbsp;трафика <b class="text-primary">без ботов и&nbsp;накруток.</b>
            </p>
            <p class="text-center section-info mb-0 mb-md-32">
              Постоянная аналитика мест размещений и&nbsp;<b class="text-primary">премиум-каналы.</b>
            </p>
          </b-col>
          <b-col cols="12" class="p-0 mb-md-8">
            <div v-if="!slidersInit" class="d-flex justify-content-between">
              <div class="audience-slide">
                <div class="d-flex audience-inner inner-1">
                  <nuxt-img v-if="window.canUseWebP" format="webp" src="/img/audience/au1.png"/>
                  <img v-else src="/img/audience/au1.png"/>
                  <p>Бизнес<br/>и&nbsp;менеджмент</p>
                </div>
              </div>
              <div class="audience-slide">
                <div class="d-flex audience-inner inner-2">
                  <nuxt-img v-if="window.canUseWebP" format="webp" src="/img/audience/au2.png"/>
                  <img v-else src="/img/audience/au2.png"/>
                  <p>Технологии,<br/>IT и&nbsp;стартапы</p>
                </div>
              </div>
              <div class="audience-slide">
                <div class="d-flex audience-inner inner-3">
                  <nuxt-img v-if="window.canUseWebP"  format="webp" src="/img/audience/au3.png"/>
                  <img v-else src="/img/audience/au3.png"/>
                  <p>Новости<br/>и&nbsp;политика</p>
                </div>
              </div>
              <div class="audience-slide">
                <div class="d-flex audience-inner inner-4">
                  <nuxt-img v-if="window.canUseWebP"  format="webp" src="/img/audience/au4.png"/>
                  <img v-else src="/img/audience/au4.png"/>
                  <p>Авторские<br/>топ-каналы</p>
                </div>
              </div>
              <div class="audience-slide">
                <div class="d-flex audience-inner inner-5">
                  <nuxt-img v-if="window.canUseWebP"  format="webp" src="/img/audience/au5.png"/>
                  <img v-else src="/img/audience/au5.png"/>
                  <p>Медицина<br/>и&nbsp;уход за собой</p>
                </div>
              </div>
              <div class="audience-slide">
                <div class="d-flex audience-inner inner-6">
                  <nuxt-img v-if="window.canUseWebP"  format="webp" src="/img/audience/au6.png"/>
                  <img v-else src="/img/audience/au6.png"/>
                  <p>Финансы<br/>и&nbsp;инвестиции</p>
                </div>
              </div>
              <div class="audience-slide">
                <div class="d-flex audience-inner inner-7">
                  <nuxt-img v-if="window.canUseWebP"  format="webp" src="/img/audience/au7.png"/>
                  <img v-else src="/img/audience/au7.png"/>
                  <p>Недвижимость</p>
                </div>
              </div>
            </div>
            <vue-slick-carousel v-else v-show="slidersReady.audience" v-bind="audienceSliderSettings" ref="audienceSlider" @init="onSliderInit('audience')">
              <div class="audience-slide">
                <div class="d-flex audience-inner inner-1">
                  <nuxt-img v-if="window.canUseWebP"  format="webp" src="/img/audience/au1.png"/>
                  <img v-else src="/img/audience/au1.png"/>
                  <p>Бизнес<br/>и&nbsp;менеджмент</p>
                </div>
              </div>
              <div class="audience-slide">
                <div class="d-flex audience-inner inner-2">
                  <nuxt-img v-if="window.canUseWebP"  format="webp" src="/img/audience/au2.png"/>
                  <img v-else src="/img/audience/au2.png"/>
                  <p>Технологии,<br/>IT и&nbsp;стартапы</p>
                </div>
              </div>
              <div class="audience-slide">
                <div class="d-flex audience-inner inner-3">
                  <nuxt-img v-if="window.canUseWebP"  format="webp" src="/img/audience/au3.png"/>
                  <img v-else src="/img/audience/au3.png"/>
                  <p>Новости<br/>и&nbsp;политика</p>
                </div>
              </div>
              <div class="audience-slide">
                <div class="d-flex audience-inner inner-4">
                  <nuxt-img v-if="window.canUseWebP"  format="webp" src="/img/audience/au4.png"/>
                  <img v-else src="/img/audience/au4.png"/>
                  <p>Авторские<br/>топ-каналы</p>
                </div>
              </div>
              <div class="audience-slide">
                <div class="d-flex audience-inner inner-5">
                  <nuxt-img v-if="window.canUseWebP"  format="webp" src="/img/audience/au5.png"/>
                  <img v-else src="/img/audience/au5.png"/>
                  <p>Медицина<br/>и&nbsp;уход за собой</p>
                </div>
              </div>
              <div class="audience-slide">
                <div class="d-flex audience-inner inner-6">
                  <nuxt-img v-if="window.canUseWebP" format="webp" src="/img/audience/au6.png"/>
                  <img v-else src="/img/audience/au6.png"/>
                  <p>Финансы<br/>и&nbsp;инвестиции</p>
                </div>
              </div>
              <div class="audience-slide">
                <div class="d-flex audience-inner inner-7">
                  <nuxt-img v-if="window.canUseWebP"  format="webp" src="/img/audience/au7.png"/>
                  <img v-else src="/img/audience/au7.png"/>
                  <p>Недвижимость</p>
                </div>
              </div>
            </vue-slick-carousel>
            <div v-if="slidersInit && !slidersReady.audience" class="m-auto d-flex mb-10 mt-10 justify-content-center"><b-spinner class="text-primary"></b-spinner><span class="sr-only">Загружаем аудитории...</span></div>
          </b-col>
          <b-col cols="12">
            <p class="text-md-right mb-md-30"><span>+75</span> сегментов аудитории</p>
          </b-col>
          <b-col cols="12" class="d-flex">
            <b-button class="rounded-pill text-uppercase mx-auto" variant="dark" @click="currentForm = forms.seedForm; formModal = !formModal">
              Оставить заявку
            </b-button>
            <nuxt-img v-if="window.canUseWebP" format="webp" class="tg_3" src="/img/tg_003.png"/>
            <img v-else class="tg_3" src="/img/tg_003.png"/>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="channels" class="channels">
      <div class="channels-bg-1"></div>
      <div class="channels-bg-2"></div>
      <b-container fluid>
        <b-row>
          <b-col cols="12" md="10" class="m-md-auto">
            <h2 class="text-center">
              Премиум-каналы
            </h2>
            <p class="text-center section-info mb-md-48">
              Аудитория <span class="white-pill">2 000 +</span> верифицированных Telegram-каналов
            </p>
          </b-col>          
          <b-col cols="12" md="11" class="p-0 mx-md-auto mb-md-36">
            <div v-if="!slidersInit" class="row channels-plain">
              <b-col v-for="(channel, index) in channels" :key="channel.title" cols="2" class="channels-slide">
                <div :class="['d-flex', 'flex-column', 'channels-inner', 'inner-' + index]">
                  <nuxt-img v-if="window.canUseWebP" format="webp" :src="'/img/channels/' + channel.class + '.png'"/>
                  <img v-else :src="'/img/channels/' + channel.class + '.png'"/>
                  <p class="channels-name">{{channel.title}}</p>
                  <p class="channel-subs">{{channel.subs}}</p>
                  <p class="channel-views">{{channel.views}}</p>
                  <p class="channel-er"><b>{{ channel.er}}</b></p>
                </div>
              </b-col>
            </div>
            <vue-slick-carousel v-else v-show="slidersReady.channels" v-bind="channelsSliderSettings" ref="channelsSlider" @init="onSliderInit('channels')">
              <div v-for="(channel, index) in channels" :key="channel.title" class="channels-slide">
                <div :class="['d-flex', 'flex-column', 'channels-inner', 'inner-' + index]">
                  <nuxt-img v-if="window.canUseWebP" format="webp" :src="'/img/channels/' + channel.class + '.png'"/>
                  <img v-else :src="'/img/channels/' + channel.class + '.png'"/>
                  <p class="channels-name">{{channel.title}}</p>
                  <p class="channel-subs">{{channel.subs}}</p>
                  <p class="channel-views">{{channel.views}}</p>
                  <p class="channel-er"><b>{{ channel.er}}</b></p>
                </div>
              </div>
            </vue-slick-carousel>
            <div v-if="slidersInit && !slidersReady.channels" class="m-auto d-flex mb-10 mt-10 justify-content-center"><b-spinner class="text-primary"></b-spinner><span class="sr-only">Загружаем каналы...</span></div>
          </b-col>
          <b-col cols="12" class="d-flex">
            <b-button class="rounded-pill text-uppercase mx-auto" variant="dark" @click="currentForm = forms.seedForm; formModal = !formModal">
              Оставить заявку
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="management" class="management">
      <b-container fluid>
        <b-row>
          <b-col cols="12" md="10" class="mx-md-auto">
            <h2 class="text-center mb-md-36">
              Ведение кампании в&nbsp;Telegram
            </h2>
          </b-col>          
          <b-col cols="12" md="5" offset-md="1" class="pr-md-42">
            <div class="management-card d-flex flex-column mb-md-0">
              <h3 class="text-center fs-md-32">Без платформы</h3>
              <div class="management-card-inner">
                <p>Договоренности с&nbsp;каждым<br/>каналом "вслепую"</p>
              </div>
              <div class="management-card-inner">
                <p>Оплата за&nbsp;размещения без&nbsp;гарантии просмотров</p>
              </div>
              <div class="management-card-inner">
                <p>Риски несоблюдения закона о&nbsp;рекламе и&nbsp;получения ущерба</p>
              </div>
              <div class="management-card-inner">
                <p>Некачественная реклама: боты, накрутки и&nbsp;неживая аудитория</p>
              </div>
              <div class="management-card-inner mb-md-44">
                <p>Отсутствие прямых эксклюзивных договоренностей с&nbsp;каналами</p>
              </div>
              <p class="text-center">
                Трудоемкий процесс без гарантии получение результата
              </p>
            </div>
          </b-col>      
          <b-col cols="12" md="5" class="pl-md-42">
            <div class="management-card pro d-flex flex-column mb-md-0">
              <h3 class="text-center fs-md-32">Платформа Nativity</h3>
              <div class="management-card-inner">
                <p>Быстрый запуск рекламы в&nbsp;проверенных каналах</p>
              </div>
              <div class="management-card-inner">
                <p>Модель оплаты CPV только за&nbsp;просмотры, а&nbsp;не&nbsp;публикации</p>
              </div>
              <div class="management-card-inner">
                <p>Единый договор и&nbsp;гарантия соблюдения закона о&nbsp;рекламе</p>
              </div>
              <div class="management-card-inner">
                <p>2000+ Telegram-каналов и&nbsp;премиум-авторов на&nbsp;платформе</p>
              </div>
              <div class="management-card-inner mb-md-44">
                <p>Возможность ведения кампании экспертами Nativity</p>
              </div>
              <b-button class="rounded-pill text-uppercase mx-auto" variant="dark" @click="currentForm = forms.seedForm; formModal = !formModal">
                Запустить рекламу
              </b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- <section id="plans" class="plans">
      <b-container fluid>
        <b-row>
          <b-col cols="12" md="10" class="mx-md-auto">
            <h2 class="text-center">
              Персональное ведение рекламы
            </h2>
            <p class="text-center section-info">
              Наши специалисты возьмут на&nbsp;себя весь <b class="text-primary">цикл рекламной кампании</b> от формирования медиаплана и разработки коммуникации до анализа выходов.
            </p>
            <p class="text-center section-info mb-0 mb-md-18">
              Это <b class="text-primary">бесплатно</b>, вы платите только за целевые просмотры.
            </p>
          </b-col>
          <b-col cols="12" class="p-0">
            <div v-if="!slidersInit" class="d-flex justify-content-between dt-track h-100">
              <div v-for="(plan, index) in plans" :key="plan.class" class="plans-slide h-100">
                <div :class="['d-flex', 'flex-column', 'bg-white', 'plans-inner', 'inner-' + index, 'plan-' + plan.class]">
                  <div class="plan-title" :style="'background:linear-gradient(260deg, ' + plan.colors[0] + ' 0%, ' + plan.colors[1] + ' 100%);'"><h3 class="text-white text-center">{{plan.title}}</h3></div>
                  <p class="plan-budget text-center">Бюджет от<br/><b>{{new Intl.NumberFormat('ru', { useGrouping: true }).format(plan.budget)}} ₽</b></p>
                  < !-- eslint-disable vue/no-v-html 
                  <p class="plan-descr text-center" v-html="plan.descr" />
                  < !-- eslint-enable 
                  <hr>
                  <ul class="plan-points list-unstyled">
                    <template v-for="(point, i) in plan.sp">
                      < !-- eslint-disable vue/no-v-html 
                      <li :key="i" :class="'point-' + i" v-html="preparePoint(point, plan.colors[1])" />
                      < !-- eslint-enable 
                    </template>
                  </ul>
                  <b-button class="rounded-pill text-uppercase mx-auto mt-md-auto fs-14" variant="dark" @click="currentForm = forms.planForm; formValues.plan = plan.title; minBudget = plan.budget; formModal = !formModal">
                    Оставить заявку
                  </b-button>
                </div>
              </div>
            </div>
            <vue-slick-carousel v-else v-show="slidersReady.plans" v-bind="plansSliderSettings" ref="plansSlider" @init="onSliderInit('plans')">
              <div v-for="(plan, index) in plans" :key="plan.class" class="plans-slide">
                <div :class="['d-flex', 'flex-column', 'bg-white', 'plans-inner', 'inner-' + index, 'plan-' + plan.class]">
                  <div class="plan-title" :style="'background:linear-gradient(260deg, ' + plan.colors[0] + ' 0%, ' + plan.colors[1] + ' 100%);'"><h3 class="text-white text-center">{{plan.title}}</h3></div>
                  <p class="plan-budget text-center">Бюджет от<br/><b>{{new Intl.NumberFormat('ru', { useGrouping: true }).format(plan.budget)}} ₽</b></p>
                  < !-- eslint-disable vue/no-v-html 
                  <p class="plan-descr text-center" v-html="plan.descr" />
                  < !-- eslint-enable 
                  
                  <hr>
                  <ul class="plan-points list-unstyled">
                    <template v-for="(point, i) in plan.sp">
                      < !-- eslint-disable vue/no-v-html 
                      <li :key="i" :class="'point-' + i" v-html="preparePoint(point, plan.colors[1])" />
                      < !-- eslint-enable 
                    </template>
                  </ul>
                  <b-button class="rounded-pill text-uppercase mx-auto mt-md-auto" variant="dark" @click="currentForm = forms.planForm; formValues.plan = plan.title; minBudget = plan.budget; formModal = !formModal">
                    Оставить заявку
                  </b-button>
                </div>
              </div>
            </vue-slick-carousel>
            <div v-if="slidersInit && !slidersReady.plans" class="m-auto d-flex mb-10 mt-10 justify-content-center"><b-spinner class="text-primary"></b-spinner><span class="sr-only">Загружаем тарифы...</span></div>
          </b-col>
          <p class="fs-12 text-center mx-auto mb-64 mb-md-0">* — Специальные возможности обсуждаются персонально</p>
        </b-row>
      </b-container>
      <div class="plans-bg-1 d-md-none"></div>
      <div class="plans-bg-2 d-md-none"></div>
      <div class="plans-bg-3 d-md-none"></div>
    </section> -->
    <section id="analytics" class="analytics">
      <b-container fluid>
        <b-row>
          <b-col cols="12" md="10" class="mx-md-auto">
            <h2 class="text-center">
              Аналитика каналов и&nbsp;размещений
            </h2>
            <p class="text-center section-info mb-20 mb-md-38">
              Детальная и&nbsp;сквозная аналитика по&nbsp;кросс-пересечениям аудитории
            </p>
          </b-col>
          <b-col cols="12" md="11" class="mx-md-auto">
            <div class="analytics-grid">
              <div class="vio bg-white">
                <h3>Выходы и&nbsp;охваты</h3>
                  <nuxt-img src="/img/analytics/vio.svg" />
              </div>
              <div class="va text-md-left">
                <b-col cols="12" class="bg-white">
                  <p class="text-primary va-views fs-md-26 mb-4">1 000 320</p>
                  <p class="fs-md-16">Просмотры</p>
                </b-col>
                <b-col cols="12" class="bg-white">
                  <p class="text-primary va-posts fs-md-26 mb-4">25</p>
                  <p class="fs-md-16">Размещения</p>
                </b-col>
                <b-col cols="12" class="bg-white">
                  <p class="text-primary va-er fs-md-26 mb-4">32.8%</p>
                  <p class="fs-md-16">Вовлеченость, ER</p>
                </b-col>
                <b-col cols="12" class="bg-white">
                  <p class="text-primary va-cost fs-md-26 mb-4">2.0₽</p>
                  <p class="fs-md-16">Стоимость просмотра</p>
                </b-col>
                <b-col cols="12" class="bg-white">
                  <p class="text-primary fs-md-26 mb-4">2 000 000₽</p>
                  <p class="fs-md-16">Бюджет кампании</p>
                </b-col>
              </div>
              <div class="audi bg-white">
                <h3 class="text-center">Аудитория</h3>
                  <nuxt-img src="/img/analytics/audi.svg" />
              </div>
              <div class="chann bg-white">
                <h3 class="text-center">Интересы / каналы</h3>
                  <nuxt-img src="/img/analytics/chann.svg" />
              </div>
              <div class="place bg-white">
                <h3>Места размещений</h3>
                <b-row>
                  <b-col  cols="6" offset="6" class="place-header d-flex">
                    <div class="text-center">
                      <nuxt-img src="/img/subs.svg"/>
                      <p class="text-primary mb-0">подписчики</p>
                    </div>
                    <div class="text-center">
                      <nuxt-img src="/img/views.svg"/>
                      <p class="text-primary mb-0">просмотры</p>
                    </div>
                    <div class="text-center">
                      <nuxt-img src="/img/er.svg"/>
                      <p class="text-primary mb-0">вовлеченность</p>
                    </div>
                  </b-col>
                </b-row>
                <b-row v-for="place in analChannels" :key="place.class" :class="[ 'place-' + place.class, 'place-channel', 'd-flex']" >
                  <b-col cols="6" class="d-flex pr-0">
                    <div class="place-channel-ava">
                      <nuxt-img v-if="window.canUseWebP" format="webp" :src="'/img/analytics/' + place.class + '.png'" />
                      <img v-else :src="'/img/analytics/' + place.class + '.png'"/>
                    </div>
                    <div class="place-channel-user">
                      <!-- eslint-disable vue/no-v-html -->
                      <p class="text-primary mb-0"><b v-html="place.user" /></p>
                      <p class="mb-0" v-html="place.title" />
                      <!-- eslint-enable -->
                    </div>
                  </b-col>
                  <b-col cols="6" class="d-flex">
                    <div class="text-center"><span>{{place.subs}}</span></div>
                    <div class="text-center"><span>{{place.views}}</span></div>
                    <div class="text-center"><span>{{place.er}}</span></div>
                  </b-col>
                </b-row>
                <div><nuxt-img src="/img/svod.svg" /><u class="text-primary">Смотреть полную сводку</u></div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="calculator" class="calculator">
      <b-container fluid>
        <b-row>
          <b-col cols="12" md="10" class="mx-md-auto">
            <h2 class="text-center">
              Прогноз охвата и&nbsp;стоимости
            </h2>
            <p class="text-center section-info mb-0 mb-md-8">
              Рассчитайте количество целевых просмотров в&nbsp;зависимости от&nbsp;бюджета, аудитории и&nbsp;предельной ставки за&nbsp;просмотр*
            </p>
          </b-col>
          <b-col cols="12" md="8" class="mx-md-auto">
            <div class="bg-white">
              <b-row>
                <b-col v-if="calcChannel" cols="12" md="6" class="pr-md-0">
                  <label for="plan-cat">Аудитория и тематика</label>
                  <b-form-select id="plan-cat" v-model="calcAu" class="mb-md-24" :options="calcOptions" value-field="cat" text-field="cat" name="plan-cat" @input="changeAudience(calcAu)"/>
                  <label for="plan-cpv">Стоимость просмотра</label>
                  <div class="plan-legend">
                    <b class="plan-cpv-min">0.5</b>
                    <span class="plan-cpv-tooltip text-primary" @click="calcCpv = calcChannel.betterCpv"><b>{{calcCpv}} ₽</b><b v-if="calcCpv == calcChannel.betterCpv"> — Рекомендованная</b></span>
                    <b class="plan-cpv-max">10</b>
                  </div>
                  <b-form-input id="plan-cpv" v-model="calcCpv" type="range" min="0.5" max="10" step="0.5"/>
                  <p v-if="calcCpv != calcChannel.betterCpv" tabindex="0" role="button" class="form-text text-primary better-cpv mb-md-30" @click="calcCpv = calcChannel.betterCpv">Установить рекомендованную</p>
                  <label for="plan-budget">Бюджет кампании</label>
                  <div class="plan-legend">
                    <b class="plan-budget-min">{{minBudgetReady}}</b>
                    <b class="plan-current-budget text-primary">{{new Intl.NumberFormat('ru', { useGrouping: true }).format(calcBudget)}} ₽</b>
                    <b class="plan-budget-max">30 000 000</b>
                  </div>
                  <b-form-input id="plan-budget" v-model="calcBudget" type="range" :min="minBudget" max="30000000" step="50000" @input="formValues.budget = calcBudget"/>
                </b-col>
                <b-col cols="12" md="6" class="d-flex flex-column">
                  <div class="d-flex flex-column pl-md-56">
                    <label class="mb-md-0">Количество просмотров</label>
                    <p class="calc-result mb-md-8">{{calcViewsReady}}</p>
                    <label>Плановые показатели</label>
                    <!-- <p class="mb-md-4"><span class="plan-result">{{calcPosts.min}} — {{calcPosts.max}} </span><span>размещений&nbsp;в&nbsp;каналах</span></p> -->
                    <p class="mb-md-4"><span class="plan-result">{{calcCpvReady}} ₽ </span><span>стоимость&nbsp;просмотра&nbsp;(CPV)</span></p>
                    <p class="mb-md-4"><span class="plan-result">{{new Intl.NumberFormat('ru', { useGrouping: true }).format(calcBudget)}} ₽ </span><span>бюджет&nbsp;кампании</span></p>
                  </div>
                  <b-button class="rounded-pill text-uppercase mx-auto mt-auto" variant="dark" @click="currentForm = forms.seedForm; formModal = !formModal">
                    Запросить медиаплан
                  </b-button>
                </b-col>
              </b-row>
            </div>
            <p class="fs-12 text-center mt-32">* — Не является публичной офертой</p>
          </b-col>
        </b-row>
      </b-container>
      <div class="calculator-bg-1 position-absolute"></div>
      <div class="calculator-bg-2 position-absolute"></div>
      <div class="calculator-bg-3 position-absolute"></div>
      <div class="calculator-bg-tg position-absolute"></div>
    </section>
    <!-- <section id="special" class="special">
      <b-container fluid>
        <b-row>
          <b-col cols="12" md="10" class="mx-md-auto">
            <h2 class="text-center">
              Специальные условия
            </h2>
            <p class="text-center section-info">
              При комплексном размещении действуют специальные условия для&nbsp;премиум-каналов
            </p>
          </b-col>
          <b-col cols="12" md="4" class="mb-md-22">
            <div class="bg-white d-flex flex-column align-items-center">
              <nuxt-img v-if="window.canUseWebP" format="webp" alt="лого канала Артемий Лебедев" src="/img/channels/al.png" />
              <img v-else alt="лого канала Артемий Лебедев" src="/img/channels/al.png"/>
              <p class="special-name">Артемий Лебедев</p>
              <div>
                <p class="special-subs">372 000</p>
                <p class="special-views">200 000 +</p>
                <p class="special-er"><b>ER — 56%</b></p>
              </div>
              < !-- <p class="fs-12 mt-auto mb-0"><b>260 000 ₽ / за размещение</b></p> 
              <p class="special-cpv mt-auto">CPV 1.00 ₽</p>
              <p class="special-guarantee">гарантия оплаты <b>только за&nbsp;просмотры</b></p>
            </div>
          </b-col>
          <b-col cols="12" md="4" class="mb-md-22">
            <div class="bg-white d-flex flex-column align-items-center">
              <nuxt-img v-if="window.canUseWebP" format="webp" alt="лого канала Wylsacom Red" src="/img/channels/wred.png" />
              <img v-else alt="лого канала Wylsacom Red" src="/img/channels/wred.png"/>
              <p class="special-name">Wylsacom Red</p>
              <div>
                <p class="special-subs">573 497</p>
                <p class="special-views">200 000 +</p>
                <p class="special-er"><b>ER — 36%</b></p>
              </div>
              < !-- <p class="fs-12 mt-auto mb-0"><b>120 000 ₽ / за размещение</b></p> 
              <p class="special-cpv mt-auto">CPV 0.60 ₽</p>
              <p class="special-guarantee">гарантия оплаты <b>только за&nbsp;просмотры</b></p>
            </div>
          </b-col>
          <b-col cols="12" md="4" class="mb-md-22">
            <div class="bg-white d-flex flex-column align-items-center">
              <nuxt-img v-if="window.canUseWebP" format="webp" alt="лого канала Москвач"  src="/img/channels/moskvach.png" />
              <img v-else alt="лого канала Москвач" src="/img/channels/moskvach.png"/>
              <p class="special-name">Москвач</p>
              <div>
                <p class="special-subs">642 274</p>
                <p class="special-views">200 000 +</p>
                <p class="special-er"><b>ER — 41%</b></p>
              </div>
              < !-- <p class="fs-12 mt-auto mb-0"><b>290 000 ₽ / за размещение</b></p> 
              <p class="special-cpv mt-auto">CPV 1.40 ₽</p>
              <p class="special-guarantee">гарантия оплаты <b>только за&nbsp;просмотры</b></p>
            </div>
          </b-col>
          <b-col cols="12" class="d-flex">
            <b-button class="rounded-pill text-uppercase mx-auto" variant="dark" @click="currentForm = forms.specialForm; formModal = !formModal">
              Узнать подробнее
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </section> -->
    <section id="legal" class="legal bg-white">
      <b-container fluid>
        <b-row>
          <b-col cols="12" md="10" class="mx-auto">
            <h2 class="text-center">
              Как соблюдать новый закон о&nbsp;рекламе
            </h2>
            <p class="text-center section-info">
              С 1 сентября в 2022 года вступил в&nbsp;силу <u>закон&nbsp;о&nbsp;рекламе</u>.
            </p>
            <p class="fs-18 fs-md-24 text-center"><b>Реклама и&nbsp;размещения в&nbsp;Telegram должны маркироваться</b></p>
          </b-col>
          <b-col cols="12" md="10" class="mx-md-auto">
            <div class="bg-white info shadow-bigger radius-14 position-relative">
              <div class="position-absolute info-icon">
                <svg width="30" height="30" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="8.18306" cy="7.89051" rx="7.93892" ry="7.89051" fill="white"/>
                  <path d="M8.18306 0.000140826C6.07756 0.000140826 4.0581 0.831423 2.56948 2.31128C1.08053 3.79095 0.244141 5.79807 0.244141 7.89058C0.244141 9.98309 1.08053 11.9903 2.56948 13.4699C4.05825 14.9497 6.0777 15.781 8.18306 15.781C10.2884 15.781 12.308 14.9497 13.7966 13.4699C15.2856 11.9902 16.122 9.98309 16.122 7.89058C16.122 6.5056 15.7552 5.1448 15.0583 3.94529C14.3615 2.74578 13.3593 1.74974 12.1525 1.05715C10.9456 0.364564 9.57641 0 8.18292 0L8.18306 0.000140826ZM8.92404 2.84864C9.69677 2.84864 9.92436 3.29575 9.92436 3.80598C9.92436 4.44244 9.41102 5.03175 8.53512 5.03175C7.80208 5.03175 7.45286 4.6661 7.47667 4.06121C7.47649 3.551 7.91841 2.84869 8.92409 2.84869L8.92404 2.84864ZM6.94187 12.625C6.41265 12.625 6.02628 12.3041 6.39677 10.9048L7.00279 8.41657C7.10856 8.01937 7.12443 7.85902 7.00279 7.85902C6.55828 7.96855 6.13592 8.15257 5.7538 8.40356L5.48909 7.9748C6.77517 6.90703 8.25453 6.28105 8.88692 6.28105C9.41614 6.28105 9.50347 6.90173 9.23894 7.85926L8.54559 10.4737C8.42118 10.9366 8.47415 11.0944 8.59857 11.0944V11.0942C9.03772 10.9975 9.44588 10.794 9.78683 10.5025L10.0859 10.9022C8.83415 12.1384 7.46849 12.625 6.94186 12.625L6.94187 12.625Z" fill="#1B81F9"/>
                  <defs>
                  </defs>
                </svg>
              </div>
              <p class="text-center">
                Каждый рекламодатель обязан маркировать все цифровые объявления специальным токеном и&nbsp;направлять отчетность в&nbsp;специальные контролирующие органы о&nbsp;том, где их&nbsp;размещают, для кого и&nbsp;какие получают результаты. Аналогичные данные обязаны подавать и&nbsp;Telegram-каналы вместе с&nbsp;данными по&nbsp;договору и&nbsp;официальной оплатой.
              </p>
              <div class="radius-14 shadow-bigger text-center text-white fs-18">
                Отсутствие маркировки — <b>нарушение закона и&nbsp;ущерб</b> для&nbsp;компании
              </div>
            </div>
          </b-col>
          <b-col cols="12">
            <h3 class="text-center fs-22 mb-24 fs-md-24 mb-md-36">Nativity передаст данные за&nbsp;вас в&nbsp;автоматическом режиме</h3>
          </b-col>
          <b-col cols="12" md="3" class="mb-16 mb-md-0 pr-md-0">
            <nuxt-img v-if="window.canUseWebP" format="webp" class="tg_8" src="/img/tg_008.png"/>
            <img v-else class="tg_8" src="/img/tg_008.png"/>
            <div class="bg-primary radius-14 d-flex flex-column align-items-center text-white">
              <div class="legal-title bg-black text-white rounded-pill mb-48"><h3 class="text-center">Nativity</h3></div>
              <p class="mb-0"><b>Рекламодатель</b></p>
              <p class="fs-12 text-center mb-40 mb-md-34">Единый договор с&nbsp;платформой и&nbsp;гарантия полного соблюдения закона</p>
              <div class="radius-14 d-flex flex-column align-items-center border border-white">
                <div class="exchange exchange-top mb-8">
                  <nuxt-img src="/img/exchange.svg" class="w-100" />
                </div>
                <p class="fs-24 text-center mb-0"><b>Nativity</b></p>
                <p class="fs-12 text-center mb-16">Автоматизированное получение токенов и&nbsp;сдача отчетности</p>
                <span class="white-pill fs-12 w-100">2&nbsp;000&nbsp;+&nbsp;Telegram-каналов</span>
                <div class="exchange exchange-bottom">
                  <nuxt-img src="/img/exchange.svg" class="w-100" />
                </div>
              </div>
              <p><b>ОРД / ЕРИР</b></p>
            </div>
          </b-col>
          <b-col cols="12" md="auto" class="d-flex justify-content-center align-items-center">
            <b class="fs-30 text-center mb-16">или</b>
          </b-col>
          <b-col cols="12" md="8" class="worse-alternative d-flex mb-md-60">
            <b-row>
              <b-col cols="12" md="8">
                <b-row>
                  <div class="legal-title bg-black text-white rounded-pill mb-32 mb-md-38"><h3 class="text-center">Самостоятельная рекламная кампания</h3></div>
                </b-row>
                <b-row>
                  <b-col cols="6" class="d-flex flex-column justify-content-between pr-12">
                    <div class="radius-12 shadow-bigger mb-8 mb-md-24 bg-g-blue worse-title">
                      <p class="h4 text-center"><b>Рекламодатель</b></p>
                      <p class="fs-12 text-center mb-0">Бренд&nbsp;/&nbsp;агентство</p>
                    </div>
                    <div class="worse-point bg-g-white radius-12 shadow-bigger mb-6 d-flex">
                      <div class="worse-number text-center fs-12 fw-500 bg-g-blue rounded-circle">1</div>
                      <div>
                        <p class="h5 fs-10 mb-8"><b>План размещений</b></p>
                        <p class="fs-10 mb-0">Сдача плана размещений</p>
                      </div>
                    </div>
                    <div class="worse-point bg-g-white radius-12 shadow-bigger mb-6 d-flex">
                      <div class="worse-number text-center fs-12 fw-500 bg-g-blue rounded-circle">2</div>
                      <div>
                        <p class="h5 fs-10 mb-8"><b>Рекламные&nbsp;материалы</b></p>
                        <p class="fs-10 mb-0">Получение токена на&nbsp;креативы</p>
                      </div>
                    </div>
                    <div class="worse-point bg-g-white radius-12 shadow-bigger mb-6 d-flex">
                      <div class="worse-number text-center fs-12 fw-500 bg-g-blue rounded-circle">3</div>
                      <div>
                        <p class="h5 fs-10 mb-8"><b>Маркировка рекламы</b></p>
                        <p class="fs-10 mb-0">Корректная маркировка рекламы</p>
                      </div>
                    </div>
                    <div class="worse-point bg-g-white radius-12 shadow-bigger mb-6 d-flex">
                      <div class="worse-number text-center fs-12 fw-500 bg-g-blue rounded-circle">4</div>
                      <div>
                        <p class="h5 fs-10 mb-8"><b>Отчет по&nbsp;размещениям</b></p>
                        <p class="fs-10 mb-0">Сдача отчетности с&nbsp;показателями</p>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="6" class="d-flex flex-column justify-content-between pl-12">
                    <div class="radius-12 shadow-bigger mb-8 mb-md-36 bg-g-blue worse-title">
                      <p class="h4 text-center"><b>Telegram-каналы</b></p>
                      <p class="fs-12 text-center mb-0">Распространители</p>
                    </div>
                    <div class="d-flex justify-content-between mb-6 mb-md-16">
                      <div class="worse-number shadow-bigger text-center fs-9 fs-md-12 fw-500 bg-g-blue rounded-circle">TG</div>
                      <div class="worse-number shadow-bigger text-center fs-9 fs-md-12 fw-500 bg-g-blue rounded-circle">TG</div>
                      <div class="worse-number shadow-bigger text-center fs-9 fs-md-12 fw-500 bg-g-blue rounded-circle">TG</div>
                      <div class="worse-number shadow-bigger text-center fs-9 fs-md-12 fw-500 bg-g-blue rounded-circle">TG</div>
                      <div class="worse-number shadow-bigger text-center fs-9 fs-md-12 fw-500 bg-g-blue rounded-circle">TG</div>
                      <div class="worse-number shadow-bigger text-center fs-9 fs-md-12 fw-500 bg-g-blue rounded-circle">TG</div>
                    </div>
                    <div class="worse-point bg-g-white radius-12 shadow-bigger mb-6 d-flex">
                      <div class="worse-number text-center fs-12 fw-500 bg-g-blue rounded-circle">5</div>
                      <div>
                        <p class="h5 fs-10 mb-8"><b>Официальный<br class="d-md-none"/>договор</b></p>
                        <p class="fs-10 mb-0">Договор с&nbsp;<u>каждым</u> Telegram-каналом</p>
                      </div>
                    </div>
                    <div class="worse-point bg-g-white radius-12 shadow-bigger mb-6 d-flex">
                      <div class="worse-number text-center fs-12 fw-500 bg-g-blue rounded-circle">6</div>
                      <div>
                        <p class="h5 fs-10 mb-8"><b>Официальная оплата</b></p>
                        <p class="fs-10 mb-0">Конечному распространителю (каналу)</p>
                      </div>
                    </div>
                    <div class="worse-point radius-12 shadow-bigger mb-6 d-flex bg-g-white">
                      <div class="worse-number text-center fs-12 fw-500 bg-g-blue rounded-circle">7</div>
                      <div>
                        <p class="h5 fs-10 mb-8"><b>Сдачи отчетности каналом</b></p>
                        <p class="fs-10 mb-0">Обязательная сквозная отчетность</p>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="12">
                    <div class="worse-point radius-12 shadow-bigger mb-20 mb-md-0 bg-g-white">
                      <p class="h5 fs-16 text-center mb-4"><b>Оператор рекламных данных (ОРД)</b></p>
                      <p class="fs-10 text-center mb-20 mb-md-0">Соблюдение сроков, содержания и корректности отчетов</p>
                      <div class="bg-g-blue rounded-circle shadow-bigger even-worse">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 11.2008L11.2 6.00078L6 0.800781" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M0.799805 6H11.1998" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="11" md="4" class="mx-auto the-worse">
                <div class="bg-g-white radius-12 shadow-bigger worse-registry">
                  <p class="h4 fs-16 text-center mb-8"><b>Единый реестр интернет-рекламы</b></p>
                  <p class="fs-12 text-center mb-24 mb-md-56">Агрегация и&nbsp;хранение данных</p>
  
                  <p class="fs-12 text-center mb-12"><b>Доступ для<br/>контролирующих органов</b></p>
                  
                  <p class="fs-12 text-center mb-8">Федеральная<br/>Налоговая Служба</p>
                  <p class="fs-12 text-center mb-8">Федеральная<br/>Антимонопольная Служба</p>
                  <p class="fs-12 text-center mb-20 mb-md-48">Роскомнадзор</p>
                  <div class="bg-g-blue radius-12 shadow-bigger">
                    <p class="fs-12 text-center mb-8 mb-md-3">Сквозная передача данных по&nbsp;рекламе от&nbsp;всех участников</p>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" class="d-flex legal-action">
            <b-button class="rounded-pill text-uppercase mx-auto" variant="dark" @click="currentForm = forms.consultForm; formModal = !formModal">
              Получить консультацию
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- <section id="other" class="other">
      <b-container fluid>
        <b-row>
          <b-col cols="12">
            <h2 class="text-center mb-0 mb-md-16">
              Другие форматы продвижения&nbsp;в&nbsp;Telegram 
            </h2>
          </b-col>
          <b-col cols="12" class="p-0">
            <div v-if="!slidersInit" class="row dt-track h-100">
              <b-col cols="6" class="other-slide h-100">
                <div class="d-flex flex-column radius-14 shadow-bigger other-inner inner-1">
                  <b-row>
                    <b-col cols="12">
                      <p class="fs-18 text-center mb-20 text-md-left fs-md-24 mb-md-12"><b>Реклама в   <span class="primary-pill">Telegram&nbsp;ADS</span></b></p>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="12" md="6" class="pr-md-0">
                      <p class="mb-32">Официальная таргетированная реклама в&nbsp;Telegram&nbsp;Ads:</p>
                      
                      <ul class="other-points list-unstyled mb-24 mb-md-32">
                          <li class="other-point-check fs-14">Таргетинг по&nbsp;каналам и&nbsp;аудиториям</li>
                          <li class="other-point-check fs-14">Продвижение канала или&nbsp;бота</li>
                          <li class="other-point-check fs-14">Рекламный бюджет от&nbsp;300&nbsp;000&nbsp;₽</li>
                          <li class="other-point-stop fs-14">Переход с&nbsp;рекламы на&nbsp;сайт</li>
                          <li class="other-point-stop fs-14">Расширенные форматы креативов</li>
                      </ul>
                    </b-col>
                    <b-col cols="12" md="6" class="position-relative d-md-flex flex-column justify-content-center">
                      <div class="radius-10 bg-g-dark-blue shadow-bigger text-white text-center d-flex justify-content-center align-items-center mb-4">
                        <b class="fs-14">Как выглядит:</b>
                      </div>
                      <nuxt-img src="/img/other/other-ex-1.svg" class="other-example-1 mb-12"/>
                    </b-col>
                  </b-row>
                  <b-row class="mt-auto">
                    <b-col cols="12" md="6" class="d-flex">
                      <b-button class="rounded-pill text-uppercase mx-auto ml-md-0 mt-md-auto fs-md-14" variant="dark" @click="currentForm = forms.tAdsForm; formModal = !formModal">
                        Узнать подробнее
                      </b-button>
                      <div class="other-tg-blur d-none d-md-block"></div>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
              <b-col cols="6" class="other-slide">
                <div class="d-flex flex-column radius-14 shadow-bigger other-inner inner-2">
                  <b-row>
                    <b-col cols="12">
                      <p class="fs-18 text-center mb-20 text-md-left fs-md-24 mb-md-12"><b>Нативные кампании в   <span class="primary-pill">Telegram</span></b></p>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="12" md="6">
                      <p class="mb-32">Проведение скрытых кампаний в&nbsp;Telegram (законно, без&nbsp;пометок):</p>
                      
                      <ul class="other-points list-unstyled mb-24 mb-md-32">
                          <li class="other-point-check fs-14">PR-кампании в&nbsp;TG-СМИ</li>
                          <li class="other-point-check fs-14">Вирусные кампании</li>
                          <li class="other-point-check fs-14">Бюджет от&nbsp;1&nbsp;000&nbsp;000&nbsp;₽</li>
                          <li class="other-point-stop fs-14">Прямая реклама</li>
                      </ul>
                    </b-col>
                    <b-col cols="12" md="6" class="position-relative">
                      <div class="other-look radius-10 bg-g-dark-blue shadow-bigger text-center text-white d-flex justify-content-center align-items-center mb-4 mb-md-12">
                        <b class="fs-14">Как выглядит:</b>
                      </div>
                      <div class="position-relative">
                        <nuxt-img v-if="window.canUseWebP" src="/img/other/other-ex-2.png" class="mb-12 other-example-2"/>
                        <img v-else src="/img/other/other-ex-2.png" class="mb-12 other-example-2"/>
                      </div>
                      <div class="radius-10 bg-g-dark-blue shadow-bigger text-center text-white d-flex justify-content-center align-items-center mb-10">
                        <b class="fs-14">Дистрибуция:</b>
                      </div>
                      <div class="other-dists d-flex flex-wrap justify-content-around align-items-start mb-10">
                        <div class="other-dist d-flex flex-column">
                          <nuxt-img v-if="window.canUseWebP" format="webp" src="/img/other/ria.png" />
                          <img v-else src="/img/other/ria.png" />
                          <b class="fs-8">РИА Новости</b>
                        </div>
                        <div class="other-dist d-flex flex-column">
                          <nuxt-img v-if="window.canUseWebP" format="webp" src="/img/other/rbk.png" />
                          <img v-else src="/img/other/rbk.png" />
                          <b class="fs-8">РБК</b>
                        </div>
                        <div class="other-dist d-flex flex-column">
                          <nuxt-img v-if="window.canUseWebP" format="webp" src="/img/other/tass.png" />
                          <img v-else src="/img/other/tass.png" />
                          <b class="fs-8">ТАСС</b>
                        </div>
                        <div class="other-dist d-flex flex-column">
                          <nuxt-img v-if="window.canUseWebP" format="webp" src="/img/other/nm-logo.png" />
                          <img v-else src="/img/other/nm-logo.png" />
                          <b class="fs-8">Новости Москвы</b>
                        </div>
                        <div class="other-dist d-flex flex-column">
                          <nuxt-img v-if="window.canUseWebP" format="webp" src="/img/other/nz.png" />
                          <img v-else src="/img/other/nz.png" />
                          <b class="fs-8">Незыгарь</b>
                        </div>
                        <div class="other-dist d-flex flex-column">
                          <nuxt-img v-if="window.canUseWebP" format="webp" src="/img/other/nemysli.png" />
                          <img v-else src="/img/other/nemysli.png" />
                          <b class="fs-8">Мысли-НеМысли</b>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                  <b-row class="mt-auto">
                    <b-col cols="12" md="6" class="d-flex">
                      <b-button class="rounded-pill text-uppercase mx-auto ml-md-0 mt-md-auto fs-md-14" variant="dark" @click="currentForm = forms.nativeForm; formModal = !formModal">
                        Узнать подробнее
                      </b-button>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </div>
            <vue-slick-carousel v-else v-show="slidersReady.other" v-bind="otherSliderSettings" ref="otherSlider" @init="onSliderInit('other')">
              <div class="other-slide">
                <div class="d-flex flex-column radius-14 shadow-bigger other-inner inner-1">
                  <b-row>
                    <b-col cols="12">
                      <p class="fs-18 text-center mb-20"><b>Реклама в   <span class="primary-pill">Telegram&nbsp;ADS</span></b></p>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="12" md="6">
                      <p class="mb-32">Официальная таргетированная реклама в&nbsp;Telegram&nbsp;Ads:</p>
                      
                      <ul class="other-points list-unstyled mb-24">
                          <li class="other-point-check fs-14">Таргетинг по&nbsp;каналам и&nbsp;аудиториям</li>
                          <li class="other-point-check fs-14">Продвижение канала или&nbsp;бота</li>
                          <li class="other-point-check fs-14">Рекламный бюджет от&nbsp;300&nbsp;000&nbsp;₽</li>
                          <li class="other-point-stop fs-14">Переход с&nbsp;рекламы на&nbsp;сайт</li>
                          <li class="other-point-stop fs-14">Расширенные форматы креативов</li>
                      </ul>
                    </b-col>
                    <b-col cols="12" md="6" class="position-relative other-example-1">
                      <div class="radius-10 bg-g-dark-blue shadow-bigger text-white text-center d-flex justify-content-center align-items-center mb-4">
                        <b class="fs-14">Как выглядит:</b>
                      </div>
                      <nuxt-img src="/img/other/other-ex-1.svg" class="mb-12"/>
                    </b-col>
                  </b-row>
                  <b-row class="mt-auto">
                    <b-col cols="12" md="6" class="d-flex">
                      <b-button class="rounded-pill text-uppercase mx-auto mt-md-auto" variant="dark" @click="currentForm = forms.tAdsForm; formModal = !formModal">
                        Узнать подробнее
                      </b-button>
                    </b-col>
                  </b-row>
                </div>
              </div>
              <div class="other-slide">
                <div class="d-flex flex-column radius-14 shadow-bigger other-inner inner-2">
                  <b-row>
                    <b-col cols="12">
                      <p class="fs-18 text-center mb-20"><b>Нативные кампании в   <span class="primary-pill">Telegram</span></b></p>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="12" md="6">
                      <p class="mb-32">Проведение скрытых кампаний в&nbsp;Telegram (законно, без&nbsp;пометок):</p>
                      
                      <ul class="other-points list-unstyled mb-24">
                          <li class="other-point-check fs-14">PR-кампании в&nbsp;TG-СМИ</li>
                          <li class="other-point-check fs-14">Вирусные кампании</li>
                          <li class="other-point-check fs-14">Бюджет от&nbsp;1&nbsp;000&nbsp;000&nbsp;₽</li>
                          <li class="other-point-stop fs-14">Прямая реклама</li>
                      </ul>
                    </b-col>
                    <b-col cols="12" md="6" class="position-relative">
                      <div class="other-look radius-10 bg-g-dark-blue shadow-bigger text-center text-white d-flex justify-content-center align-items-center mb-4">
                        <b class="fs-14">Как выглядит:</b>
                      </div>
                      <div class="position-relative">
                        <nuxt-img v-if="window.canUseWebP" src="/img/other/other-ex-2.png" class="mb-12 other-example-2"/>
                        <img v-else src="/img/other/other-ex-2.png" class="mb-12 other-example-2"/>
                      </div>
                      <div class="radius-10 bg-g-dark-blue shadow-bigger text-center text-white d-flex justify-content-center align-items-center mb-10">
                        <b class="fs-14">Дистрибуция:</b>
                      </div>
                      <div class="other-dists d-flex flex-wrap justify-content-around align-items-start mb-10">
                        <div class="other-dist d-flex flex-column">
                          <nuxt-img v-if="window.canUseWebP" format="webp" src="/img/other/ria.png" />
                          <img v-else src="/img/other/ria.png" />
                          <b class="fs-8">РИА Новости</b>
                        </div>
                        <div class="other-dist d-flex flex-column">
                          <nuxt-img v-if="window.canUseWebP" format="webp" src="/img/other/rbk.png" />
                          <img v-else src="/img/other/rbk.png" />
                          <b class="fs-8">РБК</b>
                        </div>
                        <div class="other-dist d-flex flex-column">
                          <nuxt-img v-if="window.canUseWebP" format="webp" src="/img/other/tass.png" />
                          <img v-else src="/img/other/tass.png" />
                          <b class="fs-8">ТАСС</b>
                        </div>
                        <div class="other-dist d-flex flex-column">
                          <nuxt-img v-if="window.canUseWebP" format="webp" src="/img/other/nm-logo.png" />
                          <img v-else src="/img/other/nm-logo.png" />
                          <b class="fs-8">Новости Москвы</b>
                        </div>
                        <div class="other-dist d-flex flex-column">
                          <nuxt-img v-if="window.canUseWebP" format="webp" src="/img/other/nz.png" />
                          <img v-else src="/img/other/nz.png" />
                          <b class="fs-8">Незыгарь</b>
                        </div>
                        <div class="other-dist d-flex flex-column">
                          <nuxt-img v-if="window.canUseWebP" format="webp" src="/img/other/nemysli.png" />
                          <img v-else src="/img/other/nemysli.png" />
                          <b class="fs-8">Мысли-НеМысли</b>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                  <b-row class="mt-auto">
                    <b-col cols="12" md="6" class="d-flex">
                      <b-button class="rounded-pill text-uppercase mx-auto mt-md-auto" variant="dark" @click="currentForm = forms.nativeForm; formModal = !formModal">
                        Узнать подробнее
                      </b-button>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </vue-slick-carousel>
            <div v-if="slidersInit && !slidersReady.other" class="m-auto d-flex mb-10 mt-10 justify-content-center"><b-spinner class="text-primary"></b-spinner><span class="sr-only">Загружаем форматы...</span></div>
          </b-col>
        </b-row>
      </b-container>
      <div class="other-bg-1"></div>
      <div class="other-bg-2 d-md-none"></div>
      <div class="other-tg-1"></div>
      <div class="other-tg-2 d-none d-md-block"></div>
    </section> -->
    <footer>
      <b-container fluid class="">
        <b-row>
          <b-col cols="12" md="3" class="mb-20 d-flex flex-column">
            <h3 class="fs-20 mb-8"><b>Nativity</b></h3>
            <b-link href="/Offer.pdf" class="fs-14 mb-10" target="_blank">Договор оферты</b-link>
            <b-link href="/policy/" class="fs-14 mb-0">Политика обработки ПД</b-link>
          </b-col>
          <b-col cols="12" md="3" class="mb-20 d-flex flex-column">
            <h3 class="fs-20 mb-8"><b>Помощь</b></h3>
            <b-link v-b-modal.faqModal href="#faqModal" class="fs-14 mb-10">FAQ / Справка</b-link>
          </b-col>
          <b-col cols="12" md="3" class="mb-20 ml-auto d-flex flex-column text-md-right">
            <h3 class="fs-20 mb-8"><b>Контакты</b></h3>
            <!-- <p class="fs-10 mb-5">Пн-Пт.С 10:00 до 19:00</p>
            <b-link href="tel:+74957775169" target="_blank" class="fs-15 mb-32"><b>+7 (495) 777-51-69</b></b-link> -->
            <p class="fs-14 mb-5">Коммерческая служба</p>
            <p class="fs-14 mb-10">Пн-Пт с 10:00 до 19:00</p>
            <b-link href="mailto:more@nativity.tech" rel="noopener" target="_blank" class="fs-15 mb-10"><b>more@nativity.tech</b></b-link>
            <b-link href="https://t.me/nativitytech" rel="noopener" target="_blank" class="fs-15 mb-10"><nuxt-img src="/img/telegram.svg" class="hover-none" alt="telegram"/><nuxt-img src="/img/telegram_white.svg" class="d-none hover" alt="telegram"/> <b>@nativitytech</b></b-link>
            <b-link href="mailto:pr@nativity.tech" rel="noopener" target="_blank" class="fs-15 mb-20">Для СМИ: pr@nativity.tech</b-link>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <span class="fs-14">© 2022</span>
          </b-col>
        </b-row>
      </b-container>
    </footer>
    <b-modal id="formModal" v-model="formModal" centered variant="primary" hide-footer no-stacking :title="formShow? currentForm.title : formSent? 'Спасибо!' : 'Ошибка!'" @shown="focusThis('formName')" @hidden="formClose()">
      <template #modal-header-close>
        <img alt="Закрыть" src="~/assets/img/stop_white.svg" />
      </template>
      <div class="seedForm h-100">
        <b-container fluid class="h-100">
          <b-row class="h-100">
            <b-col cols="12" class="h-100">
              <p v-if="currentForm.descr && formShow" class="mb-8 mb-md-20 fs-14 text-center" v-html="currentForm.descr" />
              <b-form v-if="formShow" :id="currentForm.id" ref="form" class="needs-validation" method="POST" novalidate @submit.prevent="onSubmit(currentForm.id)">
                <input id="form-type" name="type" type="hidden" :value="currentForm.title" />
                <b-form-group id="form-group-name" label="Имя Фамилия*" label-for="form-name">
                  <b-form-input id="form-name" ref="formName" v-model="formValues.name" :state="isValidName" name="name" required></b-form-input>
                    <b-form-invalid-feedback id="form-name-feedback" :state="isValidName">
                      {{formErrors.name}}
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group id="form-group-company" label="Название компании*" label-for="form-company">
                  <b-form-input id="form-company" v-model="formValues.company" :state="isValidCompany" name="company" required></b-form-input>
                    <b-form-invalid-feedback id="form-company-feedback">
                      {{formErrors.company}}
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group id="form-group-phone" label="Телефон*" label-for="form-phone">
                  <b-form-input id="form-phone" v-model="formValues.phone" v-mask="'+7 (###) ###-##-##'" :state="isValidPhone" name="phone" type="tel" required></b-form-input>
                    <b-form-invalid-feedback id="form-phone-feedback">
                      {{formErrors.phone}}
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group id="form-group-email" label="Email*" label-for="form-email">
                  <b-form-input id="form-email" v-model="formValues.email" :state="isValidEmail" name="email" type="email" required></b-form-input>
                    <b-form-invalid-feedback id="form-email-feedback">
                      {{formErrors.email}}
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group v-if="isFieldNeeded('audience')" id="form-group-audience" label="Аудитория" label-for="form-audience">
                  <b-form-select id="form-audience" v-model="formValues.audience" name="audience" :options="calcOptions" value-field="cat" text-field="cat" @input="calcAu = formValues.audience"></b-form-select>
                </b-form-group>
                <b-form-group v-if="isFieldNeeded('budget')" id="form-group-budget" label="Бюджет кампании" label-for="form-budget" :description="formValues.plan ? minBudgetReady + ' ₽ — минимальный бюджет для плана ' + formValues.plan : (minBudgetReady + ' ₽ — минимальный бюджет')">
                  <b-input-group append="₽">
                    <b-form-input id="form-budget" v-model="formValues.budget" :state="isValidBudget" name="budget" :placeholder="minBudgetReady" @input="calcBudget = formValues.budget"></b-form-input>
                  </b-input-group>
                  <div v-show="!isValidBudget" id="form-budget-feedback" :class="{'invalid-feedback':true, 'd-block':!isValidBudget}" >
                    {{formErrors.budget}}
                  </div>
                </b-form-group>
                <p class="fs-12">*Поля обязательные для заполнения</p>
                <input v-if="isFieldNeeded('plan')" id="form-plan" v-model="formValues.plan" name="plan" type="hidden" />
                <b-form-checkbox id="form-subscription" v-model="formValues.subscription" name="subscription" class="fs-12 mb-28">Я&nbsp;хочу получать email-рассылку от&nbsp;Nativity</b-form-checkbox>
                <b-form-group id="form-group-position" label="Позиция" aria-hidden="true" label-for="form-position">
                  <b-form-input id="form-position" v-model="formValues.position" :state="!formValues.position" tabindex="-1" name="position"></b-form-input>
                </b-form-group>
                <b-button v-if="!formSending" type="submit" class="rounded-pill border border-white m-auto d-flex bg-transparent mb-10">Отправить заявку</b-button>
                <div v-else class="m-auto d-flex mb-10 justify-content-center"><b-spinner class="text-white"></b-spinner><span class="sr-only">Отправляем...</span></div>
                <p class="fs-12 mb-0 text-center">Нажимая на кнопку, вы&nbsp;соглашаетесь с&nbsp;<a href="/policy" target="_blank">Политикой в отношении обработки персональных данных</a></p>
              </b-form>
              <div v-if="formSent" class="d-flex flex-column justify-content-center align-items-center form-tnx h-100 ">
                <p class="m-auto mb-32 text-center">Ваша заявка отправлена, скоро с вами свяжется менеджер!</p>
                <b-button class="rounded-pill border border-white d-flex bg-transparent mt-auto mb-32 justify-content-center" @click="formClose()">Ок!</b-button>
              </div>
              <div v-if="formError" class="d-flex flex-column justify-content-center align-items-center form-tnx h-100 ">
                <p class="m-auto mb-32 text-center">При отправке заявки произошла ошибка(<br/>Проверьте соединение к интернету и попробуйте позже или позвоните нам по телефону</p>
                <b-link href="tel:+74957775169" target="_blank" class="mb-32"><b>+7 (495) 777-51-69</b></b-link>
                <b-button class="rounded-pill border border-white d-flex bg-transparent mt-auto mb-32 justify-content-center" @click="formClose()">Очень жаль!</b-button>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </b-modal>
    <b-modal id="faqModal" ref="faq-modal" v-model="faqModal" centered :hide-footer="!slidersInit" variant="primary" no-stacking @hidden="formClose()">
      <template #modal-header="{ close }">
        <div class='navbar d-flex justify-content-between w-100'>
          <button type="button" aria-label="Закрыть" class="close ml-md-auto" @click="close()">
            <img alt="Закрыть" src="~/assets/img/stop_white.svg" />
          </button>
          <b-navbar-toggle v-if="slidersInit" v-b-toggle.sidebar-nav target="sidebar-nav" class="border-0 text-white p-0" />
        </div>
        <h5 class="modal-title w-100 my-16">Часто задаваемые вопросы:</h5>
      </template>
      <div class="faq h-100">
        <b-container fluid class="h-100">
          <b-row class="h-100">
            <b-col cols="12" class="h-100 faq-questions accordion" role="tablist">
              <div v-for="(faq, index) in faqs" :key="faq.q">
                <div v-b-toggle="'faq-' + index" class="faq-question d-flex border-top border-white" role="tab">
                  <b>{{index + 1}}.</b>
                  <p class="mb-0 fs-md-20">{{faq.q}}</p>
                  <i class="ml-auto"><img alt="Посмотреть ответ" src="~/assets/img/right-white.svg" /></i>
                </div>
                <b-collapse :id="'faq-' + index" accordion="faqs" role="tabpanel">
                  <div class="bg-white radius-14 faq-answer mb-40">
                    <p class="fs-14 fs-md-16 text-dark mb-0">{{faq.a}}</p>
                </div>
                </b-collapse>
              </div>
              <div>
                <div v-b-toggle.faq-new class="faq-question faq-new-question d-flex border-top border-bottom border-white mb-64" role="tab" @click="currentForm = forms.faqForm">
                  <i><img src="~/assets/img/qm.svg"/></i>
                  <p class="mb-0 fs-md-20">Я не нашел ответ, хочу задать вопрос</p>
                  <i class="ml-auto"><img alt="Задать вопрос" src="~/assets/img/right-white.svg" /></i>
                </div>
                <b-collapse id="faq-new" accordion="faqs" role="tabpanel">
                  <b-form v-if="formShow" id="FAQForm" ref="faqForm" class="needs-validation" method="POST" novalidate @submit.prevent="onSubmit('FAQForm')">
                    <input id="form-type" name="type" type="hidden" :value="currentForm.title" />
                    <b-form-group id="form-group-email" label="Email*" label-for="form-email">
                      <b-form-input id="form-email" v-model="formValues.email" :state="isValidEmail" name="email" type="email" required></b-form-input>
                        <b-form-invalid-feedback id="form-email-feedback">
                          {{formErrors.email}}
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group id="form-group-question" label="Ваш вопрос*" label-for="form-question" class="">
                      <b-form-textarea id="form-question" v-model="formValues.question" :state="isValidQuestion" name="question" rows="5" required></b-form-textarea>
                        <b-form-invalid-feedback id="form-question-feedback">
                          {{formErrors.question}}
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <p class="fs-12 mb-30">*Поля обязательные для заполнения</p>
                    <b-form-group id="form-group-position" label="Позиция" aria-hidden="true" label-for="form-position">
                      <b-form-input id="form-position" v-model="formValues.position" :state="!formValues.position" tabindex="-1" name="position"></b-form-input>
                    </b-form-group>
                    <b-button v-if="!formSending" type="submit" class="rounded-pill border border-white m-auto d-flex bg-transparent mb-10 float-md-right">Отправить вопрос</b-button>
                    <div v-else class="m-auto d-flex mb-10 justify-content-center"><b-spinner class="text-white"></b-spinner><span class="sr-only">Отправляем...</span></div>
                    <p class="fs-12 mb-64 text-center text-md-start max-w-md-50 mt-md-8 float-md-left">Нажимая на кнопку, вы&nbsp;соглашаетесь с&nbsp;<a href="/policy" target="_blank">Политикой в отношении обработки персональных данных</a></p>
                  </b-form>
                  <div v-if="formSent" class="d-flex flex-column justify-content-center align-items-center form-tnx h-100 ">
                    <p class="m-auto mb-32 text-center">Мы получили ваш вопрос!<br/>Наши менеджеры свяжутся с вами в течение 24ч и помогут решить проблему</p>
                    <b-button class="rounded-pill border border-white d-flex bg-transparent mt-auto mb-32 justify-content-center" @click="formClose()">Ок!</b-button>
                  </div>
                  <div v-if="formError" class="d-flex flex-column justify-content-center align-items-center form-tnx h-100 ">
                    <p class="m-auto mb-32 text-center">При отправке вопроса произошла ошибка(<br/>Проверьте соединение к интернету и попробуйте позже или позвоните нам по телефону</p>
                    <b-link href="tel:+74957775169" target="_blank" class="mb-32"><b>+7 (495) 777-51-69</b></b-link>
                    <b-button class="rounded-pill border border-white d-flex bg-transparent mt-auto mb-32 justify-content-center" @click="formClose()">Очень жаль!</b-button>
                  </div>
                </b-collapse>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <template #modal-footer>
        <div v-if="slidersInit" class="footer">
          <b-container fluid class="">
            <b-row>
              <b-col cols="12" md="3" class="mb-20 d-flex flex-column">
                <h3 class="fs-20 mb-8"><b>Nativity</b></h3>
                <b-link href="/Offer.pdf" class="fs-14 mb-10">Договор оферты</b-link>
                <b-link href="/policy/" class="fs-14 mb-0">Политика обработки ПД</b-link>
              </b-col>
              <b-col cols="12" md="3" class="mb-20 ml-auto d-flex flex-column text-md-right">
                <h3 class="fs-20 mb-8"><b>Контакты</b></h3>
                <!-- <p class="fs-10 mb-5">Пн-Пт.С 10:00 до 19:00</p>
                <b-link href="tel:+74957775169" target="_blank" class="fs-15 mb-32"><b>+7 (495) 777-51-69</b></b-link> -->
                <p class="fs-14 mb-5">Коммерческая служба</p>
                <p class="fs-14 mb-10">Пн-Пт с 10:00 до 19:00</p>
                <b-link href="mailto:more@nativity.tech" rel="noopener" target="_blank" class="fs-15 mb-10"><b>more@nativity.tech</b></b-link>
                <b-link href="https://t.me/nativitytech" rel="noopener" target="_blank" class="fs-15 mb-10"><nuxt-img src="/img/telegram.svg" class="hover-none" alt="telegram"/><nuxt-img src="/img/telegram_white.svg" class="d-none hover" alt="telegram"/> <b>@nativitytech</b></b-link>
                <b-link href="mailto:pr@nativity.tech" rel="noopener" target="_blank" class="fs-15 mb-20">Для СМИ: pr@nativity.tech</b-link>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12">
                <span class="fs-14">© 2022-2023</span>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'IndexPage',
  components: {
    VueSlickCarousel,
  },
  data() {
    const calcOptions = [
        { cat: 'Авторские топ-каналы', minCpv: 2, betterCpv:3, minPosts: 50000, maxPosts: 800000 },
        { cat: 'Бизнес и менеджмент', minCpv: 1, betterCpv:2, minPosts: 5000, maxPosts: 90000 },
        { cat: 'Финансы', minCpv: 2, betterCpv:3, minPosts: 5000, maxPosts: 140000 },
        { cat: 'Новости и СМИ', minCpv: 1, betterCpv:1.5, minPosts: 10000, maxPosts: 800000 },
        { cat: 'Юмор и развлечения', minCpv: 0.5, betterCpv:1.5, minPosts: 10000, maxPosts: 320000 },
        { cat: 'IT и новые технологии', minCpv: 1.5, betterCpv:2, minPosts: 2000, maxPosts: 200000 },
        { cat: 'Туризм', minCpv: 1.5, betterCpv:1.5, minPosts: 5000, maxPosts: 250000 },
        { cat: 'Маркетинг и реклама', minCpv: 2, betterCpv:3.5, minPosts: 2000, maxPosts: 70000 },
        { cat: 'Психология', minCpv: 1, betterCpv:1.5, minPosts: 5000, maxPosts: 90000 },
        { cat: 'Стиль жизни', minCpv: 1, betterCpv:1.5, minPosts: 2000, maxPosts: 60000 },
        { cat: 'Образование', minCpv: 1, betterCpv:2, minPosts: 5000, maxPosts: 60000 },
        { cat: 'Карьера и вакансии', minCpv: 1.5, betterCpv:2, minPosts: 5000, maxPosts: 60000 },
        { cat: 'Спорт', minCpv: 1, betterCpv:1.5, minPosts: 5000, maxPosts: 60000 },
        { cat: 'Мода и красота', minCpv: 0.5, betterCpv:1.5, minPosts: 5000, maxPosts: 70000 },
        { cat: 'Здоровье и медицина', minCpv: 1.5, betterCpv:2, minPosts: 2000, maxPosts: 75000 },
        { cat: 'Еда и кулинария', minCpv: 0.5, betterCpv:1.5, minPosts: 10000, maxPosts: 200000 },
        { cat: 'Дом и семья', minCpv: 1, betterCpv:1.5, minPosts: 5000, maxPosts: 110000 },
        { cat: 'Недвижимость', minCpv: 1, betterCpv:2, minPosts: 5000, maxPosts: 90000 },
        { cat: 'Авто', minCpv: 2, betterCpv:2, minPosts: 2000, maxPosts: 90000 },
        { cat: 'Промышленность', minCpv: 2, betterCpv:4, minPosts: 2000, maxPosts: 45000 },
      ]
    const forms = { 
      seedForm: {id: 'SeedForm', title: 'Заявка', descr: '', fields: ['name', 'company', 'phone', 'email', 'audience', 'budget', 'subscription'] },
      planForm: {id: 'SeedForm-plan', title: 'Заявка', descr: '', fields: ['name', 'company', 'phone', 'email', 'audience', 'budget', 'plan', 'subscription']},
      specialForm: {id: 'SpecialForm', title: 'Специальные условия', descr: 'Размещение в премиальных каналах на специальных условиях <b>при пакете “Бизнес”</b>', fields: ['name', 'company', 'phone', 'email', 'subscription']},
      consultForm: {id: 'ConsultForm', title: 'Заявка на консультацию', descr: 'Уточнить требования к рекламе в мессенджере Telegram <b>по новому Закону</b>', fields: ['name', 'company', 'phone', 'email', 'subscription']},
      tAdsForm: {id: 'TAdsForm', title: 'Заявка Telegram Ads', descr: '', fields: ['name', 'company', 'phone', 'email', 'audience', 'budget', 'subscription']},
      nativeForm: {id: 'NativeForm', title: 'Нативная реклама', descr: 'Проведение нативных и&nbsp;PR-кампаний в&nbsp;ведущих Telegram-каналах', fields: ['name', 'company', 'phone', 'email', 'subscription']},
      faqForm: {id: 'FAQForm', title: 'Вопрос от рекламодателя', fields: ['email', 'question']},
    }
    return {
      navHeight: 64,
      window: {
        width: null,
        height: null,
        canUseWebP: true,
      },
      showSidebar: false,
      slidersReady: {},
      partnersSliderSettings: {
        centerMode: true,
        slidesToShow: 2,
        swipeToSlide: true,
        infinite: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 0,
        cssEase: "linear"
      },
      convinienceSliderSettings: {
        centerMode: true,
        infinite: false,
        variableWidth: true,
        swipeToSlide: true,
      },
      audienceSliderSettings: {
        infinite: false,
        variableWidth: true,
        swipeToSlide: true,
      },
      channelsSliderSettings: {
        infinite: false,
        swipeToSlide: true,
        slidesToShow: 2.25,
        rows: 3,
        slidesPerRow: 1,
      },
      channels: [
        {
          class: 'wred',
          title: 'Wylsacom Red',
          subs: '580 000',
          views: '210 000+',
          er: 'ER - 36%',
        },
        {
          class: 'banksta',
          title: 'Банкста',
          subs: '310 000',
          views: '112 000+',
          er: 'ER - 36%',
        },
        {
          class: 'al',
          title: 'Артемий Лебедев',
          subs: '372 000',
          views: '207 000+',
          er: 'ER - 56%',
        },
        {
          class: 'imcb',
          title: "I'm CEO, Beach",
          subs: '51 192',
          views: '25 000+',
          er: 'ER - 47%',
        },
        {
          class: 'brief',
          title: 'brief',
          subs: '310 000',
          views: '85 000+',
          er: 'ER - 27%',
        },
        {
          class: 'nm',
          title: 'Новости Москвы',
          subs: '1 320 000',
          views: '650 000+',
          er: 'ER - 49%',
        },
        {
          class: 'bddo',
          title: 'Банки, деньги, два офшора',
          subs: '322 605',
          views: '67 000+',
          er: 'ER - 49%',
        },
        {
          class: 'gb',
          title: 'Газ-Батюшка',
          subs: '54 690',
          views: '17 000+',
          er: 'ER - 24%',
        },
        {
          class: 'xp',
          title: 'Эксплойт',
          subs: '721 000',
          views: '128 000+',
          er: 'ER - 18%',
        },
        {
          class: 'limon',
          title: 'Лимон на чай',
          subs: '210 000',
          views: '5 500+',
          er: 'ER - 3%',
        },
        {
          class: 'nemysli',
          title: 'Мысли не мысли',
          subs: '150 000',
          views: '58 000+',
          er: 'ER - 39%',
        },
        {
          class: 'kd',
          title: 'Код Дурова',
          subs: '188 000',
          views: '44 000+',
          er: 'ER - 23%',
        },
      ],
      plansSliderSettings: {
        infinite: false,
        swipeToSlide: true,
        slidesToShow: 1.25,
      },
      plans: [
        {
          class: 'start',
          title: 'Старт',
          budget: 200000,
          descr: 'Специальные проекты и базовая аналитика',
          sp: ['<b>Доступ к платформе Nativity</b><br/>и ко всему списку каналов', '<b>Техническая поддержка</b>', '<b>Отчет по кампании</b>', '<b>Расширенная аналитика</b>'],
          colors: ['#60A8FF', '#1B81F9'],
        },
        {
          class: 'standart',
          title: 'Стандарт',
          budget: 500000,
          descr: 'Точечные кампании и&nbsp;специальные интеграции',
          sp: ['<b>Согласование Telegram-каналов</b><br/>Расширенный медиаплан<br/>Согласование дат публикаций<br/>Высококачественные каналы', '<b>Персональный менеджер</b>', '<b>Креативная студия:</b><br/>Разработка промоматериалов<br/>Авторский текст на каждый канал', '<b>Специальные проекты:</b></br>Антикризисная коммуникация<br/>Нативные размещения и обзоры*<br/>PR-кампания в&nbsp;Telegram', '<b>Расширенная аналитика</b>'],
          colors: ['#69DD8A', '#58B276'],
        },
        {
          class: 'business',
          title: 'Бизнес',
          budget: 3000000,
          descr: 'Активные кампании, performance-задачи и&nbsp;PR-поддержка',
          sp: ['<b>Персональная стратегия:</b><br/>Индивидуальный медиаплан<br/>Согласование дат публикаций<br/>Премиум-каналы и авторы', '<b>Персональный менеджер</b>', '<b>Креативная студия:</b><br/>Авторский текст на&nbsp;каждый канал<br/>Креативная коммуникация', '<b>Специальные проекты:</b></br>Антикризисная коммуникация<br/>Нативные размещения и&nbsp;обзоры*<br/>Спецпроекты<br/>с&nbsp;премиум-каналами<br/>PR и&nbsp;вирусные кампании*', '<b>Расширенная аналитика</b>'],
          colors: ['#FCB950', '#F19338'],
        },
        {
          class: 'premium',
          title: 'Премиум',
          budget: 5000000,
          descr: 'Специальные проекты, широкие кампании и&nbsp;<span class="plan-promo">особые условия</span>',
          sp: ['<b>Персональная стратегия:</b><br/>Индивидуальный медиаплан<br/>Бронь лучших дат для&nbsp;размещений<br/>Премиум-каналы и авторы', '<b>Персональный менеджер</b>', '<b>Команда экспертов Telegram</b>', '<b>Креативная студия:</b><br/>Авторский текст на&nbsp;каждый канал<br/>Креативная коммуникация', '<span class="plan-promo promo-2"><b>Специальные проекты:</b></span></br>Антикризисная коммуникация<br/>Нативные размещения и&nbsp;обзоры*<br/>Спецпроекты с&nbsp;премиум-каналами<br/>PR и&nbsp;вирусные кампании*', '<b>Премиум-возможности:</b><br/>Блок на негативные упоминания*<br/>Удаление сторонних материалов*', '<b>Расширенная аналитика</b>'],
          colors: ['#9D8DFF', '#7649F9'],
        },
      ],
      minBudget: 200000,
      analChannels: [
        {
          class: 'tw',
          user: '@TrendWatching24',
          title: 'TrendWatching: IT, технологии, бизнес',
          subs: '190 957',
          views: '24 009',
          er: '18%',
        },
        {
          class: 'cp',
          user: '@Coin_Post',
          title: 'Coin&nbsp;Post',
          subs: '317 077',
          views: '48 675',
          er: '43%',
        },
        {
          class: 'banksta',
          user: '@banksta',
          title: 'Банкста',
          subs: '380 069',
          views: '99 992',
          er: '26%',
        },
        {
          class: 'dao',
          user: '@daokedao',
          title: 'Китайская&nbsp;угроза',
          subs: '309 456',
          views: '82 711',
          er: '27%',
        },
        {
          class: 'nemysli',
          user: '@mislinemisli',
          title: 'Мысли-НеМысли',
          subs: '143 140',
          views: '42 657',
          er: '32%',
        },
        {
          class: 'br',
          user: '@bankrollo',
          title: 'Банки, деньги, два&nbsp;офшора',
          subs: '301 467',
          views: '67 009',
          er: '49%',
        },
        {
          class: 'em',
          user: '@elonmusk_ru',
          title: 'Илон&nbsp;Маск',
          subs: '120 238',
          views: '62 713',
          er: '52%',
        },
      ],
      calcOptions,
      calcAu: calcOptions[0].cat,
      calcCpv: calcOptions[0].betterCpv,
      calcBudget: 7050000,  
      otherSliderSettings: {
        infinite: false,
        swipeToSlide: true,
        slidesToShow: 1.1,
      },
      formModal: false,
      formShow: true,
      formValidating: false,
      formSending: false,
      formSent: false,
      formError: false,
      forms,
      currentForm: forms.seedForm,
      formValues: {
        name: '',
        company: '',
        phone: '+7',
        email: '',
        audience: calcOptions[0].cat,
        budget: '',
        plan: '',
        question: '',
        subscription: true,
        position: '',
      },
      formErrors: {},
      faqs: [
        { q: 'Как выглядит реклама и какие форматы возможны? ', a: 'Реклама отображается в Telegram-каналах в виде постов. Допускается развернутый текст, выделение, ссылки на сайт или внешние источники, включение фото- и видеоматериалов.'},
        { q: 'В чем отличие рекламы в Nativity от Telegram Ads? ', a: 'В отличие от Telegram Ads платформа Nativity дает возможность контактировать с аудиторией через полноценные промопосты с включением фото- и видеоконтента. Кроме этого, все аудиторные закупки ведутся только в верифицированных каналах, что повышает эффективность кампании.' },
        { q: 'Почему оплата за просмотры (CPV)?', a: 'Nativity использует прозрачную модель programmatic-закупки, которая позволяет ориентироваться на результат в реальных просмотрах, а не количестве подписчиков в Telegram-каналах. Такая модель исключает неопределенность и дает возможность рекламодателю прогнозировать результаты кампании.' },
        { q: 'Как запустить рекламную кампанию?', a: 'Сейчас реклама на платформе Nativity запускается только через персонального менеджера. После 22 февраля 2023 года у рекламодателей появится возможность самостоятельного заведения рекламы через личный кабинет.' },
        { q: 'Как соблюдается Закон о рекламе?', a: ' Платформа Nativity является рекламораспространителем и полностью исполняет Закон о рекламе, снимая с рекламодателей обязательства по маркировке рекламных материалов, передаче данных в ОРД и сдаче отчетности по каждому размещению.' },
      ],
      faqModal: false,
    }
  },
  computed: {
    calcChannel() { return this.calcOptions.find(c => c.cat === this.calcAu) },
    calcViews() { return Math.ceil(this.calcBudget/this.calcCpv) },
    // calcPosts() { return { max: Math.ceil(this.calcViews/this.calcChannel.minPosts), min: Math.ceil(this.calcViews/this.calcChannel.maxPosts) }},
    slidersInit() { return this.window.width < 768 },
    minBudgetReady() { return new Intl.NumberFormat('ru', { useGrouping: true }).format(this.minBudget)},
    calcViewsReady() { 
      return (this.calcCpv < this.calcChannel.minCpv) ? 0 : new Intl.NumberFormat('ru', { useGrouping: true }).format(this.calcViews)
    },
    calcCpvReady() { 
      return (this.calcCpv < this.calcChannel.minCpv) ? 0 : this.calcCpv
    },
    isValidName() { return !this.formValidating ? null : this.formValues.name.length > 0 },
    isValidCompany() { return !this.formValidating ? null : this.formValues.company.length > 0 },
    isValidPhone() { return !this.formValidating ? null : this.formValues.phone.length >= 18 },
    isValidEmail() { 
      const re = /(.+)@(.+){2,}\.(.+){2,}/
      return !this.formValidating ? null : re.test(this.formValues.email.toLowerCase())
    },
    isValidBudget() { return !this.formValidating ? null : this.formValues.budget >= this.minBudget },
    isValidQuestion() { return !this.formValidating ? null : this.formValues.question.length > 5 },
  },
  beforeMount() {
    this.testWebP()
  },
  mounted() {
    this.$nextTick(function () {
      this.onResize()
    })
    window.addEventListener('resize', this.onResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize);
  },
  created () {
  },
  methods: {
    testWebP() {
      const that = this
      const webP = new Image();
      webP.onload = webP.onerror = function () {
          that.window.canUseWebP = webP.height === 2
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    },
    onResize() {
      this.$nextTick(() => {
        this.navHeight = this.$refs.navigation? this.$refs.navigation.$el.clientHeight : this.navHeight
        this.showSidebar = false
        this.window.width = document.documentElement.clientWidth
        this.window.height = window.innerHeight
      })
    },
    scrollIntoView(event) {
      event.preventDefault()
      const href = event.target.getAttribute('href')
      const el = href ? document.querySelector(href) : null
      if (el) {
        if (this.faqModal) this.$refs['faq-modal'].toggle(el)
        this.$router.replace({ name: this.$route.name, hash: href })        
      }
    },
    onSliderInit(slider) {
      this.slidersReady[slider] = true
    },
    nextConvinienceSlide() {
      this.$refs.convinienceSlider.next()
    },
    preparePoint: (point, color) => '<i><svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.63398 0.499999C6.01888 -0.166667 6.98113 -0.166667 7.36603 0.5L12.1292 8.75C12.5141 9.41667 12.0329 10.25 11.2631 10.25H1.73686C0.967059 10.25 0.485935 9.41667 0.870835 8.75L5.63398 0.499999Z" fill="' + color + '"/></svg></i>' + point,
    changeAudience(option) {
      this.formValues.audience = option
      this.calcAu = option
      this.calcCpv = this.calcChannel.betterCpv
    },
    validateForm () {
      this.formErrors = {}
      if (this.currentForm.fields.includes('name') && !this.isValidName) this.formErrors.name = 'Введите имя'
      if (this.currentForm.fields.includes('company') && !this.isValidCompany) this.formErrors.company = 'Введите название компании'
      if (this.currentForm.fields.includes('phone')) {
        if (this.formValues.phone.length === 4 ) this.formErrors.phone = 'Укажите номер телефона'
        else if (!this.isValidPhone) this.formErrors.phone = 'Укажите правильный номер телефона'
      }
      if (this.formValues.email.length === 0) this.formErrors.email = 'Укажите e-mail'
      else if (!this.isValidEmail) this.formErrors.email = 'Укажите правильный e-mail'
      if (this.currentForm.fields.includes('budget')) {
        if (this.formValues.budget.length === 0) this.formErrors.budget = 'Укажите бюджет'
        else if (!this.isValidBudget) this.formErrors.budget = 'Слишком маленький бюджет кампании!'
      }
      if (this.currentForm.fields.includes('question') && !this.isValidQuestion) this.formErrors.question = 'Задайте вопрос'
      return (this.formErrors && Object.keys(this.formErrors).length === 0 && Object.getPrototypeOf(this.formErrors) === Object.prototype) 
    },
    async postFormDataAsJson(formData, formId) {
      const body = new URLSearchParams(formData)
      body.delete('position')
      const fetchOptions = {
        redirect: "follow",
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body,
      };
      let url = "https://script.google.com/macros/s/AKfycbxlBOHZhI7jLT-MHKgihYTVjQioiey89IkCEtQAZMmXL0qz_ZVOtPehhHfjeI2Tn1o0/exec";
      if (formId === 'FAQForm') url = "https://script.google.com/macros/s/AKfycbwDGDGJch0McpuMMotfZpN_gLqTo66etvf2a0TihsPoLJoOUpo87fS6CxqDhwQgis0d2A/exec";
      const response = await fetch(url, fetchOptions);

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      } else {
        this.$metrika.reachGoal('form_js_reg')
        this.$metrika.hit('/sent')
      }

      return response.json();
    },
    async onSubmit(formId) {
      if (this.formValues.position) return 
      const form = document.getElementById(formId)
      this.formValidating = true
      if(this.validateForm()){
        this.formValidating = false
        this.formSending = true;
        try {
          const formData = new FormData(form);
          const responseData = await this.postFormDataAsJson(formData, formId);
          if (responseData.result === 'success') {
            this.formShow = false;
            this.formSent = true;
            this.formSending = false;
            this.formError = false;
          }
        } catch (error) {
          this.formShow = false;
          this.formSent = false;
          this.formSending = false;
          this.formError = true;
        }
      }
    },
    formClose() {
      this.formModal = false
      this.faqModal = false
      this.formError = false
      this.formSent = false
      this.formValidating = false
      this.formSending = false
      this.formShow = true
      this.minBudget = this.plans[0].budget
      this.formValues = {
        name: '',
        company: '',
        phone: '+7',
        email: '',
        audience: this.calcOptions[0].cat,
        budget: '',
        plan: '',
        question: '',
        subscription: true,
        position: '',
      }
      this.formErrors = {}
    },
    focusThis(referral) {
      this.$refs[referral].focus()
    },
    isFieldNeeded(fieldId) {
      return this.currentForm.fields.includes(fieldId)
    },
    canUseWebP() {
        if (this.window.canUseWebP) {
          return this.window.canUseWebP
        }
        const el = document.createElement('canvas')
        if (el.getContext && el.getContext('2d')) {
          this.window.canUseWebP =
            el.toDataURL('image/webp').indexOf('data:image/webp') === 0
          return this.window.canUseWebP
        }
        this.window.canUseWebP = false
        return this.window.canUseWebP
    },
  },
}
</script>

<style lang="scss">

.navbar {
  padding: 1em;

  .navbar-brand {
    display: flex;
    font-size: 1em;
    padding: 0;
    margin: 0 5em 0 0;

    img {
      width: 7.5625em;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 2.125em 3.75em 2.125em 3.75em;
  }

  .navbar-nav .nav-link {
    color: black;
  }

  a, .btn-dark, .btn-primary {
    padding: 0 2.333333em;
    font-size: .6875em;
    line-height: 2.727272;
    
    @media screen and (min-width: 768px) {
      line-height: 2.875;
      padding: 0 1em!important;
      font-size: .875em;
    }
  }

  .btn-dark, .btn-primary {

    @media screen and (min-width: 768px) {
      width: 13.3em;
      height: 2.86em;
      padding: 0 1.25em!important;
    }
  }

  li.active a {
    font-weight: bold;
    color: #1B81F9;
  }

  .navbar-toggler {
    color: rgba(0, 0, 0, 1);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }

  .b-sidebar {

    width: 21em;
    
    header {
      padding: .5em .25em 0;
    }
    
    &.b-sidebar-right > .b-sidebar-header .close {
      margin: 0 0 0 auto;
      font-size: 2em;
      opacity: 1;
    }

    a, .btn-dark {
      padding: 0 1.75em;
      font-size: clamp(14px, 1em, 22px);
      line-height: 2.625;
    }
  }

  .navbar-button {
    display: flex;
  }
  
  .main-links {
    height: 1.75em;
    padding: 0 0.5em 0 0;

    .main-link {
        padding: 0 0.75em;

      a {
        padding: 0;
        font-size: .875em;
        line-height: 2;
      }

      &.index-link {
        background: #1B81F9;
        border-radius: 999px;
        box-shadow: -0.125em 0 0.1875em rgba(0, 0, 0, 0.15);

        a {
          color: white;
          padding: 0 0.5em;
        }
      }

      @media screen and (min-width: 768px) {
        padding:0;
      }
    }
  }
}

#hero {
  position: relative;
  padding-top: 2.75em;
  padding-bottom: 3.75em;
  margin-top: 6.25em;

  @media screen and (min-width:768px) {
    padding-top: 6.75em;
    padding-bottom: 3em;
    margin-top: 0;
  }

  .hero-bg-1 {
    width: 12.375em;
    height: 18em;
    top: 6.5em;
    left: calc(50% + 2.625em);
    background: rgba(17, 66, 238, 0.8);
    filter: blur(5.625em);
    -webkit-filter: blur(5.625em);
    transform: translate3d(0, 0, 0);
    transform: rotate(-47deg);
    z-index: -1;

    @media screen and (min-width: 768px) {
      width: 27em;
      height: 40em;
      top: 8.5em;
      left: calc(50% + 6em);
      filter: blur(11.5em);
      -webkit-filter: blur(11.5em);
    }
  }

  .hero-bg-2 {
    width: 21.5em;
    height: 14em;
    top: 2.5em;
    left: calc(50% - 17.5em);
    background: rgba(55, 183, 255, 0.7);
    filter: blur(5.625em);
    -webkit-filter: blur(5.625em);
    transform: translate3d(0, 0, 0);
    transform: rotate(-25deg);
    z-index: -1;

    @media screen and (min-width: 768px) {
      width: 47em;
      height: 31em;
      top: 0;
      left: calc(50% - 38em);
      filter: blur(11.5em);
      -webkit-filter: blur(11.5em);
    }
  }

  .hero-bg-3 {
    width: 30em;
    height: 13.5em;
    top: 4.75em;
    left: calc(50% - 13em);
    background: rgba(27, 129, 249, 0.8);
    filter: blur(5.625em);
    -webkit-filter: blur(5.625em);
    transform: translate3d(0, 0, 0);
    z-index: -1;

    @media screen and (min-width: 768px) {
      width: 64em;
      height: 30em;
      top: 4.375em;
      left: calc(50% - 28em);
      filter: blur(11.5em);
      -webkit-filter: blur(11.5em);
    }
  }

  .hero-bg-around {
    width: 25.75em;
    height: auto;
    left: -.25em;
    top: 2em;
    transform: rotate(9.71deg);

    img {
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      width: 67em;
      height: 25.5em;
      top: 3.5em;
      left: calc(50% - 33em);
    }
  }

  .hero-bg-tg {
    width: 5.125em;
    height: auto;
    left: 1em;
    left: calc(50% - 10.75em);
    top: -0.6875em;
    transform: rotate(28.95deg);
    pointer-events: none;

    @media screen and (min-width: 768px) {
      transform: none;
      width: 11em;
      height: 11em;
      top: 2.1875em;
      left: 6.8125em;
      left: calc(50% - 36em);
    }
  }

  .hero-bg-marble {
    width: 4.625em;
    height: auto;
    left: 80vw;
    left: calc(50% + 7em);
    top: 9.375em;

    @media screen and (min-width: 768px) {
      width: 9.375em;
      height: 9.375em;
      top: 19.3125em;
      left: 71.375em;
      left: calc(50% + 27.5em);
    }
  }

  .hero-brand {
    display: flex;
    margin: -3.5em 0 3.5em;

    img {
      width: 7.5625em;
      margin: auto;
    }
  }


  .hero-description {
    line-height: 1.2;
    width: 17.5em;
    margin-bottom: 1.642857em;

    span {
      color: #609cf9;
      padding: 0 0.5em 0.125em;
    }

    @media screen and (min-width: 768px) {
      font-size: 1.5em;
      width: auto;
    }
  }

  .info {
    position: relative;
    box-shadow: .125em .1875em 1.25em rgba(0, 0, 0, 0.15);
    border-radius: .625em;
    width: 15.125em;
    height: 5.125em;
    padding: 1.25em;
    margin-bottom: 1.625em;

    .info-icon {
      position: absolute;
      top: -.75em;
      right: 1em;
      height: 1em;
      width: 1em;
      
      svg {
        width: 100%;
        height: 100%;
      }

      @media screen and (min-width: 768px) {
        width: 1.5em;
        height: 1.5em;
      }
    }

    p {
      font-size: .625em;
      line-height: 1.2;
      font-weight: 500;
    }

    @media screen and (min-width: 768px) {
      width: 22em;
      height: 8em;
      padding: 2.25em 1em;
      
      p {
        font-size: 1em;
      }

    }
  }
}

#partners {
  padding-bottom: 1.75em;

  .slick-track.slick-center {
    display: flex;
    align-items: center;
  }

  img.h-20 {
    height: 1em;
    width: auto;
    margin: 1em;
  }

  img.h-30 {
    height: 1.5em;
    width: auto;
    margin: .6875em 1em;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 6.75em;

    h2 {
      font-size: 1.5em;
    }

    img.h-20 {
      height: 1.25em;
      width: auto;
      margin: 1em 2em;
    }

    img.h-30 {
      height: 1.875em;
      width: auto;
      margin: .6875em 2em;
    }
  }
}

#pros {
  padding-bottom: 1.75em;

  .pro {
    margin-bottom: 1.25em;
    min-height: 14.5em;
  
    img {
      width: 2.5em;
      height: 2.5em;
      margin-bottom: 0.625em;
    }

    p {
      font-size: .875em;
      line-height: 1.4;
    }

    a {
      display: flex;
      border: solid black 1px;
      border-right: none;
      color: black;
      font-size: .75em;
      padding-left: .5em;
      
      u {
        padding: .6em;
        line-height: 1;
      }

      i {
        width: 100%;
        height: calc(100% + 2px);
        align-items: center;
        justify-content: center;
        margin: -1px;
        position: absolute;
        right: 0;
        background: url("~/static/img/right-round.svg") right center no-repeat;
        background-size: contain;
      }
    }

    &.pro-2 u {
      letter-spacing: -.06em;

      @media screen and (min-width: 768px) {
        letter-spacing: normal;
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 8em;

    .pro {
      min-height: 16em;
      margin-bottom: 0;
  
      img {
        width: 4.375em;
        height: 4.375em;
        margin-bottom: 2.375em;
      }

      h3 {
        font-size: 1.5em;
        margin-bottom: .833333em;
        min-height: 2em;
      }

      p, a {
        font-size: 1em;

        u {
          line-height: .864;
        }
      }

      &.pro-1 {
        width: 16.61em;

        a {
          width: 13.25em;
        }
      }

      &.pro-2 {
        width: 22.625em;

        a {
          width: 15.625em;
        }
      }

      &.pro-3 {
        width: 17.875em;

        a {
          width: 17.875em;
        }
      }

      &.pro-4 {
        width: 16.875em;

        a {
          width: 15.25em;
        }
      }
    }
  }
}

#telegram {
  padding-bottom: 2.375em;

  .telegram-card {
    box-shadow: .1875em .25em 2.5em rgba(0, 0, 0, 0.15);
    border-radius: .625em;

    &.bg-white {
      padding: 1.75em 2.25em 1.75em 1.5em;
      margin-bottom: .625em;
      border-radius: .875em;
      width: 20.25em;
      max-width: 100%;

      h3 {
        font-size: 1.25em;
        line-height: 1.2;
        text-transform: uppercase;
        font-weight: bold;
      }

      p {
        font-size: 1em;
        line-height: 1.2;
        margin-bottom: 0;
      }
    }

    &.telegram-card-blue {
      width: 16.875em;
      height: 6.875em;
      background: #1B81F9;
      padding: .875em 1.5em;

      p {
        font-size: 1.125em;
        color: white;

        span {
          font-size:1.666667em;
        }
      }

      @media screen and (min-width: 768px ) {
        width: 20.25em;
        height: 8.75em;
        padding: 1em 2.625em;
        margin-left: 27em;
        position: relative;

        p {
          span {
            line-height: 1.4;
          }
        }
      }
    }
  }

  .tg_5 {
    position: absolute;
    top: -2.5em;
    left: 15.5em;
    width: 5.375em;
    height: 5.375em;
    pointer-events: none;

    @media screen and (min-width: 768px) {
      width: 8.5em;
      height: 8.5em;
      top: -3.75em;
      left: 43em;
    }
  }

  .telegram-card-nm {
    width: 13.25em;
    margin-top: -1.1875em;
    margin-left: auto;

    @media screen and (min-width: 768px) {
      width: 21.5em;
      margin-top: -5em;
      margin-left: 7em;
    }
  }

  .telegram-card-al {
    width: 12.8125em;
    margin-top: -.5em;

    @media screen and (min-width: 768px) {
      width: 20.375em;
      margin-top: -1em;
      margin-left: 2em;
    }
  }

  .telegram-card-bnk {
    width: 10.1875em;
    height: auto;
    margin-left: auto;
    margin-top: -3.125em;

    @media screen and (min-width: 768px) {
      position: absolute;
      width: 16em;
      margin-top: 0;
      top: 9.25em;
      right: 4.625em;
    }
  }

  .telegram-card-xpl {
    width: 10.25em;
    margin-top: -14.5625em;
    margin-bottom: 1em;

    @media screen and (min-width: 768px) {
      width: 10.75em;
      margin-top: -12em;
      margin-left: 20.6em;
    }
  }

  .tg_8 {
    position: absolute;
    bottom: -3.3125em;
    left: 0;
    width: 6.875em;
    height: 6.875em;
    pointer-events: none;

    @media screen and (min-width: 768px ) {
      width: 8.75em;
      height: 8.75em;
      bottom: 4.8em;
      left: auto;
      right: -4.8em;
    }
  }

  @media screen and (min-width: 768px ) {
    padding-bottom: 3.5em;

    .order-md-1 {
      align-items: flex-end;
    }
  }
}

#convinience {
  padding-bottom: 3em;

  .convinience-slide {
    width: 13.125em;
    padding-top: 1.25em;
    padding-right: 1.1875em;
    position: relative;

    .card-light {
      width: 13.125em;
      height: 13.125em;
      background: #EBEBEB;
      border-radius: .625em;
      justify-content: center;
      align-content: center;
      flex-wrap: wrap;
      margin-bottom: 2.125em;

      .convinience-inner  {
        text-align: center;

        img {
          margin: auto;
          box-shadow: .125em .125em .5em rgba(0, 0, 0, 0.1);
        }

        &.inner-1 {
          padding: .5em 1.25em;
          box-shadow: .125em .125em .5em rgba(0, 0, 0, 0.1);
          border-radius: .25em;
          
          span {
            font-size: .5625em;
          }
        }

        &.inner-2 img {
          width: 8.928571em;
          margin: .5em auto;
        }

        &.inner-3 {
          
          img {
            width: 6.25em;
          }

          b {
            font-size: .75em;
            margin-bottom: -1.5em;
            display: block;
          }
        }

        &.inner-4 img {
          width: 6.25em;
        }

        &.inner-5 img {
          width: 5.6875em;
        }
      }
    }

    p {
      font-size: 1em;
      line-height: 1.2;
      width: 13.125em;
      margin-bottom: 0;
    }

    .next {
      position: absolute;
      width: 2.625em;
      height: 2.625em;
      top: 6.5em;
      left: 12.375em;
      z-index: 1;

      @media screen and (min-width: 768px) {
        left: 13.8125em;
      }
    }
  }

  .btn-dark {
    margin-top: 1.25em;
  }

  .tg_8 {
    position:absolute;
    width: 5.625em;
    height: 5.625em;
    transform: scaleX(-1);
    bottom: -4.375em;
    right: 0;
    pointer-events: none;

    @media screen and (min-width:768px) {
      width: 10.75em;
      height: 10.75em;
      transform: none;
      right: auto;
      bottom: 3em;
      left: 8em;
      z-index: -1;
    }
  }

  @media screen and (min-width:768px) {
    padding-bottom: 7.5em;
  }
}

#audience {
  padding-bottom: 3em;

  .audience-slide {
    width: 11em;
    padding-top:1.25em;
    padding-left: 1em;
    margin-right: -0.375em;
    position: relative;

    .audience-inner {
      width: 10.375em;
      height: 10.625em;
      padding: 1.75em 2.375em 2.5em 1em;
      background: radial-gradient(70.85% 70.85% at 35.96% 29.15%, #60A8FF 0%, #1B81F9 100%);
      box-shadow: 0.1875em -0.25em 1.4em rgba(0, 0, 0, 0.15);
      border-radius: 1.25em;
      flex-direction: column;
      margin-bottom: 1em;

      img {
        margin-bottom: .625em;
        width: 5.6875em;
      }

      p {
        color: white;
        line-height: 1;
      }

      &.inner-2 {
        background: radial-gradient(429.18% 64.77% at 17.09% 22.74%, #69DD8A 0%, #58B276 100%);

        img {
          width: 4.4375em;
        }
      }

      &.inner-3 {
        background: radial-gradient(70.85% 70.85% at 35.96% 29.15%, #FCB950 0%, #F19338 100%);

        img {
          width: 5.5em;
        }
      }

      &.inner-4 {
        background: radial-gradient(70.85% 70.85% at 35.96% 29.15%, #9D8DFF 0%, #7649F9 100%);

        img {
          width: 3.375em;
        }
      }

      &.inner-5 {

        img {
          width: 4.75em;
        }
      }

      &.inner-6 {
        background: radial-gradient(429.18% 64.77% at 17.09% 22.74%, #69DD8A 0%, #58B276 100%);

        img {
          width: 4.4375em;
        }
      }

      &.inner-7 {
        background: radial-gradient(70.85% 70.85% at 35.96% 29.15%, #FCB950 0%, #F19338 100%);

        img {
          width: 4.5625em;
        }
      }
    }

    @media screen and (min-width:768px) {
      padding:0;
      margin:auto;
      
    }
  }

  span:not(.spinner-border) {
    font-size: 1.625em;
    line-height: 1.4;
    text-align: center;
    color: #1B81F9;
    background: white;
    border-radius: 999px;    
    vertical-align: middle;
    padding: 0.1em 0.5em;
    margin-right: 0.25em;

    @media screen and (min-width:768px) {
      font-size: 2em;
    }
  }

  .tg_3 {
    position: absolute;
    width: 5.5em;
    height: 5.5em;
    left: 0;
    bottom: -4.375em;
    pointer-events: none;
  
    @media screen and (min-width:768px) {
      width: 11em;
      height: 11em;
      left: 8.333333%;
      bottom: -18em;
    }
  }

  @media screen and (min-width:768px) {
    padding-bottom: 7.5em;
  }
}

#channels {
  position: relative;
  padding-bottom: 3em;

  .channels-bg-1 {
    position: absolute;
    width: 20em;
    height: 11.75em;
    top: 4.625em;
    left: calc(50% - 21.4em);
    background: rgba(27, 129, 249, 0.8);
    filter: blur(6.5em);
    -webkit-filter: blur(6.5em);
    transform: translate3d(0, 0, 0);
    transform: rotate(-12deg);
    z-index: -1;

    @media screen and (min-width: 768px) {
      width: 35em;
      height: 20.25em;
      top: 9em;
      left: calc(50% - 51.375em);
      filter: blur(11.5em);
      -webkit-filter: blur(11.5em);
    }
  }

  .channels-bg-2 {
    position: absolute;
    width: 24.375em;
    height: 15.875em;
    top: 17.25em;
    left: calc(50% - 20em);
    background: rgba(55, 183, 255, 0.7);
    filter: blur(6.5em);
    -webkit-filter: blur(6.5em);
    transform: translate3d(0, 0, 0);
    transform: rotate(-3deg);
    z-index: -1;

    @media screen and (min-width: 768px) {
      width: 42em;
      height: 27.25em;
      top: 23.5em;
      left: calc(50% - 48.25em);
      filter: blur(11.5em);
      -webkit-filter: blur(11.5em);
    }
  }

  .channels-slide {

    .channels-inner {

      max-width: 10.25em;
      margin: auto;
      padding: 0 .5em;

      img {
        width: 6.125em;
        margin: auto;
      }

      .channels-name {
        font-size: 1.125em;
        text-align: center;
        line-height: 1.2;
        min-height: 2.75em;
        margin-bottom: 0.25em;

        @media screen and (min-width: 768px) {
          min-height: auto;
          margin-bottom:.5em;
        }
      }

      .channel-subs {
        margin-bottom: 0;
        line-height: 1;
        
        &::before {
          content: "";
          display: inline-block;
          width: 0.5em;
          height: 1em;
          margin: 0 0.625em 0 1.5em;
          background: url('~/static/img/subs.svg') center center no-repeat;
          background-size: contain;
          vertical-align: top;

          @media screen and (min-width: 768px) {
            margin-left: 2.75em;
          }
        }
      }

      .channel-views {
        margin-bottom: 0;
        line-height: 1;
        
        &::before {
          content: "";
          display: inline-block;
          width: 0.5em;
          height: 1em;
          margin: 0 0.625em 0 1.5em;
          background: url('~/static/img/views.svg') center center no-repeat;
          background-size: contain;
          vertical-align: top;

          @media screen and (min-width: 768px) {
            margin-left: 2.75em;
          }
        }
      }

      .channel-er {
        margin: 0 0 1.75em 2.625em;
        line-height: 1;
        b {
          font-size: 0.75em;
        }

        @media screen and (min-width: 768px) {
          margin-left: 3.875em;
        }
      }

      @media screen and (min-width: 768px) {
        max-width: none;
      }
    }
  }

  @media screen and (min-width:768px) {
    padding-bottom: 7.5em;
  }
}

#management {
  position: relative;
  padding-bottom: 1.75em;

  .management-card {
    padding: 1.125em 1.25em;
    margin-bottom: 1.25em;
    background: linear-gradient(259.71deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.9) 100%);
    box-shadow: 0.1875em .25em 2em rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(3em);
    border-radius: 0.875em;

    h3 {
      font-size: 1.25em;
      line-height: 1.2;
      margin-bottom: 1em;
    }
    
    .management-card-inner {
      padding: 1em 1em 1em 3em;
      margin-bottom: 0.375em;
      background: url('~/static/img/stop.svg') .8125em center no-repeat;
      background-color: #D7E8FC;
      background-size: 1.5em;
      border-radius: .875em;
      box-shadow: -0.0625em 0.0625em .5em #E6E6E6;

      p {
        font-size: .875em;
        line-height: 1.1;
        font-weight: bold;
        margin-bottom: 0;
      }

      &:last-of-type {
        margin-bottom: 1.25em;
      }
    }

    p {
      line-height: 1.2;
    }

    &.pro {
      h3 {
        font-size: 1.625em;
        line-height: 1.2;
      }

      .management-card-inner {
        background: url('~/static/img/check.svg') .8125em center no-repeat, linear-gradient(259.71deg, #1078F1 0%, #459BFF 100%), linear-gradient(259.71deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.9) 100%);
        box-shadow: 0.1875em .25em 2em rgba(0, 0, 0, 0.15);
        backdrop-filter: blur(3em);
      }

      p {
        color: white;
      }
    }

    @media screen and (min-width:768px) {
      height: 100%;
      padding: 2.625em 5.875em 2.25em;

      .btn-dark {
        font-size: .875em;
        width: 16.25em;
        height: 3.14em;
      }
    }
  }

  @media screen and (min-width:768px) {
    padding-bottom: 7.5em;
  }
}

#plans {

  position: relative;

  .plans-bg-1 {
    position: absolute;
    width: 17.25em;
    height: 22.25em;
    bottom: -2.5em;
    left: calc(50% - 15em);
    background: rgba(17, 66, 238, 0.8);
    filter: blur(6.25em);
    -webkit-filter: blur(6.25em);
    transform: translate3d(0, 0, 0);
    transform: rotate(-80deg);
    z-index: -1;
  }

  .plans-bg-2 {
    position: absolute;
    width: 22.625em;
    height: 14.75em;
    bottom: -9.5em;
    left: calc(50% - 26em);
    background: rgba(55, 183, 255, 0.7);
    filter: blur(6.25em);
    -webkit-filter: blur(6.25em);
    transform: rotate(150deg);
    z-index: -1;
  }

  .plans-bg-3 {
    position: absolute;
    width: 18.875em;
    height: 11em;
    bottom: -6.375em;
    left: calc(50% - 20.5em);
    background: rgba(27, 129, 249, 0.8);
    filter: blur(6.25em);
    -webkit-filter: blur(6.25em);
    transform: translate3d(0, 0, 0);
    transform: rotate(160deg);
    z-index: -1;
  }

  .slick-track, .dt-track {
    display: flex !important;
    padding-bottom: 3em;

    .slick-slide {
      height: inherit;

      & > div {
        height: 100%;
      }
    }

    .plans-slide {
      position: relative;
      height: 100%;
      padding-top: 2.25em;
      padding-left: 1em;
    }

    .plans-inner {
      position: relative;
      padding: 0 2em 2em;
      width: 18.75em;
      height: 100%;
      margin: auto;
      box-shadow: 0.1875em .25em 2em rgba(0, 0, 0, 0.15);
      border-radius: 0.875em;

      .plan-title {
        border-radius: 999px;
        margin: -.6125em auto 0;

        h3 {
          font-size: 1.25em;
          font-weight: 400;
          line-height: 1.6;
          margin: 0 1.2em;
        }
      }

      .plan-budget {
        margin: 1.875em 0 0;
        font-size: 1.125em;
        line-height: 1.2;

        b {
          font-size: 1.666667em;
        }
      }

      .plan-descr {
        font-size: 0.875em;
        font-weight: 500;
      }

      hr {
        width: 13.25em;
        margin-top: .375em;
        margin-bottom: 1.375em;
        border: 0;
        border-top: 1px solid black;
      }

      .plan-promo {
        position: relative;
        &::before {
          content: '';
          position: absolute;
          width: 130%;
          height: 150%;
          top: -0.1em;
          left: -0.75em;
          background: url('~/static/img/promo.svg') center center no-repeat;
          background-size: contain;
        }

        &.promo-2::before {
          background: url('~/static/img/promo-2.svg') center center no-repeat;
          background-size: contain;
          width: 13em;
          height: 3em;
          top: -0.8em;
        }
      }

      li {
        font-size: 0.75em;
        line-height: 1.4;
        padding-left: 2em;
        margin-bottom: 2em;

        i {
          position: absolute;
          width: 1.25em;
          margin-left: -2em;
        }
      }

      &.inner-0 {
        background: url('~/static/img/tg_000.png') left .25em bottom 1em no-repeat;
        background-size: 7em;
      }

      @media screen and (min-width:768px) {
        .btn-dark {
          font-size: .875em;
          width: 100%;
        }
      }
    }
  }

  @media screen and (min-width:768px) {
    padding-top: 3.75em;
    padding-bottom: 2.6875em;
    background-color: white;
  }
}

#analytics {

  padding-bottom: 3em;

  .analytics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
    grid-template-rows: repeat(5, 1fr);
    grid-gap: .5em;
    grid-auto-flow: dense;

    .bg-white {
      padding:.5em;
      border-radius: .6875em;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h3 {
        font-size: 1em;
        font-weight: 500;
        line-height: 1.5;
        margin-bottom: 0;
      }

      @media screen and (min-width: 768px) {
        padding: 1.375em;
      }
    }

    .vio {
      grid-column: 1 / 3;

      h3 {
        margin-left: .3125em;
      }

      @media screen and (min-width: 768px) {
        grid-column: 2 / 4;
      }
    }

    .va {
      grid-row: 2 / 4;
      text-align: center;
      display:flex;
      flex-direction: column;

      .bg-white {
        flex-grow: 1; 
        flex-basis: 0;
        padding: .25em .5em;
        justify-content: center;

        p {
          font-size: 0.8125em;
          font-weight: 300;
          margin-bottom: 0;
        
          &.text-primary {
            font-size: 1.25em;
            font-weight: 400;
            line-height: 1.3em;
          }
        }

        &:not(:last-child) {
          margin-bottom: .5em;

          .text-primary::before {
            content: "";
            display: inline-block;
            width: 1.3em;
            height: 1.3em;
            vertical-align: middle;
            margin-right: .5em;
            background: url(~/static/img/views.svg) center center no-repeat;
            background-size: contain;
          }
          
          .va-posts::before {
            background-image: url(~/static/img/posts.svg);
          }
          
          .va-er::before {
            background-image: url(~/static/img/er.svg);
          }
          
          .va-cost::before {
            background-image: url(~/static/img/cost.svg);
          }
        }

        @media screen and (min-width: 768px) {
          padding: 1em 1.5em .875em;
        }
      }

      @media screen and (min-width: 768px) {
        grid-row: 1 / 3;
      }
    }

    .audi {
      grid-row: 2 ;
      grid-column: 2;

      @media screen and (min-width: 768px) {
        grid-column: 3;
      }
    }
    .chann {
      grid-row: 3 ;
      grid-column: 2;

      @media screen and (min-width: 768px) {
        grid-row: 2;
        padding: 1.375em 1em;
      }
    }

    .place {
      grid-column: 1 / 3;
      grid-row: 4 / 6;

      h3 {
        margin-bottom: -1em;
      }

      .place-header {

        div {
          flex-grow: 1;
          flex-basis: 0;
          align-items: center;
        }

        img {
          width: .55em;
        }
        .text-primary {
          font-size: .5em;
        }
      }

      .place-channel {

        div:not(.place-channel-ava) {
          flex-grow: 1;
          flex-basis: 0;
          align-items: center;
        }
        
        img {
          width: 2em;
          max-width: 100%;
        }

        p, span {
          font-size: .75em;
        }

        .place-channel-user {
          margin-left: 0.75em;

          p:not(.text-primary) {
            font-size: .8125em;
          }
        }
      }

      & > div:last-child {
      
        img {
          width: 1.375em;
          margin: 0 .5em 0 1em;
        }
      
        u {
          font-size: .75em;
        }
      }

      @media screen and (min-width:768px) {
        grid-column: 4 / 6;
        grid-row: 1 / 3;
      }
    }

    @media screen and (min-width:768px) {
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-gap: 1em;
    }
  }

  @media screen and (min-width:768px) {
    padding-top: 7.5em;
    padding-bottom: 7.5em;
  }
}

#calculator {
  position: relative;
  padding-bottom: 5em;

  .bg-white {
    padding: 2em 1.25em 1.25em;
    box-shadow: 0.1875em .25em 2em rgba(0, 0, 0, 0.15);
    border-radius: 0.875em;
    margin-top: 1.25em;

    @media screen and (min-width:768px) {
      padding: 3em 2.5em 2em;
      margin-right: 0.75em;
      margin-left: 0.75em;
    }
  }

  label {
    font-size: 1.25em;
    line-height: 1.2;
    margin-bottom: .55em;
  }

  select {
    border: solid #1B81F9 2px;
    border-radius: 0.625em;
    font-size: 1.25em;
    line-height: 1.2;
    margin-top: .45em;
    margin-bottom: 1.2em;

    @media screen and (min-width:768px) {
      height: 2.5em;
    }
  }

  .plan-legend {
    display: flex;
    justify-content: space-between;
  }

  .custom-range {
    height: 1.4em;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    height: 2px;
  }

  input[type="range"]::-moz-range-track {
    height: 2px;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    background-color: #1B81F9;
    margin-top: -.6em;
    height: 1.25em;
    width: 1.25em;    
  }
  
  input[type="range"]::-moz-range-thumb {
    border: none; /*Removes extra border that FF applies*/
    background-color: #1B81F9;
    margin-top: -.6em;
    height: 1.25em;
    width: 1.25em;    
  }

  .plan-cpv-tooltip:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .better-cpv:hover {
    text-decoration: underline;
  } 

  .calc-result {
    font-size: 3.125em;
    line-height: 1.2;
    font-weight: 500;
  }

  p:last-of-type {
    margin-bottom: 1.25em;
  }

  .plan-result {
    font-size: 1.5em;
    line-height: 1.2;
    margin-right: .25em;
  }
  
  .calculator-bg-1 {
    width: 18.875em;
    height: 11em;
    bottom: 7.875em;
    left: calc(50% - 1.75em);
    background: rgba(27, 129, 249, 0.8);
    filter: blur(6.25em);
    -webkit-filter: blur(6.25em);
    transform: translate3d(0, 0, 0);
    transform: rotate(20deg);
    z-index: -1;

    @media screen and (min-width: 768px) {
      width: 35em;
      height: 20.25em;
      top: 9.25em;
      left: calc(50% + 6.125em);
      filter: blur(11.5em);
      -webkit-filter: blur(11.5em);
      transform: rotate(-12deg);
    }
  }

  .calculator-bg-2 {
    width: 22.625em;
    height: 14.75em;
    bottom: 7.125em;
    left: calc(50% - 16em);
    background: rgba(55, 183, 255, 0.7);
    filter: blur(6.25em);
    -webkit-filter: blur(6.25em);
    transform: translate3d(0, 0, 0);
    transform: rotate(28.7deg);
    z-index: -1;

    @media screen and (min-width: 768px) {
      width: 42em;
      height: 27.375em;
      top: 15.75em;
      left: calc(50% - 17.875em);
      filter: blur(11.5em);
      -webkit-filter: blur(11.5em);
      transform: rotate(-3deg);
    }
  }

  .calculator-bg-3 {
    width: 17.25em;
    height: 22.25em;
    bottom: -5.875em;
    left: calc(50% + 3.75em);
    background: rgba(17, 66, 238, 0.8);
    filter: blur(6.25em);
    -webkit-filter: blur(6.25em);
    transform: translate3d(0, 0, 0);
    transform: rotate(-80deg);
    z-index: -1;

    @media screen and (min-width: 768px) {
      width: 31.875em;
      height: 41em;
      top: 13.875em;
      left: calc(50% + 24.625em);
      filter: blur(11.5em);
      -webkit-filter: blur(11.5em);
      transform: rotate(-111deg);
    }
  }

  .calculator-bg-tg {
    width: 6em;
    height: 6em;
    right: 0;
    bottom: .25em;
    background: url(~/static/img/tg_000.png) center center no-repeat;
    background-size: contain;
    transform: scaleX(-1);
    pointer-events: none;

    @media screen and (min-width: 768px) {
      width: 10.375em;
      height: 10.375em;
      right: 12em;
      bottom: 3.25em;
    }
  }

  @media screen and (min-width:768px) {
    padding-bottom: 7.5em;
  }
}

#special {
  padding-bottom: 1.5em;

  .section-info {
    margin-bottom: 0.625em;

    @media screen and (min-width:768px) {
      margin-bottom: 3.333em;
    }
  }

  .bg-white {
    position: relative;
    padding: 1.25em 1.25em 1em;
    box-shadow: 0.1875em .25em 2em rgba(0, 0, 0, 0.15);
    border-radius: 0.875em;
    margin: .625em auto 0;
    min-height: 20.5em;

    img {
      width: 7.5em;
      position: relative;
    }

    .special-name {
      font-size: 1.375em;
      line-height: 1.2;
      margin-bottom: .5em;
    }

    .special-subs {
      margin-bottom: 0;
      line-height: 1;
      
      &::before {
        content: "";
        display: inline-block;
        width: 0.5em;
        height: 1em;
        margin-right: 0.625em;
        background: url('~/static/img/subs.svg') center center no-repeat;
        background-size: contain;
        vertical-align: top;
        }
    }

    .special-views {
      margin-bottom: 0;
      line-height: 1;
      
      &::before {
        content: "";
        display: inline-block;
        width: 0.5em;
        height: 1em;
        margin-right: 0.625em;
        background: url('~/static/img/views.svg') center center no-repeat;
        background-size: contain;
        vertical-align: top;
        }
    }

    .special-er {
      margin: 0 0 .5em 1.125em;
      line-height: 1;
      b {
        font-size: 0.75em;
      }
    }

    .special-cpv {
      font-size: 1.875em;
      font-weight: bold;
      line-height: 1.2;
      margin: 0 0 .1em;
    }

    .special-guarantee {
      font-size: .75em;
      line-height: 1.2;
      margin-bottom: 0;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: calc(50% - .5em);
      width: 5.25em;
      height: 5.25em;
      background: url(~/static/img/tg_008.png) center center no-repeat;
      background-size: contain;
      pointer-events: none;
    }
  }

  .btn-dark {
    margin-top: 1.25em;
  }

  @media screen and (min-width:768px) {
    padding-bottom: 7.5em;
  }
}

#legal {
  padding: 1.5em 0 0;
  border-bottom-left-radius: .875em;
  border-bottom-right-radius: .875em;

  .info {
    padding: 1.25em 1em 0;
    margin-bottom: 4.75em;
  
    .info-icon {
      position: absolute;
      top: -.5em;
      right: 1.25em;
      height: 2em;
      width: 2em;
      
      svg {
        width: 100%;
      }
    }

    p {
      margin-bottom: -2em;
    }

    .radius-14 {
      position: relative;
      background: linear-gradient(259.71deg, #FCB950 0%, #F19338 100%);
      backdrop-filter: blur(3em);
      padding: 0.625em 2em;
      bottom: -2.5em;

      @media screen and (min-width:768px) {
        margin: 0 9em;
      }
    }

    @media screen and (min-width:768px) {
      padding-bottom: 1.5em;
    }
  }
      
  .legal-title {
    margin: -.6125em auto 0;

    h3 {
      font-weight: 400;
      line-height: 1.6;
      margin: 0 1.2em;
    }
  }

  .tg_8 {
    position: absolute;
    width: 4.25em;
    height: 4.25em;
    z-index: 1;
    right: 1em;
    top: -2em;
  }

  .bg-primary {
    position: relative;
    padding: 0 3.375em 2em;
    margin: auto;

    .border {

      padding: 0 1.5em;
      margin-bottom: 2.5em;

      .white-pill {
        margin-bottom: 1.4em;
      }

      .exchange {
        width: 2.75em;
        height: 2.75em;

        &.exchange-top {
          margin-top: -1.375em;
        }

        &.exchange-bottom {
          margin-bottom: -1.375em;
        }
      }
    }

    @media screen and (min-width:768px) {
      padding: 0 2.5em 2.5em;
    }
  }

  .worse-alternative {
    border-top-right-radius: .875em;
    border-top-left-radius: .875em;
    padding-bottom: 1.25em;
    background-color: #EBEBEB;
    flex-direction: column;
    align-content: center;

    .legal-title {
      max-width: 18.75em;
      padding: 0.351em;

      h3{
        font-size: 1.0625em;
        line-height: 1.2;
      }

      @media screen and (min-width:768px) {
        max-width: 30.75em;
      }
    }

    .worse-title {
      padding: .5em;
    }

    .worse-number {
      line-height: 2.25em;
      width: 2.25em;
      height: 2.25em;
      margin-right: .333333em;
    }

    .worse-point {
      padding: .625em .3125em;
      background: linear-gradient(260deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.9) 100%);

      .worse-number {
        margin-right: .333333em;
      }

      div {
        max-width: calc(100% - 2em);
      }
    }

    .even-worse {
      width: 2.75em;
      height: 2.75em;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: calc(50% - 1.375em);
      bottom: -0.625em;
      transform: rotate(90deg);
      z-index: 1;

      svg {
        width: 1.125em;
        height: 1.125em;
      }

      @media screen and (min-width:768px) {
        right: -1.25em;
        left: auto;
        top: 0;
        bottom: 0;
        height: 2.8125em;
        width: 2.8125em;
        transform: none;
      }
    }

    .worse-registry {
      padding: 1.25em 2em;

      .bg-g-blue {
        padding: 0.375em .75em;

        @media screen and (min-width:768px) {
          padding: 0.375em;
        }
      }
    }

    @media screen and (min-width:768px) {
      border-radius: .875em;

      .col-12 .worse-point {
        padding: .3125em;
      }

      .the-worse {
        margin-top: 3.825em;
      }
    }
  }

  .legal-action {
    padding-bottom: 1.25em;
    background-color: #EBEBEB;
    border-bottom-left-radius: .875em;
    border-bottom-right-radius: .875em;

    @media screen and (min-width:768px) {
      background: none;
    }
  }

  @media screen and (min-width:768px) {
    padding-top: 2.375em;
    padding-bottom: 3.75em;
  }
}

#other {
  position: relative;
  padding: 1.25em 0 0;

  .slick-track, .dt-track {
    display: flex !important;
    padding-bottom: 1.875em;

    .slick-slide {
      height: inherit;

      & > div {
        height: 100%;
      }
    }

    .other-slide {
      position: relative;
      height: 100%;
      padding-top: 2.25em;
      padding-left: 1em;
    }

    .other-inner {
      position: relative;
      padding: 1.5em 1em;
      width: 20em;
      height: 100%;
      margin: auto;
      background: linear-gradient(259.71deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.9) 100%);
      backdrop-filter: blur(.2em);

      .other-points li {
        line-height: 1.5;
        margin-bottom: 0.85em;

        &::before {
          content:"";
          width: 1.5em;
          height: 1.5em;
          display: inline-block;
          vertical-align: middle;
          margin-right:.5em;
          background: url("~/static/img/check-blue.svg") center center no-repeat;
          background-size: contain;
        }

        &.other-point-stop::before {
          background: url("~/static/img/stop.svg") center center no-repeat;
          background-size: contain;
        }
      }

      .bg-g-dark-blue {
        width: 7.5625em;
        padding: .5em;
      }

      .other-example-1 {
        width: 18.3125em;
        max-width: 100%;
      }

      .btn-dark {
        width: 14em;
        height: 2.625em;
      }

      &.inner-2 {
        .other-look {
          position: absolute;
          right: 1em;
          top: -3em;

          @media screen and (min-width: 768px) {
            position: relative;
            top: 0;
            right: auto;
          }
        }

        .other-example-2 {
          width: 12em;
          max-width: 100%;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        .nm-logo {
          top: 0.5em;
          left: 0.5em;
          width:2em;
        }

        .other-dist {
          text-align: center;
          max-width: 2.5em;

          img {
            max-width: 1.3125em;
            margin: 0 auto 0.5em;
          }
        }
      }

      @media screen and (min-width: 768px) {
        width: 100%;
        padding: 2.25em 2em;
      }
    }
  }

  .other-bg-1 {
    position: absolute;
    width: 15.625em;
    height: 9em;
    top: 9.5em;
    left: calc(50% + 3.875em);
    background: rgba(27, 129, 249, 0.8);
    filter: blur(6.5em);
    -webkit-filter: blur(6.5em);
    transform: translate3d(0, 0, 0);
    transform: rotate(-12deg);
    z-index: -1;

    @media screen and (min-width: 768px) {
      width: 15.625em;
      height: 9em;
      top: 30.75em;
      left: 50%;
      filter: blur(11.5em);
      -webkit-filter: blur(11.5em);
    }
  }

  .other-bg-2 {
    position: absolute;
    width: 15.625em;
    height: 9em;
    top: 18.375em;
    left: calc(50% + 3em);
    background: rgba(27, 129, 249, 0.8);
    filter: blur(6.5em);
    -webkit-filter: blur(6.5em);
    transform: translate3d(0, 0, 0);
    transform: rotate(-12deg);
    z-index: -1;

    @media screen and (min-width: 768px) {
      width: 47em;
      height: 31em;
      top: 0;
      left: calc(50% - 38em);
      filter: blur(11.5em);
      -webkit-filter: blur(11.5em);
    }
  }

  .other-tg-1 {
    position: absolute;
    width: 5.125em;
    height: 5.125em;
    top: 20.75em;
    left: calc(50% + 5.625em);
    background: url('~/static/img/tg_001.png') center center no-repeat;
    background-size: contain;
    pointer-events: none;
  
    @media screen and (min-width:768px) {
      width: 7.25em;
      height: 7.25em;
      top: 19em;
      left: calc(50% - 9.5em);
    }
  }

  .other-tg-2 {
    position: absolute;
    width: 9.875em;
    height: 9.875em;
    bottom: 4.25em;
    left: calc(50% - 15.25em);
    background: url('~/static/img/tg_001.png') center center no-repeat;
    background-size: contain;
    pointer-events: none;
    z-index: -1;
  }

  .other-tg-blur {
    position: absolute;
    width: 7em;
    height: 7em;
    top: -2.5em;
    right: 1em;
    background: url('~/static/img/tg_blur.png') center center no-repeat;
    background-size: contain;
    pointer-events: none;
    z-index: -1;
  }

  @media screen and (min-width:768px) {
    padding-top: 7.5em;
    padding-bottom: 7.5em;
  }
}

footer, .footer {
  padding: 2em 1em;
  background-color: #3C3838;
  color: #CECECE;
  font-weight: 300;

  a {
    color: #CECECE;

    &:hover, &:focus, &:active {
      color: white;
      text-decoration: underline;
      .hover-none {
        display: none!important;
      }
      .hover {
        display:inline-block!important;
      }
    }
  }
}

#formModal, #faqModal {
  .modal-dialog {
    width: 100%;
    margin: 0;

    .modal-content {
      width:100%;
      min-height: 100vh;
      background-color: #1B81F9;
      color: white;

      .modal-header {
        border: none;
        padding-bottom: 0.3125em;

        h5 {
          margin: auto;
          font-size: 1.875em;
          font-weight: bold;
          text-align: center;
        }

        .close {
          opacity: 1;
          font-size: 1em;
          width: 1.5em;
          padding: 0;
          margin: 0;

          img {
            width: 100%;
          }
        }
      }

      .modal-body {
        padding: 0;
        
        .form-group {
          margin-bottom: .5em;

          label {
            font-size: 0.875em;
            margin-bottom: .357em;
          }

          .form-control, .custom-select {
            min-height: 3em;
            border-radius: .625em;
            padding: 0.375em 0.75em;
            font-size: 1em;
          }

          .form-control::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #B9B9B9;
            opacity: 1; /* Firefox */
          }

          .form-control:-ms-input-placeholder { /* Internet Explorer 10-11 */
                      color: #B9B9B9;
          }

          .form-control::-ms-input-placeholder { /* Microsoft Edge */
                      color: #B9B9B9;
          }

          .form-text.text-muted {
            color: white!important;
          }

          #form-budget {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }

          .input-group-append .input-group-text {
            background: white;
            color: black;
            border-radius: 0;
            border-top-right-radius: 0.625em;
            border-bottom-right-radius: 0.625em;
            padding: 0.375em 0.75em;
            font-size: 1em;
          }
        }

        #form-group-position, #form-group-position * {
          opacity: 0;
          height: 0;
          pointer-events: none;
          padding: 0;
          margin: 0;
        }

        .custom-control-label::before, .custom-control-label::after {
          top: 0;
        }

        .form-tnx button {
          min-width: 8em;
        }
      }

      @media screen and (min-width:768px) {
        min-height: auto;
        padding-bottom: 1em;
      }
    }
    
    @media screen and (min-width:768px) {
      width: auto;
      max-width: 28.25em;
      margin: auto;
    }
  }

  a {
    color: white;
  }
}

#faqModal___BV_modal_outer_ {
  z-index: 1020!important;

  .modal-dialog {
  
    .modal-header {
      flex-direction: column;

      .navbar {
        padding:0;

        .navbar-toggler {
          background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")
        }
      }
    }

    .faq-question {
      padding: 1.25em 1em;
      padding-right: 0;
      cursor:pointer;

      p {
        margin: 0 1.125em;
        font-weight: 500;
      }

      i.ml-auto img {
        transition: transform .3s ease;
      }

      &.not-collapsed i.ml-auto img {
        transform:rotate(90deg);
      }
    }

    .faq-answer {
      padding: 2em;
    }

    .faq-new-question {
      padding-left: .375em;

      p {
        margin-left: 0.8125em;
      }
    }

    @media screen and (min-width: 768px) {
      max-width: 100%;
      width: 53.5em;
    }
  }
}

@media screen and (max-width:767px) {
  .modal-open {

    .navbar.fixed-top {
      padding: 0;
    }

    .navbar-button, .navbar-navbar-toggler {
      display: none;
    }
  }
}


</style>