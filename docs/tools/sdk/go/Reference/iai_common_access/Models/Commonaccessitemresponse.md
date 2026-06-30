---
id: v1-commonaccessitemresponse
title: Commonaccessitemresponse
pagination_label: Commonaccessitemresponse
sidebar_label: Commonaccessitemresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Commonaccessitemresponse', 'V1Commonaccessitemresponse'] 
slug: /tools/sdk/go/iaicommonaccess/models/commonaccessitemresponse
tags: ['SDK', 'Software Development Kit', 'Commonaccessitemresponse', 'V1Commonaccessitemresponse']
---

# Commonaccessitemresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Common Access Item ID | [optional] 
**Access** | Pointer to [**Commonaccessitemaccess**](commonaccessitemaccess) |  | [optional] 
**Status** | Pointer to [**Commonaccessitemstate**](commonaccessitemstate) |  | [optional] 
**LastUpdated** | Pointer to **string** |  | [optional] 
**ReviewedByUser** | Pointer to **bool** |  | [optional] 
**LastReviewed** | Pointer to **string** |  | [optional] 
**CreatedByUser** | Pointer to **string** |  | [optional] 

## Methods

### NewCommonaccessitemresponse

`func NewCommonaccessitemresponse() *Commonaccessitemresponse`

NewCommonaccessitemresponse instantiates a new Commonaccessitemresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommonaccessitemresponseWithDefaults

`func NewCommonaccessitemresponseWithDefaults() *Commonaccessitemresponse`

NewCommonaccessitemresponseWithDefaults instantiates a new Commonaccessitemresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Commonaccessitemresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Commonaccessitemresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Commonaccessitemresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Commonaccessitemresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAccess

`func (o *Commonaccessitemresponse) GetAccess() Commonaccessitemaccess`

GetAccess returns the Access field if non-nil, zero value otherwise.

### GetAccessOk

`func (o *Commonaccessitemresponse) GetAccessOk() (*Commonaccessitemaccess, bool)`

GetAccessOk returns a tuple with the Access field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccess

`func (o *Commonaccessitemresponse) SetAccess(v Commonaccessitemaccess)`

SetAccess sets Access field to given value.

### HasAccess

`func (o *Commonaccessitemresponse) HasAccess() bool`

HasAccess returns a boolean if a field has been set.

### GetStatus

`func (o *Commonaccessitemresponse) GetStatus() Commonaccessitemstate`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Commonaccessitemresponse) GetStatusOk() (*Commonaccessitemstate, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Commonaccessitemresponse) SetStatus(v Commonaccessitemstate)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Commonaccessitemresponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetLastUpdated

`func (o *Commonaccessitemresponse) GetLastUpdated() string`

GetLastUpdated returns the LastUpdated field if non-nil, zero value otherwise.

### GetLastUpdatedOk

`func (o *Commonaccessitemresponse) GetLastUpdatedOk() (*string, bool)`

GetLastUpdatedOk returns a tuple with the LastUpdated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdated

`func (o *Commonaccessitemresponse) SetLastUpdated(v string)`

SetLastUpdated sets LastUpdated field to given value.

### HasLastUpdated

`func (o *Commonaccessitemresponse) HasLastUpdated() bool`

HasLastUpdated returns a boolean if a field has been set.

### GetReviewedByUser

`func (o *Commonaccessitemresponse) GetReviewedByUser() bool`

GetReviewedByUser returns the ReviewedByUser field if non-nil, zero value otherwise.

### GetReviewedByUserOk

`func (o *Commonaccessitemresponse) GetReviewedByUserOk() (*bool, bool)`

GetReviewedByUserOk returns a tuple with the ReviewedByUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewedByUser

`func (o *Commonaccessitemresponse) SetReviewedByUser(v bool)`

SetReviewedByUser sets ReviewedByUser field to given value.

### HasReviewedByUser

`func (o *Commonaccessitemresponse) HasReviewedByUser() bool`

HasReviewedByUser returns a boolean if a field has been set.

### GetLastReviewed

`func (o *Commonaccessitemresponse) GetLastReviewed() string`

GetLastReviewed returns the LastReviewed field if non-nil, zero value otherwise.

### GetLastReviewedOk

`func (o *Commonaccessitemresponse) GetLastReviewedOk() (*string, bool)`

GetLastReviewedOk returns a tuple with the LastReviewed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastReviewed

`func (o *Commonaccessitemresponse) SetLastReviewed(v string)`

SetLastReviewed sets LastReviewed field to given value.

### HasLastReviewed

`func (o *Commonaccessitemresponse) HasLastReviewed() bool`

HasLastReviewed returns a boolean if a field has been set.

### GetCreatedByUser

`func (o *Commonaccessitemresponse) GetCreatedByUser() string`

GetCreatedByUser returns the CreatedByUser field if non-nil, zero value otherwise.

### GetCreatedByUserOk

`func (o *Commonaccessitemresponse) GetCreatedByUserOk() (*string, bool)`

GetCreatedByUserOk returns a tuple with the CreatedByUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedByUser

`func (o *Commonaccessitemresponse) SetCreatedByUser(v string)`

SetCreatedByUser sets CreatedByUser field to given value.

### HasCreatedByUser

`func (o *Commonaccessitemresponse) HasCreatedByUser() bool`

HasCreatedByUser returns a boolean if a field has been set.


