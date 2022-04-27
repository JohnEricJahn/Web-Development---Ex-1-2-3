# exercicios-web-development

## Forms

In forms, usually we group our inputs logically. For example, you would usually code your form to first ask the user for their personal data like Name, Last Name, and Phone. Later on, another section may ask them for a shipping address. For accessible users, this information may not be as immediately available without having to tab through the whole form, this is where <fieldset> and <legend> come to play. You should always try to wrap up sections of your form inside a fieldset element. This will logically group the inputs inside of it. Then, the first element of the fieldset will be a legend element which will provide a Title for that particular fieldset.

## Input

The label of the input must always be connected with the input. (InputId == LabelFor)

<label :for="uuid" v-if="label">{{ label }}
  <input
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="label"
    @input="$emit('update:modelValue', $event.target.value)"
    class="field"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : null"
  >
  <p
    v-if="error"
    class="errorMessage"
    :id="`${uuid}-error`"
    aria-live="assertive"
  >
    {{ error }}
  </p>
</label>

### Input Error Accessibility

Just because the error message is “near” the input doesn’t mean that a screen reader will be able to identify it as part of the error. Luckily there is a straightforward solution to this problem: the aria-describedby attribute. This attribute allows us to declare directly on the input element which other elements describe it.

We are going to add the aria-invalid attribute to our input, and toggle it off and on depending on whether the error prop is set. When the input is valid, null will make it so that the attribute is not added to the input element.

<input
  v-bind="$attrs"
  :value="modelValue"
  :placeholder="label"
  @input="$emit('update:modelValue', $event.target.value)"
  class="field"
  :id="uuid"
  :aria-describedby="error ? `${uuid}-error` : null"
  :aria-invalid="error ? true : null"
>

### Input 