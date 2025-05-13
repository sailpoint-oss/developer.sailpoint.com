---
id: v2024-common-access-item-response
title: CommonAccessItemResponse
pagination_label: CommonAccessItemResponse
sidebar_label: CommonAccessItemResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CommonAccessItemResponse', 'V2024CommonAccessItemResponse'] 
slug: /tools/sdk/go/v2024/models/common-access-item-response
tags: ['SDK', 'Software Development Kit', 'CommonAccessItemResponse', 'V2024CommonAccessItemResponse']
---

# CommonAccessItemResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Common Access Item ID | [optional] 
**Access** | Pointer to [**CommonAccessItemAccess**](common-access-item-access) |  | [optional] 
**Status** | Pointer to [**CommonAccessItemState**](common-access-item-state) |  | [optional] 
**LastUpdated** | Pointer to **string** |  | [optional] 
**ReviewedByUser** | Pointer to **bool** |  | [optional] 
**LastReviewed** | Pointer to **string** |  | [optional] 
**CreatedByUser** | Pointer to **string** |  | [optional] 

## Methods

### NewCommonAccessItemResponse

`func NewCommonAccessItemResponse() *CommonAccessItemResponse`

NewCommonAccessItemResponse instantiates a new CommonAccessItemResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommonAccessItemResponseWithDefaults

`func NewCommonAccessItemResponseWithDefaults() *CommonAccessItemResponse`

NewCommonAccessItemResponseWithDefaults instantiates a new CommonAccessItemResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CommonAccessItemResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CommonAccessItemResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CommonAccessItemResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CommonAccessItemResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAccess

`func (o *CommonAccessItemResponse) GetAccess() CommonAccessItemAccess`

GetAccess returns the Access field if non-nil, zero value otherwise.

### GetAccessOk

`func (o *CommonAccessItemResponse) GetAccessOk() (*CommonAccessItemAccess, bool)`

GetAccessOk returns a tuple with the Access field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccess

`func (o *CommonAccessItemResponse) SetAccess(v CommonAccessItemAccess)`

SetAccess sets Access field to given value.

### HasAccess

`func (o *CommonAccessItemResponse) HasAccess() bool`

HasAccess returns a boolean if a field has been set.

### GetStatus

`func (o *CommonAccessItemResponse) GetStatus() CommonAccessItemState`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CommonAccessItemResponse) GetStatusOk() (*CommonAccessItemState, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CommonAccessItemResponse) SetStatus(v CommonAccessItemState)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CommonAccessItemResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetLastUpdated

`func (o *CommonAccessItemResponse) GetLastUpdated() string`

GetLastUpdated returns the LastUpdated field if non-nil, zero value otherwise.

### GetLastUpdatedOk

`func (o *CommonAccessItemResponse) GetLastUpdatedOk() (*string, bool)`

GetLastUpdatedOk returns a tuple with the LastUpdated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdated

`func (o *CommonAccessItemResponse) SetLastUpdated(v string)`

SetLastUpdated sets LastUpdated field to given value.

### HasLastUpdated

`func (o *CommonAccessItemResponse) HasLastUpdated() bool`

HasLastUpdated returns a boolean if a field has been set.

### GetReviewedByUser

`func (o *CommonAccessItemResponse) GetReviewedByUser() bool`

GetReviewedByUser returns the ReviewedByUser field if non-nil, zero value otherwise.

### GetReviewedByUserOk

`func (o *CommonAccessItemResponse) GetReviewedByUserOk() (*bool, bool)`

GetReviewedByUserOk returns a tuple with the ReviewedByUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewedByUser

`func (o *CommonAccessItemResponse) SetReviewedByUser(v bool)`

SetReviewedByUser sets ReviewedByUser field to given value.

### HasReviewedByUser

`func (o *CommonAccessItemResponse) HasReviewedByUser() bool`

HasReviewedByUser returns a boolean if a field has been set.

### GetLastReviewed

`func (o *CommonAccessItemResponse) GetLastReviewed() string`

GetLastReviewed returns the LastReviewed field if non-nil, zero value otherwise.

### GetLastReviewedOk

`func (o *CommonAccessItemResponse) GetLastReviewedOk() (*string, bool)`

GetLastReviewedOk returns a tuple with the LastReviewed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastReviewed

`func (o *CommonAccessItemResponse) SetLastReviewed(v string)`

SetLastReviewed sets LastReviewed field to given value.

### HasLastReviewed

`func (o *CommonAccessItemResponse) HasLastReviewed() bool`

HasLastReviewed returns a boolean if a field has been set.

### GetCreatedByUser

`func (o *CommonAccessItemResponse) GetCreatedByUser() string`

GetCreatedByUser returns the CreatedByUser field if non-nil, zero value otherwise.

### GetCreatedByUserOk

`func (o *CommonAccessItemResponse) GetCreatedByUserOk() (*string, bool)`

GetCreatedByUserOk returns a tuple with the CreatedByUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedByUser

`func (o *CommonAccessItemResponse) SetCreatedByUser(v string)`

SetCreatedByUser sets CreatedByUser field to given value.

### HasCreatedByUser

`func (o *CommonAccessItemResponse) HasCreatedByUser() bool`

HasCreatedByUser returns a boolean if a field has been set.


