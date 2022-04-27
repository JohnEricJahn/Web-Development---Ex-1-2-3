<template>
  <main class="main">
    <section class="section-contact-form">
      <h2>CONTACT FORM</h2>
      <form @submit.prevent="sendForm">
        <fieldset>
          <legend>Personal Data</legend>

          <ComponentBaseInput
            v-model="userData.name"
            label="Name"
            type="text"
            error="Name is a required field"
          />

          <ComponentBaseInput
            v-model="userData.email"
            label="Location"
            type="text"
          />

          <ComponentBaseRadioGroup
            v-model="mock.genders"
            name="Gender"
            :options="petOptions"
          />
        </fieldset>

        <!-- <fieldset>
          <legend>Extras</legend>
          <div>
            <ComponentBaseCheckbox
              v-model="event.extras.catering"
              label="Catering"
            />
          </div>

          <div>
            <ComponentBaseCheckbox
              v-model="event.extras.music"
              label="Live music"
            />
          </div>
        </fieldset> -->

        <button type="submit">Submit</button>
      </form>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import ComponentBaseInput from '@/components/ComponentBaseInput.vue';
import ComponentBaseCheckbox from '@/components/ComponentBaseCheckbox.vue';
import ComponentBaseSelect from '@/components/ComponentBaseSelect.vue';
import ComponentBaseRadioGroup from '@/components/ComponentBaseRadioGroup.vue';

type Address = {
  cep: string,
  street: string,
  number: number,
  city: string,
  state: string,
}

type ContactFormUserData = {
  name: string,
  gender: string,
  email: string,
  address: Address,
}

type Mock = {
  genders: Array<string>,
  cities: Array<string>,
  states: Array<string>
}

export default defineComponent({
  name: 'ViewContact',
  components: {
    ComponentBaseInput,
    ComponentBaseRadioGroup,
  },
  setup() {
    const userData = ref({} as ContactFormUserData);
    const mock = ref({} as Mock);

    return {
      userData,
      mock,
    };
  },
});
</script>

<style scoped>
.main {
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFF;
  border-radius: 8px;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

legend {
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
}
</style>
