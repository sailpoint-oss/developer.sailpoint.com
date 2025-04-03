---
id: v2024-access-request-post-approval-requested-items-status-inner
title: AccessRequestPostApprovalRequestedItemsStatusInner
pagination_label: AccessRequestPostApprovalRequestedItemsStatusInner
sidebar_label: AccessRequestPostApprovalRequestedItemsStatusInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestPostApprovalRequestedItemsStatusInner', 'V2024AccessRequestPostApprovalRequestedItemsStatusInner'] 
slug: /tools/sdk/go/v2024/models/access-request-post-approval-requested-items-status-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestPostApprovalRequestedItemsStatusInner', 'V2024AccessRequestPostApprovalRequestedItemsStatusInner']
---

# AccessRequestPostApprovalRequestedItemsStatusInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the access item being requested. | 
**Name** | **string** | The human friendly name of the access item. | 
**Description** | Pointer to **NullableString** | Detailed description of the access item. | [optional] 
**Type** | **map[string]interface{}** | The type of access item. | 
**Operation** | **map[string]interface{}** | The action to perform on the access item. | 
**Comment** | Pointer to **NullableString** | A comment from the identity requesting the access. | [optional] 
**ClientMetadata** | Pointer to **map[string]interface{}** | Additional customer defined metadata about the access item. | [optional] 
**ApprovalInfo** | [**[]AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner**](access-request-post-approval-requested-items-status-inner-approval-info-inner) | A list of one or more approvers for the access request. | 

## Methods

### NewAccessRequestPostApprovalRequestedItemsStatusInner

`func NewAccessRequestPostApprovalRequestedItemsStatusInner(id string, name string, type_ map[string]interface{}, operation map[string]interface{}, approvalInfo []AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner, ) *AccessRequestPostApprovalRequestedItemsStatusInner`

NewAccessRequestPostApprovalRequestedItemsStatusInner instantiates a new AccessRequestPostApprovalRequestedItemsStatusInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestPostApprovalRequestedItemsStatusInnerWithDefaults

`func NewAccessRequestPostApprovalRequestedItemsStatusInnerWithDefaults() *AccessRequestPostApprovalRequestedItemsStatusInner`

NewAccessRequestPostApprovalRequestedItemsStatusInnerWithDefaults instantiates a new AccessRequestPostApprovalRequestedItemsStatusInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetType

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) GetType() map[string]interface{}`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) GetTypeOk() (*map[string]interface{}, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) SetType(v map[string]interface{})`

SetType sets Type field to given value.


### GetOperation

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) GetOperation() map[string]interface{}`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) GetOperationOk() (*map[string]interface{}, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) SetOperation(v map[string]interface{})`

SetOperation sets Operation field to given value.


### GetComment

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil
### GetClientMetadata

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) GetClientMetadata() map[string]interface{}`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) GetClientMetadataOk() (*map[string]interface{}, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) SetClientMetadata(v map[string]interface{})`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### SetClientMetadataNil

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) SetClientMetadataNil(b bool)`

 SetClientMetadataNil sets the value for ClientMetadata to be an explicit nil

### UnsetClientMetadata
`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) UnsetClientMetadata()`

UnsetClientMetadata ensures that no value is present for ClientMetadata, not even an explicit nil
### GetApprovalInfo

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) GetApprovalInfo() []AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner`

GetApprovalInfo returns the ApprovalInfo field if non-nil, zero value otherwise.

### GetApprovalInfoOk

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) GetApprovalInfoOk() (*[]AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner, bool)`

GetApprovalInfoOk returns a tuple with the ApprovalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalInfo

`func (o *AccessRequestPostApprovalRequestedItemsStatusInner) SetApprovalInfo(v []AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner)`

SetApprovalInfo sets ApprovalInfo field to given value.



