---
id: common-access-response
title: CommonAccessResponse
pagination_label: CommonAccessResponse
sidebar_label: CommonAccessResponse
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'CommonAccessResponse'] 
slug: /tools/sdk/go/beta/models/common-access-response
tags: ['SDK', 'Software Development Kit', 'CommonAccessResponse']
---

# CommonAccessResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | Unique ID of the common access item | [optional] 
**Access** |  Pointer to [**CommonAccessItemAccess**](common-access-item-access) |  | [optional] 
**Status** |  Pointer to **string** | CONFIRMED or DENIED | [optional] 
**LastUpdated** |  Pointer to **time.Time** |  | [optional] [readonly] 
**ReviewedByUser** |  Pointer to **bool** | true if user has confirmed or denied status | [optional] 
**LastReviewed** |  Pointer to **NullableTime** |  | [optional] [readonly] 
**CreatedByUser** |  Pointer to **bool** |  | [optional] [default to false]

## Methods

### NewCommonAccessResponse

`func NewCommonAccessResponse() *CommonAccessResponse`

NewCommonAccessResponse instantiates a new CommonAccessResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommonAccessResponseWithDefaults

`func NewCommonAccessResponseWithDefaults() *CommonAccessResponse`

NewCommonAccessResponseWithDefaults instantiates a new CommonAccessResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CommonAccessResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CommonAccessResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CommonAccessResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CommonAccessResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAccess

`func (o *CommonAccessResponse) GetAccess() CommonAccessItemAccess`

GetAccess returns the Access field if non-nil, zero value otherwise.

### GetAccessOk

`func (o *CommonAccessResponse) GetAccessOk() (*CommonAccessItemAccess, bool)`

GetAccessOk returns a tuple with the Access field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccess

`func (o *CommonAccessResponse) SetAccess(v CommonAccessItemAccess)`

SetAccess sets Access field to given value.

### HasAccess

`func (o *CommonAccessResponse) HasAccess() bool`

HasAccess returns a boolean if a field has been set.

### GetStatus

`func (o *CommonAccessResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CommonAccessResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CommonAccessResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CommonAccessResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetLastUpdated

`func (o *CommonAccessResponse) GetLastUpdated() time.Time`

GetLastUpdated returns the LastUpdated field if non-nil, zero value otherwise.

### GetLastUpdatedOk

`func (o *CommonAccessResponse) GetLastUpdatedOk() (*time.Time, bool)`

GetLastUpdatedOk returns a tuple with the LastUpdated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdated

`func (o *CommonAccessResponse) SetLastUpdated(v time.Time)`

SetLastUpdated sets LastUpdated field to given value.

### HasLastUpdated

`func (o *CommonAccessResponse) HasLastUpdated() bool`

HasLastUpdated returns a boolean if a field has been set.

### GetReviewedByUser

`func (o *CommonAccessResponse) GetReviewedByUser() bool`

GetReviewedByUser returns the ReviewedByUser field if non-nil, zero value otherwise.

### GetReviewedByUserOk

`func (o *CommonAccessResponse) GetReviewedByUserOk() (*bool, bool)`

GetReviewedByUserOk returns a tuple with the ReviewedByUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewedByUser

`func (o *CommonAccessResponse) SetReviewedByUser(v bool)`

SetReviewedByUser sets ReviewedByUser field to given value.

### HasReviewedByUser

`func (o *CommonAccessResponse) HasReviewedByUser() bool`

HasReviewedByUser returns a boolean if a field has been set.

### GetLastReviewed

`func (o *CommonAccessResponse) GetLastReviewed() time.Time`

GetLastReviewed returns the LastReviewed field if non-nil, zero value otherwise.

### GetLastReviewedOk

`func (o *CommonAccessResponse) GetLastReviewedOk() (*time.Time, bool)`

GetLastReviewedOk returns a tuple with the LastReviewed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastReviewed

`func (o *CommonAccessResponse) SetLastReviewed(v time.Time)`

SetLastReviewed sets LastReviewed field to given value.

### HasLastReviewed

`func (o *CommonAccessResponse) HasLastReviewed() bool`

HasLastReviewed returns a boolean if a field has been set.

### SetLastReviewedNil

`func (o *CommonAccessResponse) SetLastReviewedNil(b bool)`

 SetLastReviewedNil sets the value for LastReviewed to be an explicit nil

### UnsetLastReviewed
`func (o *CommonAccessResponse) UnsetLastReviewed()`

UnsetLastReviewed ensures that no value is present for LastReviewed, not even an explicit nil
### GetCreatedByUser

`func (o *CommonAccessResponse) GetCreatedByUser() bool`

GetCreatedByUser returns the CreatedByUser field if non-nil, zero value otherwise.

### GetCreatedByUserOk

`func (o *CommonAccessResponse) GetCreatedByUserOk() (*bool, bool)`

GetCreatedByUserOk returns a tuple with the CreatedByUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedByUser

`func (o *CommonAccessResponse) SetCreatedByUser(v bool)`

SetCreatedByUser sets CreatedByUser field to given value.

### HasCreatedByUser

`func (o *CommonAccessResponse) HasCreatedByUser() bool`

HasCreatedByUser returns a boolean if a field has been set.


[[Back to top]](#) 


