---
id: v1-accessrequestdynamicapprover-requested-items-inner
title: AccessrequestdynamicapproverRequestedItemsInner
pagination_label: AccessrequestdynamicapproverRequestedItemsInner
sidebar_label: AccessrequestdynamicapproverRequestedItemsInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessrequestdynamicapproverRequestedItemsInner', 'V1AccessrequestdynamicapproverRequestedItemsInner'] 
slug: /tools/sdk/go/triggers/models/accessrequestdynamicapprover-requested-items-inner
tags: ['SDK', 'Software Development Kit', 'AccessrequestdynamicapproverRequestedItemsInner', 'V1AccessrequestdynamicapproverRequestedItemsInner']
---

# AccessrequestdynamicapproverRequestedItemsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the access item. | 
**Name** | **string** | Human friendly name of the access item. | 
**Description** | Pointer to **NullableString** | Extended description of the access item. | [optional] 
**Type** | **string** | The type of access item being requested. | 
**Operation** | **string** | Grant or revoke the access item | 
**Comment** | Pointer to **NullableString** | A comment from the requestor on why the access is needed. | [optional] 

## Methods

### NewAccessrequestdynamicapproverRequestedItemsInner

`func NewAccessrequestdynamicapproverRequestedItemsInner(id string, name string, type_ string, operation string, ) *AccessrequestdynamicapproverRequestedItemsInner`

NewAccessrequestdynamicapproverRequestedItemsInner instantiates a new AccessrequestdynamicapproverRequestedItemsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestdynamicapproverRequestedItemsInnerWithDefaults

`func NewAccessrequestdynamicapproverRequestedItemsInnerWithDefaults() *AccessrequestdynamicapproverRequestedItemsInner`

NewAccessrequestdynamicapproverRequestedItemsInnerWithDefaults instantiates a new AccessrequestdynamicapproverRequestedItemsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessrequestdynamicapproverRequestedItemsInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessrequestdynamicapproverRequestedItemsInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessrequestdynamicapproverRequestedItemsInner) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccessrequestdynamicapproverRequestedItemsInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessrequestdynamicapproverRequestedItemsInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessrequestdynamicapproverRequestedItemsInner) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *AccessrequestdynamicapproverRequestedItemsInner) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessrequestdynamicapproverRequestedItemsInner) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessrequestdynamicapproverRequestedItemsInner) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessrequestdynamicapproverRequestedItemsInner) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *AccessrequestdynamicapproverRequestedItemsInner) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *AccessrequestdynamicapproverRequestedItemsInner) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetType

`func (o *AccessrequestdynamicapproverRequestedItemsInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessrequestdynamicapproverRequestedItemsInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessrequestdynamicapproverRequestedItemsInner) SetType(v string)`

SetType sets Type field to given value.


### GetOperation

`func (o *AccessrequestdynamicapproverRequestedItemsInner) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *AccessrequestdynamicapproverRequestedItemsInner) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *AccessrequestdynamicapproverRequestedItemsInner) SetOperation(v string)`

SetOperation sets Operation field to given value.


### GetComment

`func (o *AccessrequestdynamicapproverRequestedItemsInner) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *AccessrequestdynamicapproverRequestedItemsInner) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *AccessrequestdynamicapproverRequestedItemsInner) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *AccessrequestdynamicapproverRequestedItemsInner) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *AccessrequestdynamicapproverRequestedItemsInner) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *AccessrequestdynamicapproverRequestedItemsInner) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil

