<script setup lang="ts">

</script>

<template>
    <main>
				<div class="container-xxl py-6">
            <div class="container">
              <div class="mb-2">
                <nuxt-link to="/product" class="small ">&lt;- Назад к продуктам</nuxt-link>
              </div>
                <ContentDoc v-slot="{ doc }">
                    <!--                    <h1>{{ doc.title }}</h1>-->
                    <div class="row g5">
                      <div class="col-6">
                        <img class="img-fluid rounded" :src="`img/${doc.imgSrc}`" :alt="doc.title">
                      </div>
                      <div class="col-6">
                        <!--                            <p class="text-primary text-uppercase mb-2">// Продукты</p>-->
                        <h1 class="display-6 mb-4">{{ doc.title }}</h1>
                        <div class="d-inline-block border border-primary rounded-pill px-3 mb-3">
                          {{doc.price}} руб.
                        </div>
                        <ContentRenderer :value="doc" class="h-100" />
                      </div>
                    </div>
                </ContentDoc>
            </div>
				</div>
      <div class="container">
        <small>
          Не является публичной офертой. Окончательную стоимость узнавайте у Вашего персонального менеджера.
          В качестве наполнителя для основания используется каменная крошка фракции 5-15 мм.
          По всем остальным характеристикам данный материал полностью соответствует ГОСТ.
          Срок службы покрытия из гравийной крошки составляет не менее 15 лет.
          Покрытие из гравия может применяться на любых типах грунта.
          Гравийное покрытие не боится ни палящих солнечных лучей, ни мороза, ни дождя, не требует дополнительной обработки лаком или краской.
        </small>
      </div>
    </main>
</template>

<style scoped>

</style>
