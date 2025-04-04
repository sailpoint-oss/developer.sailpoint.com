---
id: v2024-template-teams
title: TemplateTeams
pagination_label: TemplateTeams
sidebar_label: TemplateTeams
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TemplateTeams', 'V2024TemplateTeams'] 
slug: /tools/sdk/go/v2024/models/template-teams
tags: ['SDK', 'Software Development Kit', 'TemplateTeams', 'V2024TemplateTeams']
---

# TemplateTeams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **NullableString** |  | [optional] 
**Title** | Pointer to **NullableString** |  | [optional] 
**Text** | Pointer to **string** |  | [optional] 
**MessageJSON** | Pointer to **NullableString** |  | [optional] 
**IsSubscription** | Pointer to **NullableBool** |  | [optional] 
**ApprovalId** | Pointer to **NullableString** |  | [optional] 
**RequestId** | Pointer to **NullableString** |  | [optional] 
**RequestedById** | Pointer to **NullableString** |  | [optional] 
**NotificationType** | Pointer to **NullableString** |  | [optional] 
**AutoApprovalData** | Pointer to [**NullableTemplateSlackAutoApprovalData**](template-slack-auto-approval-data) |  | [optional] 
**CustomFields** | Pointer to [**NullableTemplateSlackCustomFields**](template-slack-custom-fields) |  | [optional] 

## Methods

### NewTemplateTeams

`func NewTemplateTeams() *TemplateTeams`

NewTemplateTeams instantiates a new TemplateTeams object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateTeamsWithDefaults

`func NewTemplateTeamsWithDefaults() *TemplateTeams`

NewTemplateTeamsWithDefaults instantiates a new TemplateTeams object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *TemplateTeams) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *TemplateTeams) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *TemplateTeams) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *TemplateTeams) HasKey() bool`

HasKey returns a boolean if a field has been set.

### SetKeyNil

`func (o *TemplateTeams) SetKeyNil(b bool)`

 SetKeyNil sets the value for Key to be an explicit nil

### UnsetKey
`func (o *TemplateTeams) UnsetKey()`

UnsetKey ensures that no value is present for Key, not even an explicit nil
### GetTitle

`func (o *TemplateTeams) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *TemplateTeams) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *TemplateTeams) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *TemplateTeams) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### SetTitleNil

`func (o *TemplateTeams) SetTitleNil(b bool)`

 SetTitleNil sets the value for Title to be an explicit nil

### UnsetTitle
`func (o *TemplateTeams) UnsetTitle()`

UnsetTitle ensures that no value is present for Title, not even an explicit nil
### GetText

`func (o *TemplateTeams) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *TemplateTeams) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *TemplateTeams) SetText(v string)`

SetText sets Text field to given value.

### HasText

`func (o *TemplateTeams) HasText() bool`

HasText returns a boolean if a field has been set.

### GetMessageJSON

`func (o *TemplateTeams) GetMessageJSON() string`

GetMessageJSON returns the MessageJSON field if non-nil, zero value otherwise.

### GetMessageJSONOk

`func (o *TemplateTeams) GetMessageJSONOk() (*string, bool)`

GetMessageJSONOk returns a tuple with the MessageJSON field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageJSON

`func (o *TemplateTeams) SetMessageJSON(v string)`

SetMessageJSON sets MessageJSON field to given value.

### HasMessageJSON

`func (o *TemplateTeams) HasMessageJSON() bool`

HasMessageJSON returns a boolean if a field has been set.

### SetMessageJSONNil

`func (o *TemplateTeams) SetMessageJSONNil(b bool)`

 SetMessageJSONNil sets the value for MessageJSON to be an explicit nil

### UnsetMessageJSON
`func (o *TemplateTeams) UnsetMessageJSON()`

UnsetMessageJSON ensures that no value is present for MessageJSON, not even an explicit nil
### GetIsSubscription

`func (o *TemplateTeams) GetIsSubscription() bool`

GetIsSubscription returns the IsSubscription field if non-nil, zero value otherwise.

### GetIsSubscriptionOk

`func (o *TemplateTeams) GetIsSubscriptionOk() (*bool, bool)`

GetIsSubscriptionOk returns a tuple with the IsSubscription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSubscription

`func (o *TemplateTeams) SetIsSubscription(v bool)`

SetIsSubscription sets IsSubscription field to given value.

### HasIsSubscription

`func (o *TemplateTeams) HasIsSubscription() bool`

HasIsSubscription returns a boolean if a field has been set.

### SetIsSubscriptionNil

`func (o *TemplateTeams) SetIsSubscriptionNil(b bool)`

 SetIsSubscriptionNil sets the value for IsSubscription to be an explicit nil

### UnsetIsSubscription
`func (o *TemplateTeams) UnsetIsSubscription()`

UnsetIsSubscription ensures that no value is present for IsSubscription, not even an explicit nil
### GetApprovalId

`func (o *TemplateTeams) GetApprovalId() string`

GetApprovalId returns the ApprovalId field if non-nil, zero value otherwise.

### GetApprovalIdOk

`func (o *TemplateTeams) GetApprovalIdOk() (*string, bool)`

GetApprovalIdOk returns a tuple with the ApprovalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalId

`func (o *TemplateTeams) SetApprovalId(v string)`

SetApprovalId sets ApprovalId field to given value.

### HasApprovalId

`func (o *TemplateTeams) HasApprovalId() bool`

HasApprovalId returns a boolean if a field has been set.

### SetApprovalIdNil

`func (o *TemplateTeams) SetApprovalIdNil(b bool)`

 SetApprovalIdNil sets the value for ApprovalId to be an explicit nil

### UnsetApprovalId
`func (o *TemplateTeams) UnsetApprovalId()`

UnsetApprovalId ensures that no value is present for ApprovalId, not even an explicit nil
### GetRequestId

`func (o *TemplateTeams) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *TemplateTeams) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *TemplateTeams) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *TemplateTeams) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.

### SetRequestIdNil

`func (o *TemplateTeams) SetRequestIdNil(b bool)`

 SetRequestIdNil sets the value for RequestId to be an explicit nil

### UnsetRequestId
`func (o *TemplateTeams) UnsetRequestId()`

UnsetRequestId ensures that no value is present for RequestId, not even an explicit nil
### GetRequestedById

`func (o *TemplateTeams) GetRequestedById() string`

GetRequestedById returns the RequestedById field if non-nil, zero value otherwise.

### GetRequestedByIdOk

`func (o *TemplateTeams) GetRequestedByIdOk() (*string, bool)`

GetRequestedByIdOk returns a tuple with the RequestedById field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedById

`func (o *TemplateTeams) SetRequestedById(v string)`

SetRequestedById sets RequestedById field to given value.

### HasRequestedById

`func (o *TemplateTeams) HasRequestedById() bool`

HasRequestedById returns a boolean if a field has been set.

### SetRequestedByIdNil

`func (o *TemplateTeams) SetRequestedByIdNil(b bool)`

 SetRequestedByIdNil sets the value for RequestedById to be an explicit nil

### UnsetRequestedById
`func (o *TemplateTeams) UnsetRequestedById()`

UnsetRequestedById ensures that no value is present for RequestedById, not even an explicit nil
### GetNotificationType

`func (o *TemplateTeams) GetNotificationType() string`

GetNotificationType returns the NotificationType field if non-nil, zero value otherwise.

### GetNotificationTypeOk

`func (o *TemplateTeams) GetNotificationTypeOk() (*string, bool)`

GetNotificationTypeOk returns a tuple with the NotificationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationType

`func (o *TemplateTeams) SetNotificationType(v string)`

SetNotificationType sets NotificationType field to given value.

### HasNotificationType

`func (o *TemplateTeams) HasNotificationType() bool`

HasNotificationType returns a boolean if a field has been set.

### SetNotificationTypeNil

`func (o *TemplateTeams) SetNotificationTypeNil(b bool)`

 SetNotificationTypeNil sets the value for NotificationType to be an explicit nil

### UnsetNotificationType
`func (o *TemplateTeams) UnsetNotificationType()`

UnsetNotificationType ensures that no value is present for NotificationType, not even an explicit nil
### GetAutoApprovalData

`func (o *TemplateTeams) GetAutoApprovalData() TemplateSlackAutoApprovalData`

GetAutoApprovalData returns the AutoApprovalData field if non-nil, zero value otherwise.

### GetAutoApprovalDataOk

`func (o *TemplateTeams) GetAutoApprovalDataOk() (*TemplateSlackAutoApprovalData, bool)`

GetAutoApprovalDataOk returns a tuple with the AutoApprovalData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoApprovalData

`func (o *TemplateTeams) SetAutoApprovalData(v TemplateSlackAutoApprovalData)`

SetAutoApprovalData sets AutoApprovalData field to given value.

### HasAutoApprovalData

`func (o *TemplateTeams) HasAutoApprovalData() bool`

HasAutoApprovalData returns a boolean if a field has been set.

### SetAutoApprovalDataNil

`func (o *TemplateTeams) SetAutoApprovalDataNil(b bool)`

 SetAutoApprovalDataNil sets the value for AutoApprovalData to be an explicit nil

### UnsetAutoApprovalData
`func (o *TemplateTeams) UnsetAutoApprovalData()`

UnsetAutoApprovalData ensures that no value is present for AutoApprovalData, not even an explicit nil
### GetCustomFields

`func (o *TemplateTeams) GetCustomFields() TemplateSlackCustomFields`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *TemplateTeams) GetCustomFieldsOk() (*TemplateSlackCustomFields, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *TemplateTeams) SetCustomFields(v TemplateSlackCustomFields)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *TemplateTeams) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### SetCustomFieldsNil

`func (o *TemplateTeams) SetCustomFieldsNil(b bool)`

 SetCustomFieldsNil sets the value for CustomFields to be an explicit nil

### UnsetCustomFields
`func (o *TemplateTeams) UnsetCustomFields()`

UnsetCustomFields ensures that no value is present for CustomFields, not even an explicit nil

