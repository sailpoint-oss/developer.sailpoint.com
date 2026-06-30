---
id: v1-accessrequestpostapproval-requested-items-status-inner
title: AccessrequestpostapprovalRequestedItemsStatusInner
pagination_label: AccessrequestpostapprovalRequestedItemsStatusInner
sidebar_label: AccessrequestpostapprovalRequestedItemsStatusInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessrequestpostapprovalRequestedItemsStatusInner', 'V1AccessrequestpostapprovalRequestedItemsStatusInner'] 
slug: /tools/sdk/go/triggers/models/accessrequestpostapproval-requested-items-status-inner
tags: ['SDK', 'Software Development Kit', 'AccessrequestpostapprovalRequestedItemsStatusInner', 'V1AccessrequestpostapprovalRequestedItemsStatusInner']
---

# AccessrequestpostapprovalRequestedItemsStatusInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the access item being requested. | 
**Name** | **string** | The human friendly name of the access item. | 
**Description** | Pointer to **NullableString** | Detailed description of the access item. | [optional] 
**Type** | **string** | The type of access item. | 
**Operation** | **string** | The action to perform on the access item. | 
**Comment** | Pointer to **NullableString** | A comment from the identity requesting the access. | [optional] 
**ClientMetadata** | Pointer to **map[string]interface{}** | Additional customer defined metadata about the access item. | [optional] 
**ApprovalInfo** | [**[]AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner**](accessrequestpostapproval-requested-items-status-inner-approval-info-inner) | A list of one or more approvers for the access request. | 

## Methods

### NewAccessrequestpostapprovalRequestedItemsStatusInner

`func NewAccessrequestpostapprovalRequestedItemsStatusInner(id string, name string, type_ string, operation string, approvalInfo []AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner, ) *AccessrequestpostapprovalRequestedItemsStatusInner`

NewAccessrequestpostapprovalRequestedItemsStatusInner instantiates a new AccessrequestpostapprovalRequestedItemsStatusInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestpostapprovalRequestedItemsStatusInnerWithDefaults

`func NewAccessrequestpostapprovalRequestedItemsStatusInnerWithDefaults() *AccessrequestpostapprovalRequestedItemsStatusInner`

NewAccessrequestpostapprovalRequestedItemsStatusInnerWithDefaults instantiates a new AccessrequestpostapprovalRequestedItemsStatusInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetType

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) SetType(v string)`

SetType sets Type field to given value.


### GetOperation

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) SetOperation(v string)`

SetOperation sets Operation field to given value.


### GetComment

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil
### GetClientMetadata

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) GetClientMetadata() map[string]interface{}`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) GetClientMetadataOk() (*map[string]interface{}, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) SetClientMetadata(v map[string]interface{})`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### SetClientMetadataNil

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) SetClientMetadataNil(b bool)`

 SetClientMetadataNil sets the value for ClientMetadata to be an explicit nil

### UnsetClientMetadata
`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) UnsetClientMetadata()`

UnsetClientMetadata ensures that no value is present for ClientMetadata, not even an explicit nil
### GetApprovalInfo

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) GetApprovalInfo() []AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner`

GetApprovalInfo returns the ApprovalInfo field if non-nil, zero value otherwise.

### GetApprovalInfoOk

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) GetApprovalInfoOk() (*[]AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner, bool)`

GetApprovalInfoOk returns a tuple with the ApprovalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalInfo

`func (o *AccessrequestpostapprovalRequestedItemsStatusInner) SetApprovalInfo(v []AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner)`

SetApprovalInfo sets ApprovalInfo field to given value.



