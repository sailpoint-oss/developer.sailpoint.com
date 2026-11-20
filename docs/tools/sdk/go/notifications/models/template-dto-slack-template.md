# TemplateDtoSlackTemplate

# TemplateDtoSlackTemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **NullableString** | The template key | [optional] 
**Text** | Pointer to **string** | The main text content of the Slack message | [optional] 
**Blocks** | Pointer to **NullableString** | JSON string of Slack Block Kit blocks for rich formatting | [optional] 
**Attachments** | Pointer to **string** | JSON string of Slack attachments | [optional] 
**NotificationType** | Pointer to **NullableString** | The type of notification | [optional] 
**ApprovalId** | Pointer to **NullableString** | The approval request ID | [optional] 
**RequestId** | Pointer to **NullableString** | The request ID | [optional] 
**RequestedById** | Pointer to **NullableString** | The ID of the user who made the request | [optional] 
**IsSubscription** | Pointer to **NullableBool** | Whether this is a subscription notification | [optional] [default to false]
**AutoApprovalData** | Pointer to [**NullableTemplateSlackAutoApprovalData**](template-slack-auto-approval-data) |  | [optional] 
**CustomFields** | Pointer to [**NullableTemplateSlackCustomFields**](template-slack-custom-fields) |  | [optional] 

## Methods

### NewTemplateDtoSlackTemplate

`func NewTemplateDtoSlackTemplate() *TemplateDtoSlackTemplate`

NewTemplateDtoSlackTemplate instantiates a new TemplateDtoSlackTemplate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateDtoSlackTemplateWithDefaults

`func NewTemplateDtoSlackTemplateWithDefaults() *TemplateDtoSlackTemplate`

NewTemplateDtoSlackTemplateWithDefaults instantiates a new TemplateDtoSlackTemplate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *TemplateDtoSlackTemplate) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *TemplateDtoSlackTemplate) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *TemplateDtoSlackTemplate) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *TemplateDtoSlackTemplate) HasKey() bool`

HasKey returns a boolean if a field has been set.

### SetKeyNil

`func (o *TemplateDtoSlackTemplate) SetKeyNil(b bool)`

 SetKeyNil sets the value for Key to be an explicit nil

### UnsetKey
`func (o *TemplateDtoSlackTemplate) UnsetKey()`

UnsetKey ensures that no value is present for Key, not even an explicit nil
### GetText

`func (o *TemplateDtoSlackTemplate) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *TemplateDtoSlackTemplate) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *TemplateDtoSlackTemplate) SetText(v string)`

SetText sets Text field to given value.

### HasText

`func (o *TemplateDtoSlackTemplate) HasText() bool`

HasText returns a boolean if a field has been set.

### GetBlocks

`func (o *TemplateDtoSlackTemplate) GetBlocks() string`

GetBlocks returns the Blocks field if non-nil, zero value otherwise.

### GetBlocksOk

`func (o *TemplateDtoSlackTemplate) GetBlocksOk() (*string, bool)`

GetBlocksOk returns a tuple with the Blocks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlocks

`func (o *TemplateDtoSlackTemplate) SetBlocks(v string)`

SetBlocks sets Blocks field to given value.

### HasBlocks

`func (o *TemplateDtoSlackTemplate) HasBlocks() bool`

HasBlocks returns a boolean if a field has been set.

### SetBlocksNil

`func (o *TemplateDtoSlackTemplate) SetBlocksNil(b bool)`

 SetBlocksNil sets the value for Blocks to be an explicit nil

### UnsetBlocks
`func (o *TemplateDtoSlackTemplate) UnsetBlocks()`

UnsetBlocks ensures that no value is present for Blocks, not even an explicit nil
### GetAttachments

`func (o *TemplateDtoSlackTemplate) GetAttachments() string`

GetAttachments returns the Attachments field if non-nil, zero value otherwise.

### GetAttachmentsOk

`func (o *TemplateDtoSlackTemplate) GetAttachmentsOk() (*string, bool)`

GetAttachmentsOk returns a tuple with the Attachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachments

`func (o *TemplateDtoSlackTemplate) SetAttachments(v string)`

SetAttachments sets Attachments field to given value.

### HasAttachments

`func (o *TemplateDtoSlackTemplate) HasAttachments() bool`

HasAttachments returns a boolean if a field has been set.

### GetNotificationType

`func (o *TemplateDtoSlackTemplate) GetNotificationType() string`

GetNotificationType returns the NotificationType field if non-nil, zero value otherwise.

### GetNotificationTypeOk

`func (o *TemplateDtoSlackTemplate) GetNotificationTypeOk() (*string, bool)`

GetNotificationTypeOk returns a tuple with the NotificationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationType

`func (o *TemplateDtoSlackTemplate) SetNotificationType(v string)`

SetNotificationType sets NotificationType field to given value.

### HasNotificationType

`func (o *TemplateDtoSlackTemplate) HasNotificationType() bool`

HasNotificationType returns a boolean if a field has been set.

### SetNotificationTypeNil

`func (o *TemplateDtoSlackTemplate) SetNotificationTypeNil(b bool)`

 SetNotificationTypeNil sets the value for NotificationType to be an explicit nil

### UnsetNotificationType
`func (o *TemplateDtoSlackTemplate) UnsetNotificationType()`

UnsetNotificationType ensures that no value is present for NotificationType, not even an explicit nil
### GetApprovalId

`func (o *TemplateDtoSlackTemplate) GetApprovalId() string`

GetApprovalId returns the ApprovalId field if non-nil, zero value otherwise.

### GetApprovalIdOk

`func (o *TemplateDtoSlackTemplate) GetApprovalIdOk() (*string, bool)`

GetApprovalIdOk returns a tuple with the ApprovalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalId

`func (o *TemplateDtoSlackTemplate) SetApprovalId(v string)`

SetApprovalId sets ApprovalId field to given value.

### HasApprovalId

`func (o *TemplateDtoSlackTemplate) HasApprovalId() bool`

HasApprovalId returns a boolean if a field has been set.

### SetApprovalIdNil

`func (o *TemplateDtoSlackTemplate) SetApprovalIdNil(b bool)`

 SetApprovalIdNil sets the value for ApprovalId to be an explicit nil

### UnsetApprovalId
`func (o *TemplateDtoSlackTemplate) UnsetApprovalId()`

UnsetApprovalId ensures that no value is present for ApprovalId, not even an explicit nil
### GetRequestId

`func (o *TemplateDtoSlackTemplate) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *TemplateDtoSlackTemplate) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *TemplateDtoSlackTemplate) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *TemplateDtoSlackTemplate) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.

### SetRequestIdNil

`func (o *TemplateDtoSlackTemplate) SetRequestIdNil(b bool)`

 SetRequestIdNil sets the value for RequestId to be an explicit nil

### UnsetRequestId
`func (o *TemplateDtoSlackTemplate) UnsetRequestId()`

UnsetRequestId ensures that no value is present for RequestId, not even an explicit nil
### GetRequestedById

`func (o *TemplateDtoSlackTemplate) GetRequestedById() string`

GetRequestedById returns the RequestedById field if non-nil, zero value otherwise.

### GetRequestedByIdOk

`func (o *TemplateDtoSlackTemplate) GetRequestedByIdOk() (*string, bool)`

GetRequestedByIdOk returns a tuple with the RequestedById field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedById

`func (o *TemplateDtoSlackTemplate) SetRequestedById(v string)`

SetRequestedById sets RequestedById field to given value.

### HasRequestedById

`func (o *TemplateDtoSlackTemplate) HasRequestedById() bool`

HasRequestedById returns a boolean if a field has been set.

### SetRequestedByIdNil

`func (o *TemplateDtoSlackTemplate) SetRequestedByIdNil(b bool)`

 SetRequestedByIdNil sets the value for RequestedById to be an explicit nil

### UnsetRequestedById
`func (o *TemplateDtoSlackTemplate) UnsetRequestedById()`

UnsetRequestedById ensures that no value is present for RequestedById, not even an explicit nil
### GetIsSubscription

`func (o *TemplateDtoSlackTemplate) GetIsSubscription() bool`

GetIsSubscription returns the IsSubscription field if non-nil, zero value otherwise.

### GetIsSubscriptionOk

`func (o *TemplateDtoSlackTemplate) GetIsSubscriptionOk() (*bool, bool)`

GetIsSubscriptionOk returns a tuple with the IsSubscription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSubscription

`func (o *TemplateDtoSlackTemplate) SetIsSubscription(v bool)`

SetIsSubscription sets IsSubscription field to given value.

### HasIsSubscription

`func (o *TemplateDtoSlackTemplate) HasIsSubscription() bool`

HasIsSubscription returns a boolean if a field has been set.

### SetIsSubscriptionNil

`func (o *TemplateDtoSlackTemplate) SetIsSubscriptionNil(b bool)`

 SetIsSubscriptionNil sets the value for IsSubscription to be an explicit nil

### UnsetIsSubscription
`func (o *TemplateDtoSlackTemplate) UnsetIsSubscription()`

UnsetIsSubscription ensures that no value is present for IsSubscription, not even an explicit nil
### GetAutoApprovalData

`func (o *TemplateDtoSlackTemplate) GetAutoApprovalData() TemplateSlackAutoApprovalData`

GetAutoApprovalData returns the AutoApprovalData field if non-nil, zero value otherwise.

### GetAutoApprovalDataOk

`func (o *TemplateDtoSlackTemplate) GetAutoApprovalDataOk() (*TemplateSlackAutoApprovalData, bool)`

GetAutoApprovalDataOk returns a tuple with the AutoApprovalData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoApprovalData

`func (o *TemplateDtoSlackTemplate) SetAutoApprovalData(v TemplateSlackAutoApprovalData)`

SetAutoApprovalData sets AutoApprovalData field to given value.

### HasAutoApprovalData

`func (o *TemplateDtoSlackTemplate) HasAutoApprovalData() bool`

HasAutoApprovalData returns a boolean if a field has been set.

### SetAutoApprovalDataNil

`func (o *TemplateDtoSlackTemplate) SetAutoApprovalDataNil(b bool)`

 SetAutoApprovalDataNil sets the value for AutoApprovalData to be an explicit nil

### UnsetAutoApprovalData
`func (o *TemplateDtoSlackTemplate) UnsetAutoApprovalData()`

UnsetAutoApprovalData ensures that no value is present for AutoApprovalData, not even an explicit nil
### GetCustomFields

`func (o *TemplateDtoSlackTemplate) GetCustomFields() TemplateSlackCustomFields`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *TemplateDtoSlackTemplate) GetCustomFieldsOk() (*TemplateSlackCustomFields, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *TemplateDtoSlackTemplate) SetCustomFields(v TemplateSlackCustomFields)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *TemplateDtoSlackTemplate) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### SetCustomFieldsNil

`func (o *TemplateDtoSlackTemplate) SetCustomFieldsNil(b bool)`

 SetCustomFieldsNil sets the value for CustomFields to be an explicit nil

### UnsetCustomFields
`func (o *TemplateDtoSlackTemplate) UnsetCustomFields()`

UnsetCustomFields ensures that no value is present for CustomFields, not even an explicit nil

