---
id: v2024-template-slack
title: TemplateSlack
pagination_label: TemplateSlack
sidebar_label: TemplateSlack
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TemplateSlack', 'V2024TemplateSlack'] 
slug: /tools/sdk/go/v2024/models/template-slack
tags: ['SDK', 'Software Development Kit', 'TemplateSlack', 'V2024TemplateSlack']
---

# TemplateSlack

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **NullableString** |  | [optional] 
**Text** | Pointer to **string** |  | [optional] 
**Blocks** | Pointer to **NullableString** |  | [optional] 
**Attachments** | Pointer to **string** |  | [optional] 
**NotificationType** | Pointer to **NullableString** |  | [optional] 
**ApprovalId** | Pointer to **NullableString** |  | [optional] 
**RequestId** | Pointer to **NullableString** |  | [optional] 
**RequestedById** | Pointer to **NullableString** |  | [optional] 
**IsSubscription** | Pointer to **NullableBool** |  | [optional] 
**AutoApprovalData** | Pointer to [**NullableTemplateSlackAutoApprovalData**](template-slack-auto-approval-data) |  | [optional] 
**CustomFields** | Pointer to [**NullableTemplateSlackCustomFields**](template-slack-custom-fields) |  | [optional] 

## Methods

### NewTemplateSlack

`func NewTemplateSlack() *TemplateSlack`

NewTemplateSlack instantiates a new TemplateSlack object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateSlackWithDefaults

`func NewTemplateSlackWithDefaults() *TemplateSlack`

NewTemplateSlackWithDefaults instantiates a new TemplateSlack object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *TemplateSlack) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *TemplateSlack) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *TemplateSlack) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *TemplateSlack) HasKey() bool`

HasKey returns a boolean if a field has been set.

### SetKeyNil

`func (o *TemplateSlack) SetKeyNil(b bool)`

 SetKeyNil sets the value for Key to be an explicit nil

### UnsetKey
`func (o *TemplateSlack) UnsetKey()`

UnsetKey ensures that no value is present for Key, not even an explicit nil
### GetText

`func (o *TemplateSlack) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *TemplateSlack) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *TemplateSlack) SetText(v string)`

SetText sets Text field to given value.

### HasText

`func (o *TemplateSlack) HasText() bool`

HasText returns a boolean if a field has been set.

### GetBlocks

`func (o *TemplateSlack) GetBlocks() string`

GetBlocks returns the Blocks field if non-nil, zero value otherwise.

### GetBlocksOk

`func (o *TemplateSlack) GetBlocksOk() (*string, bool)`

GetBlocksOk returns a tuple with the Blocks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlocks

`func (o *TemplateSlack) SetBlocks(v string)`

SetBlocks sets Blocks field to given value.

### HasBlocks

`func (o *TemplateSlack) HasBlocks() bool`

HasBlocks returns a boolean if a field has been set.

### SetBlocksNil

`func (o *TemplateSlack) SetBlocksNil(b bool)`

 SetBlocksNil sets the value for Blocks to be an explicit nil

### UnsetBlocks
`func (o *TemplateSlack) UnsetBlocks()`

UnsetBlocks ensures that no value is present for Blocks, not even an explicit nil
### GetAttachments

`func (o *TemplateSlack) GetAttachments() string`

GetAttachments returns the Attachments field if non-nil, zero value otherwise.

### GetAttachmentsOk

`func (o *TemplateSlack) GetAttachmentsOk() (*string, bool)`

GetAttachmentsOk returns a tuple with the Attachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachments

`func (o *TemplateSlack) SetAttachments(v string)`

SetAttachments sets Attachments field to given value.

### HasAttachments

`func (o *TemplateSlack) HasAttachments() bool`

HasAttachments returns a boolean if a field has been set.

### GetNotificationType

`func (o *TemplateSlack) GetNotificationType() string`

GetNotificationType returns the NotificationType field if non-nil, zero value otherwise.

### GetNotificationTypeOk

`func (o *TemplateSlack) GetNotificationTypeOk() (*string, bool)`

GetNotificationTypeOk returns a tuple with the NotificationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationType

`func (o *TemplateSlack) SetNotificationType(v string)`

SetNotificationType sets NotificationType field to given value.

### HasNotificationType

`func (o *TemplateSlack) HasNotificationType() bool`

HasNotificationType returns a boolean if a field has been set.

### SetNotificationTypeNil

`func (o *TemplateSlack) SetNotificationTypeNil(b bool)`

 SetNotificationTypeNil sets the value for NotificationType to be an explicit nil

### UnsetNotificationType
`func (o *TemplateSlack) UnsetNotificationType()`

UnsetNotificationType ensures that no value is present for NotificationType, not even an explicit nil
### GetApprovalId

`func (o *TemplateSlack) GetApprovalId() string`

GetApprovalId returns the ApprovalId field if non-nil, zero value otherwise.

### GetApprovalIdOk

`func (o *TemplateSlack) GetApprovalIdOk() (*string, bool)`

GetApprovalIdOk returns a tuple with the ApprovalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalId

`func (o *TemplateSlack) SetApprovalId(v string)`

SetApprovalId sets ApprovalId field to given value.

### HasApprovalId

`func (o *TemplateSlack) HasApprovalId() bool`

HasApprovalId returns a boolean if a field has been set.

### SetApprovalIdNil

`func (o *TemplateSlack) SetApprovalIdNil(b bool)`

 SetApprovalIdNil sets the value for ApprovalId to be an explicit nil

### UnsetApprovalId
`func (o *TemplateSlack) UnsetApprovalId()`

UnsetApprovalId ensures that no value is present for ApprovalId, not even an explicit nil
### GetRequestId

`func (o *TemplateSlack) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *TemplateSlack) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *TemplateSlack) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *TemplateSlack) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.

