---
id: v1-accessrequestpreapproval-requested-items-inner
title: AccessrequestpreapprovalRequestedItemsInner
pagination_label: AccessrequestpreapprovalRequestedItemsInner
sidebar_label: AccessrequestpreapprovalRequestedItemsInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessrequestpreapprovalRequestedItemsInner', 'V1AccessrequestpreapprovalRequestedItemsInner'] 
slug: /tools/sdk/go/triggers/models/accessrequestpreapproval-requested-items-inner
tags: ['SDK', 'Software Development Kit', 'AccessrequestpreapprovalRequestedItemsInner', 'V1AccessrequestpreapprovalRequestedItemsInner']
---

# AccessrequestpreapprovalRequestedItemsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the access item being requested. | 
**Name** | **string** | The human friendly name of the access item. | 
**Description** | Pointer to **NullableString** | Detailed description of the access item. | [optional] 
**Type** | **string** | The type of access item. | 
**Operation** | **string** | The action to perform on the access item. | 
**Comment** | Pointer to **NullableString** | A comment from the identity requesting the access. | [optional] 

## Methods

### NewAccessrequestpreapprovalRequestedItemsInner

`func NewAccessrequestpreapprovalRequestedItemsInner(id string, name string, type_ string, operation string, ) *AccessrequestpreapprovalRequestedItemsInner`

NewAccessrequestpreapprovalRequestedItemsInner instantiates a new AccessrequestpreapprovalRequestedItemsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestpreapprovalRequestedItemsInnerWithDefaults

`func NewAccessrequestpreapprovalRequestedItemsInnerWithDefaults() *AccessrequestpreapprovalRequestedItemsInner`

NewAccessrequestpreapprovalRequestedItemsInnerWithDefaults instantiates a new AccessrequestpreapprovalRequestedItemsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessrequestpreapprovalRequestedItemsInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessrequestpreapprovalRequestedItemsInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessrequestpreapprovalRequestedItemsInner) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccessrequestpreapprovalRequestedItemsInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessrequestpreapprovalRequestedItemsInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessrequestpreapprovalRequestedItemsInner) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *AccessrequestpreapprovalRequestedItemsInner) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessrequestpreapprovalRequestedItemsInner) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessrequestpreapprovalRequestedItemsInner) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessrequestpreapprovalRequestedItemsInner) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *AccessrequestpreapprovalRequestedItemsInner) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *AccessrequestpreapprovalRequestedItemsInner) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetType

`func (o *AccessrequestpreapprovalRequestedItemsInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessrequestpreapprovalRequestedItemsInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessrequestpreapprovalRequestedItemsInner) SetType(v string)`

SetType sets Type field to given value.


### GetOperation

`func (o *AccessrequestpreapprovalRequestedItemsInner) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *AccessrequestpreapprovalRequestedItemsInner) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *AccessrequestpreapprovalRequestedItemsInner) SetOperation(v string)`

SetOperation sets Operation field to given value.


### GetComment

`func (o *AccessrequestpreapprovalRequestedItemsInner) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *AccessrequestpreapprovalRequestedItemsInner) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *AccessrequestpreapprovalRequestedItemsInner) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *AccessrequestpreapprovalRequestedItemsInner) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *AccessrequestpreapprovalRequestedItemsInner) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *AccessrequestpreapprovalRequestedItemsInner) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil

