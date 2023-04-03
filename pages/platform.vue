<template>
  <div ref="content">
    <b-navbar id="navigation" ref="navigation" v-b-scrollspy=navHeight toggleable="md" :fixed="!slidersInit ? null : 'top'">
      <b-navbar-brand class="d-none d-md-flex"><nuxt-img alt="Nativity" src="/img/blue_nativity.svg"/></b-navbar-brand>
      <b-navbar-nav class="d-none d-md-flex align-items-center mx-auto" >
        <b-nav-item href="#partners" @click.prevent="scrollIntoView">Партнерская программа</b-nav-item>
        <b-nav-item href="#pros" @click.prevent="scrollIntoView">Преимущества</b-nav-item>
        <b-nav-item href="#process" @click.prevent="scrollIntoView">Схема работы</b-nav-item>
        <div class="main-links ml-auto mr-32 bg-white rounded-pill d-flex justify-content-between">
          <b-nav-item href="/" class="index-link main-link text-center">Заказчикам</b-nav-item>
          <b-nav-item href="/platform/" class="platform-link main-link text-center">Владельцам каналов</b-nav-item>
        </div>
      </b-navbar-nav>
      <b-sidebar id="sidebar-nav" ref="sidebar" v-model="showSidebar" is-nav right backdrop>
        <div class="d-flex flex-column h-100">
          <div class="px-16 mb-auto mx-auto d-flex h-100">
            <b-navbar-nav>
              <b-nav-item href="#partners" @click.prevent="scrollIntoView">Партнерская программа</b-nav-item>
              <b-nav-item href="#pros" @click.prevent="scrollIntoView">Преимущества</b-nav-item>
              <b-nav-item href="#process" @click.prevent="scrollIntoView">Схема работы</b-nav-item>
              <div class="main-links mt-auto mb-32 bg-white rounded-pill d-flex justify-content-between">
                <b-nav-item href="/" class="index-link main-link text-center">Заказчикам</b-nav-item>
                <b-nav-item href="/platform/" class="platform-link main-link text-center">Владельцам каналов</b-nav-item>
              </div>
            </b-navbar-nav>
          </div>
          <div class="p-3 text-center">
            <b-button class="rounded-pill" variant="dark" @click="formModal = !formModal">
              Отправить запрос
            </b-button>
          </div>
        </div>
      </b-sidebar>

      <div class="ml-md-auto">
        <b-button class="rounded-pill navbar-button" variant="dark" @click="formModal = !formModal">
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
        <nuxt-img :format="window.canUseWebP ? 'webp' : 'png'" src="/img/tg_003.png" class="mw-100"/>
      </div>
      <div class="hero-bg-marble position-absolute">
        <nuxt-img :format="window.canUseWebP ? 'webp' : 'png'"  src="/img/marble.png" class="mw-100"/>
      </div>
      <b-container fluid>
        <b-row>
          <b-col cols="12">
            <div class="d-md-none hero-brand"><nuxt-img alt="Nativity" src="/img/blue_nativity.svg"/></div>
            <h1 class="text-white text-center mb-8">
              Nativity — платформа для&nbsp;размещения рекламы в&nbsp;Telegram-каналах
            </h1>

            <p class="text-white text-center mx-auto ml-md-0 hero-description">
              Получайте <b>дополнительный доход</b> и&nbsp;<b>новых клиентов</b> для&nbsp;своего канала
            </p>
          </b-col>
          <b-col cols="12" class="d-flex">
            <b-button class="rounded-pill text-uppercase mx-auto my-md-auto" variant="dark" @click="formModal = !formModal">
              Добавить канал
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
              <nuxt-img alt="Avon" class="h-20" src="/img/partners/avon.svg" />
              <nuxt-img alt="Правительство Москвы" class="h-30" src="/img/partners/moscow.svg" />
              <nuxt-img alt="МТС" class="h-20" src="/img/partners/mts.svg" />
              <nuxt-img alt="Xiaomi" class="h-30" src="/img/partners/xiaomi.svg" />
              <nuxt-img alt="IU.ru" class="h-30" src="/img/partners/iu.svg" />
              <nuxt-img alt="Росбанк" class="h-30" src="/img/partners/rosbank.svg" />
              <nuxt-img alt="Пятерочка" class="h-30" src="/img/partners/pyaterochka.svg" />
              <nuxt-img alt="ВЭБ РФ" class="h-30" src="/img/partners/web.svg" />
              <nuxt-img alt="ВТБ" class="h-30" src="/img/partners/vtb.svg" />
              <nuxt-img alt="Worlds" class="h-20" src="/img/partners/worlds.svg" />
            </div>
            <vue-slick-carousel v-else v-show="slidersReady.partners" v-bind="partnersSliderSettings" ref="partners-slider" @init="onSliderInit('partners'); ">
              <nuxt-img alt="Магнит" class="h-20" src="/img/partners/magnit.svg" />
              <nuxt-img alt="Сколково" class="h-30" src="/img/partners/sk.svg" />
              <!-- <nuxt-img alt="Битрикс24" class="h-20" src="/img/partners/bitrix.svg" /> -->
              <nuxt-img alt="Avon" class="h-20" src="/img/partners/avon.svg" />
              <nuxt-img alt="Правительство Москвы" class="h-30" src="/img/partners/moscow.svg" />
              <nuxt-img alt="МТС" class="h-20" src="/img/partners/mts.svg" />
              <nuxt-img alt="Xiaomi" class="h-30" src="/img/partners/xiaomi.svg" />
              <nuxt-img alt="IU.ru" class="h-30" src="/img/partners/iu.svg" />
              <nuxt-img alt="Росбанк" class="h-30" src="/img/partners/rosbank.svg" />
              <nuxt-img alt="Пятерочка" class="h-30" src="/img/partners/pyaterochka.svg" />
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
            <h2 class="text-center mb-md-30">Преимущества работы с&nbsp;нами</h2>
          </b-col>
          <b-col cols="6" md="auto" class="pro pro-1 d-flex flex-column px-1">
          <nuxt-img src="/img/pros/secure.svg" />
          <h3>Премиум-клиенты</h3>
            <p class="fw-light mb-auto">
              Без капперов, криптовалют и&nbsp;заработка в&nbsp;интернете. Мы работаем исключительно с&nbsp;крупными проверенными рекламодателями.
            </p>
            <a class="rounded-pill text-black position-relative" href="#partners">
              <u>Наши клиенты</u>
              <i class="rounded-pill ml-auto"></i>
            </a>
          </b-col>
          <b-col cols="6" md="auto" class="pro pro-2 d-flex flex-column px-1">
          <nuxt-img src="/img/pros/check.svg" />
          <h3>Оплаченные заказы</h3>
            <p class="fw-light mb-auto">
              Вы получаете только оплаченные заказы на&nbsp;размещения без&nbsp;лишних вопросов и&nbsp;уточнений.
            </p>
            <a class="rounded-pill text-black position-relative" href="#process">
              <u>Схема&nbsp;взаимодействия</u>
              <i class="rounded-pill ml-auto"></i>
            </a>
          </b-col>
          <b-col cols="6" md="auto" class="pro pro-3 d-flex flex-column px-1">
          <nuxt-img src="/img/pros/referral.svg" />
          <h3>Реферальная программа</h3>
            <p class="fw-light mb-auto">
              Порекомендуйте рекламодателю сервис Nativity и&nbsp;получайте 2%&nbsp;от&nbsp;его размещений во&nbsp;всех&nbsp;каналах.
            </p>
            <a class="rounded-pill text-black position-relative" href="#referral">
              <u>Подробнее</u>
              <i class="rounded-pill ml-auto"></i>
            </a>
          </b-col>
          <b-col cols="6" md="auto" class="pro pro-4 d-flex flex-column px-1">
            <nuxt-img src="/img/pros/doc.svg" />
            <h3>
              Без бумажной волокиты
            </h3>
            <p class="fw-light mb-auto">
              Nativity полностью закрывает вопросы по&nbsp;договорам и&nbsp;сдаче отчетности - вы&nbsp;работаете в&nbsp;привычном формате.
            </p>
            <a class="rounded-pill text-black position-relative" href="/#legal">
              <u>Схема&nbsp;взаимодействия</u>
              <i class="rounded-pill ml-auto"></i>
            </a>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="referral" class="referral">
      <b-container fluid>
        <b-row>
          <b-col cols="12" md="10" class="m-auto">
            <h2 class="text-center">
              Реферальная программа
            </h2>
            <p class="text-center section-info mb-32 mb-md-64">
              Подключите клиента или рекламное агентство к&nbsp;Nativity и&nbsp;получайте <b>2%&nbsp;за&nbsp;все</b> его размещения на&nbsp;платформе.
            </p>
            <p class="text-center text-500 fs-18 fs-md-24 section-info mb-32 mb-md-16 mt-md-16">
              Как это работает:
            </p>
          </b-col>
          <b-col cols="12" md="4" class="referral-slide">
            <div class="d-flex card-light">
              <div class="referral-inner radius-8 bg-white shadow-smaller inner-1">
                <b class="fs-15 text-primary text-center">5 000 000 ₽</b>
              </div>
              <p class="text-center">Средний рекламодатель совершает от&nbsp;8 до 40 размещений в&nbsp;рамках одной кампании. <b>Общий бюджет 1&nbsp;-&nbsp;5&nbsp;млн&nbsp;рублей.</b></p>
            </div>
            <div class="next">
              <nuxt-img src="/img/right-round-black.svg" class="w-100"/>
            </div>
          </b-col>
          <b-col cols="12" md="4" class="referral-slide">
            <div class="d-flex card-light">
              <div class="referral-inner radius-8 bg-white shadow-smaller inner-2">
                <nuxt-img src="/img/nativity.svg"/>
              </div>
              <p class="text-center">Регистрируйте на&nbsp;Nativity свой Telegram-канал и&nbsp;рекомендуйте платформу рекламодателям по&nbsp;реферальной ссылке.</p>
            </div>
            <div class="next">
              <nuxt-img src="/img/right-round-black.svg" class="w-100"/>
            </div>
          </b-col>
          <b-col cols="12" md="4" class="referral-slide">
            <div class="d-flex card-light">
              <div class="referral-inner radius-8 bg-white shadow-smaller inner-3">
                <b class="fs-15 text-primary text-center">+2%&nbsp;от&nbsp;всего бюджета</b>
              </div>
              <p class="text-center">Получайте дополнительные <b>+2%&nbsp;от&nbsp;всего рекламного бюджета рекламодателя</b>, потраченного на&nbsp;платформе.</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- <section id="channels" class="channels">
      <div class="channels-bg-1"></div>
      <div class="channels-bg-2"></div>
      <b-container fluid>
        <b-row>
          <b-col cols="12" md="10" class="m-md-auto">
            <h2 class="text-center">
              К нам уже присоединились
            </h2>
            <p class="text-center section-info mb-md-48">
              <span class="white-pill">2 000 +</span> премиум-каналов
            </p>
          </b-col>          
          <b-col cols="12" md="11" class="p-0 mx-md-auto mb-28 mb-md-64">
            <div v-if="!slidersInit" class="row channels-plain">
              <b-col v-for="(channel, index) in channels" :key="channel.title" cols="2" class="channels-slide">
                <div :class="['d-flex', 'flex-column', 'channels-inner', 'inner-' + index]">
                  <nuxt-img format="webp" :src="'/img/channels/' + channel.class + '.png'"/>
                  <p class="channels-name">{{channel.title}}</p>
                </div>
              </b-col>
            </div>
            <vue-slick-carousel v-else v-show="slidersReady.channels" v-bind="channelsSliderSettings" ref="channelsSlider" @init="onSliderInit('channels')">
              <div v-for="(channel, index) in channels" :key="channel.title" class="channels-slide">
                <div :class="['d-flex', 'flex-column', 'channels-inner', 'inner-' + index]">
                  <nuxt-img format="webp" :src="'/img/channels/' + channel.class + '.png'"/>
                  <p class="channels-name">{{channel.title}}</p>
                </div>
              </div>
            </vue-slick-carousel>
            <div v-if="slidersInit && !slidersReady.channels" class="m-auto d-flex mb-10 mt-10 justify-content-center"><b-spinner class="text-primary"></b-spinner><span class="sr-only">Загружаем каналы...</span></div>
          </b-col>
          <b-col cols="12" class="d-flex">
            <b-button class="rounded-pill text-uppercase mx-auto w-auto" variant="dark" @click="formModal = !formModal">
              Добавить канал бесплатно
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </section> -->
    <section id="process" class="process">
      <b-container fluid>
        <b-row>
          <b-col cols="12" md="10" class="m-auto position-relative">
            <nuxt-img :format="window.canUseWebP ? 'webp' : 'png'"  class="tg_8" src="/img/tg_008.png"/>
            <h2 class="text-center">
              Как мы&nbsp;работаем?
            </h2>
          </b-col>
          <b-col cols="12" md="9" class="p-0 m-md-auto">
            <div v-if="!slidersInit" class="d-flex justify-content-between mt-76">
              <div class="process-slide">
                <div class="d-flex card-light">
                  <div class="process-inner inner-1 bg-primary radius-8 shadow-smaller"><b class="text-white">РЕГИСТРАЦИЯ</b></div>
                </div>
                <p class="text-center"><b>Регистрируйте</b> свой Telegram-канал на&nbsp;платформе</p>
                <div class="next">
                  <nuxt-img src="/img/right-round-black.svg" class="w-100"/>
                </div>
              </div>
              <div class="process-slide">
                <div class="d-flex card-light">
                  <div class="process-inner bg-white radius-8 shadow-smaller d-flex justify-content-center align-items-center inner-2">
                    <nuxt-img class="w-50" src="/img/process/pr2.svg"/>
                  </div>
                </div>
                <p class="text-center"><b>Примите запрос</b><br/>на размещение заказов</p>
                <div class="next">
                  <nuxt-img src="/img/right-round-black.svg" class="w-100"/>
                </div>
              </div>
              <div class="process-slide">
                <div class="d-flex card-light">
                  <div class="process-inner bg-white radius-8 shadow-smaller d-flex justify-content-center align-items-center inner-3">
                    <nuxt-img src="/img/process/pr3.svg"/>
                  </div>
                </div>
                <p class="text-center"><b>Получите оплату</b></p>
                <div class="next">
                  <nuxt-img src="/img/right-round-black.svg" class="w-100"/>
                </div>
              </div>
              <div class="process-slide">
                <div class="d-flex card-light">
                  <div class="process-inner bg-primary radius-8 shadow-smaller d-flex justify-content-center align-items-center inner-4">
                    <nuxt-img src="/img/process/pr4.svg"/>
                  </div>
                </div>
                <p class="text-center"><b>Подтвердите размещение</b></p>
              </div>
            </div>
            <vue-slick-carousel v-else v-show="slidersReady.process" v-bind="processSliderSettings" ref="processSlider" @init="onSliderInit('process')">
              <div class="process-slide">
                <div class="d-flex card-light">
                  <div class="process-inner bg-primary radius-8 shadow-smaller d-flex justify-content-center align-items-center inner-1"><b class="text-white">РЕГИСТРАЦИЯ</b></div>
                </div>
                <p class="text-center"><b>Регистрируйте</b> свой Telegram-канал на&nbsp;платформе</p>
                <div class="next" @click="nextProcessSlide">
                  <nuxt-img src="/img/right-round-black.svg" class="w-100"/>
                </div>
              </div>
              <div class="process-slide">
                <div class="d-flex card-light">
                  <div class="process-inner bg-white radius-8 shadow-smaller d-flex justify-content-center align-items-center inner-2">
                    <nuxt-img class="w-50" src="/img/process/pr2.svg"/>
                  </div>
                </div>
                <p class="text-center"><b>Примите запрос</b><br/>на размещение заказов</p>
                <div class="next" @click="nextProcessSlide">
                  <nuxt-img src="/img/right-round-black.svg" class="w-100"/>
                </div>
              </div>
              <div class="process-slide">
                <div class="d-flex card-light">
                  <div class="process-inner bg-white radius-8 shadow-smaller d-flex justify-content-center align-items-center inner-3">
                    <nuxt-img src="/img/process/pr3.svg"/>
                  </div>
                </div>
                <p class="text-center"><b>Получите оплату</b></p>
                <div class="next" @click="nextProcessSlide">
                  <nuxt-img src="/img/right-round-black.svg" class="w-100"/>
                </div>
              </div>
              <div class="process-slide">
                <div class="d-flex card-light">
                  <div class="process-inner bg-primary radius-8 shadow-smaller d-flex justify-content-center align-items-center inner-4">
                    <nuxt-img src="/img/process/pr4.svg"/>
                  </div>
                </div>
                <p class="text-center"><b>Подтвердите размещение</b></p>
              </div>
            </vue-slick-carousel>
            <div v-if="slidersInit && !slidersReady.process" class="m-auto d-flex mb-10 mt-10 justify-content-center"><b-spinner class="text-primary"></b-spinner><span class="sr-only">Загружаем схему работы...</span></div>
          </b-col>
          <b-col cols="12" md="10" class="m-auto mt-48 mt-md-128">
            <h2 class="text-center">Присоединяйтесь</h2>
          </b-col>
          <b-col cols="12" class="d-flex">
            <b-button class="rounded-pill text-uppercase mx-auto mt-md-64" variant="dark" @click="formModal = !formModal">
              Оставить заявку
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </section>
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
            <p class="fs-14 mb-5">Круглосуточно</p>
            <b-link href="mailto:more@nativity.tech" target="_blank" class="fs-15 mb-20"><b>more@nativity.tech</b></b-link>
            <b-link href="https://t.me/nativitytech" target="_blank" class="fs-15 mb-20"><nuxt-img src="/img/telegram.svg" class="hover-none" alt="telegram"/><nuxt-img src="/img/telegram_white.svg" class="d-none hover" alt="telegram"/> <b>@nativitytech</b></b-link> 
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <span class="fs-14">© 2022</span>
          </b-col>
        </b-row>
      </b-container>
    </footer>
    <b-modal id="formModal" v-model="formModal" centered variant="primary" hide-footer no-stacking :title="formShow? 'Добавить канал' : formSent? 'Спасибо!' : 'Ошибка!'" @shown="focusThis('formName')" @hidden="formClose()">
      <template #modal-header-close>
        <img alt="Закрыть" src="~/assets/img/stop_white.svg" />
      </template>
      <div class="seedForm h-100">
        <b-container fluid class="h-100">
          <b-row class="h-100">
            <b-col cols="12" class="h-100">
              <b-form v-if="formShow" id="SeedForm-platform" ref="form" class="needs-validation" method="POST" novalidate @submit.prevent="onSubmit('SeedForm-platform')">
                <input id="form-type" name="type" type="hidden" value="Добавление канала" />
                <input id="form-type" name="owner" type="hidden" value="Владелец канала" />
                <b-form-group id="form-group-name" label="Имя Фамилия*" label-for="form-name">
                  <b-form-input id="form-name" ref="formName" v-model="formValues.name" :state="isValidName" name="name" required></b-form-input>
                    <b-form-invalid-feedback id="form-name-feedback" :state="isValidName">
                      {{formErrors.name}}
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group id="form-group-channel" label="Ссылка на ваш канал*" label-for="form-channel">
                  <b-form-input id="form-channel" v-model="formValues.channel" :state="isValidChannel" name="channel" placeholder="@mychannel" required></b-form-input>
                    <b-form-invalid-feedback id="form-channel-feedback">
                      {{formErrors.channel}}
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
                <b-form-group id="form-group-price" label="Цена за стандартное размещение" label-for="form-price">
                  <b-input-group append="₽">
                    <b-form-input id="form-price" v-model="formValues.price" name="price" placeholder="100 000"></b-form-input>
                  </b-input-group>
                </b-form-group>
                <p class="fs-12 text-center">*Поля обязательные для заполнения</p>
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
                  <b-form v-if="formShow" id="FAQForm-platform" ref="faqForm" class="needs-validation" method="POST" novalidate @submit.prevent="onSubmit('FAQForm-platform')">
                    <input id="form-type" name="type" type="hidden" :value="currentForm.title"/>
                    <b-form-group id="form-group-email" label="Email*" label-for="form-email">
                      <b-form-input id="form-email" v-model="formValues.email" :state="isValidEmail" name="email" type="email" required></b-form-input>
                        <b-form-invalid-feedback id="form-email-feedback">
                          {{formErrors.email}}
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group id="form-group-question" label="Ваш вопрос*" label-for="form-question">
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
                <p class="fs-14 mb-5">Круглосуточно</p>
                <b-link href="mailto:more@nativity.tech" target="_blank" class="fs-15 mb-10"><b>more@nativity.tech</b></b-link>
                <b-link href="https://t.me/nativitytech" target="_blank" class="fs-15 mb-20"><nuxt-img src="/img/telegram.svg" class="hover-none" alt="telegram"/><nuxt-img src="/img/telegram_white.svg" class="d-none hover" alt="telegram"/> <b>@nativitytech</b></b-link> 
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12">
                <span class="fs-14">© 2022</span>
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
  name: 'PlatformPage',
  components: {
    VueSlickCarousel,
  },
  data() {
    const forms = { 
      seedForm: {id: 'SeedForm-platform', title: 'Добавить канал', fields: ['name', 'channel', 'phone', 'email', 'price', 'subscription'] },
      faqForm: {id: 'FAQForm-platform', title: 'Вопрос от владельца канала', fields: ['email', 'question']},
    }
    return {
      navHeight: 64,
      window: {
        width: null,
        height: null,
        canUseWebP: false,
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
      processSliderSettings: {
        centerMode: true,
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
        },
        {
          class: 'banksta',
          title: 'Банкста',
        },
        {
          class: 'al',
          title: 'Артемий Лебедев',
        },
        {
          class: 'nez',
          title: 'Незыгарь',
        },
        {
          class: 'brief',
          title: 'brief',
        },
        {
          class: 'nm',
          title: 'Новости Москвы',
        },
        {
          class: 'kb',
          title: 'Кровавая барыня',
        },
        {
          class: 'ag',
          title: 'Антиглянец',
        },
        {
          class: 'xp',
          title: 'Эксплойт',
        },
        {
          class: 'limon',
          title: 'Лимон на чай',
        },
        {
          class: 'nemysli',
          title: 'Мысли не мысли',
        },
        {
          class: 'kd',
          title: 'Код Дурова',
        },
      ],
      forms,
      formModal: false,
      formShow: true,
      formValidating: false,
      formSending: false,
      formSent: false,
      formError: false,
      currentForm: forms.seedForm,
      formValues: {
        name: '',
        channel: '',
        phone: '+7',
        email: '',
        price: '',
        question: '',
        subscription: true,
        position: '',
      },
      formErrors: {},
      faqs: [
        { q: 'Как Telegram-каналу подключиться к платформе?', a: 'Добавление Telegram-канала на платформу Nativity бесплатно. Для этого необходимо оставить заявку на сайте. После анализа Telegram-канала с вами свяжется менеджер для завершения верификации.'},
        { q: 'Какие преимущества для владельца канала?', a: 'Для владельца Telegram-канала процесс размещения рекламы максимально упрощается: не нужно вести переговоры и обсуждать размещение материалов, маркировать объявления и передавать данные по рекламе. Остается только получить оплату удобным способом.' },
        { q: 'Как происходит оплата?', a: 'Оплата производится авансовым способом.' },
      ],
      faqModal: false,
    }
  },
  computed: {
    slidersInit() { return this.window.width < 768 },
    isValidName() { return !this.formValidating ? null : this.formValues.name.length > 0 },
    isValidChannel() { return !this.formValidating ? null : this.formValues.channel.length > 0 },
    isValidPhone() { return !this.formValidating ? null : this.formValues.phone.length >= 18 },
    isValidEmail() { 
      const re = /(.+)@(.+){2,}\.(.+){2,}/
      return !this.formValidating ? null : re.test(this.formValues.email.toLowerCase())
    },
    isValidQuestion() { return !this.formValidating ? null : this.formValues.question.length > 5 },
  },
  beforeMount() {
    this.testWebP()
  },
  mounted() {
    this.$nextTick(function () {
      this.onResize();
    })
    window.addEventListener('resize', this.onResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize);
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
    nextProcessSlide() {
      this.$refs.processSlider.next()
    },
    validateForm () {
      this.formErrors = {}
      if (this.currentForm.title === 'Добавить канал') {
        if (!this.isValidName) this.formErrors.name = 'Введите имя'
        if (!this.isValidChannel) this.formErrors.channel = 'Введите ссылку на канал'
        if (this.formValues.phone.length === 4 ) this.formErrors.phone = 'Укажите номер телефона'
        else if (!this.isValidPhone) this.formErrors.phone = 'Укажите правильный номер телефона'
      } else if (!this.isValidQuestion) this.formErrors.question = 'Задайте вопрос'
      if (this.formValues.email.length === 0) this.formErrors.email = 'Укажите e-mail'
      else if (!this.isValidEmail) this.formErrors.email = 'Укажите правильный e-mail'
      
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
      let url = "https://script.google.com/macros/s/AKfycbx4KSBia2N_hzATXTVy6IMafqlpEoRbgcJe9Yz1J_rSOjliQ41SCCkzK1vaczo1AJWPJA/exec";
      if (formId === 'FAQForm-platform') url = "https://script.google.com/macros/s/AKfycbwDGDGJch0McpuMMotfZpN_gLqTo66etvf2a0TihsPoLJoOUpo87fS6CxqDhwQgis0d2A/exec";
      const response = await fetch(url, fetchOptions);

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      } else {
        this.$metrika.reachGoal('form_js_vl_reg')
        this.$metrika.hit('/sent_vl')
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
          console.error(error);
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
      this.formValues = {
        name: '',
        channel: '',
        phone: '+7',
        email: '',
        price: '',
        question: '',
        subscription: true,
        position: '',
      }
      this.formErrors = {}
      this.currentForm = this.forms.seedForm
    },
    focusThis(referral) {
      this.$refs[referral].focus()
    },
  },
}
</script>

