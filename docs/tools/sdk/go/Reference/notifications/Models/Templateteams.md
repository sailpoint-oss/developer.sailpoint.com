---
id: v1-templateteams
title: Templateteams
pagination_label: Templateteams
sidebar_label: Templateteams
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Templateteams', 'V1Templateteams'] 
slug: /tools/sdk/go/notifications/models/templateteams
tags: ['SDK', 'Software Development Kit', 'Templateteams', 'V1Templateteams']
---

# Templateteams

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

### NewTemplateteams

`func NewTemplateteams() *Templateteams`

NewTemplateteams instantiates a new Templateteams object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateteamsWithDefaults

`func NewTemplateteamsWithDefaults() *Templateteams`

NewTemplateteamsWithDefaults instantiates a new Templateteams object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *Templateteams) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Templateteams) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Templateteams) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *Templateteams) HasKey() bool`

HasKey returns a boolean if a field has been set.

### SetKeyNil

`func (o *Templateteams) SetKeyNil(b bool)`

 SetKeyNil sets the value for Key to be an explicit nil

### UnsetKey
`func (o *Templateteams) UnsetKey()`

UnsetKey ensures that no value is present for Key, not even an explicit nil
### GetTitle

`func (o *Templateteams) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *Templateteams) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *Templateteams) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *Templateteams) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### SetTitleNil

`func (o *Templateteams) SetTitleNil(b bool)`

 SetTitleNil sets the value for Title to be an explicit nil

### UnsetTitle
`func (o *Templateteams) UnsetTitle()`

UnsetTitle ensures that no value is present for Title, not even an explicit nil
### GetText

`func (o *Templateteams) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *Templateteams) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *Templateteams) SetText(v string)`

SetText sets Text field to given value.

### HasText

`func (o *Templateteams) HasText() bool`

HasText returns a boolean if a field has been set.

### GetMessageJSON

`func (o *Templateteams) GetMessageJSON() string`

GetMessageJSON returns the MessageJSON field if non-nil, zero value otherwise.

### GetMessageJSONOk

`func (o *Templateteams) GetMessageJSONOk() (*string, bool)`

GetMessageJSONOk returns a tuple with the MessageJSON field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageJSON

`func (o *Templateteams) SetMessageJSON(v string)`

SetMessageJSON sets MessageJSON field to given value.

### HasMessageJSON

`func (o *Templateteams) HasMessageJSON() bool`

HasMessageJSON returns a boolean if a field has been set.

### SetMessageJSONNil

`func (o *Templateteams) SetMessageJSONNil(b bool)`

 SetMessageJSONNil sets the value for MessageJSON to be an explicit nil

### UnsetMessageJSON
`func (o *Templateteams) UnsetMessageJSON()`

UnsetMessageJSON ensures that no value is present for MessageJSON, not even an explicit nil
### GetIsSubscription

`func (o *Templateteams) GetIsSubscription() bool`

GetIsSubscription returns the IsSubscription field if non-nil, zero value otherwise.

### GetIsSubscriptionOk

`func (o *Templateteams) GetIsSubscriptionOk() (*bool, bool)`

GetIsSubscriptionOk returns a tuple with the IsSubscription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSubscription

`func (o *Templateteams) SetIsSubscription(v bool)`

SetIsSubscription sets IsSubscription field to given value.

### HasIsSubscription

`func (o *Templateteams) HasIsSubscription() bool`

HasIsSubscription returns a boolean if a field has been set.

### SetIsSubscriptionNil

`func (o *Templateteams) SetIsSubscriptionNil(b bool)`

 SetIsSubscriptionNil sets the value for IsSubscription to be an explicit nil

### UnsetIsSubscription
`func (o *Templateteams) UnsetIsSubscription()`

UnsetIsSubscription ensures that no value is present for IsSubscription, not even an explicit nil
### GetApprovalId

`func (o *Templateteams) GetApprovalId() string`

GetApprovalId returns the ApprovalId field if non-nil, zero value otherwise.

### GetApprovalIdOk

`func (o *Templateteams) GetApprovalIdOk() (*string, bool)`

GetApprovalIdOk returns a tuple with the ApprovalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalId

`func (o *Templateteams) SetApprovalId(v string)`

SetApprovalId sets ApprovalId field to given value.

### HasApprovalId

`func (o *Templateteams) HasApprovalId() bool`

HasApprovalId returns a boolean if a field has been set.

### SetApprovalIdNil

