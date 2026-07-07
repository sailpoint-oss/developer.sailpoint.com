---
id: v1-templatedto-slack-template
title: TemplatedtoSlackTemplate
pagination_label: TemplatedtoSlackTemplate
sidebar_label: TemplatedtoSlackTemplate
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TemplatedtoSlackTemplate', 'V1TemplatedtoSlackTemplate'] 
slug: /tools/sdk/go/notifications/models/templatedto-slack-template
tags: ['SDK', 'Software Development Kit', 'TemplatedtoSlackTemplate', 'V1TemplatedtoSlackTemplate']
---

# TemplatedtoSlackTemplate

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
**AutoApprovalData** | Pointer to [**NullableTemplateslackAutoApprovalData**](templateslack-auto-approval-data) |  | [optional] 
**CustomFields** | Pointer to [**NullableTemplateslackCustomFields**](templateslack-custom-fields) |  | [optional] 

## Methods

### NewTemplatedtoSlackTemplate

`func NewTemplatedtoSlackTemplate() *TemplatedtoSlackTemplate`

NewTemplatedtoSlackTemplate instantiates a new TemplatedtoSlackTemplate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplatedtoSlackTemplateWithDefaults

`func NewTemplatedtoSlackTemplateWithDefaults() *TemplatedtoSlackTemplate`

NewTemplatedtoSlackTemplateWithDefaults instantiates a new TemplatedtoSlackTemplate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *TemplatedtoSlackTemplate) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *TemplatedtoSlackTemplate) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *TemplatedtoSlackTemplate) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *TemplatedtoSlackTemplate) HasKey() bool`

HasKey returns a boolean if a field has been set.

### SetKeyNil

`func (o *TemplatedtoSlackTemplate) SetKeyNil(b bool)`

 SetKeyNil sets the value for Key to be an explicit nil

### UnsetKey
`func (o *TemplatedtoSlackTemplate) UnsetKey()`

UnsetKey ensures that no value is present for Key, not even an explicit nil
### GetText

`func (o *TemplatedtoSlackTemplate) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *TemplatedtoSlackTemplate) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *TemplatedtoSlackTemplate) SetText(v string)`

SetText sets Text field to given value.

### HasText

`func (o *TemplatedtoSlackTemplate) HasText() bool`

HasText returns a boolean if a field has been set.

### GetBlocks

`func (o *TemplatedtoSlackTemplate) GetBlocks() string`

GetBlocks returns the Blocks field if non-nil, zero value otherwise.

### GetBlocksOk

`func (o *TemplatedtoSlackTemplate) GetBlocksOk() (*string, bool)`

GetBlocksOk returns a tuple with the Blocks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlocks

`func (o *TemplatedtoSlackTemplate) SetBlocks(v string)`

SetBlocks sets Blocks field to given value.

### HasBlocks

`func (o *TemplatedtoSlackTemplate) HasBlocks() bool`

HasBlocks returns a boolean if a field has been set.

### SetBlocksNil

`func (o *TemplatedtoSlackTemplate) SetBlocksNil(b bool)`

 SetBlocksNil sets the value for Blocks to be an explicit nil

### UnsetBlocks
`func (o *TemplatedtoSlackTemplate) UnsetBlocks()`

UnsetBlocks ensures that no value is present for Blocks, not even an explicit nil
### GetAttachments

`func (o *TemplatedtoSlackTemplate) GetAttachments() string`

GetAttachments returns the Attachments field if non-nil, zero value otherwise.

### GetAttachmentsOk

`func (o *TemplatedtoSlackTemplate) GetAttachmentsOk() (*string, bool)`

GetAttachmentsOk returns a tuple with the Attachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachments

`func (o *TemplatedtoSlackTemplate) SetAttachments(v string)`

SetAttachments sets Attachments field to given value.

### HasAttachments

`func (o *TemplatedtoSlackTemplate) HasAttachments() bool`

HasAttachments returns a boolean if a field has been set.

### GetNotificationType

`func (o *TemplatedtoSlackTemplate) GetNotificationType() string`

GetNotificationType returns the NotificationType field if non-nil, zero value otherwise.

### GetNotificationTypeOk

`func (o *TemplatedtoSlackTemplate) GetNotificationTypeOk() (*string, bool)`

GetNotificationTypeOk returns a tuple with the NotificationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationType

`func (o *TemplatedtoSlackTemplate) SetNotificationType(v string)`

SetNotificationType sets NotificationType field to given value.

### HasNotificationType

`func (o *TemplatedtoSlackTemplate) HasNotificationType() bool`

HasNotificationType returns a boolean if a field has been set.

### SetNotificationTypeNil

`func (o *TemplatedtoSlackTemplate) SetNotificationTypeNil(b bool)`

 SetNotificationTypeNil sets the value for NotificationType to be an explicit nil

### UnsetNotificationType
`func (o *TemplatedtoSlackTemplate) UnsetNotificationType()`

UnsetNotificationType ensures that no value is present for NotificationType, not even an explicit nil
### GetApprovalId

`func (o *TemplatedtoSlackTemplate) GetApprovalId() string`

GetApprovalId returns the ApprovalId field if non-nil, zero value otherwise.

### GetApprovalIdOk

`func (o *TemplatedtoSlackTemplate) GetApprovalIdOk() (*string, bool)`

GetApprovalIdOk returns a tuple with the ApprovalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalId

`func (o *TemplatedtoSlackTemplate) SetApprovalId(v string)`

SetApprovalId sets ApprovalId field to given value.

### HasApprovalId

`func (o *TemplatedtoSlackTemplate) HasApprovalId() bool`

HasApprovalId returns a boolean if a field has been set.

### SetApprovalIdNil

`func (o *TemplatedtoSlackTemplate) SetApprovalIdNil(b bool)`

 SetApprovalIdNil sets the value for ApprovalId to be an explicit nil

### UnsetApprovalId
`func (o *TemplatedtoSlackTemplate) UnsetApprovalId()`

UnsetApprovalId ensures that no value is present for ApprovalId, not even an explicit nil
### GetRequestId

`func (o *TemplatedtoSlackTemplate) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *TemplatedtoSlackTemplate) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *TemplatedtoSlackTemplate) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *TemplatedtoSlackTemplate) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.

