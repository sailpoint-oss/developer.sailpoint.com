# Alert

# Alert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Level** | Pointer to **string** | Denotes the level of the message | [optional] 
**Localizations** | Pointer to [**[]ErrorMessageDto**](error-message-dto) |  | [optional] 

## Methods

### NewAlert

`func NewAlert() *Alert`

NewAlert instantiates a new Alert object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAlertWithDefaults

`func NewAlertWithDefaults() *Alert`

NewAlertWithDefaults instantiates a new Alert object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLevel

`func (o *Alert) GetLevel() string`

GetLevel returns the Level field if non-nil, zero value otherwise.

### GetLevelOk

`func (o *Alert) GetLevelOk() (*string, bool)`

GetLevelOk returns a tuple with the Level field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevel

`func (o *Alert) SetLevel(v string)`

SetLevel sets Level field to given value.

### HasLevel

`func (o *Alert) HasLevel() bool`

HasLevel returns a boolean if a field has been set.

### GetLocalizations

`func (o *Alert) GetLocalizations() []ErrorMessageDto`

GetLocalizations returns the Localizations field if non-nil, zero value otherwise.

### GetLocalizationsOk

`func (o *Alert) GetLocalizationsOk() (*[]ErrorMessageDto, bool)`

GetLocalizationsOk returns a tuple with the Localizations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalizations

`func (o *Alert) SetLocalizations(v []ErrorMessageDto)`

SetLocalizations sets Localizations field to given value.

### HasLocalizations

`func (o *Alert) HasLocalizations() bool`

HasLocalizations returns a boolean if a field has been set.


