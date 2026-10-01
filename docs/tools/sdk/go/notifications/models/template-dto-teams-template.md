# TemplateDtoTeamsTemplate

# TemplateDtoTeamsTemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **NullableString** | The template key | [optional] 
**Title** | Pointer to **NullableString** | The title of the Teams message | [optional] 
**Text** | Pointer to **string** | The main text content of the Teams message | [optional] 
**MessageJSON** | Pointer to **NullableString** | JSON string of the Teams adaptive card | [optional] 
**IsSubscription** | Pointer to **NullableBool** | Whether this is a subscription notification | [optional] [default to false]
**ApprovalId** | Pointer to **NullableString** | The approval request ID | [optional] 
**RequestId** | Pointer to **NullableString** | The request ID | [optional] 
**RequestedById** | Pointer to **NullableString** | The ID of the user who made the request | [optional] 
**NotificationType** | Pointer to **NullableString** | The type of notification | [optional] 
**AutoApprovalData** | Pointer to [**NullableTemplateSlackAutoApprovalData**](template-slack-auto-approval-data) |  | [optional] 
**CustomFields** | Pointer to [**NullableTemplateSlackCustomFields**](template-slack-custom-fields) |  | [optional] 

## Methods

### NewTemplateDtoTeamsTemplate

`func NewTemplateDtoTeamsTemplate() *TemplateDtoTeamsTemplate`

NewTemplateDtoTeamsTemplate instantiates a new TemplateDtoTeamsTemplate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateDtoTeamsTemplateWithDefaults

`func NewTemplateDtoTeamsTemplateWithDefaults() *TemplateDtoTeamsTemplate`

NewTemplateDtoTeamsTemplateWithDefaults instantiates a new TemplateDtoTeamsTemplate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *TemplateDtoTeamsTemplate) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *TemplateDtoTeamsTemplate) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *TemplateDtoTeamsTemplate) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *TemplateDtoTeamsTemplate) HasKey() bool`

HasKey returns a boolean if a field has been set.

### SetKeyNil

`func (o *TemplateDtoTeamsTemplate) SetKeyNil(b bool)`

 SetKeyNil sets the value for Key to be an explicit nil

### UnsetKey
`func (o *TemplateDtoTeamsTemplate) UnsetKey()`

UnsetKey ensures that no value is present for Key, not even an explicit nil
### GetTitle

`func (o *TemplateDtoTeamsTemplate) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *TemplateDtoTeamsTemplate) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *TemplateDtoTeamsTemplate) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *TemplateDtoTeamsTemplate) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### SetTitleNil

`func (o *TemplateDtoTeamsTemplate) SetTitleNil(b bool)`

 SetTitleNil sets the value for Title to be an explicit nil

### UnsetTitle
`func (o *TemplateDtoTeamsTemplate) UnsetTitle()`

UnsetTitle ensures that no value is present for Title, not even an explicit nil
### GetText

`func (o *TemplateDtoTeamsTemplate) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *TemplateDtoTeamsTemplate) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *TemplateDtoTeamsTemplate) SetText(v string)`

SetText sets Text field to given value.

### HasText

`func (o *TemplateDtoTeamsTemplate) HasText() bool`

HasText returns a boolean if a field has been set.

### GetMessageJSON

`func (o *TemplateDtoTeamsTemplate) GetMessageJSON() string`

GetMessageJSON returns the MessageJSON field if non-nil, zero value otherwise.

### GetMessageJSONOk

`func (o *TemplateDtoTeamsTemplate) GetMessageJSONOk() (*string, bool)`

GetMessageJSONOk returns a tuple with the MessageJSON field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageJSON

`func (o *TemplateDtoTeamsTemplate) SetMessageJSON(v string)`

SetMessageJSON sets MessageJSON field to given value.

### HasMessageJSON

`func (o *TemplateDtoTeamsTemplate) HasMessageJSON() bool`

HasMessageJSON returns a boolean if a field has been set.

### SetMessageJSONNil

`func (o *TemplateDtoTeamsTemplate) SetMessageJSONNil(b bool)`

 SetMessageJSONNil sets the value for MessageJSON to be an explicit nil

### UnsetMessageJSON
`func (o *TemplateDtoTeamsTemplate) UnsetMessageJSON()`

UnsetMessageJSON ensures that no value is present for MessageJSON, not even an explicit nil
### GetIsSubscription

`func (o *TemplateDtoTeamsTemplate) GetIsSubscription() bool`

GetIsSubscription returns the IsSubscription field if non-nil, zero value otherwise.

### GetIsSubscriptionOk

`func (o *TemplateDtoTeamsTemplate) GetIsSubscriptionOk() (*bool, bool)`

GetIsSubscriptionOk returns a tuple with the IsSubscription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSubscription

`func (o *TemplateDtoTeamsTemplate) SetIsSubscription(v bool)`

SetIsSubscription sets IsSubscription field to given value.

### HasIsSubscription

`func (o *TemplateDtoTeamsTemplate) HasIsSubscription() bool`

HasIsSubscription returns a boolean if a field has been set.

### SetIsSubscriptionNil

`func (o *TemplateDtoTeamsTemplate) SetIsSubscriptionNil(b bool)`

 SetIsSubscriptionNil sets the value for IsSubscription to be an explicit nil

### UnsetIsSubscription
`func (o *TemplateDtoTeamsTemplate) UnsetIsSubscription()`

UnsetIsSubscription ensures that no value is present for IsSubscription, not even an explicit nil
### GetApprovalId

`func (o *TemplateDtoTeamsTemplate) GetApprovalId() string`

GetApprovalId returns the ApprovalId field if non-nil, zero value otherwise.

### GetApprovalIdOk

