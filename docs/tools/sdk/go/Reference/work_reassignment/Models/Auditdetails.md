---
id: v1-auditdetails
title: Auditdetails
pagination_label: Auditdetails
sidebar_label: Auditdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Auditdetails', 'V1Auditdetails'] 
slug: /tools/sdk/go/workreassignment/models/auditdetails
tags: ['SDK', 'Software Development Kit', 'Auditdetails', 'V1Auditdetails']
---

# Auditdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | Pointer to **SailPointTime** | Initial date and time when the record was created | [optional] 
**CreatedBy** | Pointer to [**Identity2**](identity2) |  | [optional] 
**Modified** | Pointer to **SailPointTime** | Last modified date and time for the record | [optional] 
**ModifiedBy** | Pointer to [**Identity2**](identity2) |  | [optional] 

## Methods

### NewAuditdetails

`func NewAuditdetails() *Auditdetails`

NewAuditdetails instantiates a new Auditdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuditdetailsWithDefaults

`func NewAuditdetailsWithDefaults() *Auditdetails`

NewAuditdetailsWithDefaults instantiates a new Auditdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreated

`func (o *Auditdetails) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Auditdetails) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Auditdetails) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Auditdetails) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetCreatedBy

`func (o *Auditdetails) GetCreatedBy() Identity2`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *Auditdetails) GetCreatedByOk() (*Identity2, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *Auditdetails) SetCreatedBy(v Identity2)`

SetCreatedBy sets CreatedBy field to given value.

### HasCreatedBy

`func (o *Auditdetails) HasCreatedBy() bool`

HasCreatedBy returns a boolean if a field has been set.

### GetModified

`func (o *Auditdetails) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Auditdetails) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Auditdetails) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Auditdetails) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetModifiedBy

`func (o *Auditdetails) GetModifiedBy() Identity2`

GetModifiedBy returns the ModifiedBy field if non-nil, zero value otherwise.

### GetModifiedByOk

`func (o *Auditdetails) GetModifiedByOk() (*Identity2, bool)`

GetModifiedByOk returns a tuple with the ModifiedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedBy

`func (o *Auditdetails) SetModifiedBy(v Identity2)`

SetModifiedBy sets ModifiedBy field to given value.

### HasModifiedBy

`func (o *Auditdetails) HasModifiedBy() bool`

HasModifiedBy returns a boolean if a field has been set.


