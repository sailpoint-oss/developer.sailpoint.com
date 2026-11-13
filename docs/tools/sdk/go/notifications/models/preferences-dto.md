# PreferencesDto

# PreferencesDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | The template notification key. | [optional] 
**Mediums** | Pointer to **[]Medium** | List of preferred notification mediums, i.e., the mediums (or method) for which notifications are enabled. An empty list means the notification is disabled for the tenant. More mediums may be added in the future. | [optional] 
**Modified** | Pointer to **SailPointTime** | Modified date of preference. | [optional] [readonly] 
**CcList** | Pointer to [**[]CcBccPreferenceEntry**](cc-bcc-preference-entry) | Optional CC recipients for email notifications for this key. Requires EMAIL to be included in `mediums`. Maximum of five entries. The same recipient cannot appear in both `ccList` and `bccList`. | [optional] 
**BccList** | Pointer to [**[]CcBccPreferenceEntry**](cc-bcc-preference-entry) | Optional BCC recipients for email notifications for this key. Requires EMAIL to be included in `mediums`. Maximum of five entries. The same recipient cannot appear in both `ccList` and `bccList`. | [optional] 

## Methods

### NewPreferencesDto

`func NewPreferencesDto() *PreferencesDto`

NewPreferencesDto instantiates a new PreferencesDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPreferencesDtoWithDefaults

`func NewPreferencesDtoWithDefaults() *PreferencesDto`

NewPreferencesDtoWithDefaults instantiates a new PreferencesDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *PreferencesDto) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *PreferencesDto) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *PreferencesDto) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *PreferencesDto) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetMediums

`func (o *PreferencesDto) GetMediums() []Medium`

GetMediums returns the Mediums field if non-nil, zero value otherwise.

### GetMediumsOk

`func (o *PreferencesDto) GetMediumsOk() (*[]Medium, bool)`

GetMediumsOk returns a tuple with the Mediums field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMediums

`func (o *PreferencesDto) SetMediums(v []Medium)`

SetMediums sets Mediums field to given value.

### HasMediums

`func (o *PreferencesDto) HasMediums() bool`

HasMediums returns a boolean if a field has been set.

### GetModified

`func (o *PreferencesDto) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *PreferencesDto) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *PreferencesDto) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *PreferencesDto) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCcList

`func (o *PreferencesDto) GetCcList() []CcBccPreferenceEntry`

GetCcList returns the CcList field if non-nil, zero value otherwise.

### GetCcListOk

`func (o *PreferencesDto) GetCcListOk() (*[]CcBccPreferenceEntry, bool)`

GetCcListOk returns a tuple with the CcList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcList

`func (o *PreferencesDto) SetCcList(v []CcBccPreferenceEntry)`

SetCcList sets CcList field to given value.

### HasCcList

`func (o *PreferencesDto) HasCcList() bool`

HasCcList returns a boolean if a field has been set.

### GetBccList

`func (o *PreferencesDto) GetBccList() []CcBccPreferenceEntry`

GetBccList returns the BccList field if non-nil, zero value otherwise.

### GetBccListOk

`func (o *PreferencesDto) GetBccListOk() (*[]CcBccPreferenceEntry, bool)`

GetBccListOk returns a tuple with the BccList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBccList

`func (o *PreferencesDto) SetBccList(v []CcBccPreferenceEntry)`

SetBccList sets BccList field to given value.

### HasBccList

`func (o *PreferencesDto) HasBccList() bool`

HasBccList returns a boolean if a field has been set.