### SetRequestIdNil

`func (o *TemplateSlack) SetRequestIdNil(b bool)`

 SetRequestIdNil sets the value for RequestId to be an explicit nil

### UnsetRequestId
`func (o *TemplateSlack) UnsetRequestId()`

UnsetRequestId ensures that no value is present for RequestId, not even an explicit nil
### GetRequestedById

`func (o *TemplateSlack) GetRequestedById() string`

GetRequestedById returns the RequestedById field if non-nil, zero value otherwise.

### GetRequestedByIdOk

`func (o *TemplateSlack) GetRequestedByIdOk() (*string, bool)`

GetRequestedByIdOk returns a tuple with the RequestedById field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedById

`func (o *TemplateSlack) SetRequestedById(v string)`

SetRequestedById sets RequestedById field to given value.

### HasRequestedById

`func (o *TemplateSlack) HasRequestedById() bool`

HasRequestedById returns a boolean if a field has been set.

### SetRequestedByIdNil

`func (o *TemplateSlack) SetRequestedByIdNil(b bool)`

 SetRequestedByIdNil sets the value for RequestedById to be an explicit nil

### UnsetRequestedById
`func (o *TemplateSlack) UnsetRequestedById()`

UnsetRequestedById ensures that no value is present for RequestedById, not even an explicit nil
### GetIsSubscription

`func (o *TemplateSlack) GetIsSubscription() bool`

GetIsSubscription returns the IsSubscription field if non-nil, zero value otherwise.

### GetIsSubscriptionOk

`func (o *TemplateSlack) GetIsSubscriptionOk() (*bool, bool)`

GetIsSubscriptionOk returns a tuple with the IsSubscription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSubscription

`func (o *TemplateSlack) SetIsSubscription(v bool)`

SetIsSubscription sets IsSubscription field to given value.

### HasIsSubscription

`func (o *TemplateSlack) HasIsSubscription() bool`

HasIsSubscription returns a boolean if a field has been set.

### SetIsSubscriptionNil

`func (o *TemplateSlack) SetIsSubscriptionNil(b bool)`

 SetIsSubscriptionNil sets the value for IsSubscription to be an explicit nil

### UnsetIsSubscription
`func (o *TemplateSlack) UnsetIsSubscription()`

UnsetIsSubscription ensures that no value is present for IsSubscription, not even an explicit nil
### GetAutoApprovalData

`func (o *TemplateSlack) GetAutoApprovalData() TemplateSlackAutoApprovalData`

GetAutoApprovalData returns the AutoApprovalData field if non-nil, zero value otherwise.

### GetAutoApprovalDataOk

`func (o *TemplateSlack) GetAutoApprovalDataOk() (*TemplateSlackAutoApprovalData, bool)`

GetAutoApprovalDataOk returns a tuple with the AutoApprovalData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoApprovalData

`func (o *TemplateSlack) SetAutoApprovalData(v TemplateSlackAutoApprovalData)`

SetAutoApprovalData sets AutoApprovalData field to given value.

### HasAutoApprovalData

`func (o *TemplateSlack) HasAutoApprovalData() bool`

HasAutoApprovalData returns a boolean if a field has been set.

### SetAutoApprovalDataNil

`func (o *TemplateSlack) SetAutoApprovalDataNil(b bool)`

 SetAutoApprovalDataNil sets the value for AutoApprovalData to be an explicit nil

### UnsetAutoApprovalData
`func (o *TemplateSlack) UnsetAutoApprovalData()`

UnsetAutoApprovalData ensures that no value is present for AutoApprovalData, not even an explicit nil
### GetCustomFields

`func (o *TemplateSlack) GetCustomFields() TemplateSlackCustomFields`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *TemplateSlack) GetCustomFieldsOk() (*TemplateSlackCustomFields, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *TemplateSlack) SetCustomFields(v TemplateSlackCustomFields)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *TemplateSlack) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### SetCustomFieldsNil

`func (o *TemplateSlack) SetCustomFieldsNil(b bool)`

 SetCustomFieldsNil sets the value for CustomFields to be an explicit nil

### UnsetCustomFields
`func (o *TemplateSlack) UnsetCustomFields()`

UnsetCustomFields ensures that no value is present for CustomFields, not even an explicit nil

