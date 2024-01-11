import React from 'react';
import {useForm, FieldApi} from '@tanstack/react-form';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './registration.module.css';
import Layout from '@theme/Layout';
import SearchableDropdown from '../dropdown/index';
import {countries} from '../dropdown/dropdownList/countries';
import {title} from '../dropdown/dropdownList/title';
// import {FieldApi} from '@tanstack/react-form';

export default function registration() {
  const {siteConfig} = useDocusaurusContext();
  const [showOption, setShowOption] = React.useState(false);
  const [countryValue, setCountryValue] = React.useState('');
  const [titleValue, setTitleValue] = React.useState('');

  async function getHash(email) {
    try {
      const response = await fetch(
        'https://286bhgrdwd.execute-api.us-east-1.amazonaws.com/Prod/hash',
        {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify({email: email}),
        },
        {
          headers: { 'Content-Type': 'application/json', accept: '*/*'}
        }
      );
      return await response.json();
    } catch (error) {
      return [];
    }
  }

  function validateDropdown(value, field) {
    const divElement = document.getElementById('error');
    if (value === '' && !divElement) {
      const divElement = document.createElement('div');
      divElement.id = 'error';

      const emElement = document.createElement('em');
      emElement.textContent = `There was an error on the form: ${field} cannot be blank`; // Replace with your text

      divElement.appendChild(emElement);

      const parentElement = document.getElementById('errorMessage'); // Replace with your element's ID
      parentElement.appendChild(divElement);
    }

    if (value !== '') {
      const divElement = document.getElementById('error');
      divElement.remove();
    }
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  function FieldInfo(field) {
    return (
      <>
        {field.state?.meta.touchedErrors ? (
          <em>{field.state?.meta.touchedErrors}</em>
        ) : null}
        {field.state?.meta.isValidating ? 'Validating...' : null}
      </>
    );
  }

  const form = useForm({
    defaultValues: {
      email: '',
      firstname: '',
      lastname: '',
      title: '',
      company: '',
      country: '',
    },
    onSubmit: async ({value}) => {
      // Do something with form data
      value.email = value.email.toLowerCase();
      getHash(value.email);
      console.log(value);
    },
    validators: {
      onBlurAsync({value}) {
        if (titleValue !== '' && titleValue !== null) {
          value.title = titleValue;

          if (value.title == 'Other') {
            setShowOption(true);
          } else {
            setShowOption(false);
          }
        }

        if (countryValue !== '' && countryValue !== null) {
          value.country = countryValue;
        }
      },

      // Add validators to the form the same way you would add them to a field
      onChangeAsync({value}) {
        if (value.email === '') {
          return 'Email cannot be blank.';
        }
        if (!validateEmail(value.email)) {
          return 'Email not valid';
        }
        if (value.firstname === '') {
          return 'first name cannot be blank.';
        }
        if (value.lastname === '') {
          return 'Last name cannot be blank.';
        }

        if (value.company == '') {
          return 'Company cannot be blank.';
        }

        validateDropdown(titleValue, 'Title');
        validateDropdown(countryValue, 'Country');
      },
    },
  });

  // Subscribe to the form's error map so that updates to it will render
  // alternately, you can use `form.Subscribe`
  const formErrorMap = form.useStore((state) => state.errorMap);

  return (
    <div>
      <div className={styles.formContainer}>
        <div className={styles.formheader}>
          <h1 className={styles.registrationText}>Registration</h1>

          <h3 className={styles.requiredText}>
            <span className={styles.required}>*</span>Required fields
          </h3>
        </div>
        <form.Provider>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              void form.handleSubmit();
            }}>
            <div className={styles.fieldContainer}>
              {/* A type-safe field component*/}
              <form.Field
                name="email"
                validators={{
                  onChange: ({value}) =>
                    !value
                      ? 'A email is required'
                      : value.length < 3
                      ? 'name must be at least 3 characters'
                      : undefined,
                  onChangeAsyncDebounceMs: 500,
                  onChangeAsync: async ({value}) => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    return (
                      value.includes('error') && 'No "error" allowed in email'
                    );
                  },
                }}
                children={(field) => {
                  // Avoid hasty abstractions. Render props are great!
                  return (
                    <>
                      <label htmlFor={field.name}>
                        Email<span className={styles.required}>*</span>
                      </label>
                      <input
                        name={field.name}
                        placeholder="Email"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      <FieldInfo field={field} />
                    </>
                  );
                }}
              />
            </div>
            <div className={styles.fieldContainer}>
              <form.Field
                name="firstname"
                children={(field) => (
                  <>
                    <label htmlFor={field.name}>
                      First name<span className={styles.required}>*</span>
                    </label>
                    <input
                      name={field.name}
                      placeholder="First name"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {field.state.meta.errors ? (
                      <em role="alert">{field.state.meta.errors.join(', ')}</em>
                    ) : null}
                    <FieldInfo field={field} />
                  </>
                )}
              />
            </div>
            <div className={styles.fieldContainer}>
              <form.Field
                name="lastname"
                children={(field) => (
                  <>
                    <label htmlFor={field.name}>
                      Last name<span className={styles.required}>*</span>
                    </label>
                    <input
                      name={field.name}
                      placeholder="Last name"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    {field.state.meta.errors ? (
                      <em role="alert">{field.state.meta.errors.join(', ')}</em>
                    ) : null}
                    <FieldInfo field={field} />
                  </>
                )}
              />
            </div>
            <div className={styles.fieldContainer}>
              <form.Field
                name="company"
                children={(field) => (
                  <>
                    <label htmlFor={field.name}>
                      Company<span className={styles.required}>*</span>
                    </label>
                    <input
                      name={field.name}
                      placeholder="Company"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    <FieldInfo field={field} />
                  </>
                )}
              />
            </div>
            <div className={styles.fieldContainer}>
              <form.Field
                name="title"
                children={(field) => (
                  <>
                    <label htmlFor={field.name}>
                      Title<span className={styles.required}>*</span>
                    </label>

                    <SearchableDropdown
                      options={title}
                      label="name"
                      id="id"
                      placeholder="Title"
                      selectedVal={titleValue}
                      handleChange={(val) => {
                        setTitleValue(val);
                        validateDropdown(val, 'Title');
                        validateDropdown('', 'Country');
                      }}
                    />

                    <FieldInfo field={field} />
                  </>
                )}
              />
            </div>
            {showOption && (
              <div className={styles.fieldContainer}>
                <form.Field
                  name="otherTitle"
                  children={(field) => (
                    <>
                      <label htmlFor={field.name}>
                        Other Title<span className={styles.required}>*</span>
                      </label>
                      <input
                        name={field.name}
                        placeholder="Title"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      <FieldInfo field={field} />
                    </>
                  )}
                />
              </div>
            )}

            <div className={styles.fieldContainer}>
              <form.Field
                name="country"
                children={(field) => (
                  <>
                    <label
                      className={styles.dropdownSpacing}
                      htmlFor={field.name}>
                      Country<span className={styles.required}>*</span>
                    </label>
                    <SearchableDropdown
                      form={form}
                      options={countries}
                      label="name"
                      id="id"
                      placeholder="Country"
                      selectedVal={countryValue}
                      handleChange={(val) => {
                        setCountryValue(val);
                        validateDropdown(val, 'Country');
                      }}
                    />
                    <FieldInfo field={field} />
                  </>
                )}
              />
            </div>
            <div id="errorMessage" className={styles.errormessage}>
              {/* ... */}
              {formErrorMap.onChange ? (
                <div>
                  <em>
                    There was an error on the form: {formErrorMap.onChange}
                  </em>
                </div>
              ) : null}
              {/* ... */}
            </div>
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <button
                  className={styles.submit}
                  type="submit"
                  disabled={!canSubmit}>
                  {isSubmitting ? '...' : 'Submit'}
                </button>
              )}
            />
          </form>
        </form.Provider>
      </div>
    </div>
  );
}
