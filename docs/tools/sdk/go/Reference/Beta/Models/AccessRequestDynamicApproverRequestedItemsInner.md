---
id: beta-access-request-dynamic-approver-requested-items-inner
title: AccessRequestDynamicApproverRequestedItemsInner
pagination_label: AccessRequestDynamicApproverRequestedItemsInner
sidebar_label: AccessRequestDynamicApproverRequestedItemsInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestDynamicApproverRequestedItemsInner', 'BetaAccessRequestDynamicApproverRequestedItemsInner'] 
slug: /tools/sdk/go/beta/models/access-request-dynamic-approver-requested-items-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestDynamicApproverRequestedItemsInner', 'BetaAccessRequestDynamicApproverRequestedItemsInner']
---

# AccessRequestDynamicApproverRequestedItemsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Access item&#39;s unique identifier. | 
**Name** | **string** | Access item&#39;s name. | 
**Description** | Pointer to **NullableString** | Access item&#39;s extended description. | [optional] 
**Type** | **map[string]interface{}** | Type of access item being requested. | 
**Operation** | **map[string]interface{}** | Action to perform on the requested access item. | 
**Comment** | Pointer to **NullableString** | Comment from the requester about why the access is necessary. | [optional] 

## Methods

### NewAccessRequestDynamicApproverRequestedItemsInner

`func NewAccessRequestDynamicApproverRequestedItemsInner(id string, name string, type_ map[string]interface{}, operation map[string]interface{}, ) *AccessRequestDynamicApproverRequestedItemsInner`

NewAccessRequestDynamicApproverRequestedItemsInner instantiates a new AccessRequestDynamicApproverRequestedItemsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestDynamicApproverRequestedItemsInnerWithDefaults

`func NewAccessRequestDynamicApproverRequestedItemsInnerWithDefaults() *AccessRequestDynamicApproverRequestedItemsInner`

NewAccessRequestDynamicApproverRequestedItemsInnerWithDefaults instantiates a new AccessRequestDynamicApproverRequestedItemsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessRequestDynamicApproverRequestedItemsInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessRequestDynamicApproverRequestedItemsInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessRequestDynamicApproverRequestedItemsInner) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccessRequestDynamicApproverRequestedItemsInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessRequestDynamicApproverRequestedItemsInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessRequestDynamicApproverRequestedItemsInner) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *AccessRequestDynamicApproverRequestedItemsInner) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessRequestDynamicApproverRequestedItemsInner) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessRequestDynamicApproverRequestedItemsInner) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessRequestDynamicApproverRequestedItemsInner) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *AccessRequestDynamicApproverRequestedItemsInner) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *AccessRequestDynamicApproverRequestedItemsInner) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetType

`func (o *AccessRequestDynamicApproverRequestedItemsInner) GetType() map[string]interface{}`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessRequestDynamicApproverRequestedItemsInner) GetTypeOk() (*map[string]interface{}, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessRequestDynamicApproverRequestedItemsInner) SetType(v map[string]interface{})`

SetType sets Type field to given value.


### GetOperation

`func (o *AccessRequestDynamicApproverRequestedItemsInner) GetOperation() map[string]interface{}`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *AccessRequestDynamicApproverRequestedItemsInner) GetOperationOk() (*map[string]interface{}, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *AccessRequestDynamicApproverRequestedItemsInner) SetOperation(v map[string]interface{})`

SetOperation sets Operation field to given value.


### GetComment

`func (o *AccessRequestDynamicApproverRequestedItemsInner) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *AccessRequestDynamicApproverRequestedItemsInner) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *AccessRequestDynamicApproverRequestedItemsInner) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *AccessRequestDynamicApproverRequestedItemsInner) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *AccessRequestDynamicApproverRequestedItemsInner) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *AccessRequestDynamicApproverRequestedItemsInner) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil

