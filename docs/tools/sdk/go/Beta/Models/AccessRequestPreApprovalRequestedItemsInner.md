---
id: access-request-pre-approval-requested-items-inner
title: AccessRequestPreApprovalRequestedItemsInner
pagination_label: AccessRequestPreApprovalRequestedItemsInner
sidebar_label: AccessRequestPreApprovalRequestedItemsInner
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'AccessRequestPreApprovalRequestedItemsInner'] 
slug: /tools/sdk/go/beta/models/access-request-pre-approval-requested-items-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestPreApprovalRequestedItemsInner']
---

# AccessRequestPreApprovalRequestedItemsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **string** | The unique ID of the access item being requested. | 
**Name** |  **string** | The human friendly name of the access item. | 
**Description** |  Pointer to **NullableString** | Detailed description of the access item. | [optional] 
**Type** |  **map[string]interface{}** | The type of access item. | 
**Operation** |  **map[string]interface{}** | The action to perform on the access item. | 
**Comment** |  Pointer to **NullableString** | A comment from the identity requesting the access. | [optional] 

## Methods

### NewAccessRequestPreApprovalRequestedItemsInner

`func NewAccessRequestPreApprovalRequestedItemsInner(id string, name string, type_ map[string]interface{}, operation map[string]interface{}, ) *AccessRequestPreApprovalRequestedItemsInner`

NewAccessRequestPreApprovalRequestedItemsInner instantiates a new AccessRequestPreApprovalRequestedItemsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestPreApprovalRequestedItemsInnerWithDefaults

`func NewAccessRequestPreApprovalRequestedItemsInnerWithDefaults() *AccessRequestPreApprovalRequestedItemsInner`

NewAccessRequestPreApprovalRequestedItemsInnerWithDefaults instantiates a new AccessRequestPreApprovalRequestedItemsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessRequestPreApprovalRequestedItemsInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessRequestPreApprovalRequestedItemsInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessRequestPreApprovalRequestedItemsInner) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccessRequestPreApprovalRequestedItemsInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessRequestPreApprovalRequestedItemsInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessRequestPreApprovalRequestedItemsInner) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *AccessRequestPreApprovalRequestedItemsInner) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessRequestPreApprovalRequestedItemsInner) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessRequestPreApprovalRequestedItemsInner) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessRequestPreApprovalRequestedItemsInner) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *AccessRequestPreApprovalRequestedItemsInner) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *AccessRequestPreApprovalRequestedItemsInner) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetType

`func (o *AccessRequestPreApprovalRequestedItemsInner) GetType() map[string]interface{}`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessRequestPreApprovalRequestedItemsInner) GetTypeOk() (*map[string]interface{}, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessRequestPreApprovalRequestedItemsInner) SetType(v map[string]interface{})`

SetType sets Type field to given value.


### GetOperation

`func (o *AccessRequestPreApprovalRequestedItemsInner) GetOperation() map[string]interface{}`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *AccessRequestPreApprovalRequestedItemsInner) GetOperationOk() (*map[string]interface{}, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *AccessRequestPreApprovalRequestedItemsInner) SetOperation(v map[string]interface{})`

SetOperation sets Operation field to given value.


### GetComment

`func (o *AccessRequestPreApprovalRequestedItemsInner) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *AccessRequestPreApprovalRequestedItemsInner) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *AccessRequestPreApprovalRequestedItemsInner) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *AccessRequestPreApprovalRequestedItemsInner) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *AccessRequestPreApprovalRequestedItemsInner) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *AccessRequestPreApprovalRequestedItemsInner) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil

[[Back to top]](#) 


