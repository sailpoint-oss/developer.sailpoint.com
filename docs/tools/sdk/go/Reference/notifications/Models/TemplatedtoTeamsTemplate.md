---
id: v1-templatedto-teams-template
title: TemplatedtoTeamsTemplate
pagination_label: TemplatedtoTeamsTemplate
sidebar_label: TemplatedtoTeamsTemplate
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TemplatedtoTeamsTemplate', 'V1TemplatedtoTeamsTemplate'] 
slug: /tools/sdk/go/notifications/models/templatedto-teams-template
tags: ['SDK', 'Software Development Kit', 'TemplatedtoTeamsTemplate', 'V1TemplatedtoTeamsTemplate']
---

# TemplatedtoTeamsTemplate

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
**AutoApprovalData** | Pointer to [**NullableTemplateslackAutoApprovalData**](templateslack-auto-approval-data) |  | [optional] 
**CustomFields** | Pointer to [**NullableTemplateslackCustomFields**](templateslack-custom-fields) |  | [optional] 

## Methods

### NewTemplatedtoTeamsTemplate

`func NewTemplatedtoTeamsTemplate() *TemplatedtoTeamsTemplate`

NewTemplatedtoTeamsTemplate instantiates a new TemplatedtoTeamsTemplate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplatedtoTeamsTemplateWithDefaults

`func NewTemplatedtoTeamsTemplateWithDefaults() *TemplatedtoTeamsTemplate`

NewTemplatedtoTeamsTemplateWithDefaults instantiates a new TemplatedtoTeamsTemplate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *TemplatedtoTeamsTemplate) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *TemplatedtoTeamsTemplate) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *TemplatedtoTeamsTemplate) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *TemplatedtoTeamsTemplate) HasKey() bool`

HasKey returns a boolean if a field has been set.

### SetKeyNil

`func (o *TemplatedtoTeamsTemplate) SetKeyNil(b bool)`

 SetKeyNil sets the value for Key to be an explicit nil

### UnsetKey
`func (o *TemplatedtoTeamsTemplate) UnsetKey()`

UnsetKey ensures that no value is present for Key, not even an explicit nil
### GetTitle

`func (o *TemplatedtoTeamsTemplate) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *TemplatedtoTeamsTemplate) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *TemplatedtoTeamsTemplate) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *TemplatedtoTeamsTemplate) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### SetTitleNil

`func (o *TemplatedtoTeamsTemplate) SetTitleNil(b bool)`

 SetTitleNil sets the value for Title to be an explicit nil

### UnsetTitle
`func (o *TemplatedtoTeamsTemplate) UnsetTitle()`

UnsetTitle ensures that no value is present for Title, not even an explicit nil
### GetText

`func (o *TemplatedtoTeamsTemplate) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *TemplatedtoTeamsTemplate) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *TemplatedtoTeamsTemplate) SetText(v string)`

SetText sets Text field to given value.

### HasText

`func (o *TemplatedtoTeamsTemplate) HasText() bool`

HasText returns a boolean if a field has been set.

### GetMessageJSON

`func (o *TemplatedtoTeamsTemplate) GetMessageJSON() string`

GetMessageJSON returns the MessageJSON field if non-nil, zero value otherwise.

### GetMessageJSONOk

`func (o *TemplatedtoTeamsTemplate) GetMessageJSONOk() (*string, bool)`

GetMessageJSONOk returns a tuple with the MessageJSON field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageJSON

`func (o *TemplatedtoTeamsTemplate) SetMessageJSON(v string)`

SetMessageJSON sets MessageJSON field to given value.

### HasMessageJSON

`func (o *TemplatedtoTeamsTemplate) HasMessageJSON() bool`

HasMessageJSON returns a boolean if a field has been set.

### SetMessageJSONNil

`func (o *TemplatedtoTeamsTemplate) SetMessageJSONNil(b bool)`

 SetMessageJSONNil sets the value for MessageJSON to be an explicit nil

### UnsetMessageJSON
`func (o *TemplatedtoTeamsTemplate) UnsetMessageJSON()`

UnsetMessageJSON ensures that no value is present for MessageJSON, not even an explicit nil
### GetIsSubscription

`func (o *TemplatedtoTeamsTemplate) GetIsSubscription() bool`

GetIsSubscription returns the IsSubscription field if non-nil, zero value otherwise.

### GetIsSubscriptionOk

`func (o *TemplatedtoTeamsTemplate) GetIsSubscriptionOk() (*bool, bool)`

GetIsSubscriptionOk returns a tuple with the IsSubscription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSubscription

`func (o *TemplatedtoTeamsTemplate) SetIsSubscription(v bool)`

SetIsSubscription sets IsSubscription field to given value.

### HasIsSubscription

`func (o *TemplatedtoTeamsTemplate) HasIsSubscription() bool`

HasIsSubscription returns a boolean if a field has been set.

### SetIsSubscriptionNil

`func (o *TemplatedtoTeamsTemplate) SetIsSubscriptionNil(b bool)`

 SetIsSubscriptionNil sets the value for IsSubscription to be an explicit nil

### UnsetIsSubscription
`func (o *TemplatedtoTeamsTemplate) UnsetIsSubscription()`

UnsetIsSubscription ensures that no value is present for IsSubscription, not even an explicit nil
### GetApprovalId

`func (o *TemplatedtoTeamsTemplate) GetApprovalId() string`

GetApprovalId returns the ApprovalId field if non-nil, zero value otherwise.

### GetApprovalIdOk

`func (o *TemplatedtoTeamsTemplate) GetApprovalIdOk() (*string, bool)`