`func (o *Templateteams) SetApprovalIdNil(b bool)`

 SetApprovalIdNil sets the value for ApprovalId to be an explicit nil

### UnsetApprovalId
`func (o *Templateteams) UnsetApprovalId()`

UnsetApprovalId ensures that no value is present for ApprovalId, not even an explicit nil
### GetRequestId

`func (o *Templateteams) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *Templateteams) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *Templateteams) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *Templateteams) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.

### SetRequestIdNil

`func (o *Templateteams) SetRequestIdNil(b bool)`

 SetRequestIdNil sets the value for RequestId to be an explicit nil

### UnsetRequestId
`func (o *Templateteams) UnsetRequestId()`

UnsetRequestId ensures that no value is present for RequestId, not even an explicit nil
### GetRequestedById

`func (o *Templateteams) GetRequestedById() string`

GetRequestedById returns the RequestedById field if non-nil, zero value otherwise.

### GetRequestedByIdOk

`func (o *Templateteams) GetRequestedByIdOk() (*string, bool)`

GetRequestedByIdOk returns a tuple with the RequestedById field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedById

`func (o *Templateteams) SetRequestedById(v string)`

SetRequestedById sets RequestedById field to given value.

### HasRequestedById

`func (o *Templateteams) HasRequestedById() bool`

HasRequestedById returns a boolean if a field has been set.

### SetRequestedByIdNil

`func (o *Templateteams) SetRequestedByIdNil(b bool)`

 SetRequestedByIdNil sets the value for RequestedById to be an explicit nil

### UnsetRequestedById
`func (o *Templateteams) UnsetRequestedById()`

UnsetRequestedById ensures that no value is present for RequestedById, not even an explicit nil
### GetNotificationType

`func (o *Templateteams) GetNotificationType() string`

GetNotificationType returns the NotificationType field if non-nil, zero value otherwise.

### GetNotificationTypeOk

`func (o *Templateteams) GetNotificationTypeOk() (*string, bool)`

GetNotificationTypeOk returns a tuple with the NotificationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationType

`func (o *Templateteams) SetNotificationType(v string)`

SetNotificationType sets NotificationType field to given value.

### HasNotificationType

`func (o *Templateteams) HasNotificationType() bool`

HasNotificationType returns a boolean if a field has been set.

### SetNotificationTypeNil

`func (o *Templateteams) SetNotificationTypeNil(b bool)`

 SetNotificationTypeNil sets the value for NotificationType to be an explicit nil

### UnsetNotificationType
`func (o *Templateteams) UnsetNotificationType()`

UnsetNotificationType ensures that no value is present for NotificationType, not even an explicit nil
### GetAutoApprovalData

`func (o *Templateteams) GetAutoApprovalData() TemplateslackAutoApprovalData`

GetAutoApprovalData returns the AutoApprovalData field if non-nil, zero value otherwise.

### GetAutoApprovalDataOk

`func (o *Templateteams) GetAutoApprovalDataOk() (*TemplateslackAutoApprovalData, bool)`

GetAutoApprovalDataOk returns a tuple with the AutoApprovalData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoApprovalData

`func (o *Templateteams) SetAutoApprovalData(v TemplateslackAutoApprovalData)`

SetAutoApprovalData sets AutoApprovalData field to given value.

### HasAutoApprovalData

`func (o *Templateteams) HasAutoApprovalData() bool`

HasAutoApprovalData returns a boolean if a field has been set.

### SetAutoApprovalDataNil

`func (o *Templateteams) SetAutoApprovalDataNil(b bool)`

 SetAutoApprovalDataNil sets the value for AutoApprovalData to be an explicit nil

### UnsetAutoApprovalData
`func (o *Templateteams) UnsetAutoApprovalData()`

UnsetAutoApprovalData ensures that no value is present for AutoApprovalData, not even an explicit nil
### GetCustomFields

`func (o *Templateteams) GetCustomFields() TemplateslackCustomFields`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *Templateteams) GetCustomFieldsOk() (*TemplateslackCustomFields, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *Templateteams) SetCustomFields(v TemplateslackCustomFields)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *Templateteams) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### SetCustomFieldsNil

`func (o *Templateteams) SetCustomFieldsNil(b bool)`

 SetCustomFieldsNil sets the value for CustomFields to be an explicit nil

### UnsetCustomFields
`func (o *Templateteams) UnsetCustomFields()`

UnsetCustomFields ensures that no value is present for CustomFields, not even an explicit nil