### SetRequestIdNil

`func (o *TemplatedtoSlackTemplate) SetRequestIdNil(b bool)`

 SetRequestIdNil sets the value for RequestId to be an explicit nil

### UnsetRequestId
`func (o *TemplatedtoSlackTemplate) UnsetRequestId()`

UnsetRequestId ensures that no value is present for RequestId, not even an explicit nil
### GetRequestedById

`func (o *TemplatedtoSlackTemplate) GetRequestedById() string`

GetRequestedById returns the RequestedById field if non-nil, zero value otherwise.

### GetRequestedByIdOk

`func (o *TemplatedtoSlackTemplate) GetRequestedByIdOk() (*string, bool)`

GetRequestedByIdOk returns a tuple with the RequestedById field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedById

`func (o *TemplatedtoSlackTemplate) SetRequestedById(v string)`

SetRequestedById sets RequestedById field to given value.

### HasRequestedById

`func (o *TemplatedtoSlackTemplate) HasRequestedById() bool`

HasRequestedById returns a boolean if a field has been set.

### SetRequestedByIdNil

`func (o *TemplatedtoSlackTemplate) SetRequestedByIdNil(b bool)`

 SetRequestedByIdNil sets the value for RequestedById to be an explicit nil

### UnsetRequestedById
`func (o *TemplatedtoSlackTemplate) UnsetRequestedById()`

UnsetRequestedById ensures that no value is present for RequestedById, not even an explicit nil
### GetIsSubscription

`func (o *TemplatedtoSlackTemplate) GetIsSubscription() bool`

GetIsSubscription returns the IsSubscription field if non-nil, zero value otherwise.

### GetIsSubscriptionOk

`func (o *TemplatedtoSlackTemplate) GetIsSubscriptionOk() (*bool, bool)`

GetIsSubscriptionOk returns a tuple with the IsSubscription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSubscription

`func (o *TemplatedtoSlackTemplate) SetIsSubscription(v bool)`

SetIsSubscription sets IsSubscription field to given value.

### HasIsSubscription

`func (o *TemplatedtoSlackTemplate) HasIsSubscription() bool`

HasIsSubscription returns a boolean if a field has been set.

### SetIsSubscriptionNil

`func (o *TemplatedtoSlackTemplate) SetIsSubscriptionNil(b bool)`

 SetIsSubscriptionNil sets the value for IsSubscription to be an explicit nil

### UnsetIsSubscription
`func (o *TemplatedtoSlackTemplate) UnsetIsSubscription()`

UnsetIsSubscription ensures that no value is present for IsSubscription, not even an explicit nil
### GetAutoApprovalData

`func (o *TemplatedtoSlackTemplate) GetAutoApprovalData() TemplateslackAutoApprovalData`

GetAutoApprovalData returns the AutoApprovalData field if non-nil, zero value otherwise.

### GetAutoApprovalDataOk

`func (o *TemplatedtoSlackTemplate) GetAutoApprovalDataOk() (*TemplateslackAutoApprovalData, bool)`

GetAutoApprovalDataOk returns a tuple with the AutoApprovalData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoApprovalData

`func (o *TemplatedtoSlackTemplate) SetAutoApprovalData(v TemplateslackAutoApprovalData)`

SetAutoApprovalData sets AutoApprovalData field to given value.

### HasAutoApprovalData

`func (o *TemplatedtoSlackTemplate) HasAutoApprovalData() bool`

HasAutoApprovalData returns a boolean if a field has been set.

### SetAutoApprovalDataNil

`func (o *TemplatedtoSlackTemplate) SetAutoApprovalDataNil(b bool)`

 SetAutoApprovalDataNil sets the value for AutoApprovalData to be an explicit nil

### UnsetAutoApprovalData
`func (o *TemplatedtoSlackTemplate) UnsetAutoApprovalData()`

UnsetAutoApprovalData ensures that no value is present for AutoApprovalData, not even an explicit nil
### GetCustomFields

`func (o *TemplatedtoSlackTemplate) GetCustomFields() TemplateslackCustomFields`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *TemplatedtoSlackTemplate) GetCustomFieldsOk() (*TemplateslackCustomFields, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *TemplatedtoSlackTemplate) SetCustomFields(v TemplateslackCustomFields)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *TemplatedtoSlackTemplate) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### SetCustomFieldsNil

`func (o *TemplatedtoSlackTemplate) SetCustomFieldsNil(b bool)`

 SetCustomFieldsNil sets the value for CustomFields to be an explicit nil

### UnsetCustomFields
`func (o *TemplatedtoSlackTemplate) UnsetCustomFields()`

UnsetCustomFields ensures that no value is present for CustomFields, not even an explicit nil

