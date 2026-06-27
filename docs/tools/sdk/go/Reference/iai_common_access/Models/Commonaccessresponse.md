---
id: v1-commonaccessresponse
title: Commonaccessresponse
pagination_label: Commonaccessresponse
sidebar_label: Commonaccessresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Commonaccessresponse', 'V1Commonaccessresponse'] 
slug: /tools/sdk/go/iaicommonaccess/models/commonaccessresponse
tags: ['SDK', 'Software Development Kit', 'Commonaccessresponse', 'V1Commonaccessresponse']
---

# Commonaccessresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique ID of the common access item | [optional] 
**Access** | Pointer to [**Commonaccessitemaccess**](commonaccessitemaccess) |  | [optional] 
**Status** | Pointer to **string** | CONFIRMED or DENIED | [optional] 
**CommonAccessType** | Pointer to **string** |  | [optional] 
**LastUpdated** | Pointer to **SailPointTime** |  | [optional] [readonly] 
**ReviewedByUser** | Pointer to **bool** | true if user has confirmed or denied status | [optional] 
**LastReviewed** | Pointer to **NullableTime** |  | [optional] [readonly] 
**CreatedByUser** | Pointer to **bool** |  | [optional] [default to false]

## Methods

### NewCommonaccessresponse

`func NewCommonaccessresponse() *Commonaccessresponse`

NewCommonaccessresponse instantiates a new Commonaccessresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommonaccessresponseWithDefaults

`func NewCommonaccessresponseWithDefaults() *Commonaccessresponse`

NewCommonaccessresponseWithDefaults instantiates a new Commonaccessresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Commonaccessresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Commonaccessresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Commonaccessresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Commonaccessresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAccess

`func (o *Commonaccessresponse) GetAccess() Commonaccessitemaccess`

GetAccess returns the Access field if non-nil, zero value otherwise.

### GetAccessOk

`func (o *Commonaccessresponse) GetAccessOk() (*Commonaccessitemaccess, bool)`

GetAccessOk returns a tuple with the Access field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccess

`func (o *Commonaccessresponse) SetAccess(v Commonaccessitemaccess)`

SetAccess sets Access field to given value.

### HasAccess

`func (o *Commonaccessresponse) HasAccess() bool`

HasAccess returns a boolean if a field has been set.

### GetStatus

`func (o *Commonaccessresponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Commonaccessresponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Commonaccessresponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Commonaccessresponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCommonAccessType

`func (o *Commonaccessresponse) GetCommonAccessType() string`

GetCommonAccessType returns the CommonAccessType field if non-nil, zero value otherwise.

### GetCommonAccessTypeOk

`func (o *Commonaccessresponse) GetCommonAccessTypeOk() (*string, bool)`

GetCommonAccessTypeOk returns a tuple with the CommonAccessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommonAccessType

`func (o *Commonaccessresponse) SetCommonAccessType(v string)`

SetCommonAccessType sets CommonAccessType field to given value.

### HasCommonAccessType

`func (o *Commonaccessresponse) HasCommonAccessType() bool`

HasCommonAccessType returns a boolean if a field has been set.

### GetLastUpdated

`func (o *Commonaccessresponse) GetLastUpdated() SailPointTime`

GetLastUpdated returns the LastUpdated field if non-nil, zero value otherwise.

### GetLastUpdatedOk

`func (o *Commonaccessresponse) GetLastUpdatedOk() (*SailPointTime, bool)`

GetLastUpdatedOk returns a tuple with the LastUpdated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdated

`func (o *Commonaccessresponse) SetLastUpdated(v SailPointTime)`

SetLastUpdated sets LastUpdated field to given value.

### HasLastUpdated

`func (o *Commonaccessresponse) HasLastUpdated() bool`

HasLastUpdated returns a boolean if a field has been set.

### GetReviewedByUser

`func (o *Commonaccessresponse) GetReviewedByUser() bool`

GetReviewedByUser returns the ReviewedByUser field if non-nil, zero value otherwise.

### GetReviewedByUserOk

`func (o *Commonaccessresponse) GetReviewedByUserOk() (*bool, bool)`

GetReviewedByUserOk returns a tuple with the ReviewedByUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewedByUser

`func (o *Commonaccessresponse) SetReviewedByUser(v bool)`

SetReviewedByUser sets ReviewedByUser field to given value.

### HasReviewedByUser

`func (o *Commonaccessresponse) HasReviewedByUser() bool`

HasReviewedByUser returns a boolean if a field has been set.

### GetLastReviewed

`func (o *Commonaccessresponse) GetLastReviewed() SailPointTime`

GetLastReviewed returns the LastReviewed field if non-nil, zero value otherwise.

### GetLastReviewedOk

`func (o *Commonaccessresponse) GetLastReviewedOk() (*SailPointTime, bool)`

GetLastReviewedOk returns a tuple with the LastReviewed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastReviewed

`func (o *Commonaccessresponse) SetLastReviewed(v SailPointTime)`

SetLastReviewed sets LastReviewed field to given value.

### HasLastReviewed

`func (o *Commonaccessresponse) HasLastReviewed() bool`

HasLastReviewed returns a boolean if a field has been set.

### SetLastReviewedNil

`func (o *Commonaccessresponse) SetLastReviewedNil(b bool)`

 SetLastReviewedNil sets the value for LastReviewed to be an explicit nil

### UnsetLastReviewed
`func (o *Commonaccessresponse) UnsetLastReviewed()`

UnsetLastReviewed ensures that no value is present for LastReviewed, not even an explicit nil
### GetCreatedByUser

`func (o *Commonaccessresponse) GetCreatedByUser() bool`

GetCreatedByUser returns the CreatedByUser field if non-nil, zero value otherwise.

### GetCreatedByUserOk

`func (o *Commonaccessresponse) GetCreatedByUserOk() (*bool, bool)`

GetCreatedByUserOk returns a tuple with the CreatedByUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedByUser

`func (o *Commonaccessresponse) SetCreatedByUser(v bool)`

SetCreatedByUser sets CreatedByUser field to given value.

### HasCreatedByUser

`func (o *Commonaccessresponse) HasCreatedByUser() bool`

HasCreatedByUser returns a boolean if a field has been set.


