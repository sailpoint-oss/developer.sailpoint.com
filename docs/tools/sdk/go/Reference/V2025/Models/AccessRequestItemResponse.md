---
id: access-request-item-response
title: AccessRequestItemResponse
pagination_label: AccessRequestItemResponse
sidebar_label: AccessRequestItemResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestItemResponse', 'AccessRequestItemResponse'] 
slug: /tools/sdk/go//models/access-request-item-response
tags: ['SDK', 'Software Development Kit', 'AccessRequestItemResponse', 'AccessRequestItemResponse']
---

# AccessRequestItemResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | Pointer to **string** | the access request item operation | [optional] 
**AccessItemType** | Pointer to **string** | the access item type | [optional] 
**Name** | Pointer to **string** | the name of access request item | [optional] 
**Decision** | Pointer to **string** | the final decision for the access request | [optional] 
**Description** | Pointer to **string** | the description of access request item | [optional] 
**SourceId** | Pointer to **string** | the source id | [optional] 
**SourceName** | Pointer to **string** | the source Name | [optional] 
**ApprovalInfos** | Pointer to [**[]ApprovalInfoResponse**](approval-info-response) |  | [optional] 

## Methods

### NewAccessRequestItemResponse

`func NewAccessRequestItemResponse() *AccessRequestItemResponse`

NewAccessRequestItemResponse instantiates a new AccessRequestItemResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestItemResponseWithDefaults

`func NewAccessRequestItemResponseWithDefaults() *AccessRequestItemResponse`

NewAccessRequestItemResponseWithDefaults instantiates a new AccessRequestItemResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperation

`func (o *AccessRequestItemResponse) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *AccessRequestItemResponse) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *AccessRequestItemResponse) SetOperation(v string)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *AccessRequestItemResponse) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetAccessItemType

`func (o *AccessRequestItemResponse) GetAccessItemType() string`

GetAccessItemType returns the AccessItemType field if non-nil, zero value otherwise.

### GetAccessItemTypeOk

`func (o *AccessRequestItemResponse) GetAccessItemTypeOk() (*string, bool)`

GetAccessItemTypeOk returns a tuple with the AccessItemType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessItemType

`func (o *AccessRequestItemResponse) SetAccessItemType(v string)`

SetAccessItemType sets AccessItemType field to given value.

### HasAccessItemType

`func (o *AccessRequestItemResponse) HasAccessItemType() bool`

HasAccessItemType returns a boolean if a field has been set.

### GetName

`func (o *AccessRequestItemResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessRequestItemResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessRequestItemResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessRequestItemResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDecision

`func (o *AccessRequestItemResponse) GetDecision() string`

GetDecision returns the Decision field if non-nil, zero value otherwise.

### GetDecisionOk

`func (o *AccessRequestItemResponse) GetDecisionOk() (*string, bool)`

GetDecisionOk returns a tuple with the Decision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecision

`func (o *AccessRequestItemResponse) SetDecision(v string)`

SetDecision sets Decision field to given value.

### HasDecision

`func (o *AccessRequestItemResponse) HasDecision() bool`

HasDecision returns a boolean if a field has been set.

### GetDescription

`func (o *AccessRequestItemResponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessRequestItemResponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessRequestItemResponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessRequestItemResponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSourceId

`func (o *AccessRequestItemResponse) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *AccessRequestItemResponse) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *AccessRequestItemResponse) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *AccessRequestItemResponse) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSourceName

`func (o *AccessRequestItemResponse) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *AccessRequestItemResponse) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *AccessRequestItemResponse) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *AccessRequestItemResponse) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetApprovalInfos

`func (o *AccessRequestItemResponse) GetApprovalInfos() []ApprovalInfoResponse`

GetApprovalInfos returns the ApprovalInfos field if non-nil, zero value otherwise.

### GetApprovalInfosOk

`func (o *AccessRequestItemResponse) GetApprovalInfosOk() (*[]ApprovalInfoResponse, bool)`

GetApprovalInfosOk returns a tuple with the ApprovalInfos field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalInfos

`func (o *AccessRequestItemResponse) SetApprovalInfos(v []ApprovalInfoResponse)`

SetApprovalInfos sets ApprovalInfos field to given value.

### HasApprovalInfos

`func (o *AccessRequestItemResponse) HasApprovalInfos() bool`

HasApprovalInfos returns a boolean if a field has been set.


