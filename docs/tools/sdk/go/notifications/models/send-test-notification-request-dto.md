# SendTestNotificationRequestDto

# SendTestNotificationRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | The template notification key. | [optional] 
**Medium** | Pointer to **string** | The notification medium. Has to be one of the following enum values. | [optional] 
**Locale** | Pointer to **string** | The locale for the message text. | [optional] 
**Context** | Pointer to **map[string]interface\{\}** | A Json object that denotes the context specific to the template. | [optional] 
**RecipientEmailList** | Pointer to **[]string** | A list of override recipient email addresses for the test notification. | [optional] 
**CarbonCopy** | Pointer to **[]string** | A list of CC email addresses for the test notification. | [optional] 
**BlindCarbonCopy** | Pointer to **[]string** | A list of BCC email addresses for the test notification. | [optional] 

## Methods

### NewSendTestNotificationRequestDto

`func NewSendTestNotificationRequestDto() *SendTestNotificationRequestDto`

NewSendTestNotificationRequestDto instantiates a new SendTestNotificationRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSendTestNotificationRequestDtoWithDefaults

`func NewSendTestNotificationRequestDtoWithDefaults() *SendTestNotificationRequestDto`

NewSendTestNotificationRequestDtoWithDefaults instantiates a new SendTestNotificationRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *SendTestNotificationRequestDto) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *SendTestNotificationRequestDto) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *SendTestNotificationRequestDto) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *SendTestNotificationRequestDto) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetMedium

`func (o *SendTestNotificationRequestDto) GetMedium() string`

GetMedium returns the Medium field if non-nil, zero value otherwise.

### GetMediumOk

`func (o *SendTestNotificationRequestDto) GetMediumOk() (*string, bool)`

GetMediumOk returns a tuple with the Medium field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMedium

`func (o *SendTestNotificationRequestDto) SetMedium(v string)`

SetMedium sets Medium field to given value.

### HasMedium

`func (o *SendTestNotificationRequestDto) HasMedium() bool`

HasMedium returns a boolean if a field has been set.

### GetLocale

`func (o *SendTestNotificationRequestDto) GetLocale() string`

GetLocale returns the Locale field if non-nil, zero value otherwise.

### GetLocaleOk

`func (o *SendTestNotificationRequestDto) GetLocaleOk() (*string, bool)`

GetLocaleOk returns a tuple with the Locale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocale

`func (o *SendTestNotificationRequestDto) SetLocale(v string)`

SetLocale sets Locale field to given value.

### HasLocale

`func (o *SendTestNotificationRequestDto) HasLocale() bool`

HasLocale returns a boolean if a field has been set.

### GetContext

`func (o *SendTestNotificationRequestDto) GetContext() map[string]interface{}`

GetContext returns the Context field if non-nil, zero value otherwise.

### GetContextOk

`func (o *SendTestNotificationRequestDto) GetContextOk() (*map[string]interface{}, bool)`

GetContextOk returns a tuple with the Context field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContext

`func (o *SendTestNotificationRequestDto) SetContext(v map[string]interface{})`

SetContext sets Context field to given value.

### HasContext

`func (o *SendTestNotificationRequestDto) HasContext() bool`

HasContext returns a boolean if a field has been set.

### GetRecipientEmailList

`func (o *SendTestNotificationRequestDto) GetRecipientEmailList() []string`

GetRecipientEmailList returns the RecipientEmailList field if non-nil, zero value otherwise.

### GetRecipientEmailListOk

`func (o *SendTestNotificationRequestDto) GetRecipientEmailListOk() (*[]string, bool)`

GetRecipientEmailListOk returns a tuple with the RecipientEmailList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipientEmailList

`func (o *SendTestNotificationRequestDto) SetRecipientEmailList(v []string)`

SetRecipientEmailList sets RecipientEmailList field to given value.

### HasRecipientEmailList

`func (o *SendTestNotificationRequestDto) HasRecipientEmailList() bool`

HasRecipientEmailList returns a boolean if a field has been set.

### GetCarbonCopy

`func (o *SendTestNotificationRequestDto) GetCarbonCopy() []string`

GetCarbonCopy returns the CarbonCopy field if non-nil, zero value otherwise.

### GetCarbonCopyOk

`func (o *SendTestNotificationRequestDto) GetCarbonCopyOk() (*[]string, bool)`

GetCarbonCopyOk returns a tuple with the CarbonCopy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCarbonCopy

`func (o *SendTestNotificationRequestDto) SetCarbonCopy(v []string)`

SetCarbonCopy sets CarbonCopy field to given value.

### HasCarbonCopy

`func (o *SendTestNotificationRequestDto) HasCarbonCopy() bool`

HasCarbonCopy returns a boolean if a field has been set.

### GetBlindCarbonCopy

`func (o *SendTestNotificationRequestDto) GetBlindCarbonCopy() []string`

GetBlindCarbonCopy returns the BlindCarbonCopy field if non-nil, zero value otherwise.

### GetBlindCarbonCopyOk

`func (o *SendTestNotificationRequestDto) GetBlindCarbonCopyOk() (*[]string, bool)`

GetBlindCarbonCopyOk returns a tuple with the BlindCarbonCopy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlindCarbonCopy

`func (o *SendTestNotificationRequestDto) SetBlindCarbonCopy(v []string)`

SetBlindCarbonCopy sets BlindCarbonCopy field to given value.

### HasBlindCarbonCopy

`func (o *SendTestNotificationRequestDto) HasBlindCarbonCopy() bool`

HasBlindCarbonCopy returns a boolean if a field has been set.