GetApprovalIdOk returns a tuple with the ApprovalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalId

`func (o *TemplatedtoTeamsTemplate) SetApprovalId(v string)`

SetApprovalId sets ApprovalId field to given value.

### HasApprovalId

`func (o *TemplatedtoTeamsTemplate) HasApprovalId() bool`

HasApprovalId returns a boolean if a field has been set.

### SetApprovalIdNil

`func (o *TemplatedtoTeamsTemplate) SetApprovalIdNil(b bool)`

 SetApprovalIdNil sets the value for ApprovalId to be an explicit nil

### UnsetApprovalId
`func (o *TemplatedtoTeamsTemplate) UnsetApprovalId()`

UnsetApprovalId ensures that no value is present for ApprovalId, not even an explicit nil
### GetRequestId

`func (o *TemplatedtoTeamsTemplate) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *TemplatedtoTeamsTemplate) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *TemplatedtoTeamsTemplate) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *TemplatedtoTeamsTemplate) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.

### SetRequestIdNil

`func (o *TemplatedtoTeamsTemplate) SetRequestIdNil(b bool)`

 SetRequestIdNil sets the value for RequestId to be an explicit nil

### UnsetRequestId
`func (o *TemplatedtoTeamsTemplate) UnsetRequestId()`

UnsetRequestId ensures that no value is present for RequestId, not even an explicit nil
### GetRequestedById

`func (o *TemplatedtoTeamsTemplate) GetRequestedById() string`

GetRequestedById returns the RequestedById field if non-nil, zero value otherwise.

### GetRequestedByIdOk

`func (o *TemplatedtoTeamsTemplate) GetRequestedByIdOk() (*string, bool)`

GetRequestedByIdOk returns a tuple with the RequestedById field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedById

`func (o *TemplatedtoTeamsTemplate) SetRequestedById(v string)`

SetRequestedById sets RequestedById field to given value.

### HasRequestedById

`func (o *TemplatedtoTeamsTemplate) HasRequestedById() bool`

HasRequestedById returns a boolean if a field has been set.

### SetRequestedByIdNil

`func (o *TemplatedtoTeamsTemplate) SetRequestedByIdNil(b bool)`

 SetRequestedByIdNil sets the value for RequestedById to be an explicit nil

### UnsetRequestedById
`func (o *TemplatedtoTeamsTemplate) UnsetRequestedById()`

UnsetRequestedById ensures that no value is present for RequestedById, not even an explicit nil
### GetNotificationType

`func (o *TemplatedtoTeamsTemplate) GetNotificationType() string`

GetNotificationType returns the NotificationType field if non-nil, zero value otherwise.

### GetNotificationTypeOk

`func (o *TemplatedtoTeamsTemplate) GetNotificationTypeOk() (*string, bool)`

GetNotificationTypeOk returns a tuple with the NotificationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationType

`func (o *TemplatedtoTeamsTemplate) SetNotificationType(v string)`

SetNotificationType sets NotificationType field to given value.

### HasNotificationType

`func (o *TemplatedtoTeamsTemplate) HasNotificationType() bool`

HasNotificationType returns a boolean if a field has been set.

### SetNotificationTypeNil

`func (o *TemplatedtoTeamsTemplate) SetNotificationTypeNil(b bool)`

 SetNotificationTypeNil sets the value for NotificationType to be an explicit nil

### UnsetNotificationType
`func (o *TemplatedtoTeamsTemplate) UnsetNotificationType()`

UnsetNotificationType ensures that no value is present for NotificationType, not even an explicit nil
### GetAutoApprovalData

`func (o *TemplatedtoTeamsTemplate) GetAutoApprovalData() TemplateslackAutoApprovalData`

GetAutoApprovalData returns the AutoApprovalData field if non-nil, zero value otherwise.

### GetAutoApprovalDataOk

`func (o *TemplatedtoTeamsTemplate) GetAutoApprovalDataOk() (*TemplateslackAutoApprovalData, bool)`

GetAutoApprovalDataOk returns a tuple with the AutoApprovalData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoApprovalData

`func (o *TemplatedtoTeamsTemplate) SetAutoApprovalData(v TemplateslackAutoApprovalData)`

SetAutoApprovalData sets AutoApprovalData field to given value.

### HasAutoApprovalData

`func (o *TemplatedtoTeamsTemplate) HasAutoApprovalData() bool`

HasAutoApprovalData returns a boolean if a field has been set.

### SetAutoApprovalDataNil

`func (o *TemplatedtoTeamsTemplate) SetAutoApprovalDataNil(b bool)`

 SetAutoApprovalDataNil sets the value for AutoApprovalData to be an explicit nil

### UnsetAutoApprovalData
`func (o *TemplatedtoTeamsTemplate) UnsetAutoApprovalData()`

UnsetAutoApprovalData ensures that no value is present for AutoApprovalData, not even an explicit nil
### GetCustomFields

`func (o *TemplatedtoTeamsTemplate) GetCustomFields() TemplateslackCustomFields`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *TemplatedtoTeamsTemplate) GetCustomFieldsOk() (*TemplateslackCustomFields, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *TemplatedtoTeamsTemplate) SetCustomFields(v TemplateslackCustomFields)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *TemplatedtoTeamsTemplate) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### SetCustomFieldsNil

`func (o *TemplatedtoTeamsTemplate) SetCustomFieldsNil(b bool)`

 SetCustomFieldsNil sets the value for CustomFields to be an explicit nil

### UnsetCustomFields
`func (o *TemplatedtoTeamsTemplate) UnsetCustomFields()`

UnsetCustomFields ensures that no value is present for CustomFields, not even an explicit nil