`func (o *TemplateDtoTeamsTemplate) GetApprovalIdOk() (*string, bool)`

GetApprovalIdOk returns a tuple with the ApprovalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalId

`func (o *TemplateDtoTeamsTemplate) SetApprovalId(v string)`

SetApprovalId sets ApprovalId field to given value.

### HasApprovalId

`func (o *TemplateDtoTeamsTemplate) HasApprovalId() bool`

HasApprovalId returns a boolean if a field has been set.

### SetApprovalIdNil

`func (o *TemplateDtoTeamsTemplate) SetApprovalIdNil(b bool)`

 SetApprovalIdNil sets the value for ApprovalId to be an explicit nil

### UnsetApprovalId
`func (o *TemplateDtoTeamsTemplate) UnsetApprovalId()`

UnsetApprovalId ensures that no value is present for ApprovalId, not even an explicit nil
### GetRequestId

`func (o *TemplateDtoTeamsTemplate) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *TemplateDtoTeamsTemplate) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *TemplateDtoTeamsTemplate) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *TemplateDtoTeamsTemplate) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.

### SetRequestIdNil

`func (o *TemplateDtoTeamsTemplate) SetRequestIdNil(b bool)`

 SetRequestIdNil sets the value for RequestId to be an explicit nil

### UnsetRequestId
`func (o *TemplateDtoTeamsTemplate) UnsetRequestId()`

UnsetRequestId ensures that no value is present for RequestId, not even an explicit nil
### GetRequestedById

`func (o *TemplateDtoTeamsTemplate) GetRequestedById() string`

GetRequestedById returns the RequestedById field if non-nil, zero value otherwise.

### GetRequestedByIdOk

`func (o *TemplateDtoTeamsTemplate) GetRequestedByIdOk() (*string, bool)`

GetRequestedByIdOk returns a tuple with the RequestedById field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedById

`func (o *TemplateDtoTeamsTemplate) SetRequestedById(v string)`

SetRequestedById sets RequestedById field to given value.

### HasRequestedById

`func (o *TemplateDtoTeamsTemplate) HasRequestedById() bool`

HasRequestedById returns a boolean if a field has been set.

### SetRequestedByIdNil

`func (o *TemplateDtoTeamsTemplate) SetRequestedByIdNil(b bool)`

 SetRequestedByIdNil sets the value for RequestedById to be an explicit nil

### UnsetRequestedById
`func (o *TemplateDtoTeamsTemplate) UnsetRequestedById()`

UnsetRequestedById ensures that no value is present for RequestedById, not even an explicit nil
### GetNotificationType

`func (o *TemplateDtoTeamsTemplate) GetNotificationType() string`

GetNotificationType returns the NotificationType field if non-nil, zero value otherwise.

### GetNotificationTypeOk

`func (o *TemplateDtoTeamsTemplate) GetNotificationTypeOk() (*string, bool)`

GetNotificationTypeOk returns a tuple with the NotificationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationType

`func (o *TemplateDtoTeamsTemplate) SetNotificationType(v string)`

SetNotificationType sets NotificationType field to given value.

### HasNotificationType

`func (o *TemplateDtoTeamsTemplate) HasNotificationType() bool`

HasNotificationType returns a boolean if a field has been set.

### SetNotificationTypeNil

`func (o *TemplateDtoTeamsTemplate) SetNotificationTypeNil(b bool)`

 SetNotificationTypeNil sets the value for NotificationType to be an explicit nil

### UnsetNotificationType
`func (o *TemplateDtoTeamsTemplate) UnsetNotificationType()`

UnsetNotificationType ensures that no value is present for NotificationType, not even an explicit nil
### GetAutoApprovalData

`func (o *TemplateDtoTeamsTemplate) GetAutoApprovalData() TemplateSlackAutoApprovalData`

GetAutoApprovalData returns the AutoApprovalData field if non-nil, zero value otherwise.

### GetAutoApprovalDataOk

`func (o *TemplateDtoTeamsTemplate) GetAutoApprovalDataOk() (*TemplateSlackAutoApprovalData, bool)`

GetAutoApprovalDataOk returns a tuple with the AutoApprovalData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoApprovalData

`func (o *TemplateDtoTeamsTemplate) SetAutoApprovalData(v TemplateSlackAutoApprovalData)`

SetAutoApprovalData sets AutoApprovalData field to given value.

### HasAutoApprovalData

`func (o *TemplateDtoTeamsTemplate) HasAutoApprovalData() bool`

HasAutoApprovalData returns a boolean if a field has been set.

### SetAutoApprovalDataNil

`func (o *TemplateDtoTeamsTemplate) SetAutoApprovalDataNil(b bool)`

 SetAutoApprovalDataNil sets the value for AutoApprovalData to be an explicit nil

### UnsetAutoApprovalData
`func (o *TemplateDtoTeamsTemplate) UnsetAutoApprovalData()`

UnsetAutoApprovalData ensures that no value is present for AutoApprovalData, not even an explicit nil
### GetCustomFields

`func (o *TemplateDtoTeamsTemplate) GetCustomFields() TemplateSlackCustomFields`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *TemplateDtoTeamsTemplate) GetCustomFieldsOk() (*TemplateSlackCustomFields, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *TemplateDtoTeamsTemplate) SetCustomFields(v TemplateSlackCustomFields)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *TemplateDtoTeamsTemplate) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### SetCustomFieldsNil

`func (o *TemplateDtoTeamsTemplate) SetCustomFieldsNil(b bool)`

 SetCustomFieldsNil sets the value for CustomFields to be an explicit nil

### UnsetCustomFields
`func (o *TemplateDtoTeamsTemplate) UnsetCustomFields()`

UnsetCustomFields ensures that no value is present for CustomFields, not even an explicit nil

