# ErrorMessageDto2

# ErrorMessageDto2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Locale** | Pointer to **NullableString** | The locale for the message text, a BCP 47 language tag. | [optional] 
**LocaleOrigin** | Pointer to **NullableLocaleOrigin2** |  | [optional] 
**Text** | Pointer to **string** | Actual text of the error message in the indicated locale. | [optional] 

## Methods

### NewErrorMessageDto2

`func NewErrorMessageDto2() *ErrorMessageDto2`

NewErrorMessageDto2 instantiates a new ErrorMessageDto2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewErrorMessageDto2WithDefaults

`func NewErrorMessageDto2WithDefaults() *ErrorMessageDto2`

NewErrorMessageDto2WithDefaults instantiates a new ErrorMessageDto2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLocale

`func (o *ErrorMessageDto2) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *ErrorMessageDto2) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *ErrorMessageDto2) SetLocale(v string)`

SetLocale sets Locale field to given value.

### HasLocale

`func (o *ErrorMessageDto2) HasLocale() bool`

HasLocale returns a boolean if a field has been set.

### SetLocaleNil

`func (o *ErrorMessageDto2) SetLocaleNil(b bool)`

 SetLocaleNil sets the value for Locale to be an explicit nil

### UnsetLocale
`func (o *ErrorMessageDto2) UnsetLocale()`

UnsetLocale ensures that no value is present for Locale, not even an explicit nil
### GetLocaleOrigin

`func (o *ErrorMessageDto2) GetLocaleOrigin() LocaleOrigin2`

GetLocaleOrigin returns the LocaleOrigin field if non-nil, zero value otherwise.

### GetLocaleOriginOk

`func (o *ErrorMessageDto2) GetLocaleOriginOk() (*LocaleOrigin2, bool)`

GetLocaleOriginOk returns a tuple with the LocaleOrigin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocaleOrigin

`func (o *ErrorMessageDto2) SetLocaleOrigin(v LocaleOrigin2)`

SetLocaleOrigin sets LocaleOrigin field to given value.

### HasLocaleOrigin

`func (o *ErrorMessageDto2) HasLocaleOrigin() bool`

HasLocaleOrigin returns a boolean if a field has been set.

### SetLocaleOriginNil

`func (o *ErrorMessageDto2) SetLocaleOriginNil(b bool)`

 SetLocaleOriginNil sets the value for LocaleOrigin to be an explicit nil

### UnsetLocaleOrigin
`func (o *ErrorMessageDto2) UnsetLocaleOrigin()`

UnsetLocaleOrigin ensures that no value is present for LocaleOrigin, not even an explicit nil
### GetText

`func (o *ErrorMessageDto2) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *ErrorMessageDto2) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *ErrorMessageDto2) SetText(v string)`

SetText sets Text field to given value.

### HasText

`func (o *ErrorMessageDto2) HasText() bool`

HasText returns a boolean if a field has been set.