<style lang="scss">

.navbar {
  padding: 1em;

  .navbar-brand {
    font-size: 1em;
    padding: 0;
    margin: 0 2em 0 0;

    img {
      width: 7.5625em;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 2.125em 3.75em 2.125em 3.75em;
  }

  .navbar-nav {
    width: 100%;
    
    .nav-link {
      color: black;
    }
  }

  a, .btn-dark {
    padding: 0 2.333333em;
    font-size: .6875em;
    line-height: 2.727272;
    
    @media screen and (min-width: 768px) {
      line-height: 2.875;
      padding: 0 1.25em!important;
      font-size: .875em;
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
      font-size: 1em;
      line-height: 2.625;
    }
  }
  
  .main-links {
    height: 1.75em;
    padding: 0 0 0 .5em;

    .main-link {
        padding: 0 0.75em;

      a {
        padding: 0;
        font-size: .875em;
        line-height: 2;
      }

      &.platform-link {
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
    padding-top: 12.75em;
    padding-bottom: 8.875em;
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
    min-height: 15em;
  
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
      min-height: 20em;
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

#referral {
  padding-bottom: 3em;

  .referral-slide {
    position: relative;

    .card-light {
      width: 21.4375em;
      height: 14.375em;
      padding: 1.5em 1.625em;
      background: #EBEBEB;
      border-radius: .625em;
      justify-content: center;
      align-content: center;
      flex-wrap: wrap;
      margin-bottom: 2.125em;

      .referral-inner  {
        width: 9.75em;
        height: 4.625em;
        text-align: center;
        display:flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1.25em;

        img {
          margin: auto;
        }
      }

      @media screen and (min-width: 768px) {
        width: 22.625em;
      } 
    }

    p {
      font-size: 1em;
      line-height: 1.2;
      margin-bottom: 0;
    }

    .next {
      position: absolute;
      width: 2.625em;
      height: 2.625em;
      bottom: -0.2em;
      left: calc(50% - 1.3125em);
      transform: rotate(90deg);
      z-index: 1;

      @media screen and (min-width: 768px) {
        left: 24.75em;
        bottom: calc(50% - 1.3125em);
        transform: none;
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

      @media screen and (min-width: 768px) {
        max-width: none;
      }
    }
  }

  .btn-dark {
    padding: 0 2.5em;
  }

  @media screen and (min-width:768px) {
    padding-bottom: 7.5em;
  }
}

#process {
  padding-bottom: 3em;

  .process-slide {
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

      .process-inner  {
        text-align: center;

        img {
          margin: auto;
        }

        &.inner-1 {
          padding: .5em 1.25em;
          border-radius: .25em;
          
          span {
            font-size: .5625em;
          }
        }

        &.inner-2 {
          width: 6.25em;
          height: 4.625em;
          
          img {
            width: 2.75em;
          }
        }

        &.inner-3 {
          width: 6.25em;
          height: 4.625em;
          
          img {
            width: 1.375em;
          }
        }

        &.inner-4 {
          width: 5.75em;
          height: 6.5em;

          img {
            width: 3.625em;
          }
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
        left: 13.25em;
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

footer {
  padding: 2em 1em;
  background-color: #3C3838;
  color: #CECECE;
  font-weight: 300;

  a {
    color: #CECECE;

    &:hover, &:focus, &:active {
      color: white;
      text-decoration: underline;
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

          #form-price {
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